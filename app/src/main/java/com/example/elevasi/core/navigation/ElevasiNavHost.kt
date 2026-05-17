package com.example.elevasi.core.navigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.feature.beranda.FeedScreen
import com.example.elevasi.feature.journal.JournalScreen
import com.example.elevasi.feature.mading.InteractiveMadingScreen
import com.example.elevasi.feature.plant.VirtualPlantScreen
import com.example.elevasi.feature.verse.DailyVerseScreen

@Composable
fun ElevasiNavHost(
    navController: NavHostController,
    session: UserSessionDto,
    isBirthdayMode: Boolean,
    modifier: Modifier = Modifier
) {
    NavHost(
        navController = navController,
        startDestination = ElevasiDestination.Beranda.route,
        modifier = modifier
    ) {
        // ── Primary tabs ──────────────────────────────────────────
        composable(ElevasiDestination.Beranda.route) {
            FeedScreen(session = session)
        }

        composable(ElevasiDestination.Taman.route) {
            VirtualPlantScreen()
        }

        composable(ElevasiDestination.Mading.route) {
            InteractiveMadingScreen(session = session)
        }

        composable(ElevasiDestination.VerseHarian.route) {
            DailyVerseScreen(
                session = session,
                isBirthdayMode = isBirthdayMode
            )
        }

        composable(ElevasiDestination.Dialog.route) {
            JournalScreen(session = session)
        }

        // ── Extra routes ──────────────────────────────────────────
        composable(ElevasiRoutes.PENGATURAN_AKUN) {
            // TODO: PengaturanAkunScreen(session = session)
        }

        composable(ElevasiRoutes.TULIS_POSTINGAN) {
            // TODO: TulisPostinganScreen(session = session)
        }
    }
}
