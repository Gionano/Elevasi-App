package com.example.elevasi.core.notifications

import android.app.NotificationChannel
import android.app.NotificationManager
import android.content.Context
import android.os.Build

object NotificationChannels {
    const val DAILY_REFLECTION_ID = "daily_reflection_reminder"
    const val MIDNIGHT_SURPRISE_ID = "midnight_surprise_mode"

    fun create(context: Context) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) return

        val dailyChannel = NotificationChannel(
            DAILY_REFLECTION_ID,
            "Daily Reflection Reminder",
            NotificationManager.IMPORTANCE_DEFAULT
        ).apply {
            description = "Pengingat harian untuk membuka Elevasi dan menjaga konsistensi."
        }
        val birthdayChannel = NotificationChannel(
            MIDNIGHT_SURPRISE_ID,
            "Midnight Surprise",
            NotificationManager.IMPORTANCE_HIGH
        ).apply {
            description = "Notifikasi lokal tepat pukul 00:00 saat hari ulang tahun pengguna tiba."
        }

        val notificationManager = context.getSystemService(NotificationManager::class.java)
        notificationManager.createNotificationChannels(listOf(dailyChannel, birthdayChannel))
    }
}
