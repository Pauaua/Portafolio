"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET = "hire me";
const COLORS = ["#b97bf7", "#c084fc", "#d8b4fe", "#f3e8ff", "#9333ea", "#e9d5ff", "#ffffff"];

export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const bufferRef = useRef("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Detectar "hire me" tipeado en cualquier lugar
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key.length === 1) {
        bufferRef.current = (bufferRef.current + e.key.toLowerCase()).slice(-TARGET.length);
        if (bufferRef.current === TARGET) trigger();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function trigger() {
    setActive(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActive(false), 4500);
  }

  // Confetti en canvas
  useEffect(() => {
    if (!active) {
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cx = canvas.width / 2;
    const cy = canvas.height * 0.45;

    const particles = Array.from({ length: 140 }, () => ({
      x: cx + (Math.random() - 0.5) * 80,
      y: cy + (Math.random() - 0.5) * 40,
      vx: (Math.random() - 0.5) * 11,
      vy: -(Math.random() * 14 + 3),
      r: Math.random() * 4 + 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 1,
      decay: Math.random() * 0.012 + 0.007,
      gravity: 0.22,
      wobble: Math.random() * 0.2 - 0.1,
    }));

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      for (const p of particles) {
        if (p.alpha <= 0) continue;
        alive = true;
        p.x += p.vx + p.wobble;
        p.y += p.vy;
        p.vy += p.gravity;
        p.alpha -= p.decay;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      if (alive) rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9990] pointer-events-none flex items-center justify-center"
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative z-10 px-10 py-6 rounded-2xl border border-primary/40 bg-background/90 backdrop-blur-md text-center shadow-2xl"
          >
            <p className="text-2xl font-light font-[family-name:var(--font-heading)] gradient-text mb-2">
              ¡Me encontraste! 🎉
            </p>
            <p className="text-sm font-light text-muted-foreground">
              Escribe{" "}
              <span className="text-primary font-medium">"hire me"</span>{" "}
              y así de fácil consigues una gran dev.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
