from elevenlabs.client import ElevenLabs
from elevenlabs import save, VoiceSettings
import os
from pathlib import Path
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Setup
client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

# TODO: Ganti dengan Voice ID kamu dari ElevenLabs
VOICE_ID = "U3dExJoUNcmTY5H6GMuG"

# Voice settings (sesuai skrip: khidmat, warm, semi-formal)
settings = VoiceSettings(
    stability=0.70,
    similarity_boost=0.80,
    style=0.0,  # Natural/professional
    speed=0.92
)

# Narasi per segmen (optimized for ElevenLabs multilingual_v2)
# Pause guide: blank line = ~0.3-0.5s, -- -- = ~1s, triple blank = ~1.5s
segments = {
    "seg1-hook": """
Hari ini, ada pengurus masjid yang masih ngetik manual ke spreadsheet.


-- --


Sambil balas konfirmasi transfer satu per satu di WhatsApp.


-- --


Di bulan Ramadhan.




Hampir semuanya begitu.
""",

    "seg2-intro": """
Sadaqo.

Platform donasi yang dibuat khusus untuk DKM Indonesia.


Bukan diadaptasi dari crowdfunding umum.

Bukan aplikasi lembaga zakat besar yang butuh proses berbulan-bulan.


Dibuat karena frustrasi itu nyata — dan pengurus masjid layak dapat alat yang lebih baik.
""",

    "seg3-kampanye": """
Dari daftar sampai kampanye siap dibagikan — lima menit.


Isi nama, target, deskripsi.

Klik satu tombol.


Halaman kampanye langsung live.


Jamaah bisa lihat progress kapan saja — tanpa login, tanpa tanya ke siapapun.


Satu klik.

Pesan WhatsApp sudah terbentuk — lengkap dengan link dan angka terkini.
""",

    "seg4-donasi": """
Dari sisi jamaah yang mau berdonasi.


Klik donasi.

Langsung ke Mayar — bisa transfer bank, QRIS, semua tersedia.


-- --


Pembayaran masuk.

Tercatat otomatis.


DKM nggak perlu cek WhatsApp.

Nggak perlu rekap manual.


Jamaah lihat sendiri.

Setiap donasi tercatat publik — bisa diaudit siapa saja, kapan saja.
""",

    "seg5-zakat": """
Ramadhan, banyak jamaah tanya soal zakat fitrah.


Input jumlah anggota keluarga.

Keluar nominalnya — sesuai harga beras setempat.


Bisa langsung bayar lewat kampanye yang sama.
""",

    "seg6-dashboard": """
Dashboard pengurus masjid.

Semua kampanye dalam satu tempat.


Setiap transaksi tercatat.

Tidak ada yang hilang, tidak ada yang perlu direkap manual.


Mau laporan?

Satu klik.
""",

    "seg7-closing": """
Dari pencatatan manual yang melelahkan — ke transparansi publik yang memuliakan amanah jamaah.




Sadaqo.




-- -- -- --




Delapan ratus ribu masjid Indonesia belum punya ini.
"""
}

# Create output directory
output_dir = Path("public/audio")
output_dir.mkdir(parents=True, exist_ok=True)

# Generate all segments
print("Generating audio with ElevenLabs...")
print(f"Voice ID: {VOICE_ID}")
print(f"Model: eleven_multilingual_v2 (Bahasa Indonesia)")
print(f"Settings: stability={settings.stability}, similarity={settings.similarity_boost}, speed={settings.speed}\n")

for name, text in segments.items():
    print(f"Generating {name}...", end=" ")

    try:
        audio = client.text_to_speech.convert(
            text=text.strip(),
            voice_id=VOICE_ID,
            model_id="eleven_multilingual_v2",  # Support Bahasa Indonesia
            voice_settings=settings
        )

        output_path = output_dir / f"{name}.mp3"
        save(audio, str(output_path))

        # Get file size
        size_kb = output_path.stat().st_size / 1024
        print(f"OK ({size_kb:.1f} KB)")

    except Exception as e:
        print(f"ERROR: {e}")

print(f"\nDone! Audio files saved to {output_dir}/")
print("\nNext steps:")
print("1. Listen to each file to verify quality")
print("2. Re-generate any segments that need adjustment")
print("3. Run 'npm start' in video/ to preview with Remotion")
