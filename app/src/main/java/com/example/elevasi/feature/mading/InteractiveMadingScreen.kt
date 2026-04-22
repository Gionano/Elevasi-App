package com.example.elevasi.feature.mading

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.elevasi.data.model.StickyNoteDto
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.ui.components.ElevasiGlassPanel
import com.example.elevasi.ui.components.ElevasiHeroCard
import com.example.elevasi.ui.components.ElevasiInfoPill
import com.example.elevasi.ui.components.ElevasiSectionHeader

@Composable
fun InteractiveMadingScreen(
    session: UserSessionDto
) {
    val viewModel: InteractiveMadingViewModel = viewModel(
        factory = InteractiveMadingViewModel.factory(session)
    )
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(horizontal = 20.dp, vertical = 18.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        ElevasiHeroCard(
            eyebrow = "Interactive Mading",
            title = "Tempel, geser, dan lihat note bergerak di dua layar",
            description = "Papan ini menjadi ruang kecil untuk pesan spontan, pengingat halus, dan gesture manis yang bergerak hampir seketika di sisi kalian masing-masing.",
            trailingLabel = if (uiState.isRealtimeConnected) "Realtime aktif" else "Mencoba tersambung"
        )

        MadingComposerCard(
            draftText = uiState.draftText,
            selectedColor = uiState.selectedColor,
            colors = uiState.availableColors,
            isCreating = uiState.isCreatingNote,
            onTextChange = viewModel::updateDraftText,
            onColorSelected = viewModel::selectColor,
            onCreateNote = viewModel::createStickyNote
        )

        Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
            ElevasiSectionHeader(
                title = "Papan Bersama",
                subtitle = "Geser sticky note langsung dengan jari. Posisi akan disiarkan ke sisi lain lewat WebSocket."
            )

            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                ElevasiInfoPill(text = "Kamu: ${uiState.currentUserName}")
                ElevasiInfoPill(text = "Teman: ${uiState.partnerUserName}")
                ElevasiInfoPill(
                    text = if (uiState.isRealtimeConnected) {
                        "Sinkron langsung"
                    } else {
                        "Menghubungkan realtime"
                    }
                )
            }
        }

        Box(
            modifier = Modifier
                .weight(1f)
                .fillMaxWidth()
                .clip(RoundedCornerShape(34.dp))
                .background(
                    brush = Brush.linearGradient(
                        colors = listOf(
                            Color(0xFF8D5E47),
                            Color(0xFF714936),
                            Color(0xFF97644A)
                        )
                    )
                )
                .border(
                    width = 1.dp,
                    color = Color.White.copy(alpha = 0.14f),
                    shape = RoundedCornerShape(34.dp)
                )
                .padding(18.dp)
        ) {
            WoodBoardTexture()

            if (uiState.isLoading) {
                CircularProgressIndicator(
                    modifier = Modifier.align(Alignment.Center),
                    color = MaterialTheme.colorScheme.surface
                )
            } else if (uiState.notes.isEmpty()) {
                EmptyMadingState(modifier = Modifier.align(Alignment.Center))
            }

            uiState.notes.forEach { note ->
                key(note.id) {
                    DraggableStickyNote(
                        note = note,
                        modifier = Modifier.align(Alignment.TopStart),
                        onMove = viewModel::updateNotePosition,
                        onDragStopped = viewModel::finishNoteDrag
                    )
                }
            }

            uiState.errorMessage?.let { message ->
                Surface(
                    modifier = Modifier
                        .align(Alignment.BottomStart)
                        .fillMaxWidth(),
                    shape = RoundedCornerShape(22.dp),
                    color = MaterialTheme.colorScheme.surface.copy(alpha = 0.92f)
                ) {
                    Text(
                        text = message,
                        modifier = Modifier.padding(horizontal = 16.dp, vertical = 12.dp),
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.error
                    )
                }
            }
        }
    }
}

@Composable
private fun MadingComposerCard(
    draftText: String,
    selectedColor: String,
    colors: List<String>,
    isCreating: Boolean,
    onTextChange: (String) -> Unit,
    onColorSelected: (String) -> Unit,
    onCreateNote: () -> Unit
) {
    ElevasiGlassPanel(
        accentColors = listOf(
            MaterialTheme.colorScheme.primary.copy(alpha = 0.14f),
            MaterialTheme.colorScheme.secondary.copy(alpha = 0.1f)
        )
    ) {
        Column(
            modifier = Modifier.padding(18.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp)
        ) {
            Text(
                text = "Tempel Sticky Note Baru",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold
            )

            Surface(
                shape = RoundedCornerShape(24.dp),
                color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.48f)
            ) {
                BasicTextField(
                    value = draftText,
                    onValueChange = onTextChange,
                    textStyle = MaterialTheme.typography.bodyLarge.copy(
                        color = MaterialTheme.colorScheme.onSurface
                    ),
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 14.dp),
                    decorationBox = { innerTextField ->
                        if (draftText.isBlank()) {
                            Text(
                                text = "Tulis pesan singkat, pengingat kecil, atau sapaan manis di sini...",
                                style = MaterialTheme.typography.bodyLarge,
                                color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.72f)
                            )
                        }
                        innerTextField()
                    }
                )
            }

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                    colors.forEach { colorHex ->
                        val color = Color(android.graphics.Color.parseColor(colorHex))
                        Surface(
                            modifier = Modifier
                                .size(if (selectedColor == colorHex) 30.dp else 24.dp)
                                .clip(CircleShape)
                                .clickable { onColorSelected(colorHex) },
                            color = color,
                            shadowElevation = if (selectedColor == colorHex) 4.dp else 0.dp,
                            border = androidx.compose.foundation.BorderStroke(
                                width = if (selectedColor == colorHex) 2.dp else 1.dp,
                                color = if (selectedColor == colorHex) {
                                    MaterialTheme.colorScheme.onSurface.copy(alpha = 0.22f)
                                } else {
                                    Color.White.copy(alpha = 0.7f)
                                }
                            )
                        ) {}
                    }
                }

                Button(
                    onClick = onCreateNote,
                    enabled = !isCreating,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.primary,
                        contentColor = MaterialTheme.colorScheme.onPrimary
                    ),
                    shape = RoundedCornerShape(18.dp)
                ) {
                    Text(
                        text = if (isCreating) "Menempel..." else "Tempel Note"
                    )
                }
            }
        }
    }
}

@Composable
private fun BoxScope.EmptyMadingState(
    modifier: Modifier = Modifier
) {
    Surface(
        modifier = modifier.width(280.dp),
        shape = RoundedCornerShape(28.dp),
        color = MaterialTheme.colorScheme.surface.copy(alpha = 0.9f)
    ) {
        Column(
            modifier = Modifier.padding(22.dp),
            verticalArrangement = Arrangement.spacedBy(8.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "Papan masih kosong",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold
            )
            Text(
                text = "Tempel sticky note pertama untuk mulai membangun mading bersama.",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
private fun BoxScope.WoodBoardTexture() {
    Row(
        modifier = Modifier
            .matchParentSize()
            .clip(RoundedCornerShape(28.dp))
    ) {
        repeat(6) { index ->
            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight()
                    .background(
                        if (index % 2 == 0) {
                            Color(0x22FFFFFF)
                        } else {
                            Color(0x10FFFFFF)
                        }
                    )
            )
        }
    }
}

@Composable
private fun DraggableStickyNote(
    note: StickyNoteDto,
    modifier: Modifier = Modifier,
    onMove: (Int, Float, Float, Float) -> Unit,
    onDragStopped: (Int) -> Unit
) {
    val latestNote by rememberUpdatedState(note)
    val density = androidx.compose.ui.platform.LocalDensity.current
    val backgroundColor = runCatching {
        Color(android.graphics.Color.parseColor(note.color))
    }.getOrDefault(Color(0xFFFBE4EC))

    Card(
        modifier = modifier
            .graphicsLayer {
                translationX = with(density) { latestNote.xPosition.dp.toPx() }
                translationY = with(density) { latestNote.yPosition.dp.toPx() }
                rotationZ = latestNote.rotation
            }
            .width(162.dp)
            .pointerInput(note.id) {
                detectDragGestures(
                    onDragEnd = { onDragStopped(latestNote.id) },
                    onDragCancel = { onDragStopped(latestNote.id) }
                ) { change, dragAmount ->
                    change.consume()
                    onMove(
                        latestNote.id,
                        latestNote.xPosition + (dragAmount.x / density.density),
                        latestNote.yPosition + (dragAmount.y / density.density),
                        latestNote.rotation
                    )
                }
            },
        shape = RoundedCornerShape(24.dp),
        colors = CardDefaults.cardColors(containerColor = backgroundColor),
        elevation = CardDefaults.cardElevation(defaultElevation = 10.dp)
    ) {
        Column(
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 14.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Box(
                modifier = Modifier
                    .height(18.dp)
                    .fillMaxWidth(),
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier
                        .width(48.dp)
                        .height(6.dp)
                        .clip(RoundedCornerShape(999.dp))
                        .background(Color.White.copy(alpha = 0.62f))
                )
            }

            Text(
                text = note.text,
                style = MaterialTheme.typography.bodyLarge,
                color = MaterialTheme.colorScheme.onSurface,
                maxLines = 6,
                overflow = TextOverflow.Ellipsis
            )
        }
    }
}
