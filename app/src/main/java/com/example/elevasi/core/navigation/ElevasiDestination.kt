package com.example.elevasi.core.navigation

import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.AutoStories
import androidx.compose.material.icons.outlined.Home
import androidx.compose.material.icons.outlined.Lock
import androidx.compose.material.icons.outlined.LocalFlorist
import androidx.compose.material.icons.outlined.PushPin
import androidx.compose.material.icons.outlined.ChatBubbleOutline
import androidx.compose.material.icons.rounded.Edit
import androidx.compose.ui.graphics.vector.ImageVector
import android.net.Uri

/**
 * All navigation routes for Elevasi.
 *
 * [TopLevel] items appear in the Bottom Navigation Bar.
 * [Extra] routes are navigated to programmatically (FAB, profile tap, etc.).
 */
sealed class ElevasiDestination(
    val route: String,
    val label: String,
    val icon: ImageVector
) {
    // ── Top-level tabs (Bottom Navigation) ───────────────────────────
    data object Beranda : ElevasiDestination(
        route = "beranda",
        label = "Beranda",
        icon = Icons.Outlined.Home
    )

    data object Taman : ElevasiDestination(
        route = "taman",
        label = "Taman",
        icon = Icons.Outlined.LocalFlorist
    )

    data object Mading : ElevasiDestination(
        route = "mading",
        label = "Mading",
        icon = Icons.Outlined.PushPin
    )

    data object VerseHarian : ElevasiDestination(
        route = "verse_harian",
        label = "Verse",
        icon = Icons.Outlined.AutoStories
    )

    data object Dialog : ElevasiDestination(
        route = "dialog",
        label = "Dialog",
        icon = Icons.Outlined.Lock
    )

    // ── Extra routes (non-tab) ───────────────────────────────────────
    data object PengaturanAkun : ElevasiDestination(
        route = "pengaturan_akun",
        label = "Pengaturan",
        icon = Icons.Outlined.Home // not used in bottom bar
    )

    data object TulisPostingan : ElevasiDestination(
        route = "tulis_postingan",
        label = "Tulis",
        icon = Icons.Rounded.Edit // not used in bottom bar
    )

    data object Balasan : ElevasiDestination(
        route = "balasan/{postId}/{postAuthor}/{postContent}/{postTime}?postMediaUrl={postMediaUrl}",
        label = "Balasan",
        icon = Icons.Outlined.ChatBubbleOutline // not used in bottom bar
    ) {
        fun createRoute(
            postId: Int,
            postAuthor: String,
            postContent: String,
            postTime: String,
            postMediaUrl: String?
        ): String {
            val base = "balasan/$postId/${Uri.encode(postAuthor)}/${Uri.encode(postContent)}/${Uri.encode(postTime)}"
            return if (postMediaUrl != null) {
                "$base?postMediaUrl=${Uri.encode(postMediaUrl)}"
            } else {
                base
            }
        }
    }

    companion object {
        /** Items shown in the Bottom Navigation Bar. */
        val topLevel get() = listOf(Beranda, Taman, Mading, VerseHarian, Dialog)
    }
}
