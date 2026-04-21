package com.example.elevasi.data.repository

import com.example.elevasi.data.model.PresenceStatusDto
import com.example.elevasi.data.model.ReactionDto
import com.example.elevasi.data.model.ReactionInboxDto
import com.example.elevasi.data.model.SendReactionRequest
import com.example.elevasi.data.model.UpdatePresenceStatusRequest
import com.example.elevasi.data.remote.ElevasiApiService
import com.example.elevasi.data.remote.RetrofitClient

class PresenceRepository(
    private val apiService: ElevasiApiService = RetrofitClient.apiService
) {
    suspend fun getStatus(userId: String): PresenceStatusDto {
        return apiService.getPresenceStatus(userId)
    }

    suspend fun updateStatus(
        userId: String,
        status: String,
        message: String
    ): PresenceStatusDto {
        return apiService.updatePresenceStatus(
            userId = userId,
            request = UpdatePresenceStatusRequest(
                status = status,
                message = message
            )
        )
    }

    suspend fun sendReaction(
        targetUserId: String,
        fromUserId: String,
        emoji: String
    ): ReactionDto {
        return apiService.sendReaction(
            targetUserId = targetUserId,
            request = SendReactionRequest(
                fromUserId = fromUserId,
                emoji = emoji
            )
        )
    }

    suspend fun getIncomingReaction(myUserId: String): ReactionInboxDto {
        return apiService.getIncomingReaction(myUserId)
    }

    fun fallbackStatus(userId: String, displayName: String): PresenceStatusDto {
        return PresenceStatusDto(
            userId = userId,
            status = "offline",
            message = "$displayName belum tersinkron dengan API.",
            updatedAt = ""
        )
    }
}
