package com.example.elevasi.feature.dashboard

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import com.example.elevasi.data.model.PresenceStatusDto
import com.example.elevasi.data.model.ReactionDto
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.repository.PresenceRepository
import kotlinx.coroutines.async
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

enum class PresenceAction(
    val apiValue: String,
    val label: String,
    val defaultMessage: String
) {
    FOCUS(
        apiValue = "fokus",
        label = "Fokus",
        defaultMessage = "Aku lagi fokus penuh. Temani aku dengan tenang, ya."
    ),
    REST(
        apiValue = "istirahat",
        label = "Istirahat",
        defaultMessage = "Aku sedang jeda sebentar untuk menata napas dan energi."
    ),
    OFFLINE(
        apiValue = "offline",
        label = "Offline",
        defaultMessage = "Aku offline dulu sebentar, nanti kembali lagi."
    );

    companion object {
        fun fromApiValue(value: String): PresenceAction {
            return entries.firstOrNull { it.apiValue == value } ?: OFFLINE
        }
    }
}

data class DashboardUiState(
    val currentUserId: String,
    val currentUserName: String,
    val partnerUserId: String,
    val partnerUserName: String,
    val isLoading: Boolean = true,
    val isSubmittingStatus: Boolean = false,
    val isSendingReaction: Boolean = false,
    val myStatus: PresenceStatusDto? = null,
    val partnerStatus: PresenceStatusDto? = null,
    val selectedStatus: PresenceAction = PresenceAction.FOCUS,
    val draftMessage: String = PresenceAction.FOCUS.defaultMessage,
    val incomingReaction: ReactionDto? = null,
    val reactionOptions: List<String> = listOf("\u2764\uFE0F", "\u2728", "\uD83D\uDCAA", "\u2615"),
    val errorMessage: String? = null
)

class DashboardViewModel(
    private val session: UserSessionDto,
    private val repository: PresenceRepository = PresenceRepository()
) : ViewModel() {

    private val _uiState = MutableStateFlow(
        DashboardUiState(
            currentUserId = session.userId,
            currentUserName = session.name,
            partnerUserId = session.partnerId,
            partnerUserName = session.partnerName
        )
    )
    val uiState: StateFlow<DashboardUiState> = _uiState.asStateFlow()

    private var reactionOverlayJob: kotlinx.coroutines.Job? = null

    fun loadDashboard() {
        viewModelScope.launch {
            val snapshot = _uiState.value
            val isPartnerConnected = snapshot.partnerUserId.isNotBlank()
            val myFallback = snapshot.myStatus ?: repository.fallbackStatus(
                userId = snapshot.currentUserId,
                displayName = snapshot.currentUserName
            )
            val partnerFallback = snapshot.partnerStatus ?: if (isPartnerConnected) {
                repository.fallbackStatus(
                    userId = snapshot.partnerUserId,
                    displayName = snapshot.partnerUserName
                )
            } else {
                PresenceStatusDto(
                    userId = "",
                    status = "offline",
                    message = "Teman belum bergabung ke Elevasi.",
                    updatedAt = ""
                )
            }

            _uiState.update { current ->
                current.copy(
                    isLoading = true,
                    errorMessage = null
                )
            }

            val myResultDeferred = async {
                runCatching {
                    repository.getStatus(snapshot.currentUserId)
                }
            }
            val partnerResultDeferred = async {
                if (isPartnerConnected) {
                    runCatching {
                        repository.getStatus(snapshot.partnerUserId)
                    }
                } else {
                    Result.failure<PresenceStatusDto>(
                        IllegalStateException("Teman belum terhubung.")
                    )
                }
            }
            val reactionResultDeferred = async {
                runCatching {
                    repository.getIncomingReaction(snapshot.currentUserId)
                }
            }

            val myResult = myResultDeferred.await()
            val partnerResult = partnerResultDeferred.await()
            val reactionResult = reactionResultDeferred.await()

            val nextMyStatus = myResult.getOrElse { myFallback }
            val nextPartnerStatus = partnerResult.getOrElse { partnerFallback }
            val reactionInbox = reactionResult.getOrNull()
            val incomingReaction = reactionInbox?.reaction?.takeIf { reactionInbox.hasReaction }

            _uiState.update { current ->
                val nextSelected = PresenceAction.fromApiValue(nextMyStatus.status)
                val shouldReplaceDraft = current.myStatus == null ||
                    current.draftMessage.isBlank() ||
                    current.draftMessage == current.selectedStatus.defaultMessage ||
                    current.draftMessage == current.myStatus?.message

                current.copy(
                    isLoading = false,
                    myStatus = nextMyStatus,
                    partnerStatus = nextPartnerStatus,
                    selectedStatus = nextSelected,
                    draftMessage = if (shouldReplaceDraft) nextMyStatus.message else current.draftMessage,
                    errorMessage = if (
                        myResult.isSuccess &&
                        (partnerResult.isSuccess || !isPartnerConnected) &&
                        reactionResult.isSuccess
                    ) {
                        null
                    } else {
                        "Data terbaru belum sepenuhnya berhasil dimuat."
                    }
                )
            }

            incomingReaction?.let(::showIncomingReaction)
        }
    }

    fun updateDraftMessage(message: String) {
        _uiState.update { current ->
            current.copy(draftMessage = message)
        }
    }

    fun selectStatus(action: PresenceAction) {
        _uiState.update { current ->
            val shouldReplaceDraft = current.draftMessage.isBlank() ||
                current.draftMessage == current.selectedStatus.defaultMessage ||
                current.draftMessage == current.myStatus?.message

            current.copy(
                selectedStatus = action,
                draftMessage = if (shouldReplaceDraft) action.defaultMessage else current.draftMessage
            )
        }
    }

    fun submitMyStatus() {
        val snapshot = _uiState.value
        val message = snapshot.draftMessage.trim().ifBlank {
            snapshot.selectedStatus.defaultMessage
        }

        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isSubmittingStatus = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.updateStatus(
                    userId = snapshot.currentUserId,
                    status = snapshot.selectedStatus.apiValue,
                    message = message
                )
            }.fold(
                onSuccess = { updatedStatus ->
                    _uiState.update { current ->
                        current.copy(
                            isLoading = false,
                            isSubmittingStatus = false,
                            myStatus = updatedStatus,
                            selectedStatus = PresenceAction.fromApiValue(updatedStatus.status),
                            draftMessage = updatedStatus.message,
                            errorMessage = null
                        )
                    }
                },
                onFailure = {
                    _uiState.update { current ->
                        current.copy(
                            isLoading = false,
                            isSubmittingStatus = false,
                            errorMessage = "Gagal memperbarui status saya."
                        )
                    }
                }
            )
        }
    }

    fun sendReaction(emoji: String) {
        val snapshot = _uiState.value
        if (snapshot.partnerUserId.isBlank()) {
            _uiState.update { current ->
                current.copy(
                    errorMessage = "Reaction baru bisa dikirim setelah teman selesai onboarding."
                )
            }
            return
        }

        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isSendingReaction = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.sendReaction(
                    targetUserId = snapshot.partnerUserId,
                    fromUserId = snapshot.currentUserId,
                    emoji = emoji
                )
            }.fold(
                onSuccess = {
                    _uiState.update { current ->
                        current.copy(
                            isSendingReaction = false,
                            errorMessage = null
                        )
                    }
                },
                onFailure = {
                    _uiState.update { current ->
                        current.copy(
                            isSendingReaction = false,
                            errorMessage = "Reaksi belum berhasil dikirim."
                        )
                    }
                }
            )
        }
    }

    override fun onCleared() {
        reactionOverlayJob?.cancel()
        super.onCleared()
    }

    private fun showIncomingReaction(reaction: ReactionDto) {
        reactionOverlayJob?.cancel()
        _uiState.update { current ->
            current.copy(incomingReaction = reaction)
        }

        reactionOverlayJob = viewModelScope.launch {
            delay(REACTION_OVERLAY_MS)
            _uiState.update { current ->
                if (current.incomingReaction?.id == reaction.id) {
                    current.copy(incomingReaction = null)
                } else {
                    current
                }
            }
        }
    }

    companion object {
        fun factory(session: UserSessionDto): ViewModelProvider.Factory = viewModelFactory {
            initializer {
                DashboardViewModel(session = session)
            }
        }

        private const val REACTION_OVERLAY_MS = 4_000L
    }
}
