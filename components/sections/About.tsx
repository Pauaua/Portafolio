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
                {/* Reemplaza con <Image> cuando tengas foto */}
                <span className="text-6xl select-none">👤</span>
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
