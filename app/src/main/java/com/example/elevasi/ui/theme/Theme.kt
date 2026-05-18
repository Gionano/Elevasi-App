package com.example.elevasi.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Shapes
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.ui.unit.dp

// ── Light Color Scheme (Warm Ivory + Rose Gold) ──────────────────────
private val LightColorScheme = lightColorScheme(
    primary = ElevasiPrimary,
    onPrimary = Color.White,
    primaryContainer = ElevasiPrimaryContainer,
    onPrimaryContainer = ElevasiOnPrimaryContainer,
    secondary = ElevasiSurfaceContainer,
    onSecondary = ElevasiTextPrimary,
    tertiary = ElevasiPrimaryDark,
    background = ElevasiBackground,
    onBackground = ElevasiTextPrimary,
    surface = ElevasiSurface,
    onSurface = ElevasiTextPrimary,
    surfaceVariant = ElevasiSurfaceContainer,
    onSurfaceVariant = ElevasiTextSecondary,
    surfaceContainerLow = ElevasiBackground,
    surfaceContainer = ElevasiBackground,
    surfaceContainerHigh = ElevasiSurface,
    outline = ElevasiTextSecondary.copy(alpha = 0.3f),
    outlineVariant = ElevasiTextSecondary.copy(alpha = 0.15f)
)

// ── Dark Color Scheme ────────────────────────────────────────────────
private val DarkColorScheme = darkColorScheme(
    primary = RoseGlow,
    onPrimary = MossNight,
    secondary = SageMist,
    onSecondary = MossNight,
    tertiary = Sandstone,
    background = MossNight,
    onBackground = Ivory,
    surface = WarmSlate,
    onSurface = Ivory,
    surfaceVariant = WarmSlate,
    onSurfaceVariant = RoseGlow
)

// ── Birthday Color Scheme ────────────────────────────────────────────
private val BirthdayColorScheme = lightColorScheme(
    primary = MagentaBloom,
    onPrimary = PetalMist,
    secondary = RosePetal,
    onSecondary = BerryInk,
    tertiary = BlushPink,
    background = PetalMist,
    onBackground = BerryInk,
    surface = Color.White.copy(alpha = 0.82f),
    onSurface = BerryInk,
    surfaceVariant = BlushPink,
    onSurfaceVariant = BerryInk,
    secondaryContainer = RosePetal.copy(alpha = 0.72f),
    onSecondaryContainer = BerryInk,
    tertiaryContainer = BlushPink.copy(alpha = 0.72f),
    onTertiaryContainer = BerryInk
)

// ── Shapes ───────────────────────────────────────────────────────────
private val ElevasiShapes = Shapes(
    small = RoundedCornerShape(16.dp),
    medium = RoundedCornerShape(22.dp),
    large = RoundedCornerShape(28.dp),
    extraLarge = RoundedCornerShape(34.dp)
)

@Composable
fun ElevasiTheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    isBirthdayMode: Boolean = false,
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = when {
            isBirthdayMode -> BirthdayColorScheme
            darkTheme -> DarkColorScheme
            else -> LightColorScheme
        },
        typography = ElevasiTypography,
        shapes = ElevasiShapes,
        content = content
    )
}
