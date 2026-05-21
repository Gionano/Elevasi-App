package com.example.elevasi.core.navigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.feature.beranda.FeedScreen
import com.example.elevasi.feature.beranda.ComposePostScreen
import com.example.elevasi.feature.settings.AccountSettingsScreen
import com.example.elevasi.feature.journal.JournalScreen
import com.example.elevasi.feature.mading.InteractiveMadingScreen
import com.example.elevasi.feature.plant.VirtualPlantScreen
import com.example.elevasi.feature.verse.DailyVerseScreen
import com.example.elevasi.feature.beranda.ReplyScreen
import androidx.navigation.NavType
import androidx.navigation.navArgument

@Composable
fun ElevasiNavHost(
    navController: NavHostController,
    session: UserSessionDto,
    isBirthdayMode: Boolean,
    modifier: Modifier = Modifier,
    onReplayTutorial: () -> Unit = {}
) {
    NavHost(
        navController = navController,
        startDestination = ElevasiDestination.Beranda.route,
        modifier = modifier
    ) {
        // ── Tab: Beranda (Feed / Kertas Terbang) ─────────────────────
        composable(ElevasiDestination.Beranda.route) {
            FeedScreen(
                session = session,
                onNavigateToReply = { postId, postAuthor, postContent, postTime, postMediaUrl ->
                    navController.navigate(
                        ElevasiDestination.Balasan.createRoute(
                            postId = postId,
                            postAuthor = postAuthor,
                            postContent = postContent,
                            postTime = postTime,
                            postMediaUrl = postMediaUrl
                        )
                    )
                }
            )
        }

        // ── Tab: Taman (Virtual Plant) ───────────────────────────────
        composable(ElevasiDestination.Taman.route) {
            VirtualPlantScreen()
        }

        // ── Tab: Mading (Interactive Sticky Notes) ───────────────────
        composable(ElevasiDestination.Mading.route) {
            InteractiveMadingScreen(session = session)
        }

        // ── Tab: Verse Harian (Daily Verse / Gerbang Langit) ─────────
        composable(ElevasiDestination.VerseHarian.route) {
            DailyVerseScreen(
                session = session,
                isBirthdayMode = isBirthdayMode
            )
        }

        // ── Tab: Dialog (Locked Reflection) ──────────────────────────
        composable(ElevasiDestination.Dialog.route) {
            JournalScreen(session = session)
        }

        // ── Extra: Pengaturan Akun ───────────────────────────────────
        composable(ElevasiDestination.PengaturanAkun.route) {
            AccountSettingsScreen(
                session = session,
                onNavigateBack = { navController.popBackStack() },
                onReplayTutorial = onReplayTutorial
            )
        }

        // ── Extra: Tulis Postingan ───────────────────────────────────
        composable(ElevasiDestination.TulisPostingan.route) {
            ComposePostScreen(
                session = session,
                onPostPublished = { navController.popBackStack() }
            )
        }

        // ── Extra: Balasan / Thread ──────────────────────────────────
        composable(
            route = ElevasiDestination.Balasan.route,
            arguments = listOf(
                navArgument("postId") { type = NavType.IntType },
                navArgument("postAuthor") { type = NavType.StringType },
                navArgument("postContent") { type = NavType.StringType },
                navArgument("postTime") { type = NavType.StringType },
                navArgument("postMediaUrl") { 
                    type = NavType.StringType
                    nullable = true
                    defaultValue = null
                }
            )
        ) { backStackEntry ->
            val postId = backStackEntry.arguments?.getInt("postId") ?: return@composable
            val postAuthor = backStackEntry.arguments?.getString("postAuthor") ?: ""
            val postContent = backStackEntry.arguments?.getString("postContent") ?: ""
            val postTime = backStackEntry.arguments?.getString("postTime") ?: ""
            val postMediaUrl = backStackEntry.arguments?.getString("postMediaUrl")

            ReplyScreen(
                postId = postId,
                postAuthor = postAuthor,
                postContent = postContent,
                postTime = postTime,
                postMediaUrl = postMediaUrl,
                session = session,
                onNavigateBack = { navController.popBackStack() }
            )
        }
    }
}
