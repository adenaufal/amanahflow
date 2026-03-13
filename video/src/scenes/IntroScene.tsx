import React from 'react';
import { AbsoluteFill, Audio, Img } from 'remotion';
import { COLORS, s } from '../constants';
import { Fade } from '../components/Fade';

export const IntroScene: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.stoneDark }}>
      <Audio src="/audio/seg2-intro.mp3" />

      <Fade startFrame={0} duration={30}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: 80,
            fontWeight: 700,
            color: COLORS.emerald,
            fontFamily: 'Geist Sans, sans-serif',
            marginBottom: 20
          }}>
            Sadaqo
          </div>
          <div style={{
            fontSize: 36,
            color: COLORS.stoneLight,
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontStyle: 'italic'
          }}>
            Sedekah yang Sahih.
          </div>
        </div>
      </Fade>
    </AbsoluteFill>
  );
};
