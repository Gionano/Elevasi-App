package com.example.elevasi.app

import android.content.Context
import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import androidx.lifecycle.viewmodel.initializer
import androidx.lifecycle.viewmodel.viewModelFactory
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.repository.SessionRepository
import java.time.DateTimeException
import java.time.MonthDay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class AppEntryUiState(
    val isLoading: Boolean = true,
    val isRegistering: Boolean = false,
    val nameInput: String = "",
    val birthdayDayInput: String = "",
    val birthdayMonthInput: String = "",
    val session: UserSessionDto? = null,
    val errorMessage: String? = null
)

class AppEntryViewModel(
    private val sessionRepository: SessionRepository
) : ViewModel() {

    private val _uiState = MutableStateFlow(AppEntryUiState())
    val uiState: StateFlow<AppEntryUiState> = _uiState.asStateFlow()

    init {
        val savedSession = sessionRepository.getSavedSession()
        _uiState.value = AppEntryUiState(
            isLoading = false,
            session = savedSession
        )
        if (savedSession != null) {
            refreshSavedSession(savedSession)
        }
    }

    fun updateNameInput(value: String) {
        _uiState.update { current ->
            current.copy(
                nameInput = value,
                errorMessage = null
            )
        }
    }

    fun updateBirthdayDayInput(value: String) {
        _uiState.update { current ->
            current.copy(
                birthdayDayInput = value.filter(Char::isDigit).take(2),
                errorMessage = null
            )
        }
    }

    fun updateBirthdayMonthInput(value: String) {
        _uiState.update { current ->
            current.copy(
                birthdayMonthInput = value.filter(Char::isDigit).take(2),
                errorMessage = null
            )
        }
    }

    fun registerName() {
        val snapshot = _uiState.value
        val typedName = snapshot.nameInput.trim()
        if (typedName.isBlank()) {
            _uiState.update { current ->
                current.copy(errorMessage = "Masukkan nama terlebih dahulu.")
            }
            return
        }

        val birthdayDay = snapshot.birthdayDayInput.toIntOrNull()
        val birthdayMonth = snapshot.birthdayMonthInput.toIntOrNull()

        if (birthdayDay == null || birthdayMonth == null) {
            _uiState.update { current ->
                current.copy(errorMessage = "Masukkan tanggal dan bulan ulang tahun.")
            }
            return
        }

        try {
            MonthDay.of(birthdayMonth, birthdayDay)
        } catch (_: DateTimeException) {
            _uiState.update { current ->
                current.copy(errorMessage = "Tanggal ulang tahun tidak valid.")
            }
            return
        }

        viewModelScope.launch {
            _uiState.update { current ->
                current.copy(
                    isRegistering = true,
                    errorMessage = null
                )
            }

            runCatching {
                sessionRepository.registerName(
                    name = typedName,
                    birthdayMonth = birthdayMonth,
                    birthdayDay = birthdayDay
                )
            }.fold(
                onSuccess = { session ->
                    _uiState.update { current ->
                        current.copy(
                            isRegistering = false,
                            session = session,
                            birthdayDayInput = "",
                            birthdayMonthInput = "",
                            errorMessage = null
                        )
                    }
                },
                onFailure = {
                    _uiState.update { current ->
                        current.copy(
                            isRegistering = false,
                            errorMessage = "Registrasi gagal. Pastikan server aktif dan pair ini belum terisi dua pengguna lain."
                        )
                    }
                }
            )
        }
    }

    private fun refreshSavedSession(savedSession: UserSessionDto) {
        viewModelScope.launch {
            runCatching {
                sessionRepository.refreshSession(savedSession.userId)
            }.onSuccess { refreshedSession ->
                _uiState.update { current ->
                    current.copy(
                        session = refreshedSession,
                        errorMessage = null
                    )
                }
            }
        }
    }

    companion object {
        fun factory(context: Context): ViewModelProvider.Factory = viewModelFactory {
            initializer {
                AppEntryViewModel(
                    sessionRepository = SessionRepository(context)
                )
            }
        }
    }
}
