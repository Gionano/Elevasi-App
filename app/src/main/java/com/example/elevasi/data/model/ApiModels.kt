package com.example.elevasi.data.model

import com.google.gson.annotations.SerializedName

data class HealthResponse(
    val status: String,
    val service: String
)

data class AppUpdateInfoDto(
    @SerializedName("latest_version_code")
    val latestVersionCode: Int,
    @SerializedName("version_name")
    val versionName: String,
    @SerializedName("release_notes")
    val releaseNotes: String,
    @SerializedName("download_url")
    val downloadUrl: String
)

data class RegisterUserRequest(
    val name: String,
    val birthdayMonth: Int,
    val birthdayDay: Int
)

data class UserSessionDto(
    val userId: String,
    val name: String,
    val partnerId: String,
    val partnerName: String,
    val birthdayMonth: Int,
    val birthdayDay: Int,
    val lastSeenAt: String
)

data class BirthdayStateDto(
    val userId: String,
    val isMyBirthday: Boolean
)

data class PresenceStatusDto(
    val userId: String,
    val status: String,
    val message: String,
    val updatedAt: String,
    val isBirthday: Boolean = false
)

data class UpdatePresenceStatusRequest(
    val status: String,
    val message: String
)

data class SendReactionRequest(
    val fromUserId: String,
    val emoji: String
)

data class ReactionDto(
    val id: Int,
    val fromUserId: String,
    val targetUserId: String,
    val emoji: String,
    val createdAt: String
)

data class ReactionInboxDto(
    val hasReaction: Boolean,
    val reaction: ReactionDto?
)

data class ReflectionAnswerDto(
    val userId: String,
    val answerText: String,
    val submittedAt: String
)

data class ReflectionDialogDto(
    val questionId: Int,
    val questionText: String,
    val weekKey: String,
    val pairState: String,
    val partnerLocked: Boolean,
    val myAnswer: ReflectionAnswerDto?,
    val partnerAnswer: ReflectionAnswerDto?
)

data class SubmitReflectionRequest(
    val questionId: Int,
    val userId: String,
    val answerText: String
)

data class HabitSummaryDto(
    val id: Int,
    val title: String,
    val subtitle: String,
    val completed: Boolean
)

data class DailyVerseDto(
    val title: String,
    val verse: String,
    val reflectionPrompt: String
)

data class VirtualPlantStatusDto(
    val level: Int,
    val currentExp: Int,
    val lastInteraction: String,
    val expToNextLevel: Int,
    val isWilted: Boolean
)

data class AddPlantExpRequest(
    val amount: Int
)

data class JournalEntryRequest(
    val content: String
)

data class JournalEntryResponse(
    val id: Int,
    val message: String
)
