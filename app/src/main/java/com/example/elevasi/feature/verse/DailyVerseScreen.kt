package com.example.elevasi.feature.verse

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.slideInVertically
import androidx.compose.animation.core.tween
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.elevasi.core.birthday.BirthdayProfiles
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.ui.components.ElevasiGlassPanel
import com.example.elevasi.ui.components.ElevasiHeroCard
import com.example.elevasi.ui.components.ElevasiSectionHeader

@Composable
fun DailyVerseScreen(
    session: UserSessionDto,
    isBirthdayMode: Boolean
) {
    if (isBirthdayMode) {
        BirthdayLetterScreen(session = session)
        return
    }

    val viewModel: DailyVerseViewModel = viewModel()
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    if (uiState.isLoading) {
        Box(
            modifier = Modifier.fillMaxSize(),
            contentAlignment = Alignment.Center
        ) {
            CircularProgressIndicator()
        }
        return
    }

    val verse = uiState.verse ?: return
    val errorMessage = uiState.errorMessage

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        ElevasiHeroCard(
            eyebrow = "Gerbang Langit",
            title = verse.title,
            description = "Ruang hening untuk menata batin, memperlambat pikiran, dan memilih satu arah kecil yang ingin dijaga hari ini."
        )

        ElevasiSectionHeader(
            title = "Verse Hari Ini",
            subtitle = "Baca perlahan, lalu pakai prompt ini sebagai kompas kecil untuk harimu."
        )

        ElevasiGlassPanel {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(20.dp),
                verticalArrangement = Arrangement.spacedBy(12.dp)
            ) {
                Text(
                    text = verse.verse,
                    style = MaterialTheme.typography.headlineSmall,
                    fontStyle = FontStyle.Italic
                )
                Text(
                    text = verse.reflectionPrompt,
                    style = MaterialTheme.typography.bodyLarge
                )
            }
        }

        if (errorMessage != null) {
            Text(
                text = errorMessage,
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }

        OutlinedButton(
            onClick = viewModel::loadDailyVerse,
            shape = MaterialTheme.shapes.large
        ) {
            Text("Muat Ulang Verse")
        }
    }
}

@Composable
private fun BirthdayLetterScreen(
    session: UserSessionDto
) {
    val profile = BirthdayProfiles.create(
        displayName = session.name,
        month = session.birthdayMonth,
        day = session.birthdayDay
    )
    var visible by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) {
        visible = true
    }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(20.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        ElevasiHeroCard(
            eyebrow = "Midnight Surprise",
            title = "Hari ini ruang ini berubah untukmu",
            description = "Fitur reguler menepi sejenak. Malam ini seluruh nuansa Elevasi berubah menjadi ruang perayaan yang lembut dan personal.",
            trailingLabel = profile.displayName
        )

        ElevasiSectionHeader(
            title = "Surat Kecil Untukmu",
            subtitle = "Satu momen khusus yang sengaja ditaruh di tengah rutinitas."
        )

        AnimatedVisibility(
            visible = visible,
            enter = fadeIn(animationSpec = tween(900)) +
                slideInVertically(
                    animationSpec = tween(900),
                    initialOffsetY = { it / 5 }
                )
        ) {
            ElevasiGlassPanel(
                accentColors = listOf(
                    MaterialTheme.colorScheme.primary.copy(alpha = 0.24f),
                    MaterialTheme.colorScheme.tertiary.copy(alpha = 0.12f)
                )
            ) {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(22.dp),
                    verticalArrangement = Arrangement.spacedBy(14.dp)
                ) {
                    Surface(
                        color = MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.78f),
                        shape = MaterialTheme.shapes.large
                    ) {
                        Text(
                            text = "Untuk ${profile.displayName}",
                            modifier = Modifier.padding(horizontal = 14.dp, vertical = 8.dp),
                            style = MaterialTheme.typography.labelLarge,
                            color = MaterialTheme.colorScheme.onSecondaryContainer
                        )
                    }

                    Text(
                        text = profile.letterTitle,
                        style = MaterialTheme.typography.headlineSmall,
                        fontWeight = FontWeight.SemiBold
                    )
                    Text(
                        text = profile.letterBody,
                        style = MaterialTheme.typography.bodyLarge
                    )
                    Text(
                        text = "Seluruh tema aplikasi ikut berubah malam ini, sebagai penanda bahwa hari ini memang berbeda.",
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }
        }
    }
}
