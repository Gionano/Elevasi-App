package com.example.elevasi.feature.beranda

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.FavoriteBorder
import androidx.compose.material.icons.outlined.PushPin
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.ui.theme.ElevasiPrimary
import com.example.elevasi.ui.theme.ElevasiTextPrimary
import com.example.elevasi.ui.theme.ElevasiTextSecondary

// ── Data model ────────────────────────────────────────────────────
data class Post(
    val id: Int,
    val author: String,
    val content: String,
    val time: String
)

// ── Dummy data ────────────────────────────────────────────────────
private val dummyPosts = listOf(
    Post(
        id = 1,
        author = "Almeira",
        content = "Hari ini aku belajar untuk lebih sabar mendengarkan tanpa langsung merespons. Ternyata diam sebentar bisa memberi ruang untuk memahami lebih dalam.",
        time = "2 menit lalu"
    ),
    Post(
        id = 2,
        author = "Varel",
        content = "Setiap pagi aku mencoba bangun 30 menit lebih awal. Bukan untuk produktif, tapi untuk menikmati keheningan sebelum dunia mulai ramai.",
        time = "15 menit lalu"
    ),
    Post(
        id = 3,
        author = "Almeira",
        content = "Kadang kita terlalu keras pada diri sendiri. Hari ini aku memilih untuk merayakan hal kecil—seperti berhasil menyelesaikan satu bab buku yang sudah lama tertunda.",
        time = "1 jam lalu"
    ),
    Post(
        id = 4,
        author = "Varel",
        content = "Refleksi hari ini: keberanian bukan berarti tidak takut, tapi tetap melangkah meskipun hati gemetar.",
        time = "3 jam lalu"
    ),
    Post(
        id = 5,
        author = "Almeira",
        content = "Menulis jurnal sebelum tidur ternyata membantu menenangkan pikiran. Semua yang mengganjal di hati jadi lebih ringan setelah dituangkan ke kata-kata.",
        time = "5 jam lalu"
    )
)

// ── Feed screen ───────────────────────────────────────────────────
@Composable
fun FeedScreen(
    session: UserSessionDto,
    modifier: Modifier = Modifier
) {
    LazyColumn(
        modifier = modifier.fillMaxSize(),
        contentPadding = PaddingValues(bottom = 96.dp) // extra padding so last item isn't hidden behind bottom bar
    ) {
        items(dummyPosts, key = { it.id }) { post ->
            PostCard(post = post)
            HorizontalDivider(
                color = ElevasiTextSecondary.copy(alpha = 0.15f),
                thickness = 0.5.dp
            )
        }
    }
}

// ── Post card ─────────────────────────────────────────────────────
@Composable
fun PostCard(
    post: Post,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 14.dp)
    ) {
        // ── Row: Avatar + Name + Time ─────────────────────────────
        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Small circular avatar with initial
            Box(
                modifier = Modifier
                    .size(24.dp)
                    .clip(CircleShape)
                    .background(ElevasiPrimary.copy(alpha = 0.14f)),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = post.author.take(1).uppercase(),
                    style = MaterialTheme.typography.labelMedium,
                    fontWeight = FontWeight.Bold,
                    color = ElevasiPrimary
                )
            }

            Spacer(modifier = Modifier.width(8.dp))

            Text(
                text = post.author,
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Bold,
                color = ElevasiTextPrimary
            )

            Spacer(modifier = Modifier.width(6.dp))

            Text(
                text = "·",
                style = MaterialTheme.typography.bodySmall,
                color = ElevasiTextSecondary
            )

            Spacer(modifier = Modifier.width(6.dp))

            Text(
                text = post.time,
                style = MaterialTheme.typography.bodySmall,
                color = ElevasiTextSecondary
            )
        }

        Spacer(modifier = Modifier.height(8.dp))

        // ── Content ───────────────────────────────────────────────
        Text(
            text = post.content,
            style = MaterialTheme.typography.bodyLarge,
            color = ElevasiTextPrimary
        )

        Spacer(modifier = Modifier.height(10.dp))

        // ── Action row ────────────────────────────────────────────
        Row(
            horizontalArrangement = Arrangement.spacedBy(4.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            IconButton(
                onClick = { /* like */ },
                modifier = Modifier.size(32.dp)
            ) {
                Icon(
                    imageVector = Icons.Outlined.FavoriteBorder,
                    contentDescription = "Suka",
                    modifier = Modifier.size(18.dp),
                    tint = ElevasiTextSecondary
                )
            }

            IconButton(
                onClick = { /* pin */ },
                modifier = Modifier.size(32.dp)
            ) {
                Icon(
                    imageVector = Icons.Outlined.PushPin,
                    contentDescription = "Pin",
                    modifier = Modifier.size(18.dp),
                    tint = ElevasiTextSecondary
                )
            }
        }
    }
}
