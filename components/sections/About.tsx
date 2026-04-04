"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="text-sm text-primary font-light tracking-widest uppercase mb-3"
        >
          {t.about.label}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-light font-[family-name:var(--font-heading)] mb-6 leading-tight"
            >
              {t.about.heading}{" "}
              <span className="gradient-text">{t.about.headingAccent}</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed text-base md:text-lg mb-4 font-light"
            >
              {t.about.bio}
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="text-muted-foreground/80 leading-relaxed text-sm mb-6 font-light"
            >
              {t.about.extra}
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-2 text-sm font-light text-muted-foreground">
                <MapPin size={14} className="text-primary flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-light text-muted-foreground">
                <Mail size={14} className="text-primary flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full border border-primary/10" />
              <div className="absolute inset-8 rounded-full overflow-hidden bg-secondary border-2 border-primary/30 glow-sm flex items-center justify-center">
                {/* Ilustración conceptual — reemplazar con foto cuando esté disponible */}
                <svg
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full p-5"
                  aria-hidden="true"
                >
                  {/* Fondo suave */}
                  <circle cx="100" cy="100" r="90" style={{ fill: "color-mix(in srgb, var(--color-primary) 8%, transparent)" }} />

                  {/* Ventana de terminal */}
                  <rect x="30" y="48" width="140" height="104" rx="10"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 10%, transparent)", stroke: "color-mix(in srgb, var(--color-primary) 30%, transparent)", strokeWidth: 1.5 }} />
                  {/* Barra de título */}
                  <rect x="30" y="48" width="140" height="24" rx="10"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 22%, transparent)" }} />
                  <rect x="30" y="60" width="140" height="12"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 22%, transparent)" }} />
                  {/* Dots */}
                  <circle cx="46" cy="60" r="4" style={{ fill: "color-mix(in srgb, var(--color-primary) 70%, transparent)" }} />
                  <circle cx="60" cy="60" r="4" style={{ fill: "color-mix(in srgb, var(--color-primary) 40%, transparent)" }} />
                  <circle cx="74" cy="60" r="4" style={{ fill: "color-mix(in srgb, var(--color-primary) 25%, transparent)" }} />

                  {/* Líneas de código */}
                  <text x="42" y="92" fontSize="10" fontFamily="monospace"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 90%, transparent)" }}>❯ const dev =</text>
                  <text x="42" y="107" fontSize="9" fontFamily="monospace"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 65%, transparent)" }}>{`  "full stack";`}</text>
                  <text x="42" y="122" fontSize="9" fontFamily="monospace"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 50%, transparent)" }}>{`// Java · Python · React`}</text>
                  <text x="42" y="137" fontSize="9" fontFamily="monospace"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 40%, transparent)" }}>{`// Next.js · Spring Boot`}</text>

                  {/* Cursor */}
                  <rect x="42" y="143" width="7" height="9" rx="1"
                    style={{ fill: "color-mix(in srgb, var(--color-primary) 75%, transparent)" }} />

                  {/* Órbita decorativa */}
                  <circle cx="100" cy="100" r="94" strokeWidth="0.5" strokeDasharray="4 6"
                    style={{ stroke: "color-mix(in srgb, var(--color-primary) 15%, transparent)" }} />
                </svg>
              </div>
              {personalInfo.available && (
                <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-light px-3 py-1.5 rounded-full shadow-lg">
                  {t.about.openToWork}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
