package com.example.elevasi.core.notifications

import android.app.AlarmManager
import android.app.PendingIntent
import android.content.Context
import android.content.Intent
import android.os.Build
import com.example.elevasi.data.model.UserSessionDto
import java.time.LocalDateTime
import java.time.ZoneId

object BirthdayAlarmScheduler {
    private const val EXTRA_USER_ID = "birthday_user_id"
    private const val EXTRA_USER_NAME = "birthday_user_name"
    private const val EXTRA_BIRTHDAY_MONTH = "birthday_month"
    private const val EXTRA_BIRTHDAY_DAY = "birthday_day"

    fun scheduleNextBirthdayReminder(
        context: Context,
        session: UserSessionDto
    ) {
        scheduleInternal(
            context = context,
            userId = session.userId,
            userName = session.name,
            month = session.birthdayMonth,
            day = session.birthdayDay
        )
    }

    internal fun rescheduleFromReceiver(
        context: Context,
        userId: String,
        userName: String,
        birthdayMonth: Int,
        birthdayDay: Int
    ) {
        scheduleInternal(
            context = context,
            userId = userId,
            userName = userName,
            month = birthdayMonth,
            day = birthdayDay
        )
    }

    private fun scheduleInternal(
        context: Context,
        userId: String,
        userName: String,
        month: Int,
        day: Int
    ) {
        if (month !in 1..12 || day !in 1..31) return

        val alarmManager = context.getSystemService(Context.ALARM_SERVICE) as AlarmManager
        val pendingIntent = birthdayPendingIntent(
            context = context,
            userId = userId,
            userName = userName,
            month = month,
            day = day
        )
        val triggerAtMillis = nextBirthdayMidnightMillis(month, day)

        when {
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.S && alarmManager.canScheduleExactAlarms() -> {
                alarmManager.setExactAndAllowWhileIdle(
                    AlarmManager.RTC_WAKEUP,
                    triggerAtMillis,
                    pendingIntent
                )
            }
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.M -> {
                alarmManager.setAndAllowWhileIdle(
                    AlarmManager.RTC_WAKEUP,
                    triggerAtMillis,
                    pendingIntent
                )
            }
            else -> {
                alarmManager.set(
                    AlarmManager.RTC_WAKEUP,
                    triggerAtMillis,
                    pendingIntent
                )
            }
        }
    }

    private fun birthdayPendingIntent(
        context: Context,
        userId: String,
        userName: String,
        month: Int,
        day: Int
    ): PendingIntent {
        val intent = Intent(context, BirthdayAlarmReceiver::class.java).apply {
            putExtra(EXTRA_USER_ID, userId)
            putExtra(EXTRA_USER_NAME, userName)
            putExtra(EXTRA_BIRTHDAY_MONTH, month)
            putExtra(EXTRA_BIRTHDAY_DAY, day)
        }

        return PendingIntent.getBroadcast(
            context,
            userId.hashCode(),
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )
    }

    private fun nextBirthdayMidnightMillis(month: Int, day: Int): Long {
        val zoneId = ZoneId.systemDefault()
        val now = LocalDateTime.now(zoneId)
        var nextBirthday = LocalDateTime.of(now.year, month, day, 0, 0)

        if (!nextBirthday.isAfter(now)) {
            nextBirthday = nextBirthday.plusYears(1)
        }

        return nextBirthday.atZone(zoneId).toInstant().toEpochMilli()
    }

    internal fun extractUserId(intent: Intent): String? = intent.getStringExtra(EXTRA_USER_ID)

    internal fun extractUserName(intent: Intent): String? = intent.getStringExtra(EXTRA_USER_NAME)

    internal fun extractBirthdayMonth(intent: Intent): Int = intent.getIntExtra(EXTRA_BIRTHDAY_MONTH, -1)

    internal fun extractBirthdayDay(intent: Intent): Int = intent.getIntExtra(EXTRA_BIRTHDAY_DAY, -1)
}
