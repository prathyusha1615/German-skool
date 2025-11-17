// useJourney.ts
// Supply avatar images + ring configs and compute even positions around each ring.

import { useMemo } from "react";

export type Avatar = { id: string | number; src: string; alt?: string };

export type RingConfig = {
  id: string;
  sizePx: number;       // avatar size in px
  radiusPx: number;     // distance from center
  speedSec: number;     // rotation duration
  reverse?: boolean;    // rotate opposite direction
  tiltDeg?: number;     // initial tilt to make it feel 3D
  avatars: Avatar[];
};

export const useJourney = () => {
  // TIP: swap these with your own images (keep 12–24 per ring for best look).
  const outer: Avatar[] = [
    { id: 1, src: "https://media.onlinegermanskool.com/assets/students/student1.svg" },
    { id: 2, src: "https://media.onlinegermanskool.com/assets/students/student2.svg" },
    { id: 3, src: "https://media.onlinegermanskool.com/assets/students/student3.svg" },
    { id: 4, src: "https://media.onlinegermanskool.com/assets/students/student4.svg" },
    { id: 5, src: "https://media.onlinegermanskool.com/assets/students/student5.svg" },
    { id: 6, src: "https://media.onlinegermanskool.com/assets/students/student6.svg" },
    { id: 7, src: "https://media.onlinegermanskool.com/assets/students/student7.svg" },
    { id: 8, src: "https://media.onlinegermanskool.com/assets/students/student8.svg" },
    { id: 9, src: "https://media.onlinegermanskool.com/assets/students/student9.svg" },
    { id: 10, src: "https://media.onlinegermanskool.com/assets/students/student10.svg" },
    { id: 11, src: "https://media.onlinegermanskool.com/assets/students/student11.svg" },
    { id: 12, src: "https://media.onlinegermanskool.com/assets/students/student12.svg" },
  ];

  const mid: Avatar[] = [
    { id: "m1", src: "https://media.onlinegermanskool.com/assets/students/student13.svg" },
    { id: "m2", src: "https://media.onlinegermanskool.com/assets/students/student14.svg" },
    { id: "m3", src: "https://media.onlinegermanskool.com/assets/students/student1.svg" },
    { id: "m4", src: "https://media.onlinegermanskool.com/assets/students/student2.svg" },
    { id: "m5", src: "https://media.onlinegermanskool.com/assets/students/student3.svg" },
    { id: "m6", src: "https://media.onlinegermanskool.com/assets/students/student4.svg" },
    { id: "m7", src: "https://media.onlinegermanskool.com/assets/students/student5.svg" },
    { id: "m8", src: "https://media.onlinegermanskool.com/assets/students/student6.svg" },
    { id: "m9", src: "https://media.onlinegermanskool.com/assets/students/student7.svg" },
    { id: "m10", src: "https://media.onlinegermanskool.com/assets/students/student8.svg" },
  ];

  const inner: Avatar[] = [
    { id: "i1", src: "https://media.onlinegermanskool.com/assets/students/student9.svg" },
    { id: "i2", src: "https://media.onlinegermanskool.com/assets/students/student10.svg" },
    { id: "i3", src: "https://media.onlinegermanskool.com/assets/students/student11.svg" },
    { id: "i4", src: "https://media.onlinegermanskool.com/assets/students/student12.svg" },
    { id: "i5", src: "https://media.onlinegermanskool.com/assets/students/student13.svg" },
    { id: "i6", src: "https://media.onlinegermanskool.com/assets/students/student14.svg" },
    { id: "i7", src: "https://media.onlinegermanskool.com/assets/students/student1.svg" },
    { id: "i8", src: "https://media.onlinegermanskool.com/assets/students/student2.svg" },
  ];

  const rings: RingConfig[] = useMemo(
    () => [
      {
        id: "outer",
        sizePx: 56,
        radiusPx: 230,
        speedSec: 80,
        reverse: false,
        tiltDeg: 44, // matches the reference’s perspective
        avatars: outer,
      },
      {
        id: "mid",
        sizePx: 44,
        radiusPx: 170,
        speedSec: 55,
        reverse: true,
        tiltDeg: 1,
        avatars: mid,
      },
      {
        id: "inner",
        sizePx: 32,
        radiusPx: 120,
        speedSec: 35,
        reverse: false,
        tiltDeg: 89,
        avatars: inner,
      },
    ],
    []
  );

  // Utility to compute evenly spaced angles for a ring.
  const computeAngles = (count: number) =>
    Array.from({ length: count }, (_, i) => (i * 360) / count);

  return { rings, computeAngles };
};
