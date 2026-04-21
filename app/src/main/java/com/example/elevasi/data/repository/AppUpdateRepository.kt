package com.example.elevasi.data.repository

import com.example.elevasi.data.model.AppUpdateInfoDto
import com.example.elevasi.data.remote.ElevasiApiService
import com.example.elevasi.data.remote.RetrofitClient

class AppUpdateRepository(
    private val apiService: ElevasiApiService = RetrofitClient.apiService
) {
    suspend fun checkForUpdate(): AppUpdateInfoDto {
        return apiService.checkForUpdate()
    }
}
