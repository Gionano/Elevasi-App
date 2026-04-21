package com.example.elevasi.app

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import com.example.elevasi.core.birthday.BirthdayProfiles
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.repository.BirthdayRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class BirthdayModeUiState(
    val isLoading: Boolean = true,
    val isMyBirthday: Boolean = false,
    val errorMessage: String? = null
)

class BirthdayModeViewModel(
    private val session: UserSessionDto,
    private val repository: BirthdayRepository = BirthdayRepository()
) : ViewModel() {

    private val _uiState = MutableStateFlow(BirthdayModeUiState())
    val uiState: StateFlow<BirthdayModeUiState> = _uiState.asStateFlow()

    init {
        refresh()
    }

    fun refresh() {
        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isLoading = true,
                    errorMessage = null
                )
            }

            val localFallback = BirthdayProfiles.isBirthdayToday(
                month = session.birthdayMonth,
                day = session.birthdayDay
            )

            runCatching {
                repository.isMyBirthday(session.userId)
            }.fold(
                onSuccess = { result ->
                    _uiState.value = BirthdayModeUiState(
                        isLoading = false,
                        isMyBirthday = result.isMyBirthday
                    )
                },
                onFailure = {
                    _uiState.value = BirthdayModeUiState(
                        isLoading = false,
                        isMyBirthday = localFallback,
                        errorMessage = if (localFallback) {
                            null
                        } else {
                            "Mode ulang tahun memakai fallback lokal karena server belum terjangkau."
                        }
                    )
                }
            )
        }
    }

    companion object {
        fun factory(session: UserSessionDto): ViewModelProvider.Factory = viewModelFactory {
            initializer {
                BirthdayModeViewModel(session = session)
            }
        }
    }
}
