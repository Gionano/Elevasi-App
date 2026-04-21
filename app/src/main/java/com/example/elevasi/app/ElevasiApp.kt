package com.example.elevasi.app

import android.content.Context
import android.content.Intent
import android.net.Uri
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.BoxScope
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.consumeWindowInsets
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.widthIn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.AlertDialogDefaults
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.example.elevasi.core.navigation.ElevasiDestination
import com.example.elevasi.core.navigation.ElevasiNavHost
import com.example.elevasi.core.notifications.BirthdayAlarmScheduler
import com.example.elevasi.data.model.AppUpdateInfoDto
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.ui.theme.ElevasiTheme

@Composable
fun ElevasiApp() {
    val context = LocalContext.current
    val appEntryViewModel: AppEntryViewModel = viewModel(
        factory = AppEntryViewModel.factory(context)
    )
    val inAppUpdateViewModel: InAppUpdateViewModel = viewModel()
    val appEntryState by appEntryViewModel.uiState.collectAsStateWithLifecycle()
    val updateState by inAppUpdateViewModel.uiState.collectAsStateWithLifecycle()

    val session = appEntryState.session

    if (session == null) {
        ElevasiTheme {
            Box(modifier = Modifier.fillMaxSize()) {
                if (appEntryState.isLoading) {
                    Box(
                        modifier = Modifier.fillMaxSize(),
                        contentAlignment = Alignment.Center
                    ) {
                        CircularProgressIndicator()
                    }
                } else {
                    NameRegistrationScreen(
                        nameInput = appEntryState.nameInput,
                        birthdayDayInput = appEntryState.birthdayDayInput,
                        birthdayMonthInput = appEntryState.birthdayMonthInput,
                        isLoading = appEntryState.isLoading,
                        isRegistering = appEntryState.isRegistering,
                        errorMessage = appEntryState.errorMessage,
                        onNameChange = appEntryViewModel::updateNameInput,
                        onBirthdayDayChange = appEntryViewModel::updateBirthdayDayInput,
                        onBirthdayMonthChange = appEntryViewModel::updateBirthdayMonthInput,
                        onSubmit = appEntryViewModel::registerName
                    )
                }

                InAppUpdateDialog(
                    updateInfo = updateState.availableUpdate,
                    onDismiss = inAppUpdateViewModel::dismissUpdateDialog,
                    onDownloadUpdate = { downloadUrl ->
                        launchUpdateDownload(context, downloadUrl)
                        inAppUpdateViewModel.dismissUpdateDialog()
                    }
                )
            }
        }
        return
    }

    AuthenticatedElevasiApp(
        session = session,
        updateInfo = updateState.availableUpdate,
        onDismissUpdateDialog = inAppUpdateViewModel::dismissUpdateDialog,
        onDownloadUpdate = { downloadUrl ->
            launchUpdateDownload(context, downloadUrl)
            inAppUpdateViewModel.dismissUpdateDialog()
        }
    )
}

@Composable
private fun AuthenticatedElevasiApp(
    session: UserSessionDto,
    updateInfo: AppUpdateInfoDto?,
    onDismissUpdateDialog: () -> Unit,
    onDownloadUpdate: (String) -> Unit
) {
    val context = LocalContext.current
    val birthdayModeViewModel: BirthdayModeViewModel = viewModel(
        factory = BirthdayModeViewModel.factory(session)
    )
    val birthdayState by birthdayModeViewModel.uiState.collectAsStateWithLifecycle()
    val isBirthdayMode = birthdayState.isMyBirthday
    val navController = rememberNavController()
    val destinations = ElevasiDestination.topLevel
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    LaunchedEffect(session.userId) {
        BirthdayAlarmScheduler.scheduleNextBirthdayReminder(context, session)
    }

    ElevasiTheme(isBirthdayMode = isBirthdayMode) {
        Box(modifier = Modifier.fillMaxSize()) {
            if (isBirthdayMode) {
                BirthdayModeBackdrop()
            } else {
                DefaultModeBackdrop()
            }

            Scaffold(
                containerColor = Color.Transparent,
                bottomBar = {
                    FloatingBottomBarShell {
                        NavigationBar(
                            containerColor = Color.Transparent
                        ) {
                            destinations.forEach { destination ->
                                NavigationBarItem(
                                    selected = currentRoute == destination.route,
                                    onClick = {
                                        navController.navigate(destination.route) {
                                            popUpTo(navController.graph.findStartDestination().id) {
                                                saveState = true
                                            }
                                            launchSingleTop = true
                                            restoreState = true
                                        }
                                    },
                                    colors = NavigationBarItemDefaults.colors(
                                        selectedIconColor = MaterialTheme.colorScheme.onPrimary,
                                        selectedTextColor = MaterialTheme.colorScheme.onSurface,
                                        indicatorColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.95f),
                                        unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                                        unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant
                                    ),
                                    icon = {
                                        Icon(
                                            imageVector = destination.icon,
                                            contentDescription = destination.label
                                        )
                                    },
                                    label = {
                                        Text(text = destination.label)
                                    }
                                )
                            }
                        }
                    }
                }
            ) { innerPadding ->
                ElevasiNavHost(
                    navController = navController,
                    session = session,
                    isBirthdayMode = isBirthdayMode,
                    modifier = Modifier
                        .padding(innerPadding)
                        .consumeWindowInsets(innerPadding)
                )
            }

            InAppUpdateDialog(
                updateInfo = updateInfo,
                onDismiss = onDismissUpdateDialog,
                onDownloadUpdate = onDownloadUpdate
            )
        }
    }
}

@Composable
private fun FloatingBottomBarShell(
    content: @Composable BoxScope.() -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 18.dp, vertical = 14.dp),
        contentAlignment = Alignment.Center
    ) {
        Surface(
            modifier = Modifier.widthIn(max = 620.dp),
            color = MaterialTheme.colorScheme.surface.copy(alpha = 0.9f),
            shape = MaterialTheme.shapes.extraLarge,
            border = BorderStroke(
                width = 1.dp,
                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.08f)
            ),
            tonalElevation = 8.dp,
            shadowElevation = 12.dp
        ) {
            Box(
                modifier = Modifier.padding(horizontal = 6.dp, vertical = 4.dp),
                content = content
            )
        }
    }
}

@Composable
private fun InAppUpdateDialog(
    updateInfo: AppUpdateInfoDto?,
    onDismiss: () -> Unit,
    onDownloadUpdate: (String) -> Unit
) {
    if (updateInfo == null) return

    AlertDialog(
        onDismissRequest = onDismiss,
        shape = RoundedCornerShape(28.dp),
        containerColor = AlertDialogDefaults.containerColor.copy(alpha = 0.95f),
        tonalElevation = 6.dp,
        title = {
            Text(text = "Pembaruan tersedia")
        },
        text = {
            Column(verticalArrangement = Arrangement.spacedBy(12.dp)) {
                Text(
                    text = "Versi ${updateInfo.versionName} sudah tersedia untuk diunduh.",
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    text = updateInfo.releaseNotes,
                    style = MaterialTheme.typography.bodyMedium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    onDownloadUpdate(updateInfo.downloadUrl)
                }
            ) {
                Text(text = "Download Update")
            }
        },
        dismissButton = {
            TextButton(onClick = onDismiss) {
                Text(text = "Nanti")
            }
        }
    )
}

private fun launchUpdateDownload(context: Context, downloadUrl: String) {
    val browserIntent = Intent(Intent.ACTION_VIEW, Uri.parse(downloadUrl)).apply {
        addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
    }
    context.startActivity(browserIntent)
}
