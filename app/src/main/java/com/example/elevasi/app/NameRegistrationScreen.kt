package com.example.elevasi.app

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.unit.dp
import com.example.elevasi.ui.components.ElevasiGlassPanel
import com.example.elevasi.ui.components.ElevasiHeroCard
import com.example.elevasi.ui.components.ElevasiInfoPill
import com.example.elevasi.ui.components.ElevasiSectionHeader

@Composable
fun NameRegistrationScreen(
    nameInput: String,
    birthdayDayInput: String,
    birthdayMonthInput: String,
    isLoading: Boolean,
    isRegistering: Boolean,
    errorMessage: String?,
    onNameChange: (String) -> Unit,
    onBirthdayDayChange: (String) -> Unit,
    onBirthdayMonthChange: (String) -> Unit,
    onSubmit: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(
                brush = Brush.linearGradient(
                    colors = listOf(
                        MaterialTheme.colorScheme.background,
                        MaterialTheme.colorScheme.secondaryContainer.copy(alpha = 0.64f),
                        MaterialTheme.colorScheme.tertiaryContainer.copy(alpha = 0.46f)
                    )
                )
            ),
        contentAlignment = Alignment.Center
    ) {
        if (isLoading) {
            CircularProgressIndicator()
            return@Box
        }

        ElevasiGlassPanel(
            modifier = Modifier
                .fillMaxWidth()
                .padding(24.dp)
        ) {
            Column(
                modifier = Modifier.padding(24.dp),
                verticalArrangement = Arrangement.spacedBy(18.dp)
            ) {
                ElevasiHeroCard(
                    eyebrow = "Onboarding",
                    title = "Siapa yang membuka Elevasi?",
                    description = "Masukkan nama dan tanggal ulang tahun agar ruang ini mengenali identitasmu, menjadwalkan kejutan tengah malam, dan menghubungkanmu ke teman yang sama.",
                    trailingLabel = "Langkah 1"
                )

                Row(horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                    ElevasiInfoPill(text = "Nama bebas")
                    ElevasiInfoPill(text = "Ulang tahun wajib")
                }

                ElevasiSectionHeader(
                    title = "Identitas Dasar",
                    subtitle = "Informasi ini dipakai untuk pairing, mode ulang tahun, dan sinkronisasi pengalamanmu."
                )

                OutlinedTextField(
                    value = nameInput,
                    onValueChange = onNameChange,
                    modifier = Modifier.fillMaxWidth(),
                    label = {
                        Text("Nama")
                    },
                    placeholder = {
                        Text("Masukkan nama Kamu")
                    },
                    singleLine = true
                )
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    verticalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    Text(
                        text = "Tanggal ulang tahun",
                        style = MaterialTheme.typography.titleSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    Row(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(12.dp)
                    ) {
                        OutlinedTextField(
                            value = birthdayDayInput,
                            onValueChange = onBirthdayDayChange,
                            modifier = Modifier.weight(1f),
                            label = {
                                Text("Tanggal")
                            },
                            supportingText = {
                                Text("01-31")
                            },
                            placeholder = {
                                Text("06")
                            },
                            singleLine = true
                        )
                        OutlinedTextField(
                            value = birthdayMonthInput,
                            onValueChange = onBirthdayMonthChange,
                            modifier = Modifier.weight(1f),
                            label = {
                                Text("Bulan")
                            },
                            supportingText = {
                                Text("01-12")
                            },
                            placeholder = {
                                Text("03")
                            },
                            singleLine = true
                        )
                    }
                }
                Button(
                    onClick = onSubmit,
                    enabled = !isRegistering,
                    modifier = Modifier.fillMaxWidth(),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = MaterialTheme.colorScheme.primary,
                        contentColor = MaterialTheme.colorScheme.onPrimary
                    ),
                    shape = MaterialTheme.shapes.large
                ) {
                    Text(if (isRegistering) "Menyimpan..." else "Lanjutkan")
                }
                if (errorMessage != null) {
                    Text(
                        text = errorMessage,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.error
                    )
                }
                Text(
                    text = "Setelah dua orang terdaftar di pair yang sama, slot onboarding akan tertutup sampai login ulang memakai nama dan tanggal lahir yang sama.",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }
    }
}
