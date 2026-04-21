package com.example.elevasi.core.notifications

import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat
import com.example.elevasi.MainActivity
import com.example.elevasi.R

class BirthdayAlarmReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        NotificationChannels.create(context)

        val userId = BirthdayAlarmScheduler.extractUserId(intent) ?: return
        val userName = BirthdayAlarmScheduler.extractUserName(intent) ?: "Teman"
        val birthdayMonth = BirthdayAlarmScheduler.extractBirthdayMonth(intent)
        val birthdayDay = BirthdayAlarmScheduler.extractBirthdayDay(intent)

        val activityIntent = Intent(context, MainActivity::class.java)
        val contentIntent = PendingIntent.getActivity(
            context,
            userId.hashCode(),
            activityIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(
            context,
            NotificationChannels.MIDNIGHT_SURPRISE_ID
        )
            .setSmallIcon(R.mipmap.ic_launcher)
            .setContentTitle("Selamat ulang tahun, $userName")
            .setContentText("Midnight Surprise Mode aktif. Buka Elevasi untuk melihat kejutan spesialmu.")
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(contentIntent)
            .build()

        NotificationManagerCompat.from(context).notify(userId.hashCode(), notification)
        BirthdayAlarmScheduler.rescheduleFromReceiver(
            context = context,
            userId = userId,
            userName = userName,
            birthdayMonth = birthdayMonth,
            birthdayDay = birthdayDay
        )
    }
}
