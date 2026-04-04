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
    title: "PlantiDex Mobile",
    description:
      "App móvil comunitaria para registrar y compartir observaciones de flora nativa, con soporte offline y geolocalización.",
    role: "Desarrolladora única — proyecto académico",
    stack: {
      frontend: ["Ionic 8", "Angular 20", "TypeScript"],
      backend: ["Firebase Auth", "Firebase Functions"],
      database: ["Firestore"],
      tools: ["Capacitor", "Git"],
    },
    bullets: [
      "Implementé geolocalización con Capacitor para registrar coordenadas GPS de cada observación en campo.",
      "Desarrollé formularios reactivos con validación en tiempo real, reduciendo errores de entrada en zonas sin conexión.",
      "Integré Firebase Auth con persistencia offline usando @ionic/storage-angular para funcionamiento sin red.",
    ],
    decision:
      "Elegí Ionic + Capacitor sobre React Native por la familiaridad con Angular en el ecosistema de la carrera y la necesidad de acceder a APIs nativas (cámara, GPS) sin configuración compleja de bridges.",
    challenge:
      "La sincronización offline/online fue el mayor desafío: implementé una cola de operaciones pendientes en storage local que se ejecuta automáticamente al recuperar conexión, evitando pérdida de datos en campo.",
    tags: ["Ionic", "Angular", "TypeScript", "Firebase"],
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "CTRL — Gestión de Usuarios y Proyectos",
    description:
      "Plataforma web MVC de gestión administrativa con autenticación por roles (Admin/User) desarrollada como proyecto de titulación.",
    role: "Desarrolladora única — proyecto de titulación",
    stack: {
      frontend: ["Thymeleaf", "Bootstrap 5", "JavaScript"],
      backend: ["Java 17", "Spring Boot 3", "Spring Security"],
      database: ["MySQL 8", "Spring Data JPA / Hibernate"],
      tools: ["Maven", "Git"],
    },
    bullets: [
      "Diseñé e implementé el esquema relacional con 6 entidades en MySQL, incluyendo relaciones ManyToMany entre usuarios y proyectos.",
      "Construí sistema de autenticación con Spring Security y control de acceso basado en roles, protegiendo rutas sensibles del panel admin.",
      "Desarrollé CRUD completo con validaciones server-side para gestión de usuarios, proyectos y asignaciones.",
    ],
    decision:
      "Opté por arquitectura MVC server-side con Thymeleaf en lugar de una SPA + API separada para reducir la complejidad del despliegue en contexto académico y mantener el foco en la lógica de negocio con Spring.",
    challenge:
      "La gestión de permisos granulares por rol fue compleja: resolví implementando filtros de seguridad personalizados en Spring Security que interceptan cada request y validan el rol antes de llegar al controlador.",
    tags: ["Java", "Spring Boot", "Spring Security", "MySQL"],
    liveUrl: "",
    repoUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Asegal ByF — Dashboard Admin",
    description:
      "Panel de administración para gestión de contenido web (blog, servicios, imágenes) de una empresa de asesorías financieras.",
    role: "Desarrolladora frontend — proyecto freelance",
    stack: {
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      backend: ["Strapi CMS"],
      database: ["PostgreSQL"],
      tools: ["Vercel", "Git"],
    },
    bullets: [
      "Construí dashboard con gestión dinámica de contenido integrado con Strapi CMS via API REST.",
      "Implementé sistema de subida y preview de imágenes en tiempo real con validación de formato y tamaño.",
      "Desarrollé arquitectura de componentes reutilizables que redujo el tiempo de implementación de nuevas secciones.",
    ],
    decision:
      "Elegí Next.js con SSR para mejorar el SEO del sitio institucional público, descartando una SPA pura. Strapi fue la elección de CMS por su panel intuitivo para el cliente no técnico y su API REST lista para usar.",
    challenge:
      "Strapi devuelve estructuras de datos dinámicas sin tipado estricto. Resolví creando tipos TypeScript genéricos con guardas de tipo en runtime, eliminando errores silenciosos en producción.",
    tags: ["Next.js", "TypeScript", "Strapi", "Tailwind"],
    liveUrl: "",
    repoUrl: "",
    featured: false,
  },
  {
    id: 4,
    title: "Asesorías Valdivia — Sistema Contable",
    description:
      "Sistema de gestión contable desarrollado desde cero para una empresa de asesorías, incluyendo facturación, clientes y reportes.",
    role: "Desarrolladora full stack — freelance en equipo de 2",
    stack: {
      frontend: ["React 18", "TypeScript", "Vite"],
      backend: ["Node.js", "Express", "Prisma ORM"],
      database: ["PostgreSQL"],
      tools: ["Railway", "Git"],
    },
    bullets: [
      "Diseñé el esquema de base de datos para clientes, facturas, transacciones y períodos tributarios.",
      "Implementé generación automática de reportes mensuales con cálculo de totales, IVA y resumen por categoría.",
      "Construí sistema de filtrado y búsqueda con paginación server-side para manejar grandes volúmenes de transacciones.",
    ],
    decision:
      "Elegí Prisma sobre TypeORM por su generación automática de tipos TypeScript y su DX superior para un proyecto pequeño con iteraciones rápidas. Railway para el despliegue por su simplicidad frente a AWS en proyectos freelance de este alcance.",
    challenge:
      "Los cálculos de períodos tributarios en Chile con manejo de zonas horarias generaban desfases de un día en fechas límite. Resolví centralizando toda la lógica de fechas en un módulo con date-fns y UTC explícito.",
    tags: ["Node.js", "React", "Prisma", "PostgreSQL"],
    liveUrl: "",
    repoUrl: "",
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
