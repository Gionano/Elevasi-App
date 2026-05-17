package com.example.elevasi.core.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AutoStories
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.Lock
import androidx.compose.material.icons.outlined.LocalFlorist
import androidx.compose.material.icons.outlined.PushPin
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.AutoStories
import androidx.compose.material.icons.filled.LocalFlorist
import androidx.compose.material.icons.filled.PushPin
import androidx.compose.material.icons.filled.Lock
import androidx.compose.ui.graphics.vector.ImageVector

sealed class ElevasiDestination(
    val route: String,
    val label: String,
    val iconOutlined: ImageVector,
    val iconFilled: ImageVector
) {
    // ── Primary tabs (Bottom Navigation) ──────────────────────────
    data object Beranda : ElevasiDestination(
        route = "beranda",
        label = "Beranda",
        iconOutlined = Icons.Outlined.Home,
        iconFilled = Icons.Filled.Home
    )

    data object Taman : ElevasiDestination(
        route = "taman",
        label = "Taman",
        iconOutlined = Icons.Outlined.LocalFlorist,
        iconFilled = Icons.Filled.LocalFlorist
    )

    data object Mading : ElevasiDestination(
        route = "mading",
        label = "Mading",
        iconOutlined = Icons.Outlined.PushPin,
        iconFilled = Icons.Filled.PushPin
    )

    data object VerseHarian : ElevasiDestination(
        route = "verse_harian",
        label = "Verse",
        iconOutlined = Icons.Outlined.AutoStories,
        iconFilled = Icons.Filled.AutoStories
    )

    data object Dialog : ElevasiDestination(
        route = "dialog",
        label = "Dialog",
        iconOutlined = Icons.Outlined.Lock,
        iconFilled = Icons.Filled.Lock
    )

    companion object {
        val topLevel = listOf(Beranda, Taman, Mading, VerseHarian, Dialog)
    }
}

// ── Extra routes (not in bottom bar) ──────────────────────────────
object ElevasiRoutes {
    const val PENGATURAN_AKUN = "pengaturan_akun"
    const val TULIS_POSTINGAN = "tulis_postingan"
}
