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

data class StickyNoteDto(
    val id: Int,
    val text: String,
    val color: String,
    val xPosition: Float,
    val yPosition: Float,
    val rotation: Float
)

data class CreateStickyNoteRequest(
    val text: String,
    val color: String? = null,
    val xPosition: Float? = null,
    val yPosition: Float? = null
)

data class StickyNoteMoveMessage(
    val type: String = "move_note",
    val noteId: Int,
    val xPosition: Float,
    val yPosition: Float,
    val rotation: Float
)

data class StickyNoteDeleteMessage(
    val type: String = "delete_note",
    val noteId: Int
)

data class JournalEntryRequest(
    val content: String
)

data class JournalEntryResponse(
    val id: Int,
    val message: String
)

// ── Feed / Kertas Terbang ────────────────────────────────────────────

data class FeedPostDto(
    val id: Int,
    @SerializedName("author_name")
    val authorName: String,
    val content: String,
    @SerializedName("created_at")
    val createdAt: String,
    @SerializedName("is_pinned")
    val isPinned: Boolean,
    @SerializedName("likes_count")
    val likesCount: Int,
    @SerializedName("media_urls")
    val mediaUrls: List<String> = emptyList(),
    @SerializedName("replies_count")
    val repliesCount: Int = 0
)

data class ReplyDto(
    val id: Int,
    @SerializedName("post_id")
    val postId: Int,
    @SerializedName("author_name")
    val authorName: String,
    val content: String,
    @SerializedName("media_urls")
    val mediaUrls: List<String> = emptyList(),
    @SerializedName("created_at")
    val createdAt: String
)

data class FeedPostCreateRequest(
    val content: String,
    @SerializedName("author_name")
    val authorName: String
)

data class FeedPostLikeResponse(
    val id: Int,
    @SerializedName("likes_count")
    val likesCount: Int
)

data class FeedPostPinResponse(
    val id: Int,
    @SerializedName("is_pinned")
    val isPinned: Boolean
)

// ── Profile / Pengaturan Akun ────────────────────────────────────────

data class ProfileDto(
    @SerializedName("display_name")
    val displayName: String,
    val bio: String,
    @SerializedName("birthday_month")
    val birthdayMonth: Int,
    @SerializedName("birthday_day")
    val birthdayDay: Int,
    @SerializedName("avatar_url")
    val avatarUrl: String,
    @SerializedName("theme_preference")
    val themePreference: String? = "FOLLOW_SYSTEM"
)

data class AvatarUploadResponse(
    @SerializedName("avatar_url")
    val avatarUrl: String
)

data class ProfileUpdateRequest(
    @SerializedName("display_name")
    val displayName: String,
    val bio: String,
    @SerializedName("birthday_month")
    val birthdayMonth: Int,
    @SerializedName("birthday_day")
    val birthdayDay: Int
)

data class ThemePreferenceRequest(
    @SerializedName("user_id")
    val userId: String,
    @SerializedName("theme_preference")
    val themePreference: String
)


