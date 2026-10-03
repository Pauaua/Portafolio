# Portafolio — Paulina Acuña Paiva

**Desarrolladora Full Stack** · Santiago, Chile

Portafolio personal construido con Next.js 16, React 19 y Tailwind CSS v4. Presenta proyectos reales, experiencia profesional y un formulario de contacto funcional. Diseño dark/light con animaciones de Framer Motion, cursor personalizado, internacionalización en tres idiomas y un easter egg interactivo.

🔗 **[Ver en vivo →](https://paulinaap.vercel.app/)**

---

## Sobre el proyecto

Este portafolio está pensado para reclutadores técnicos: cada proyecto incluye stack detallado, rol específico, decisiones técnicas y desafíos resueltos, no solo una descripción genérica. La interfaz es completamente responsiva, cuida la accesibilidad y está optimizada para SEO.

---

## Stack tecnológico

| Capa | Tecnologías |
|------|-------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **UI** | React 19, Tailwind CSS v4, Framer Motion, Radix UI |
| **Lenguaje** | TypeScript |
| **Internacionalización** | Context API — ES / EN / FR |
| **Emails** | Resend API |
| **Fuentes** | Geist (headings) + Geist Mono (código) |
| **SEO** | `robots.ts`, `sitemap.ts`, `manifest.ts`, OG image dinámica, JSON-LD |
| **Deploy** | Vercel |

---

## Características

- **Dark / Light mode** — toggle persistente con `localStorage`
- **i18n ES / EN / FR** — cambio de idioma sin recargar la página, incluidos los modales de proyecto
- **Cursor personalizado** — dot + ring con estela de partículas y brillo lila
- **Modales de proyecto** — stack, bullets de impacto, decisión técnica y desafío resuelto
- **CV bilingüe** — botón de descarga con selector Español / English
- **Formulario de contacto real** — envío de correos vía Resend API
- **Side navigation** — puntos de sección fijos con tooltips (solo desktop)
- **Easter egg** — escribe `hire me` en cualquier parte de la página 👀
- **Favicon personalizado** — logo propio vía `app/icon.png`
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

---

## Estructura del proyecto

```
├── app/                    # App Router de Next.js
│   ├── page.tsx            # Landing page
│   ├── contact/page.tsx    # Página de contacto
│   ├── api/contact/        # API route — envío con Resend
│   ├── robots.ts           # SEO — robots.txt dinámico
│   ├── sitemap.ts          # SEO — sitemap dinámico
│   ├── manifest.ts         # PWA manifest
│   └── opengraph-image.tsx # OG image dinámica
├── components/
│   ├── sections/           # Hero, About, Skills, HowIWork, Projects, Experience, Education, Contact...
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # ProjectModal, ResumeDownloadButton, CustomCursor, EasterEgg, SideNav...
├── lib/
│   ├── data.ts             # Fuente única de datos del portafolio
│   ├── site-config.ts      # Configuración de dominio / SEO
│   └── translations.ts     # Textos en ES / EN / FR
└── public/                 # Assets estáticos (incluye CV en español e inglés)
```

---

## Ejecución local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

Variables de entorno (`.env.local`):

| Variable | Descripción |
|----------|-------------|
| `RESEND_API_KEY` | API key de Resend para el formulario de contacto |
| `CONTACT_TO_EMAIL` | Correo que recibe los mensajes (opcional) |
| `NEXT_PUBLIC_SITE_URL` | URL pública del sitio, usada para SEO y Open Graph |

---

## Declaración de uso de IA

La inteligencia artificial forma parte de mi flujo de trabajo diario como desarrolladora. Utilizo **Claude** (Anthropic) como un asistente técnico que me permite trabajar con mayor agilidad, sin delegar en él el criterio ni la autoría de mis soluciones.

**Cómo la incorporo en mi día a día:**

- **Agilizar tareas repetitivas** — generación de código boilerplate, configuraciones, tipados y estructuras base que no aportan valor diferencial.
- **Testing y depuración** — redacción de casos de prueba, análisis de errores y búsqueda de casos límite que podrían pasar desapercibidos.
- **Revisión de código** — una segunda mirada para detectar inconsistencias, oportunidades de refactorización y posibles mejoras de rendimiento.
- **Documentación y traducción** — redacción de READMEs, comentarios técnicos y textos en distintos idiomas.
- **Aprendizaje continuo** — consulta de documentación, comparación de enfoques y exploración de nuevas tecnologías.

**Lo que sigue siendo mío:** las ideas, el análisis del problema, la arquitectura, las decisiones técnicas, el código central y la infraestructura de cada proyecto nacen de mi propio razonamiento y trabajo. Toda propuesta generada por la IA la reviso, comprendo y adapto antes de incorporarla, porque soy yo quien responde por la calidad, la seguridad y el funcionamiento de lo que entrego.

Entiendo la IA como una herramienta que potencia mi trabajo, no como un reemplazo del criterio profesional.

---

## Contacto

**paulinefugit@gmail.com** · [LinkedIn](https://www.linkedin.com/in/paulinefugit/) · [GitHub](https://github.com/Pauaua) · [Portafolio](https://paulinaap.vercel.app/)
