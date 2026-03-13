# Video Production Checklist — Sadaqo Demo

## 📋 Pre-Production

- [x] Skrip video final (`../secrets/skrip-video.md`)
- [x] Remotion project setup
- [x] Brand colors & constants defined
- [ ] Fonts downloaded (Geist Sans + Plus Jakarta Sans)

## 🎙️ Audio Production (ElevenLabs)

Export 7 file MP3 dari ElevenLabs → `public/audio/`

- [ ] `seg1-hook.mp3` (0:00-0:22)
- [ ] `seg2-intro.mp3` (0:22-0:40)
- [ ] `seg3-kampanye.mp3` (0:40-1:15)
- [ ] `seg4-donasi.mp3` (1:15-1:48)
- [ ] `seg5-zakat.mp3` (1:48-2:12)
- [ ] `seg6-dashboard.mp3` (2:12-2:37)
- [ ] `seg7-closing.mp3` (2:37-3:00)

## 🎬 Screen Recording

Record demo flows → `public/screenshots/`

- [ ] `kampanye-form.mp4` — flow buat kampanye baru
- [ ] `kampanye-public.mp4` — halaman kampanye publik
- [ ] `whatsapp-share.mp4` — tombol bagikan WA
- [ ] `donasi-flow.mp4` — klik donasi → Mayar payment
- [ ] `payment-success.mp4` — notifikasi pembayaran berhasil
- [ ] `zakat-calc.mp4` — kalkulator zakat fitrah
- [ ] `dashboard-full.mp4` — dashboard admin overview
- [ ] `dashboard-detail.mp4` — detail transaksi kampanye

## 💻 Scene Implementation

- [x] `HookScene.tsx` (Segmen 1)
- [x] `IntroScene.tsx` (Segmen 2)
- [ ] `KampanyeScene.tsx` (Segmen 3)
- [ ] `DonasiScene.tsx` (Segmen 4)
- [ ] `ZakatScene.tsx` (Segmen 5)
- [ ] `DashboardScene.tsx` (Segmen 6)
- [ ] `ClosingScene.tsx` (Segmen 7)

## 🎨 Visual Assets

- [ ] Logo Sadaqo (SVG/PNG)
- [ ] Tagline graphic
- [ ] Progress bar animation
- [ ] Stat cards mockup (jika perlu)

## ✅ QA & Review

- [ ] Preview full video (`npm start`)
- [ ] Audio sync check (semua segmen)
- [ ] Timing verification (total 3:00)
- [ ] Text readability check
- [ ] Transition smoothness
- [ ] Color consistency
- [ ] Safe zones check (mobile)

## 🚀 Final Render

- [ ] Test render 1 scene
- [ ] Full render (`npm run render`)
- [ ] Output file size check (<100MB)
- [ ] Upload to YouTube/Vimeo (unlisted)
- [ ] Get shareable link

## 📤 Submission

- [ ] Update `mayar-vibe2026-submission.md` dengan link video
- [ ] Submit formulir di Mayar
- [ ] Backup video file

---

**Target Completion:** 14 Maret 2026 (1 hari sebelum deadline)
