package com.example.elevasi.data.remote

import com.example.elevasi.data.model.AppUpdateInfoDto
import com.example.elevasi.data.model.AddPlantExpRequest
import com.example.elevasi.data.model.AvatarUploadResponse
import com.example.elevasi.data.model.BirthdayStateDto
import com.example.elevasi.data.model.CreateStickyNoteRequest
import com.example.elevasi.data.model.DailyVerseDto
import com.example.elevasi.data.model.FeedPostCreateRequest
import com.example.elevasi.data.model.FeedPostDto
import com.example.elevasi.data.model.FeedPostLikeResponse
import com.example.elevasi.data.model.FeedPostPinResponse
import com.example.elevasi.data.model.ReplyDto
import com.example.elevasi.data.model.HabitSummaryDto
import com.example.elevasi.data.model.HealthResponse
import com.example.elevasi.data.model.ProfileDto
import com.example.elevasi.data.model.ProfileUpdateRequest
import com.example.elevasi.data.model.JournalEntryRequest
import com.example.elevasi.data.model.JournalEntryResponse
import com.example.elevasi.data.model.ReflectionDialogDto
import com.example.elevasi.data.model.RegisterUserRequest
import com.example.elevasi.data.model.StickyNoteDto
import com.example.elevasi.data.model.SubmitReflectionRequest
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.model.VirtualPlantStatusDto
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.PUT
import retrofit2.http.Path
import retrofit2.http.Query
import retrofit2.http.Multipart
import retrofit2.http.Part

interface ElevasiApiService {
    @GET("health")
    suspend fun getHealth(): HealthResponse

    @GET("check-update")
    suspend fun checkForUpdate(): AppUpdateInfoDto

    @POST("users/register")
    suspend fun registerUser(
        @Body request: RegisterUserRequest
    ): UserSessionDto

    @GET("users/{userId}")
    suspend fun getUserSession(
        @Path("userId") userId: String
    ): UserSessionDto

    @GET("is-my-birthday/{myUserId}")
    suspend fun isMyBirthday(
        @Path("myUserId") myUserId: String
    ): BirthdayStateDto

    @GET("reflection/current")
    suspend fun getCurrentReflection(
        @Query("user_id") userId: String
    ): ReflectionDialogDto

    @GET("reflection/{questionId}")
    suspend fun getReflection(
        @Path("questionId") questionId: Int,
        @Query("user_id") userId: String
    ): ReflectionDialogDto

    @POST("reflection/submit")
    suspend fun submitReflection(
        @Body request: SubmitReflectionRequest
    ): ReflectionDialogDto

    @GET("plant/status")
    suspend fun getVirtualPlantStatus(): VirtualPlantStatusDto

    @POST("plant/add-exp")
    suspend fun addPlantExp(
        @Body request: AddPlantExpRequest
    ): VirtualPlantStatusDto

    @GET("mading/notes")
    suspend fun getStickyNotes(): List<StickyNoteDto>

    @POST("mading/notes")
    suspend fun createStickyNote(
        @Body request: CreateStickyNoteRequest
    ): StickyNoteDto

    @GET("api/v1/habits/today")
    suspend fun getTodayHabits(): List<HabitSummaryDto>

    @GET("api/v1/verse/today")
    suspend fun getTodayVerse(
        @Query("tz_offset_minutes") timezoneOffsetMinutes: Int
    ): DailyVerseDto

    @POST("api/v1/journal")
    suspend fun submitJournalEntry(
        @Body request: JournalEntryRequest
    ): JournalEntryResponse

    // ── Feed / Kertas Terbang ────────────────────────────────────────

    @GET("api/feed")
    suspend fun getFeed(
        @Query("limit") limit: Int = 50,
        @Query("user_id") userId: String = ""
    ): List<FeedPostDto>

    @Multipart
    @POST("api/posts")
    suspend fun createPost(
        @Part("content") content: okhttp3.RequestBody,
        @Part("author_name") authorName: okhttp3.RequestBody,
        @Part files: List<okhttp3.MultipartBody.Part>? = null
    ): FeedPostDto

    @PUT("api/posts/{postId}/like")
    suspend fun likePost(
        @Path("postId") postId: Int
    ): FeedPostLikeResponse

    @PUT("api/posts/{postId}/pin")
    suspend fun pinPost(
        @Path("postId") postId: Int,
        @Query("user_id") userId: String
    ): FeedPostPinResponse

    @GET("api/posts/{postId}/replies")
    suspend fun getReplies(
        @Path("postId") postId: Int
    ): List<ReplyDto>

    @Multipart
    @POST("api/posts/{postId}/replies")
    suspend fun createReply(
        @Path("postId") postId: Int,
        @Part("content") content: okhttp3.RequestBody,
        @Part("author_name") authorName: okhttp3.RequestBody,
        @Part files: List<okhttp3.MultipartBody.Part>? = null
    ): ReplyDto

    // ── Profile / Pengaturan Akun ────────────────────────────────────

    @GET("api/profile/{userId}")
    suspend fun getMyProfile(
        @Path("userId") userId: String
    ): ProfileDto

    @PUT("api/profile/{userId}")
    suspend fun updateMyProfile(
        @Path("userId") userId: String,
        @Body request: ProfileUpdateRequest
    ): ProfileDto

    @Multipart
    @POST("api/profile/avatar")
    suspend fun uploadAvatar(
        @Query("user_id") userId: String,
        @Part file: okhttp3.MultipartBody.Part
    ): AvatarUploadResponse
}
