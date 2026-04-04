import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import BackgroundSparkles from "@/components/ui/BackgroundSparkles";
import LanguageBanner from "@/components/ui/LanguageBanner";
import { LanguageProvider } from "@/components/ui/LanguageProvider";

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

export const metadata: Metadata = {
  title: "Paulina Acuña — Desarrolladora Full Stack",
  description:
    "Desarrolladora Full Stack disponible para contratación. Especialista en Java Spring Boot, Python, React y Next.js. Santiago, Chile.",
  keywords: [
    "desarrolladora full stack",
    "Java Spring Boot",
    "React",
    "Next.js",
    "contratar desarrolladora",
    "Chile",
  ],
  authors: [{ name: "Paulina Acuña Paiva" }],
  openGraph: {
    title: "Paulina Acuña — Desarrolladora Full Stack",
    description:
      "Disponible para posiciones full-time y freelance. Full stack con Java, Python y React.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen flex flex-col font-[family-name:var(--font-sans)]">
        <LanguageProvider>
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
