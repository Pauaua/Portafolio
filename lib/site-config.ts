// URL base del sitio en producción — actualiza NEXT_PUBLIC_SITE_URL cuando tengas dominio propio
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mi-portfolio-pau.vercel.app";
