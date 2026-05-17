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

private val ElevasiLightScheme = lightColorScheme(
    primary = ElevasiPrimary,
    onPrimary = ElevasiOnPrimary,
    primaryContainer = ElevasiSurface,
    onPrimaryContainer = ElevasiPrimaryDark,
    secondary = ElevasiPrimaryLight,
    onSecondary = ElevasiTextPrimary,
    secondaryContainer = ElevasiSurface,
    onSecondaryContainer = ElevasiTextPrimary,
    tertiary = ElevasiPrimaryLight,
    onTertiary = ElevasiOnPrimary,
    tertiaryContainer = ElevasiSurfaceDim,
    onTertiaryContainer = ElevasiTextPrimary,
    background = ElevasiBackground,
    onBackground = ElevasiTextPrimary,
    surface = ElevasiBackground,
    onSurface = ElevasiTextPrimary,
    surfaceVariant = ElevasiSurface,
    onSurfaceVariant = ElevasiTextSecondary,
    surfaceContainerLowest = ElevasiBackground,
    surfaceContainerLow = ElevasiBackground,
    surfaceContainer = ElevasiBackground,
    surfaceContainerHigh = ElevasiSurface,
    surfaceContainerHighest = ElevasiSurfaceDim,
    outline = ElevasiDivider,
    outlineVariant = ElevasiDivider.copy(alpha = 0.5f)
)

private val ElevasiDarkScheme = darkColorScheme(
    primary = ElevasiPrimaryLight,
    onPrimary = ElevasiDarkBackground,
    primaryContainer = ElevasiPrimaryDark,
    onPrimaryContainer = ElevasiDarkOnSurface,
    secondary = ElevasiPrimaryLight,
    onSecondary = ElevasiDarkBackground,
    background = ElevasiDarkBackground,
    onBackground = ElevasiDarkOnSurface,
    surface = ElevasiDarkSurface,
    onSurface = ElevasiDarkOnSurface,
    surfaceVariant = ElevasiDarkSurface,
    onSurfaceVariant = ElevasiDarkMuted
)

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
            darkTheme -> ElevasiDarkScheme
            else -> ElevasiLightScheme
        },
        typography = ElevasiTypography,
        shapes = ElevasiShapes,
        content = content
    )
}
