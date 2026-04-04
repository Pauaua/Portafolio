"use client";

import { useEffect, useRef } from "react";

const TRAIL_COUNT = 12;
const TRAIL_LIFE = 550;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailEls = useRef<HTMLDivElement[]>([]);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const points = useRef<Array<{ x: number; y: number; t: number }>>([]);
  const raf = useRef<number>(0);
  const isHover = useRef(false);

  useEffect(() => {
    // Solo en dispositivos con puntero fino (mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      points.current.push({ x: e.clientX, y: e.clientY, t: Date.now() });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHover.current = !!target.closest("a, button, [role=button]");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);

    function tick() {
      const now = Date.now();

      // --- Dot (sigue al instante)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      }

      // --- Ring (sigue con lag suave)
      ring.current.x += (mouse.current.x - ring.current.x) * 0.11;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.11;
      if (ringRef.current) {
        const scale = isHover.current ? 1.6 : 1;
        ringRef.current.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px) scale(${scale})`;
        ringRef.current.style.opacity = isHover.current ? "0.9" : "0.55";
      }

      // --- Trail
      points.current = points.current.filter((p) => now - p.t < TRAIL_LIFE);
      const total = points.current.length;

      trailEls.current.forEach((el, i) => {
        if (!el) return;
        const idx = Math.floor((i / TRAIL_COUNT) * total);
        const p = points.current[idx];
        if (p) {
          const age = now - p.t;
          const t = age / TRAIL_LIFE;
          const opacity = (1 - t) * 0.65;
          const scale = 1 - t * 0.55;
          el.style.opacity = String(opacity);
          el.style.transform = `translate(${p.x - 3}px, ${p.y - 3}px) scale(${scale})`;
        } else {
          el.style.opacity = "0";
        }
      });

      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      {/* Estela */}
      <div className="fixed inset-0 z-[9997] pointer-events-none overflow-hidden">
        {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { if (el) trailEls.current[i] = el; }}
            className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary"
            style={{
              opacity: 0,
              boxShadow: "0 0 7px 3px var(--primary)",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* Anillo con lag */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border border-primary pointer-events-none"
        style={{
          opacity: 0.55,
          willChange: "transform",
          transition: "opacity 0.2s, scale 0.2s",
        }}
      />

      {/* Punto central */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-primary pointer-events-none"
        style={{
          boxShadow: "0 0 8px 3px var(--primary)",
          willChange: "transform",
        }}
      />
    </>
  );
}
