# Elevasi

> Aplikasi Android untuk transformasi diri, disiplin emosional, dan pelacakan kebiasaan bersama antara dua pasangan.

Elevasi adalah platform tertutup yang hanya bisa diakses oleh dua pengguna. Terdiri dari aplikasi **Android Native (Kotlin + Jetpack Compose)** dan backend **Python FastAPI**. Setiap sesi terikat pada pasangan yang sudah dikonfigurasi di server.

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Android | Kotlin, Jetpack Compose, MVVM, StateFlow, Retrofit, Coil |
| Backend | Python 3, FastAPI, SQLite, WebSocket |
| Animasi | Lottie Compose (JSON dibuat secara prosedural) |
| Infrastruktur | Docker, Docker Compose |
| Penjadwalan | AlarmManager, WorkManager |

---

## Fitur Utama

- **Onboarding** — Pendaftaran nama dan tanggal ulang tahun saat pertama buka aplikasi; menghasilkan public user ID yang stabil
- **Shared Presence** — Update status dua arah secara real-time dengan reaksi emoji antar pasangan
- **Ruang Dialog Terkunci** — Pertanyaan refleksi mingguan yang menyembunyikan jawaban pasangan sampai keduanya sudah mengisi
- **Gerbang Langit / Verse Harian** — Koleksi verse harian yang berotasi berdasarkan tanggal lokal device, refresh saat resume
- **Mading Interaktif** — Sticky note dengan drag-and-drop dan sinkronisasi real-time via WebSocket
- **Tanaman Virtual Bersama** — Tanaman animasi Lottie 4 level yang dibagikan berdua; naik level lewat EXP, layu jika tidak dirawat 3 hari
- **Kertas Terbang / Feed** — Posting refleksi pendek dengan lampiran gambar, likes, pin, dan balasan berulir
- **Pengaturan Akun** — Upload foto profil, edit nama tampilan, bio, dan tanggal lahir
- **Birthday Surprise Mode** — Tema aplikasi berubah total di hari ulang tahun pasangan, dijadwalkan dengan AlarmManager
- **Self-Hosted In-App Update** — Cek versi APK terbaru dari backend sendiri dan tampilkan dialog unduh

---

## Struktur Project

```text
Elevasi/
├── app/
│   └── src/main/java/com/example/elevasi/
│       ├── app/            # Entry app, onboarding, state level app, in-app update
│       ├── core/           # Destinasi navigasi, scheduler AlarmManager
│       ├── data/           # Model API, Retrofit client, AvatarCache
│       ├── feature/
│       │   ├── beranda/    # Feed, ComposePost, Reply, BirthdaySurprise
│       │   ├── journal/    # Ruang Dialog Terkunci / Refleksi
│       │   ├── mading/     # Mading Interaktif (WebSocket)
│       │   ├── plant/      # Tanaman Virtual + animasi Lottie
│       │   ├── settings/   # Pengaturan Akun, ProfileViewModel
│       │   └── verse/      # Verse Harian / Gerbang Langit
│       └── ui/             # Tema, token warna, komponen bersama (TopBar, BottomBar)
├── app/src/main/res/
│   └── raw/                # File animasi Lottie (plant_seed, sprout, young, bloom)
├── backend/
│   ├── app/main.py         # Aplikasi FastAPI (semua endpoint)
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
├── gen_bloom.py            # Script untuk membuat plant_bloom.json secara prosedural
└── README.md
```

---

## Konfigurasi Android

| Setting | Nilai |
|---------|-------|
| Package | `com.example.elevasi` |
| Min SDK | 26 (Android 8.0) |
| Target SDK | 36 |
| Toolchain | Java / Kotlin 17 |
| Versi | `1.0` (versionCode 1) |

### Mengatur API Base URL

Di `app/build.gradle.kts`, atur URL backend:

```kotlin
buildConfigField("String", "API_BASE_URL", "\"https://(your_api_url_here)/\"")
```

| Environment | URL |
|-------------|-----|
| Emulator → mesin lokal | `http://10.0.2.2:PORT/` |
| HP fisik → mesin lokal | `http://<IP-LAN-PC>:PORT/` |
| Produksi (Docker / cloud) | `https://domain-kamu.com/` |

---

## Menjalankan Backend

### Lokal (tanpa Docker)

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

### Dengan Docker

```powershell
cd backend
docker build -t elevasi-api .
docker run --rm -p 8000:8000 elevasi-api
```

### Dengan Docker Compose (direkomendasikan untuk server)

```powershell
docker compose up -d --build
```

Yang dilakukan:
- Build image dari `./backend`
- Expose API ke host port `18000` (bisa diubah)
- Simpan database SQLite ke `./docker-data/elevasi.db`
- Simpan upload avatar dan file APK ke `./docker-data/`
- Restart otomatis dengan `unless-stopped`

**Opsional** — buat file `.env` di root project untuk override konfigurasi:

```env
ELEVASI_PORT=18000
ELEVASI_TZ=Asia/Jakarta
```

Update backend setelah ada perubahan:
```powershell
docker compose up -d --build
```

---

## Menjalankan Android App

Buka root project di **Android Studio**, tunggu Gradle sync selesai, lalu jalankan ke emulator atau HP fisik.

```powershell
# Build APK debug
.\gradlew.bat assembleDebug

# Install langsung ke device yang terhubung
.\gradlew.bat installDebug
```

Lokasi APK: `app/build/outputs/apk/debug/app-debug.apk`

---

## Referensi API

### Pengguna
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `POST` | `/users/register` | Daftar nama dan tanggal lahir |
| `GET` | `/users/{user_id}` | Ambil data sesi pengguna |

### Presence & Reaksi
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `POST` | `/status/{user_id}` | Update status presence |
| `GET` | `/status/{partner_id}` | Ambil status pasangan |
| `POST` | `/reaction/{target_user_id}` | Kirim reaksi emoji |
| `GET` | `/reaction/{my_user_id}` | Ambil reaksi yang diterima |

### Profil
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `GET` | `/api/profile/{user_id}` | Ambil profil (nama, bio, avatar) |
| `PUT` | `/api/profile/{user_id}` | Update field profil |
| `POST` | `/api/profile/avatar?user_id=` | Upload foto profil (multipart/form-data) |

### Feed (Kertas Terbang)
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `GET` | `/api/feed` | Ambil semua post (mendukung `user_id` untuk status pin) |
| `POST` | `/api/feed` | Buat post baru (multipart, mendukung gambar) |
| `POST` | `/api/feed/{post_id}/like` | Like sebuah post |
| `POST` | `/api/feed/{post_id}/pin` | Pin/unpin sebuah post |
| `GET` | `/api/feed/{post_id}/replies` | Ambil balasan sebuah post |
| `POST` | `/api/feed/{post_id}/replies` | Kirim balasan (multipart) |

### Refleksi (Dialog Terkunci)
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `GET` | `/reflection/current?user_id=` | Ambil pertanyaan minggu ini |
| `GET` | `/reflection/{question_id}?user_id=` | Ambil pertanyaan beserta jawaban |
| `POST` | `/reflection/submit` | Kirim jawaban refleksi |

### Tanaman Virtual
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `GET` | `/plant/status` | Ambil level, EXP, dan status layu |
| `POST` | `/plant/add-exp` | Tambah EXP (body: `{"amount": N}`) |

### Mading Interaktif
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `GET` | `/mading/notes` | Muat semua sticky note |
| `POST` | `/mading/notes` | Buat sticky note baru |
| `WS` | `/ws/mading` | Pergerakan & penghapusan note secara real-time |

### Verse Harian
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `GET` | `/api/v1/verse/today` | Ambil verse hari ini (kirim `tz_offset_minutes`) |

### Jurnal
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `POST` | `/api/v1/journal` | Simpan entri jurnal |

### Ulang Tahun & Update
| Method | Endpoint | Keterangan |
|--------|----------|------------|
| `GET` | `/is-my-birthday/{user_id}` | Cek apakah hari ini ulang tahun pengguna |
| `GET` | `/check-update` | Cek versi APK terbaru |
| `GET` | `/downloads/elevasi-latest.apk` | Unduh APK terbaru |

---

## Tanaman Virtual

Tanaman adalah status bersama antara dua pasangan:

- **4 level**: Benih → Kecambah → Tanaman Muda → Mekar
- **100 EXP per level**, maksimum level 4
- **Layu** jika tidak ada interaksi selama 3+ hari
- Dianimasikan dengan **Lottie** — `gen_bloom.py` membuat animasi level 4 secara prosedural

---

## Self-Hosted Update

Untuk merilis versi baru:
1. Naikkan `versionCode` dan `versionName` di `app/build.gradle.kts`
2. Build release APK dan taruh di `backend/app/static/apk/elevasi-latest.apk` (atau `docker-data/apk/` jika pakai Compose)
3. Update metadata versi yang dikembalikan oleh `GET /check-update`

App akan menampilkan dialog update otomatis saat dibuka kembali.

---

## Catatan Pengembangan

- Database SQLite ada di `backend/app/elevasi.db` saat lokal, atau `docker-data/elevasi.db` saat pakai Compose
- File database sudah ada di `.gitignore`
- Upload foto profil disimpan di `backend/app/static/avatars/` dan diakses lewat `/static/avatars/<nama_file>`
- `AvatarCache` adalah singleton in-memory yang menyebarkan URL avatar ke semua screen (TopBar, Feed, Reply, Settings) tanpa perlu fetch ulang
- Cleartext HTTP diizinkan untuk development lokal lewat `network_security_config.xml`; gunakan HTTPS di produksi

---

## Lisensi

Project ini bersifat privat — hanya untuk penggunaan internal.
