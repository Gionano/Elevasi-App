package com.example.elevasi.feature.mading

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import com.example.elevasi.data.model.StickyNoteDto
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.remote.MadingSocketEvent
import com.example.elevasi.data.repository.MadingRepository
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

private val StickyNotePalette = listOf(
    "#FBE4EC",
    "#FDE9C9",
    "#E7F4D7",
    "#DDEFFC",
    "#EEE4FF"
)

data class InteractiveMadingUiState(
    val currentUserName: String,
    val partnerUserName: String,
    val isLoading: Boolean = true,
    val isCreatingNote: Boolean = false,
    val isRealtimeConnected: Boolean = false,
    val notes: List<StickyNoteDto> = emptyList(),
    val draftText: String = "",
    val selectedColor: String = StickyNotePalette.first(),
    val availableColors: List<String> = StickyNotePalette,
    val errorMessage: String? = null
)

class InteractiveMadingViewModel(
    private val session: UserSessionDto,
    private val repository: MadingRepository = MadingRepository()
) : ViewModel() {

    private val _uiState = MutableStateFlow(
        InteractiveMadingUiState(
            currentUserName = session.name,
            partnerUserName = session.partnerName
        )
    )
    val uiState: StateFlow<InteractiveMadingUiState> = _uiState.asStateFlow()

    private val pendingMoves = mutableMapOf<Int, StickyNoteDto>()
    private val moveJobs = mutableMapOf<Int, Job>()

    init {
        observeRealtime()
        repository.connectRealtime()
        loadBoard()
    }

    fun loadBoard() {
        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isLoading = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.getStickyNotes()
            }.fold(
                onSuccess = { notes ->
                    _uiState.update { current ->
                        current.copy(
                            isLoading = false,
                            notes = notes.sortedBy { it.id },
                            errorMessage = null
                        )
                    }
                },
                onFailure = {
                    _uiState.update { current ->
                        current.copy(
                            isLoading = false,
                            errorMessage = "Mading belum berhasil dimuat dari server."
                        )
                    }
                }
            )
        }
    }

    fun updateDraftText(text: String) {
        _uiState.update { current ->
            current.copy(draftText = text.take(220))
        }
    }

    fun selectColor(color: String) {
        _uiState.update { current ->
            current.copy(selectedColor = color)
        }
    }

    fun createStickyNote() {
        val snapshot = _uiState.value
        val text = snapshot.draftText.trim()
        if (text.isBlank()) {
            _uiState.update { current ->
                current.copy(errorMessage = "Tulis isi sticky note dulu.")
            }
            return
        }

        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isCreatingNote = true,
                    errorMessage = null
                )
            }

            runCatching {
                repository.createStickyNote(
                    text = text,
                    color = snapshot.selectedColor
                )
            }.fold(
                onSuccess = { note ->
                    upsertNote(note)
                    _uiState.update { current ->
                        val nextColorIndex =
                            (current.availableColors.indexOf(current.selectedColor) + 1) %
                                current.availableColors.size
                        current.copy(
                            isCreatingNote = false,
                            draftText = "",
                            selectedColor = current.availableColors[nextColorIndex]
                        )
                    }
                },
                onFailure = {
                    _uiState.update { current ->
                        current.copy(
                            isCreatingNote = false,
                            errorMessage = "Sticky note belum berhasil ditempel ke papan."
                        )
                    }
                }
            )
        }
    }

    fun updateNotePosition(
        noteId: Int,
        xPosition: Float,
        yPosition: Float,
        rotation: Float
    ) {
        val updatedNote = _uiState.value.notes.firstOrNull { it.id == noteId }?.copy(
            xPosition = xPosition,
            yPosition = yPosition,
            rotation = rotation
        ) ?: return

        upsertNote(updatedNote)
        queueMove(updatedNote, immediate = false)
    }

    fun finishNoteDrag(noteId: Int) {
        val latestNote = _uiState.value.notes.firstOrNull { it.id == noteId } ?: return
        queueMove(latestNote, immediate = true)
    }

    private fun observeRealtime() {
        viewModelScope.launch {
            repository.isConnected.collect { connected ->
                _uiState.update { current ->
                    current.copy(isRealtimeConnected = connected)
                }
            }
        }

        viewModelScope.launch {
            repository.events.collect { event ->
                when (event) {
                    is MadingSocketEvent.NoteCreated -> upsertNote(event.note)
                    is MadingSocketEvent.NoteMoved -> upsertNote(event.note)
                    is MadingSocketEvent.Error -> {
                        _uiState.update { current ->
                            current.copy(errorMessage = event.message)
                        }
                    }
                }
            }
        }
    }

    private fun queueMove(note: StickyNoteDto, immediate: Boolean) {
        pendingMoves[note.id] = note

        if (immediate) {
            moveJobs.remove(note.id)?.cancel()
            viewModelScope.launch {
                flushLatestMove(note.id, showError = true)
            }
            return
        }

        if (moveJobs[note.id]?.isActive == true) return

        moveJobs[note.id] = viewModelScope.launch {
            while (true) {
                val sent = flushLatestMove(note.id, showError = false)
                if (!sent) break
                delay(72)
                if (pendingMoves[note.id] == null) break
            }
            moveJobs.remove(note.id)
        }
    }

    private fun flushLatestMove(
        noteId: Int,
        showError: Boolean
    ): Boolean {
        val note = pendingMoves.remove(noteId) ?: return false
        val wasSent = repository.sendMove(note)

        if (!wasSent && showError) {
            _uiState.update { current ->
                current.copy(
                    errorMessage = "Koneksi realtime mading belum aktif. Coba geser lagi setelah tersambung."
                )
            }
        }

        return wasSent
    }

    private fun upsertNote(note: StickyNoteDto) {
        _uiState.update { current ->
            val updatedNotes = current.notes
                .filterNot { it.id == note.id }
                .plus(note)
                .sortedBy { it.id }

            current.copy(
                notes = updatedNotes,
                errorMessage = null
            )
        }
    }

    override fun onCleared() {
        moveJobs.values.forEach(Job::cancel)
        moveJobs.clear()
        pendingMoves.clear()
        repository.disconnectRealtime()
        super.onCleared()
    }

    companion object {
        fun factory(session: UserSessionDto): ViewModelProvider.Factory = viewModelFactory {
            initializer {
                InteractiveMadingViewModel(session = session)
            }
        }
    }
}
