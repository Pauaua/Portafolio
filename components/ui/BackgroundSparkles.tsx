"use client";

import { motion } from "framer-motion";

// Posiciones y tamaños fijos para evitar hydration mismatch
const SPARKLES = [
  { x: "12%",  y: "18%",  size: 2,   delay: 0,    dur: 3.2 },
  { x: "87%",  y: "9%",   size: 1.5, delay: 0.7,  dur: 4.1 },
  { x: "34%",  y: "72%",  size: 2.5, delay: 1.4,  dur: 3.7 },
  { x: "72%",  y: "41%",  size: 1.5, delay: 0.3,  dur: 5.0 },
  { x: "55%",  y: "88%",  size: 2,   delay: 1.9,  dur: 3.5 },
  { x: "91%",  y: "63%",  size: 3,   delay: 0.9,  dur: 4.3 },
  { x: "18%",  y: "55%",  size: 1.5, delay: 2.2,  dur: 3.9 },
  { x: "63%",  y: "22%",  size: 2,   delay: 0.5,  dur: 4.8 },
  { x: "42%",  y: "47%",  size: 1.5, delay: 1.1,  dur: 3.3 },
  { x: "79%",  y: "81%",  size: 2.5, delay: 1.7,  dur: 4.6 },
  { x: "6%",   y: "38%",  size: 2,   delay: 2.5,  dur: 3.1 },
  { x: "48%",  y: "14%",  size: 1.5, delay: 0.4,  dur: 5.2 },
];

const BLOBS = [
  { x: "8%",   y: "15%",  w: 320, delay: 0,   dur: 8  },
  { x: "70%",  y: "5%",   w: 400, delay: 1,   dur: 10 },
  { x: "20%",  y: "65%",  w: 280, delay: 2,   dur: 9  },
  { x: "75%",  y: "55%",  w: 350, delay: 0.5, dur: 11 },
];

export default function BackgroundSparkles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Soft gradient blobs */}
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/10 blur-[90px]"
          style={{ left: b.x, top: b.y, width: b.w, height: b.w }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tiny sparkle dots */}
      {SPARKLES.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary"
          style={{
            left: s.x,
            top: s.y,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0, 0.7, 0], scale: [0.8, 1.4, 0.8] }}
          transition={{
            duration: s.dur,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
