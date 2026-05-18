package com.example.elevasi.app

import android.app.Application
import coil.ImageLoader
import coil.ImageLoaderFactory
import coil.decode.VideoFrameDecoder
import com.example.elevasi.core.notifications.NotificationChannels
import com.example.elevasi.core.notifications.ReminderScheduler

class ElevasiApplication : Application(), ImageLoaderFactory {

    override fun onCreate() {
        super.onCreate()
        NotificationChannels.create(this)
        ReminderScheduler.scheduleDailyReminder(this)
    }

    override fun newImageLoader(): ImageLoader {
        return ImageLoader.Builder(this)
            .components {
                add(VideoFrameDecoder.Factory())
            }
            .build()
    }
}
