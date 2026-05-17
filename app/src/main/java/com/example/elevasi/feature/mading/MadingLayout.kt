package com.example.elevasi.feature.mading

import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import com.example.elevasi.data.model.StickyNoteDto

val MadingBoardPreferredWidth: Dp = 640.dp
val MadingBoardHeight: Dp = 420.dp
val MadingNoteWidth: Dp = 156.dp
val MadingNoteHeight: Dp = 104.dp
val MadingBoardPadding: Dp = 16.dp
val MadingFloatingTrashSize: Dp = 84.dp
val MadingFloatingTrashInset: Dp = 16.dp

fun resolveMadingBoardWidth(maxAvailableWidth: Dp): Dp {
    return maxAvailableWidth
}

fun clampStickyNoteX(
    xPosition: Float,
    boardWidthDp: Float
): Float {
    val minX = MadingBoardPadding.value
    val maxX = (boardWidthDp - MadingNoteWidth.value - MadingBoardPadding.value)
        .coerceAtLeast(minX)
    return xPosition.coerceIn(minX, maxX)
}

fun clampStickyNoteY(
    yPosition: Float,
    boardHeightDp: Float = MadingBoardHeight.value
): Float {
    val minY = MadingBoardPadding.value
    val maxY = (boardHeightDp - MadingNoteHeight.value - MadingBoardPadding.value)
        .coerceAtLeast(minY)
    return yPosition.coerceIn(minY, maxY)
}

fun clampStickyNote(
    note: StickyNoteDto,
    boardWidthDp: Float = MadingBoardPreferredWidth.value,
    boardHeightDp: Float = MadingBoardHeight.value
): StickyNoteDto {
    return note.copy(
        xPosition = clampStickyNoteX(note.xPosition, boardWidthDp),
        yPosition = clampStickyNoteY(note.yPosition, boardHeightDp)
    )
}

fun isStickyNoteOverFloatingTrash(
    xPosition: Float,
    yPosition: Float,
    boardWidthDp: Float,
    boardHeightDp: Float,
    noteWidthDp: Float = MadingNoteWidth.value,
    noteHeightDp: Float = MadingNoteHeight.value
): Boolean {
    val noteCenterX = xPosition + (noteWidthDp / 2f)
    val noteCenterY = yPosition + (noteHeightDp / 2f)
    val trashStartX = (boardWidthDp - MadingFloatingTrashSize.value - MadingFloatingTrashInset.value)
        .coerceAtLeast(MadingBoardPadding.value)
    val trashStartY = (boardHeightDp - MadingFloatingTrashSize.value - MadingFloatingTrashInset.value)
        .coerceAtLeast(MadingBoardPadding.value)
    val trashEndX = trashStartX + MadingFloatingTrashSize.value
    val trashEndY = trashStartY + MadingFloatingTrashSize.value

    return noteCenterX in trashStartX..trashEndX && noteCenterY in trashStartY..trashEndY
}
