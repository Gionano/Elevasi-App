package com.example.elevasi.app

import android.app.Application
import com.example.elevasi.core.notifications.NotificationChannels
import com.example.elevasi.core.notifications.ReminderScheduler

class ElevasiApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        NotificationChannels.create(this)
        ReminderScheduler.scheduleDailyReminder(this)
    }
}
