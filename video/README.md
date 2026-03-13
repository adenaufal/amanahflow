# Sadaqo Demo Video — Remotion Project

Video demo untuk Mayar Vibecoding Competition Ramadhan 2026.

## Spesifikasi

- **Durasi:** 3 menit (180 detik)
- **Resolusi:** 1920×1080 (Full HD)
- **FPS:** 30
- **Total Frames:** 5400
- **Segmen:** 7 (Hook, Intro, Kampanye, Donasi+Mayar, Zakat, Dashboard, Closing)

## Setup

```bash
# Install dependencies
npm install

# Preview video
npm start

# Render final video
npm run render
```

## Struktur Project

```
video/
├── src/
│   ├── index.ts              # Main composition
│   ├── constants.ts          # Brand colors, timecodes
│   ├── components/
│   │   ├── TextOverlay.tsx   # Animated text component
│   │   └── Fade.tsx          # Fade in/out wrapper
│   └── scenes/
│       ├── HookScene.tsx     # Segmen 1 (0:00-0:22)
│       ├── IntroScene.tsx    # Segmen 2 (0:22-0:40)
│       └── ...               # TODO: 5 scenes lagi
├── public/
│   ├── audio/                # ElevenLabs MP3 exports
│   │   ├── seg1-hook.mp3
│   │   ├── seg2-intro.mp3
│   │   └── ...
│   ├── screenshots/          # Screen recordings
│   │   ├── kampanye-form.mp4
│   │   ├── donasi-flow.mp4
│   │   └── ...
│   └── fonts/                # Geist Sans + Plus Jakarta Sans
└── out/                      # Rendered video output
```

## Workflow Produksi

### 1. Generate Audio (ElevenLabs)

Buka `../secrets/skrip-video.md` → copy narasi per segmen → generate di ElevenLabs:

- Voice: pilih Indonesian male voice (warm, authoritative)
- Settings: Stability 0.70 | Similarity 0.80 | Speed 0.92x
- Export 7 file MP3 → simpan di `public/audio/`

### 2. Record Screen

Gunakan QuickTime/OBS untuk record:
- Halaman "Buat Kampanye" → `kampanye-form.mp4`
- Flow donasi Mayar → `donasi-flow.mp4`
- Kalkulator zakat → `zakat-calc.mp4`
- Dashboard admin → `dashboard.mp4`

Simpan di `public/screenshots/`

### 3. Implement Remaining Scenes

Buat file scene untuk segmen 3-7:
- `KampanyeScene.tsx` (0:40-1:15)
- `DonasiScene.tsx` (1:15-1:48)
- `ZakatScene.tsx` (1:48-2:12)
- `DashboardScene.tsx` (2:12-2:37)
- `ClosingScene.tsx` (2:37-3:00)

### 4. Preview & Iterate

```bash
npm start
```

Buka browser → http://localhost:3000 → cek timing, transisi, sinkronisasi audio.

### 5. Final Render

```bash
npm run render
```

Output: `out/sadaqo-demo.mp4` (H.264, ~50-80MB)

## Brand Colors

```ts
emerald:    #10B981  // Aksen utama, progress bar, CTA
stoneDark:  #1C1917  // Background hook & closing
stoneLight: #F5F5F4  // Background demo screen
gold:       #F59E0B  // Highlight angka (800K, Rp 327T)
```

## Fonts

- **Geist Sans** — angka, UI elements
- **Plus Jakarta Sans** — narasi text overlay

Download dari Google Fonts → simpan di `public/fonts/`

## Tips

- Gunakan `s()` helper untuk convert detik → frame: `s(22)` = 660 frames
- Audio sync: pastikan `<Audio src="..." />` di awal setiap scene
- Transisi: fade 8-12 frame antar segmen (sudah di-handle di `Fade` component)
- Preview cepat: render 1 scene dulu untuk test timing

## Troubleshooting

**Audio tidak muncul:**
- Pastikan file MP3 ada di `public/audio/`
- Path harus `/audio/seg1-hook.mp3` (bukan `./audio/...`)

**Video lag saat preview:**
- Normal untuk preview — final render akan smooth
- Kurangi resolusi preview: `npm start -- --scale=0.5`

**Render gagal:**
- Check error log
- Pastikan semua asset (audio, video) ada
- Coba render 1 scene dulu untuk isolasi masalah

## Next Steps

1. ✅ Setup project structure
2. ✅ Implement Hook + Intro scenes
3. ⏳ Generate audio di ElevenLabs (7 files)
4. ⏳ Record screen untuk demo segments
5. ⏳ Implement 5 scenes tersisa
6. ⏳ Preview & sync timing
7. ⏳ Final render & export

---

**Deadline:** 15 Maret 2026 | **Submission:** mayar.id/vibe2026
