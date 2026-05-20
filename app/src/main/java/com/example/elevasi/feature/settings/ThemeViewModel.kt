package com.example.elevasi.feature.settings

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.ThemePreferencesManager
import com.example.elevasi.data.model.ThemePreferenceRequest
import com.example.elevasi.data.model.ThemeSelection
import com.example.elevasi.data.remote.RetrofitClient
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.stateIn
import kotlinx.coroutines.launch

class ThemeViewModel(
    private val themePreferencesManager: ThemePreferencesManager
) : ViewModel() {

    val themeState: StateFlow<ThemeSelection> = themePreferencesManager.themeSelectionFlow
        .stateIn(
            scope = viewModelScope,
            started = SharingStarted.WhileSubscribed(5000),
            initialValue = ThemeSelection.FOLLOW_SYSTEM
        )

    fun selectTheme(selection: ThemeSelection, userId: String? = null) {
        viewModelScope.launch {
            themePreferencesManager.setThemeSelection(selection)

            // If userId is provided, sync with FastAPI backend
            if (!userId.isNullOrBlank()) {
                try {
                    val api = RetrofitClient.apiService
                    api.updateThemePreference(
                        ThemePreferenceRequest(
                            userId = userId,
                            themePreference = selection.name
                        )
                    )
                } catch (e: Exception) {
                    // Fail silently or log (single-hosted app)
                    e.printStackTrace()
                }
            }
        }
    }

    /**
     * Called when profile is loaded to sync remote preference down to local DataStore if different.
     */
    fun syncThemeFromRemote(remotePreference: String?) {
        if (remotePreference.isNullOrBlank()) return
        viewModelScope.launch {
            try {
                val parsedSelection = ThemeSelection.valueOf(remotePreference.uppercase())
                if (themeState.value != parsedSelection) {
                    themePreferencesManager.setThemeSelection(parsedSelection)
                }
            } catch (e: Exception) {
                // Ignore parsing issues
            }
        }
    }

    companion object {
        fun factory(context: Context): ViewModelProvider.Factory {
            return object : ViewModelProvider.Factory {
                @Suppress("UNCHECKED_CAST")
                override fun <T : ViewModel> create(modelClass: Class<T>): T {
                    val manager = ThemePreferencesManager.getInstance(context)
                    return ThemeViewModel(manager) as T
                }
            }
        }
    }
}
