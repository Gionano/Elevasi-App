package com.example.elevasi.feature.beranda

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.elevasi.data.model.FeedPostDto
import com.example.elevasi.data.remote.RetrofitClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch
import retrofit2.HttpException

data class FeedUiState(
    val posts: List<FeedPostDto> = emptyList(),
    val likedPostIds: Set<Int> = emptySet(),
    val isLoading: Boolean = true,
    val errorMessage: String? = null,
    val pinErrorMessage: String? = null,
    val isBirthday: Boolean = false
)

class FeedViewModel : ViewModel() {
    private val api = RetrofitClient.apiService
    private val _uiState = MutableStateFlow(FeedUiState())
    val uiState: StateFlow<FeedUiState> = _uiState.asStateFlow()

    private var currentUserId: String = ""

    fun setUserId(userId: String) {
        if (currentUserId != userId) {
            currentUserId = userId
            loadFeed()
            checkBirthday()
        }
    }

    fun loadFeed() {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, errorMessage = null) }
            try {
                val posts = api.getFeed(userId = currentUserId)
                _uiState.update { it.copy(posts = posts, isLoading = false) }
            } catch (e: Exception) {
                _uiState.update { it.copy(isLoading = false, errorMessage = "Gagal memuat feed: ${e.message}") }
            }
        }
    }

    private fun checkBirthday() {
        if (currentUserId.isBlank()) return
        viewModelScope.launch {
            try {
                val result = api.isMyBirthday(currentUserId)
                _uiState.update { it.copy(isBirthday = result.isMyBirthday) }
            } catch (_: Exception) {
                // Non-critical — silently ignore
            }
        }
    }

    fun likePost(postId: Int) {
        val isCurrentlyLiked = _uiState.value.likedPostIds.contains(postId)
        
        if (isCurrentlyLiked) {
            // "Unlike" action: purely local since backend has no unlike endpoint yet
            _uiState.update { current ->
                current.copy(
                    likedPostIds = current.likedPostIds - postId,
                    posts = current.posts.map { post ->
                        if (post.id == postId) {
                            post.copy(likesCount = (post.likesCount - 1).coerceAtLeast(0))
                        } else post
                    }
                )
            }
            return // Skip API call
        }

        // "Like" action
        _uiState.update { current ->
            current.copy(
                likedPostIds = current.likedPostIds + postId,
                posts = current.posts.map { post ->
                    if (post.id == postId) {
                        post.copy(likesCount = post.likesCount + 1)
                    } else post
                }
            )
        }

        viewModelScope.launch {
            try {
                val response = api.likePost(postId)
                _uiState.update { current ->
                    current.copy(
                        posts = current.posts.map { post ->
                            if (post.id == postId) {
                                post.copy(likesCount = response.likesCount)
                            } else post
                        }
                    )
                }
            } catch (e: Exception) {
                // Revert optimistic update on failure
                _uiState.update { current ->
                    current.copy(
                        likedPostIds = current.likedPostIds - postId,
                        posts = current.posts.map { post ->
                            if (post.id == postId) {
                                post.copy(likesCount = (post.likesCount - 1).coerceAtLeast(0))
                            } else post
                        }
                    )
                }
            }
        }
    }

    fun pinPost(postId: Int) {
        viewModelScope.launch {
            try {
                val response = api.pinPost(postId, currentUserId)
                _uiState.update { current ->
                    val updatedPosts = current.posts.map { post ->
                        if (post.id == postId) {
                            post.copy(isPinned = response.isPinned)
                        } else post
                    }
                    current.copy(posts = updatedPosts, pinErrorMessage = null)
                }
                // Reload feed so pin ordering is applied
                loadFeed()
            } catch (e: HttpException) {
                if (e.code() == 409) {
                    _uiState.update { it.copy(
                        pinErrorMessage = "Kamu sudah menyematkan postingan lain. Lepas sematan terlebih dahulu."
                    ) }
                }
            } catch (e: Exception) {
                // Ignore or handle silently
            }
        }
    }

    fun clearPinError() {
        _uiState.update { it.copy(pinErrorMessage = null) }
    }
}
