package com.example.elevasi.feature.dashboard

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import androidx.lifecycle.viewmodel.compose.viewModel
import com.example.elevasi.data.model.UserSessionDto
import com.example.elevasi.ui.components.ElevasiHeroCard
import com.example.elevasi.ui.components.ElevasiInfoPill
import com.example.elevasi.ui.components.ElevasiSectionHeader

@Composable
fun DashboardScreen(
    session: UserSessionDto
) {
    val viewModel: DashboardViewModel = viewModel(
        factory = DashboardViewModel.factory(session)
    )
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()
    val errorMessage = uiState.errorMessage

    LaunchedEffect(viewModel) {
        viewModel.loadDashboard()
    }

    LazyColumn(
        modifier = Modifier.fillMaxSize(),
        contentPadding = PaddingValues(20.dp),
        verticalArrangement = Arrangement.spacedBy(18.dp)
    ) {
        item {
            Column(verticalArrangement = Arrangement.spacedBy(14.dp)) {
                ElevasiHeroCard(
                    eyebrow = "Shared Presence",
                    title = "Ritme dua arah yang lebih tenang",
                    description = "Perbarui statusmu, lihat ruang temanmu, dan kirim reaksi kecil tanpa membuat dashboard terasa berisik.",
                    trailingLabel = uiState.currentUserName
                )

                Column(verticalArrangement = Arrangement.spacedBy(10.dp)) {
                    ElevasiInfoPill(text = "Kamu: ${uiState.currentUserName}")
                    ElevasiInfoPill(text = "Teman: ${uiState.partnerUserName}")
                }
            }
        }

        item {
            Box(modifier = Modifier.fillMaxWidth()) {
                Column(
                    modifier = Modifier.fillMaxWidth(),
                    verticalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    ElevasiSectionHeader(
                        title = "Status Saya",
                        subtitle = "Atur ritme harianmu sebelum terkoneksi ke teman."
                    )

                    MyPresenceCard(
                        userName = uiState.currentUserName,
                        status = uiState.myStatus?.status ?: uiState.selectedStatus.apiValue,
                        draftMessage = uiState.draftMessage,
                        updatedAt = uiState.myStatus?.updatedAt,
                        selectedStatus = uiState.selectedStatus,
                        onStatusSelected = viewModel::selectStatus,
                        onMessageChange = viewModel::updateDraftMessage,
                        onSubmit = viewModel::submitMyStatus,
                        isLoading = uiState.isLoading,
                        isSubmitting = uiState.isSubmittingStatus,
                        modifier = Modifier.fillMaxWidth()
                    )
                }

                IncomingReactionOverlay(
                    reaction = uiState.incomingReaction,
                    senderName = uiState.partnerUserName,
                    modifier = Modifier
                        .align(Alignment.TopEnd)
                        .padding(top = 12.dp, end = 14.dp)
                )
            }
        }

        item {
            Column(
                modifier = Modifier.fillMaxWidth(),
                verticalArrangement = Arrangement.spacedBy(10.dp)
            ) {
                ElevasiSectionHeader(
                    title = "Status Teman",
                    subtitle = "Lihat update terbaru dan kirim reaksi kecil yang hangat."
                )

                PartnerPresenceCard(
                    userName = uiState.partnerUserName,
                    status = uiState.partnerStatus?.status ?: "offline",
                    message = uiState.partnerStatus?.message
                        ?: "Status teman akan diperbarui saat halaman ini dimuat lagi.",
                    updatedAt = uiState.partnerStatus?.updatedAt,
                    isBirthday = uiState.partnerStatus?.isBirthday == true,
                    isPartnerConnected = uiState.partnerUserId.isNotBlank(),
                    reactionOptions = uiState.reactionOptions,
                    isLoading = uiState.isLoading,
                    isSendingReaction = uiState.isSendingReaction,
                    onReactionClick = viewModel::sendReaction,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }

        if (errorMessage != null) {
            item {
                Text(
                    text = errorMessage,
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.error,
                    modifier = Modifier.padding(horizontal = 4.dp)
                )
            }
        }
    }
}
