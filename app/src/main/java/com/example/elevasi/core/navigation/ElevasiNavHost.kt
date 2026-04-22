package com.example.elevasi.core.navigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.feature.dashboard.DashboardScreen
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
        startDestination = ElevasiDestination.Dashboard.route,
        modifier = modifier
    ) {
        composable(ElevasiDestination.Dashboard.route) {
            DashboardScreen(session = session)
        }
        composable(ElevasiDestination.DailyVerse.route) {
            DailyVerseScreen(
                session = session,
                isBirthdayMode = isBirthdayMode
            )
        }
        composable(ElevasiDestination.Plant.route) {
            VirtualPlantScreen()
        }
        composable(ElevasiDestination.Mading.route) {
            InteractiveMadingScreen(session = session)
        }
        composable(ElevasiDestination.Journal.route) {
            JournalScreen(session = session)
        }
    }
}
