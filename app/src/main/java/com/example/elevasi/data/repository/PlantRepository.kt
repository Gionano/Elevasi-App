package com.example.elevasi.data.repository

import com.example.elevasi.data.model.AddPlantExpRequest
import com.example.elevasi.data.model.VirtualPlantStatusDto
import com.example.elevasi.data.remote.ElevasiApiService
import com.example.elevasi.data.remote.RetrofitClient
import java.time.OffsetDateTime

class PlantRepository(
    private val apiService: ElevasiApiService = RetrofitClient.apiService
) {
    suspend fun getPlantStatus(): VirtualPlantStatusDto {
        return apiService.getVirtualPlantStatus()
    }

    suspend fun addPlantExp(amount: Int): VirtualPlantStatusDto {
        return apiService.addPlantExp(AddPlantExpRequest(amount = amount))
    }

    fun fallbackPlantStatus(): VirtualPlantStatusDto {
        return VirtualPlantStatusDto(
            level = 1,
            currentExp = 0,
            lastInteraction = OffsetDateTime.now().toString(),
            expToNextLevel = 100,
            isWilted = false
        )
    }
}
