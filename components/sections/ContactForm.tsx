"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  twitter: <TwitterIcon size={18} />,
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        console.error("Error:", data.error);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  const whatsappUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`;

  return (
    <section className="section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <p className="text-sm text-primary font-light tracking-widest uppercase mb-3">
            {t.contact.label}
          </p>
          <h1 className="text-4xl md:text-5xl font-light font-[family-name:var(--font-heading)] mb-4 leading-tight">
            {t.contact.heading}{" "}
            <span className="gradient-text">{t.contact.headingAccent}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed font-light">
            {t.contact.subheading}
          </p>

          {/* WhatsApp shortcut */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-light hover:bg-primary/20 transition-colors"
          >
            <MessageCircle size={15} />
            {t.contact.whatsapp}
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-light">
                    {t.contact.emailLabel}
                  </p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-light hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card">
                <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={15} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1 font-light">
                    {t.contact.locationLabel}
                  </p>
                  <p className="text-sm font-light">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-5 rounded-xl border border-border bg-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <p className="text-sm font-light text-primary">
                  {personalInfo.available
                    ? t.contact.availableText
                    : "No disponible actualmente"}
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {t.contact.availableText}
              </p>
            </div>

            {/* Social */}
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-light">
                {t.contact.socialLabel}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                  >
                    {iconMap[link.icon] ?? link.label[0]}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[280px] sm:min-h-[400px] text-center gap-4 p-5 sm:p-8 rounded-2xl border border-primary/30 bg-primary/5">
                <CheckCircle size={44} className="text-primary" />
                <h3 className="text-xl font-light font-[family-name:var(--font-heading)]">
                  {t.contact.successTitle}
                </h3>
                <p className="text-muted-foreground font-light">
                  {t.contact.successText}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 px-6 py-2.5 rounded-full border border-primary/40 text-primary text-sm font-light hover:bg-primary/10 transition-colors"
                >
                  {t.contact.successBtn}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:gap-5 p-4 sm:p-6 md:p-8 rounded-2xl border border-border bg-card"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs text-muted-foreground uppercase tracking-wider font-light"
                    >
                      {t.contact.nameLabel} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.namePlaceholder}
                      className="px-4 py-3 rounded-xl bg-input border border-border text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs text-muted-foreground uppercase tracking-wider font-light"
                    >
                      {t.contact.emailFieldLabel} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.contact.emailPlaceholder}
                      className="px-4 py-3 rounded-xl bg-input border border-border text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs text-muted-foreground uppercase tracking-wider font-light"
                  >
                    {t.contact.subjectLabel}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t.contact.subjectPlaceholder}
                    className="px-4 py-3 rounded-xl bg-input border border-border text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs text-muted-foreground uppercase tracking-wider font-light"
                  >
                    {t.contact.messageLabel} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="px-4 py-3 rounded-xl bg-input border border-border text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive font-light">
                    {t.contact.errorText}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-light hover:opacity-90 glow-sm transition-all duration-200 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === "sending" ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      {t.contact.sending}
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      {t.contact.submit}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
