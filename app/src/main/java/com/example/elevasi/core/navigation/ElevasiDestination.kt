package com.example.elevasi.core.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AutoStories
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.Lock
import androidx.compose.material.icons.outlined.LocalFlorist
import androidx.compose.material.icons.outlined.PushPin
import androidx.compose.ui.graphics.vector.ImageVector

sealed class ElevasiDestination(
    val route: String,
    val label: String,
    val icon: ImageVector
) {
    data object Dashboard : ElevasiDestination(
        route = "dashboard",
        label = "Presence",
        icon = Icons.Outlined.Home
    )

    data object DailyVerse : ElevasiDestination(
        route = "daily_verse",
        label = "Gerbang Langit",
        icon = Icons.Outlined.AutoStories
    )

    data object Plant : ElevasiDestination(
        route = "plant",
        label = "Plant",
        icon = Icons.Outlined.LocalFlorist
    )

    data object Mading : ElevasiDestination(
        route = "mading",
        label = "Mading",
        icon = Icons.Outlined.PushPin
    )

    data object Journal : ElevasiDestination(
        route = "journal",
        label = "Dialog",
        icon = Icons.Outlined.Lock
    )

    companion object {
        val topLevel = listOf(Dashboard, Plant, Mading, DailyVerse, Journal)
    }
}
