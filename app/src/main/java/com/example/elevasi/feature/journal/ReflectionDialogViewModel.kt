package com.example.elevasi.feature.journal

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import com.example.elevasi.data.model.ReflectionDialogDto
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.repository.ReflectionRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

enum class ReflectionUiPhase {
    EMPTY,
    PARTIAL,
    REVEALED
}

data class ReflectionDialogUiState(
    val currentUserId: String,
    val currentUserName: String,
    val partnerUserName: String,
    val isLoading: Boolean = true,
    val isSubmitting: Boolean = false,
    val reflection: ReflectionDialogDto? = null,
    val draftAnswer: String = "",
    val phase: ReflectionUiPhase = ReflectionUiPhase.EMPTY,
    val errorMessage: String? = null
)

class ReflectionDialogViewModel(
    private val session: UserSessionDto,
    private val repository: ReflectionRepository = ReflectionRepository()
) : ViewModel() {

    private val _uiState = MutableStateFlow(
        ReflectionDialogUiState(
            currentUserId = session.userId,
            currentUserName = session.name,
            partnerUserName = session.partnerName
        )
    )
    val uiState: StateFlow<ReflectionDialogUiState> = _uiState.asStateFlow()

    fun loadReflection() {
        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isLoading = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.getCurrentReflection(_uiState.value.currentUserId)
            }.fold(
                onSuccess = { reflection ->
                    applyReflection(reflection)
                },
                onFailure = {
                    val fallback = _uiState.value.reflection ?: repository.fallbackReflection()
                    _uiState.update { current ->
                        current.copy(
                            isLoading = false,
                            reflection = fallback,
                            phase = phaseFrom(fallback.pairState),
                            errorMessage = "Ruang dialog belum berhasil dimuat."
                        )
                    }
                }
            )
        }
    }

    fun updateDraftAnswer(value: String) {
        _uiState.update { current ->
            current.copy(
                draftAnswer = value,
                errorMessage = null
            )
        }
    }

    fun submitAnswer() {
        val snapshot = _uiState.value
        val reflection = snapshot.reflection
        val answer = snapshot.draftAnswer.trim()

        if (reflection == null || reflection.questionId == 0) {
            _uiState.update { current ->
                current.copy(errorMessage = "Pertanyaan refleksi belum tersedia.")
            }
            return
        }

        if (answer.length < 20) {
            _uiState.update { current ->
                current.copy(errorMessage = "Jawaban minimal 20 karakter agar refleksinya benar-benar bermakna.")
            }
            return
        }

        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isSubmitting = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.submitReflection(
                    questionId = reflection.questionId,
                    userId = snapshot.currentUserId,
                    answerText = answer
                )
            }.fold(
                onSuccess = { updatedReflection ->
                    applyReflection(updatedReflection)
                    _uiState.update { current ->
                        current.copy(isSubmitting = false)
                    }
                },
                onFailure = {
                    _uiState.update { current ->
                        current.copy(
                            isSubmitting = false,
                            errorMessage = "Jawaban belum berhasil dikirim. Coba lagi sebentar."
                        )
                    }
                }
            )
        }
    }

    private fun applyReflection(reflection: ReflectionDialogDto) {
        _uiState.update { current ->
            val shouldAdoptServerAnswer = current.reflection?.myAnswer?.answerText == current.draftAnswer ||
                current.draftAnswer.isBlank() ||
                current.reflection == null

            current.copy(
                isLoading = false,
                reflection = reflection,
                phase = phaseFrom(reflection.pairState),
                draftAnswer = if (shouldAdoptServerAnswer) {
                    reflection.myAnswer?.answerText ?: current.draftAnswer
                } else {
                    current.draftAnswer
                },
                errorMessage = null
            )
        }
    }

    companion object {
        fun factory(session: UserSessionDto): ViewModelProvider.Factory = viewModelFactory {
            initializer {
                ReflectionDialogViewModel(session = session)
            }
        }

        private fun phaseFrom(pairState: String): ReflectionUiPhase {
            return when (pairState) {
                "REVEALED" -> ReflectionUiPhase.REVEALED
                "PARTIAL" -> ReflectionUiPhase.PARTIAL
                else -> ReflectionUiPhase.EMPTY
            }
        }
    }
}
