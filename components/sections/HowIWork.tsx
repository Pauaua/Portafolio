"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/ui/LanguageProvider";

const ICONS = ["💡", "🎨", "⚙️", "🖥️", "🚀"];

export default function HowIWork() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-padding">
      <div className="container-max">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-primary font-light tracking-widest uppercase mb-3"
        >
          {t.process.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-light font-[family-name:var(--font-heading)] mb-14"
        >
          {t.process.heading}{" "}
          <span className="gradient-text">{t.process.headingAccent}</span>
        </motion.h2>

        {/* Flujo de pasos */}
        <div className="relative flex flex-col md:flex-row gap-6 md:gap-0">
          {t.process.steps.map((step, i) => (
            <div key={i} className="relative flex-1 flex flex-col md:items-center">

              {/* Línea conectora (desktop) */}
              {i < t.process.steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                  className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-px origin-left"
                  style={{
                    background: "linear-gradient(90deg, var(--primary), transparent)",
                    opacity: 0.35,
                  }}
                />
              )}

              {/* Línea conectora (mobile) */}
              {i < t.process.steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                  className="md:hidden absolute left-7 top-[56px] w-px h-6 origin-top"
                  style={{
                    background: "linear-gradient(180deg, var(--primary), transparent)",
                    opacity: 0.4,
                  }}
                />
              )}

              {/* Tarjeta del paso */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex md:flex-col md:items-center gap-4 md:gap-3 md:text-center md:px-3"
              >
                {/* Número + emoji */}
                <div className="flex-shrink-0 relative">
                  <div className="w-14 h-14 rounded-2xl border border-primary/30 bg-card flex items-center justify-center text-2xl"
                    style={{ boxShadow: "0 0 18px -4px var(--primary)" }}
                  >
                    {ICONS[i]}
                  </div>
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-medium flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-light text-sm font-[family-name:var(--font-heading)] mb-1 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
