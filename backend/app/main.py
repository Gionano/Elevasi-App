import asyncio
from datetime import date, datetime, timedelta, timezone
from enum import Enum
import os
from pathlib import Path
import random
import sqlite3
from typing import Optional

from fastapi import FastAPI, HTTPException, Query, Request, UploadFile, WebSocket, WebSocketDisconnect, status, Form, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field, ValidationError


app = FastAPI(
    title="Elevasi API",
    version="0.7.0",
    description="Paired presence, reactions, onboarding, locked reflection dialogue, and birthday surprise mode for Elevasi.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserId(str, Enum):
    VAREL = "varel"
    ALMEIRA = "almeira"



class ReflectionPairState(str, Enum):
    EMPTY = "EMPTY"
    PARTIAL = "PARTIAL"
    REVEALED = "REVEALED"


class HealthResponse(BaseModel):
    status: str
    service: str


class AppUpdateResponse(BaseModel):
    latest_version_code: int = Field(ge=1)
    version_name: str
    release_notes: str
    download_url: str


class RegisterUserRequest(BaseModel):
    name: str = Field(min_length=1, max_length=60)
    birthday_month: int = Field(alias="birthdayMonth", ge=1, le=12)
    birthday_day: int = Field(alias="birthdayDay", ge=1, le=31)

    model_config = {
        "populate_by_name": True,
    }


class UserSessionResponse(BaseModel):
    user_id: str = Field(alias="userId")
    name: str
    partner_id: str = Field(alias="partnerId")
    partner_name: str = Field(alias="partnerName")
    birthday_month: int = Field(alias="birthdayMonth")
    birthday_day: int = Field(alias="birthdayDay")
    last_seen_at: datetime = Field(alias="lastSeenAt")

    model_config = {
        "populate_by_name": True,
    }



class ReflectionAnswerPayload(BaseModel):
    user_id: str = Field(alias="userId")
    answer_text: str = Field(alias="answerText")
    submitted_at: datetime = Field(alias="submittedAt")

    model_config = {
        "populate_by_name": True,
    }


class ReflectionQuestionResponse(BaseModel):
    question_id: int = Field(alias="questionId")
    question_text: str = Field(alias="questionText")
    week_key: str = Field(alias="weekKey")
    pair_state: ReflectionPairState = Field(alias="pairState")
    partner_locked: bool = Field(alias="partnerLocked")
    my_answer: ReflectionAnswerPayload | None = Field(default=None, alias="myAnswer")
    partner_answer: ReflectionAnswerPayload | None = Field(default=None, alias="partnerAnswer")

    model_config = {
        "populate_by_name": True,
    }


class ReflectionSubmitRequest(BaseModel):
    question_id: int = Field(alias="questionId")
    user_id: str = Field(alias="userId")
    answer_text: str = Field(alias="answerText", min_length=20, max_length=2000)

    model_config = {
        "populate_by_name": True,
    }


class DailyVerse(BaseModel):
    title: str
    verse: str
    reflection_prompt: str = Field(alias="reflectionPrompt")

    model_config = {
        "populate_by_name": True,
    }


class VirtualPlantStatus(BaseModel):
    level: int = Field(ge=1, le=4)
    current_exp: int = Field(alias="currentExp", ge=0, le=100)
    last_interaction: datetime = Field(alias="lastInteraction")
    exp_to_next_level: int = Field(alias="expToNextLevel", ge=0, le=100)
    is_wilted: bool = Field(alias="isWilted")

    model_config = {
        "populate_by_name": True,
    }


class AddPlantExpRequest(BaseModel):
    amount: int = Field(ge=1, le=1000)


class StickyNoteResponse(BaseModel):
    id: int
    text: str = Field(min_length=1, max_length=220)
    color: str
    x_position: float = Field(alias="xPosition")
    y_position: float = Field(alias="yPosition")
    rotation: float

    model_config = {
        "populate_by_name": True,
    }


class CreateStickyNoteRequest(BaseModel):
    text: str = Field(min_length=1, max_length=220)
    color: str | None = None
    x_position: float | None = Field(default=None, alias="xPosition")
    y_position: float | None = Field(default=None, alias="yPosition")

    model_config = {
        "populate_by_name": True,
    }


class StickyNoteMoveMessage(BaseModel):
    type: str
    note_id: int = Field(alias="noteId", ge=1)
    x_position: float = Field(alias="xPosition")
    y_position: float = Field(alias="yPosition")
    rotation: float

    model_config = {
        "populate_by_name": True,
    }


class StickyNoteDeleteMessage(BaseModel):
    type: str
    note_id: int = Field(alias="noteId", ge=1)

    model_config = {
        "populate_by_name": True,
    }


class StickyNoteSocketEnvelope(BaseModel):
    type: str
    note: StickyNoteResponse | None = None
    note_id: int | None = Field(default=None, alias="noteId")

    model_config = {
        "populate_by_name": True,
    }


class JournalEntryCreate(BaseModel):
    content: str = Field(min_length=10, max_length=4000)


class JournalEntryResponse(BaseModel):
    id: int
    message: str


# ── Feed / Kertas Terbang ─────────────────────────────────────────────

class PostCreate(BaseModel):
    content: str = Field(min_length=10, max_length=2000)
    author_name: str = Field(alias="author_name", min_length=1, max_length=60)

    model_config = {
        "populate_by_name": True,
    }


class PostResponse(BaseModel):
    id: int
    author_name: str = Field(alias="author_name")
    content: str
    created_at: datetime = Field(alias="created_at")
    is_pinned: bool = Field(alias="is_pinned")
    likes_count: int = Field(alias="likes_count")

    model_config = {
        "populate_by_name": True,
    }


class PostLikeResponse(BaseModel):
    id: int
    likes_count: int = Field(alias="likes_count")

    model_config = {
        "populate_by_name": True,
    }


class PostPinResponse(BaseModel):
    id: int
    is_pinned: bool = Field(alias="is_pinned")

    model_config = {
        "populate_by_name": True,
    }


class ProfileResponse(BaseModel):
    display_name: str = Field(alias="display_name")
    bio: str
    birthday_month: int = Field(alias="birthday_month")
    birthday_day: int = Field(alias="birthday_day")
    avatar_url: str = Field(alias="avatar_url")

    model_config = {
        "populate_by_name": True,
    }


class ProfileUpdatePayload(BaseModel):
    display_name: str = Field(alias="display_name", min_length=1, max_length=60)
    bio: str = Field(default="", max_length=500)
    birthday_month: int = Field(alias="birthday_month", ge=1, le=12)
    birthday_day: int = Field(alias="birthday_day", ge=1, le=31)

    model_config = {
        "populate_by_name": True,
    }


class AvatarUploadResponse(BaseModel):
    avatar_url: str = Field(alias="avatar_url")

    model_config = {
        "populate_by_name": True,
    }


APP_DIR = Path(__file__).resolve().parent
STATIC_DIR = Path(os.getenv("ELEVASI_STATIC_DIR", str(APP_DIR / "static")))
DB_PATH = Path(os.getenv("ELEVASI_DB_PATH", str(APP_DIR / "elevasi.db")))
APK_DOWNLOAD_DIR = Path(os.getenv("ELEVASI_APK_DIR", str(STATIC_DIR / "apk")))
LATEST_APK_FILENAME = "elevasi-latest.apk"
LATEST_APP_VERSION_CODE = 1
LATEST_APP_VERSION_NAME = "1.0"
LATEST_APP_RELEASE_NOTES = (
    "- Perbaikan konektivitas untuk Android versi baru dan fondasi self-hosted update."
)

SLOT_CONFIG = {
    UserId.VAREL: {
        "partner_id": UserId.ALMEIRA,
    },
    UserId.ALMEIRA: {
        "partner_id": UserId.VAREL,
    },
}
LEGACY_PUBLIC_IDS = {user.value for user in UserId}

WEEKLY_PROMPTS = [
    "Apa satu sifat yang ingin kamu perbaiki minggu depan agar menjadi versi terbaik dirimu?",
    "Di momen apa kamu merasa paling jujur pada dirimu sendiri minggu ini?",
    "Kebiasaan kecil apa yang paling ingin kamu jaga agar hati dan pikiranmu tetap tertata?",
    "Saat emosi sedang tinggi, respons seperti apa yang ingin kamu latih minggu depan?",
    "Apa hal sederhana yang bisa kamu lakukan agar temanmu merasa lebih dilihat dan didengar?",
    "Jika minggu depan hanya boleh fokus pada satu perubahan, perubahan apa yang paling bermakna bagimu?",
    "Bagian dari dirimu mana yang butuh lebih banyak kelembutan, bukan tekanan?",
    "Apa satu keputusan yang ingin kamu ambil dengan lebih berani namun tetap tenang minggu depan?",
]

DAILY_VERSE_LIBRARY = [
    {
        "title": "Gerbang Langit",
        "verse": "Pelan, setia, dan jujur pada langkah kecil yang kamu rawat hari ini.",
        "reflectionPrompt": "Apa satu tindakan sederhana yang paling ingin kamu jaga sebelum hari berakhir?",
    },
    {
        "title": "Hening yang Menata",
        "verse": "Tidak semua kemajuan harus terdengar keras; beberapa tumbuh justru dalam diam yang tekun.",
        "reflectionPrompt": "Di bagian mana kamu perlu berhenti membuktikan diri dan mulai merawat konsistensi?",
    },
    {
        "title": "Napas yang Pulang",
        "verse": "Saat dunia terasa cepat, kembali ke napasmu adalah bentuk keberanian yang lembut.",
        "reflectionPrompt": "Apa yang bisa kamu perlambat hari ini agar hatimu tidak tertinggal?",
    },
    {
        "title": "Disiplin yang Lembut",
        "verse": "Disiplin terbaik tidak selalu keras; ia cukup jelas, sabar, dan hadir ulang setiap hari.",
        "reflectionPrompt": "Kebiasaan kecil apa yang paling layak kamu jaga dengan kelembutan, bukan tekanan?",
    },
    {
        "title": "Ruang yang Dijaga",
        "verse": "Batas yang sehat bukan menjauhkan kasih, melainkan menjaga hati tetap jernih.",
        "reflectionPrompt": "Batas apa yang perlu kamu buat agar energimu tidak habis di tempat yang salah?",
    },
    {
        "title": "Arah yang Jelas",
        "verse": "Kamu tidak harus menyelesaikan semua hal hari ini; cukup pastikan langkahmu masih menuju arah yang benar.",
        "reflectionPrompt": "Satu arah apa yang ingin kamu pilih ulang dengan sadar malam ini?",
    },
    {
        "title": "Tenang di Tengah Riuh",
        "verse": "Ketenangan bukan hilangnya masalah, tetapi kemampuanmu untuk tetap memilih respons yang jernih.",
        "reflectionPrompt": "Respons seperti apa yang ingin kamu latih saat tekanan datang lagi?",
    },
    {
        "title": "Setia pada Proses",
        "verse": "Hasil besar sering lahir dari hal-hal kecil yang tidak ditinggalkan saat bosan datang.",
        "reflectionPrompt": "Apa yang biasanya kamu tinggalkan terlalu cepat, padahal sebenarnya perlu sedikit kesetiaan lagi?",
    },
    {
        "title": "Hati yang Utuh",
        "verse": "Menjadi lebih baik bukan berarti menghapus sisi rapuhmu, melainkan belajar menuntunnya pulang.",
        "reflectionPrompt": "Bagian dirimu yang mana sedang paling butuh dipeluk, bukan dihakimi?",
    },
    {
        "title": "Jeda yang Bernilai",
        "verse": "Istirahat yang sadar bukan kemunduran; itu cara jiwa menata tenaga untuk melanjutkan langkah.",
        "reflectionPrompt": "Jeda seperti apa yang benar-benar memulihkanmu, bukan sekadar mengalihkan?",
    },
    {
        "title": "Tumbuh Tanpa Tergesa",
        "verse": "Tidak semua hal harus dipercepat; beberapa perubahan justru matang ketika diberi waktu.",
        "reflectionPrompt": "Bagian hidupmu mana yang sedang kamu paksa, padahal ia perlu ritme yang lebih sabar?",
    },
    {
        "title": "Keberanian Sunyi",
        "verse": "Ada keberanian yang tidak berisik: tetap hadir, tetap jujur, dan tetap mencoba meski belum dipahami.",
        "reflectionPrompt": "Di situasi apa kamu ingin tetap berdiri tenang tanpa perlu menjelaskan semuanya?",
    },
    {
        "title": "Batin yang Rapi",
        "verse": "Pikiran yang rapi lahir dari keputusan-keputusan kecil yang tidak dibiarkan liar.",
        "reflectionPrompt": "Apa satu kekacauan kecil yang bisa kamu rapikan malam ini agar besok lebih ringan?",
    },
    {
        "title": "Kasih yang Sadar",
        "verse": "Menyayangi seseorang juga berarti belajar menghadirkan versi dirimu yang lebih stabil.",
        "reflectionPrompt": "Perilaku apa yang ingin kamu jaga agar kehadiranmu terasa lebih aman bagi orang yang kamu sayangi?",
    },
    {
        "title": "Langkah yang Utuh",
        "verse": "Kamu tidak sedang berlomba; kamu sedang membangun diri yang bisa dipercaya oleh hatimu sendiri.",
        "reflectionPrompt": "Apa satu bukti kecil hari ini bahwa kamu mulai lebih bisa mempercayai dirimu sendiri?",
    },
    {
        "title": "Cahaya yang Kecil",
        "verse": "Hari yang baik tidak selalu penuh kemenangan; kadang ia hanya berisi satu keputusan benar yang tidak kamu tinggalkan.",
        "reflectionPrompt": "Keputusan kecil benar apa yang sudah kamu ambil hari ini?",
    },
    {
        "title": "Hening yang Berbuah",
        "verse": "Apa yang kamu rawat diam-diam sering kali menjadi dasar dari hidup yang paling kokoh.",
        "reflectionPrompt": "Apa yang sedang kamu bangun diam-diam dan ingin tetap kamu jaga meski belum terlihat hasilnya?",
    },
    {
        "title": "Pulih dengan Sadar",
        "verse": "Pemulihan dimulai saat kamu berhenti memusuhi dirimu sendiri dan mulai mendengarkan apa yang sungguh dibutuhkan.",
        "reflectionPrompt": "Jika malam ini kamu benar-benar mendengarkan dirimu, apa kebutuhan yang paling jelas muncul?",
    },
]

PLANT_EXP_PER_LEVEL = 100
PLANT_MAX_LEVEL = 4
PLANT_DECAY_DAYS = 3
STICKY_NOTE_COLORS = (
    "#F1C9D4",
    "#F7E7C8",
    "#E4EEDB",
    "#DCCEEF",
    "#F3CCD7",
)

JOURNAL_ENTRIES: list[str] = []

APK_DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
DB_PATH.parent.mkdir(parents=True, exist_ok=True)
app.mount("/downloads", StaticFiles(directory=APK_DOWNLOAD_DIR), name="apk-downloads")

# 1. SETUP STATIC FILES (Untuk akses gambar)
UPLOAD_DIR = STATIC_DIR / "uploads"
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")


class StickyNoteConnectionManager:
    def __init__(self) -> None:
        self._connections: set[WebSocket] = set()
        self._lock = asyncio.Lock()

    async def connect(self, websocket: WebSocket) -> None:
        await websocket.accept()
        async with self._lock:
            self._connections.add(websocket)

    async def disconnect(self, websocket: WebSocket) -> None:
        async with self._lock:
            self._connections.discard(websocket)

    async def broadcast(
        self,
        message: StickyNoteSocketEnvelope,
        exclude: WebSocket | None = None,
    ) -> None:
        async with self._lock:
            targets = list(self._connections)

        stale_connections: list[WebSocket] = []
        payload = message.model_dump(mode="json", by_alias=True)

        for connection in targets:
            if connection is exclude:
                continue

            try:
                await connection.send_json(payload)
            except Exception:
                stale_connections.append(connection)

        if stale_connections:
            async with self._lock:
                for connection in stale_connections:
                    self._connections.discard(connection)


STICKY_NOTE_CONNECTIONS = StickyNoteConnectionManager()


def utc_now() -> datetime:
    return datetime.now(timezone.utc)


def server_now() -> datetime:
    return datetime.now().astimezone()


def server_today() -> date:
    return server_now().date()


def client_today(tz_offset_minutes: int | None) -> date:
    if tz_offset_minutes is None:
        return server_today()

    if not -1080 <= tz_offset_minutes <= 1080:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Timezone offset tidak valid.",
        )

    client_timezone = timezone(timedelta(minutes=tz_offset_minutes))
    return datetime.now(timezone.utc).astimezone(client_timezone).date()


def get_connection() -> sqlite3.Connection:
    connection = sqlite3.connect(DB_PATH)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    connection.execute("PRAGMA journal_mode = WAL")
    connection.execute("PRAGMA synchronous = NORMAL")
    return connection


def init_db() -> None:
    with get_connection() as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS users (
                user_id TEXT PRIMARY KEY,
                public_user_id TEXT,
                name TEXT NOT NULL,
                normalized_name TEXT,
                birthday_month INTEGER,
                birthday_day INTEGER,
                partner_id TEXT NOT NULL,
                created_at TEXT NOT NULL,
                last_seen_at TEXT NOT NULL
            )
            """
        )
        existing_columns = {
            row["name"]
            for row in connection.execute("PRAGMA table_info(users)").fetchall()
        }
        if "normalized_name" not in existing_columns:
            connection.execute("ALTER TABLE users ADD COLUMN normalized_name TEXT")
        if "public_user_id" not in existing_columns:
            connection.execute("ALTER TABLE users ADD COLUMN public_user_id TEXT")
        if "birthday_month" not in existing_columns:
            connection.execute("ALTER TABLE users ADD COLUMN birthday_month INTEGER")
        if "birthday_day" not in existing_columns:
            connection.execute("ALTER TABLE users ADD COLUMN birthday_day INTEGER")

        ensure_public_user_ids(connection)

        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS weekly_questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                week_key TEXT NOT NULL UNIQUE,
                prompt TEXT NOT NULL,
                created_at TEXT NOT NULL
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS reflections (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                question_id INTEGER NOT NULL,
                user_id TEXT NOT NULL,
                answer_text TEXT NOT NULL,
                submitted_at TEXT NOT NULL,
                UNIQUE(question_id, user_id),
                FOREIGN KEY(question_id) REFERENCES weekly_questions(id) ON DELETE CASCADE
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS virtual_plant (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                level INTEGER NOT NULL,
                current_exp INTEGER NOT NULL,
                last_interaction TEXT NOT NULL
            )
            """
        )
        connection.execute(
            """
            INSERT OR IGNORE INTO virtual_plant (id, level, current_exp, last_interaction)
            VALUES (1, 1, 0, ?)
            """,
            (utc_now().isoformat(),),
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS sticky_notes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                text TEXT NOT NULL,
                color TEXT NOT NULL,
                x_position REAL NOT NULL,
                y_position REAL NOT NULL,
                rotation REAL NOT NULL
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                author_name TEXT NOT NULL,
                content TEXT NOT NULL,
                created_at TEXT NOT NULL,
                is_pinned INTEGER NOT NULL DEFAULT 0,
                likes_count INTEGER NOT NULL DEFAULT 0,
                media_urls TEXT
            )
            """
        )
        
        # Add media_url column if it doesn't exist (for existing DBs)
        existing_post_columns = {
            row["name"]
            for row in connection.execute("PRAGMA table_info(posts)").fetchall()
        }
        if "media_url" not in existing_post_columns:
            connection.execute("ALTER TABLE posts ADD COLUMN media_url TEXT")
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS user_pins (
                user_id TEXT NOT NULL,
                post_id INTEGER NOT NULL,
                PRIMARY KEY (user_id, post_id),
                FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS replies (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                post_id INTEGER NOT NULL,
                author_name TEXT NOT NULL,
                content TEXT NOT NULL,
                media_urls TEXT,
                created_at TEXT NOT NULL,
                FOREIGN KEY(post_id) REFERENCES posts(id) ON DELETE CASCADE
            )
            """
        )
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS user_profiles (
                user_id TEXT PRIMARY KEY,
                display_name TEXT NOT NULL,
                bio TEXT NOT NULL DEFAULT '',
                avatar_url TEXT NOT NULL DEFAULT '',
                updated_at TEXT NOT NULL
            )
            """
        )


def partner_of(user_id: UserId) -> UserId:
    return SLOT_CONFIG[user_id]["partner_id"]


def compact_name(name: str) -> str:
    return " ".join(name.split())


def normalize_name(name: str) -> str:
    value = compact_name(name)
    if not value:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Nama tidak boleh kosong.",
        )
    return value.casefold()


def slugify_public_user_id(name: str) -> str:
    slug_parts: list[str] = []
    last_was_separator = False

    for char in normalize_name(name):
        if char.isalnum():
            slug_parts.append(char)
            last_was_separator = False
        elif not last_was_separator and slug_parts:
            slug_parts.append("-")
            last_was_separator = True

    return "".join(slug_parts).strip("-") or "user"


def normalize_public_user_id(public_user_id: str) -> str:
    normalized = public_user_id.strip().casefold()
    if not normalized:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User ID tidak boleh kosong.",
        )
    return normalized


def build_public_user_id(name: str, existing_ids: set[str]) -> str:
    base = slugify_public_user_id(name)
    candidate = base
    suffix = 2

    while candidate in existing_ids or candidate in LEGACY_PUBLIC_IDS:
        candidate = f"{base}-{suffix}"
        suffix += 1

    existing_ids.add(candidate)
    return candidate


def ensure_public_user_ids(connection: sqlite3.Connection) -> None:
    rows = connection.execute(
        """
        SELECT user_id, name, public_user_id, created_at
        FROM users
        ORDER BY created_at ASC
        """
    ).fetchall()

    used_ids: set[str] = set()
    updates: list[tuple[str, str]] = []

    for row in rows:
        public_user_id = str(row["public_user_id"]).strip().casefold() if row["public_user_id"] else ""
        if public_user_id and public_user_id not in used_ids and public_user_id not in LEGACY_PUBLIC_IDS:
            used_ids.add(public_user_id)
            if public_user_id != row["public_user_id"]:
                updates.append((public_user_id, row["user_id"]))
            continue

        generated_id = build_public_user_id(
            name=row["name"] or "user",
            existing_ids=used_ids,
        )
        updates.append((generated_id, row["user_id"]))

    for public_user_id, user_id in updates:
        connection.execute(
            """
            UPDATE users
            SET public_user_id = ?
            WHERE user_id = ?
            """,
            (public_user_id, user_id),
        )


def validate_birthday(month: int, day: int) -> tuple[int, int]:
    try:
        date(2000, month, day)
    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Tanggal ulang tahun tidak valid.",
        ) from exc

    return month, day


def row_has_identity(row: sqlite3.Row | None) -> bool:
    if row is None:
        return False

    return (
        row["public_user_id"] is not None and
        row["normalized_name"] is not None and
        row["birthday_month"] is not None and
        row["birthday_day"] is not None
    )


def list_registered_users() -> list[sqlite3.Row]:
    with get_connection() as connection:
        return connection.execute(
            """
            SELECT user_id, public_user_id, name, normalized_name, birthday_month, birthday_day, partner_id, created_at, last_seen_at
            FROM users
            ORDER BY created_at ASC
            """
        ).fetchall()


def resolve_registration_slot(normalized_name: str, birthday_month: int, birthday_day: int) -> UserId:
    rows = list_registered_users()
    active_rows = [row for row in rows if row_has_identity(row)]

    for row in active_rows:
        if (
            row["normalized_name"] == normalized_name and
            int(row["birthday_month"]) == birthday_month and
            int(row["birthday_day"]) == birthday_day
        ):
            return UserId(row["user_id"])

    used_slots = {UserId(row["user_id"]) for row in active_rows}
    for slot in UserId:
        if slot not in used_slots:
            return slot

    raise HTTPException(
        status_code=status.HTTP_409_CONFLICT,
        detail="Pair ini sudah terisi dua pengguna. Masuklah dengan nama dan tanggal lahir yang sama seperti perangkat yang pernah didaftarkan.",
    )


def upsert_user(
    user_id: UserId,
    name: str,
    normalized_name: str,
    birthday_month: int,
    birthday_day: int,
) -> None:
    now = utc_now().isoformat()
    partner_id = partner_of(user_id).value
    display_name = compact_name(name)
    existing_user = get_registered_user(user_id)
    existing_public_id = (
        str(existing_user["public_user_id"]).strip().casefold()
        if row_has_identity(existing_user)
        else ""
    )
    if existing_public_id:
        public_user_id = existing_public_id
    else:
        occupied_public_ids = {
            str(row["public_user_id"]).strip().casefold()
            for row in list_registered_users()
            if row["public_user_id"] and row["user_id"] != user_id.value
        }
        public_user_id = build_public_user_id(
            name=display_name,
            existing_ids=occupied_public_ids,
        )

    with get_connection() as connection:
        connection.execute(
            """
            INSERT INTO users (
                user_id,
                public_user_id,
                name,
                normalized_name,
                birthday_month,
                birthday_day,
                partner_id,
                created_at,
                last_seen_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(user_id) DO UPDATE SET
                public_user_id = excluded.public_user_id,
                name = excluded.name,
                normalized_name = excluded.normalized_name,
                birthday_month = excluded.birthday_month,
                birthday_day = excluded.birthday_day,
                last_seen_at = excluded.last_seen_at
            """,
            (
                user_id.value,
                public_user_id,
                display_name,
                normalized_name,
                birthday_month,
                birthday_day,
                partner_id,
                now,
                now,
            ),
        )


def get_registered_user(user_id: UserId) -> sqlite3.Row | None:
    with get_connection() as connection:
        return connection.execute(
            """
            SELECT user_id, public_user_id, name, normalized_name, birthday_month, birthday_day, partner_id, created_at, last_seen_at
            FROM users
            WHERE user_id = ?
            """,
            (user_id.value,),
        ).fetchone()


def get_user_by_public_id(public_user_id: str) -> sqlite3.Row | None:
    with get_connection() as connection:
        return connection.execute(
            """
            SELECT user_id, public_user_id, name, normalized_name, birthday_month, birthday_day, partner_id, created_at, last_seen_at
            FROM users
            WHERE public_user_id = ?
            """,
            (normalize_public_user_id(public_user_id),),
        ).fetchone()


def resolve_user_id(public_user_id: str) -> UserId:
    normalized_public_id = normalize_public_user_id(public_user_id)

    if normalized_public_id in LEGACY_PUBLIC_IDS:
        user_id = UserId(normalized_public_id)
        ensure_registered(user_id)
        return user_id

    user_row = get_user_by_public_id(normalized_public_id)
    if row_has_identity(user_row):
        return UserId(user_row["user_id"])

    raise HTTPException(
        status_code=status.HTTP_404_NOT_FOUND,
        detail="User tidak ditemukan di pair ini.",
    )


def public_id_for(user_id: UserId, fallback: str = "") -> str:
    user_row = get_registered_user(user_id)
    if row_has_identity(user_row):
        return str(user_row["public_user_id"])
    return fallback


def partner_public_id_for(user_id: UserId) -> str:
    return public_id_for(partner_of(user_id))


def display_name_for(user_id: UserId, fallback: str = "teman") -> str:
    row = get_registered_user(user_id)
    if row_has_identity(row):
        return row["name"]
    return fallback



def build_user_session(user_id: UserId) -> UserSessionResponse:
    user_row = get_registered_user(user_id)
    if not row_has_identity(user_row):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User belum terdaftar. Lengkapi onboarding nama dan tanggal lahir terlebih dahulu.",
        )

    partner_id = partner_of(user_id)
    partner_row = get_registered_user(partner_id)
    partner_name = partner_row["name"] if row_has_identity(partner_row) else "Menunggu dia"

    return UserSessionResponse(
        userId=public_id_for(user_id, fallback=user_id.value),
        name=user_row["name"],
        partnerId=partner_public_id_for(user_id),
        partnerName=partner_name,
        birthdayMonth=int(user_row["birthday_month"]),
        birthdayDay=int(user_row["birthday_day"]),
        lastSeenAt=datetime.fromisoformat(user_row["last_seen_at"]),
    )


def ensure_registered(user_id: UserId) -> None:
    if not row_has_identity(get_registered_user(user_id)):
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User belum terdaftar. Lengkapi onboarding nama dan tanggal lahir terlebih dahulu.",
        )


def is_birthday_for(user_id: UserId, current_date: date | None = None) -> bool:
    user_row = get_registered_user(user_id)
    if not row_has_identity(user_row):
        return False

    target_date = current_date or server_today()
    return (
        target_date.month == int(user_row["birthday_month"]) and
        target_date.day == int(user_row["birthday_day"])
    )



def current_week_start(current_date: date | None = None) -> date:
    today = current_date or utc_now().date()
    days_since_sunday = (today.weekday() + 1) % 7
    return today - timedelta(days=days_since_sunday)


def prompt_for_week(week_key: str) -> str:
    prompt_index = current_week_start(date.fromisoformat(week_key)).toordinal() % len(WEEKLY_PROMPTS)
    return WEEKLY_PROMPTS[prompt_index]


def daily_verse_for_date(current_date: date | None = None) -> DailyVerse:
    target_date = current_date or server_today()
    entry = DAILY_VERSE_LIBRARY[target_date.toordinal() % len(DAILY_VERSE_LIBRARY)]
    return DailyVerse(**entry)


def plant_is_wilted(last_interaction: datetime, current_date: date | None = None) -> bool:
    target_date = current_date or server_today()
    last_interaction_date = last_interaction.astimezone().date()
    return (target_date - last_interaction_date).days >= PLANT_DECAY_DAYS


def build_plant_status(level: int, current_exp: int, last_interaction: datetime) -> VirtualPlantStatus:
    exp_to_next_level = 0 if level >= PLANT_MAX_LEVEL else max(0, PLANT_EXP_PER_LEVEL - current_exp)
    visible_exp = PLANT_EXP_PER_LEVEL if level >= PLANT_MAX_LEVEL else current_exp
    return VirtualPlantStatus(
        level=level,
        currentExp=visible_exp,
        lastInteraction=last_interaction,
        expToNextLevel=exp_to_next_level,
        isWilted=plant_is_wilted(last_interaction),
    )


def get_virtual_plant_row() -> sqlite3.Row:
    with get_connection() as connection:
        row = connection.execute(
            """
            SELECT id, level, current_exp, last_interaction
            FROM virtual_plant
            WHERE id = 1
            """
        ).fetchone()

    if row is None:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Status tanaman tidak berhasil dimuat.",
        )

    return row


def get_virtual_plant_status() -> VirtualPlantStatus:
    row = get_virtual_plant_row()
    return build_plant_status(
        level=int(row["level"]),
        current_exp=int(row["current_exp"]),
        last_interaction=datetime.fromisoformat(row["last_interaction"]),
    )


def add_virtual_plant_exp(amount: int) -> VirtualPlantStatus:
    row = get_virtual_plant_row()
    level = int(row["level"])
    current_exp = int(row["current_exp"])
    total_exp = current_exp + amount

    while total_exp >= PLANT_EXP_PER_LEVEL and level < PLANT_MAX_LEVEL:
        total_exp -= PLANT_EXP_PER_LEVEL
        level += 1

    if level >= PLANT_MAX_LEVEL:
        total_exp = PLANT_EXP_PER_LEVEL

    last_interaction = utc_now()

    with get_connection() as connection:
        connection.execute(
            """
            UPDATE virtual_plant
            SET level = ?, current_exp = ?, last_interaction = ?
            WHERE id = 1
            """,
            (level, total_exp, last_interaction.isoformat()),
        )

    return build_plant_status(
        level=level,
        current_exp=total_exp,
        last_interaction=last_interaction,
    )


def build_sticky_note_response(row: sqlite3.Row) -> StickyNoteResponse:
    return StickyNoteResponse(
        id=int(row["id"]),
        text=row["text"],
        color=row["color"],
        xPosition=float(row["x_position"]),
        yPosition=float(row["y_position"]),
        rotation=float(row["rotation"]),
    )


def list_sticky_notes() -> list[StickyNoteResponse]:
    with get_connection() as connection:
        rows = connection.execute(
            """
            SELECT id, text, color, x_position, y_position, rotation
            FROM sticky_notes
            ORDER BY id ASC
            """
        ).fetchall()

    return [build_sticky_note_response(row) for row in rows]


def sticky_note_defaults(note_index: int) -> tuple[str, float, float, float]:
    color = STICKY_NOTE_COLORS[note_index % len(STICKY_NOTE_COLORS)]
    x_position = 18.0 + ((note_index % 2) * 178.0)
    y_position = 18.0 + ((note_index // 2) * 126.0)
    rotation = round(random.uniform(-3.8, 3.8), 2)
    return color, x_position, y_position, rotation


def create_sticky_note(payload: CreateStickyNoteRequest) -> StickyNoteResponse:
    note_count = len(list_sticky_notes())
    default_color, default_x, default_y, rotation = sticky_note_defaults(note_count)
    color = (payload.color or default_color).strip() or default_color
    text = " ".join(payload.text.split())

    with get_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO sticky_notes (text, color, x_position, y_position, rotation)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                text,
                color,
                payload.x_position if payload.x_position is not None else default_x,
                payload.y_position if payload.y_position is not None else default_y,
                rotation,
            ),
        )
        row = connection.execute(
            """
            SELECT id, text, color, x_position, y_position, rotation
            FROM sticky_notes
            WHERE id = ?
            """,
            (cursor.lastrowid,),
        ).fetchone()

    if row is None:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Sticky note gagal dibuat.",
        )

    return build_sticky_note_response(row)


def update_sticky_note_position(
    note_id: int,
    x_position: float,
    y_position: float,
    rotation: float,
) -> StickyNoteResponse:
    with get_connection() as connection:
        cursor = connection.execute(
            """
            UPDATE sticky_notes
            SET x_position = ?, y_position = ?, rotation = ?
            WHERE id = ?
            """,
            (x_position, y_position, rotation, note_id),
        )

        if cursor.rowcount == 0:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Sticky note tidak ditemukan.",
            )

        row = connection.execute(
            """
            SELECT id, text, color, x_position, y_position, rotation
            FROM sticky_notes
            WHERE id = ?
            """,
            (note_id,),
        ).fetchone()

    if row is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Sticky note tidak ditemukan.",
        )

    return build_sticky_note_response(row)


def delete_sticky_note(note_id: int) -> int:
    with get_connection() as connection:
        cursor = connection.execute(
            """
            DELETE FROM sticky_notes
            WHERE id = ?
            """,
            (note_id,),
        )

    if cursor.rowcount == 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Sticky note tidak ditemukan.",
        )

    return note_id


def ensure_current_weekly_question() -> sqlite3.Row:
    week_key = current_week_start().isoformat()

    with get_connection() as connection:
        row = connection.execute(
            """
            SELECT id, week_key, prompt, created_at
            FROM weekly_questions
            WHERE week_key = ?
            """,
            (week_key,),
        ).fetchone()

        if row is not None:
            return row

        connection.execute(
            """
            INSERT INTO weekly_questions (week_key, prompt, created_at)
            VALUES (?, ?, ?)
            """,
            (week_key, prompt_for_week(week_key), utc_now().isoformat()),
        )
        return connection.execute(
            """
            SELECT id, week_key, prompt, created_at
            FROM weekly_questions
            WHERE week_key = ?
            """,
            (week_key,),
        ).fetchone()


def get_weekly_question(question_id: int) -> sqlite3.Row:
    current_question = ensure_current_weekly_question()
    if current_question["id"] == question_id:
        return current_question

    with get_connection() as connection:
        row = connection.execute(
            """
            SELECT id, week_key, prompt, created_at
            FROM weekly_questions
            WHERE id = ?
            """,
            (question_id,),
        ).fetchone()

    if row is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Pertanyaan refleksi tidak ditemukan.",
        )

    return row


def get_reflection_answer(question_id: int, user_id: UserId) -> sqlite3.Row | None:
    with get_connection() as connection:
        return connection.execute(
            """
            SELECT question_id, user_id, answer_text, submitted_at
            FROM reflections
            WHERE question_id = ? AND user_id = ?
            """,
            (question_id, user_id.value),
        ).fetchone()


def upsert_reflection_answer(question_id: int, user_id: UserId, answer_text: str) -> None:
    submitted_at = utc_now().isoformat()

    with get_connection() as connection:
        connection.execute(
            """
            INSERT INTO reflections (question_id, user_id, answer_text, submitted_at)
            VALUES (?, ?, ?, ?)
            ON CONFLICT(question_id, user_id) DO UPDATE SET
                answer_text = excluded.answer_text,
                submitted_at = excluded.submitted_at
            """,
            (question_id, user_id.value, answer_text.strip(), submitted_at),
        )


def to_reflection_payload(row: sqlite3.Row) -> ReflectionAnswerPayload:
    return ReflectionAnswerPayload(
        userId=public_id_for(UserId(row["user_id"]), fallback=row["user_id"]),
        answerText=row["answer_text"],
        submittedAt=datetime.fromisoformat(row["submitted_at"]),
    )


def build_reflection_view(question_row: sqlite3.Row, requester_id: UserId) -> ReflectionQuestionResponse:
    ensure_registered(requester_id)

    partner_id = partner_of(requester_id)
    my_answer_row = get_reflection_answer(question_row["id"], requester_id)
    partner_answer_row = get_reflection_answer(question_row["id"], partner_id)

    answer_count = int(my_answer_row is not None) + int(partner_answer_row is not None)
    if answer_count == 0:
        pair_state = ReflectionPairState.EMPTY
    elif answer_count == 1:
        pair_state = ReflectionPairState.PARTIAL
    else:
        pair_state = ReflectionPairState.REVEALED

    my_answer = to_reflection_payload(my_answer_row) if my_answer_row else None
    partner_answer = None
    partner_locked = my_answer is None

    if my_answer is not None and partner_answer_row is not None:
        partner_answer = to_reflection_payload(partner_answer_row)

    return ReflectionQuestionResponse(
        questionId=question_row["id"],
        questionText=question_row["prompt"],
        weekKey=question_row["week_key"],
        pairState=pair_state,
        partnerLocked=partner_locked,
        myAnswer=my_answer,
        partnerAnswer=partner_answer,
    )



init_db()


@app.get("/health", response_model=HealthResponse)
async def health() -> HealthResponse:
    return HealthResponse(status="ok", service="elevasi-api")


@app.get("/check-update", response_model=AppUpdateResponse)
async def check_update(request: Request) -> AppUpdateResponse:
    return AppUpdateResponse(
        latest_version_code=LATEST_APP_VERSION_CODE,
        version_name=LATEST_APP_VERSION_NAME,
        release_notes=LATEST_APP_RELEASE_NOTES,
        download_url=str(
            request.url_for("apk-downloads", path=LATEST_APK_FILENAME)
        ),
    )


@app.post(
    "/users/register",
    response_model=UserSessionResponse,
    response_model_by_alias=True,
)
async def register_user(payload: RegisterUserRequest) -> UserSessionResponse:
    normalized_name = normalize_name(payload.name)
    birthday_month, birthday_day = validate_birthday(
        payload.birthday_month,
        payload.birthday_day,
    )
    user_id = resolve_registration_slot(normalized_name, birthday_month, birthday_day)
    upsert_user(
        user_id=user_id,
        name=payload.name,
        normalized_name=normalized_name,
        birthday_month=birthday_month,
        birthday_day=birthday_day,
    )
    return build_user_session(user_id)


@app.get(
    "/users/{user_id}",
    response_model=UserSessionResponse,
    response_model_by_alias=True,
)
async def get_user_session(user_id: str) -> UserSessionResponse:
    resolved_user_id = resolve_user_id(user_id)
    ensure_registered(resolved_user_id)
    return build_user_session(resolved_user_id)



@app.get(
    "/is-my-birthday/{my_user_id}",
    response_model=BirthdayCheckResponse,
    response_model_by_alias=True,
)
async def is_my_birthday(my_user_id: str) -> BirthdayCheckResponse:
    resolved_user_id = resolve_user_id(my_user_id)
    ensure_registered(resolved_user_id)
    return BirthdayCheckResponse(
        userId=public_id_for(resolved_user_id, fallback=resolved_user_id.value),
        isMyBirthday=is_birthday_for(resolved_user_id),
    )


@app.get(
    "/reflection/current",
    response_model=ReflectionQuestionResponse,
    response_model_by_alias=True,
)
async def get_current_reflection(
    user_id: str = Query(alias="user_id"),
) -> ReflectionQuestionResponse:
    question_row = ensure_current_weekly_question()
    return build_reflection_view(question_row, resolve_user_id(user_id))


@app.get(
    "/reflection/{question_id}",
    response_model=ReflectionQuestionResponse,
    response_model_by_alias=True,
)
async def get_reflection(
    question_id: int,
    user_id: str = Query(alias="user_id"),
) -> ReflectionQuestionResponse:
    question_row = get_weekly_question(question_id)
    return build_reflection_view(question_row, resolve_user_id(user_id))


@app.post(
    "/reflection/submit",
    response_model=ReflectionQuestionResponse,
    response_model_by_alias=True,
)
async def submit_reflection(payload: ReflectionSubmitRequest) -> ReflectionQuestionResponse:
    resolved_user_id = resolve_user_id(payload.user_id)
    ensure_registered(resolved_user_id)
    question_row = get_weekly_question(payload.question_id)
    upsert_reflection_answer(payload.question_id, resolved_user_id, payload.answer_text)
    return build_reflection_view(question_row, resolved_user_id)


@app.get("/plant/status", response_model=VirtualPlantStatus, response_model_by_alias=True)
async def get_plant_status() -> VirtualPlantStatus:
    return get_virtual_plant_status()


@app.post("/plant/add-exp", response_model=VirtualPlantStatus, response_model_by_alias=True)
async def add_plant_exp(payload: AddPlantExpRequest) -> VirtualPlantStatus:
    return add_virtual_plant_exp(payload.amount)


@app.get(
    "/mading/notes",
    response_model=list[StickyNoteResponse],
    response_model_by_alias=True,
)
async def get_mading_notes() -> list[StickyNoteResponse]:
    return list_sticky_notes()


@app.post(
    "/mading/notes",
    response_model=StickyNoteResponse,
    response_model_by_alias=True,
    status_code=status.HTTP_201_CREATED,
)
async def create_mading_note(payload: CreateStickyNoteRequest) -> StickyNoteResponse:
    note = create_sticky_note(payload)
    await STICKY_NOTE_CONNECTIONS.broadcast(
        StickyNoteSocketEnvelope(
            type="note_created",
            note=note,
        )
    )
    return note


@app.websocket("/ws/mading")
async def mading_websocket(websocket: WebSocket) -> None:
    await STICKY_NOTE_CONNECTIONS.connect(websocket)
    try:
        while True:
            raw_message = await websocket.receive_json()
            message_type = str(raw_message.get("type", "")).strip()
            if not message_type:
                await websocket.send_json(
                    {
                        "type": "error",
                        "message": "Sticky note event membutuhkan field type.",
                    }
                )
                continue

            if message_type == "move_note":
                try:
                    message = StickyNoteMoveMessage.model_validate(raw_message)
                except ValidationError as exc:
                    await websocket.send_json(
                        {
                            "type": "error",
                            "message": exc.errors(),
                        }
                    )
                    continue

                note = update_sticky_note_position(
                    note_id=message.note_id,
                    x_position=message.x_position,
                    y_position=message.y_position,
                    rotation=message.rotation,
                )
                await STICKY_NOTE_CONNECTIONS.broadcast(
                    StickyNoteSocketEnvelope(
                        type="note_moved",
                        note=note,
                    ),
                    exclude=websocket,
                )
                continue

            if message_type == "delete_note":
                try:
                    message = StickyNoteDeleteMessage.model_validate(raw_message)
                except ValidationError as exc:
                    await websocket.send_json(
                        {
                            "type": "error",
                            "message": exc.errors(),
                        }
                    )
                    continue

                deleted_note_id = delete_sticky_note(message.note_id)
                await STICKY_NOTE_CONNECTIONS.broadcast(
                    StickyNoteSocketEnvelope(
                        type="note_deleted",
                        noteId=deleted_note_id,
                    ),
                    exclude=websocket,
                )
                continue

            await websocket.send_json(
                {
                    "type": "error",
                    "message": "Unsupported sticky note event.",
                }
            )
    except WebSocketDisconnect:
        await STICKY_NOTE_CONNECTIONS.disconnect(websocket)
    except HTTPException as exc:
        await websocket.send_json(
            {
                "type": "error",
                "message": exc.detail,
            }
        )
        await STICKY_NOTE_CONNECTIONS.disconnect(websocket)
    finally:
        await STICKY_NOTE_CONNECTIONS.disconnect(websocket)


@app.get("/api/v1/verse/today", response_model=DailyVerse, response_model_by_alias=True)
async def get_today_verse(
    tz_offset_minutes: int | None = Query(default=None, alias="tz_offset_minutes"),
) -> DailyVerse:
    return daily_verse_for_date(
        current_date=client_today(tz_offset_minutes)
    )


@app.post(
    "/api/v1/journal",
    response_model=JournalEntryResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_journal_entry(payload: JournalEntryCreate) -> JournalEntryResponse:
    JOURNAL_ENTRIES.append(payload.content)
    return JournalEntryResponse(
        id=len(JOURNAL_ENTRIES),
        message="Refleksi berhasil disimpan.",
    )


# ══════════════════════════════════════════════════════════════════════
# Feed / Kertas Terbang — Endpoints
# ══════════════════════════════════════════════════════════════════════


def build_post_response(row: sqlite3.Row) -> PostResponse:
    return PostResponse(
        id=int(row["id"]),
        author_name=row["author_name"],
        content=row["content"],
        created_at=datetime.fromisoformat(row["created_at"]),
        is_pinned=bool(row["is_pinned"]),
        likes_count=int(row["likes_count"]),
    )



# ══════════════════════════════════════════════════════════════════════
# Profile / Pengaturan Akun — Endpoints
# ══════════════════════════════════════════════════════════════════════

AVATAR_DIR = STATIC_DIR / "avatars"
AVATAR_DIR.mkdir(parents=True, exist_ok=True)
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static-files")


def get_or_create_profile(user_id: UserId) -> dict:
    """Ambil profil dari DB, atau buat dari data registrasi."""
    with get_connection() as connection:
        row = connection.execute(
            """
            SELECT user_id, display_name, bio, avatar_url, updated_at
            FROM user_profiles
            WHERE user_id = ?
            """,
            (user_id.value,),
        ).fetchone()

    if row is not None:
        user_row = get_registered_user(user_id)
        return {
            "display_name": row["display_name"],
            "bio": row["bio"],
            "birthday_month": int(user_row["birthday_month"]) if row_has_identity(user_row) else 1,
            "birthday_day": int(user_row["birthday_day"]) if row_has_identity(user_row) else 1,
            "avatar_url": row["avatar_url"],
        }

    # Fallback: buat dari data registrasi
    user_row = get_registered_user(user_id)
    if not row_has_identity(user_row):
        return {
            "display_name": "Pengguna",
            "bio": "",
            "birthday_month": 1,
            "birthday_day": 1,
            "avatar_url": "",
        }

    return {
        "display_name": user_row["name"],
        "bio": "",
        "birthday_month": int(user_row["birthday_month"]),
        "birthday_day": int(user_row["birthday_day"]),
        "avatar_url": "",
    }


@app.get(
    "/api/profile/{user_id}",
    response_model=ProfileResponse,
    response_model_by_alias=True,
)
async def get_profile(user_id: str) -> ProfileResponse:
    """Ambil data profil pengguna."""
    resolved_user_id = resolve_user_id(user_id)
    ensure_registered(resolved_user_id)
    profile = get_or_create_profile(resolved_user_id)

    return ProfileResponse(
        display_name=profile["display_name"],
        bio=profile["bio"],
        birthday_month=profile["birthday_month"],
        birthday_day=profile["birthday_day"],
        avatar_url=profile["avatar_url"],
    )


@app.put(
    "/api/profile/{user_id}",
    response_model=ProfileResponse,
    response_model_by_alias=True,
)
async def update_profile(
    user_id: str,
    payload: ProfileUpdatePayload,
) -> ProfileResponse:
    """Perbarui profil pengguna."""
    resolved_user_id = resolve_user_id(user_id)
    ensure_registered(resolved_user_id)

    birthday_month, birthday_day = validate_birthday(
        payload.birthday_month, payload.birthday_day
    )
    display_name = compact_name(payload.display_name)
    bio = payload.bio.strip()
    now = utc_now().isoformat()

    # Update user_profiles table
    with get_connection() as connection:
        connection.execute(
            """
            INSERT INTO user_profiles (user_id, display_name, bio, avatar_url, updated_at)
            VALUES (?, ?, ?, '', ?)
            ON CONFLICT(user_id) DO UPDATE SET
                display_name = excluded.display_name,
                bio = excluded.bio,
                updated_at = excluded.updated_at
            """,
            (resolved_user_id.value, display_name, bio, now),
        )

    # Juga update nama dan tanggal lahir di tabel users utama
    normalized = normalize_name(display_name)
    upsert_user(
        user_id=resolved_user_id,
        name=display_name,
        normalized_name=normalized,
        birthday_month=birthday_month,
        birthday_day=birthday_day,
    )

    # Ambil avatar_url terkini
    profile = get_or_create_profile(resolved_user_id)

    return ProfileResponse(
        display_name=display_name,
        bio=bio,
        birthday_month=birthday_month,
        birthday_day=birthday_day,
        avatar_url=profile["avatar_url"],
    )


@app.post(
    "/api/profile/avatar",
    response_model=AvatarUploadResponse,
    response_model_by_alias=True,
    status_code=status.HTTP_201_CREATED,
)
async def upload_avatar(
    user_id: str = Query(alias="user_id"),
    file: UploadFile = None,
) -> AvatarUploadResponse:
    """Upload avatar ke folder lokal dan simpan URL-nya."""
    from fastapi import File as FastAPIFile

    resolved_user_id = resolve_user_id(user_id)
    ensure_registered(resolved_user_id)

    if not file:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="File gambar kosong.",
        )

    # Simpan file ke static/avatars/
    filename = f"{resolved_user_id.value}_avatar.png"
    file_path = AVATAR_DIR / filename

    body = await file.read()
    file_path.write_bytes(body)

    avatar_url = f"/static/avatars/{filename}"

    # Simpan URL ke user_profiles
    now = utc_now().isoformat()
    with get_connection() as connection:
        connection.execute(
            """
            INSERT INTO user_profiles (user_id, display_name, bio, avatar_url, updated_at)
            VALUES (?, ?, '', ?, ?)
            ON CONFLICT(user_id) DO UPDATE SET
                avatar_url = excluded.avatar_url,
                updated_at = excluded.updated_at
            """,
            (
                resolved_user_id.value,
                display_name_for(resolved_user_id),
                avatar_url,
                now,
            ),
        )

    return AvatarUploadResponse(avatar_url=avatar_url)

# ── Feed / Kertas Terbang ────────────────────────────────────────────

class FeedPostDto(BaseModel):
    id: int
    author_name: str
    content: str
    created_at: str
    is_pinned: bool
    likes_count: int
    media_urls: list[str] = []
    replies_count: int = 0

    model_config = {
        "populate_by_name": True,
    }

class ReplyDto(BaseModel):
    id: int
    post_id: int
    author_name: str
    content: str
    media_urls: list[str] = []
    created_at: str

@app.get("/api/feed", response_model=list[FeedPostDto])
async def get_feed(limit: int = 50, user_id: str = Query(default="")):
    with get_connection() as connection:
        if user_id:
            rows = connection.execute(
                """
                SELECT p.id, p.author_name, p.content, p.created_at,
                       CASE WHEN up.post_id IS NOT NULL THEN 1 ELSE 0 END AS is_pinned,
                       p.likes_count, p.media_urls,
                       (SELECT COUNT(*) FROM replies r WHERE r.post_id = p.id) AS replies_count
                FROM posts p
                LEFT JOIN user_pins up ON p.id = up.post_id AND up.user_id = ?
                ORDER BY is_pinned DESC, p.created_at DESC
                LIMIT ?
                """,
                (user_id, limit)
            ).fetchall()
        else:
            rows = connection.execute(
                """
                SELECT id, author_name, content, created_at, 0 AS is_pinned,
                       likes_count, media_urls,
                       (SELECT COUNT(*) FROM replies r WHERE r.post_id = posts.id) AS replies_count
                FROM posts
                ORDER BY created_at DESC
                LIMIT ?
                """,
                (limit,)
            ).fetchall()
        
    import json
    return [
        FeedPostDto(
            id=row["id"],
            author_name=row["author_name"],
            content=row["content"],
            created_at=row["created_at"],
            is_pinned=bool(row["is_pinned"]),
            likes_count=row["likes_count"],
            media_urls=json.loads(row["media_urls"]) if row["media_urls"] else [],
            replies_count=row["replies_count"]
        )
        for row in rows
    ]

@app.post("/api/posts", response_model=FeedPostDto)
async def create_post(
    request: Request,
    content: str = Form(...),
    author_name: str = Form(...),
    files: Optional[list[UploadFile]] = File(None)
):
    from fastapi.staticfiles import StaticFiles
    import os
    import uuid
    import json

    upload_dir = STATIC_DIR / "uploads"
    upload_dir.mkdir(parents=True, exist_ok=True)
    
    media_urls = []
    if files is not None:
        for file in files:
            if file.filename:
                ext = os.path.splitext(file.filename)[1]
                unique_filename = f"{uuid.uuid4()}{ext}"
                file_path = upload_dir / unique_filename
                
                body = await file.read()
                file_path.write_bytes(body)
                
                base_url = str(request.base_url).rstrip("/")
                media_urls.append(f"{base_url}/static/uploads/{unique_filename}")
        
    now = utc_now().isoformat()
    media_urls_json = json.dumps(media_urls) if media_urls else None
    
    with get_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO posts (author_name, content, created_at, is_pinned, likes_count, media_urls)
            VALUES (?, ?, ?, 0, 0, ?)
            """,
            (author_name, content, now, media_urls_json)
        )
        post_id = cursor.lastrowid
        connection.commit()
        
    return FeedPostDto(
        id=post_id,
        author_name=author_name,
        content=content,
        created_at=now,
        is_pinned=False,
        likes_count=0,
        media_urls=media_urls
    )

@app.put("/api/posts/{post_id}/like")
async def like_post(post_id: int):
    with get_connection() as connection:
        connection.execute("UPDATE posts SET likes_count = likes_count + 1 WHERE id = ?", (post_id,))
        row = connection.execute("SELECT id, likes_count FROM posts WHERE id = ?", (post_id,)).fetchone()
        connection.commit()
        
    if not row:
        raise HTTPException(status_code=404, detail="Post not found")
        
    return {"id": row["id"], "likes_count": row["likes_count"]}

@app.put("/api/posts/{post_id}/pin")
async def pin_post(post_id: int, user_id: str = Query(...)):
    with get_connection() as connection:
        # Check if post exists
        post_row = connection.execute("SELECT id FROM posts WHERE id = ?", (post_id,)).fetchone()
        if not post_row:
            raise HTTPException(status_code=404, detail="Post not found")

        # Check if user already pinned THIS post (toggle off)
        existing = connection.execute(
            "SELECT post_id FROM user_pins WHERE user_id = ? AND post_id = ?",
            (user_id, post_id)
        ).fetchone()

        if existing:
            # Unpin
            connection.execute(
                "DELETE FROM user_pins WHERE user_id = ? AND post_id = ?",
                (user_id, post_id)
            )
            connection.commit()
            return {"id": post_id, "is_pinned": False}

        # Check if user already has a different pin (limit 1)
        other_pin = connection.execute(
            "SELECT post_id FROM user_pins WHERE user_id = ?",
            (user_id,)
        ).fetchone()

        if other_pin:
            raise HTTPException(
                status_code=409,
                detail="Kamu sudah menyematkan postingan lain. Lepas sematan terlebih dahulu sebelum menyematkan yang baru."
            )

        # Pin this post
        connection.execute(
            "INSERT INTO user_pins (user_id, post_id) VALUES (?, ?)",
            (user_id, post_id)
        )
        connection.commit()
        return {"id": post_id, "is_pinned": True}

# ── Replies / Balasan ────────────────────────────────────────────────

@app.get("/api/posts/{post_id}/replies", response_model=list[ReplyDto])
async def get_replies(post_id: int):
    with get_connection() as connection:
        post = connection.execute("SELECT id FROM posts WHERE id = ?", (post_id,)).fetchone()
        if not post:
            raise HTTPException(status_code=404, detail="Post not found")
        rows = connection.execute(
            """
            SELECT id, post_id, author_name, content, media_urls, created_at
            FROM replies
            WHERE post_id = ?
            ORDER BY created_at ASC
            """,
            (post_id,)
        ).fetchall()
    
    import json
    return [
        ReplyDto(
            id=row["id"],
            post_id=row["post_id"],
            author_name=row["author_name"],
            content=row["content"],
            media_urls=json.loads(row["media_urls"]) if row["media_urls"] else [],
            created_at=row["created_at"]
        )
        for row in rows
    ]

@app.post("/api/posts/{post_id}/replies", response_model=ReplyDto)
async def create_reply(
    post_id: int,
    request: Request,
    content: str = Form(...),
    author_name: str = Form(...),
    files: Optional[list[UploadFile]] = File(None)
):
    import os
    import uuid
    import json

    with get_connection() as connection:
        post = connection.execute("SELECT id FROM posts WHERE id = ?", (post_id,)).fetchone()
        if not post:
            raise HTTPException(status_code=404, detail="Post not found")

    media_urls = []
    if files is not None:
        upload_dir = STATIC_DIR / "uploads"
        upload_dir.mkdir(parents=True, exist_ok=True)
        for file in files:
            if file.filename:
                ext = os.path.splitext(file.filename)[1]
                unique_filename = f"{uuid.uuid4()}{ext}"
                file_path = upload_dir / unique_filename
                body = await file.read()
                file_path.write_bytes(body)
                base_url = str(request.base_url).rstrip("/")
                media_urls.append(f"{base_url}/static/uploads/{unique_filename}")

    now = utc_now().isoformat()
    media_urls_json = json.dumps(media_urls) if media_urls else None

    with get_connection() as connection:
        cursor = connection.execute(
            """
            INSERT INTO replies (post_id, author_name, content, media_urls, created_at)
            VALUES (?, ?, ?, ?, ?)
            """,
            (post_id, author_name, content, media_urls_json, now)
        )
        reply_id = cursor.lastrowid
        connection.commit()

    return ReplyDto(
        id=reply_id,
        post_id=post_id,
        author_name=author_name,
        content=content,
        media_urls=media_urls,
        created_at=now
    )