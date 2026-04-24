
# Elevasi 3D Diorama Apps - TypeScript

Aplikasi diorama 3D isometrik interaktif yang dibangun dengan TypeScript, React, dan Three.js. Proyek ini menampilkan adegan 3D interaktif yang indah dengan komponen UI modern dan interaksi yang halus.

**Desain Figma Original:** https://www.figma.com/design/gojjHWnVskzcL9tHI6RUJ1/Interactive-Isometric-3D-Scene

## 📋 Daftar Isi
- [Fitur](#fitur)
- [Stack Teknologi](#stack-teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi](#instalasi)
- [Pengembangan](#pengembangan)
- [Build](#build)
- [Memulai](#memulai)
- [Kontrol](#kontrol)
- [Berkontribusi](#berkontribusi)
- [Lisensi](#lisensi)

## ✨ Fitur

- 🎨 **Adegan 3D Interaktif** - Jelajahi diorama isometrik dengan elemen-elemen interaktif
- 🎮 **Kontrol Orbit** - Navigasi kamera yang halus di sekitar adegan 3D
- ✨ **Pencahayaan Lanjutan** - Penyetelan pencahayaan profesional dengan berbagai sumber cahaya
- 📦 **Komponen UI Modern** - Dibangun dengan Radix UI dan shadcn/ui
- ⚡ **Performa Cepat** - Didukung oleh Vite untuk pengembangan yang super cepat
- 🎯 **TypeScript** - Kode yang sepenuhnya di-typing untuk maintainability lebih baik
- 🎨 **Tailwind CSS** - Styling responsif dan indah
- 📱 **Desain Responsif** - Berfungsi dengan mulus di berbagai ukuran layar

## 🛠️ Stack Teknologi

- **Framework Frontend:** React 18
- **Grafis 3D:** Three.js
- **Bahasa Pemrograman:** TypeScript
- **Build Tool:** Vite
- **Komponen UI:** Radix UI, shadcn/ui
- **Styling:** Tailwind CSS, PostCSS
- **Package Manager:** npm/pnpm

## 📁 Struktur Proyek

```
src/
├── app/
│   ├── App.tsx                 # Komponen aplikasi utama
│   ├── components/
│   │   ├── Diorama.tsx        # Komponen diorama 3D utama
│   │   ├── figma/             # Komponen terkait Figma
│   │   └── ui/                # Komponen UI yang dapat digunakan kembali
│   └── diorama/
│       ├── sceneManager.ts    # Setup dan manajemen adegan 3D
│       ├── lighting.ts        # Konfigurasi pencahayaan
│       ├── orbitControls.ts   # Kontrol kamera
│       ├── interactions.ts    # Interaksi pengguna
│       ├── platform.ts        # Setup platform/tanah
│       ├── leftRoom.ts        # Elemen adegan ruangan kiri
│       ├── rightRoom.ts       # Elemen adegan ruangan kanan
│       ├── paperAirplane.ts   # Animasi pesawat kertas
│       ├── state.ts           # Manajemen state aplikasi
│       └── types.ts           # Definisi tipe TypeScript
├── styles/                     # Gaya global
└── main.tsx                    # Titik masuk aplikasi
```

## 📦 Instalasi

```bash
# Instal dependencies
npm install
# atau
pnpm install
```

## 🚀 Pengembangan

```bash
# Jalankan development server (berjalan di http://localhost:5173)
npm run dev
# atau
pnpm dev
```

## 🔨 Build

```bash
# Build untuk production
npm run build
# atau
pnpm build
```

## 🎯 Memulai

1. Clone repository
2. Instal dependencies: `npm install`
3. Jalankan development server: `npm run dev`
4. Buka http://localhost:5173 di browser Anda
5. Jelajahi dan berinteraksi dengan diorama 3D!

## ⌨️ Kontrol Keyboard & Mouse

- **Drag Mouse** - Putar kamera di sekitar adegan
- **Scroll Mouse** - Zoom masuk/keluar
- **Elemen Interaktif** - Klik pada objek untuk berinteraksi

## 🤝 Berkontribusi

Kami menerima kontribusi! Silakan:
- Laporkan bug
- Sarankan fitur baru
- Kirimkan pull request

## 📄 Lisensi

Proyek ini adalah bagian dari platform Elevasi. Periksa repository untuk detail lisensi.

## 👥 Penulis

Dibuat oleh tim Elevasi - Divisi Desain 3D Interaktif
  