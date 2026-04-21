package com.example.elevasi.feature.plant

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.graphicsLayer
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.airbnb.lottie.compose.LottieAnimation
import com.airbnb.lottie.compose.LottieCompositionSpec
import com.airbnb.lottie.compose.LottieConstants
import com.airbnb.lottie.compose.rememberLottieComposition
import com.example.elevasi.R
import com.example.elevasi.data.model.VirtualPlantStatusDto
import com.example.elevasi.ui.components.ElevasiGlassPanel
import com.example.elevasi.ui.components.ElevasiHeroCard
import com.example.elevasi.ui.components.ElevasiInfoPill
import java.time.OffsetDateTime
import java.time.format.DateTimeFormatter
import java.util.Locale

@Composable
fun VirtualPlantScreen() {
    val viewModel: VirtualPlantViewModel = viewModel()
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val plant = uiState.plant
    val isWilted = plant?.isWilted == true
    val floatTransition = rememberInfiniteTransition(label = "plantFloat")
    val bobbingOffset by floatTransition.animateFloat(
        initialValue = 0f,
        targetValue = -10f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 2200, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "bobbingOffset"
    )

    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(20.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        item {
            ElevasiHeroCard(
                eyebrow = "Elevasi Plant",
                title = "Tumbuh dari perhatian kecil yang konsisten",
                description = "Tanaman ini menyimpan ritme kebiasaan, fokus bersama, dan jeda yang kalian rawat. Sirami dengan aksi sederhana, lalu biarkan ia berevolusi.",
                trailingLabel = plantStageSpec(plant?.level ?: 1).shortLabel
            )
        }

        item {
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                ElevasiInfoPill(text = "Habit +10 EXP")
                ElevasiInfoPill(text = "Combo fokus +30 EXP")
                ElevasiInfoPill(text = "Layu setelah 3 hari")
            }
        }

        item {
            PlantShowcaseCard(
                plant = plant,
                isWilted = isWilted,
                bobbingOffset = bobbingOffset
            )
        }

        item {
            PlantEvolutionRail(
                currentLevel = plant?.level ?: 1
            )
        }

        item {
            PlantExpCard(
                plant = plant,
                isAddingExp = uiState.isAddingExp,
                onWaterPlant = {
                    viewModel.addExp(amount = 10)
                }
            )
        }

        uiState.errorMessage?.let { message ->
            item {
                Text(
                    text = message,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.error
                )
            }
        }
    }
}

@Composable
private fun PlantShowcaseCard(
    plant: VirtualPlantStatusDto?,
    isWilted: Boolean,
    bobbingOffset: Float
) {
    val stageSpec = plantStageSpec(plant?.level ?: 1)
    val sparkleShift by rememberInfiniteTransition(label = "sparkleShift").animateFloat(
        initialValue = 0.82f,
        targetValue = 1.12f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 2400, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "sparkleShift"
    )

    ElevasiGlassPanel(
        accentColors = listOf(
            MaterialTheme.colorScheme.secondary.copy(alpha = 0.18f),
            MaterialTheme.colorScheme.primary.copy(alpha = 0.12f)
        )
    ) {
        Column(
            modifier = Modifier.padding(22.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(18.dp)
        ) {
            Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                ElevasiInfoPill(text = "Level ${plant?.level ?: 1}")
                ElevasiInfoPill(text = stageSpec.shortLabel)
                ElevasiInfoPill(text = if (isWilted) "Sedikit layu" else "Ceria")
            }

            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(28.dp))
                    .background(
                        brush = Brush.linearGradient(
                            colors = listOf(
                                MaterialTheme.colorScheme.surface.copy(alpha = 0.82f),
                                MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.34f),
                                MaterialTheme.colorScheme.tertiaryContainer.copy(alpha = 0.26f)
                            )
                        )
                    )
                    .padding(vertical = 26.dp),
                contentAlignment = Alignment.Center
            ) {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(290.dp)
                        .background(
                            brush = Brush.verticalGradient(
                                colors = listOf(
                                    Color.Transparent,
                                    MaterialTheme.colorScheme.primary.copy(alpha = 0.03f),
                                    MaterialTheme.colorScheme.secondary.copy(alpha = 0.08f)
                                )
                            )
                        )
                )

                Box(
                    modifier = Modifier
                        .size(290.dp)
                        .background(
                            brush = Brush.radialGradient(
                                colors = listOf(
                                    if (isWilted) {
                                        MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.26f)
                                    } else {
                                        MaterialTheme.colorScheme.primary.copy(alpha = 0.16f)
                                    },
                                    Color.Transparent
                                )
                            ),
                            shape = CircleShape
                        ),
                    contentAlignment = Alignment.Center
                ) {
                    Surface(
                        modifier = Modifier
                            .size((240 * sparkleShift).dp),
                        shape = CircleShape,
                        color = stageSpec.glowColor.copy(alpha = if (isWilted) 0.08f else 0.14f)
                    ) {}

                    Surface(
                        modifier = Modifier.size(252.dp),
                        shape = CircleShape,
                        color = MaterialTheme.colorScheme.surface.copy(alpha = 0.54f)
                    ) {}

                    val animationRes = plantAnimationRes(level = plant?.level ?: 1)
                    val composition by rememberLottieComposition(LottieCompositionSpec.RawRes(animationRes))

                    LottieAnimation(
                        composition = composition,
                        iterations = LottieConstants.IterateForever,
                        modifier = Modifier
                            .size(280.dp)
                            .graphicsLayer {
                                alpha = if (isWilted) 0.62f else 1f
                                translationY = if (isWilted) 14f else bobbingOffset
                                rotationZ = if (isWilted) -4f else 0f
                            }
                    )
                }

                PlantSparkles(
                    tint = stageSpec.glowColor,
                    isWilted = isWilted
                )
            }

            AnimatedContent(
                targetState = stageSpec,
                label = "stageSpec"
            ) { targetStage ->
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Text(
                        text = targetStage.title,
                        style = MaterialTheme.typography.headlineSmall,
                        fontWeight = FontWeight.SemiBold
                    )

                    Text(
                        text = targetStage.subtitle,
                        style = MaterialTheme.typography.bodyMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Text(
                text = when {
                    plant == null -> "Menghubungkan status tanaman ke server..."
                    plant.isWilted -> "Daunnya menunduk sedikit karena sudah tiga hari tanpa interaksi. Satu kebiasaan kecil bisa membuatnya segar lagi."
                    plant.level >= 4 -> "Bunga Pintu Langit sudah mekar penuh. Sekarang tugasmu bukan hanya menumbuhkan, tapi menjaga cahaya itu tetap hidup."
                    else -> "Tanaman ini sedang tumbuh sehat. Setiap habit, fokus bersama, dan interaksi kecil akan terasa langsung di sini."
                },
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
private fun PlantExpCard(
    plant: VirtualPlantStatusDto?,
    isAddingExp: Boolean,
    onWaterPlant: () -> Unit
) {
    val progressFraction = plant.progressFraction()

    ElevasiGlassPanel(
        accentColors = listOf(
            MaterialTheme.colorScheme.tertiary.copy(alpha = 0.16f),
            MaterialTheme.colorScheme.primary.copy(alpha = 0.08f)
        )
    ) {
        Column(
            modifier = Modifier.padding(22.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            Text(
                text = "Energi Pertumbuhan",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.SemiBold
            )

            Text(
                text = if (plant == null) {
                    "Progress EXP sedang dimuat..."
                } else if (plant.level >= 4) {
                    "Bunga Pintu Langit sudah mekar sempurna. EXP berikutnya hanya menjaga kehadirannya tetap cerah."
                } else {
                    "${plant.currentExp} / 100 EXP menuju level berikutnya"
                },
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            LinearProgressIndicator(
                progress = { progressFraction },
                modifier = Modifier
                    .fillMaxWidth()
                    .height(12.dp)
                    .clip(RoundedCornerShape(999.dp)),
                color = MaterialTheme.colorScheme.primary,
                trackColor = MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.55f)
            )

            HorizontalDivider(color = MaterialTheme.colorScheme.outlineVariant.copy(alpha = 0.45f))

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween
            ) {
                PlantMetric(
                    label = "Fase",
                    value = plant?.toStageLabel() ?: "Benih"
                )
                PlantMetric(
                    label = "Target",
                    value = plant?.toNextStageLabel() ?: "Level berikutnya"
                )
                PlantMetric(
                    label = "Sisa EXP",
                    value = plant?.expToNextLevel?.toString() ?: "100"
                )
            }

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                    Text(
                        text = "Level ${plant?.level ?: 1}",
                        style = MaterialTheme.typography.titleMedium
                    )
                    Text(
                        text = "Terakhir aktif ${plant.toLastInteractionLabel()}",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }

                Button(
                    onClick = onWaterPlant,
                    enabled = !isAddingExp,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.primary,
                        contentColor = MaterialTheme.colorScheme.onPrimary
                    ),
                    shape = RoundedCornerShape(18.dp)
                ) {
                    Text(
                        text = if (isAddingExp) {
                            "Menyiram..."
                        } else {
                            "Siram +10 EXP"
                        }
                    )
                }
            }
        }
    }
}

@Composable
private fun PlantEvolutionRail(
    currentLevel: Int
) {
    val stages = listOf(
        plantStageSpec(1),
        plantStageSpec(2),
        plantStageSpec(3),
        plantStageSpec(4)
    )

    ElevasiGlassPanel(
        accentColors = listOf(
            MaterialTheme.colorScheme.primary.copy(alpha = 0.14f),
            MaterialTheme.colorScheme.secondary.copy(alpha = 0.08f)
        )
    ) {
        Column(
            modifier = Modifier.padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp)
        ) {
            Text(
                text = "Jejak Evolusi",
                style = MaterialTheme.typography.titleLarge,
                fontWeight = FontWeight.SemiBold
            )

            stages.forEachIndexed { index, stage ->
                val level = index + 1
                val isActive = currentLevel == level
                val isReached = currentLevel >= level

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.spacedBy(14.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Surface(
                        modifier = Modifier.size(if (isActive) 18.dp else 14.dp),
                        shape = CircleShape,
                        color = if (isReached) {
                            stage.glowColor
                        } else {
                            MaterialTheme.colorScheme.outlineVariant
                        }
                    ) {}

                    Column(
                        modifier = Modifier.weight(1f),
                        verticalArrangement = Arrangement.spacedBy(2.dp)
                    ) {
                        Text(
                            text = stage.title,
                            style = MaterialTheme.typography.titleMedium,
                            color = if (isActive) {
                                MaterialTheme.colorScheme.onSurface
                            } else {
                                MaterialTheme.colorScheme.onSurfaceVariant
                            }
                        )
                        Text(
                            text = stage.subtitle,
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }

                    Surface(
                        shape = RoundedCornerShape(999.dp),
                        color = if (isActive) {
                            stage.glowColor.copy(alpha = 0.18f)
                        } else {
                            MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.55f)
                        }
                    ) {
                        Text(
                            text = if (isReached) "Aktif" else "Terkunci",
                            modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp),
                            style = MaterialTheme.typography.labelMedium,
                            color = if (isActive) stage.glowColor else MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }
        }
    }
}

@Composable
private fun PlantMetric(
    label: String,
    value: String
) {
    Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        Text(
            text = label,
            style = MaterialTheme.typography.bodySmall,
            color = MaterialTheme.colorScheme.onSurfaceVariant
        )
        Text(
            text = value,
            style = MaterialTheme.typography.titleSmall,
            color = MaterialTheme.colorScheme.onSurface
        )
    }
}

@Composable
private fun PlantSparkles(
    tint: Color,
    isWilted: Boolean
) {
    val sparklePulse by rememberInfiniteTransition(label = "sparkles").animateFloat(
        initialValue = 0.5f,
        targetValue = 1f,
        animationSpec = infiniteRepeatable(
            animation = tween(durationMillis = 1800, easing = FastOutSlowInEasing),
            repeatMode = RepeatMode.Reverse
        ),
        label = "sparklePulse"
    )

    val sparkleAlpha = if (isWilted) 0.16f else 0.46f * sparklePulse

    Box(modifier = Modifier.fillMaxWidth()) {
        Surface(
            modifier = Modifier
                .padding(start = 64.dp, top = 40.dp)
                .size(10.dp)
                .align(Alignment.TopStart),
            shape = CircleShape,
            color = tint.copy(alpha = sparkleAlpha)
        ) {}
        Surface(
            modifier = Modifier
                .padding(end = 72.dp, top = 66.dp)
                .size(12.dp)
                .align(Alignment.TopEnd),
            shape = CircleShape,
            color = tint.copy(alpha = sparkleAlpha * 0.92f)
        ) {}
        Surface(
            modifier = Modifier
                .padding(start = 90.dp, bottom = 62.dp)
                .size(8.dp)
                .align(Alignment.BottomStart),
            shape = CircleShape,
            color = tint.copy(alpha = sparkleAlpha * 0.85f)
        ) {}
        Surface(
            modifier = Modifier
                .padding(end = 92.dp, bottom = 80.dp)
                .size(7.dp)
                .align(Alignment.BottomEnd),
            shape = CircleShape,
            color = tint.copy(alpha = sparkleAlpha * 0.75f)
        ) {}
    }
}

private fun plantAnimationRes(level: Int): Int {
    return when (level.coerceIn(1, 4)) {
        1 -> R.raw.plant_seed
        2 -> R.raw.plant_sprout
        3 -> R.raw.plant_young
        else -> R.raw.plant_bloom
    }
}

private fun VirtualPlantStatusDto?.progressFraction(): Float {
    if (this == null) return 0f
    if (level >= 4) return 1f
    return (currentExp.coerceIn(0, 100) / 100f)
}

private fun VirtualPlantStatusDto.toStageLabel(): String {
    return plantStageSpec(level).shortLabel
}

private fun VirtualPlantStatusDto.toNextStageLabel(): String {
    return when (level) {
        1 -> "Menuju Tunas Kecil"
        2 -> "Menuju Tanaman Muda"
        3 -> "Menuju Bunga Pintu Langit"
        else -> "Mekar sempurna"
    }
}

private fun VirtualPlantStatusDto?.toLastInteractionLabel(): String {
    if (this == null) return "baru saja"

    return runCatching {
        val formatter = DateTimeFormatter.ofPattern("d MMM, HH:mm", Locale.forLanguageTag("id-ID"))
        OffsetDateTime.parse(lastInteraction).format(formatter)
    }.getOrDefault("baru saja")
}

private data class PlantStageSpec(
    val shortLabel: String,
    val title: String,
    val subtitle: String,
    val glowColor: Color
)

private fun plantStageSpec(level: Int): PlantStageSpec {
    return when (level.coerceIn(1, 4)) {
        1 -> PlantStageSpec(
            shortLabel = "Benih",
            title = "Benih yang Mulai Dipercaya",
            subtitle = "Masih kecil, tapi sudah menyimpan arah tumbuh yang jelas.",
            glowColor = Color(0xFFE8C4A8)
        )
        2 -> PlantStageSpec(
            shortLabel = "Tunas",
            title = "Tunas yang Menyapa Cahaya",
            subtitle = "Akar mulai diam-diam kuat, meski pertumbuhannya masih lembut.",
            glowColor = Color(0xFFB8D89A)
        )
        3 -> PlantStageSpec(
            shortLabel = "Muda",
            title = "Tanaman Muda yang Stabil",
            subtitle = "Ritme tumbuhnya lebih rapi, daunnya mulai punya karakter sendiri.",
            glowColor = Color(0xFFA7D6B7)
        )
        else -> PlantStageSpec(
            shortLabel = "Mekar",
            title = "Bunga Pintu Langit",
            subtitle = "Bentuk paling utuh dari perhatian kecil yang tidak ditinggalkan.",
            glowColor = Color(0xFFF0B6C8)
        )
    }
}
