import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

interface FadeProps {
  children: React.ReactNode;
  startFrame: number;
  duration?: number;
  fadeOut?: number;
}

export const Fade: React.FC<FadeProps> = ({ children, startFrame, duration = 15, fadeOut }) => {
  const frame = useCurrentFrame();
  const fadeIn = interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fadeOutVal = fadeOut
    ? interpolate(frame, [fadeOut, fadeOut + duration], [1, 0], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 1;
  return <div style={{ opacity: Math.min(fadeIn, fadeOutVal) }}>{children}</div>;
};
