package com.example.elevasi.feature.settings

import androidx.compose.animation.animateColorAsState
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.material.icons.outlined.CalendarMonth
import androidx.compose.material.icons.outlined.CellTower
import androidx.compose.material.icons.outlined.Info
import androidx.compose.material.icons.outlined.HelpOutline
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.AlertDialog
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ListItem
import androidx.compose.material3.ListItemDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.OutlinedTextFieldDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.SnackbarDuration
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.BuildConfig
import com.example.elevasi.data.model.ThemeSelection
import androidx.compose.material.icons.outlined.Palette
import android.net.Uri
import android.os.Environment
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.material.icons.outlined.CameraAlt
import androidx.compose.material.icons.outlined.Delete
import androidx.compose.material.icons.outlined.Image
import androidx.compose.material.icons.outlined.Visibility
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.rememberModalBottomSheetState
import androidx.compose.ui.platform.LocalContext
import androidx.core.content.FileProvider
import coil.compose.AsyncImage
import com.canhub.cropper.CropImageContract
import com.canhub.cropper.CropImageContractOptions
import com.canhub.cropper.CropImageOptions
import com.canhub.cropper.CropImageView
import androidx.compose.material3.DatePicker
import androidx.compose.material3.DatePickerDialog
import androidx.compose.material3.TextButton
import androidx.compose.material3.rememberDatePickerState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import java.io.File
import java.time.Instant
import java.time.ZoneId
import java.time.ZonedDateTime

// ─────────────────────────────────────────────────────────────────────
// Account Settings Screen ("Pengaturan Ruang")
// ─────────────────────────────────────────────────────────────────────

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun AccountSettingsScreen(
    session: UserSessionDto,
    onNavigateBack: () -> Unit,
    modifier: Modifier = Modifier,
    onReplayTutorial: () -> Unit = {}
) {
    val viewModel: ProfileViewModel = viewModel(
        factory = ProfileViewModel.factory(session)
    )
    val themeViewModel: ThemeViewModel = viewModel(
        factory = ThemeViewModel.factory(LocalContext.current)
    )
    val state by viewModel.uiState.collectAsStateWithLifecycle()
    val themeSelection by themeViewModel.themeState.collectAsStateWithLifecycle()
    val snackbarHostState = remember { SnackbarHostState() }

    // Snackbar saat simpan berhasil
    LaunchedEffect(state.saveSuccess) {
        if (state.saveSuccess) {
            snackbarHostState.showSnackbar(
                message = "Perubahan tersimpan ✓",
                duration = SnackbarDuration.Short
            )
            viewModel.clearSaveSuccess()
        }
    }

    // Snackbar saat error
    LaunchedEffect(state.errorMessage) {
        state.errorMessage?.let { msg ->
            snackbarHostState.showSnackbar(
                message = msg,
                duration = SnackbarDuration.Short
            )
        }
    }

    val context = LocalContext.current

    // ── Bottom sheet state ───────────────────────────────────────────
    var showAvatarSheet by remember { mutableStateOf(false) }
    var showImageViewer by remember { mutableStateOf(false) }
    val sheetState = rememberModalBottomSheetState(skipPartiallyExpanded = true)

    // ── Camera URI helper ────────────────────────────────────────────
    val cameraImageUri = remember {
        val file = File(context.getExternalFilesDir(Environment.DIRECTORY_PICTURES), "avatar_temp.jpg")
        FileProvider.getUriForFile(context, "${context.packageName}.provider", file)
    }

    // ── Cropper contract (1:1 square, circle guide) ──────────────────
    val cropLauncher = rememberLauncherForActivityResult(CropImageContract()) { result ->
        if (result.isSuccessful) {
            result.uriContent?.let { cropped -> viewModel.uploadAvatar(context, cropped) }
        }
        showAvatarSheet = false
    }

    fun launchCropper(sourceUri: Uri?) {
        val opts = CropImageContractOptions(
            uri = sourceUri,
            cropImageOptions = CropImageOptions(
                aspectRatioX = 1,
                aspectRatioY = 1,
                fixAspectRatio = true,
                cropShape = CropImageView.CropShape.OVAL,
                guidelines = CropImageView.Guidelines.ON,
                outputRequestWidth = 512,
                outputRequestHeight = 512,
            )
        )
        cropLauncher.launch(opts)
    }

    // ── Gallery picker → cropper ─────────────────────────────────────
    val galleryLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.GetContent()
    ) { uri -> launchCropper(uri) }

    // ── Camera → cropper ─────────────────────────────────────────────
    val cameraLauncher = rememberLauncherForActivityResult(
        ActivityResultContracts.TakePicture()
    ) { success -> if (success) launchCropper(cameraImageUri) }

    var showDatePicker by remember { mutableStateOf(false) }
    val datePickerState = rememberDatePickerState(
        initialSelectedDateMillis = ZonedDateTime.now(ZoneId.systemDefault())
            .withMonth(state.birthdayMonth)
            .withDayOfMonth(state.birthdayDay)
            .toInstant()
            .toEpochMilli()
    )

    if (showDatePicker) {
        DatePickerDialog(
            onDismissRequest = { showDatePicker = false },
            confirmButton = {
                TextButton(
                    onClick = {
                        datePickerState.selectedDateMillis?.let { millis ->
                            val date = Instant.ofEpochMilli(millis).atZone(ZoneId.systemDefault())
                            viewModel.updateBirthday(date.monthValue, date.dayOfMonth)
                        }
                        showDatePicker = false
                    }
                ) {
                    Text("Pilih")
                }
            },
            dismissButton = {
                TextButton(onClick = { showDatePicker = false }) {
                    Text("Batal")
                }
            }
        ) {
            DatePicker(state = datePickerState)
        }
    }

    Scaffold(
        modifier = modifier,
        containerColor = MaterialTheme.colorScheme.background,
        snackbarHost = { SnackbarHost(snackbarHostState) },
        topBar = {
            TopAppBar(
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.background,
                    scrolledContainerColor = MaterialTheme.colorScheme.background,
                    titleContentColor = MaterialTheme.colorScheme.onBackground,
                    navigationIconContentColor = MaterialTheme.colorScheme.onBackground
                ),
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Rounded.ArrowBack,
                            contentDescription = "Kembali"
                        )
                    }
                },
                title = {
                    Text(
                        text = "Pengaturan Ruang",
                        fontFamily = FontFamily.Serif,
                        fontWeight = FontWeight.Medium,
                        fontSize = 20.sp
                    )
                }
            )
        }
    ) { innerPadding ->
        if (state.isLoading) {
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(innerPadding),
                contentAlignment = Alignment.Center
            ) {
                CircularProgressIndicator(color = MaterialTheme.colorScheme.primary)
            }
            return@Scaffold
        }

        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding),
            contentPadding = PaddingValues(bottom = 32.dp)
        ) {
            // ── Hero Section ─────────────────────────────────────────
            item {
                HeroProfileSection(
                    displayName = state.displayName,
                    bio = state.bio,
                    avatarUrl = state.avatarUrl,
                    isUploading = state.isUploading,
                    onAvatarClick = { showAvatarSheet = true }
                )
            }

            // ── Divider ──────────────────────────────────────────────
            item {
                SectionDivider()
            }

            // ── Section: Edit Profil ─────────────────────────────────
            item {
                SectionLabel(text = "Profil")
            }

            item {
                ElevasiFormField(
                    label = "Nama Panggilan",
                    value = state.displayName,
                    onValueChange = viewModel::updateDisplayName,
                    placeholder = "Masukkan nama panggilanmu"
                )
            }

            item {
                ElevasiFormField(
                    label = "Bio",
                    value = state.bio,
                    onValueChange = viewModel::updateBio,
                    placeholder = "Tuliskan sedikit tentang dirimu…",
                    singleLine = false,
                    maxLines = 4
                )
            }

            // ── Divider ──────────────────────────────────────────────
            item {
                SectionDivider()
            }

            // ── Section: Tanggal Lahir ───────────────────────────────
            item {
                SectionLabel(text = "Hari Spesial")
            }

            item {
                BirthdayRow(
                    month = state.birthdayMonth,
                    day = state.birthdayDay,
                    onClick = { showDatePicker = true }
                )
            }

            // ── Divider ──────────────────────────────────────────────
            item {
                SectionDivider()
            }

            // ── Section: Sistem & Koneksi ────────────────────────────
            item {
                SectionLabel(text = "Sistem & Koneksi")
            }

            item {
                ThemeSettingsItem(
                    currentTheme = themeSelection,
                    onThemeSelected = { newTheme ->
                        themeViewModel.selectTheme(newTheme, session.userId)
                    }
                )
            }

            item {
                ServerStatusItem(isOnline = state.serverOnline)
            }

            item {
                ListItem(
                    modifier = Modifier
                        .padding(horizontal = 4.dp)
                        .clickable {
                            onReplayTutorial()
                            onNavigateBack()
                        },
                    colors = ListItemDefaults.colors(containerColor = Color.Transparent),
                    leadingContent = {
                        Box(
                            modifier = Modifier
                                .size(42.dp)
                                .clip(RoundedCornerShape(12.dp))
                                .background(MaterialTheme.colorScheme.surfaceVariant),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Outlined.HelpOutline,
                                contentDescription = "Panduan",
                                tint = MaterialTheme.colorScheme.onSurfaceVariant,
                                modifier = Modifier.size(22.dp)
                            )
                        }
                    },
                    headlineContent = {
                        Text(
                            text = "Panduan Aplikasi",
                            style = MaterialTheme.typography.titleSmall,
                            fontWeight = FontWeight.Medium,
                            color = MaterialTheme.colorScheme.onBackground
                        )
                    },
                    supportingContent = {
                        Text(
                            text = "Melihat ulang petunjuk dan panduan Lentera Elevasi",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                )
            }

            item {
                AppVersionItem()
            }

            // ── Spacer + Tombol Simpan ───────────────────────────────
            item {
                Spacer(modifier = Modifier.height(28.dp))
            }

            item {
                SaveButton(
                    isSaving = state.isSaving,
                    onClick = viewModel::saveProfile
                )
            }
        }
        
        // ── Avatar Bottom Sheet ───────────────────────────────────
        if (showAvatarSheet) {
            ModalBottomSheet(
                onDismissRequest = { showAvatarSheet = false },
                sheetState = sheetState,
                containerColor = MaterialTheme.colorScheme.surface
            ) {
                AvatarPhotoBottomSheet(
                    hasAvatar = state.avatarUrl.isNotBlank(),
                    onViewPhoto = {
                        showAvatarSheet = false
                        showImageViewer = true
                    },
                    onTakePhoto = {
                        showAvatarSheet = false
                        cameraLauncher.launch(cameraImageUri)
                    },
                    onUploadPhoto = {
                        showAvatarSheet = false
                        galleryLauncher.launch("image/*")
                    },
                    onRemovePhoto = {
                        showAvatarSheet = false
                        viewModel.removeAvatar()
                    }
                )
            }
        }

        // ── Image Viewer ──────────────────────────────────────────
        if (showImageViewer && state.avatarUrl.isNotBlank()) {
            val base = BuildConfig.API_BASE_URL.trimEnd('/')
            val fullUrl = if (state.avatarUrl.startsWith("http")) state.avatarUrl else "$base${state.avatarUrl}"
            com.example.elevasi.feature.beranda.ImageViewerDialog(
                imageUrl = fullUrl,
                onDismiss = { showImageViewer = false }
            )
        }
    }
}

// ─────────────────────────────────────────────────────────────────────
// Hero Profile Section
// ─────────────────────────────────────────────────────────────────────

@Composable
private fun HeroProfileSection(
    displayName: String,
    bio: String,
    avatarUrl: String,
    isUploading: Boolean = false,
    onAvatarClick: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Avatar Circle (100dp)
        Box(
            modifier = Modifier
                .size(100.dp)
                .clip(CircleShape)
                .background(MaterialTheme.colorScheme.primary.copy(alpha = 0.12f))
                .clickable(onClick = onAvatarClick),
            contentAlignment = Alignment.Center
        ) {
            if (avatarUrl.isNotBlank()) {
                val base = BuildConfig.API_BASE_URL.trimEnd('/')
                val rawUrl = if (avatarUrl.startsWith("http")) avatarUrl else "$base$avatarUrl"
                // Add cache-busting if not already present
                val fullUrl = if (rawUrl.contains("?t=")) rawUrl else "$rawUrl?t=${System.currentTimeMillis()}"
                AsyncImage(
                    model = fullUrl,
                    contentDescription = "Avatar",
                    modifier = Modifier.fillMaxSize(),
                    contentScale = androidx.compose.ui.layout.ContentScale.Crop
                )
            } else {
                Text(
                    text = displayName.take(1).uppercase(),
                    fontSize = 38.sp,
                    fontWeight = FontWeight.Bold,
                    fontFamily = FontFamily.Serif,
                    color = MaterialTheme.colorScheme.primary
                )
            }
        }

        Spacer(modifier = Modifier.height(14.dp))

        // Display Name
        Text(
            text = displayName.ifBlank { "Belum diisi" },
            style = MaterialTheme.typography.titleLarge,
            fontWeight = FontWeight.SemiBold,
            color = MaterialTheme.colorScheme.onBackground
        )

        // Bio
        if (bio.isNotBlank()) {
            Spacer(modifier = Modifier.height(4.dp))
            Text(
                text = bio,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                textAlign = TextAlign.Center,
                modifier = Modifier.padding(horizontal = 40.dp)
            )
        }
    }
}

// ─────────────────────────────────────────────────────────────────────
// Form Field (borderless style)
// ─────────────────────────────────────────────────────────────────────

@Composable
private fun ElevasiFormField(
    label: String,
    value: String,
    onValueChange: (String) -> Unit,
    placeholder: String,
    singleLine: Boolean = true,
    maxLines: Int = 1
) {
    Column(
        modifier = Modifier.padding(horizontal = 20.dp, vertical = 6.dp)
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.onSurfaceVariant,
            modifier = Modifier.padding(bottom = 6.dp)
        )

        OutlinedTextField(
            value = value,
            onValueChange = onValueChange,
            modifier = Modifier.fillMaxWidth(),
            placeholder = {
                Text(
                    text = placeholder,
                    color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.5f)
                )
            },
            singleLine = singleLine,
            maxLines = maxLines,
            shape = RoundedCornerShape(16.dp),
            colors = OutlinedTextFieldDefaults.colors(
                focusedContainerColor = MaterialTheme.colorScheme.surfaceVariant,
                unfocusedContainerColor = MaterialTheme.colorScheme.surfaceVariant,
                focusedBorderColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.4f),
                unfocusedBorderColor = Color.Transparent,
                focusedTextColor = MaterialTheme.colorScheme.onSurface,
                unfocusedTextColor = MaterialTheme.colorScheme.onSurface,
                cursorColor = MaterialTheme.colorScheme.primary
            ),
            textStyle = MaterialTheme.typography.bodyLarge
        )
    }
}

// ─────────────────────────────────────────────────────────────────────
// Birthday Row
// ─────────────────────────────────────────────────────────────────────

@Composable
private fun BirthdayRow(
    month: Int,
    day: Int,
    onClick: () -> Unit
) {
    val monthNames = listOf(
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    )
    val monthLabel = monthNames.getOrElse(month - 1) { "—" }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(onClick = onClick)
            .padding(horizontal = 20.dp, vertical = 14.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Box(
            modifier = Modifier
                .size(42.dp)
                .clip(RoundedCornerShape(12.dp))
                .background(MaterialTheme.colorScheme.surfaceVariant),
            contentAlignment = Alignment.Center
        ) {
            Icon(
                imageVector = Icons.Outlined.CalendarMonth,
                contentDescription = "Kalender",
                tint = MaterialTheme.colorScheme.primary,
                modifier = Modifier.size(22.dp)
            )
        }

        Spacer(modifier = Modifier.width(14.dp))

        Column {
            Text(
                text = "Tanggal Lahir",
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onBackground
            )
            Spacer(modifier = Modifier.height(2.dp))
            Text(
                text = "$day $monthLabel",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }

        Spacer(modifier = Modifier.weight(1f))

        Text(
            text = "Ubah",
            style = MaterialTheme.typography.labelLarge,
            color = MaterialTheme.colorScheme.primary
        )
    }
}

// ─────────────────────────────────────────────────────────────────────
// Server Status & App Version (ListItem)
// ─────────────────────────────────────────────────────────────────────

@Composable
private fun ServerStatusItem(isOnline: Boolean) {
    val indicatorColor by animateColorAsState(
        targetValue = if (isOnline) Color(0xFF4CAF50) else Color(0xFFE57373),
        label = "serverIndicator"
    )
    val statusText = if (isOnline) "Online" else "Tidak Terhubung"

    ListItem(
        modifier = Modifier.padding(horizontal = 4.dp),
        colors = ListItemDefaults.colors(containerColor = Color.Transparent),
        leadingContent = {
            Box(
                modifier = Modifier
                    .size(42.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(MaterialTheme.colorScheme.surfaceVariant),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Outlined.CellTower,
                    contentDescription = "Server",
                    tint = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.size(22.dp)
                )
            }
        },
        headlineContent = {
            Text(
                text = "Status Jaringan Server",
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onBackground
            )
        },
        supportingContent = {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Box(
                    modifier = Modifier
                        .size(8.dp)
                        .clip(CircleShape)
                        .background(indicatorColor)
                )
                Spacer(modifier = Modifier.width(6.dp))
                Text(
                    text = statusText,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    )
}

@Composable
private fun AppVersionItem() {
    ListItem(
        modifier = Modifier.padding(horizontal = 4.dp),
        colors = ListItemDefaults.colors(containerColor = Color.Transparent),
        leadingContent = {
            Box(
                modifier = Modifier
                    .size(42.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(MaterialTheme.colorScheme.surfaceVariant),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Outlined.Info,
                    contentDescription = "Versi",
                    tint = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.size(22.dp)
                )
            }
        },
        headlineContent = {
            Text(
                text = "Versi Elevasi",
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onBackground
            )
        },
        supportingContent = {
            Text(
                text = "v1.0 — Self Hosted Build",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    )
}

// ─────────────────────────────────────────────────────────────────────
// Save Button
// ─────────────────────────────────────────────────────────────────────

@Composable
private fun SaveButton(
    isSaving: Boolean,
    onClick: () -> Unit
) {
    Button(
        onClick = onClick,
        enabled = !isSaving,
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 20.dp)
            .height(52.dp),
        shape = RoundedCornerShape(16.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = MaterialTheme.colorScheme.primary,
            contentColor = MaterialTheme.colorScheme.onPrimary,
            disabledContainerColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.45f),
            disabledContentColor = MaterialTheme.colorScheme.onPrimary.copy(alpha = 0.6f)
        )
    ) {
        if (isSaving) {
            CircularProgressIndicator(
                modifier = Modifier.size(20.dp),
                color = MaterialTheme.colorScheme.onPrimary,
                strokeWidth = 2.dp
            )
            Spacer(modifier = Modifier.width(10.dp))
        }
        Text(
            text = if (isSaving) "Menyimpan…" else "Simpan Perubahan",
            style = MaterialTheme.typography.titleSmall,
            fontWeight = FontWeight.SemiBold
        )
    }
}

// ─────────────────────────────────────────────────────────────────────
// Shared UI Helpers
// ─────────────────────────────────────────────────────────────────────

@Composable
private fun SectionLabel(text: String) {
    Text(
        text = text.uppercase(),
        style = MaterialTheme.typography.labelLarge,
        color = MaterialTheme.colorScheme.onSurfaceVariant,
        letterSpacing = 1.sp,
        modifier = Modifier.padding(horizontal = 20.dp, vertical = 10.dp)
    )
}

@Composable
private fun SectionDivider() {
    HorizontalDivider(
        modifier = Modifier.padding(vertical = 8.dp),
        color = MaterialTheme.colorScheme.outlineVariant,
        thickness = 0.5.dp
    )
}

// ─────────────────────────────────────────────────────────────────────
// Theme settings component
// ─────────────────────────────────────────────────────────────────────

@Composable
private fun ThemeSettingsItem(
    currentTheme: ThemeSelection,
    onThemeSelected: (ThemeSelection) -> Unit
) {
    var showDialog by remember { mutableStateOf(false) }

    val currentThemeLabel = when (currentTheme) {
        ThemeSelection.LIGHT -> "Terang"
        ThemeSelection.DARK -> "Gelap"
        ThemeSelection.FOLLOW_SYSTEM -> "Ikuti Sistem"
    }

    ListItem(
        modifier = Modifier
            .padding(horizontal = 4.dp)
            .clickable { showDialog = true },
        colors = ListItemDefaults.colors(containerColor = Color.Transparent),
        leadingContent = {
            Box(
                modifier = Modifier
                    .size(42.dp)
                    .clip(RoundedCornerShape(12.dp))
                    .background(MaterialTheme.colorScheme.surfaceVariant),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = Icons.Outlined.Palette,
                    contentDescription = "Tema",
                    tint = MaterialTheme.colorScheme.onSurfaceVariant,
                    modifier = Modifier.size(22.dp)
                )
            }
        },
        headlineContent = {
            Text(
                text = "Tema Aplikasi",
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onBackground
            )
        },
        supportingContent = {
            Text(
                text = currentThemeLabel,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    )

    if (showDialog) {
        AlertDialog(
            onDismissRequest = { showDialog = false },
            shape = RoundedCornerShape(28.dp),
            containerColor = MaterialTheme.colorScheme.surfaceContainerHigh,
            title = {
                Text(
                    text = "Pilih Tema",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Bold,
                    color = MaterialTheme.colorScheme.onBackground
                )
            },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    ThemeOptionRow(
                        label = "Terang",
                        selected = currentTheme == ThemeSelection.LIGHT,
                        onClick = {
                            onThemeSelected(ThemeSelection.LIGHT)
                            showDialog = false
                        }
                    )
                    ThemeOptionRow(
                        label = "Gelap",
                        selected = currentTheme == ThemeSelection.DARK,
                        onClick = {
                            onThemeSelected(ThemeSelection.DARK)
                            showDialog = false
                        }
                    )
                    ThemeOptionRow(
                        label = "Ikuti Sistem",
                        selected = currentTheme == ThemeSelection.FOLLOW_SYSTEM,
                        onClick = {
                            onThemeSelected(ThemeSelection.FOLLOW_SYSTEM)
                            showDialog = false
                        }
                    )
                }
            },
            confirmButton = {},
            dismissButton = {
                TextButton(onClick = { showDialog = false }) {
                    Text(
                        text = "Batal",
                        color = MaterialTheme.colorScheme.primary
                    )
                }
            }
        )
    }
}

@Composable
private fun ThemeOptionRow(
    label: String,
    selected: Boolean,
    onClick: () -> Unit
) {
    val backgroundColor = if (selected) {
        MaterialTheme.colorScheme.primaryContainer
    } else {
        Color.Transparent
    }
    val contentColor = if (selected) {
        MaterialTheme.colorScheme.onPrimaryContainer
    } else {
        MaterialTheme.colorScheme.onSurface
    }

    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(16.dp))
            .background(backgroundColor)
            .clickable(onClick = onClick)
            .padding(horizontal = 16.dp, vertical = 12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodyLarge,
            color = contentColor,
            fontWeight = if (selected) FontWeight.Bold else FontWeight.Normal
        )
        if (selected) {
            Text(
                text = "✓",
                color = contentColor,
                fontWeight = FontWeight.Bold
            )
        }
    }
}

// ─────────────────────────────────────────────────────────────────────
// Avatar Photo Bottom Sheet
// ─────────────────────────────────────────────────────────────────────

@Composable
fun AvatarPhotoBottomSheet(
    hasAvatar: Boolean,
    onViewPhoto: () -> Unit,
    onTakePhoto: () -> Unit,
    onUploadPhoto: () -> Unit,
    onRemovePhoto: () -> Unit
) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .padding(bottom = 24.dp)
    ) {
        if (hasAvatar) {
            ListItem(
                headlineContent = { Text("Lihat Foto") },
                leadingContent = { Icon(Icons.Outlined.Visibility, contentDescription = null) },
                modifier = Modifier.clickable { onViewPhoto() },
                colors = ListItemDefaults.colors(containerColor = Color.Transparent)
            )
        }
        
        ListItem(
            headlineContent = { Text("Ambil Foto dari Kamera") },
            leadingContent = { Icon(Icons.Outlined.CameraAlt, contentDescription = null) },
            modifier = Modifier.clickable { onTakePhoto() },
            colors = ListItemDefaults.colors(containerColor = Color.Transparent)
        )
        
        ListItem(
            headlineContent = { Text("Pilih dari Galeri") },
            leadingContent = { Icon(Icons.Outlined.Image, contentDescription = null) },
            modifier = Modifier.clickable { onUploadPhoto() },
            colors = ListItemDefaults.colors(containerColor = Color.Transparent)
        )
        
        if (hasAvatar) {
            ListItem(
                headlineContent = { Text("Hapus Foto", color = Color(0xFFE57373)) },
                leadingContent = { Icon(Icons.Outlined.Delete, contentDescription = null, tint = Color(0xFFE57373)) },
                modifier = Modifier.clickable { onRemovePhoto() },
                colors = ListItemDefaults.colors(containerColor = Color.Transparent)
            )
        }
    }
}
