"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MessageCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-max section-padding flex flex-col items-center text-center">
        {/* Availability badge */}
        {personalInfo.available && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-light mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Disponible para contratación
          </motion.div>
        )}

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light font-[family-name:var(--font-heading)] tracking-tight leading-[1.1] mb-6"
        >
          Hola, soy{" "}
          <span className="gradient-text font-normal">{personalInfo.name}</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-light tracking-wide"
        >
          {personalInfo.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl text-base md:text-lg text-muted-foreground/80 leading-relaxed mb-10 font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          {/* WhatsApp — acción principal */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-light hover:opacity-90 glow-sm transition-all duration-200 hover:scale-[1.02]"
          >
            <MessageCircle size={16} />
            Hablemos por WhatsApp
          </a>

          {/* CV download */}
          <a
            href={personalInfo.resume}
            download
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-light hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
          >
            <Download size={15} />
            Descargar CV
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
