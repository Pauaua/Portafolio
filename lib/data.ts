// ============================================================
// PORTFOLIO DATA — edita este archivo para personalizar todo
// ============================================================

export const personalInfo = {
  name: "Paulina Acuña Paiva",
  role: "Desarrolladora Full Stack",
  // Hero tagline — primera impresión ante un reclutador
  tagline:
    "Full Stack lista para aportar desde el día uno. Java · Spring Boot · React · Next.js · 5 años de formación continua.",
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
    title: "PlantiDex Mobile",
    description:
      "Aplicación móvil híbrida para registrar y compartir observaciones de flora nativa a nivel comunitario. Desarrollé el frontend móvil completo con persistencia local, formularios reactivos y permisos nativos.",
    longDescription:
      "Implementé la arquitectura frontend completa: navegación, formularios reactivos con validación, @ionic/storage-angular para persistencia local y Capacitor para acceso a permisos del dispositivo.",
    tags: ["Ionic 8", "Angular 20", "TypeScript", "Capacitor"],
    liveUrl: "",
    repoUrl: "", // agrega tu repo de GitHub
    image: "/images/projects/plantidex.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "CTRL — Gestión de Usuarios y Proyectos",
    description:
      "Aplicación web MVC para gestión administrativa con control de roles (Admin/User). Diseñé la arquitectura de base de datos e implementé autenticación y autorización con Spring Boot.",
    longDescription:
      "Diseñé los modelos de dominio (Usuario, Proyecto) en Java, implementé la lógica de negocio con Spring Boot incluyendo autenticación por roles, y desarrollé las vistas interactivas con Thymeleaf.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "Spring Data JPA", "Maven"],
    liveUrl: "",
    repoUrl: "",
    image: "/images/projects/ctrl.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Asegal ByF — Dashboard de Administración",
    description:
      "Panel de administración moderno para gestionar contenido web (blog, servicios, imágenes). Desarrollé el frontend con Next.js con arquitectura de componentes eficiente.",
    longDescription:
      "Contribuí al desarrollo de la interfaz de administración dinámica usando Next.js, trabajando en la arquitectura de componentes para una gestión eficiente del contenido.",
    tags: ["Next.js", "React"],
    liveUrl: "",
    repoUrl: "",
    image: "/images/projects/asegal.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Asesorías Valdivia — Sistema Contable",
    description:
      "Sistema de gestión contable desarrollado desde cero. Diseño de base de datos, backend con Node.js y Prisma, e interfaz con React.",
    longDescription:
      "Desarrollé el sistema completo: diseño del modelo de datos, API REST con Node.js, ORM con Prisma sobre PostgreSQL, e interfaz de usuario con React.",
    tags: ["Node.js", "Prisma", "React", "PostgreSQL"],
    liveUrl: "",
    repoUrl: "",
    image: "/images/projects/valdivia.jpg",
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
  { label: "Inicio", href: "/#hero" },
  { label: "Sobre mí", href: "/#about" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Experiencia", href: "/#experience" },
  { label: "Formación", href: "/#education" },
  { label: "Contacto", href: "/contact" },
];
