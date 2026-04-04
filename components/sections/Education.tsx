"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="section-padding">
      <div className="container-max">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-primary font-light tracking-widest uppercase mb-3"
        >
          {t.education.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-light font-[family-name:var(--font-heading)] mb-12"
        >
          {t.education.heading} <span className="gradient-text">{t.education.headingAccent}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((item, i) => {
            const tx = t.education.items[i] ?? { degree: item.degree, description: item.description };
            return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 rounded-2xl border bg-card transition-colors ${
                item.highlight
                  ? "border-primary/40 bg-primary/3"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <GraduationCap size={16} className="text-primary" />
              </div>
              <p className="text-xs text-primary font-light mb-1 tracking-wide">{item.period}</p>
              <h3 className="font-light text-sm font-[family-name:var(--font-heading)] mb-1 leading-snug">
                {tx.degree}
              </h3>
              <p className="text-muted-foreground text-xs font-light mb-2">{item.institution}</p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed font-light">
                {tx.description}
              </p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
