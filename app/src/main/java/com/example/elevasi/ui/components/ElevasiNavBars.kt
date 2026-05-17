package com.example.elevasi.ui.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.elevasi.core.navigation.ElevasiDestination
import com.example.elevasi.ui.theme.ElevasiBackground
import com.example.elevasi.ui.theme.ElevasiPrimary
import com.example.elevasi.ui.theme.ElevasiTextPrimary
import com.example.elevasi.ui.theme.ElevasiTextSecondary

// ── Top App Bar ───────────────────────────────────────────────────
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ElevasiTopBar(
    userName: String,
    onProfileClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    TopAppBar(
        modifier = modifier,
        colors = TopAppBarDefaults.topAppBarColors(
            containerColor = ElevasiBackground,
            scrolledContainerColor = ElevasiBackground
        ),
        navigationIcon = {
            // Circular avatar placeholder with first letter of name
            Box(
                modifier = Modifier
                    .size(36.dp)
                    .clip(CircleShape)
                    .background(ElevasiPrimary.copy(alpha = 0.15f))
                    .clickable(onClick = onProfileClick),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = userName.take(1).uppercase(),
                    style = MaterialTheme.typography.titleSmall,
                    fontWeight = FontWeight.Bold,
                    color = ElevasiPrimary
                )
            }
        },
        title = {
            Text(
                text = "Elevasi",
                fontFamily = FontFamily.Serif,
                fontWeight = FontWeight.Medium,
                fontSize = 20.sp,
                color = ElevasiTextPrimary
            )
        }
    )
}

// ── Bottom Navigation Bar ─────────────────────────────────────────
@Composable
fun ElevasiBottomBar(
    destinations: List<ElevasiDestination>,
    currentRoute: String?,
    onDestinationClick: (ElevasiDestination) -> Unit,
    modifier: Modifier = Modifier
) {
    NavigationBar(
        modifier = modifier,
        containerColor = ElevasiBackground,
        tonalElevation = 0.dp
    ) {
        destinations.forEach { destination ->
            val isSelected = currentRoute == destination.route

            NavigationBarItem(
                selected = isSelected,
                onClick = { onDestinationClick(destination) },
                alwaysShowLabel = false,
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = ElevasiPrimary,
                    selectedTextColor = ElevasiPrimary,
                    indicatorColor = ElevasiPrimary.copy(alpha = 0.12f),
                    unselectedIconColor = ElevasiTextSecondary,
                    unselectedTextColor = ElevasiTextSecondary
                ),
                icon = {
                    Icon(
                        imageVector = if (isSelected) destination.iconFilled
                                      else destination.iconOutlined,
                        contentDescription = destination.label
                    )
                },
                label = {
                    Text(
                        text = destination.label,
                        style = MaterialTheme.typography.labelMedium
                    )
                }
            )
        }
    }
}
