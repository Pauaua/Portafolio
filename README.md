# Portafolio
# Paulina Acuña Paiva 

**Desarrolladora Full Stack** · Santiago, Chile

Portafolio personal construido con Next.js 16, React 19 y Tailwind CSS v4. Presenta proyectos reales, experiencia profesional y un formulario de contacto funcional. Diseño dark/light elegante con animaciones Framer Motion, cursor personalizado, internacionalización en tres idiomas y easter egg interactivo.

🔗 **[Ver en vivo →](https://paulinaap.vercel.app/)**

---

## Sobre el proyecto

Este portafolio fue diseñado pensando en reclutadores técnicos: cada proyecto incluye stack detallado, rol específico, decisiones técnicas y desafíos resueltos — no solo una descripción genérica. La interfaz respeta estándares de accesibilidad, es completamente responsiva y está optimizada para SEO con metadatos y favicon personalizado.

---

## Stack tecnológico

| Capa | Tecnologías |
|------|------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI** | React 19, Tailwind CSS v4, Framer Motion |
| **Lenguaje** | TypeScript |
| **Internacionalización** | Context API — ES / EN / FR |
| **Emails** | Resend API |
| **Fuentes** | Geist (headings) + Geist Mono (code) |
| **SEO** | `robots.ts`, `sitemap.ts`, `manifest.ts`, OG image dinámica, JSON-LD |
| **Deploy** | Vercel |

---

## Características

- **Dark / Light mode** — toggle persistente con `localStorage`
- **i18n ES / EN / FR** — cambio de idioma sin recarga de página, incluyendo modales de proyecto con stack, bullets, decisión técnica y desafío traducidos
- **Cursor personalizado** — dot + ring con estela de partículas y brillo lila
- **Modales de proyecto** — stack, bullets de impacto, decisión técnica y desafío resuelto
- **CV bilingüe** — botón de descarga con selector Español / English
- **Formulario de contacto real** — envío a Gmail vía Resend API
- **Side navigation** — puntos de sección fijos con tooltips, solo visible en desktop
- **Easter egg** — escribe `hire me` en cualquier parte de la página y te sorprenderá 
- **Favicon personalizado** — logo propio vía `app/icon.png` (Next.js App Router)
- **SEO técnico** — robots, sitemap, manifest, Open Graph dinámico y datos estructurados JSON-LD

---

## Proyectos destacados

| Proyecto | Stack | Tipo |
|----------|-------|------|
| StayCool — Agenda Personal | React Native · Expo · TypeScript · Supabase | Móvil |
| Asegalbyf Asesorías | Next.js · Prisma · Transbank · PostgreSQL | Web / E-commerce |
| ALT — Asamblea Las Torres | Next.js · TypeScript · Prisma · Tailwind CSS | Web |
| Aguas Mi Sur | Next.js 16 · Prisma 7 · PostgreSQL (Neon) | Web |
| Suite de Automatización SII | Python · PyQt5 · Selenium · Pandas | Escritorio |
| PhantasiaWeb | Next.js 16 · TypeScript · Prisma · i18n | Web |
| Eclipse FM 107.7 | Next.js 14 · NextAuth v5 · Prisma · PostgreSQL | Web |
| PlantiDex Mobile | Ionic · Angular · Capacitor · TypeScript | Móvil |

---

## Estructura del proyecto

```
├── app/                    # App Router de Next.js
│   ├── page.tsx            # Landing page
│   ├── contact/page.tsx    # Página de contacto
│   ├── api/contact/        # API route — Resend
│   ├── robots.ts           # SEO — robots.txt dinámico
│   ├── sitemap.ts          # SEO — sitemap dinámico
│   ├── manifest.ts         # PWA manifest
│   └── opengraph-image.tsx # OG image dinámica
├── components/
│   ├── sections/           # Hero, About, Skills, Projects, Experience, Education...
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # ProjectModal, ResumeDownloadButton, CustomCursor, EasterEgg, SideNav...
├── lib/
│   ├── data.ts             # Fuente única de datos del portfolio
│   ├── site-config.ts      # Configuración de dominio/SEO
│   └── translations.ts     # Textos en ES / EN / FR
└── public/                 # Assets estáticos (incluye CV en español e inglés)
```



## Contacto

**paulinefugit@gmail.com** · [LinkedIn](https://www.linkedin.com/in/paulinefugit/) · [GitHub](https://github.com/Pauaua) [Currículum Virtual](https://paulinaap.vercel.app/)
