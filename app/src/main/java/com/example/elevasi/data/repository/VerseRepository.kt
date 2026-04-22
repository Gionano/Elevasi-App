package com.example.elevasi.data.repository

import com.example.elevasi.data.model.DailyVerseDto
import com.example.elevasi.data.remote.ElevasiApiService
import com.example.elevasi.data.remote.RetrofitClient
import java.time.LocalDate
import java.time.OffsetDateTime

class VerseRepository(
    private val apiService: ElevasiApiService = RetrofitClient.apiService
) {
    suspend fun getTodayVerse(): DailyVerseDto {
        val timezoneOffsetMinutes = OffsetDateTime.now().offset.totalSeconds / 60
        return apiService.getTodayVerse(timezoneOffsetMinutes)
    }

    fun fallbackVerse(): DailyVerseDto {
        val verses = listOf(
            DailyVerseDto(
                title = "Gerbang Langit",
                verse = "Pelan, setia, dan jujur pada langkah kecil yang kamu rawat hari ini.",
                reflectionPrompt = "Apa satu tindakan sederhana yang paling ingin kamu jaga sebelum hari berakhir?"
            ),
            DailyVerseDto(
                title = "Hening yang Menata",
                verse = "Tidak semua kemajuan harus terdengar keras; beberapa tumbuh justru dalam diam yang tekun.",
                reflectionPrompt = "Di bagian mana kamu perlu berhenti membuktikan diri dan mulai merawat konsistensi?"
            ),
            DailyVerseDto(
                title = "Disiplin yang Lembut",
                verse = "Disiplin terbaik tidak selalu keras; ia cukup jelas, sabar, dan hadir ulang setiap hari.",
                reflectionPrompt = "Kebiasaan kecil apa yang paling layak kamu jaga dengan kelembutan, bukan tekanan?"
            ),
            DailyVerseDto(
                title = "Tenang di Tengah Riuh",
                verse = "Ketenangan bukan hilangnya masalah, tetapi kemampuanmu untuk tetap memilih respons yang jernih.",
                reflectionPrompt = "Respons seperti apa yang ingin kamu latih saat tekanan datang lagi?"
            ),
            DailyVerseDto(
                title = "Setia pada Proses",
                verse = "Hasil besar sering lahir dari hal-hal kecil yang tidak ditinggalkan saat bosan datang.",
                reflectionPrompt = "Apa yang biasanya kamu tinggalkan terlalu cepat, padahal sebenarnya perlu sedikit kesetiaan lagi?"
            ),
            DailyVerseDto(
                title = "Hati yang Utuh",
                verse = "Menjadi lebih baik bukan berarti menghapus sisi rapuhmu, melainkan belajar menuntunnya pulang.",
                reflectionPrompt = "Bagian dirimu yang mana sedang paling butuh dipeluk, bukan dihakimi?"
            ),
            DailyVerseDto(
                title = "Kasih yang Sadar",
                verse = "Menyayangi seseorang juga berarti belajar menghadirkan versi dirimu yang lebih stabil.",
                reflectionPrompt = "Perilaku apa yang ingin kamu jaga agar kehadiranmu terasa lebih aman bagi orang yang kamu sayangi?"
            ),
            DailyVerseDto(
                title = "Pulih dengan Sadar",
                verse = "Pemulihan dimulai saat kamu berhenti memusuhi dirimu sendiri dan mulai mendengarkan apa yang sungguh dibutuhkan.",
                reflectionPrompt = "Jika malam ini kamu benar-benar mendengarkan dirimu, apa kebutuhan yang paling jelas muncul?"
            )
        )

        return verses[LocalDate.now().toEpochDay().mod(verses.size.toLong()).toInt()]
    }
}
