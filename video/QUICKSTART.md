# Quick Start — Generate Audio

## 1. Setup API Key

```bash
cd I:/Github/hackathon/amanahflow/video
echo "ELEVENLABS_API_KEY=your_api_key_here" > .env
```

## 2. Install ElevenLabs Python SDK

```bash
pip install elevenlabs
```

## 3. Generate All Audio

```bash
python generate-audio.py
```

Output: `public/audio/seg1-hook.mp3` ... `seg7-closing.mp3`

## 4. Verify Output

```bash
# Check files exist
ls -lh public/audio/*.mp3

# Play first segment (Windows)
start public/audio/seg1-hook.mp3

# Or use VLC/media player
```

## 5. If Pauses Need Adjustment

Edit `generate-audio.py` line 20-87:

```python
# Increase pause: add more blank lines
"""
Text before pause.



Text after pause.  # 3 blank lines = ~1.5s
"""

# Decrease pause: remove blank lines
"""
Text before pause.

Text after pause.  # 1 blank line = ~0.3s
"""

# Add explicit pause marker
"""
Text before.

-- --

Text after.  # Double dash = ~1s pause
"""
```

Then re-run: `python generate-audio.py`

## Troubleshooting

**Error: `ELEVENLABS_API_KEY not found`**
→ Check `.env` file exists and has correct format

**Error: `401 Unauthorized`**
→ API key salah, cek lagi di elevenlabs.io

**Error: `422 Invalid voice_id`**
→ Voice ID salah, cek line 10 di `generate-audio.py`

**Pause terlalu pendek/panjang**
→ Edit blank lines di `generate-audio.py`, re-generate

**Voice tidak sesuai**
→ Ganti `VOICE_ID` line 10 dengan voice ID lain

---

## Next: Preview with Remotion

```bash
npm start
```

Browser akan buka → http://localhost:3000 → preview video dengan audio.
