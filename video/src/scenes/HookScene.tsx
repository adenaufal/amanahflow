import React from 'react';
import { AbsoluteFill, Audio } from 'remotion';
import { COLORS, s } from '../constants';
import { TextOverlay } from '../components/TextOverlay';
import { Fade } from '../components/Fade';

export const HookScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.stoneDark }}>
      <Audio src="/audio/seg1-hook.mp3" />

      <Fade startFrame={0} duration={20} fadeOut={s(20)}>
        <TextOverlay
          text="Hari ini, ada pengurus masjid yang masih ngetik manual ke spreadsheet."
          startFrame={0}
          endFrame={s(6)}
          top={400}
        />
      </Fade>

      <Fade startFrame={s(6)} duration={20} fadeOut={s(14)}>
        <TextOverlay
          text="Sambil balas konfirmasi transfer satu per satu di WhatsApp."
          startFrame={s(6)}
          endFrame={s(14)}
          top={400}
        />
      </Fade>

      <Fade startFrame={s(14)} duration={20} fadeOut={s(18)}>
        <TextOverlay
          text="Di bulan Ramadhan."
          startFrame={s(14)}
          endFrame={s(18)}
          top={400}
        />
      </Fade>

      <Fade startFrame={s(18)} duration={20}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: 120,
            fontWeight: 700,
            color: COLORS.gold,
            fontFamily: 'Geist Sans, sans-serif'
          }}>
            800.000
          </div>
          <div style={{
            fontSize: 32,
            color: COLORS.stoneLight,
            marginTop: 20,
            fontFamily: 'Plus Jakarta Sans, sans-serif'
          }}>
            masjid di Indonesia — terbanyak di dunia
          </div>
        </div>
      </Fade>
    </AbsoluteFill>
  );
};
