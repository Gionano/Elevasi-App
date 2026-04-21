package com.example.elevasi.app

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.elevasi.BuildConfig
import com.example.elevasi.data.model.AppUpdateInfoDto
import com.example.elevasi.data.repository.AppUpdateRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class InAppUpdateUiState(
    val isChecking: Boolean = false,
    val availableUpdate: AppUpdateInfoDto? = null
)

class InAppUpdateViewModel(
    private val repository: AppUpdateRepository = AppUpdateRepository()
) : ViewModel() {

    private val _uiState = MutableStateFlow(
        InAppUpdateUiState(isChecking = true)
    )
    val uiState: StateFlow<InAppUpdateUiState> = _uiState.asStateFlow()

    init {
        checkForUpdates()
    }

    fun checkForUpdates() {
        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(isChecking = true)
            }

            runCatching {
                repository.checkForUpdate()
            }.fold(
                onSuccess = { updateInfo ->
                    _uiState.value = InAppUpdateUiState(
                        isChecking = false,
                        availableUpdate = updateInfo.takeIf(::isNewerThanLocal)
                    )
                },
                onFailure = {
                    _uiState.value = InAppUpdateUiState(isChecking = false)
                }
            )
        }
    }

    fun dismissUpdateDialog() {
        _uiState.update { current ->
            current.copy(availableUpdate = null)
        }
    }

    private fun isNewerThanLocal(updateInfo: AppUpdateInfoDto): Boolean {
        return updateInfo.latestVersionCode > BuildConfig.VERSION_CODE
    }
}
