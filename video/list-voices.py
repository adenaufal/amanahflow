from elevenlabs.client import ElevenLabs
import os
from dotenv import load_dotenv

load_dotenv()
client = ElevenLabs(api_key=os.getenv("ELEVENLABS_API_KEY"))

print("Available voices in your account:\n")
voices = client.voices.get_all()

for voice in voices.voices:
    labels = ", ".join(voice.labels.values()) if voice.labels else "No labels"
    print(f"Name: {voice.name}")
    print(f"  ID: {voice.voice_id}")
    print(f"  Labels: {labels}")
    print(f"  Category: {voice.category if hasattr(voice, 'category') else 'N/A'}")
    print()
