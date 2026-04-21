# Elevasi

Elevasi adalah aplikasi Android untuk refleksi diri, disiplin emosional, dan koneksi dua arah antar pasangan. Project ini terdiri dari aplikasi Android Native berbasis Kotlin + Jetpack Compose dan backend FastAPI yang bisa dijalankan lokal maupun lewat Docker.

## Stack

- Android Native: Kotlin, Jetpack Compose, MVVM, StateFlow, Retrofit, WorkManager, AlarmManager
- Backend: Python, FastAPI, SQLite
- Animasi: Lottie Compose
- Deployment backend: Docker

## Fitur Utama

- Onboarding nama dan tanggal ulang tahun saat pertama kali membuka aplikasi
- Shared Presence dua arah untuk update status dan melihat status pasangan
- Reaction emoji ringan antar pasangan
- Ruang Dialog Terkunci untuk refleksi mingguan dua arah
- Gerbang Langit / Daily Verse dengan koleksi verse harian yang berotasi
- Midnight Surprise Mode untuk takeover tema ulang tahun
- Notifikasi lokal terjadwal dengan `NotificationChannel` dan `AlarmManager`
- Self-hosted in-app update untuk cek versi APK terbaru dari server sendiri
- Co-op Virtual Plant dengan level, EXP, dan status layu

## Struktur Project

```text
Elevasi/
|- app/                     # Android app
|  |- src/main/java/com/example/elevasi/
|  |  |- app/              # Entry app, onboarding, app-level state
|  |  |- core/             # Navigation, notifications, util
|  |  |- data/             # Model API, repository, Retrofit
|  |  |- feature/          # Dashboard, verse, journal, plant
|  |  |- ui/               # Theme dan reusable UI components
|  |- src/main/res/        # Resource Android, icon, lottie, xml
|- backend/
|  |- app/main.py          # FastAPI app utama
|  |- requirements.txt     # Dependency Python
|  |- Dockerfile           # Image backend
|- README.md
```

## Konfigurasi Android

- Package: `com.example.elevasi`
- Minimum SDK: `26`
- Target SDK: `36`
- Java/Kotlin toolchain: `17`
- Versi app saat ini:
  - `versionCode = 1`
  - `versionName = "1.0"`

Base URL Android saat ini:

```kotlin
BuildConfig.API_BASE_URL = "https://app.gionano-storage.cloud/"
```

Jika ingin pindah ke server lokal atau Docker di laptop:

- Emulator Android: gunakan `http://10.0.2.2:PORT/`
- HP fisik: gunakan `http://IP-LAN-PC:PORT/`

## Menjalankan Backend Secara Lokal

```powershell
cd backend
py -3 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Health check:

```powershell
curl http://localhost:8000/health
```

## Menjalankan Backend Dengan Docker

Build image:

```powershell
cd backend
docker build -t elevasi-api .
```

Jalankan container di port default:

```powershell
docker run --rm -p 8000:8000 elevasi-api
```

Jika ingin pakai port lain, misalnya `18000`:

```powershell
docker run --rm -p 18000:8000 elevasi-api
```

Catatan:

- Port internal container tetap `8000`
- Jika host port diganti, `API_BASE_URL` di Android juga harus ikut diganti

## Menjalankan Android App

Buka project root `Elevasi` di Android Studio, tunggu Gradle sync selesai, lalu jalankan ke emulator atau HP fisik.

Build APK debug lewat terminal:

```powershell
.\gradlew.bat assembleDebug
```

Lokasi APK debug:

```text
app/build/outputs/apk/debug/app-debug.apk
```

Install langsung ke device yang terhubung:

```powershell
.\gradlew.bat installDebug
```

## Endpoint Backend Utama

### User

- `POST /users/register`
- `GET /users/{user_id}`

### Shared Presence

- `POST /status/{user_id}`
- `GET /status/{partner_id}`

### Reaction

- `POST /reaction/{target_user_id}`
- `GET /reaction/{my_user_id}`

### Reflection

- `GET /reflection/current?user_id=...`
- `GET /reflection/{question_id}?user_id=...`
- `POST /reflection/submit`

### Birthday Mode

- `GET /is-my-birthday/{my_user_id}`

### Virtual Plant

- `GET /plant/status`
- `POST /plant/add-exp`

### Daily Verse

- `GET /api/v1/verse/today`

### Journal

- `POST /api/v1/journal`

### App Update

- `GET /check-update`
- Static APK download: `/downloads/elevasi-latest.apk`

## Self-Hosted Update

Backend me-mount folder statis untuk file APK dan mengembalikan metadata update lewat `GET /check-update`.

Folder APK:

```text
backend/app/static/apk/
```

Agar update dialog muncul di app:

1. Naikkan metadata versi terbaru di backend
2. Taruh file APK terbaru dengan nama `elevasi-latest.apk`
3. Pastikan `download_url` mengarah ke host yang bisa diakses device

## Virtual Plant

Tanaman virtual memakai satu status bersama di backend:

- `level`
- `current_exp`
- `last_interaction`

Mekanik dasar:

- Naik level setiap `100 EXP`
- Maksimum level `4`
- Status layu aktif jika tidak ada interaksi selama `3 hari`

## Catatan Pengembangan

- Backend memakai SQLite lokal di `backend/app/elevasi.db`
- File database lokal sudah diabaikan oleh `.gitignore`
- Jika backend berubah dan dijalankan lewat Docker, image perlu dibuild ulang
- Untuk Android versi baru, koneksi HTTP lokal memerlukan konfigurasi cleartext yang sudah disiapkan di manifest dan network security config

## Rekomendasi Penggunaan

- Gunakan URL HTTPS publik untuk penggunaan harian
- Gunakan Docker untuk deployment backend di server lokal
- Gunakan emulator dengan `10.0.2.2` hanya untuk testing lokal

## Lisensi

Project ini masih bersifat internal / private.
