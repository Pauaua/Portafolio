"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/ui/LanguageProvider";

const sections = [
  { id: "hero",       labelKey: "hero" },
  { id: "about",      labelKey: "about" },
  { id: "skills",     labelKey: "skills" },
  { id: "projects",   labelKey: "projects" },
  { id: "experience", labelKey: "experience" },
  { id: "education",  labelKey: "education" },
  { id: "process",    labelKey: "process" },
  { id: "cta",        labelKey: "cta" },
];

const labelMap: Record<string, Record<string, string>> = {
  es: {
    hero:       "Inicio",
    about:      "Sobre mí",
    skills:     "Habilidades",
    projects:   "Proyectos",
    experience: "Experiencia",
    education:  "Formación",
    process:    "Mi proceso",
    cta:        "Contacto",
  },
  en: {
    hero:       "Home",
    about:      "About",
    skills:     "Skills",
    projects:   "Projects",
    experience: "Experience",
    education:  "Education",
    process:    "My process",
    cta:        "Contact",
  },
  fr: {
    hero:       "Accueil",
    about:      "À propos",
    skills:     "Compétences",
    projects:   "Projets",
    experience: "Expérience",
    education:  "Formation",
    process:    "Mon processus",
    cta:        "Contact",
  },
};

export default function SideNav() {
  const { lang } = useLanguage();
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  const labels = labelMap[lang] ?? labelMap.es;

  return (
    <nav
      className={`fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Section navigation"
    >
      {sections.map(({ id, labelKey }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={labels[labelKey]}
          aria-label={labels[labelKey]}
          className="group relative flex items-center justify-end gap-2"
        >
          {/* Label tooltip */}
          <span className="absolute right-6 whitespace-nowrap text-xs font-light text-muted-foreground bg-card border border-border px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            {labels[labelKey]}
          </span>

          {/* Dot */}
          <span
            className={`block rounded-full border transition-all duration-300 ${
              active === id
                ? "w-3.5 h-3.5 bg-primary border-primary shadow-[0_0_10px_var(--primary)]"
                : "w-3 h-3 bg-transparent border-muted-foreground/40 group-hover:border-primary/70 group-hover:bg-primary/20"
            }`}
          />
        </button>
      ))}
    </nav>
  );
}
