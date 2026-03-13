# Setup ElevenLabs dengan Akun Kamu

## 1. Dapatkan API Key

1. Login ke [elevenlabs.io](https://elevenlabs.io)
2. Klik profile (kanan atas) → **Profile + API Key**
3. Copy API key kamu

## 2. Setup di Project

Buat file `.env` di root project:

```bash
cd /I/Github/hackathon/amanahflow/video
touch .env
```

Isi `.env`:

```env
ELEVENLABS_API_KEY=your_api_key_here
```

## 3. Dapatkan Voice ID Kamu

Jika kamu sudah punya voice yang kamu suka di ElevenLabs:

1. Buka [Voice Library](https://elevenlabs.io/voice-library) atau Voice Lab
2. Klik voice yang kamu mau
3. Copy **Voice ID** (format: `abc123XYZ...`)

Atau list semua voice via Python:

```python
from elevenlabs.client import ElevenLabs
import os

client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))
voices = client.voices.get_all()

for voice in voices.voices:
    print(f"{voice.name}: {voice.voice_id}")
```

## 4. Generate Audio dengan Voice Kamu

### Opsi A: Via Python Script

Buat `generate-audio.py`:

```python
from elevenlabs.client import ElevenLabs
from elevenlabs import save, VoiceSettings
import os

client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

# Voice ID kamu (ganti dengan voice ID yang kamu mau)
VOICE_ID = "your_voice_id_here"

# Settings sesuai skrip (khidmat, warm)
settings = VoiceSettings(
    stability=0.70,
    similarity_boost=0.80,
    style=0.0,  # Natural/professional
    speed=0.92
)

# Narasi per segmen
segments = {
    "seg1-hook": """
Hari ini, ada pengurus masjid yang masih ngetik manual ke spreadsheet.

Sambil balas konfirmasi transfer satu per satu di WhatsApp.

Di bulan Ramadhan.

Hampir semuanya begitu.
""",
    "seg2-intro": """
Sadaqo. Platform donasi yang dibuat khusus untuk DKM Indonesia.

Bukan diadaptasi dari crowdfunding umum. Bukan aplikasi lembaga zakat besar yang butuh proses berbulan-bulan.

Dibuat karena frustrasi itu nyata — dan pengurus masjid layak dapat alat yang lebih baik.
""",
    # ... tambahkan 5 segmen lainnya
}

# Generate semua
for name, text in segments.items():
    print(f"Generating {name}...")
    audio = client.text_to_speech.convert(
        text=text.strip(),
        voice_id=VOICE_ID,
        model_id="eleven_multilingual_v2",  # Support Bahasa Indonesia
        voice_settings=settings
    )
    save(audio, f"public/audio/{name}.mp3")
    print(f"✓ Saved public/audio/{name}.mp3")

print("\\nDone! All audio files generated.")
```

Run:
```bash
python generate-audio.py
```

### Opsi B: Via Skill (Interactive)

```bash
# Generate satu per satu
/elevenlabs "Hari ini, ada pengurus masjid yang masih ngetik manual ke spreadsheet."
```

Skill akan prompt untuk voice ID dan settings.

## 5. Bahasa Indonesia

Model `eleven_multilingual_v2` support 29 bahasa termasuk **Bahasa Indonesia**.

Pastikan:
- Voice yang kamu pilih support multilingual
- Atau gunakan voice clone dari sample Bahasa Indonesia

## 6. Voice Clone (Opsional)

Jika kamu mau clone voice sendiri:

```python
with open("sample-voice.mp3", "rb") as f:
    voice = client.voices.ivc.create(
        name="Sadaqo Narrator",
        files=[f],
        remove_background_noise=True
    )
print(f"Voice ID: {voice.voice_id}")
```

Simpan Voice ID untuk dipakai di `generate-audio.py`.

## 7. Batch Generate Script

Buat `batch-generate.sh`:

```bash
#!/bin/bash

# Load .env
export $(cat .env | xargs)

# Generate all segments
python generate-audio.py

# Check output
ls -lh public/audio/*.mp3

echo "✓ All audio files ready for Remotion"
```

Run:
```bash
chmod +x batch-generate.sh
./batch-generate.sh
```

---

## TL;DR

1. ✅ Skill bisa pakai akun kamu
2. ✅ Butuh API key di `.env`
3. ✅ Bisa pilih voice ID kamu sendiri
4. ✅ Support Bahasa Indonesia via `eleven_multilingual_v2`
5. ✅ Bisa voice clone jika perlu

**Next:** Setup `.env` dengan API key kamu, lalu run `generate-audio.py` untuk batch generate 7 segmen sekaligus.
