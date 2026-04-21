package com.example.elevasi.data.repository

import android.content.Context
import com.example.elevasi.data.model.RegisterUserRequest
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.remote.ElevasiApiService
import com.example.elevasi.data.remote.RetrofitClient

class SessionRepository(
    context: Context,
    private val apiService: ElevasiApiService = RetrofitClient.apiService
) {
    private val appContext = context.applicationContext
    private val preferences = appContext.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)

    fun getSavedSession(): UserSessionDto? {
        val userId = preferences.getString(KEY_USER_ID, null) ?: return null
        val name = preferences.getString(KEY_NAME, null) ?: return null
        val partnerId = preferences.getString(KEY_PARTNER_ID, null) ?: return null
        val partnerName = preferences.getString(KEY_PARTNER_NAME, null) ?: return null
        val birthdayMonth = preferences.getInt(KEY_BIRTHDAY_MONTH, -1)
        val birthdayDay = preferences.getInt(KEY_BIRTHDAY_DAY, -1)
        val lastSeenAt = preferences.getString(KEY_LAST_SEEN_AT, "") ?: ""

        if (birthdayMonth !in 1..12 || birthdayDay !in 1..31) return null

        return UserSessionDto(
            userId = userId,
            name = name,
            partnerId = partnerId,
            partnerName = partnerName,
            birthdayMonth = birthdayMonth,
            birthdayDay = birthdayDay,
            lastSeenAt = lastSeenAt
        )
    }

    suspend fun registerName(
        name: String,
        birthdayMonth: Int,
        birthdayDay: Int
    ): UserSessionDto {
        return apiService.registerUser(
            RegisterUserRequest(
                name = name.trim(),
                birthdayMonth = birthdayMonth,
                birthdayDay = birthdayDay
            )
        ).also(::saveSession)
    }

    suspend fun refreshSession(userId: String): UserSessionDto {
        return apiService.getUserSession(userId).also(::saveSession)
    }

    fun saveSession(session: UserSessionDto) {
        preferences.edit()
            .putString(KEY_USER_ID, session.userId)
            .putString(KEY_NAME, session.name)
            .putString(KEY_PARTNER_ID, session.partnerId)
            .putString(KEY_PARTNER_NAME, session.partnerName)
            .putInt(KEY_BIRTHDAY_MONTH, session.birthdayMonth)
            .putInt(KEY_BIRTHDAY_DAY, session.birthdayDay)
            .putString(KEY_LAST_SEEN_AT, session.lastSeenAt)
            .apply()
    }

    private companion object {
        const val PREFS_NAME = "elevasi_session"
        const val KEY_USER_ID = "user_id"
        const val KEY_NAME = "name"
        const val KEY_PARTNER_ID = "partner_id"
        const val KEY_PARTNER_NAME = "partner_name"
        const val KEY_BIRTHDAY_MONTH = "birthday_month"
        const val KEY_BIRTHDAY_DAY = "birthday_day"
        const val KEY_LAST_SEEN_AT = "last_seen_at"
    }
}
