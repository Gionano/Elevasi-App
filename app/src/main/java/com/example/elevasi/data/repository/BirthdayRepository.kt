package com.example.elevasi.data.repository

import com.example.elevasi.data.model.BirthdayStateDto
import com.example.elevasi.data.remote.ElevasiApiService
import com.example.elevasi.data.remote.RetrofitClient

class BirthdayRepository(
    private val apiService: ElevasiApiService = RetrofitClient.apiService
) {
    suspend fun isMyBirthday(userId: String): BirthdayStateDto {
        return apiService.isMyBirthday(userId)
    }
}
