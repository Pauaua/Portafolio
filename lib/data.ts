// ============================================================
// PORTFOLIO DATA -- Edición de contenido del portafolio
// ============================================================

export const personalInfo = {
  name: "Paulina Acuña Paiva",
  role: "Desarrolladora Full Stack",
  // Hero tagline
  tagline:
    "Construyo productos digitales que funcionan — del backend al frontend, con metodologías claras permitiendo un código limpio y eficiente.",
  // About bio 
  bio: "Ingeniería en Informática (en curso) con título técnico de Analista Programadora y experiencia en empresa real. Domino el ciclo completo: arquitectura de base de datos, APIs REST, lógica de negocio y frontend. Mi trayectoria previa en educación y filosofía me dio habilidades de comunicación, pensamiento sistemático y gestión de proyectos que aplico directamente al desarrollo.",
  location: "Santiago, RM. Chile",
  email: "paulinefugit@gmail.com",
  phone: "56974476368",
  whatsappMessage: "Hola Paulina, vi tu portfolio y me gustaría hablar contigo.",
  github: "Pauaua",
  available: true,
  avatar: "/images/avatar.jpg", // FALTA PONER IMAGEN
  resume: "/CVREALPAPCV.pdf",
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
      "Spring Boot",
      "Python",
      "Flask",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Ionic / Angular",
    ],
  },
  {
    category: "Bases de Datos & ORM",
    items: ["MySQL", "PostgreSQL", "Oracle SQL", "Prisma", "SQLAlchemy", "Spring Data JPA"],
  },
  {
    category: "Herramientas & Metodologías",
    items: ["Git", "Figma", "Cursor", "VS Code", "Maven", "Postman", "MySQL Workbench", "Linear", "Scrum", "MVC", "DDD", "WordPress"],
  },
  {
    category: "Cloud & Deploy",
    items: ["Vercel", "Railway", "Supabase", "Cloudflare", "Docker"],
  },
];

export const projects = [
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
    id: 2,
    title: "Suite de Automatización SII",
    description:
      "Conjunto de dos herramientas de escritorio para automatizar operaciones tributarias en el portal del SII. El módulo de facturas electrónicas soporta procesamiento individual y masivo desde Excel, hasta 3 hilos concurrentes con Selenium WebDriver, modo headless y generación automática de reportes, distribuido con instalador profesional (PyInstaller + Inno Setup). El módulo de boletas de honorarios implementa el flujo completo: autenticación con RUT/clave, procesamiento individual y masivo desde Excel, modo headless y generación de reportes al finalizar. Ambos módulos comparten la misma arquitectura base (PyQt5 + QThread + Selenium) con monitoreo de logs en tiempo real.",
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
    id: 3,
    title: "Tienda Berbelis",
    description:
      "Plataforma e-commerce completa para venta de productos orgánicos de salud y estética. Catálogo con paginación y filtros, carrito persistente, checkout, panel de administración y formulario de contacto.",
    role: "Desarrolladora única — proyecto freelance",
    stack: {
      frontend: ["Next.js 15", "TypeScript", "Tailwind CSS v4"],
      backend: ["Next.js API Routes", "Prisma 5"],
      database: ["PostgreSQL", "Neon"],
      tools: ["Vercel", "Git"],
    },
    bullets: [
      "Desarrollé catálogo de productos con paginación y filtrado server-side, y carrito de compras persistente con Context API.",
      "Construí panel de administración completo para gestión de productos, pedidos y mensajes de contacto.",
      "Desplegué la aplicación en Vercel con base de datos PostgreSQL serverless en Neon, incluyendo migraciones post-deploy con Prisma.",
    ],
    decision:
      "Elegí Next.js 15 con App Router para combinar Server Components (catálogo, SEO) con Client Components (carrito, interacciones), obteniendo lo mejor de SSR y SPA sin complejidad adicional.",
    challenge:
      "La sincronización del carrito entre Client Components y el estado del servidor requirió un Context API bien estructurado con persistencia en localStorage, garantizando que el carrito sobreviva recargas sin necesidad de autenticación.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveUrl: "https://tienda-berbelis.vercel.app/",
    repoUrl: "https://github.com/Pauaua/TiendaBerbelis",
    featured: false,
  },
  {
    id: 4,
    title: "PlantiDex Mobile",
    description:
      "Aplicación móvil híbrida para registrar y compartir observaciones de flora nativa a nivel comunitario. Soporta captura de fotos, geolocalización GPS y persistencia offline-first para uso en campo sin conexión.",
    role: "Desarrolladora única — proyecto académico",
    stack: {
      frontend: ["Ionic 8", "Angular 20", "TypeScript", "SCSS"],
      backend: ["Capacitor", "RxJS"],
      database: ["@ionic/storage-angular", "localForage"],
      tools: ["@capacitor/camera", "@capacitor/geolocation", "Karma / Jasmine", "Git"],
    },
    bullets: [
      "Implementé integración nativa de cámara y GPS con Capacitor, solicitando permisos Android en tiempo de ejecución con feedback claro al usuario en caso de denegación.",
      "Desarrollé persistencia offline-first con @ionic/storage-angular (localForage) para registrar observaciones en campo sin necesidad de conexión a internet.",
      "Construí gestión de estado reactiva con BehaviorSubject de RxJS para mantener la lista de especies sincronizada en tiempo real a través de múltiples vistas.",
    ],
    decision:
      "Elegí Ionic + Angular + Capacitor por la combinación de productividad web con acceso real a hardware nativo (cámara, GPS). El enfoque offline-first con localForage fue clave para garantizar usabilidad en zonas rurales con conectividad limitada.",
    challenge:
      "La integración de permisos nativos de Android con Capacitor requirió manejo explícito de estados (concedido/denegado/no solicitado) en cada sesión. Resolví implementando un servicio de permisos centralizado que evalúa el estado antes de cada llamada a cámara o GPS.",
    tags: ["Ionic", "Angular", "TypeScript", "Capacitor"],
    liveUrl: "",
    repoUrl: "https://github.com/Pauaua/PlantidexMobile",
    featured: false,
  },
  {
    id: 5,
    title: "CTRL — Gestión de Usuarios y Proyectos",
    description:
      "Aplicación web para la gestión de proyectos: usuarios, cargos, proyectos y tareas, con control de acceso por roles y soporte para despliegue en la nube.",
    role: "Desarrolladora única — proyecto personal",
    stack: {
      frontend: ["Thymeleaf", "HTML/CSS", "JavaScript"],
      backend: ["Java", "Spring Boot", "Spring Data JPA"],
      database: ["H2 Database", "Hibernate"],
      tools: ["Maven", "Git"],
    },
    bullets: [
      "Implementé autenticación con sesiones y control de acceso basado en roles (ADMIN/USER) que protege rutas sensibles del panel de administración.",
      "Desarrollé CRUD completo para usuarios y proyectos con búsqueda, filtrado y gestión de asociaciones usuario-proyecto.",
      "Diseñé arquitectura MVC con separación de controllers, models y repositories siguiendo buenas prácticas de Spring Boot.",
    ],
    decision:
      "Elegí H2 Database sobre MySQL para facilitar la portabilidad y ejecución sin configuración externa. La persistencia file-based garantiza que los datos sobreviven reinicios de la aplicación sin depender de un servidor de base de datos.",
    challenge:
      "La gestión de permisos diferenciados entre ADMIN y USER requirió validaciones en múltiples capas: controladores, vistas Thymeleaf (th:if con roles) y nivel de sesión, para evitar accesos no autorizados por manipulación directa de URLs.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "H2"],
    liveUrl: "",
    repoUrl: "https://github.com/Pauaua/Plantidex",
    featured: false,
  },
  {
    id: 6,
    title: "Aguas Mi Sur — Sitio Institucional",
    description:
      "Sitio web institucional para empresa distribuidora de agua purificada en Chile. Renderizado de contenido dinámico en Markdown, base de datos PostgreSQL serverless con Prisma v7 y Neon, validación de datos con Zod v4 y despliegue continuo en Vercel.",
    role: "Desarrolladora única — proyecto freelance",
    stack: {
      frontend: ["Next.js 16", "TypeScript", "Tailwind CSS v4"],
      backend: ["Next.js API Routes", "Prisma 7"],
      database: ["PostgreSQL", "Neon"],
      tools: ["Vercel", "Turbopack", "Git"],
    },
    bullets: [
      "Desarrollé sitio institucional completamente responsivo con Next.js 16 App Router y Tailwind CSS v4.",
      "Integré base de datos PostgreSQL serverless con Prisma v7 para gestión de contenidos dinámicos.",
      "Configuré Turbopack para builds optimizados y despliegue continuo en Vercel con entorno serverless.",
    ],
    decision:
      "Elegí Next.js 16 con Turbopack por la velocidad de desarrollo y el despliegue serverless en Vercel, ideal para un sitio institucional que requiere bajo mantenimiento y alta disponibilidad.",
    challenge:
      "La configuración de Prisma v7 con el adaptador PostgreSQL serverless de Neon requirió ajustes específicos para el entorno serverless de Vercel, garantizando conexiones eficientes sin agotamiento de pool en funciones edge.",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS v4"],
    liveUrl: "https://aguasmisur.vercel.app/",
    repoUrl: "https://github.com/Pauaua/MiSur",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "Phantasia Soluciones Creativas",
    role: "Desarrolladora Full Stack",
    period: "abr 2026 — jun 2026 · Trabajo por proyectos",
    description:
      "Desarrollo freelance de productos digitales para el estudio y sus clientes. Construcción del sitio web corporativo multilingüe (ES/EN/FR) con Next.js 16, sistema de captación de leads de 6 pasos con almacenamiento en base de datos y notificaciones por email (Resend). Desarrollo de sitios y plataformas web para clientes externos del estudio.",
    tags: ["Next.js", "TypeScript", "Prisma", "Vercel", "Freelance"],
  },
  {
    id: 2,
    company: "Mimasoft",
    role: "Desarrolladora Full Stack (Práctica)",
    period: "feb 2026 — mar 2026",
    description:
      "Práctica (360 horas) para salida intermedia Técnico Analista Programador. Desarrollé sitio web institucional bilingüe (ES/EN) en WordPress con Divi child theme, sistema de traducción dinámico JavaScript (data-es/data-en), integración de formularios WPForms con estilos glassmorphism, reCAPTCHA v2 y configuración Polylang. Arquitectura bajo DDD multi-tenant.",
    tags: ["DDD", "Multi-tenant", "WordPress", "Fullstack"],
  },
  {
    id: 3,
    company: "Unicorn Solutions",
    role: "Desarrolladora Full Stack",
    period: "may 2024 — dic 2024",
    description:
      "Desarrollo de aplicaciones web full stack para clientes externos bajo metodologías ágiles. Construcción de sitios y plataformas con Next.js 15, gestión de base de datos con Prisma ORM sobre MySQL, PostgreSQL y Supabase, y despliegue continuo en Vercel. Coordinación directa con clientes para levantamiento y definición de requerimientos.",
    tags: ["React", "Node.js", "PostgreSQL", "Scrum"],
  },
  {
    id: 4,
    company: "Docente de Filosofía",
    role: "Profesora — Sistema educativo formal",
    period: "may 2017 — feb 2026",
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
    institution: "Instituto Profesional CIISA",
    degree: "Ingeniería en Informática",
    period: "feb 2024 — actualidad",
    description:
      "Desarrollo de software, arquitectura de bases de datos y patrones de diseño (MVC). Proyectos destacados con Spring Boot y aplicaciones móviles con Ionic.",
    highlight: true,
  },
  {
    id: 2,
    institution: "IP San Sebastián (ex CIISA)",
    degree: "Técnica Analista Programadora",
    period: "feb 2024 — feb 2026",
    description:
      "Título técnico obtenido con práctica profesional de 360 horas en Mimasoft bajo arquitectura multi-tenant y DDD.",
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
