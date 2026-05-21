package com.example.elevasi.feature.tutorial

import androidx.compose.ui.geometry.Rect
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.example.elevasi.core.navigation.ElevasiDestination
import com.example.elevasi.data.ThemePreferencesManager
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

enum class TutorialStep {
    WELCOME,
    BERANDA,
    WRITE_POST,
    TAMAN,
    MADING,
    VERSE,
    DIALOG,
    PROFILE,
    COMPLETED
}

data class TutorialUiState(
    val isTutorialActive: Boolean = false,
    val currentStep: TutorialStep = TutorialStep.WELCOME,
    val tabCoordinates: Map<ElevasiDestination, Rect> = emptyMap(),
    val fabCoordinates: Rect? = null,
    val profileCoordinates: Rect? = null,
    val hasCompletedDataStore: Boolean = false,
    val hasLoadedFromDataStore: Boolean = false
)

class TutorialViewModel(
    private val preferencesManager: ThemePreferencesManager
) : ViewModel() {

    private val _uiState = MutableStateFlow(TutorialUiState())
    val uiState: StateFlow<TutorialUiState> = _uiState.asStateFlow()

    init {
        viewModelScope.launch {
            preferencesManager.tutorialCompletedFlow.collect { completed ->
                _uiState.update {
                    it.copy(
                        hasCompletedDataStore = completed,
                        hasLoadedFromDataStore = true
                    )
                }
            }
        }
    }

    fun updateTabCoordinates(destination: ElevasiDestination, rect: Rect) {
        _uiState.update { state ->
            val updated = state.tabCoordinates.toMutableMap().apply {
                put(destination, rect)
            }
            state.copy(tabCoordinates = updated)
        }
    }

    fun updateFabCoordinates(rect: Rect?) {
        _uiState.update { it.copy(fabCoordinates = rect) }
    }

    fun updateProfileCoordinates(rect: Rect?) {
        _uiState.update { it.copy(profileCoordinates = rect) }
    }

    fun startTutorial() {
        _uiState.update {
            it.copy(
                isTutorialActive = true,
                currentStep = TutorialStep.WELCOME
            )
        }
    }

    fun nextStep() {
        val current = _uiState.value.currentStep
        val steps = TutorialStep.values()
        val nextIndex = current.ordinal + 1
        if (nextIndex < steps.size) {
            val nextStep = steps[nextIndex]
            _uiState.update { it.copy(currentStep = nextStep) }
        } else {
            completeTutorial()
        }
    }

    fun previousStep() {
        val current = _uiState.value.currentStep
        val steps = TutorialStep.values()
        val prevIndex = current.ordinal - 1
        if (prevIndex >= 0) {
            val prevStep = steps[prevIndex]
            _uiState.update { it.copy(currentStep = prevStep) }
        }
    }

    fun skipTutorial() {
        completeTutorial()
    }

    fun completeTutorial() {
        _uiState.update {
            it.copy(
                isTutorialActive = false,
                currentStep = TutorialStep.WELCOME
            )
        }
        viewModelScope.launch {
            preferencesManager.setTutorialCompleted(true)
        }
    }

    companion object {
        fun factory(preferencesManager: ThemePreferencesManager): ViewModelProvider.Factory =
            object : ViewModelProvider.Factory {
                @Suppress("UNCHECKED_CAST")
                override fun <T : ViewModel> create(modelClass: Class<T>): T {
                    return TutorialViewModel(preferencesManager) as T
                }
            }
    }
}
