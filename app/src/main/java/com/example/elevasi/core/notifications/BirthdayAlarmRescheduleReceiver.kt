package com.example.elevasi.core.notifications

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import com.example.elevasi.data.repository.SessionRepository

class BirthdayAlarmRescheduleReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        val session = SessionRepository(context).getSavedSession() ?: return
        BirthdayAlarmScheduler.scheduleNextBirthdayReminder(context, session)
    }
}
