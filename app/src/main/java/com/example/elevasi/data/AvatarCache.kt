package com.example.elevasi.data

import com.example.elevasi.BuildConfig
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

/**
 * Simple singleton cache for user avatar URLs.
 * Shared across TopBar, Feed, Reply, and Settings screens.
 */
object AvatarCache {
    private val _avatars = MutableStateFlow<Map<String, String>>(emptyMap())
    val avatars: StateFlow<Map<String, String>> = _avatars.asStateFlow()

    /** Update a user's avatar URL (relative path like /static/avatars/...) */
    fun set(userName: String, avatarUrl: String) {
        _avatars.value = _avatars.value + (userName.lowercase() to avatarUrl)
    }

    /** Get the full avatar URL for a user, or null if not cached */
    fun getFullUrl(userName: String): String? {
        val relative = _avatars.value[userName.lowercase()] ?: return null
        if (relative.isBlank()) return null
        if (relative.startsWith("http")) return relative
        return "${BuildConfig.API_BASE_URL.trimEnd('/')}$relative"
    }

    /** Bulk-set avatars (e.g., after fetching both profiles) */
    fun setAll(entries: Map<String, String>) {
        _avatars.value = _avatars.value + entries.mapKeys { it.key.lowercase() }
    }
}
