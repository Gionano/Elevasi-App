package com.example.elevasi.data.remote

import com.example.elevasi.BuildConfig
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit

object RetrofitClient {
    private val loggingInterceptor = HttpLoggingInterceptor().apply {
        level = if (BuildConfig.DEBUG) {
            HttpLoggingInterceptor.Level.BASIC
        } else {
            HttpLoggingInterceptor.Level.NONE
        }
    }

    private val okHttpClient = OkHttpClient.Builder()
        .addInterceptor(loggingInterceptor)
        .connectTimeout(20, TimeUnit.SECONDS)
        .readTimeout(20, TimeUnit.SECONDS)
        .writeTimeout(20, TimeUnit.SECONDS)
        .build()

    val webSocketClient: OkHttpClient
        get() = okHttpClient

    fun webSocketUrl(path: String): String {
        val normalizedBaseUrl = BuildConfig.API_BASE_URL.trimEnd('/')
        val protocolAwareBaseUrl = when {
            normalizedBaseUrl.startsWith("https://") -> {
                "wss://${normalizedBaseUrl.removePrefix("https://")}"
            }
            normalizedBaseUrl.startsWith("http://") -> {
                "ws://${normalizedBaseUrl.removePrefix("http://")}"
            }
            else -> normalizedBaseUrl
        }
        return "$protocolAwareBaseUrl/${path.trimStart('/')}"
    }

    val apiService: ElevasiApiService by lazy {
        Retrofit.Builder()
            .baseUrl(BuildConfig.API_BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .client(okHttpClient)
            .build()
            .create(ElevasiApiService::class.java)
    }
}
