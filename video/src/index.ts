import React from 'react';
import { Composition } from 'remotion';
import { HookScene } from './scenes/HookScene';
import { IntroScene } from './scenes/IntroScene';
import { FPS, WIDTH, HEIGHT, SEGMENTS, s } from './constants';

// Main composition
const SadaqoDemo: React.FC = () => {
  return (
    <>
      <HookScene />
      <IntroScene />
      {/* TODO: Add remaining scenes */}
    </>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SadaqoDemo"
        component={SadaqoDemo}
        durationInFrames={s(180)}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
