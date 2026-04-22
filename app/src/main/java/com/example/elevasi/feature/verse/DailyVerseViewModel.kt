package com.example.elevasi.feature.verse

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.model.DailyVerseDto
import com.example.elevasi.data.repository.VerseRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.time.LocalDate

data class DailyVerseUiState(
    val isLoading: Boolean = true,
    val verse: DailyVerseDto? = null,
    val errorMessage: String? = null
)

class DailyVerseViewModel(
    private val repository: VerseRepository = VerseRepository()
) : ViewModel() {
    private val _uiState = MutableStateFlow(DailyVerseUiState())
    val uiState: StateFlow<DailyVerseUiState> = _uiState.asStateFlow()
    private var lastLoadedDate: LocalDate? = null

    init {
        loadDailyVerse()
    }

    fun refreshIfNeeded() {
        val today = LocalDate.now()
        if (_uiState.value.verse == null || lastLoadedDate != today) {
            loadDailyVerse(force = true)
        }
    }

    fun loadDailyVerse(force: Boolean = false) {
        val today = LocalDate.now()
        if (!force && _uiState.value.verse != null && lastLoadedDate == today) {
            return
        }

        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, errorMessage = null)

            _uiState.value = runCatching {
                repository.getTodayVerse()
            }.fold(
                onSuccess = { verse ->
                    lastLoadedDate = today
                    DailyVerseUiState(
                        isLoading = false,
                        verse = verse
                    )
                },
                onFailure = {
                    lastLoadedDate = today
                    DailyVerseUiState(
                        isLoading = false,
                        verse = repository.fallbackVerse(),
                        errorMessage = "Verse API belum terjangkau. Menampilkan konten fallback lokal."
                    )
                }
            )
        }
    }
}
