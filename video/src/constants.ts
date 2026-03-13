// Brand colors
export const COLORS = {
  emerald: '#10B981',
  stoneDark: '#1C1917',
  stoneLight: '#F5F5F4',
  stoneMid: '#78716C',
  gold: '#F59E0B',
  white: '#FFFFFF',
} as const;

// Video spec
export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;
export const TOTAL_DURATION_S = 180; // 3 minutes
export const TOTAL_FRAMES = TOTAL_DURATION_S * FPS; // 5400

// Segment timecodes (in seconds)
export const SEGMENTS = {
  hook:       { start: 0,   end: 22  },
  intro:      { start: 22,  end: 40  },
  kampanye:   { start: 40,  end: 75  },
  donasi:     { start: 75,  end: 108 },
  zakat:      { start: 108, end: 132 },
  dashboard:  { start: 132, end: 157 },
  closing:    { start: 157, end: 180 },
} as const;

// Helper: seconds → frames
export const s = (seconds: number) => Math.round(seconds * FPS);
