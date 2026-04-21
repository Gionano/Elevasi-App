package com.example.elevasi.feature.dashboard

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.slideOutVertically
import androidx.compose.foundation.background
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.AssistChip
import androidx.compose.material3.AssistChipDefaults
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ElevatedCard
import androidx.compose.material3.FilterChip
import androidx.compose.material3.FilterChipDefaults
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.elevasi.data.model.ReactionDto
import com.example.elevasi.ui.components.ElevasiGlassPanel
import com.example.elevasi.ui.components.ElevasiInfoPill
import java.time.OffsetDateTime
import java.time.format.DateTimeFormatter
import java.util.Locale

@Composable
fun MyPresenceCard(
    userName: String,
    status: String,
    draftMessage: String,
    updatedAt: String?,
    selectedStatus: PresenceAction,
    onStatusSelected: (PresenceAction) -> Unit,
    onMessageChange: (String) -> Unit,
    onSubmit: () -> Unit,
    isLoading: Boolean,
    isSubmitting: Boolean,
    modifier: Modifier = Modifier
) {
    ElevasiGlassPanel(
        modifier = modifier,
        accentColors = listOf(
            MaterialTheme.colorScheme.primary.copy(alpha = 0.2f),
            MaterialTheme.colorScheme.tertiary.copy(alpha = 0.1f)
        )
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            StatusHeader(
                title = "Status Saya",
                subtitle = userName,
                status = status,
                isBirthday = false
            )

            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                ElevasiInfoPill(text = "Refleksi singkat")
                ElevasiInfoPill(text = "Sinkron saat buka")
            }

            Text(
                text = "Perbarui ruangmu dengan nada yang tenang, jelas, dan tetap terasa personal.",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Row(
                modifier = Modifier.horizontalScroll(rememberScrollState()),
                horizontalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                PresenceAction.entries.forEach { action ->
                    FilterChip(
                        selected = selectedStatus == action,
                        onClick = {
                            onStatusSelected(action)
                        },
                        colors = FilterChipDefaults.filterChipColors(
                            selectedContainerColor = MaterialTheme.colorScheme.primary.copy(alpha = 0.14f),
                            selectedLabelColor = MaterialTheme.colorScheme.primary
                        ),
                        label = {
                            Text(action.label)
                        }
                    )
                }
            }

            OutlinedTextField(
                value = draftMessage,
                onValueChange = onMessageChange,
                modifier = Modifier.fillMaxWidth(),
                label = {
                    Text("Pesan untuk teman")
                },
                minLines = 4
            )

            Button(
                onClick = onSubmit,
                enabled = !isSubmitting,
                modifier = Modifier.fillMaxWidth(),
                colors = ButtonDefaults.buttonColors(
                    containerColor = MaterialTheme.colorScheme.primary,
                    contentColor = MaterialTheme.colorScheme.onPrimary
                )
            ) {
                Text(if (isSubmitting) "Menyimpan..." else "Simpan status saya")
            }

            Text(
                text = when {
                    isLoading -> "Menyelaraskan status saya..."
                    else -> formatUpdatedAt(updatedAt)
                        ?: "Status saya belum pernah diperbarui dari perangkat ini."
                },
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
fun PartnerPresenceCard(
    userName: String,
    status: String,
    message: String,
    updatedAt: String?,
    isBirthday: Boolean,
    isPartnerConnected: Boolean,
    reactionOptions: List<String>,
    isLoading: Boolean,
    isSendingReaction: Boolean,
    onReactionClick: (String) -> Unit,
    modifier: Modifier = Modifier
) {
    ElevasiGlassPanel(
        modifier = modifier,
        accentColors = listOf(
            if (isBirthday) {
                MaterialTheme.colorScheme.primary.copy(alpha = 0.26f)
            } else {
                MaterialTheme.colorScheme.secondary.copy(alpha = 0.18f)
            },
            MaterialTheme.colorScheme.tertiary.copy(alpha = 0.08f)
        )
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            StatusHeader(
                title = "Status Dia",
                subtitle = userName,
                status = status,
                isBirthday = isBirthday
            )

            Text(
                text = if (isLoading) {
                    "Mengambil status terbaru teman..."
                } else {
                    message
                },
                style = MaterialTheme.typography.bodyLarge
            )

            Text(
                text = if (isBirthday) {
                    "Mode ulang tahun aktif sepanjang hari ini."
                } else {
                    formatUpdatedAt(updatedAt) ?: "Belum ada pembaruan baru dari teman."
                },
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                Text(
                    text = if (isPartnerConnected) {
                        "Kirim reaksi kecil"
                    } else {
                        "Reaksi menunggu teman"
                    },
                    style = MaterialTheme.typography.titleMedium
                )

                Row(
                    modifier = Modifier.horizontalScroll(rememberScrollState()),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    reactionOptions.forEach { emoji ->
                        AssistChip(
                            onClick = {
                                if (isPartnerConnected) {
                                    onReactionClick(emoji)
                                }
                            },
                            enabled = isPartnerConnected && !isSendingReaction,
                            colors = AssistChipDefaults.assistChipColors(
                                containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.6f)
                            ),
                            label = {
                                Text(
                                    text = emoji,
                                    fontSize = 20.sp
                                )
                            }
                        )
                    }
                }

                if (!isPartnerConnected) {
                    Text(
                        text = "Emoji akan aktif setelah teman menyelesaikan onboarding di perangkatnya.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                } else if (isSendingReaction) {
                    Text(
                        text = "Mengirim perhatian kecil...",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}

@Composable
fun IncomingReactionOverlay(
    reaction: ReactionDto?,
    senderName: String,
    modifier: Modifier = Modifier
) {
    AnimatedVisibility(
        visible = reaction != null,
        modifier = modifier,
        enter = fadeIn(animationSpec = tween(220)) +
            slideInVertically(
                animationSpec = tween(320, easing = FastOutSlowInEasing),
                initialOffsetY = { -it / 2 }
            ),
        exit = fadeOut(animationSpec = tween(220)) +
            slideOutVertically(
                animationSpec = tween(280, easing = FastOutSlowInEasing),
                targetOffsetY = { -it / 3 }
            )
    ) {
        val safeReaction = reaction ?: return@AnimatedVisibility

        Surface(
            color = MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.96f),
            shape = CircleShape,
            tonalElevation = 6.dp,
            shadowElevation = 2.dp
        ) {
            Row(
                modifier = Modifier.padding(horizontal = 14.dp, vertical = 10.dp),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                Text(
                    text = safeReaction.emoji,
                    fontSize = 22.sp
                )
                Text(
                    text = "$senderName mengirim reaksi",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSecondaryContainer
                )
            }
        }
    }
}

@Composable
private fun StatusHeader(
    title: String,
    subtitle: String,
    status: String,
    isBirthday: Boolean
) {
    val visuals = presenceVisuals(status = status, isBirthday = isBirthday)

    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.spacedBy(14.dp)
    ) {
        PresenceIndicator(
            status = status,
            isBirthday = isBirthday,
            color = visuals.color
        )

        Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
            Text(
                text = title,
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold
            )
            Text(
                text = subtitle,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }

        Spacer(modifier = Modifier.weight(1f))

        Surface(
            color = visuals.color.copy(alpha = 0.14f),
            shape = CircleShape
        ) {
            Text(
                text = visuals.label,
                modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                style = MaterialTheme.typography.labelLarge,
                color = visuals.color
            )
        }
    }
}

@Composable
private fun PresenceIndicator(
    status: String,
    isBirthday: Boolean,
    color: Color
) {
    val transition = rememberInfiniteTransition(label = "presenceIndicator")
    val pulseScale by transition.animateFloat(
        initialValue = 1f,
        targetValue = 1.45f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1500, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "pulseScale"
    )
    val pulseAlpha by transition.animateFloat(
        initialValue = 0.18f,
        targetValue = 0.42f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1500, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "pulseAlpha"
    )

    Box(
        modifier = Modifier.size(30.dp),
        contentAlignment = Alignment.Center
    ) {
        if (status.equals("fokus", ignoreCase = true) || isBirthday) {
            Box(
                modifier = Modifier
                    .size(18.dp)
                    .graphicsLayer {
                        scaleX = pulseScale
                        scaleY = pulseScale
                        alpha = pulseAlpha
                    }
                    .clip(CircleShape)
                    .background(color.copy(alpha = 0.24f))
            )
        }

        Box(
            modifier = Modifier
                .size(12.dp)
                .clip(CircleShape)
                .background(color)
        )
    }
}

private data class PresenceVisual(
    val label: String,
    val color: Color
)

@Composable
private fun presenceVisuals(status: String, isBirthday: Boolean): PresenceVisual {
    if (isBirthday) {
        return PresenceVisual(
            label = "Ulang Tahun",
            color = MaterialTheme.colorScheme.primary
        )
    }

    return when (status.lowercase(Locale.getDefault())) {
        "fokus" -> PresenceVisual(
            label = "Fokus",
            color = MaterialTheme.colorScheme.primary
        )
        "istirahat" -> PresenceVisual(
            label = "Istirahat",
            color = MaterialTheme.colorScheme.tertiary
        )
        else -> PresenceVisual(
            label = "Offline",
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
    }
}

private fun formatUpdatedAt(updatedAt: String?): String? {
    if (updatedAt.isNullOrBlank()) return null

    return runCatching {
        val formatter = DateTimeFormatter.ofPattern("HH:mm", Locale.getDefault())
        "Terakhir diperbarui ${OffsetDateTime.parse(updatedAt).format(formatter)}"
    }.getOrNull()
}
