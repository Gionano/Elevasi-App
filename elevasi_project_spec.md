# Elevasi Project Specification

## Overview
Elevasi is an Android Native app with a backend API, dedicated to supporting self-transformation, emotional discipline, and connection for couples.

## Tech Stack
- **Frontend (Android)**: Kotlin, Jetpack Compose, MVVM Architecture (ViewModel, StateFlow, Coroutines, Retrofit). Minimum SDK: API 26 (Android 8.0). UI Style: Minimalist, elegant, soothing, pastel colors.
- **Backend**: Python FastAPI. Deployment via Docker on local server (Proxmox/Ubuntu) using Cloudflare Tunnels. WebSocket support for real-time features.

## Core Features

### 1. Shared Presence (Status Fokus Bersama)
- Real-time 2-way status updates between partners (e.g., 'fokus', 'istirahat', 'offline') with custom messages.
- Emoji reactions (❤️, ✨, ☕) triggering smooth animations (e.g., Jetpack Compose `AnimatedVisibility` or offset animations) on the partner's screen.
- Pulsing animations for the 'fokus' status to indicate active concentration.

### 2. Ruang Dialog Terkunci (Weekly Reflection)
- Weekly deep reflection questions for the couple.
- **Blind interaction**: A user cannot read their partner's answer until they submit their own. 
- The backend enforces security by returning a "LOCKED" status until mutual submission.
- UI uses `Modifier.blur()` or an aesthetic padlock overlay, smoothly unlocking upon mutual submission.

### 3. Midnight Surprise Mode (Birthday System)
- **Dynamic Theme**: When it's a partner's birthday, the app's base palette switches to a soft pink and rose/magenta gradient (`Brush.linearGradient`).
- Replaces the daily verse with a `BirthdayLetterCard` featuring fade-in animations.
- **Local Notifications**: Precise push notifications triggered at exactly 00:00 using `AlarmManager` and `BroadcastReceiver`.

### 4. Elevasi Plant (Co-op Virtual Plant)
- A Tamagotchi-like virtual plant that grows by gaining EXP.
- **EXP Sources**: Checking off daily habits (+10 EXP), engaging in shared focus sessions on the same day (+30 EXP).
- **Phases**: Seed (Level 1) -> Sprout (Level 2) -> Young Plant (Level 3) -> Blooming Flower (Level 4).
- **Decay**: The plant's color fades if inactive for 3 consecutive days, requiring interaction to restore.
- Uses **Lottie animations** for smooth, lightweight character rendering.

### 5. Interactive Mading (Real-time Sticky Notes)
- A shared virtual corkboard where partners can create and drag-and-drop sticky notes.
- **Real-time Sync**: Position syncing (X, Y, rotation) using FastAPI WebSockets and Android's `detectDragGestures`.
- **Drag to Delete**: A "Trash Zone" dynamically appears when dragging a sticky note, allowing users to drop it in the trash to delete.

### 6. Gerbang Langit (Daily Verse)
- Daily inspirational quotes and verses.

### 7. Self-Hosted In-App Update
- Custom in-app update system bypassing the Play Store.
- Backend serves `.apk` files directly via `StaticFiles`.
- The Android app checks for updates on launch and prompts an `AlertDialog` to download and install new versions via browser intents.

## Infrastructure & DevOps
- Dockerized FastAPI backend managed with `docker-compose`.
- Cloudflare Tunnels for secure API exposure.
