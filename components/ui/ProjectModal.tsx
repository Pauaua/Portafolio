"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Lightbulb, Zap } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { useLanguage } from "@/components/ui/LanguageProvider";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

interface Props {
  project: Project | null;
  onClose: () => void;
}

const stackSections = ["frontend", "backend", "database", "tools"] as const;

export default function ProjectModal({ project, onClose }: Props) {
  const { t } = useLanguage();

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  const stackLabel: Record<string, string> = {
    frontend:  t.projectModal.frontend,
    backend:   t.projectModal.backend,
    database:  t.projectModal.database,
    tools:     t.projectModal.tools,
  };

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[200] bg-background/75 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-5 border-b border-border bg-card">
                <div>
                  <p className="text-xs text-primary font-light tracking-widest uppercase mb-1">
                    {t.projectModal.role}
                  </p>
                  <h2 className="text-xl font-light font-[family-name:var(--font-heading)] leading-snug">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-light mt-0.5">
                    {project.role}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label={t.projectModal.close}
                  className="flex-shrink-0 mt-1 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 flex flex-col gap-7">
                {/* Descripción */}
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Stack */}
                <div>
                  <h3 className="text-xs text-primary font-light tracking-widest uppercase mb-3">
                    {t.projectModal.stack}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {stackSections.map((key) => {
                      const items = project.stack[key];
                      if (!items || items.length === 0) return null;
                      return (
                        <div key={key} className="flex flex-col gap-1.5">
                          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-light">
                            {stackLabel[key]}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {items.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 text-xs rounded-full border border-border bg-secondary text-secondary-foreground font-light"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bullets de impacto */}
                <div>
                  <h3 className="text-xs text-primary font-light tracking-widest uppercase mb-3 flex items-center gap-2">
                    <CheckCircle2 size={12} />
                    {t.projectModal.whatIDid}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground font-light leading-relaxed">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decisión técnica + Desafío */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <h3 className="text-xs text-primary font-light tracking-widest uppercase mb-2 flex items-center gap-1.5">
                      <Lightbulb size={12} />
                      {t.projectModal.decision}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      {project.decision}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-border bg-background">
                    <h3 className="text-xs text-primary font-light tracking-widest uppercase mb-2 flex items-center gap-1.5">
                      <Zap size={12} />
                      {t.projectModal.challenge}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-light">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                {/* Links */}
                {(project.repoUrl || project.liveUrl) && (
                  <div className="flex gap-3 pt-1">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-light text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                      >
                        <GithubIcon size={14} />
                        {t.projectModal.viewRepo}
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-sm font-light text-primary hover:bg-primary/10 transition-colors"
                      >
                        <ExternalLink size={14} />
                        {t.projectModal.viewLive}
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
