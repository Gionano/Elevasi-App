package com.example.elevasi.feature.beranda

import android.content.Context
import android.net.Uri
import android.webkit.MimeTypeMap
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.model.ReplyDto
import com.example.elevasi.data.remote.RetrofitClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.MultipartBody
import okhttp3.RequestBody.Companion.asRequestBody
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.File
import java.io.FileOutputStream

data class ReplyUiState(
    val replies: List<ReplyDto> = emptyList(),
    val isLoading: Boolean = false,
    val isSubmitting: Boolean = false,
    val errorMessage: String? = null
)

class ReplyViewModel : ViewModel() {
    private val api = RetrofitClient.apiService
    private val _uiState = MutableStateFlow(ReplyUiState())
    val uiState: StateFlow<ReplyUiState> = _uiState.asStateFlow()

    fun loadReplies(postId: Int) {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, errorMessage = null) }
            try {
                val replies = api.getReplies(postId)
                _uiState.update { it.copy(replies = replies, isLoading = false) }
            } catch (e: Exception) {
                _uiState.update { it.copy(isLoading = false, errorMessage = "Gagal memuat balasan: ${e.message}") }
            }
        }
    }

    fun submitReply(
        context: Context,
        postId: Int,
        content: String,
        authorName: String,
        imageUris: List<Uri>,
        onSuccess: () -> Unit
    ) {
        viewModelScope.launch {
            _uiState.update { it.copy(isSubmitting = true, errorMessage = null) }
            try {
                val contentBody = content.toRequestBody("text/plain".toMediaTypeOrNull())
                val authorBody = authorName.toRequestBody("text/plain".toMediaTypeOrNull())

                val imageParts = imageUris.mapIndexed { index, uri ->
                    val mimeType = context.contentResolver.getType(uri) ?: "image/jpeg"
                    val extension = MimeTypeMap.getSingleton().getExtensionFromMimeType(mimeType) ?: if (mimeType.startsWith("video")) "mp4" else "jpg"

                    val fileDir = context.cacheDir
                    val file = File(fileDir, "reply_upload_${System.currentTimeMillis()}_$index.$extension")
                    val inputStream = context.contentResolver.openInputStream(uri)
                    val outputStream = FileOutputStream(file)
                    inputStream?.copyTo(outputStream)
                    inputStream?.close()
                    outputStream.close()

                    val requestFile = file.asRequestBody(mimeType.toMediaTypeOrNull())
                    MultipartBody.Part.createFormData("files", file.name, requestFile)
                }

                api.createReply(
                    postId = postId,
                    content = contentBody,
                    authorName = authorBody,
                    files = if (imageParts.isNotEmpty()) imageParts else null
                )

                _uiState.update { it.copy(isSubmitting = false) }
                loadReplies(postId) // Reload list
                onSuccess()

            } catch (e: Exception) {
                _uiState.update { it.copy(isSubmitting = false, errorMessage = "Gagal mengirim balasan: ${e.message}") }
            }
        }
    }
}
