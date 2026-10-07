// ============================================================
// PORTFOLIO DATA -- Edición de contenido del portafolio
// ============================================================

export const personalInfo = {
  name: "Paulina Acuña Paiva",
  role: "Desarrolladora de Software",
  // Hero tagline
  tagline:
    "Construyo productos digitales que funcionan — del backend al frontend, con metodologías claras permitiendo un código limpio y eficiente.",
  // About bio 
  bio: "Desarrolladora de Software con dominio real de frontend, backend, aplicaciones móviles híbridas y nativas, y automatización de procesos (Next.js, Spring Boot, Python, Ionic, React Native), respaldado por más de una decena de proyectos productivos entregados en menos de dos años de formación formal. Ocho años previos como docente de Filosofía y directora de proyectos aportan comunicación técnica clara, gestión ágil y experiencia coordinando equipos y clientes — hoy aplicadas a levantar requerimientos y entregar software de principio a fin.",
  location: "Santiago, RM. Chile",
  email: "paulinefugit@gmail.com",
  phone: "56974476368",
  whatsappMessage: "Hola Paulina, vi tu portfolio y me gustaría hablar contigo.",
  github: "Pauaua",
  available: true,
  avatar: "/images/avatar.jpg", // FALTA PONER IMAGEN
  resume: "/CV-Paulina-Acuna-Paiva.pdf",
  resumeEn: "/CV-Paulina-Acuna_EN.pdf",
};

export const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/Pauaua",
    icon: "github",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/paulinefugit/",
    icon: "linkedin",
  },
];

export const skills = [
  {
    category: "Lenguajes & Frameworks",
    items: [
      "Java",
      "Python",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 / CSS3",
      "Spring Boot",
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "Expo",
      "Ionic / Angular",
      "Flask",
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "NativeWind",
      "Framer Motion",
    ],
  },
  {
    category: "Arquitectura & Patrones",
    items: ["Microservicios", "Spring Cloud", "Eureka", "API Gateway", "OpenFeign", "JWT", "REST", "Service Discovery", "CORS", "DDD", "MVC"],
  },
  {
    category: "Bases de Datos & ORM",
    items: ["MySQL", "PostgreSQL", "Oracle SQL", "Prisma", "SQLAlchemy", "JPA"],
  },
  {
    category: "State & Data",
    items: ["TanStack Query", "Zod"],
  },
  {
    category: "Cloud & Deploy",
    items: ["Vercel", "Railway", "Supabase", "Cloudflare", "Docker", "EAS Build"],
  },
  {
    category: "Testing & Monitoreo",
    items: ["Jest", "PostHog", "Sentry"],
  },
  {
    category: "Herramientas",
    items: ["Git", "VS Code", "Figma", "Maven", "Postman", "WordPress"],
  },
  {
    category: "Metodologías",
    items: ["Scrum", "Desarrollo Ágil", "Gestión de Proyectos"],
  },
];

export const projects = [
  {
    id: 11,
    title: "NotMubi — Plataforma de Streaming de Cine de Culto",
    description:
      "Plataforma de streaming full-stack para cine de culto, construida como arquitectura de microservicios con 5 servicios independientes (API Gateway, Discovery Server, Auth, Catalog, Subscription). Autenticación JWT centralizada en el Gateway con validación stateless entre servicios, comunicación entre microservicios vía OpenFeign + Eureka sin URLs hardcodeadas, y una base de datos PostgreSQL independiente por bounded context. Infraestructura reproducible con Docker Compose y frontend en React + Vite.",
    role: "Desarrolladora única — proyecto personal de portafolio",
    stack: {
      frontend: ["React 18", "Vite", "React Router", "Axios"],
      backend: ["Spring Boot 3.3.4", "Spring Cloud 2023.0.3", "Spring Cloud Gateway", "Netflix Eureka", "OpenFeign", "Spring Security", "Spring Data JPA", "jjwt 0.12.6"],
      database: ["PostgreSQL 16", "Hibernate 6.5"],
      tools: ["Docker", "Docker Compose", "Maven", "PgAdmin", "Git"],
    },
    bullets: [
      "Diseñé y construí una arquitectura de microservicios con 5 servicios independientes: API Gateway reactivo, Discovery Server (Eureka), Auth Service, Catalog Service y Subscription Service, cada uno con su propia base de datos PostgreSQL.",
      "Implementé autenticación JWT centralizada en el Gateway, con validación stateless por petición, propagación del contexto de usuario (userId, username, role) vía headers internos X-User-* y control de acceso por rol (USER vs ADMIN).",
      "Desarrollé comunicación entre servicios con OpenFeign + Eureka, eliminando URLs hardcodeadas: el Catalog Service compone respuestas enriquecidas llamando al Auth Service vía descubrimiento dinámico de servicios.",
      "Configuré CORS centralizado en el Gateway con CorsWebFilter reactivo y reglas de rutas públicas/privadas por filtro personalizado, y orquesté toda la infraestructura con Docker Compose (PostgreSQL + PgAdmin con múltiples bases de datos autogeneradas).",
    ],
    decision:
      "Opté por microservicios con Spring Cloud en lugar de un monolito para practicar los patrones reales de arquitecturas distribuidas: service discovery, API Gateway, seguridad centralizada y comunicación entre servicios sin acoplamiento por URLs. Cada servicio mantiene su propio bounded context y base de datos, respetando la independencia de despliegue y consistencia eventual.",
    challenge:
      "El mayor reto fue la depuración de problemas típicos de sistemas distribuidos: conflictos de puertos entre servicios, caché de Eureka con el orden de arranque, propagación correcta del contexto de usuario desde el JWT hasta los servicios internos, y configuración de CORS en un Gateway reactivo con filtros personalizados. También requirió ajustar la versión de Lombok y el annotation processor para compatibilidad con Java 21 en un proyecto multi-módulo Maven.",
    tags: ["Spring Boot", "Spring Cloud", "Microservicios", "JWT", "Docker", "React", "PostgreSQL"],
    liveUrl: "",
    repoUrl: "https://github.com/Pauaua/NotMubi",
    featured: true,
  },
  {
    id: 1,
    title: "Eclipse FM 107.7 — Web & Dashboard",
    description:
      "Plataforma web full-stack para Radio Eclipse FM 107.7 (Quilicura). Sitio público con reproductor de audio en vivo, chat integrado, grilla de programación semanal, carrusel de auspiciadores, blog y noticias. Panel de administración con 3 roles (Admin, SubAdmin, Team) para gestión completa de usuarios, programas, sponsors y contenidos. Autenticación con NextAuth v5 + Prisma Adapter + bcryptjs, base de datos PostgreSQL serverless (Neon), emails transaccionales con Resend y validación con Zod.",
    role: "Desarrolladora única — proyecto freelance",
    stack: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Next.js API Routes", "NextAuth v5", "Prisma ORM", "bcryptjs", "Resend", "Zod"],
      database: ["PostgreSQL", "Neon"],
      tools: ["Vercel", "Git"],
    },
    bullets: [
      "Implementé reproductor de audio streaming en tiempo real con chat integrado, permitiendo a los oyentes interactuar durante las transmisiones en vivo.",
      "Desarrollé dashboard de administración con roles diferenciados (Admin/SubAdmin/Team) para gestión de programas, sponsors, blog y noticias.",
      "Construí grilla de programación semanal, catálogo de programas y sección de noticias locales con sistema completo de gestión de contenidos.",
    ],
    decision:
      "Elegí NextAuth v5 para la autenticación del dashboard por su integración nativa con Next.js App Router y soporte flexible de providers. La separación entre sitio público y panel admin en la misma base de código simplifica el despliegue y mantenimiento.",
    challenge:
      "Mantener el reproductor de streaming activo entre navegaciones sin interrumpir la reproducción requirió un contexto global que persiste el estado del audio fuera del árbol de rutas, evitando que el componente se desmonte al cambiar de página.",
    tags: ["Next.js", "TypeScript", "NextAuth v5", "Prisma", "PostgreSQL", "Resend"],
    liveUrl: "https://eclipse-fm.vercel.app",
    repoUrl: "https://github.com/Pauaua/EclipseFM",
    featured: true,
  },
  {
    id: 9,
    title: "StayCool — Agenda Personal",
    description:
      "Aplicación móvil de agenda personal que registra bienestar, imagen personal, actividades sociales, higiene y gastos. Incluye suscripciones premium con RevenueCat, un sistema de recompensas gamificado (MOOney) para personalizar avatar, y 'Mi Resumen': generación de PDF con estadísticas de actividad. En desarrollo desde agosto 2026.",
    role: "Desarrolladora única — proyecto personal",
    stack: {
      frontend: ["React Native 0.81", "React 19", "Expo SDK 54", "TypeScript", "NativeWind", "React Navigation"],
      backend: ["Supabase (Auth, Storage, Edge Functions)", "TanStack Query"],
      database: ["PostgreSQL (Supabase)"],
      tools: ["EAS Build/Update", "RevenueCat", "PostHog", "Sentry"],
    },
    bullets: [
      "Diseñé arquitectura modular por features (bienestar, imagen, cabello, higiene, social, gastos, preferencias, notas) con patrón consistente types/services/hooks/screens en cada módulo.",
      "Implementé sistema de suscripciones premium (planes Basic y Full) con RevenueCat y recompensas gamificadas (MOOney) para personalización de avatar.",
      "Construí generación de PDF con estadísticas de actividad ('Mi Resumen'), notificaciones push locales y deep links para recuperación de contraseña.",
    ],
    decision:
      "Elegí Expo + React Native sobre desarrollo nativo separado para iOS/Android por la velocidad de iteración con EAS Build/Update, priorizando lanzar features rápido en una app aún en desarrollo activo.",
    challenge:
      "Mantener consistencia entre los múltiples módulos de feature (bienestar, imagen, higiene, etc.) exigió definir migraciones de base de datos numeradas y Edge Functions para operaciones sensibles, evitando lógica de negocio duplicada en el cliente.",
    tags: ["React Native", "Expo", "TypeScript", "Supabase", "Mobile"],
    liveUrl: "",
    repoUrl: "https://github.com/PauFugit/StayCool",
    featured: true,
  },
  {
    id: 8,
    title: "Asegalbyf Asesorías — E-commerce",
    description:
      "Plataforma e-commerce para venta de servicios de asesorías. Dashboard administrable para gestión de servicios y checkout con integración de pagos Transbank. Desarrollado en solitario en 3 semanas y desplegado en producción.",
    role: "Desarrolladora única — proyecto freelance",
    stack: {
      frontend: ["Next.js", "Tailwind CSS"],
      backend: ["Next.js API Routes", "Prisma ORM", "Transbank"],
      database: ["PostgreSQL"],
      tools: ["Vercel", "Git"],
    },
    bullets: [
      "Desarrollé dashboard administrable para gestión de servicios ofrecidos por la correduría.",
      "Integré checkout con pasarela de pagos Transbank para procesar transacciones en producción.",
      "Entregué el proyecto completo en solitario en un plazo de 3 semanas, desde el levantamiento de requerimientos hasta el despliegue.",
    ],
    decision:
      "Prioricé Prisma ORM sobre queries directas para mantener un esquema de datos type-safe y acelerar el desarrollo dado el plazo ajustado de 3 semanas.",
    challenge:
      "La integración con la API de Transbank exigió manejar cuidadosamente los estados de transacción (aprobada, rechazada, anulada) para evitar inconsistencias entre el pago y el estado del pedido en base de datos.",
    tags: ["Next.js", "Prisma", "Transbank", "PostgreSQL"],
    liveUrl: "https://asegalbyfasesorias.cl",
    repoUrl: "https://github.com/PauFugit/FS-ASEGAL",
    featured: false,
  },
  {
    id: 2,
    title: "Suite de Automatización SII",
    description:
      "Conjunto de dos herramientas de escritorio para automatizar operaciones tributarias en el portal del SII. El módulo de facturas electrónicas soporta procesamiento individual y masivo desde Excel, hasta 3 hilos concurrentes con Selenium WebDriver, modo headless y generación automática de reportes, distribuido con instalador profesional (PyInstaller + Inno Setup). El módulo de boletas de honorarios implementa el flujo completo: autenticación con RUT/clave, procesamiento individual y masivo desde Excel, modo headless y generación de reportes al finalizar. Ambos módulos comparten la misma arquitectura base (PyQt5 + QThread + Selenium) con monitoreo de logs en tiempo real. Actualmente desplegado en la página de Asesorías Valdivia.",
    role: "Desarrolladora única — 2026",
    stack: {
      frontend: ["PyQt5"],
      backend: ["Python", "Selenium WebDriver", "Pandas"],
      database: [],
      tools: ["webdriver-manager", "PyInstaller", "Inno Setup"],
    },
    bullets: [
      "Módulo de facturas (completado): procesamiento masivo vía Excel con hasta 3 hilos concurrentes de Chrome, modo headless, generación automática de reportes e instalador profesional con PyInstaller + Inno Setup.",
      "Módulo de boletas (en desarrollo): replica la arquitectura base PyQt5 + QThread + Selenium y está en proceso de integración con el flujo específico del portal SII.",
      "Construí interfaz con PyQt5 con monitoreo en tiempo real mediante logs de operación, barra de progreso y cola thread-safe para sincronización de hilos.",
    ],
    decision:
      "Opté por Selenium sobre APIs directas del SII dado que el portal no expone endpoints públicos. La arquitectura de workers en QThread mantiene la UI responsiva durante el procesamiento concurrente.",
    challenge:
      "La sincronización de hasta 3 instancias de Chrome simultáneas generaba condiciones de carrera en el sistema de logs. Resolví implementando una cola thread-safe con queue.Queue de Python para garantizar la integridad de los registros.",
    tags: ["Python", "PyQt5", "Selenium", "Pandas"],
    liveUrl: "",
    repoUrl: "https://github.com/Pauaua/AutomatizadorFacturas",
    repoUrl2: "https://github.com/Pauaua/AutomatizadorBoletas",
    featured: true,
  },
  {
    id: 7,
    title: "PhantasiaWeb — Sitio Corporativo",
    description:
      "Sitio web corporativo para Phantasia, estudio de diseño y desarrollo de software. Internacionalización en tres idiomas (ES/EN/FR) con routing por locale, modo oscuro/claro con detección de preferencia del sistema, y formulario de onboarding de 6 pasos que persiste leads en base de datos y envía notificaciones automáticas por email.",
    role: "Desarrolladora única — proyecto freelance",
    stack: {
      frontend: ["Next.js 16", "TypeScript", "Tailwind CSS v4"],
      backend: ["Next.js API Routes", "Prisma"],
      database: ["PostgreSQL"],
      tools: ["Vercel", "Resend", "Git"],
    },
    bullets: [
      "Implementé internacionalización en tres idiomas (ES/EN/FR) con routing por locale sobre Next.js App Router.",
      "Desarrollé modo oscuro/claro con detección automática de la preferencia del sistema del usuario.",
      "Construí formulario de onboarding de 6 pasos que persiste leads en base de datos y dispara notificaciones automáticas por email con Resend.",
    ],
    decision:
      "Elegí un routing basado en locale de Next.js en vez de una librería de i18n externa para mantener el bundle liviano y aprovechar el App Router de forma nativa en las tres versiones del sitio.",
    challenge:
      "Sincronizar el estado del formulario de 6 pasos entre pasos sin perder datos ante refrescos de página requirió persistencia intermedia en el cliente antes del envío final a la base de datos.",
    tags: ["Next.js", "TypeScript", "i18n", "Prisma", "PostgreSQL"],
    liveUrl: "https://www.phantasia.cl",
    repoUrl: "https://github.com/Pauaua/PhantasiaWeb",
    featured: false,
  },
  {
    id: 10,
    title: "ALT - Asamblea Las Torres",
    description:
      "Sitio web para Asamblea Las Torres, organización comunitaria autogestionada dedicada a la regeneración ambiental y social en Quilicura. Presenta la historia de la organización, catálogo de proyectos de reforestación (método Miyawaki) e intervenciones de arte urbano, y formulario de contacto para colaboraciones.",
    role: "Desarrolladora única — proyecto personal / organización",
    stack: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "PostCSS"],
      backend: ["Next.js API Routes", "Prisma"],
      database: ["PostgreSQL"],
      tools: ["Vercel", "Git"],
    },
    bullets: [
      "Desarrollé catálogo de proyectos de reforestación y arte urbano organizados en tres ejes de trabajo: medioambiental, social y cultural.",
      "Construí formulario de contacto para gestionar colaboraciones de vecinos y voluntarios interesados en participar.",
      "Implementé galería visual de intervenciones realizadas y presentación de la organización desde su fundación en 2019.",
    ],
    decision:
      "Elegí Next.js con Prisma para mantener el contenido de proyectos y colaboraciones estructurado en base de datos, facilitando actualizaciones futuras sin tocar código, dado que la organización sigue sumando iniciativas de forma continua.",
    challenge:
      "Traducir el trabajo horizontal y autogestionado de la organización en una estructura de datos clara (proyectos, ejes, intervenciones) que fuera fácil de mantener por personas sin conocimientos técnicos.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
    liveUrl: "https://www.asamblealastorres.cl",
    repoUrl: "https://github.com/Pauaua/ALTREAL",
    featured: false,
  },
];

export const experience = [
  {
    id: 2,
    company: "Mimasoft",
    role: "Desarrolladora Full Stack (Práctica profesional, 360 hrs)",
    period: "feb 2026 — abr 2026",
    description:
      "Práctica (360 horas) para salida intermedia Técnico Analista Programador. Desarrollé sitio web institucional bilingüe (ES/EN) en WordPress con Divi child theme, sistema de traducción dinámico JavaScript (data-es/data-en), integración de formularios WPForms con estilos glassmorphism, reCAPTCHA v2 y configuración Polylang. Arquitectura bajo DDD multi-tenant.",
    tags: ["DDD", "Multi-tenant", "WordPress", "Fullstack"],
  },
  {
    id: 3,
    company: "Asesorías Valdivia",
    role: "Desarrolladora Full Stack",
    period: "may 2024 — dic 2024",
    description:
      "Desarrollo freelance de productos digitales para el estudio y sus clientes. Construcción del sitio web corporativo multilingüe (ES/EN/FR) con Next.js 16, sistema de captación de leads de 6 pasos con almacenamiento en base de datos y notificaciones por email (Resend). Desarrollo de sitios y plataformas web para clientes externos del estudio.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Scrum"],
  },
  {
    id: 4,
    company: "Docente de Filosofía",
    role: "Profesora — Sistema educativo formal",
    period: "may 2017 — dic 2025",
    description:
      "Docente en establecimientos municipales y particulares pagados. Desarrollo de habilidades en planificación curricular, comunicación efectiva y gestión de grupos.",
    tags: ["Comunicación", "Planificación", "Gestión"],
  },
  {
    id: 5,
    company: "Organización A.L.T.",
    role: "Directora de Proyectos",
    period: "nov 2020 — dic 2025",
    description:
      "Gestión ágil de proyectos sociales, culturales y medioambientales. Definición de alcances, coordinación de equipos multidisciplinarios y resolución de problemas en contextos dinámicos.",
    tags: ["Gestión de Proyectos", "Scrum", "Liderazgo"],
  },
];

export const education = [
  {
    id: 1,
    institution: "Instituto Profesional San Sebastián (ex CIISA)",
    degree: "Ingeniería en Informática",
    period: "feb 2024 — actualidad",
    description:
      "En curso. Foco en arquitectura de software, bases de datos y patrones de diseño (MVC). Proyectos destacados con Spring Boot y aplicaciones móviles con Ionic.",
    highlight: true,
  },
  {
    id: 2,
    institution: "Instituto Profesional San Sebastián (ex CIISA)",
    degree: "Técnica Analista Programadora",
    period: "feb 2024 — abr 2026",
    description:
      "Título obtenido; salida intermedia con práctica profesional de 360 horas en Mimasoft bajo arquitectura multi-tenant y DDD.",
    highlight: false,
  },
  {
    id: 3,
    institution: "4Geeks Academy",
    degree: "FullStack Software Development",
    period: "jul 2022 — nov 2022",
    description:
      "Bootcamp intensivo de desarrollo full stack. Primer paso en la transición hacia el mundo del software.",
    highlight: false,
  },
  {
    id: 4,
    institution: "Universidad Miguel de Cervantes", 
    degree: "Magíster en Educación cn mención en Currículum",
    period: "2019 — 2021", 
    description:
      "Investigación educativa, diseño curricular y gestión de proyectos pedagógicos. Rigor metodológico y comunicación de ideas complejas — habilidades que hoy aplico directamente en desarrollo de software.",
    highlight: false,
  },
  {
    id: 5,
    institution: "Pontificia Universidad Católica de Valparaíso", 
    degree: "Licenciatura en Filosofía",
    period: "2010 — 2016", 
    description:
      "Formación en pensamiento crítico, argumentación estructurada y análisis de sistemas. Base que potencia mi capacidad para diseñar soluciones limpias y razonar sobre arquitecturas complejas.",
    highlight: false,
  },
];

export const navLinks = [
  { label: "Sobre mí", href: "/#about" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Formación", href: "/#education" },
  { label: "Contacto", href: "/contact" },
];
