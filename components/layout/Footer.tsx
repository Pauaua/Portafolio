import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/SocialIcons";
import { personalInfo, socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <GithubIcon size={18} />,
  linkedin: <LinkedinIcon size={18} />,
  twitter: <TwitterIcon size={18} />,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container-max px-4 md:px-8 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link
              href="/"
              className="text-base font-semibold font-[family-name:var(--font-heading)] gradient-text"
            >
              {personalInfo.name.split(" ")[0]}
              <span className="text-primary">.</span>
            </Link>
            <p className="text-xs font-light text-muted-foreground">
              {personalInfo.role}
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {iconMap[link.icon] ?? link.label}
              </a>
            ))}
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs font-light text-muted-foreground">
            © {year} {personalInfo.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
