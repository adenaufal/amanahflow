# Panduan Produksi Video — Alternatif Tanpa Screen Recording Manual

## 1. Audio Generation (ElevenLabs via Skill)

Skill `elevenlabs` sudah terinstall. Cara pakai:

```bash
# Generate audio dari teks
/elevenlabs "Hari ini, ada pengurus masjid yang masih ngetik manual ke spreadsheet."
```

Atau bisa langsung invoke skill dengan narasi lengkap per segmen.

### Workflow Otomatis

Buat file `audio-scripts.txt` dengan format:

```
[seg1-hook]
Hari ini, ada pengurus masjid yang masih ngetik manual ke spreadsheet.
Sambil balas konfirmasi transfer satu per satu di WhatsApp.
Di bulan Ramadhan.
Hampir semuanya begitu.

[seg2-intro]
Sadaqo. Platform donasi yang dibuat khusus untuk DKM Indonesia.
Bukan diadaptasi dari crowdfunding umum. Bukan aplikasi lembaga zakat besar yang butuh proses berbulan-bulan.
Dibuat karena frustrasi itu nyata — dan pengurus masjid layak dapat alat yang lebih baik.

... (dst untuk 7 segmen)
```

Lalu generate batch via skill.

---

## 2. Screen Recording — 3 Alternatif

### Opsi A: Mockup Statis + Animasi Remotion (RECOMMENDED)

**Tidak perlu record screen manual.** Buat mockup UI di Figma/Pencil, export PNG, lalu animate di Remotion.

#### Workflow:

1. **Buat mockup UI di Pencil** (design tool MCP yang sudah tersedia)
   - Halaman "Buat Kampanye" form
   - Halaman kampanye publik dengan progress bar
   - Dashboard admin dengan stat cards
   - Mayar payment page mockup

2. **Export PNG** dari Pencil (resolusi 1280×800 atau 1920×1080)

3. **Animate di Remotion** dengan:
   - Fade in/out
   - Zoom ke elemen tertentu (tombol, form field)
   - Cursor animation (fake cursor movement)
   - Progress bar fill animation

**Keuntungan:**
- Tidak perlu aplikasi berjalan sempurna
- Kontrol penuh atas timing & visual
- Bisa iterate cepat tanpa re-record
- Lebih cinematic (smooth transitions)

**File yang dibutuhkan:**
```
public/mockups/
├── kampanye-form.png
├── kampanye-public.png
├── mayar-payment.png
├── dashboard-stats.png
└── dashboard-detail.png
```

#### Contoh Implementasi di Remotion:

```tsx
// KampanyeScene.tsx
import { Img, interpolate, useCurrentFrame } from 'remotion';

export const KampanyeScene = () => {
  const frame = useCurrentFrame();

  // Zoom in ke form
  const scale = interpolate(frame, [0, 30], [1, 1.2], {
    extrapolateRight: 'clamp'
  });

  return (
    <div style={{ transform: `scale(${scale})` }}>
      <Img src="/mockups/kampanye-form.png" />
      {/* Overlay cursor animation */}
      <FakeCursor x={500} y={300} frame={frame} />
    </div>
  );
};
```

---

### Opsi B: Screenshot Real App + Minimal Animation

Jika aplikasi sudah jalan (meskipun belum sempurna):

1. Screenshot key screens (bukan video)
2. Import ke Remotion sebagai static images
3. Tambah animasi sederhana (fade, slide)
4. Overlay text untuk highlight fitur

**Lebih cepat dari record video, hasil tetap profesional.**

---

### Opsi C: Hybrid — Mockup + Real Screenshots

- Mockup untuk flow yang belum selesai (Mayar integration, zakat calculator)
- Screenshot real untuk yang sudah jadi (landing page, dashboard)

---

## 3. Fake Cursor Animation (Opsional)

Buat komponen `FakeCursor.tsx` untuk simulasi cursor movement:

```tsx
import { interpolate, useCurrentFrame } from 'remotion';

export const FakeCursor = ({ startX, startY, endX, endY, startFrame, endFrame }) => {
  const frame = useCurrentFrame();
  const x = interpolate(frame, [startFrame, endFrame], [startX, endX]);
  const y = interpolate(frame, [startFrame, endFrame], [startY, endY]);

  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      width: 24,
      height: 24,
      background: 'white',
      borderRadius: '50%',
      border: '2px solid black',
      pointerEvents: 'none'
    }} />
  );
};
```

---

## 4. Recommended Workflow untuk Hackathon

**Paling efisien untuk deadline 2 hari:**

1. ✅ **Audio:** Generate via ElevenLabs skill (30 menit)
2. ✅ **Mockup:** Buat 5-6 screen mockup di Pencil (2 jam)
3. ✅ **Export:** PNG dari Pencil → `public/mockups/` (5 menit)
4. ✅ **Implement scenes:** Animate mockups di Remotion (3 jam)
5. ✅ **Preview & iterate:** Fix timing (1 jam)
6. ✅ **Render:** Final video (30 menit)

**Total: ~7 jam** (bisa selesai dalam 1 hari kerja)

vs.

**Manual screen recording:**
- Setup aplikasi sempurna: 4-6 jam
- Record multiple takes: 2-3 jam
- Edit video: 2-3 jam
- **Total: 8-12 jam**

---

## 5. Checklist Update

```markdown
## 🎙️ Audio (via ElevenLabs Skill)
- [ ] Generate seg1-hook.mp3
- [ ] Generate seg2-intro.mp3
- [ ] Generate seg3-kampanye.mp3
- [ ] Generate seg4-donasi.mp3
- [ ] Generate seg5-zakat.mp3
- [ ] Generate seg6-dashboard.mp3
- [ ] Generate seg7-closing.mp3

## 🎨 Mockups (via Pencil)
- [ ] Kampanye form screen
- [ ] Kampanye public page
- [ ] WhatsApp share preview
- [ ] Mayar payment page
- [ ] Dashboard overview
- [ ] Dashboard detail
- [ ] Zakat calculator

## 💻 Remotion Scenes
- [x] HookScene (text only)
- [x] IntroScene (logo + tagline)
- [ ] KampanyeScene (mockup + animation)
- [ ] DonasiScene (mockup + animation)
- [ ] ZakatScene (mockup + animation)
- [ ] DashboardScene (mockup + animation)
- [ ] ClosingScene (text + logo)
```

---

## TL;DR

**Jawaban singkat:**

1. **ElevenLabs:** ✅ Ada skill, sudah terinstall. Bisa generate audio langsung via `/elevenlabs` command.

2. **Screen recording:** ❌ Tidak wajib manual. Bisa pakai mockup PNG + animasi Remotion. Lebih cepat, lebih fleksibel, hasil lebih cinematic.

**Next step:** Generate audio dulu via skill, lalu buat mockup di Pencil.
