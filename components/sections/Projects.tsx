"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects, personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";
import ProjectModal from "@/components/ui/ProjectModal";

type Project = (typeof projects)[number];

export default function Projects() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-primary font-light tracking-widest uppercase mb-3"
        >
          {t.projects.label}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-light font-[family-name:var(--font-heading)] mb-12"
        >
          {t.projects.heading}{" "}
          <span className="gradient-text">{t.projects.headingAccent}</span>
        </motion.h2>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {featuredProjects.map((project, i) => {
            const tx = t.projects.items[project.id - 1] ?? { title: project.title, description: project.description };
            return (
              <FeaturedCard
                key={project.id}
                project={project}
                tx={tx}
                index={i}
                tModal={t.projectModal}
                tProjects={t.projects}
                onDetails={() => setSelected(project)}
              />
            );
          })}
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((project, i) => {
              const tx = t.projects.items[project.id - 1] ?? { title: project.title, description: project.description };
              return (
                <SmallCard
                  key={project.id}
                  project={project}
                  tx={tx}
                  index={i}
                  tModal={t.projectModal}
                  tProjects={t.projects}
                  onDetails={() => setSelected(project)}
                />
              );
            })}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={`https://github.com/${personalInfo.github ?? "tunombre"}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-light text-muted-foreground hover:text-primary transition-colors group"
          >
            {t.projects.moreOnGithub}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

/* ─── Featured card ──────────────────────────────────────── */
function FeaturedCard({
  project, tx, index, tModal, tProjects, onDetails,
}: {
  project: Project;
  tx: { title: string; description: string };
  index: number;
  tModal: { viewRepo: string; viewLive: string; viewDetail: string };
  tProjects: { live: string; code: string };
  onDetails: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 hover:glow-sm"
    >
      {/* Top strip with number */}
      <div className="h-1.5 w-full bg-gradient-to-r from-primary/60 via-primary to-primary/30" />

      <div className="p-4 md:p-6 flex flex-col flex-1">
        {/* Number + role */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-light text-primary/20 font-[family-name:var(--font-heading)]">
            0{project.id}
          </span>
          <span className="text-[10px] font-light text-primary border border-primary/30 bg-primary/5 px-2.5 py-1 rounded-full">
            {project.role.split("—")[0].trim()}
          </span>
        </div>

        {/* Title + description */}
        <h3 className="text-base font-light mb-2 group-hover:text-primary transition-colors font-[family-name:var(--font-heading)]">
          {tx.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 font-light line-clamp-2">
          {tx.description}
        </p>

        {/* Stack grouped */}
        <div className="flex flex-col gap-2 mb-5">
          {(["frontend", "backend", "database"] as const).map((key) => {
            const items = project.stack[key];
            if (!items || items.length === 0) return null;
            return (
              <div key={key} className="flex flex-wrap gap-1.5">
                {items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] rounded-full border border-border bg-secondary text-secondary-foreground font-light"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-light"
            >
              <GithubIcon size={13} />
              {"repoUrl2" in project ? "Facturas" : tProjects.code}
            </a>
          )}
          {"repoUrl2" in project && (project as typeof project & { repoUrl2: string }).repoUrl2 && (
            <a
              href={(project as typeof project & { repoUrl2: string }).repoUrl2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-light"
            >
              <GithubIcon size={13} />
              Boletas
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-light"
            >
              <ExternalLink size={13} />
              {tProjects.live}
            </a>
          )}
          <button
            onClick={onDetails}
            className="ml-auto flex items-center gap-1 text-xs text-primary font-light hover:gap-2 transition-all"
          >
            {tModal.viewDetail}
            <ArrowUpRight size={12} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Small card ─────────────────────────────────────────── */
function SmallCard({
  project, tx, index, tModal, tProjects, onDetails,
}: {
  project: Project;
  tx: { title: string; description: string };
  index: number;
  tModal: { viewRepo: string; viewLive: string; viewDetail: string };
  tProjects: { live: string; code: string };
  onDetails: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col p-4 md:p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-sm font-light group-hover:text-primary transition-colors font-[family-name:var(--font-heading)]">
          {tx.title}
        </h3>
        <span className="flex-shrink-0 text-[10px] font-light text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 rounded-full whitespace-nowrap">
          {project.role.split("—")[0].trim()}
        </span>
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed mb-3 flex-1 font-light line-clamp-2">
        {tx.description}
      </p>

      {/* Stack flat */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[11px] rounded-full bg-primary/8 text-primary font-light"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-3 border-t border-border">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <GithubIcon size={13} />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={13} />
          </a>
        )}
        <button
          onClick={onDetails}
          className="ml-auto flex items-center gap-1 text-xs text-primary font-light hover:gap-2 transition-all"
        >
          {tModal.viewDetail}
          <ArrowUpRight size={12} />
        </button>
      </div>
    </motion.article>
  );
}
