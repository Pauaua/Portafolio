"use client";

import { useLanguage } from "@/components/ui/LanguageProvider";

export default function LanguageBanner() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-8 flex items-center justify-end px-4 md:px-8 lg:px-16 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="flex items-center gap-1 text-xs font-light text-muted-foreground">
        <button
          onClick={() => setLang("es")}
          className={`px-2 py-0.5 rounded transition-colors ${
            lang === "es"
              ? "text-primary font-medium"
              : "hover:text-foreground"
          }`}
        >
          ES
        </button>
        <span className="opacity-30">|</span>
        <button
          onClick={() => setLang("en")}
          className={`px-2 py-0.5 rounded transition-colors ${
            lang === "en"
              ? "text-primary font-medium"
              : "hover:text-foreground"
          }`}
        >
          EN
        </button>
        <span className="opacity-30">|</span>
        <button
          onClick={() => setLang("fr")}
          className={`px-2 py-0.5 rounded transition-colors ${
            lang === "fr"
              ? "text-primary font-medium"
              : "hover:text-foreground"
          }`}
        >
          FR
        </button>
      </div>
    </div>
  );
}
