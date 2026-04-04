"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-primary font-light tracking-widest uppercase mb-3"
        >
          {t.skills.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-light font-[family-name:var(--font-heading)] mb-12"
        >
          {t.skills.heading} <span className="gradient-text">{t.skills.headingAccent}</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors"
            >
              <h3 className="text-xs font-light text-primary uppercase tracking-widest mb-4">
                {t.skills.categories[group.category as keyof typeof t.skills.categories] ?? group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full border border-border bg-secondary text-secondary-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default font-light"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
