package com.example.elevasi.data.remote

import com.example.elevasi.data.model.StickyNoteDto
import com.example.elevasi.data.model.StickyNoteMoveMessage
import com.google.gson.Gson
import com.google.gson.JsonElement
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableSharedFlow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharedFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asSharedFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import okhttp3.Request
import okhttp3.Response
import okhttp3.WebSocket
import okhttp3.WebSocketListener

sealed interface MadingSocketEvent {
    data class NoteCreated(val note: StickyNoteDto) : MadingSocketEvent
    data class NoteMoved(val note: StickyNoteDto) : MadingSocketEvent
    data class Error(val message: String) : MadingSocketEvent
}

class MadingWebSocketManager(
    private val client: okhttp3.OkHttpClient = RetrofitClient.webSocketClient,
    private val gson: Gson = Gson()
) {
    private val scope = CoroutineScope(SupervisorJob() + Dispatchers.IO)
    private val _events = MutableSharedFlow<MadingSocketEvent>(extraBufferCapacity = 32)
    private val _isConnected = MutableStateFlow(false)

    private var webSocket: WebSocket? = null
    private var manualClose = false
    private var reconnectJob: Job? = null

    val events: SharedFlow<MadingSocketEvent> = _events.asSharedFlow()
    val isConnected: StateFlow<Boolean> = _isConnected.asStateFlow()

    fun connect() {
        if (webSocket != null) return

        manualClose = false
        openSocket()
    }

    fun disconnect() {
        manualClose = true
        reconnectJob?.cancel()
        reconnectJob = null
        webSocket?.close(1000, "screen_closed")
        webSocket = null
        _isConnected.value = false
    }

    fun sendMove(note: StickyNoteDto): Boolean {
        val socket = webSocket ?: return false
        val payload = StickyNoteMoveMessage(
            noteId = note.id,
            xPosition = note.xPosition,
            yPosition = note.yPosition,
            rotation = note.rotation
        )
        return socket.send(gson.toJson(payload))
    }

    private fun openSocket() {
        val request = Request.Builder()
            .url(RetrofitClient.webSocketUrl("ws/mading"))
            .build()

        webSocket = client.newWebSocket(
            request,
            object : WebSocketListener() {
                override fun onOpen(webSocket: WebSocket, response: Response) {
                    reconnectJob?.cancel()
                    reconnectJob = null
                    _isConnected.value = true
                }

                override fun onMessage(webSocket: WebSocket, text: String) {
                    handleIncomingMessage(text)
                }

                override fun onClosing(webSocket: WebSocket, code: Int, reason: String) {
                    _isConnected.value = false
                    webSocket.close(code, reason)
                }

                override fun onClosed(webSocket: WebSocket, code: Int, reason: String) {
                    this@MadingWebSocketManager.webSocket = null
                    _isConnected.value = false
                    scheduleReconnect()
                }

                override fun onFailure(webSocket: WebSocket, t: Throwable, response: Response?) {
                    this@MadingWebSocketManager.webSocket = null
                    _isConnected.value = false
                    _events.tryEmit(
                        MadingSocketEvent.Error(
                            message = t.message ?: "Koneksi realtime mading terputus."
                        )
                    )
                    scheduleReconnect()
                }
            }
        )
    }

    private fun handleIncomingMessage(text: String) {
        runCatching {
            gson.fromJson(text, StickyNoteSocketPayload::class.java)
        }.onSuccess { payload ->
            when (payload.type) {
                "note_created" -> payload.note?.let {
                    _events.tryEmit(MadingSocketEvent.NoteCreated(it))
                }

                "note_moved" -> payload.note?.let {
                    _events.tryEmit(MadingSocketEvent.NoteMoved(it))
                }

                "error" -> {
                    val errorMessage = payload.message?.toString()?.trim('"')
                        ?: "Sinkronisasi mading mengembalikan error."
                    _events.tryEmit(MadingSocketEvent.Error(errorMessage))
                }
            }
        }.onFailure {
            _events.tryEmit(
                MadingSocketEvent.Error(
                    message = "Pesan realtime mading tidak bisa diproses."
                )
            )
        }
    }

    private fun scheduleReconnect() {
        if (manualClose || reconnectJob?.isActive == true) return

        reconnectJob = scope.launch {
            delay(2_000)
            if (!manualClose && webSocket == null) {
                openSocket()
            }
        }
    }

    private data class StickyNoteSocketPayload(
        val type: String = "",
        val note: StickyNoteDto? = null,
        val message: JsonElement? = null
    )
}
