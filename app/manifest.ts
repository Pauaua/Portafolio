import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Paulina Acuña Paiva — Desarrolladora de Software",
    short_name: "Paulina Acuña",
    description:
      "Portfolio de Paulina Acuña Paiva, técnica en programación y análisis de sistemas: desarrollo de software (Java, Python, React, Next.js) y análisis de datos (SQL, Power BI).",
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
