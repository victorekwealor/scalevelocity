"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

// 17 arrows extracted from ptrn-1.svg.
// Each arrow = 3 rects (horizontal + vertical + diagonal bars) sharing one fill color.
// Rects have NO fill attribute so they inherit it from the parent <motion.g>.
type RectDef = {
  x: number;
  y: number;
  width: number;
  height: number;
  transform?: string;
};

type Arrow = {
  baseColor: string;
  rects: RectDef[];
};

const W = 67.7999;
const H = 6.25846;

const ARROWS: Arrow[] = [
  // 0
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 470.427, y: 0, width: W, height: H },
      { x: 542.399, y: 78.2307, width: W, height: H, transform: "rotate(-90 542.399 78.2307)" },
      { x: 483.359, y: 60.8735, width: W, height: H, transform: "rotate(-45 483.359 60.8735)" },
    ],
  },
  // 1
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 548.658, y: 0, width: W, height: H },
      { x: 620.63, y: 78.2307, width: W, height: H, transform: "rotate(-90 620.63 78.2307)" },
      { x: 561.59, y: 60.8735, width: W, height: H, transform: "rotate(-45 561.59 60.8735)" },
    ],
  },
  // 2
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 470.427, y: 78.2307, width: W, height: H },
      { x: 542.399, y: 156.461, width: W, height: H, transform: "rotate(-90 542.399 156.461)" },
      { x: 483.359, y: 139.104, width: W, height: H, transform: "rotate(-45 483.359 139.104)" },
    ],
  },
  // 3
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 626.889, y: 78.2307, width: W, height: H },
      { x: 698.861, y: 156.461, width: W, height: H, transform: "rotate(-90 698.861 156.461)" },
      { x: 639.82, y: 139.104, width: W, height: H, transform: "rotate(-45 639.82 139.104)" },
    ],
  },
  // 4
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 235.735, y: 78.2307, width: W, height: H },
      { x: 307.707, y: 156.461, width: W, height: H, transform: "rotate(-90 307.707 156.461)" },
      { x: 248.667, y: 139.104, width: W, height: H, transform: "rotate(-45 248.667 139.104)" },
    ],
  },
  // 5
  {
    baseColor: "#59562D",
    rects: [
      { x: 392.196, y: 78.2307, width: W, height: H },
      { x: 464.169, y: 156.461, width: W, height: H, transform: "rotate(-90 464.169 156.461)" },
      { x: 405.129, y: 139.104, width: W, height: H, transform: "rotate(-45 405.129 139.104)" },
    ],
  },
  // 6
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 313.966, y: 78.2307, width: W, height: H },
      { x: 385.938, y: 156.461, width: W, height: H, transform: "rotate(-90 385.938 156.461)" },
      { x: 326.897, y: 139.104, width: W, height: H, transform: "rotate(-45 326.897 139.104)" },
    ],
  },
  // 7
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 392.196, y: 156.461, width: W, height: H },
      { x: 464.169, y: 234.692, width: W, height: H, transform: "rotate(-90 464.169 234.692)" },
      { x: 405.129, y: 217.335, width: W, height: H, transform: "rotate(-45 405.129 217.335)" },
    ],
  },
  // 8
  {
    baseColor: "#59562D",
    rects: [
      { x: 626.889, y: 0, width: W, height: H },
      { x: 698.861, y: 78.2307, width: W, height: H, transform: "rotate(-90 698.861 78.2307)" },
      { x: 639.82, y: 60.8735, width: W, height: H, transform: "rotate(-45 639.82 60.8735)" },
    ],
  },
  // 9
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 79.2734, y: 156.461, width: W, height: H },
      { x: 151.246, y: 234.692, width: W, height: H, transform: "rotate(-90 151.246 234.692)" },
      { x: 92.2061, y: 217.335, width: W, height: H, transform: "rotate(-45 92.2061 217.335)" },
    ],
  },
  // 10
  {
    baseColor: "#59562D",
    rects: [
      { x: 157.504, y: 156.461, width: W, height: H },
      { x: 229.477, y: 234.692, width: W, height: H, transform: "rotate(-90 229.477 234.692)" },
      { x: 170.437, y: 217.335, width: W, height: H, transform: "rotate(-45 170.437 217.335)" },
    ],
  },
  // 11
  {
    baseColor: "#59562D",
    rects: [
      { x: 470.427, y: 156.461, width: W, height: H },
      { x: 542.399, y: 234.692, width: W, height: H, transform: "rotate(-90 542.399 234.692)" },
      { x: 483.359, y: 217.335, width: W, height: H, transform: "rotate(-45 483.359 217.335)" },
    ],
  },
  // 12
  {
    baseColor: "#59562D",
    rects: [
      { x: 313.966, y: 156.461, width: W, height: H },
      { x: 385.938, y: 234.692, width: W, height: H, transform: "rotate(-90 385.938 234.692)" },
      { x: 326.897, y: 217.335, width: W, height: H, transform: "rotate(-45 326.897 217.335)" },
    ],
  },
  // 13
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 235.735, y: 156.461, width: W, height: H },
      { x: 307.707, y: 234.692, width: W, height: H, transform: "rotate(-90 307.707 234.692)" },
      { x: 248.667, y: 217.335, width: W, height: H, transform: "rotate(-45 248.667 217.335)" },
    ],
  },
  // 14 — originally green in the static SVG
  {
    baseColor: "#09E026",
    rects: [
      { x: 548.658, y: 78.2307, width: W, height: H },
      { x: 620.63, y: 156.461, width: W, height: H, transform: "rotate(-90 620.63 156.461)" },
      { x: 561.59, y: 139.104, width: W, height: H, transform: "rotate(-45 561.59 139.104)" },
    ],
  },
  // 15
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 548.658, y: 156.461, width: W, height: H },
      { x: 620.63, y: 234.692, width: W, height: H, transform: "rotate(-90 620.63 234.692)" },
      { x: 561.59, y: 217.335, width: W, height: H, transform: "rotate(-45 561.59 217.335)" },
    ],
  },
  // 16
  {
    baseColor: "#CDC7B1",
    rects: [
      { x: 626.889, y: 156.461, width: W, height: H },
      { x: 698.861, y: 234.692, width: W, height: H, transform: "rotate(-90 698.861 234.692)" },
      { x: 639.82, y: 217.335, width: W, height: H, transform: "rotate(-45 639.82 217.335)" },
    ],
  },
];

export default function AnimatedPattern() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % ARROWS.length);
    }, 600);
    return () => clearInterval(id);
  }, []);

  return (
    <svg
      width="100%"
      viewBox="0 0 706 223"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#anim-clip0)">
        <g clipPath="url(#anim-clip1)">
          {ARROWS.map((arrow, i) => (
            <motion.g
              key={i}
              animate={{ fill: activeIndex === i ? "#09E026" : arrow.baseColor }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {arrow.rects.map((r, j) => (
                <rect
                  key={j}
                  x={r.x}
                  y={r.y}
                  width={r.width}
                  height={r.height}
                  transform={r.transform}
                />
              ))}
            </motion.g>
          ))}
        </g>
      </g>
      <defs>
        <clipPath id="anim-clip0">
          <rect width="705.12" height="222.175" fill="white" />
        </clipPath>
        <clipPath id="anim-clip1">
          <rect width="625.846" height="234.692" fill="white" transform="translate(79.2734)" />
        </clipPath>
      </defs>
    </svg>
  );
}
