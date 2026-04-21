package com.example.elevasi.core.birthday

import java.time.LocalDate

data class BirthdayProfile(
    val displayName: String,
    val month: Int,
    val day: Int,
    val letterTitle: String,
    val letterBody: String
) {
    fun isBirthday(date: LocalDate = LocalDate.now()): Boolean {
        return date.monthValue == month && date.dayOfMonth == day
    }
}

object BirthdayProfiles {
    fun create(
        displayName: String,
        month: Int,
        day: Int
    ): BirthdayProfile {
        return BirthdayProfile(
            displayName = displayName,
            month = month,
            day = day,
            letterTitle = "Selamat Ulang Tahun, $displayName",
            letterBody = "Hari ini Elevasi menepi sejenak dari ritme biasanya untuk merayakanmu. Semoga langkahmu tetap ringan, hatimu tetap jernih, dan semua kebaikan kecil yang kamu rawat kembali padamu dengan cara yang indah."
        )
    }

    fun isBirthdayToday(
        month: Int,
        day: Int,
        date: LocalDate = LocalDate.now()
    ): Boolean {
        return date.monthValue == month && date.dayOfMonth == day
    }
}
