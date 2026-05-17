package com.example.elevasi.feature.mading

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.scaleIn
import androidx.compose.animation.scaleOut
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectDragGestures
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.BoxWithConstraints
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.DeleteOutline
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberUpdatedState
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.sp
import androidx.compose.ui.unit.Dp
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
    var draggingNoteId by remember { mutableIntStateOf(-1) }
    var isTrashHot by remember { mutableStateOf(false) }

    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(vertical = 18.dp),
        verticalArrangement = Arrangement.spacedBy(16.dp)
    ) {
        item {
            Box(modifier = Modifier.padding(horizontal = 20.dp)) {
                ElevasiHeroCard(
                    eyebrow = "Interactive Mading",
                    title = "Tempel, geser, dan lihat note bergerak di dua layar",
                    description = "Papan ini menjadi ruang kecil untuk pesan spontan, pengingat halus, dan gesture manis yang bergerak hampir seketika di sisi kalian masing-masing.",
                    trailingLabel = if (uiState.isRealtimeConnected) "Realtime aktif" else "Mencoba tersambung"
                )
            }
        }

        item {
            Column(
                modifier = Modifier.padding(horizontal = 20.dp),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
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
        }

        item {
            BoxWithConstraints(
                modifier = Modifier.fillMaxWidth(),
                contentAlignment = Alignment.Center
            ) {
                val boardWidth = resolveMadingBoardWidth(maxWidth)
                MadingBoard(
                    notes = uiState.notes,
                    isLoading = uiState.isLoading,
                    errorMessage = uiState.errorMessage,
                    boardWidth = boardWidth,
                    boardHeight = MadingBoardHeight,
                    isDragging = draggingNoteId != -1,
                    isTrashHot = isTrashHot,
                    onMove = viewModel::updateNotePosition,
                    onDragStopped = viewModel::finishNoteDrag,
                    onDeleteNote = viewModel::deleteNote,
                    onDraggingChanged = { noteId ->
                        draggingNoteId = noteId ?: -1
                        if (noteId == null) {
                            isTrashHot = false
                        }
                    },
                    onTrashHoverChanged = { isOverTrash ->
                        isTrashHot = isOverTrash
                    }
                )
            }
        }

        item {
            Box(modifier = Modifier.fillMaxWidth()) {
                MadingComposerCard(
                    draftText = uiState.draftText,
                    selectedColor = uiState.selectedColor,
                    colors = uiState.availableColors,
                    isCreating = uiState.isCreatingNote,
                    onTextChange = viewModel::updateDraftText,
                    onColorSelected = viewModel::selectColor,
                    onCreateNote = viewModel::createStickyNote
                )
            }
        }
    }
}

@Composable
private fun MadingBoard(
    notes: List<StickyNoteDto>,
    isLoading: Boolean,
    errorMessage: String?,
    boardWidth: Dp,
    boardHeight: Dp,
    isDragging: Boolean,
    isTrashHot: Boolean,
    onMove: (Int, Float, Float, Float) -> Unit,
    onDragStopped: (Int) -> Unit,
    onDeleteNote: (Int) -> Unit,
    onDraggingChanged: (Int?) -> Unit,
    onTrashHoverChanged: (Boolean) -> Unit
) {
    Box(
        modifier = Modifier
            .width(boardWidth)
            .height(boardHeight)
            .clip(RoundedCornerShape(30.dp))
            .background(
                brush = Brush.linearGradient(
                    colors = listOf(
                        Color(0xFFD7B089),
                        Color(0xFFC99D71)
                    )
                )
            )
            .border(
                width = 2.dp,
                color = Color(0xFFF1D5B4),
                shape = RoundedCornerShape(30.dp)
            )
            .padding(16.dp)
    ) {
        WoodBoardTexture()

        Box(
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .fillMaxWidth()
                .height(14.dp)
                .clip(RoundedCornerShape(bottomStart = 20.dp, bottomEnd = 20.dp))
                .background(Color(0xFFBD9164).copy(alpha = 0.55f))
        )

        if (isLoading) {
            CircularProgressIndicator(
                modifier = Modifier.align(Alignment.Center),
                color = MaterialTheme.colorScheme.surface
            )
        } else if (notes.isEmpty()) {
            EmptyMadingState(modifier = Modifier.align(Alignment.Center))
        }

        notes.forEach { note ->
            key(note.id) {
                DraggableStickyNote(
                    note = note,
                    boardWidth = boardWidth,
                    boardHeight = boardHeight,
                    modifier = Modifier.align(Alignment.TopStart),
                    onMove = onMove,
                    onDragStopped = onDragStopped,
                    onDelete = onDeleteNote,
                    onDraggingChanged = onDraggingChanged,
                    onTrashHoverChanged = onTrashHoverChanged
                )
            }
        }

        AnimatedVisibility(
            visible = isDragging,
            modifier = Modifier
                .align(Alignment.BottomEnd)
                .padding(MadingFloatingTrashInset),
            enter = fadeIn() + scaleIn(initialScale = 0.86f),
            exit = fadeOut() + scaleOut(targetScale = 0.86f)
        ) {
            FloatingTrashDropZone(isHot = isTrashHot)
        }

        errorMessage?.let { message ->
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

@Composable
private fun FloatingTrashDropZone(
    isHot: Boolean
) {
    val containerColor = if (isHot) {
        MaterialTheme.colorScheme.errorContainer.copy(alpha = 0.96f)
    } else {
        MaterialTheme.colorScheme.surface.copy(alpha = 0.94f)
    }
    val contentColor = if (isHot) {
        MaterialTheme.colorScheme.onErrorContainer
    } else {
        MaterialTheme.colorScheme.error
    }

    Surface(
        modifier = Modifier.size(MadingFloatingTrashSize),
        shape = CircleShape,
        color = containerColor,
        shadowElevation = if (isHot) 12.dp else 8.dp,
        border = androidx.compose.foundation.BorderStroke(
            width = 1.dp,
            color = contentColor.copy(alpha = 0.24f)
        )
    ) {
        Column(
            modifier = Modifier.fillMaxSize(),
            verticalArrangement = Arrangement.Center,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Icon(
                imageVector = Icons.Outlined.DeleteOutline,
                contentDescription = null,
                tint = contentColor
            )
            Text(
                text = if (isHot) "Lepas" else "Hapus",
                style = MaterialTheme.typography.labelMedium,
                color = contentColor,
                fontWeight = FontWeight.SemiBold
            )
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
        modifier = Modifier.fillMaxWidth(),
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
            .fillMaxSize()
            .clip(RoundedCornerShape(24.dp))
    ) {
        repeat(48) { index ->
            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight()
                    .background(
                        if (index % 2 == 0) {
                            Color(0x33DAB28A)
                        } else {
                            Color(0x22C79768)
                        }
                    )
            )
        }
    }
}

@Composable
private fun DraggableStickyNote(
    note: StickyNoteDto,
    boardWidth: Dp,
    boardHeight: Dp,
    modifier: Modifier = Modifier,
    onMove: (Int, Float, Float, Float) -> Unit,
    onDragStopped: (Int) -> Unit,
    onDelete: (Int) -> Unit,
    onDraggingChanged: (Int?) -> Unit,
    onTrashHoverChanged: (Boolean) -> Unit
) {
    val latestNote by rememberUpdatedState(note)
    val density = androidx.compose.ui.platform.LocalDensity.current
    val boardWidthValue = boardWidth.value
    val boardHeightValue = boardHeight.value
    val clampedX = clampStickyNoteX(latestNote.xPosition, boardWidthValue)
    val clampedY = clampStickyNoteY(latestNote.yPosition, boardHeightValue)
    val backgroundColor = runCatching {
        Color(android.graphics.Color.parseColor(note.color))
    }.getOrDefault(Color(0xFFFBE4EC))

    Card(
        modifier = modifier
            .graphicsLayer {
                translationX = with(density) { clampedX.dp.toPx() }
                translationY = with(density) { clampedY.dp.toPx() }
                rotationZ = latestNote.rotation
            }
            .width(MadingNoteWidth)
            .height(MadingNoteHeight)
            .pointerInput(note.id, boardWidthValue, boardHeightValue) {
                var currentX = clampedX
                var currentY = clampedY

                fun settleOrDelete() {
                    val overTrash = isStickyNoteOverFloatingTrash(
                        xPosition = currentX,
                        yPosition = currentY,
                        boardWidthDp = boardWidthValue,
                        boardHeightDp = boardHeightValue
                    )
                    onDraggingChanged(null)
                    onTrashHoverChanged(false)

                    if (overTrash) {
                        onDelete(latestNote.id)
                    } else {
                        onDragStopped(latestNote.id)
                    }
                }

                detectDragGestures(
                    onDragStart = {
                        currentX = clampStickyNoteX(latestNote.xPosition, boardWidthValue)
                        currentY = clampStickyNoteY(latestNote.yPosition, boardHeightValue)
                        onDraggingChanged(latestNote.id)
                    },
                    onDragEnd = { settleOrDelete() },
                    onDragCancel = { settleOrDelete() }
                ) { change, dragAmount ->
                    change.consume()
                    currentX = clampStickyNoteX(
                        xPosition = currentX + (dragAmount.x / density.density),
                        boardWidthDp = boardWidthValue
                    )
                    currentY = clampStickyNoteY(
                        yPosition = currentY + (dragAmount.y / density.density),
                        boardHeightDp = boardHeightValue
                    )
                    onTrashHoverChanged(
                        isStickyNoteOverFloatingTrash(
                            xPosition = currentX,
                            yPosition = currentY,
                            boardWidthDp = boardWidthValue,
                            boardHeightDp = boardHeightValue
                        )
                    )
                    onMove(
                        latestNote.id,
                        currentX,
                        currentY,
                        latestNote.rotation
                    )
                }
            },
        shape = RoundedCornerShape(2.dp),
        colors = CardDefaults.cardColors(containerColor = backgroundColor),
        elevation = CardDefaults.cardElevation(defaultElevation = 14.dp)
    ) {
        Box(modifier = Modifier.fillMaxSize()) {
            Box(
                modifier = Modifier
                    .align(Alignment.TopCenter)
                    .padding(top = 4.dp)
                    .size(width = 16.dp, height = 10.dp)
                    .clip(RoundedCornerShape(bottomStart = 10.dp, bottomEnd = 10.dp, topStart = 5.dp, topEnd = 5.dp))
                    .background(Color(0xFFB53F41))
            )

            Column(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(horizontal = 18.dp, vertical = 16.dp)
                    .padding(top = 6.dp),
                verticalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Text(
                    text = note.text,
                    style = TextStyle(
                        fontFamily = FontFamily.Serif,
                        fontWeight = FontWeight.Normal,
                        fontSize = 14.sp,
                        lineHeight = 26.sp,
                        color = Color(0xFF755F63)
                    ),
                    maxLines = 3,
                    overflow = TextOverflow.Ellipsis
                )
            }
        }
    }
}
