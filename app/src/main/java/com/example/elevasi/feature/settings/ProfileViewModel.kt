package com.example.elevasi.feature.settings

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.model.ProfileDto
import com.example.elevasi.data.model.ProfileUpdateRequest
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.AvatarCache
import com.example.elevasi.data.remote.RetrofitClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import android.content.Context
import android.net.Uri
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.toRequestBody

data class ProfileUiState(
    val isLoading: Boolean = true,
    val isSaving: Boolean = false,
    val isUploading: Boolean = false,
    val displayName: String = "",
    val bio: String = "",
    val birthdayMonth: Int = 1,
    val birthdayDay: Int = 1,
    val avatarUrl: String = "",
    val serverOnline: Boolean = false,
    val saveSuccess: Boolean = false,
    val errorMessage: String? = null
)

class ProfileViewModel(
    private val session: UserSessionDto
) : ViewModel() {

    private val api = RetrofitClient.apiService
    private val _uiState = MutableStateFlow(ProfileUiState())
    val uiState: StateFlow<ProfileUiState> = _uiState.asStateFlow()

    init {
        loadProfile()
        checkServerHealth()
    }

    private fun loadProfile() {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, errorMessage = null) }
            try {
                val profile = api.getMyProfile(session.userId)
                _uiState.update {
                    it.copy(
                        isLoading = false,
                        displayName = profile.displayName,
                        bio = profile.bio,
                        birthdayMonth = profile.birthdayMonth,
                        birthdayDay = profile.birthdayDay,
                        avatarUrl = profile.avatarUrl
                    )
                }
                // Update shared cache so TopBar/Feed/Reply show the avatar
                AvatarCache.set(profile.displayName, profile.avatarUrl)
            } catch (e: Exception) {
                // Fallback to session data if profile endpoint not yet available
                _uiState.update {
                    it.copy(
                        isLoading = false,
                        displayName = session.name,
                        bio = "",
                        birthdayMonth = session.birthdayMonth,
                        birthdayDay = session.birthdayDay,
                        avatarUrl = ""
                    )
                }
            }
        }
    }

    private fun checkServerHealth() {
        viewModelScope.launch {
            try {
                val health = api.getHealth()
                _uiState.update { it.copy(serverOnline = health.status == "ok") }
            } catch (_: Exception) {
                _uiState.update { it.copy(serverOnline = false) }
            }
        }
    }

    fun updateDisplayName(value: String) {
        _uiState.update { it.copy(displayName = value, saveSuccess = false) }
    }

    fun updateBio(value: String) {
        _uiState.update { it.copy(bio = value, saveSuccess = false) }
    }

    fun updateBirthday(month: Int, day: Int) {
        _uiState.update {
            it.copy(birthdayMonth = month, birthdayDay = day, saveSuccess = false)
        }
    }

    fun saveProfile() {
        viewModelScope.launch {
            _uiState.update { it.copy(isSaving = true, errorMessage = null, saveSuccess = false) }
            try {
                val request = ProfileUpdateRequest(
                    displayName = _uiState.value.displayName.trim(),
                    bio = _uiState.value.bio.trim(),
                    birthdayMonth = _uiState.value.birthdayMonth,
                    birthdayDay = _uiState.value.birthdayDay
                )
                api.updateMyProfile(session.userId, request)
                _uiState.update { it.copy(isSaving = false, saveSuccess = true) }
            } catch (e: Exception) {
                _uiState.update {
                    it.copy(
                        isSaving = false,
                        errorMessage = "Gagal menyimpan: ${e.localizedMessage}"
                    )
                }
            }
        }
    }

    fun clearSaveSuccess() {
        _uiState.update { it.copy(saveSuccess = false) }
    }

    fun uploadAvatar(context: Context, uri: Uri) {
        viewModelScope.launch {
            _uiState.update { it.copy(isUploading = true, errorMessage = null) }
            try {
                val inputStream = context.contentResolver.openInputStream(uri)
                val bytes = inputStream?.readBytes() ?: throw Exception("Cannot read image")
                inputStream.close()
                
                val reqFile = bytes.toRequestBody("image/*".toMediaTypeOrNull())
                val body = MultipartBody.Part.createFormData("file", "avatar.jpg", reqFile)
                
                val response = api.uploadAvatar(session.userId, body)
                _uiState.update { it.copy(isUploading = false, avatarUrl = response.avatarUrl, saveSuccess = true) }
                // Update shared cache with timestamp for cache-busting
                val cacheBusted = "${response.avatarUrl}?t=${System.currentTimeMillis()}"
                AvatarCache.set(_uiState.value.displayName, cacheBusted)
            } catch (e: Exception) {
                _uiState.update {
                    it.copy(
                        isUploading = false,
                        errorMessage = "Gagal mengupload avatar: ${e.localizedMessage}"
                    )
                }
            }
        }
    }

    fun removeAvatar() {
        viewModelScope.launch {
            _uiState.update { it.copy(isUploading = true, errorMessage = null) }
            try {
                api.deleteAvatar(session.userId)
                _uiState.update { it.copy(isUploading = false, avatarUrl = "", saveSuccess = true) }
                AvatarCache.set(_uiState.value.displayName, "")
            } catch (e: Exception) {
                _uiState.update {
                    it.copy(
                        isUploading = false,
                        errorMessage = "Gagal menghapus avatar: ${e.localizedMessage}"
                    )
                }
            }
        }
    }

    companion object {
        fun factory(session: UserSessionDto): ViewModelProvider.Factory {
            return object : ViewModelProvider.Factory {
                @Suppress("UNCHECKED_CAST")
                override fun <T : ViewModel> create(modelClass: Class<T>): T {
                    return ProfileViewModel(session) as T
                }
            }
        }
    }
}
