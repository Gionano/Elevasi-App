package com.example.elevasi.feature.verse

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.model.DailyVerseDto
import com.example.elevasi.data.repository.VerseRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

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

    init {
        loadDailyVerse()
    }

    fun loadDailyVerse() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true, errorMessage = null)

            _uiState.value = runCatching {
                repository.getTodayVerse()
            }.fold(
                onSuccess = { verse ->
                    DailyVerseUiState(
                        isLoading = false,
                        verse = verse
                    )
                },
                onFailure = {
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
