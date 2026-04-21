package com.example.elevasi.feature.journal

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.animateDpAsState
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.Lock
import androidx.compose.material.icons.outlined.LockOpen
import androidx.compose.material3.Button
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.blur
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.elevasi.data.model.ReflectionDialogDto
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.ui.components.ElevasiGlassPanel
import com.example.elevasi.ui.components.ElevasiHeroCard
import com.example.elevasi.ui.components.ElevasiSectionHeader
import java.time.LocalDate
import java.time.format.DateTimeFormatter
import java.util.Locale

@Composable
fun JournalScreen(
    session: UserSessionDto
) {
    val viewModel: ReflectionDialogViewModel = viewModel(
        factory = ReflectionDialogViewModel.factory(session)
    )
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val reflection = uiState.reflection
    val errorMessage = uiState.errorMessage
    val revealBlur by animateDpAsState(
        targetValue = if (uiState.phase == ReflectionUiPhase.REVEALED && reflection?.partnerAnswer != null) {
            0.dp
        } else {
            18.dp
        },
        animationSpec = tween(durationMillis = 900, easing = FastOutSlowInEasing),
        label = "partnerAnswerBlur"
    )

    LaunchedEffect(viewModel) {
        viewModel.loadReflection()
    }

    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(20.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        item {
            ElevasiHeroCard(
                eyebrow = "Ruang Dialog",
                title = "Kunci dibuka oleh keberanian dua arah",
                description = "Satu pertanyaan mingguan, satu ruang yang tetap tertutup sampai kalian berdua hadir dengan jawaban yang sama-sama jujur.",
                trailingLabel = uiState.currentUserName
            )
        }

        item {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                ElevasiSectionHeader(
                    title = "Pertanyaan Mingguan",
                    subtitle = "Satu tema, dua jawaban, satu momen terbuka yang ditunggu bersama."
                )
                WeeklyQuestionCard(
                    questionText = reflection?.questionText ?: "Menyiapkan pertanyaan refleksi minggu ini...",
                    weekLabel = reflection?.weekKey.toWeekLabel(),
                    phase = uiState.phase
                )
            }
        }

        item {
            RevealStateCard(
                phase = uiState.phase,
                hasMyAnswer = reflection?.myAnswer != null,
                partnerName = uiState.partnerUserName
            )
        }

        item {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                ElevasiSectionHeader(
                    title = "Jawaban Saya",
                    subtitle = "Tulis jujur tanpa perlu mengintip jawaban dari sisi lain."
                )
                MyReflectionCard(
                    currentUserName = uiState.currentUserName,
                    draftAnswer = uiState.draftAnswer,
                    submittedAnswer = reflection?.myAnswer?.answerText,
                    submittedAt = reflection?.myAnswer?.submittedAt,
                    isSubmitting = uiState.isSubmitting,
                    onAnswerChange = viewModel::updateDraftAnswer,
                    onSubmit = viewModel::submitAnswer
                )
            }
        }

        item {
            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                ElevasiSectionHeader(
                    title = "Jawaban Teman",
                    subtitle = "Akan terbuka saat kalian berdua sudah hadir dengan jawaban masing-masing."
                )
                PartnerReflectionCard(
                    partnerName = uiState.partnerUserName,
                    reflection = reflection,
                    phase = uiState.phase,
                    blurRadius = revealBlur
                )
            }
        }

        if (errorMessage != null) {
            item {
                Text(
                    text = errorMessage,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.error
                )
            }
        }
    }
}

@Composable
private fun WeeklyQuestionCard(
    questionText: String,
    weekLabel: String,
    phase: ReflectionUiPhase
) {
    ElevasiGlassPanel {
        Column(
            modifier = Modifier.padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(12.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text(
                        text = "Pertanyaan Mingguan",
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.SemiBold
                    )
                    Text(
                        text = weekLabel,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
                Surface(
                    shape = CircleShape,
                    color = MaterialTheme.colorScheme.tertiary.copy(alpha = 0.14f)
                ) {
                    Text(
                        text = when (phase) {
                            ReflectionUiPhase.EMPTY -> "Hening"
                            ReflectionUiPhase.PARTIAL -> "Setengah"
                            ReflectionUiPhase.REVEALED -> "Terbuka"
                        },
                        modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                        style = MaterialTheme.typography.labelLarge,
                        color = MaterialTheme.colorScheme.tertiary
                    )
                }
            }

            Text(
                text = questionText,
                style = MaterialTheme.typography.bodyLarge
            )
        }
    }
}

@Composable
private fun RevealStateCard(
    phase: ReflectionUiPhase,
    hasMyAnswer: Boolean,
    partnerName: String
) {
    ElevasiGlassPanel {
        AnimatedContent(
            targetState = phase,
            transitionSpec = {
                fadeIn(animationSpec = tween(260)) togetherWith
                    fadeOut(animationSpec = tween(180))
            },
            label = "revealState"
        ) { currentPhase ->
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(18.dp),
                horizontalArrangement = Arrangement.spacedBy(12.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    color = if (currentPhase == ReflectionUiPhase.REVEALED) {
                        MaterialTheme.colorScheme.secondary.copy(alpha = 0.18f)
                    } else {
                        MaterialTheme.colorScheme.primary.copy(alpha = 0.18f)
                    },
                    shape = CircleShape
                ) {
                    Icon(
                        imageVector = if (currentPhase == ReflectionUiPhase.REVEALED) {
                            Icons.Outlined.LockOpen
                        } else {
                            Icons.Outlined.Lock
                        },
                        contentDescription = null,
                        modifier = Modifier.padding(10.dp),
                        tint = if (currentPhase == ReflectionUiPhase.REVEALED) {
                            MaterialTheme.colorScheme.secondary
                        } else {
                            MaterialTheme.colorScheme.primary
                        }
                    )
                }

                Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text(
                        text = when (currentPhase) {
                            ReflectionUiPhase.EMPTY -> "Ruang masih terkunci"
                            ReflectionUiPhase.PARTIAL -> "Ruang sedang menunggu"
                            ReflectionUiPhase.REVEALED -> "Ruang sudah terbuka"
                        },
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.SemiBold
                    )
                    Text(
                        text = when (currentPhase) {
                            ReflectionUiPhase.EMPTY ->
                                "Belum ada jawaban yang masuk minggu ini. Mulai dulu dari versimu."
                            ReflectionUiPhase.PARTIAL ->
                                if (hasMyAnswer) {
                                    "Jawabanmu sudah tersimpan. Saat $partnerName menekan kirim, gembok akan terbuka halus."
                                } else {
                                    "Mungkin baru satu hati yang menulis. Jawabannya tetap tersegel sampai kamu mengirim versimu."
                                }
                            ReflectionUiPhase.REVEALED ->
                                "Kalian berdua sudah hadir. Sekarang jawaban masing-masing bisa dibaca dengan jernih."
                        },
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}

@Composable
private fun MyReflectionCard(
    currentUserName: String,
    draftAnswer: String,
    submittedAnswer: String?,
    submittedAt: String?,
    isSubmitting: Boolean,
    onAnswerChange: (String) -> Unit,
    onSubmit: () -> Unit
) {
    ElevasiGlassPanel(
        accentColors = listOf(
            MaterialTheme.colorScheme.primary.copy(alpha = 0.2f),
            MaterialTheme.colorScheme.secondary.copy(alpha = 0.08f)
        )
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp)
        ) {
            Text(
                text = "Jawaban Saya",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold
            )
            Text(
                text = "$currentUserName menulis tanpa bisa mengintip jawaban teman.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            OutlinedTextField(
                value = draftAnswer,
                onValueChange = onAnswerChange,
                modifier = Modifier.fillMaxWidth(),
                label = {
                    Text("Tulis refleksimu")
                },
                minLines = 6
            )

            Button(
                onClick = onSubmit,
                enabled = !isSubmitting,
                modifier = Modifier.fillMaxWidth()
            ) {
                Text(
                    if (isSubmitting) {
                        "Mengirim..."
                    } else if (submittedAnswer != null) {
                        "Perbarui Jawaban"
                    } else {
                        "Kirim Jawaban"
                    }
                )
            }

            Text(
                text = submittedAt.toSubmittedLabel()
                    ?: "Begitu jawaban terkirim, backend langsung menjaga agar teman belum bisa membacanya sebelum menulis versinya sendiri.",
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
private fun PartnerReflectionCard(
    partnerName: String,
    reflection: ReflectionDialogDto?,
    phase: ReflectionUiPhase,
    blurRadius: androidx.compose.ui.unit.Dp
) {
    val isRevealed = phase == ReflectionUiPhase.REVEALED && reflection?.partnerAnswer != null
    val placeholderText = when {
        reflection == null -> "Menyiapkan ruang jawaban teman..."
        reflection.partnerAnswer != null -> reflection.partnerAnswer.answerText
        reflection.myAnswer == null -> "$partnerName mungkin sudah menulis, tetapi backend tetap mengunci jawabannya sampai kamu mengirim versimu sendiri."
        else -> "$partnerName belum mengirim jawaban untuk pertanyaan minggu ini. Saat dia mengirim, isi refleksinya akan langsung muncul di sini."
    }

    ElevasiGlassPanel(
        accentColors = listOf(
            MaterialTheme.colorScheme.tertiary.copy(alpha = 0.18f),
            MaterialTheme.colorScheme.primary.copy(alpha = 0.08f)
        )
    ) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .padding(20.dp)
        ) {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .blur(blurRadius),
                verticalArrangement = Arrangement.spacedBy(14.dp)
            ) {
                Text(
                    text = "Jawaban $partnerName",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.SemiBold
                )
                Text(
                    text = placeholderText,
                    style = MaterialTheme.typography.bodyLarge
                )
                Text(
                    text = reflection?.partnerAnswer?.submittedAt.toSubmittedLabel()
                        ?: "Jawaban teman akan diperbarui saat halaman dialog ini dimuat lagi.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            if (!isRevealed) {
                Box(
                    modifier = Modifier
                        .fillMaxSize()
                        .background(MaterialTheme.colorScheme.surface.copy(alpha = 0.56f)),
                    contentAlignment = Alignment.Center
                ) {
                    Surface(
                        shape = CircleShape,
                        color = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.96f)
                    ) {
                        Row(
                            modifier = Modifier.padding(horizontal = 18.dp, vertical = 12.dp),
                            horizontalArrangement = Arrangement.spacedBy(10.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Icon(
                                imageVector = Icons.Outlined.Lock,
                                contentDescription = null,
                                tint = MaterialTheme.colorScheme.primary
                            )
                            Text(
                                text = "Terkunci sampai kalian berdua menulis",
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurface
                            )
                        }
                    }
                }
            }
        }
    }
}

private fun String?.toWeekLabel(): String {
    if (this.isNullOrBlank()) {
        return "Minggu ini"
    }

    return runCatching {
        val parsed = LocalDate.parse(this)
        val formatter = DateTimeFormatter.ofPattern("d MMMM yyyy", Locale.forLanguageTag("id-ID"))
        "Minggu dimulai ${parsed.format(formatter)}"
    }.getOrElse {
        "Minggu ini"
    }
}

private fun String?.toSubmittedLabel(): String? {
    if (this.isNullOrBlank()) return null

    return runCatching {
        val parsed = java.time.OffsetDateTime.parse(this)
        val formatter = DateTimeFormatter.ofPattern("d MMM, HH:mm", Locale.forLanguageTag("id-ID"))
        "Tersimpan ${parsed.format(formatter)}"
    }.getOrNull()
}
