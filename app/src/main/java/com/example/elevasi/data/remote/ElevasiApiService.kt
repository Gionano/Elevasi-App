package com.example.elevasi.data.remote

import com.example.elevasi.data.model.AppUpdateInfoDto
import com.example.elevasi.data.model.AddPlantExpRequest
import com.example.elevasi.data.model.BirthdayStateDto
import com.example.elevasi.data.model.CreateStickyNoteRequest
import com.example.elevasi.data.model.DailyVerseDto
import com.example.elevasi.data.model.HabitSummaryDto
import com.example.elevasi.data.model.HealthResponse
import com.example.elevasi.data.model.JournalEntryRequest
import com.example.elevasi.data.model.JournalEntryResponse
import com.example.elevasi.data.model.PresenceStatusDto
import com.example.elevasi.data.model.ReactionDto
import com.example.elevasi.data.model.ReactionInboxDto
import com.example.elevasi.data.model.ReflectionDialogDto
import com.example.elevasi.data.model.RegisterUserRequest
import com.example.elevasi.data.model.SendReactionRequest
import com.example.elevasi.data.model.StickyNoteDto
import com.example.elevasi.data.model.SubmitReflectionRequest
import com.example.elevasi.data.model.UpdatePresenceStatusRequest
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.model.VirtualPlantStatusDto
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.POST
import retrofit2.http.Path
import retrofit2.http.Query

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

    @GET("status/{userId}")
    suspend fun getPresenceStatus(
        @Path("userId") userId: String
    ): PresenceStatusDto

    @POST("status/{userId}")
    suspend fun updatePresenceStatus(
        @Path("userId") userId: String,
        @Body request: UpdatePresenceStatusRequest
    ): PresenceStatusDto

    @POST("reaction/{targetUserId}")
    suspend fun sendReaction(
        @Path("targetUserId") targetUserId: String,
        @Body request: SendReactionRequest
    ): ReactionDto

    @GET("reaction/{myUserId}")
    suspend fun getIncomingReaction(
        @Path("myUserId") myUserId: String
    ): ReactionInboxDto

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
}
