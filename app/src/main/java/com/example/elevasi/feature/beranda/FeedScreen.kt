package com.example.elevasi.feature.beranda

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
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.outlined.ChatBubbleOutline
import androidx.compose.material.icons.outlined.FavoriteBorder
import androidx.compose.material.icons.outlined.PushPin
import androidx.compose.material.icons.rounded.Favorite
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.SnackbarHost
import androidx.compose.material3.SnackbarHostState
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.data.AvatarCache
import com.example.elevasi.ui.theme.ElevasiPrimary
import com.example.elevasi.ui.theme.ElevasiTextPrimary
import com.example.elevasi.ui.theme.ElevasiTextSecondary
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.ui.platform.LocalLifecycleOwner
import androidx.lifecycle.Lifecycle
import androidx.lifecycle.LifecycleEventObserver
import androidx.compose.runtime.DisposableEffect
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.pulltorefresh.PullToRefreshBox
import androidx.compose.foundation.shape.RoundedCornerShape
import java.time.Instant
import java.time.ZoneId
import java.time.temporal.ChronoUnit
import coil.compose.AsyncImage
import androidx.compose.ui.layout.ContentScale

// ── Data Model ───────────────────────────────────────────────────────

data class Post(
    val id: Int,
    val author: String,
    val content: String,
    val time: String,
    val isPinned: Boolean = false,
    val likesCount: Int = 0,
    val isLiked: Boolean = false,
    val mediaUrls: List<String> = emptyList(),
    val repliesCount: Int = 0
)

// ── Relative Time Helper ─────────────────────────────────────────────

private fun formatRelativeTime(isoTimestamp: String): String {
    return try {
        val postTime = Instant.parse(isoTimestamp)
        val now = Instant.now()
        val seconds = ChronoUnit.SECONDS.between(postTime, now)

        when {
            seconds < 0 -> "Baru saja"
            seconds < 60 -> "${seconds} detik lalu"
            seconds < 3600 -> "${seconds / 60} menit lalu"
            seconds < 86400 -> "${seconds / 3600} jam lalu"
            seconds < 604800 -> "${seconds / 86400} hari lalu"
            seconds < 2592000 -> "${seconds / 604800} minggu lalu"
            else -> {
                val date = postTime.atZone(ZoneId.systemDefault()).toLocalDate()
                "${date.dayOfMonth}/${date.monthValue}/${date.year}"
            }
        }
    } catch (e: Exception) {
        "Baru saja"
    }
}

// ── Feed Screen ──────────────────────────────────────────────────────

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun FeedScreen(
    session: UserSessionDto,
    onNavigateToReply: (Int, String, String, String, String?) -> Unit,
    modifier: Modifier = Modifier,
    viewModel: FeedViewModel = viewModel()
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val lifecycleOwner = LocalLifecycleOwner.current
    val snackbarHostState = remember { SnackbarHostState() }

    var showMediaViewer by remember { mutableStateOf<Pair<List<String>, Int>?>(null) }

    // Birthday dialog state — survives recomposition but not process death
    var showBirthdayDialog by rememberSaveable { mutableStateOf(true) }

    // Set userId so the ViewModel fetches per-user pin data + birthday check
    LaunchedEffect(session.userId) {
        viewModel.setUserId(session.userId)
    }

    // Show pin error as snackbar
    LaunchedEffect(uiState.pinErrorMessage) {
        uiState.pinErrorMessage?.let { message ->
            snackbarHostState.showSnackbar(message)
            viewModel.clearPinError()
        }
    }

    DisposableEffect(lifecycleOwner) {
        val observer = LifecycleEventObserver { _, event ->
            if (event == Lifecycle.Event.ON_RESUME) {
                viewModel.loadFeed()
            }
        }
        lifecycleOwner.lifecycle.addObserver(observer)
        onDispose {
            lifecycleOwner.lifecycle.removeObserver(observer)
        }
    }

    // ── Birthday Surprise Dialog ─────────────────────────────────────
    if (uiState.isBirthday && showBirthdayDialog) {
        BirthdaySurpriseDialog(
            recipientName = session.name,
            onDismiss = { showBirthdayDialog = false }
        )
    }

    // Full screen loading only if no posts are available yet
    if (uiState.isLoading && uiState.posts.isEmpty()) {
        Box(modifier = modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            CircularProgressIndicator(color = ElevasiPrimary)
        }
        return
    }

    if (uiState.errorMessage != null && uiState.posts.isEmpty()) {
        Box(modifier = modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
            Text(text = uiState.errorMessage ?: "", color = ElevasiTextSecondary)
        }
        return
    }

    val posts = uiState.posts.map { dto ->
        Post(
            id = dto.id,
            author = dto.authorName,
            content = dto.content,
            time = formatRelativeTime(dto.createdAt),
            isPinned = dto.isPinned,
            likesCount = dto.likesCount,
            isLiked = uiState.likedPostIds.contains(dto.id),
            mediaUrls = dto.mediaUrls,
            repliesCount = dto.repliesCount
        )
    }

    Box(modifier = modifier.fillMaxSize()) {
        PullToRefreshBox(
            isRefreshing = uiState.isLoading,
            onRefresh = { viewModel.loadFeed() },
            modifier = Modifier.fillMaxSize()
        ) {
            LazyColumn(
                modifier = Modifier.fillMaxSize(),
                contentPadding = PaddingValues(bottom = 96.dp)
            ) {
                // ── Birthday Pinned Card (di urutan paling atas) ──────
                if (uiState.isBirthday) {
                    item(key = "birthday_card") {
                        BirthdayPinnedCard(recipientName = session.name)

                        HorizontalDivider(
                            color = ElevasiTextSecondary.copy(alpha = 0.15f),
                            thickness = 0.5.dp
                        )
                    }
                }

                // ── Feed Posts ────────────────────────────────────────
                items(posts, key = { it.id }) { post ->
                    PostCard(
                        post = post,
                        onLikeClick = { viewModel.likePost(post.id) },
                        onPinClick = { viewModel.pinPost(post.id) },
                        onReplyClick = {
                            val mediaUrlParam = post.mediaUrls.firstOrNull()
                            onNavigateToReply(post.id, post.author, post.content, post.time, mediaUrlParam) 
                        },
                        onImageClick = { index -> showMediaViewer = post.mediaUrls to index }
                    )

                    HorizontalDivider(
                        color = ElevasiTextSecondary.copy(alpha = 0.15f),
                        thickness = 0.5.dp
                    )
                }
            }
        }

        SnackbarHost(
            hostState = snackbarHostState,
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 100.dp)
        )
    }

    if (showMediaViewer != null) {
        MediaViewerDialog(
            mediaUrls = showMediaViewer!!.first,
            initialPage = showMediaViewer!!.second,
            onDismiss = { showMediaViewer = null }
        )
    }
}

// ── Post Card ────────────────────────────────────────────────────────

@Composable
private fun PostCard(
    post: Post,
    onLikeClick: () -> Unit,
    onPinClick: () -> Unit,
    onReplyClick: () -> Unit,
    onImageClick: (Int) -> Unit,
    modifier: Modifier = Modifier
) {
    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 14.dp)
    ) {
        // ── Baris Atas: Avatar + Nama + Waktu ────────────────────────
        Row(
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Foto profil kecil (24dp) — avatar atau inisial
            Box(
                modifier = Modifier
                    .size(24.dp)
                    .clip(CircleShape)
                    .background(ElevasiPrimary.copy(alpha = 0.15f)),
                contentAlignment = Alignment.Center
            ) {
                val avatarFullUrl = AvatarCache.getFullUrl(post.author)
                if (avatarFullUrl != null) {
                    AsyncImage(
                        model = avatarFullUrl,
                        contentDescription = "Avatar",
                        modifier = Modifier.fillMaxSize(),
                        contentScale = ContentScale.Crop
                    )
                } else {
                    Text(
                        text = post.author.take(1).uppercase(),
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = ElevasiPrimary
                    )
                }
            }

            Spacer(modifier = Modifier.width(8.dp))

            // Nama akun
            Text(
                text = post.author,
                style = MaterialTheme.typography.titleSmall,
                fontWeight = FontWeight.Bold,
                color = ElevasiTextPrimary
            )

            Spacer(modifier = Modifier.width(6.dp))

            // Timestamp
            Text(
                text = "· ${post.time}",
                style = MaterialTheme.typography.bodySmall,
                color = ElevasiTextSecondary
            )

            // Pinned indicator
            if (post.isPinned) {
                Spacer(modifier = Modifier.width(6.dp))
                Icon(
                    imageVector = Icons.Outlined.PushPin,
                    contentDescription = "Disematkan",
                    modifier = Modifier.size(14.dp),
                    tint = ElevasiPrimary.copy(alpha = 0.7f)
                )
            }
        }

        Spacer(modifier = Modifier.height(8.dp))

        // ── Baris Tengah: Isi teks ───────────────────────────────────
        Text(
            text = post.content,
            style = MaterialTheme.typography.bodyLarge,
            color = ElevasiTextPrimary,
            lineHeight = 24.sp
        )
        
        if (post.mediaUrls.isNotEmpty()) {
            Spacer(modifier = Modifier.height(12.dp))
            MediaCarousel(
                mediaUrls = post.mediaUrls,
                onImageClick = onImageClick,
                modifier = Modifier.fillMaxWidth()
            )
        }

        Spacer(modifier = Modifier.height(12.dp))

        // ── Baris Bawah: Action Bar ──────────────────────────────────
        Row(
            horizontalArrangement = Arrangement.spacedBy(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            // Reply button
            Row(
                modifier = Modifier.clickable(onClick = onReplyClick),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                Icon(
                    imageVector = Icons.Outlined.ChatBubbleOutline,
                    contentDescription = "Balas",
                    modifier = Modifier.size(18.dp),
                    tint = ElevasiTextSecondary
                )
                if (post.repliesCount > 0) {
                    Text(
                        text = "${post.repliesCount}",
                        style = MaterialTheme.typography.labelMedium,
                        color = ElevasiTextSecondary
                    )
                }
            }

            // Like button
            Row(
                modifier = Modifier.clickable(onClick = onLikeClick),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                Icon(
                    imageVector = if (post.isLiked) Icons.Rounded.Favorite else Icons.Outlined.FavoriteBorder,
                    contentDescription = "Suka",
                    modifier = Modifier.size(18.dp),
                    tint = if (post.isLiked) ElevasiPrimary else ElevasiTextSecondary
                )
                if (post.likesCount > 0) {
                    Text(
                        text = "${post.likesCount}",
                        style = MaterialTheme.typography.labelMedium,
                        color = if (post.isLiked) ElevasiPrimary else ElevasiTextSecondary
                    )
                }
            }

            // Pin button
            Row(
                modifier = Modifier.clickable(onClick = onPinClick),
                verticalAlignment = Alignment.CenterVertically,
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                Icon(
                    imageVector = Icons.Outlined.PushPin,
                    contentDescription = "Sematkan",
                    modifier = Modifier.size(18.dp),
                    tint = if (post.isPinned) ElevasiPrimary else ElevasiTextSecondary
                )
            }
        }
    }
}
