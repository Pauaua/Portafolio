"use client";

import { motion } from "framer-motion";
import { MessageCircle, FileDown } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function ContactCTA() {
  const whatsappUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`;

  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border bg-card overflow-hidden p-10 md:p-16 text-center"
        >
          {/* Glow center */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <p className="text-sm text-primary font-light tracking-widest uppercase mb-4">
              ¿Buscas una desarrolladora?
            </p>
            <h2 className="text-3xl md:text-5xl font-light font-[family-name:var(--font-heading)] mb-5 leading-tight">
              Estoy lista para
              <br />
              <span className="gradient-text">sumarme a tu equipo</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed font-light">
              Disponible para posiciones full-time, part-time y proyectos
              freelance. Con experiencia en Java, Spring Boot, Python y React —
              y ganas de seguir creciendo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-light hover:opacity-90 glow transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle size={16} />
                Escríbeme por WhatsApp
              </a>
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-light hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              >
                <FileDown size={16} />
                Descargar CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
