package com.example.elevasi.feature.tutorial

import androidx.compose.animation.core.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.outlined.Lightbulb
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.CornerRadius
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Rect
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.BlendMode
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.example.elevasi.core.navigation.ElevasiDestination
import com.example.elevasi.ui.theme.ElevasiPrimary

@Composable
fun TutorialOverlay(
    viewModel: TutorialViewModel,
    onNavigateToTab: (ElevasiDestination) -> Unit,
    modifier: Modifier = Modifier
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    if (!uiState.isTutorialActive) return

    val currentStep = uiState.currentStep

    // Handle auto tab navigation based on current step
    LaunchedEffect(currentStep) {
        when (currentStep) {
            TutorialStep.BERANDA -> onNavigateToTab(ElevasiDestination.Beranda)
            TutorialStep.WRITE_POST -> onNavigateToTab(ElevasiDestination.Beranda)
            TutorialStep.TAMAN -> onNavigateToTab(ElevasiDestination.Taman)
            TutorialStep.MADING -> onNavigateToTab(ElevasiDestination.Mading)
            TutorialStep.VERSE -> onNavigateToTab(ElevasiDestination.VerseHarian)
            TutorialStep.DIALOG -> onNavigateToTab(ElevasiDestination.Dialog)
            TutorialStep.PROFILE -> onNavigateToTab(ElevasiDestination.Beranda)
            else -> {}
        }
    }

    // Dynamic target rect selection
    val targetRect = remember(uiState, currentStep) {
        when (currentStep) {
            TutorialStep.WELCOME -> null
            TutorialStep.BERANDA -> uiState.tabCoordinates[ElevasiDestination.Beranda]
            TutorialStep.WRITE_POST -> uiState.fabCoordinates
            TutorialStep.TAMAN -> uiState.tabCoordinates[ElevasiDestination.Taman]
            TutorialStep.MADING -> uiState.tabCoordinates[ElevasiDestination.Mading]
            TutorialStep.VERSE -> uiState.tabCoordinates[ElevasiDestination.VerseHarian]
            TutorialStep.DIALOG -> uiState.tabCoordinates[ElevasiDestination.Dialog]
            TutorialStep.PROFILE -> uiState.profileCoordinates
            TutorialStep.COMPLETED -> null
        }
    }

    val density = LocalDensity.current

    // Pulsing lantern border outline animation
    val infiniteTransition = rememberInfiniteTransition(label = "lantern_glow")
    val pulseAlpha by infiniteTransition.animateFloat(
        initialValue = 0.4f,
        targetValue = 0.95f,
        animationSpec = infiniteRepeatable(
            animation = tween(1400, easing = EaseInOutSine),
            repeatMode = RepeatMode.Reverse
        ),
        label = "alpha"
    )
    val pulseWidth by infiniteTransition.animateFloat(
        initialValue = 2.dp.value,
        targetValue = 4.5.dp.value,
        animationSpec = infiniteRepeatable(
            animation = tween(1400, easing = EaseInOutSine),
            repeatMode = RepeatMode.Reverse
        ),
        label = "width"
    )

    BoxWithConstraints(
        modifier = modifier
            .fillMaxSize()
            .background(Color.Transparent)
    ) {
        val screenHeight = constraints.maxHeight.toFloat()

        // 1. Hardware Accelerated Canvas for punching translucent veil holes
        Canvas(
            modifier = Modifier
                .fillMaxSize()
                .graphicsLayer(alpha = 0.99f)
        ) {
            // Draw dark background veil
            drawRect(color = Color.Black.copy(alpha = 0.65f))

            targetRect?.let { rect ->
                // Apply generous padding to spotlight hole
                val holePadding = 6.dp.toPx()
                val holeLeft = rect.left - holePadding
                val holeTop = rect.top - holePadding
                val holeRight = rect.right + holePadding
                val holeBottom = rect.bottom + holePadding

                val holeWidth = holeRight - holeLeft
                val holeHeight = holeBottom - holeTop

                // Punch rounded rectangle shape through dark veil
                drawRoundRect(
                    color = Color.Transparent,
                    topLeft = Offset(holeLeft, holeTop),
                    size = Size(holeWidth, holeHeight),
                    cornerRadius = CornerRadius(14.dp.toPx(), 14.dp.toPx()),
                    blendMode = BlendMode.Clear
                )
            }
        }

        // 2. Glowing Rose Gold Border Overlay
        if (targetRect != null) {
            Canvas(modifier = Modifier.fillMaxSize()) {
                val holePadding = 6.dp.toPx()
                val holeLeft = targetRect.left - holePadding
                val holeTop = targetRect.top - holePadding
                val holeRight = targetRect.right + holePadding
                val holeBottom = targetRect.bottom + holePadding

                val holeWidth = holeRight - holeLeft
                val holeHeight = holeBottom - holeTop

                // Draw warm Rose Gold glowing outline
                drawRoundRect(
                    color = ElevasiPrimary.copy(alpha = pulseAlpha),
                    topLeft = Offset(holeLeft, holeTop),
                    size = Size(holeWidth, holeHeight),
                    cornerRadius = CornerRadius(14.dp.toPx(), 14.dp.toPx()),
                    style = Stroke(width = pulseWidth.dp.toPx())
                )
            }
        }

        // 3. Poetic Floating Card Positioning and Navigation UI
        val cardModifier = if (targetRect != null) {
            val targetCenterY = targetRect.center.y
            val isLowerHalf = targetCenterY > (screenHeight / 2)
            if (isLowerHalf) {
                Modifier
                    .align(Alignment.TopCenter)
                    .padding(top = 110.dp, start = 20.dp, end = 20.dp)
            } else {
                Modifier
                    .align(Alignment.BottomCenter)
                    .padding(bottom = 125.dp, start = 20.dp, end = 20.dp)
            }
        } else {
            Modifier
                .align(Alignment.Center)
                .padding(horizontal = 20.dp)
        }

        Card(
            modifier = cardModifier
                .fillMaxWidth(0.92f)
                .wrapContentHeight(),
            shape = RoundedCornerShape(22.dp),
            colors = CardDefaults.cardColors(
                containerColor = Color(0xFFFCF8F2), // Warm Ivory background
                contentColor = Color(0xFF2C2925)    // Espresso main text
            ),
            border = BorderStroke(1.dp, ElevasiPrimary.copy(alpha = 0.35f)),
            elevation = CardDefaults.cardElevation(defaultElevation = 8.dp)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(24.dp)
            ) {
                // Header Row (Lantern Symbol and Title)
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(10.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Box(
                            modifier = Modifier
                                .size(32.dp)
                                .clip(CircleShape)
                                .background(ElevasiPrimary.copy(alpha = 0.15f)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Outlined.Lightbulb,
                                contentDescription = null,
                                tint = ElevasiPrimary,
                                modifier = Modifier.size(18.dp)
                            )
                        }

                        val stepTitle = when (currentStep) {
                            TutorialStep.WELCOME -> "Lentera Elevasi"
                            TutorialStep.BERANDA -> "Beranda Refleksi"
                            TutorialStep.WRITE_POST -> "Tulis Kertas Terbang"
                            TutorialStep.TAMAN -> "Taman Tumbuh"
                            TutorialStep.MADING -> "Mading Kenangan"
                            TutorialStep.VERSE -> "Kutipan Harian"
                            TutorialStep.DIALOG -> "Dialog Teduh"
                            TutorialStep.PROFILE -> "Pengaturan Ruang"
                            TutorialStep.COMPLETED -> "Lentera Telah Terang"
                        }

                        Text(
                            text = stepTitle,
                            fontFamily = FontFamily.Serif,
                            fontWeight = FontWeight.SemiBold,
                            fontSize = 18.sp,
                            color = Color(0xFF2C2925)
                        )
                    }

                    // Skip "Lewati" text button
                    if (currentStep != TutorialStep.COMPLETED) {
                        TextButton(
                            onClick = { viewModel.skipTutorial() },
                            contentPadding = PaddingValues(horizontal = 8.dp)
                        ) {
                            Text(
                                text = "Lewati",
                                fontSize = 13.sp,
                                fontWeight = FontWeight.Medium,
                                color = ElevasiPrimary
                            )
                        }
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))

                // Poetic, warm descriptions explaining the active feature
                val stepDescription = when (currentStep) {
                    TutorialStep.WELCOME -> "Selamat datang di ruang teduh Anda. Lentera ini akan memandu Anda mengenal sudut-sudut refleksi untuk bertumbuh bersama pasangan secara hangat dan bermakna."
                    TutorialStep.BERANDA -> "Di sini, deretan 'Kertas Terbang' berisi refleksi harian Anda dan pasangan terkumpul secara rapi. Bacalah dengan perlahan dan resapi setiap makna yang tertulis."
                    TutorialStep.WRITE_POST -> "Sentuh pena indah ini untuk merangkai kata dan menerbangkan catatan refleksi baru Anda ke angkasa, berbagi rasa langsung dengan pasangan."
                    TutorialStep.TAMAN -> "Taman adalah ruang pertumbuhan bersama. Siram dan rawat tanaman virtual Anda dengan saling berkirim pesan perhatian dan kasih sayang setiap hari."
                    TutorialStep.MADING -> "Sematkan foto, memo hangat, dan catatan kecil di mading interaktif ini sebagai pengingat abadi akan indahnya momen-momen kebersamaan."
                    TutorialStep.VERSE -> "Temukan satu kutipan bijak harian yang menyejukkan hati, menerangi langkah, dan memberi inspirasi segar bagi perjalanan hubungan Anda."
                    TutorialStep.DIALOG -> "Ruang pribadi yang aman untuk berkomunikasi secara mendalam, jujur, dan hangat dengan pasangan Anda tanpa ada gangguan dari luar."
                    TutorialStep.PROFILE -> "Ketuk ikon profil ini untuk menyesuaikan tema warna, mengatur avatar personal, serta menyesuaikan kenyamanan teknis seluruh aplikasi."
                    TutorialStep.COMPLETED -> "Kini lentera telah menyinari setiap sudut berharga di Elevasi. Semoga ruang teduh ini senantiasa membawa kehangatan, kedamaian, dan pertumbuhan dalam hubungan Anda."
                }

                Text(
                    text = stepDescription,
                    fontSize = 14.sp,
                    lineHeight = 22.sp,
                    color = Color(0xFF4C433F),
                    fontWeight = FontWeight.Normal
                )

                Spacer(modifier = Modifier.height(24.dp))

                // Bottom Navigation controls and dots
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    // Back Button
                    if (currentStep != TutorialStep.WELCOME) {
                        OutlinedButton(
                            onClick = { viewModel.previousStep() },
                            shape = RoundedCornerShape(16.dp),
                            border = BorderStroke(1.dp, ElevasiPrimary.copy(alpha = 0.5f)),
                            colors = ButtonDefaults.outlinedButtonColors(contentColor = ElevasiPrimary),
                            contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp)
                        ) {
                            Text(text = "Kembali", fontSize = 14.sp, fontWeight = FontWeight.Medium)
                        }
                    } else {
                        // Dummy spacer to keep structure if Back is hidden
                        Spacer(modifier = Modifier.width(80.dp))
                    }

                    // Progress Dots Indicator
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(5.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        TutorialStep.values().forEach { step ->
                            val isSelected = currentStep == step
                            val indicatorColor = if (isSelected) ElevasiPrimary else ElevasiPrimary.copy(alpha = 0.25f)
                            val indicatorSize = if (isSelected) 7.dp else 5.dp

                            Box(
                                modifier = Modifier
                                    .size(indicatorSize)
                                    .clip(CircleShape)
                                    .background(indicatorColor)
                            )
                        }
                    }

                    // Next / Action Button
                    val nextButtonText = when (currentStep) {
                        TutorialStep.WELCOME -> "Mulai"
                        TutorialStep.COMPLETED -> "Selesai"
                        else -> "Lanjut"
                    }

                    Button(
                        onClick = { viewModel.nextStep() },
                        shape = RoundedCornerShape(16.dp),
                        colors = ButtonDefaults.buttonColors(
                            containerColor = ElevasiPrimary,
                            contentColor = Color.White
                        ),
                        contentPadding = PaddingValues(horizontal = 20.dp, vertical = 8.dp)
                    ) {
                        Text(text = nextButtonText, fontSize = 14.sp, fontWeight = FontWeight.SemiBold)
                    }
                }
            }
        }
    }
}
