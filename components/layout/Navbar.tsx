"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/lib/data";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/components/ui/LanguageProvider";

export default function Navbar() {
  const pathname = usePathname();
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(personalInfo.whatsappMessage)}`;

  const navLinks = [
    { label: t.nav.about,      href: "/#about" },
    { label: t.nav.projects,   href: "/#projects" },
    { label: t.nav.experience, href: "/#experience" },
    { label: t.nav.education,  href: "/#education" },
    { label: t.nav.contact,    href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, lang]);

  return (
    <header
      className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-max flex items-center justify-between h-16 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/logopf.png"
            alt={personalInfo.name}
            width={120}
            height={120}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/contact"
                ? pathname === "/contact"
                : pathname === "/" && link.href.startsWith("/#");
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-sm font-light tracking-wide transition-colors duration-200 hover:text-primary ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: theme toggle + WhatsApp CTA */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-light border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-200"
          >
            <MessageCircle size={14} />
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <ul className="flex flex-col py-4 px-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block py-3 text-sm font-light text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-3 mt-1 border-t border-border"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-light text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle size={14} />
                  {t.nav.cta}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
