# Paulina Acuña Paiva — Portfolio

**Desarrolladora Full Stack** · Santiago, Chile

Portafolio personal construido con Next.js 16, React 19 y Tailwind CSS v4. Presenta proyectos reales, experiencia profesional y un formulario de contacto funcional. Diseño dark/light elegante con animaciones Framer Motion, cursor personalizado, internacionalización en tres idiomas y easter egg interactivo.

🔗 **[Ver en vivo →](https://portafolio-pauaua.vercel.app)**

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
| **Deploy** | Vercel |

---

## Características

- **Dark / Light mode** — toggle persistente con `localStorage`
- **i18n ES / EN / FR** — cambio de idioma sin recarga de página
- **Cursor personalizado** — dot + ring con estela de partículas y brillo lila
- **Modales de proyecto** — stack, bullets de impacto, decisión técnica y desafío resuelto
- **Formulario de contacto real** — envío a Gmail vía Resend API
- **Side navigation** — puntos de sección fijos con tooltips, solo visible en desktop
- **Easter egg** — escribe `hire me` en cualquier parte de la página
- **Favicon personalizado** — logo propio vía `app/icon.png` (Next.js App Router)

---

## Proyectos destacados

| Proyecto | Stack | Tipo |
|----------|-------|------|
| Automatizador de Facturas SII | Python · PyQt5 · Selenium · Pandas | Escritorio |
| CTRL — Gestión Usuarios/Proyectos | Java · Spring Boot · Thymeleaf · H2 | Web |
| PlantiDex Mobile | Ionic · Angular · Capacitor · TypeScript | Móvil |
| Automatizador de Boletas SII | Python · PyQt5 · Selenium | Escritorio |

---

## Estructura del proyecto

```
├── app/                    # App Router de Next.js
│   ├── page.tsx            # Landing page
│   ├── contact/page.tsx    # Página de contacto
│   └── api/contact/        # API route — Resend
├── components/
│   ├── sections/           # Hero, About, Skills, Projects, Experience, Education...
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # ProjectModal, CustomCursor, EasterEgg, SideNav...
├── lib/
│   ├── data.ts             # Fuente única de datos del portfolio
│   └── translations.ts     # Textos en ES / EN / FR
└── public/                 # Assets estáticos
```

---

## Variables de entorno

Para el formulario de contacto se requiere una API key de [Resend](https://resend.com):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

---

## Contacto

**paulinefugit@gmail.com** · [LinkedIn](https://www.linkedin.com/in/paulinefugit/) · [GitHub](https://github.com/Pauaua)
