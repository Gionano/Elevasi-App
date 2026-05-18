package com.example.elevasi.feature.beranda

import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.IntrinsicSize
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.BasicTextField
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.rounded.ArrowBack
import androidx.compose.material.icons.outlined.Image
import androidx.compose.material.icons.rounded.Close
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.SolidColor
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import coil.compose.AsyncImage
import com.example.elevasi.data.AvatarCache
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.ui.theme.ElevasiBackground
import com.example.elevasi.ui.theme.ElevasiPrimary
import com.example.elevasi.ui.theme.ElevasiTextPrimary
import com.example.elevasi.ui.theme.ElevasiTextSecondary

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ReplyScreen(
    postId: Int,
    postAuthor: String,
    postContent: String,
    postTime: String,
    postMediaUrl: String?,
    session: UserSessionDto,
    onNavigateBack: () -> Unit,
    viewModel: ReplyViewModel = viewModel()
) {
    val context = LocalContext.current
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    var replyText by remember { mutableStateOf("") }
    var selectedMediaUris by remember { mutableStateOf<List<Uri>>(emptyList()) }
    var showMediaViewer by remember { mutableStateOf<Pair<List<String>, Int>?>(null) }

    val photoPickerLauncher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.PickMultipleVisualMedia(maxItems = 4)
    ) { uris ->
        if (uris.isNotEmpty()) {
            selectedMediaUris = uris
        }
    }

    LaunchedEffect(postId) {
        viewModel.loadReplies(postId)
    }

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("Balas", fontWeight = FontWeight.SemiBold) },
                navigationIcon = {
                    IconButton(onClick = onNavigateBack) {
                        Icon(
                            imageVector = Icons.AutoMirrored.Rounded.ArrowBack,
                            contentDescription = "Kembali"
                        )
                    }
                },
                actions = {
                    Button(
                        onClick = {
                            viewModel.submitReply(
                                context = context,
                                postId = postId,
                                content = replyText,
                                authorName = session.name,
                                imageUris = selectedMediaUris,
                                onSuccess = {
                                    replyText = ""
                                    selectedMediaUris = emptyList()
                                }
                            )
                        },
                        enabled = replyText.isNotBlank() && !uiState.isSubmitting,
                        colors = ButtonDefaults.buttonColors(
                            containerColor = ElevasiPrimary,
                            contentColor = Color.White,
                            disabledContainerColor = ElevasiPrimary.copy(alpha = 0.5f)
                        ),
                        modifier = Modifier.padding(end = 8.dp),
                        shape = RoundedCornerShape(50)
                    ) {
                        if (uiState.isSubmitting) {
                            CircularProgressIndicator(
                                color = Color.White,
                                modifier = Modifier.size(18.dp),
                                strokeWidth = 2.dp
                            )
                        } else {
                            Text("Balas", fontWeight = FontWeight.Bold)
                        }
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = ElevasiBackground,
                    titleContentColor = ElevasiTextPrimary,
                    navigationIconContentColor = ElevasiTextPrimary
                )
            )
        },
        containerColor = ElevasiBackground
    ) { paddingValues ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(paddingValues)
        ) {
            LazyColumn(
                modifier = Modifier.weight(1f)
            ) {
                // ── Original Post (Thread Style) ────────────────────────
                item {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(start = 16.dp, end = 16.dp, top = 16.dp)
                            .height(IntrinsicSize.Min) // IntrinsicSize is needed to make the vertical line work
                    ) {
                        // Left Column: Avatar + Line
                        Column(
                            horizontalAlignment = Alignment.CenterHorizontally,
                            modifier = Modifier.width(40.dp)
                        ) {
                            // Avatar Post
                            Box(
                                modifier = Modifier
                                    .size(36.dp)
                                    .clip(CircleShape)
                                    .background(ElevasiPrimary.copy(alpha = 0.15f)),
                                contentAlignment = Alignment.Center
                            ) {
                                val postAvatarUrl = AvatarCache.getFullUrl(postAuthor)
                                if (postAvatarUrl != null) {
                                    AsyncImage(
                                        model = postAvatarUrl,
                                        contentDescription = "Avatar",
                                        modifier = Modifier.fillMaxSize(),
                                        contentScale = ContentScale.Crop
                                    )
                                } else {
                                    Text(
                                        text = postAuthor.take(1).uppercase(),
                                        fontSize = 14.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = ElevasiPrimary
                                    )
                                }
                            }
                            // Vertical Thread Line
                            Box(
                                modifier = Modifier
                                    .width(2.dp)
                                    .weight(1f) // Takes remaining height
                                    .padding(vertical = 4.dp)
                                    .background(ElevasiTextSecondary.copy(alpha = 0.3f))
                            )
                        }

                        Spacer(modifier = Modifier.width(12.dp))

                        // Right Column: Post Content
                        Column(
                            modifier = Modifier
                                .weight(1f)
                                .padding(bottom = 12.dp)
                        ) {
                            Row(verticalAlignment = Alignment.CenterVertically) {
                                Text(
                                    text = postAuthor,
                                    style = MaterialTheme.typography.titleMedium,
                                    fontWeight = FontWeight.Bold,
                                    color = ElevasiTextPrimary
                                )
                                Spacer(modifier = Modifier.width(6.dp))
                                Text(
                                    text = "· $postTime",
                                    style = MaterialTheme.typography.bodySmall,
                                    color = ElevasiTextSecondary
                                )
                            }
                            
                            Spacer(modifier = Modifier.height(4.dp))
                            
                            Text(
                                text = postContent,
                                style = MaterialTheme.typography.bodyLarge,
                                color = ElevasiTextPrimary,
                                lineHeight = 22.sp
                            )
                            
                            if (postMediaUrl != null) {
                                Spacer(modifier = Modifier.height(8.dp))
                                MediaCarousel(
                                    mediaUrls = listOf(postMediaUrl),
                                    onImageClick = { showMediaViewer = listOf(postMediaUrl) to 0 },
                                    modifier = Modifier.fillMaxWidth()
                                )
                            }
                            
                            Spacer(modifier = Modifier.height(8.dp))
                            
                            Text(
                                text = "Membalas kepada $postAuthor",
                                style = MaterialTheme.typography.bodyMedium,
                                color = ElevasiTextSecondary
                            )
                        }
                    }
                }

                // ── Input Area for Reply ──────────────────────────────
                item {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(start = 16.dp, end = 16.dp, top = 8.dp, bottom = 16.dp)
                    ) {
                        // Left Column: Reply Avatar
                        Column(
                            horizontalAlignment = Alignment.CenterHorizontally,
                            modifier = Modifier.width(40.dp)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(36.dp)
                                    .clip(CircleShape)
                                    .background(ElevasiPrimary.copy(alpha = 0.15f)),
                                contentAlignment = Alignment.Center
                            ) {
                                val myAvatarUrl = AvatarCache.getFullUrl(session.name)
                                if (myAvatarUrl != null) {
                                    AsyncImage(
                                        model = myAvatarUrl,
                                        contentDescription = "Avatar",
                                        modifier = Modifier.fillMaxSize(),
                                        contentScale = ContentScale.Crop
                                    )
                                } else {
                                    Text(
                                        text = session.name.take(1).uppercase(),
                                        fontSize = 14.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = ElevasiPrimary
                                    )
                                }
                            }
                        }

                        Spacer(modifier = Modifier.width(12.dp))

                        // Right Column: Text Input
                        Column(modifier = Modifier.weight(1f)) {
                            BasicTextField(
                                value = replyText,
                                onValueChange = { replyText = it },
                                modifier = Modifier.fillMaxWidth(),
                                textStyle = TextStyle(
                                    color = ElevasiTextPrimary,
                                    fontSize = 16.sp,
                                    lineHeight = 22.sp
                                ),
                                cursorBrush = SolidColor(ElevasiPrimary),
                                decorationBox = { innerTextField ->
                                    if (replyText.isEmpty()) {
                                        Text(
                                            text = "Tulis balasanmu...",
                                            color = ElevasiTextSecondary.copy(alpha = 0.7f),
                                            fontSize = 16.sp
                                        )
                                    }
                                    innerTextField()
                                }
                            )

                            if (selectedMediaUris.isNotEmpty()) {
                                Spacer(modifier = Modifier.height(12.dp))
                                androidx.compose.foundation.lazy.LazyRow(
                                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                                ) {
                                    items(selectedMediaUris.size) { index ->
                                        val uri = selectedMediaUris[index]
                                        Box {
                                            AsyncImage(
                                                model = uri,
                                                contentDescription = "Selected Image",
                                                modifier = Modifier
                                                    .size(100.dp)
                                                    .clip(RoundedCornerShape(16.dp)),
                                                contentScale = ContentScale.Crop
                                            )
                                            IconButton(
                                                onClick = { 
                                                    selectedMediaUris = selectedMediaUris.filterIndexed { i, _ -> i != index }
                                                },
                                                modifier = Modifier
                                                    .align(Alignment.TopEnd)
                                                    .padding(4.dp)
                                                    .size(24.dp)
                                                    .background(
                                                        Color.Black.copy(alpha = 0.6f),
                                                        CircleShape
                                                    )
                                            ) {
                                                Icon(
                                                    imageVector = Icons.Rounded.Close,
                                                    contentDescription = "Remove Image",
                                                    tint = Color.White,
                                                    modifier = Modifier.size(14.dp)
                                                )
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                    HorizontalDivider(color = ElevasiTextSecondary.copy(alpha = 0.1f))
                }

                // ── Existing Replies List ─────────────────────────────
                if (uiState.isLoading) {
                    item {
                        Box(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(32.dp),
                            contentAlignment = Alignment.Center
                        ) {
                            CircularProgressIndicator(color = ElevasiPrimary)
                        }
                    }
                } else {
                    items(uiState.replies, key = { it.id }) { reply ->
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(horizontal = 16.dp, vertical = 12.dp)
                        ) {
                            Box(
                                modifier = Modifier
                                    .size(36.dp)
                                    .clip(CircleShape)
                                    .background(ElevasiPrimary.copy(alpha = 0.15f)),
                                contentAlignment = Alignment.Center
                            ) {
                                val replyAvatarUrl = AvatarCache.getFullUrl(reply.authorName)
                                if (replyAvatarUrl != null) {
                                    AsyncImage(
                                        model = replyAvatarUrl,
                                        contentDescription = "Avatar",
                                        modifier = Modifier.fillMaxSize(),
                                        contentScale = ContentScale.Crop
                                    )
                                } else {
                                    Text(
                                        text = reply.authorName.take(1).uppercase(),
                                        fontSize = 14.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = ElevasiPrimary
                                    )
                                }
                            }
                            
                            Spacer(modifier = Modifier.width(12.dp))
                            
                            Column(modifier = Modifier.weight(1f)) {
                                Row(verticalAlignment = Alignment.CenterVertically) {
                                    Text(
                                        text = reply.authorName,
                                        style = MaterialTheme.typography.titleMedium,
                                        fontWeight = FontWeight.Bold,
                                        color = ElevasiTextPrimary
                                    )
                                    // You can format date properly here if needed
                                }
                                
                                Spacer(modifier = Modifier.height(4.dp))
                                
                                Text(
                                    text = reply.content,
                                    style = MaterialTheme.typography.bodyLarge,
                                    color = ElevasiTextPrimary,
                                    lineHeight = 22.sp
                                )
                                
                                if (reply.mediaUrls.isNotEmpty()) {
                                    Spacer(modifier = Modifier.height(8.dp))
                                    MediaCarousel(
                                        mediaUrls = reply.mediaUrls,
                                        onImageClick = { index -> showMediaViewer = reply.mediaUrls to index },
                                        modifier = Modifier.fillMaxWidth()
                                    )
                                }
                            }
                        }
                        HorizontalDivider(color = ElevasiTextSecondary.copy(alpha = 0.1f))
                    }
                }
            }

            // ── Toolbar ──────────────────────────────────────────────────
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .background(ElevasiBackground)
                    .padding(horizontal = 8.dp, vertical = 4.dp),
                verticalAlignment = Alignment.CenterVertically
            ) {
                IconButton(onClick = { 
                    photoPickerLauncher.launch(
                        androidx.activity.result.PickVisualMediaRequest(
                            ActivityResultContracts.PickVisualMedia.ImageAndVideo
                        )
                    )
                }) {
                    Icon(
                        imageVector = Icons.Outlined.Image,
                        contentDescription = "Pilih Gambar",
                        tint = ElevasiPrimary
                    )
                }
            }
        }
    }

    if (showMediaViewer != null) {
        MediaViewerDialog(
            mediaUrls = showMediaViewer!!.first,
            initialPage = showMediaViewer!!.second,
            onDismiss = { showMediaViewer = null }
        )
    }
}
