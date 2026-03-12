'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const ease = [0.25, 1, 0.5, 1] as const;

const testimonials = [
  {
    quote:
      'Dulu tiap Ramadhan saya harus update spreadsheet manual dan jawab pertanyaan jamaah satu-satu. Sekarang cukup kirim satu link — mereka lihat sendiri.',
    name: 'Ustaz Fajar',
    role: 'Ketua DKM Masjid Al-Ikhlas, Bekasi',
    image: '/char-man-tablet.png',
  },
  {
    quote:
      'Sangat membantu untuk kampanye zakat fitrah. Jamaah percaya karena semua transaksi bisa dicek langsung. Laporan jadi transparan tanpa kerja ekstra.',
    name: 'Ibu Rahma',
    role: 'Bendahara Mushola Al-Falah, Tangerang',
    image: '/char-woman-phone.png',
  },
];

export function SocialProof() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease }}
          className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-10"
        >
          Dari pengurus masjid untuk pengurus masjid
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="flex gap-5 p-6 rounded-2xl bg-card border border-border/60"
            >
              <div className="shrink-0">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={72}
                  height={72}
                  className="w-[72px] h-[72px] rounded-xl object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
