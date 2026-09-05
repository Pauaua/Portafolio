"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/data";

interface Props {
  className: string;
  icon: React.ReactNode;
  label: string;
}

export default function ResumeDownloadButton({ className, icon, label }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button type="button" onClick={() => setOpen((v) => !v)} className={className}>
        {icon}
        {label}
      </button>

      {open && (
        <div className="absolute z-20 top-full mt-2 left-1/2 -translate-x-1/2 w-40 rounded-xl border border-border bg-card shadow-lg overflow-hidden">
          <a
            href={personalInfo.resume}
            download
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm font-light text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
          >
            Español
          </a>
          <a
            href={personalInfo.resumeEn}
            download
            onClick={() => setOpen(false)}
            className="block px-4 py-2.5 text-sm font-light text-foreground hover:bg-primary/10 hover:text-primary transition-colors border-t border-border"
          >
            English
          </a>
        </div>
      )}
    </div>
  );
}
