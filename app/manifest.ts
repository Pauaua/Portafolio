import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paulina Acuña Paiva — Desarrolladora Full Stack",
    short_name: "Paulina Acuña",
    description:
      "Portfolio de Paulina Acuña Paiva, desarrolladora Full Stack especialista en Java Spring Boot, Python, React y Next.js.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090f",
    theme_color: "#b97bf7",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
