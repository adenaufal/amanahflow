# Sadaqo Brand Ambassador — Image Generation Prompts

Prompt untuk generate karakter brand ambassador virtual Sadaqo dalam gaya **photorealistic**.
Karakter: **Nadia** (pemudi) dan **Rafi** (pemuda).

---

## Workflow Generate

1. Generate **Nadia hero shot** → simpan hasilnya
2. Pakai Nadia hero shot sebagai reference image → generate **2x2 expression grid** Nadia
3. Generate **Rafi hero shot** → simpan hasilnya
4. Pakai Rafi hero shot sebagai reference image → generate **2x2 expression grid** Rafi
5. Crop avatar dari expression grid → Squoosh (crop + WebP, quality 80–85) → `/public/`

---

## NADIA — Pemudi

### Hero Shot

```json
{
  "type": "image_generation_prompt",
  "style": "ultra-realistic, cinematic, professional brand ambassador portrait, editorial photography",
  "resolution": "8K",
  "aspect_ratio": "4:5",
  "quality": "masterpiece, best quality, extremely detailed, photorealistic, RAW photo",

  "subject": {
    "name": "Nadia",
    "gender": "female",
    "ethnicity": "Indonesian, Southeast Asian",
    "age_range": "22–25",
    "expression": "warm confident smile, approachable and trustworthy, looking directly at camera",
    "appearance": {
      "skin": "natural warm medium skin tone, visible natural pores, healthy glow, no heavy filter",
      "eyes": "clear warm brown eyes, natural eyelashes, subtle mascara",
      "makeup": "fresh minimal makeup — soft blush, natural lip color, clean skin-first look",
      "face_shape": "soft oval face, symmetrical, naturally beautiful"
    },
    "clothing": {
      "outfit": "modern Indonesian modest fashion — structured soft emerald green blazer over white inner, neat tailored trousers in cream or off-white",
      "headwear": "modern pashmina-style hijab in soft sage green or warm white, neatly draped, elegant fold",
      "shoes": "minimal white or nude flat shoes or clean white sneakers"
    },
    "accessories": [
      "small gold stud earrings (barely visible under hijab)",
      "minimal thin gold bracelet",
      "smartphone held naturally at side or slightly raised — screen showing green app UI"
    ],
    "pose": {
      "position": "standing, slightly angled 3/4 toward camera, weight shifted naturally",
      "body_language": "open, confident, approachable — slight lean forward energy",
      "hands": "one hand holding phone naturally, other hand relaxed at side or lightly on hip"
    }
  },

  "environment": {
    "location": "modern bright indoor space — clean co-working area or soft studio backdrop",
    "background": "soft blurred clean white or very light warm gray wall, minimal modern interior hints",
    "atmosphere": "bright, airy, professional, modern Indonesian workplace vibe"
  },

  "lighting": {
    "type": "soft studio light + natural window light from the side",
    "quality": "flattering, even, no harsh shadows, skin looks natural and glowing",
    "color_temperature": "warm neutral 4500K — bright but not clinical"
  },

  "camera": {
    "lens": "85mm portrait lens",
    "aperture": "f/1.8 to f/2.2 — beautiful natural bokeh background",
    "style": "professional brand photography, NOT selfie style",
    "framing": "chest-up to full-body, generous head room above"
  },

  "mood": {
    "emotion": "trustworthy, modern, warm, capable",
    "brand_feel": "Sadaqo — Islamic fintech brand, clean and professional but human and approachable"
  },

  "negative_prompt": "cartoon, anime, illustration, painting, 3D render, plastic skin, over-smoothed, heavy filter, excessive makeup, revealing clothing, no hijab, watermark, text overlay, blurry, low quality, deformed anatomy, extra limbs, bad hands, ugly, old, childlike"
}
```

### Expression Grid (pakai hero shot sebagai reference)

```
Using the exact same woman from the reference image — same face, same hijab, same outfit:
Generate a 2x2 grid of four portrait panels, chest-up framing, clean white background.

Panel 1 (top-left): Warm welcoming smile, looking directly at camera
Panel 2 (top-right): Focused and professional, looking slightly to the side, subtle nod expression
Panel 3 (bottom-left): Laughing naturally, candid joy, eyes slightly crinkled
Panel 4 (bottom-right): Calm and reassuring, soft closed-mouth smile, steady gaze

Ultra-realistic, consistent identity across all four panels. Same lighting, same hijab, same outfit.
No text, no labels, no background elements.
```

---

## RAFI — Pemuda

### Hero Shot

```json
{
  "prompt": "Ultra-photorealistic professional brand ambassador portrait of a handsome young Indonesian Muslim man, age 22-25, warm medium-tan skin tone with natural texture, clean neat short dark hair, sharp symmetrical face, warm confident smile looking directly at camera. Wearing a modern smart-casual outfit: fitted white or soft sage button-down shirt, sleeves slightly rolled up, dark navy slim chinos, minimal white sneakers. Holding a slim laptop or tablet naturally at his side. Standing in a bright modern co-working space or clean indoor studio, soft blurred background. Professional brand photography style — 85mm lens equivalent, f/2.0 bokeh, soft flattering window light from the left side, warm 4500K color temperature. Body angled slightly 3/4 toward camera, open confident posture, approachable energy. Brand feel: modern Indonesian tech professional, trustworthy, clean.",

  "negative_prompt": "cartoon, anime, illustration, 3D render, plastic skin, over-smoothed, heavy filter, beard too heavy, religious extremist aesthetics, revealing, watermark, text overlay, blurry, deformed, bad anatomy, extra limbs, ugly, very old, child, female",

  "additional_settings": {
    "ethnicity": "Indonesian, Southeast Asian",
    "style": "photorealistic RAW photo, professional brand photography",
    "lighting": "soft natural window light, no harsh shadows",
    "resolution": "8K, masterpiece quality",
    "aspect_ratio": "4:5"
  }
}
```

### Expression Grid (pakai hero shot sebagai reference)

```
Using the exact same man from the reference image — same face, same hair, same outfit:
Generate a 2x2 grid of four portrait panels, chest-up framing, clean white background.

Panel 1 (top-left): Confident welcoming smile, direct eye contact with camera
Panel 2 (top-right): Focused and thoughtful, slightly looking down-right, finger lightly on chin
Panel 3 (bottom-left): Enthusiastic explaining — slight open mouth smile, energetic eyes
Panel 4 (bottom-right): Calm professional nod — steady trustworthy gaze, closed-mouth smile

Ultra-realistic, same identity across all four panels. Same lighting, same outfit.
No text, no labels, no background decoration.
```

---

## Referensi Library

Base prompt diambil dari Nano Banana Pro library:
- **"Ultra-Realistic Muslimah Portrait Prompt"** — untuk struktur Nadia
- **"Photorealistic Night Selfie Prompt"** — untuk struktur camera settings Rafi
- **"Panoramic Character Concept Sheet"** — untuk layout comcard
