package com.example.elevasi.data.repository

import com.example.elevasi.data.model.ReflectionDialogDto
import com.example.elevasi.data.model.SubmitReflectionRequest
import com.example.elevasi.data.remote.ElevasiApiService
import com.example.elevasi.data.remote.RetrofitClient

class ReflectionRepository(
    private val apiService: ElevasiApiService = RetrofitClient.apiService
) {
    suspend fun getCurrentReflection(userId: String): ReflectionDialogDto {
        return apiService.getCurrentReflection(userId)
    }

    suspend fun getReflection(questionId: Int, userId: String): ReflectionDialogDto {
        return apiService.getReflection(questionId, userId)
    }

    suspend fun submitReflection(
        questionId: Int,
        userId: String,
        answerText: String
    ): ReflectionDialogDto {
        return apiService.submitReflection(
            SubmitReflectionRequest(
                questionId = questionId,
                userId = userId,
                answerText = answerText
            )
        )
    }

    fun fallbackReflection(): ReflectionDialogDto {
        return ReflectionDialogDto(
            questionId = 0,
            questionText = "Koneksi ke ruang dialog belum tersedia sekarang.",
            weekKey = "",
            pairState = "EMPTY",
            partnerLocked = true,
            myAnswer = null,
            partnerAnswer = null
        )
    }
}
