"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-primary font-light tracking-widest uppercase mb-3"
        >
          {t.experience.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-light font-[family-name:var(--font-heading)] mb-12"
        >
          {t.experience.heading}{" "}
          <span className="gradient-text">{t.experience.headingAccent}</span>
        </motion.h2>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/15 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-7">
            {experience.map((job, i) => {
              const tx = t.experience.items[i] ?? { role: job.role, description: job.description };
              return (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-primary/30 bg-card flex items-center justify-center flex-shrink-0 mt-1">
                    <Briefcase size={15} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-light text-base font-[family-name:var(--font-heading)]">
                        {tx.role}
                      </h3>
                      <p className="text-primary text-sm font-light">{job.company}</p>
                    </div>
                    <span className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-full whitespace-nowrap self-start font-light">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-light">
                    {tx.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-primary/8 text-primary border border-primary/15 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
