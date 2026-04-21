package com.example.elevasi.app

import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.StrokeCap
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.unit.dp
import kotlin.math.sin

@Composable
fun DefaultModeBackdrop(modifier: Modifier = Modifier) {
    Canvas(modifier = modifier.fillMaxSize()) {
        drawRect(
            brush = Brush.linearGradient(
                colors = listOf(
                    Color(0xFFFCF8F2),
                    Color(0xFFF6EFE7),
                    Color(0xFFF3ECE4)
                ),
                start = Offset.Zero,
                end = Offset(size.width, size.height)
            )
        )

        drawCircle(
            color = Color(0xFFE7D9CA).copy(alpha = 0.28f),
            radius = size.minDimension * 0.38f,
            center = Offset(size.width * 0.12f, size.height * 0.1f)
        )
        drawCircle(
            color = Color(0xFFDDE7DE).copy(alpha = 0.34f),
            radius = size.minDimension * 0.32f,
            center = Offset(size.width * 0.92f, size.height * 0.22f)
        )
        drawCircle(
            color = Color.White.copy(alpha = 0.45f),
            radius = size.minDimension * 0.28f,
            center = Offset(size.width * 0.72f, size.height * 0.86f)
        )
    }
}

@Composable
fun BirthdayModeBackdrop(modifier: Modifier = Modifier) {
    val transition = rememberInfiniteTransition(label = "birthdayBackdrop")
    val shimmer by transition.animateFloat(
        initialValue = 0f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 5200, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "birthdayBackdropShimmer"
    )

    Canvas(
        modifier = modifier.fillMaxSize()
    ) {
        drawRect(
            brush = Brush.linearGradient(
                colors = listOf(
                    Color(0xFFFFF3F8),
                    Color(0xFFFFE0EB),
                    Color(0xFFF7D1E4),
                    Color(0xFFFFF6FA)
                ),
                start = Offset.Zero,
                end = Offset(size.width, size.height)
            )
        )

        val stars = listOf(
            Triple(0.14f, 0.18f, 20f),
            Triple(0.82f, 0.16f, 16f),
            Triple(0.22f, 0.72f, 14f),
            Triple(0.74f, 0.64f, 18f),
            Triple(0.58f, 0.36f, 12f)
        )

        drawCircle(
            color = Color.White.copy(alpha = 0.42f),
            radius = size.minDimension * 0.34f,
            center = Offset(
                x = size.width * (0.2f + 0.05f * shimmer),
                y = size.height * 0.15f
            )
        )
        drawCircle(
            color = Color(0xFFFFBCD3).copy(alpha = 0.22f),
            radius = size.minDimension * 0.4f,
            center = Offset(
                x = size.width * 0.84f,
                y = size.height * (0.24f + 0.03f * shimmer)
            )
        )

        stars.forEachIndexed { index, star ->
            val x = size.width * star.first
            val yBase = size.height * star.second
            val drift = sin((shimmer * 6f) + index) * 18f
            val y = yBase + drift
            val half = star.third

            drawCircle(
                color = Color.White.copy(alpha = 0.38f),
                radius = half * 1.5f,
                center = Offset(x, y)
            )
            drawLine(
                color = Color.White.copy(alpha = 0.95f),
                start = Offset(x, y - half),
                end = Offset(x, y + half),
                strokeWidth = 2.2.dp.toPx(),
                cap = StrokeCap.Round
            )
            drawLine(
                color = Color.White.copy(alpha = 0.95f),
                start = Offset(x - half, y),
                end = Offset(x + half, y),
                strokeWidth = 2.2.dp.toPx(),
                cap = StrokeCap.Round
            )
            drawCircle(
                color = Color(0xFFFFB1CE).copy(alpha = 0.38f),
                radius = half * 0.56f,
                center = Offset(x, y),
                style = Stroke(width = 1.4.dp.toPx())
            )
        }
    }
}
