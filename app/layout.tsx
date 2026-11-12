import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";
import LanguageBanner from "@/components/ui/LanguageBanner";
import { LanguageProvider } from "@/components/ui/LanguageProvider";
import CustomCursor from "@/components/ui/CustomCursor";
import EasterEgg from "@/components/ui/EasterEgg";
import { personalInfo, socialLinks } from "@/lib/data";
import { SITE_URL } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500"],
});

const title = "Paulina Acuña Paiva — Desarrolladora de Software";
const description =
  "Técnica en Programación y Análisis de Sistemas. Desarrollo de software (Java, Python, React, Next.js) y análisis de datos (SQL, ETL, Power BI). Santiago, Chile.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s — Paulina Acuña Paiva",
  },
  description,
  keywords: [
    "desarrolladora de Software",
    "desarrolladora de Software Chile",
    "Java Spring Boot",
    "React",
    "Next.js",
    "Python",
    "SQL",
    "Power BI",
    "analista de datos",
    "técnica en programación y análisis de sistemas",
    "contratar desarrolladora",
    "portfolio desarrolladora",
    "Santiago Chile",
  ],
  authors: [{ name: personalInfo.name, url: SITE_URL }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: SITE_URL,
    siteName: `${personalInfo.name} — Portfolio`,
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090f" },
    { media: "(prefers-color-scheme: light)", color: "#faf8ff" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: SITE_URL,
  jobTitle: personalInfo.role,
  email: `mailto:${personalInfo.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  sameAs: socialLinks.map((link) => link.url),
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Python",
    "React",
    "Next.js",
    "TypeScript",
    "SQL",
    "ETL",
    "Power BI",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-sans)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <CustomCursor />
          <EasterEgg />
          <BackgroundSparkles />
          <LanguageBanner />
          {/* pt-8 para compensar la barra de idioma (32px) */}
          <div className="pt-8 flex flex-col flex-1">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
