package com.example.elevasi.data.repository

import com.example.elevasi.data.model.CreateStickyNoteRequest
import com.example.elevasi.data.model.StickyNoteDto
import com.example.elevasi.data.remote.MadingSocketEvent
import com.example.elevasi.data.remote.MadingWebSocketManager
import com.example.elevasi.data.remote.RetrofitClient
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow

class MadingRepository(
    private val webSocketManager: MadingWebSocketManager = MadingWebSocketManager()
) {
    suspend fun getStickyNotes(): List<StickyNoteDto> {
        return RetrofitClient.apiService.getStickyNotes()
    }

    suspend fun createStickyNote(
        text: String,
        color: String?
    ): StickyNoteDto {
        return RetrofitClient.apiService.createStickyNote(
            CreateStickyNoteRequest(
                text = text,
                color = color
            )
        )
    }

    fun connectRealtime() {
        webSocketManager.connect()
    }

    fun disconnectRealtime() {
        webSocketManager.disconnect()
    }

    fun sendMove(note: StickyNoteDto): Boolean {
        return webSocketManager.sendMove(note)
    }

    val events: SharedFlow<MadingSocketEvent>
        get() = webSocketManager.events

    val isConnected: StateFlow<Boolean>
        get() = webSocketManager.isConnected
}
