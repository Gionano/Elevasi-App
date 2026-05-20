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

import com.example.elevasi.data.model.ThemeSelection

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
    primary = ElevasiPrimaryDarkTheme,
    onPrimary = ElevasiBackgroundDark,
    primaryContainer = ElevasiPrimaryContainerDark,
    onPrimaryContainer = ElevasiOnPrimaryContainerDark,
    secondary = ElevasiSurfaceDark,
    onSecondary = ElevasiTextPrimaryDark,
    tertiary = ElevasiPrimaryDarkTheme,
    background = ElevasiBackgroundDark,
    onBackground = ElevasiTextPrimaryDark,
    surface = ElevasiSurfaceDark,
    onSurface = ElevasiTextPrimaryDark,
    surfaceVariant = ElevasiSurfaceDark,
    onSurfaceVariant = ElevasiTextSecondaryDark,
    surfaceContainerLow = ElevasiBackgroundDark,
    surfaceContainer = ElevasiBackgroundDark,
    surfaceContainerHigh = ElevasiSurfaceDark,
    outline = ElevasiTextSecondaryDark.copy(alpha = 0.3f),
    outlineVariant = ElevasiTextSecondaryDark.copy(alpha = 0.15f)
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
    themeSelection: ThemeSelection = ThemeSelection.FOLLOW_SYSTEM,
    isBirthdayMode: Boolean = false,
    content: @Composable () -> Unit
) {
    val darkTheme = when (themeSelection) {
        ThemeSelection.LIGHT -> false
        ThemeSelection.DARK -> true
        ThemeSelection.FOLLOW_SYSTEM -> isSystemInDarkTheme()
    }

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
