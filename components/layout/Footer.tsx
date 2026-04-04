"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-max px-4 md:px-8 lg:px-16 py-10 flex flex-col items-start gap-3">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          <Image
            src="/logopf.png"
            alt={personalInfo.name}
            width={120}
            height={120}
            className="object-contain"
          />
        </Link>
        <p className="text-xs font-light text-muted-foreground/60 w-full text-center">
          © {year} {personalInfo.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
