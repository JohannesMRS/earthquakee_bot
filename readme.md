# Bot Berita Gempa BMKG

Bot Telegram sederhana untuk menampilkan informasi gempa bumi terkini di Indonesia, dengan data langsung dari **BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)**.

<img width="700" height="540" alt="Screenshot From 2026-07-10 12-02-14" src="https://github.com/user-attachments/assets/92305a7d-bdce-4e2e-ad25-948a2892eb74" />


## Fitur

- Menampilkan lokasi gempa terkini
- Magnitudo/kekuatan gempa
- Waktu kejadian
- Kedalaman gempa
- Wilayah yang dirasakan dampaknya
- Data selalu update sesuai laporan resmi BMKG

## Tech Stack

- **Node.js** – runtime JavaScript
- **node-telegram-bot-api** – library untuk komunikasi dengan Telegram Bot API
- **axios** – untuk fetch data dari API BMKG
- **dotenv** – untuk mengelola environment variable (token bot)

## Prasyarat

Sebelum instalasi, pastikan sudah terinstall:

- [Node.js](https://nodejs.org/) (disarankan versi 18 ke atas)
- NPM (biasanya sudah termasuk saat instal Node.js)
- Akun Telegram aktif

## Instalasi

### 1. Clone repository

```bash
git clone https://github.com/JohannesMRS/earthquakee_bot
cd earthquakee_bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Buat bot Telegram lewat BotFather

1. Buka aplikasi/akun Telegram kamu
2. Cari akun **BotFather** (pilih yang punya centang biru/verified)
3. Ketik perintah `/newbot`
4. Ikuti instruksinya: masukkan **nama bot** dan **username bot** (harus unik dan diakhiri `bot`, misal `gempaindo_bot`)
5. Jika username tersedia, BotFather akan memberikan **Token Akses HTTP API** — simpan token ini baik-baik

### 4. Konfigurasi token

Masuk ke `index.js` isi variable token dengan token kamu

```index.js
const token = masukkan_token_kamu_disini
```


### 5. Jalankan bot

```bash
npm run bot
```

### 6. Uji coba bot

Buka link `t.me/username_bot_kamu` (ganti dengan username bot yang kamu buat tadi), lalu mulai chat dengan mengetik `/start`.

## Struktur Project

```
earthquakee_bot/
├── .gitignore
├── index.js
├── package.json
├── package.json
└── readme.md
```

## Troubleshooting

| Masalah | Solusi |
|---|---|
| Bot tidak merespon | Pastikan `npm run bot` masih berjalan di terminal dan token sudah benar |
| Data gempa tidak muncul | Cek koneksi internet dan ketersediaan API BMKG |


## Kontribusi

Pull request dan saran selalu diterima! Kalau ada bug atau fitur yang ingin ditambahkan, silakan buka issue di repository ini.
