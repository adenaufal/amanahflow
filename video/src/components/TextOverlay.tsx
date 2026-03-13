import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { COLORS } from '../constants';

interface TextOverlayProps {
  text: string;
  startFrame: number;
  endFrame: number;
  fontSize?: number;
  color?: string;
  align?: 'left' | 'center' | 'right';
  bottom?: number;
  top?: number;
}

export const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  startFrame,
  endFrame,
  fontSize = 48,
  color = COLORS.white,
  align = 'center',
  bottom,
  top,
}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 10, endFrame - 10, endFrame],
    [0, 1, 1, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );
  const y = interpolate(
    frame,
    [startFrame, startFrame + 15],
    [20, 0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: bottom !== undefined ? bottom : undefined,
        top: top !== undefined ? top : undefined,
        textAlign: align,
        opacity,
        transform: `translateY(${y}px)`,
        padding: '0 120px',
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize,
        fontWeight: 600,
        color,
        lineHeight: 1.4,
        textShadow: '0 2px 16px rgba(0,0,0,0.3)',
      }}
    >
      {text}
    </div>
  );
};
