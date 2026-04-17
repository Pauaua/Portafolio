"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, FileDown, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function ContactCTA() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`;

  return (
    <section id="cta" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-border bg-card overflow-hidden p-6 sm:p-10 md:p-16 text-center"
        >
          {/* Glow center */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[100px]" />
          </div>

          <div className="relative z-10">
            <p className="text-sm text-primary font-light tracking-widest uppercase mb-4">
              {t.cta.label}
            </p>
            <h2 className="text-3xl md:text-5xl font-light font-[family-name:var(--font-heading)] mb-5 leading-tight">
              {t.cta.heading}
              <br />
              <span className="gradient-text">{t.cta.headingAccent}</span>
            </h2>


            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-light hover:opacity-90 glow transition-all duration-200 hover:scale-[1.02]"
              >
                <MessageCircle size={16} />
                {t.cta.btn1}
              </a>
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-light hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
              >
                <FileDown size={16} />
                {t.cta.btn2}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-primary/40 text-primary font-light hover:bg-primary/10 hover:border-primary transition-all duration-200"
              >
                <Mail size={16} />
                {t.cta.btn3}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
