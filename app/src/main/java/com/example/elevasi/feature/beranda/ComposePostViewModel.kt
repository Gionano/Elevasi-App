package com.example.elevasi.feature.beranda

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.model.FeedPostCreateRequest
import com.example.elevasi.data.remote.RetrofitClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import android.content.Context
import android.net.Uri
import android.webkit.MimeTypeMap
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.toRequestBody

data class ComposePostUiState(
    val isSubmitting: Boolean = false,
    val isSuccess: Boolean = false,
    val errorMessage: String? = null
)

class ComposePostViewModel : ViewModel() {
    private val api = RetrofitClient.apiService
    private val _uiState = MutableStateFlow(ComposePostUiState())
    val uiState: StateFlow<ComposePostUiState> = _uiState.asStateFlow()

    fun submitPost(content: String, authorName: String, imageUris: List<Uri>, context: Context) {
        viewModelScope.launch {
            _uiState.update { it.copy(isSubmitting = true, errorMessage = null) }
            try {
                val imageParts = imageUris.mapIndexedNotNull { index, uri ->
                    val mimeType = context.contentResolver.getType(uri) ?: "image/jpeg"
                    val extension = MimeTypeMap.getSingleton().getExtensionFromMimeType(mimeType) ?: if (mimeType.startsWith("video")) "mp4" else "jpg"
                    
                    val bytes = withContext(Dispatchers.IO) {
                        context.contentResolver.openInputStream(uri)?.use { it.readBytes() }
                    }
                    if (bytes != null) {
                        val requestBody = bytes.toRequestBody(mimeType.toMediaTypeOrNull())
                        MultipartBody.Part.createFormData("files", "upload_${index}_${System.currentTimeMillis()}.$extension", requestBody)
                    } else null
                }
                
                val contentBody = content.trim().toRequestBody("text/plain".toMediaTypeOrNull())
                val authorNameBody = authorName.toRequestBody("text/plain".toMediaTypeOrNull())

                api.createPost(contentBody, authorNameBody, if (imageParts.isNotEmpty()) imageParts else null)
                _uiState.update { it.copy(isSubmitting = false, isSuccess = true) }
            } catch (e: Exception) {
                _uiState.update { it.copy(isSubmitting = false, errorMessage = "Gagal mengirim: ${e.message}") }
            }
        }
    }
}
