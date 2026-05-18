package com.example.elevasi.feature.beranda

import androidx.compose.animation.animateContentSize
import androidx.compose.animation.core.Spring
import androidx.compose.animation.core.animateFloatAsState
import androidx.compose.animation.core.spring
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.font.FontStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.window.Dialog
import androidx.compose.ui.window.DialogProperties
import com.example.elevasi.ui.theme.ElevasiBackground
import com.example.elevasi.ui.theme.ElevasiPrimary
import com.example.elevasi.ui.theme.ElevasiSurface
import com.example.elevasi.ui.theme.ElevasiTextPrimary
import com.example.elevasi.ui.theme.ElevasiTextSecondary
import java.time.LocalDate

// ══════════════════════════════════════════════════════════════════════
// Birthday Helper
// ══════════════════════════════════════════════════════════════════════

fun isBirthdayToday(birthdayMonth: Int, birthdayDay: Int): Boolean {
    val today = LocalDate.now()
    return today.monthValue == birthdayMonth && today.dayOfMonth == birthdayDay
}

// ══════════════════════════════════════════════════════════════════════
// Birthday Surprise Dialog
// ══════════════════════════════════════════════════════════════════════

@Composable
fun BirthdaySurpriseDialog(
    recipientName: String,
    onDismiss: () -> Unit
) {
    var animateIn by remember { mutableStateOf(false) }

    LaunchedEffect(Unit) { animateIn = true }

    val scale by animateFloatAsState(
        targetValue = if (animateIn) 1f else 0.8f,
        animationSpec = spring(
            dampingRatio = Spring.DampingRatioMediumBouncy,
            stiffness = Spring.StiffnessLow
        ),
        label = "dialogScale"
    )

    Dialog(
        onDismissRequest = onDismiss,
        properties = DialogProperties(usePlatformDefaultWidth = false)
    ) {
        Card(
            modifier = Modifier
                .fillMaxWidth(0.88f)
                .scale(scale)
                .animateContentSize(),
            shape = RoundedCornerShape(24.dp),
            colors = CardDefaults.cardColors(containerColor = ElevasiBackground),
            elevation = CardDefaults.cardElevation(defaultElevation = 12.dp)
        ) {
            Column(
                modifier = Modifier.padding(28.dp),
                horizontalAlignment = Alignment.CenterHorizontally
            ) {
                // ── Ornamen Perayaan ─────────────────────────────────
                Row(
                    horizontalArrangement = Arrangement.Center,
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.fillMaxWidth()
                ) {
                    Text("🎂", fontSize = 28.sp)
                    Spacer(modifier = Modifier.width(8.dp))
                    // Rose-gold sparkle circle
                    Box(
                        modifier = Modifier
                            .size(48.dp)
                            .clip(CircleShape)
                            .background(
                                Brush.radialGradient(
                                    colors = listOf(
                                        ElevasiPrimary.copy(alpha = 0.35f),
                                        ElevasiPrimary.copy(alpha = 0.08f)
                                    )
                                )
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Text("✨", fontSize = 24.sp)
                    }
                    Spacer(modifier = Modifier.width(8.dp))
                    Text("🎂", fontSize = 28.sp)
                }

                Spacer(modifier = Modifier.height(20.dp))

                // ── Judul ────────────────────────────────────────────
                Text(
                    text = "Selamat Hari Menetas!",
                    style = MaterialTheme.typography.headlineSmall,
                    fontWeight = FontWeight.Bold,
                    color = ElevasiTextPrimary,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(6.dp))

                Text(
                    text = "untuk $recipientName 🌸",
                    style = MaterialTheme.typography.titleMedium,
                    fontWeight = FontWeight.Medium,
                    color = ElevasiPrimary,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(20.dp))

                // ── Ucapan Puitis ────────────────────────────────────
                Text(
                    text = "Hari ini dunia merayakan keberadaanmu.\n\n" +
                            "Setiap langkah yang kau ambil, setiap napas yang kau hirup, " +
                            "adalah bukti bahwa semesta menaruh harapan padamu.\n\n" +
                            "Teruslah tumbuh, teruslah bersinar — " +
                            "karena cahayamu menerangi lebih banyak hati " +
                            "daripada yang kau sadari. 💛",
                    style = MaterialTheme.typography.bodyMedium,
                    color = ElevasiTextSecondary,
                    textAlign = TextAlign.Center,
                    lineHeight = 22.sp
                )

                Spacer(modifier = Modifier.height(28.dp))

                // ── Tombol Aksi ──────────────────────────────────────
                Button(
                    onClick = onDismiss,
                    modifier = Modifier.fillMaxWidth(),
                    shape = RoundedCornerShape(14.dp),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = ElevasiPrimary,
                        contentColor = Color.White
                    ),
                    elevation = ButtonDefaults.buttonElevation(defaultElevation = 4.dp)
                ) {
                    Text(
                        text = "Terima Kasih 🤍",
                        modifier = Modifier.padding(vertical = 4.dp),
                        fontWeight = FontWeight.SemiBold,
                        fontSize = 15.sp
                    )
                }
            }
        }
    }
}

// ══════════════════════════════════════════════════════════════════════
// Birthday Pinned Card (Kertas Terbang Emas)
// ══════════════════════════════════════════════════════════════════════

@Composable
fun BirthdayPinnedCard(
    recipientName: String,
    modifier: Modifier = Modifier
) {
    Card(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 10.dp)
            .border(
                width = 1.5.dp,
                brush = Brush.linearGradient(
                    colors = listOf(
                        ElevasiPrimary.copy(alpha = 0.7f),
                        ElevasiPrimary.copy(alpha = 0.3f),
                        ElevasiPrimary.copy(alpha = 0.7f)
                    )
                ),
                shape = RoundedCornerShape(18.dp)
            ),
        shape = RoundedCornerShape(18.dp),
        colors = CardDefaults.cardColors(containerColor = ElevasiSurface),
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp)
    ) {
        Column(
            modifier = Modifier.padding(horizontal = 18.dp, vertical = 16.dp)
        ) {
            // ── Header ───────────────────────────────────────────────
            Row(
                verticalAlignment = Alignment.CenterVertically
            ) {
                // Avatar with birthday sparkle
                Box(
                    modifier = Modifier
                        .size(28.dp)
                        .clip(CircleShape)
                        .background(ElevasiPrimary.copy(alpha = 0.2f)),
                    contentAlignment = Alignment.Center
                ) {
                    Text(
                        text = "🎂",
                        fontSize = 14.sp
                    )
                }

                Spacer(modifier = Modifier.width(8.dp))

                Text(
                    text = "Elevasi",
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.Bold,
                    color = ElevasiPrimary
                )

                Spacer(modifier = Modifier.width(4.dp))

                Text(
                    text = "✦",
                    fontSize = 10.sp,
                    color = ElevasiPrimary.copy(alpha = 0.6f)
                )

                Spacer(modifier = Modifier.width(6.dp))

                Text(
                    text = "· Kejutan Spesial",
                    style = MaterialTheme.typography.bodySmall,
                    color = ElevasiTextSecondary.copy(alpha = 0.7f)
                )
            }

            Spacer(modifier = Modifier.height(12.dp))

            // ── Content ──────────────────────────────────────────────
            Text(
                text = "🌸 Selamat Ulang Tahun, $recipientName! 🌸",
                style = MaterialTheme.typography.bodyLarge,
                fontWeight = FontWeight.SemiBold,
                color = ElevasiTextPrimary,
                lineHeight = 24.sp
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "Hari ini spesial untukmu. Semoga setiap harapanmu " +
                        "menemukan jalannya, dan setiap langkahmu dipenuhi kebahagiaan. " +
                        "Kamu berharga, selalu. 💛",
                style = MaterialTheme.typography.bodyMedium,
                color = ElevasiTextSecondary,
                lineHeight = 22.sp
            )

            Spacer(modifier = Modifier.height(10.dp))

            // ── Footer Tag ───────────────────────────────────────────
            Box(
                modifier = Modifier
                    .clip(RoundedCornerShape(8.dp))
                    .background(ElevasiPrimary.copy(alpha = 0.1f))
                    .padding(horizontal = 10.dp, vertical = 4.dp)
            ) {
                Text(
                    text = "🎉 Kertas Terbang Emas",
                    style = MaterialTheme.typography.labelSmall,
                    fontWeight = FontWeight.Medium,
                    color = ElevasiPrimary,
                    fontStyle = FontStyle.Italic
                )
            }
        }
    }
}
