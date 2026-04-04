// ============================================================
// PORTFOLIO DATA — edita este archivo para personalizar todo
// ============================================================

export const personalInfo = {
  name: "Paulina Acuña Paiva",
  role: "Desarrolladora Full Stack",
  // Hero tagline — primera impresión ante un reclutador
  tagline:
    "Construyo productos digitales que funcionan — del backend al frontend, con metodologías claras permitiendo un código limpio y eficiente.",
  // About bio — más detallado
  bio: "Ingeniería en Informática (en curso) con título técnico de Analista Programadora y experiencia en empresa real. Domino el ciclo completo: arquitectura de base de datos, APIs REST, lógica de negocio y frontend. Mi trayectoria previa en educación y filosofía me dio habilidades de comunicación, pensamiento sistemático y gestión de proyectos que aplico directamente al desarrollo.",
  location: "Santiago, RM. Chile",
  email: "paulinefugit@gmail.com",
  // WhatsApp: número sin espacios ni +, prefijo país incluido
  phone: "56974476368", // +56 9 74476368
  whatsappMessage: "Hola Paulina, vi tu portfolio y me gustaría hablar contigo.",
  github: "Pauaua",
  available: true,
  avatar: "/images/avatar.jpg", // Coloca tu foto en public/images/
  // CV debe estar en public/ para que Next.js lo sirva
  resume: "/CV PAULINA ACUNA PAIVA.pdf",
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
    items: ["Git", "Docker", "Figma", "Maven", "Scrum", "MVC", "DDD", "VS Code"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Automatizador de Facturas SII",
    description:
      "Herramienta de escritorio para automatizar la aceptación de facturas electrónicas en el portal del SII. Soporta procesamiento individual y masivo vía Excel, con hasta 3 procesos concurrentes y generación automática de reportes.",
    role: "Desarrolladora única — proyecto personal",
    stack: {
      frontend: ["PyQt5"],
      backend: ["Python 3.8+", "Selenium WebDriver", "Pandas"],
      database: [],
      tools: ["webdriver-manager", "PyInstaller", "Inno Setup"],
    },
    bullets: [
      "Implementé procesamiento masivo vía archivos Excel (xlsx/xls/csv) con hasta 3 instancias concurrentes de Chrome para acelerar el flujo de trabajo.",
      "Desarrollé generación automática de reportes Excel con resumen de resultados (éxito/error) por empresa procesada.",
      "Construí interfaz con PyQt5 con monitoreo en tiempo real mediante logs de operación y barra de progreso.",
    ],
    decision:
      "Opté por Selenium sobre APIs directas del SII dado que el portal no expone endpoints públicos. La arquitectura de workers en hilos separados permite mantener la UI responsiva durante el procesamiento concurrente.",
    challenge:
      "La sincronización de hasta 3 instancias de Chrome simultáneas generaba condiciones de carrera en el sistema de logs. Resolví implementando una cola thread-safe con queue.Queue de Python para garantizar la integridad de los registros.",
    tags: ["Python", "PyQt5", "Selenium", "Pandas"],
    liveUrl: "",
    repoUrl: "https://github.com/Pauaua/AutomatizadorFacturas",
    featured: true,
  },
  {
    id: 2,
    title: "CTRL — Gestión de Usuarios y Proyectos",
    description:
      "Plataforma web MVC con autenticación por roles (Admin/User), CRUD completo de usuarios y proyectos, y control de acceso granular. Desarrollado con Java Spring Boot y Thymeleaf.",
    role: "Desarrolladora única — proyecto académico",
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
    featured: true,
  },
  {
    id: 3,
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
    id: 4,
    title: "Automatizador de Boletas SII",
    description:
      "Aplicación de escritorio para automatizar el flujo de boletas electrónicas del SII. Interfaz PyQt5 con autenticación por RUT y contraseña, modo headless y logs en tiempo real.",
    role: "Desarrolladora única — proyecto personal",
    stack: {
      frontend: ["PyQt5"],
      backend: ["Python 3.8+", "Selenium WebDriver"],
      database: [],
      tools: ["webdriver-manager", "ChromeDriver"],
    },
    bullets: [
      "Construí la interfaz gráfica con PyQt5 con campos de credenciales SII (RUT/contraseña), toggle de modo headless y panel de logs en tiempo real.",
      "Implementé arquitectura Worker/Thread para desacoplar la automatización del navegador de la interfaz gráfica y mantener la UI responsiva.",
      "Diseñé el flujo base de autenticación y navegación automatizada con Selenium, preparado para integrar el workflow completo del SII.",
    ],
    decision:
      "Adopté la misma arquitectura de AutomatizadorFacturas (PyQt5 + Selenium + workers en hilos) para mantener consistencia entre ambas herramientas y facilitar la reutilización de código entre proyectos relacionados.",
    challenge:
      "El manejo de errores de Selenium en modo headless difiere del modo visible. Implementé captura de excepciones específicas de WebDriver y fallback a modo visible para facilitar la depuración durante el desarrollo.",
    tags: ["Python", "PyQt5", "Selenium", "SII"],
    liveUrl: "",
    repoUrl: "https://github.com/Pauaua/AutomatizadorBoletas",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "Mimasoft",
    role: "Desarrolladora Full Stack (Práctica)",
    period: "feb 2026 — mar 2026",
    description:
      "Práctica de 360 horas para titulación de Técnico Analista Programadora. Soporte, desarrollo e implementación de funcionalidades bajo arquitectura multi-tenant con Domain-Driven Design. Diseño de mockups y desarrollo de página web institucional con WordPress.",
    tags: ["DDD", "Multi-tenant", "WordPress", "Fullstack"],
  },
  {
    id: 2,
    company: "Unicorn Solutions",
    role: "Desarrolladora Full Stack",
    period: "may 2024 — dic 2024",
    description:
      "Desarrollo de aplicaciones web full stack bajo metodologías ágiles. Coordinación con cliente para definición de requerimientos, implementación de bases de datos relacionales y APIs REST.",
    tags: ["React", "Node.js", "PostgreSQL", "Scrum"],
  },
  {
    id: 3,
    company: "Docente de Filosofía",
    role: "Profesora — Sistema educativo formal",
    period: "may 2017 — dic 2025",
    description:
      "Docente en establecimientos municipales y particulares pagados. Desarrollo de habilidades en planificación curricular, comunicación efectiva y gestión de grupos.",
    tags: ["Comunicación", "Planificación", "Gestión"],
  },
  {
    id: 4,
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
    institution: "Universidad (Chile)", // actualiza con el nombre exacto
    degree: "Magíster en Educación",
    period: "2015 — 2017", // ajusta las fechas reales
    description:
      "Investigación educativa, diseño curricular y gestión de proyectos pedagógicos. Rigor metodológico y comunicación de ideas complejas — habilidades que hoy aplico directamente en desarrollo de software.",
    highlight: false,
  },
  {
    id: 5,
    institution: "Universidad (Chile)", // actualiza con el nombre exacto
    degree: "Licenciatura en Filosofía",
    period: "2010 — 2015", // ajusta las fechas reales
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
