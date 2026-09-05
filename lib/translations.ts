export type Lang = "es" | "en" | "fr";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      education: "Formación",
      contact: "Contacto",
      cta: "Hablemos",
    },
    hero: {
      badge1: "Disponible para contratación",
      badge2: "Disponible para proyectos",
      greeting: "Hola, soy",
      role: "Desarrolladora Full Stack",
      tagline:
        "Construyo productos digitales que funcionan — del backend al frontend, con metodologías claras permitiendo un código limpio y eficiente.",
      cta1: "Revisa mis proyectos",
      cta2: "Descargar CV",
    },
    about: {
      label: "Sobre mí",
      heading: "Del aula al",
      headingAccent: "código",
      bio: "Ingeniería en Informática (en curso) con título técnico de Analista Programadora y experiencia en empresa real. Domino el ciclo completo: arquitectura de base de datos, APIs REST, lógica de negocio y frontend. Me motiva integrarme a equipos donde pueda aportar valor desde el día uno y seguir creciendo técnicamente.",
      extra:
        "Antes de dedicarme al desarrollo, fui docente de Filosofía durante más de 8 años y tengo un Magíster en Educación. Esa etapa me enseñó a comunicar ideas complejas de forma clara, a gestionar proyectos con recursos limitados y a trabajar con equipos diversos — habilidades que aplico directamente al desarrollo de software.",
      openToWork: "Open to work",
    },
    skills: {
      label: "Habilidades",
      heading: "Mi",
      headingAccent: "stack técnico",
      categories: {
        "Lenguajes & Frameworks": "Lenguajes & Frameworks",
        "Bases de Datos & ORM": "Bases de Datos & ORM",
        "Herramientas & Metodologías": "Herramientas & Metodologías",
        "Cloud & Deploy": "Cloud & Deploy",
      },
    },
    projects: {
      label: "Proyectos",
      heading: "Cosas que he",
      headingAccent: "construido",
      live: "Ver live",
      code: "Código",
      moreOnGithub: "Ver más en GitHub",
      items: [
        {
          id: 1,
          title: "Eclipse FM 107.7 — Web & Dashboard",
          description:
            "Plataforma full-stack para Radio Eclipse FM 107.7. Sitio público con reproductor de audio en vivo, chat integrado, grilla de programación semanal, blog y noticias. Panel de administración con 3 roles (Admin/SubAdmin/Team), autenticación NextAuth v5 + bcryptjs, PostgreSQL serverless (Neon), emails con Resend y validación con Zod.",
          role: "Desarrolladora única — proyecto freelance",
          bullets: [
            "Implementé reproductor de audio streaming en tiempo real con chat integrado, permitiendo a los oyentes interactuar durante las transmisiones en vivo.",
            "Desarrollé dashboard de administración con roles diferenciados (Admin/SubAdmin/Team) para gestión de programas, sponsors, blog y noticias.",
            "Construí grilla de programación semanal, catálogo de programas y sección de noticias locales con sistema completo de gestión de contenidos.",
          ],
          decision:
            "Elegí NextAuth v5 para la autenticación del dashboard por su integración nativa con Next.js App Router y soporte flexible de providers. La separación entre sitio público y panel admin en la misma base de código simplifica el despliegue y mantenimiento.",
          challenge:
            "Mantener el reproductor de streaming activo entre navegaciones sin interrumpir la reproducción requirió un contexto global que persiste el estado del audio fuera del árbol de rutas, evitando que el componente se desmonte al cambiar de página.",
        },
        {
          id: 2,
          title: "Suite de Automatización SII",
          description:
            "Dos herramientas de escritorio para automatizar operaciones tributarias en el SII. Módulo de facturas con procesamiento masivo, hasta 3 hilos concurrentes e instalador profesional. Módulo de boletas con flujo completo: autenticación, procesamiento masivo y reportes.",
          role: "Desarrolladora única — 2026",
          bullets: [
            "Módulo de facturas (completado): procesamiento masivo vía Excel con hasta 3 hilos concurrentes de Chrome, modo headless, generación automática de reportes e instalador profesional con PyInstaller + Inno Setup.",
            "Módulo de boletas (en desarrollo): replica la arquitectura base PyQt5 + QThread + Selenium y está en proceso de integración con el flujo específico del portal SII.",
            "Construí interfaz con PyQt5 con monitoreo en tiempo real mediante logs de operación, barra de progreso y cola thread-safe para sincronización de hilos.",
          ],
          decision:
            "Opté por Selenium sobre APIs directas del SII dado que el portal no expone endpoints públicos. La arquitectura de workers en QThread mantiene la UI responsiva durante el procesamiento concurrente.",
          challenge:
            "La sincronización de hasta 3 instancias de Chrome simultáneas generaba condiciones de carrera en el sistema de logs. Resolví implementando una cola thread-safe con queue.Queue de Python para garantizar la integridad de los registros.",
        },
        {
          id: 4,
          title: "PlantiDex Mobile",
          description:
            "Aplicación móvil híbrida para registrar y compartir observaciones de flora nativa. Captura de fotos, geolocalización GPS y persistencia offline-first para uso en campo sin conexión.",
          role: "Desarrolladora única — proyecto académico",
          bullets: [
            "Implementé integración nativa de cámara y GPS con Capacitor, solicitando permisos Android en tiempo de ejecución con feedback claro al usuario en caso de denegación.",
            "Desarrollé persistencia offline-first con @ionic/storage-angular (localForage) para registrar observaciones en campo sin necesidad de conexión a internet.",
            "Construí gestión de estado reactiva con BehaviorSubject de RxJS para mantener la lista de especies sincronizada en tiempo real a través de múltiples vistas.",
          ],
          decision:
            "Elegí Ionic + Angular + Capacitor por la combinación de productividad web con acceso real a hardware nativo (cámara, GPS). El enfoque offline-first con localForage fue clave para garantizar usabilidad en zonas rurales con conectividad limitada.",
          challenge:
            "La integración de permisos nativos de Android con Capacitor requirió manejo explícito de estados (concedido/denegado/no solicitado) en cada sesión. Resolví implementando un servicio de permisos centralizado que evalúa el estado antes de cada llamada a cámara o GPS.",
        },
        {
          id: 6,
          title: "Aguas Mi Sur — Sitio Institucional",
          description:
            "Sitio web institucional para empresa distribuidora de agua purificada en Chile. Renderizado de contenido en Markdown, base de datos PostgreSQL serverless con Prisma v7 y Neon, validación con Zod v4 y despliegue continuo en Vercel.",
          role: "Desarrolladora única — proyecto freelance",
          bullets: [
            "Desarrollé sitio institucional completamente responsivo con Next.js 16 App Router y Tailwind CSS v4.",
            "Integré base de datos PostgreSQL serverless con Prisma v7 para gestión de contenidos dinámicos.",
            "Configuré Turbopack para builds optimizados y despliegue continuo en Vercel con entorno serverless.",
          ],
          decision:
            "Elegí Next.js 16 con Turbopack por la velocidad de desarrollo y el despliegue serverless en Vercel, ideal para un sitio institucional que requiere bajo mantenimiento y alta disponibilidad.",
          challenge:
            "La configuración de Prisma v7 con el adaptador PostgreSQL serverless de Neon requirió ajustes específicos para el entorno serverless de Vercel, garantizando conexiones eficientes sin agotamiento de pool en funciones edge.",
        },
        {
          id: 7,
          title: "PhantasiaWeb — Sitio Corporativo",
          description:
            "Sitio web corporativo para Phantasia, estudio de diseño y desarrollo de software. Internacionalización en tres idiomas (ES/EN/FR) con routing por locale, modo oscuro/claro con detección de preferencia del sistema, y formulario de onboarding de 6 pasos que persiste leads en base de datos y envía notificaciones automáticas por email.",
          role: "Desarrolladora única — proyecto freelance",
          bullets: [
            "Implementé internacionalización en tres idiomas (ES/EN/FR) con routing por locale sobre Next.js App Router.",
            "Desarrollé modo oscuro/claro con detección automática de la preferencia del sistema del usuario.",
            "Construí formulario de onboarding de 6 pasos que persiste leads en base de datos y dispara notificaciones automáticas por email con Resend.",
          ],
          decision:
            "Elegí un routing basado en locale de Next.js en vez de una librería de i18n externa para mantener el bundle liviano y aprovechar el App Router de forma nativa en las tres versiones del sitio.",
          challenge:
            "Sincronizar el estado del formulario de 6 pasos entre pasos sin perder datos ante refrescos de página requirió persistencia intermedia en el cliente antes del envío final a la base de datos.",
        },
        {
          id: 8,
          title: "Asegalbyf Asesorías — E-commerce",
          description:
            "Plataforma e-commerce para venta de servicios de asesorías. Dashboard administrable para gestión de servicios y checkout con integración de pagos Transbank. Desarrollado en solitario en 3 semanas y desplegado en producción.",
          role: "Desarrolladora única — proyecto freelance",
          bullets: [
            "Desarrollé dashboard administrable para gestión de servicios ofrecidos por la correduría.",
            "Integré checkout con pasarela de pagos Transbank para procesar transacciones en producción.",
            "Entregué el proyecto completo en solitario en un plazo de 3 semanas, desde el levantamiento de requerimientos hasta el despliegue.",
          ],
          decision:
            "Prioricé Prisma ORM sobre queries directas para mantener un esquema de datos type-safe y acelerar el desarrollo dado el plazo ajustado de 3 semanas.",
          challenge:
            "La integración con la API de Transbank exigió manejar cuidadosamente los estados de transacción (aprobada, rechazada, anulada) para evitar inconsistencias entre el pago y el estado del pedido en base de datos.",
        },
        {
          id: 9,
          title: "StayCool — Agenda Personal",
          description:
            "Aplicación móvil de agenda personal que registra bienestar, imagen personal, actividades sociales, higiene y gastos. Incluye suscripciones premium con RevenueCat, un sistema de recompensas gamificado (MOOney) para personalizar avatar, y 'Mi Resumen': generación de PDF con estadísticas de actividad. En desarrollo desde agosto 2026.",
          role: "Desarrolladora única — proyecto personal",
          bullets: [
            "Diseñé arquitectura modular por features (bienestar, imagen, cabello, higiene, social, gastos, preferencias, notas) con patrón consistente types/services/hooks/screens en cada módulo.",
            "Implementé sistema de suscripciones premium (planes Basic y Full) con RevenueCat y recompensas gamificadas (MOOney) para personalización de avatar.",
            "Construí generación de PDF con estadísticas de actividad ('Mi Resumen'), notificaciones push locales y deep links para recuperación de contraseña.",
          ],
          decision:
            "Elegí Expo + React Native sobre desarrollo nativo separado para iOS/Android por la velocidad de iteración con EAS Build/Update, priorizando lanzar features rápido en una app aún en desarrollo activo.",
          challenge:
            "Mantener consistencia entre los múltiples módulos de feature (bienestar, imagen, higiene, etc.) exigió definir migraciones de base de datos numeradas y Edge Functions para operaciones sensibles, evitando lógica de negocio duplicada en el cliente.",
        },
        {
          id: 10,
          title: "ALT - Asamblea Las Torres",
          description:
            "Sitio web para Asamblea Las Torres, organización comunitaria autogestionada dedicada a la regeneración ambiental y social en Quilicura. Presenta la historia de la organización, catálogo de proyectos de reforestación (método Miyawaki) e intervenciones de arte urbano, y formulario de contacto para colaboraciones.",
          role: "Desarrolladora única — proyecto personal / organización",
          bullets: [
            "Desarrollé catálogo de proyectos de reforestación y arte urbano organizados en tres ejes de trabajo: medioambiental, social y cultural.",
            "Construí formulario de contacto para gestionar colaboraciones de vecinos y voluntarios interesados en participar.",
            "Implementé galería visual de intervenciones realizadas y presentación de la organización desde su fundación en 2019.",
          ],
          decision:
            "Elegí Next.js con Prisma para mantener el contenido de proyectos y colaboraciones estructurado en base de datos, facilitando actualizaciones futuras sin tocar código, dado que la organización sigue sumando iniciativas de forma continua.",
          challenge:
            "Traducir el trabajo horizontal y autogestionado de la organización en una estructura de datos clara (proyectos, ejes, intervenciones) que fuera fácil de mantener por personas sin conocimientos técnicos.",
        },
      ],
    },
    experience: {
      label: "Experiencia",
      heading: "Donde he",
      headingAccent: "trabajado",
      items: [
        {
          role: "Desarrolladora Full Stack (Práctica profesional, 360 hrs)",
          description:
            "Práctica (360 horas) para salida intermedia Técnico Analista Programador. Desarrollé sitio web institucional bilingüe (ES/EN) en WordPress con Divi child theme, sistema de traducción dinámico JavaScript (data-es/data-en), integración de formularios WPForms con estilos glassmorphism, reCAPTCHA v2 y configuración Polylang. Arquitectura bajo DDD multi-tenant.",
        },
        {
          role: "Desarrolladora Full Stack",
          description:
            "Desarrollo freelance de productos digitales para el estudio y sus clientes. Construcción del sitio web corporativo multilingüe (ES/EN/FR) con Next.js 16, sistema de captación de leads de 6 pasos con almacenamiento en base de datos y notificaciones por email (Resend). Desarrollo de sitios y plataformas web para clientes externos del estudio.",
        },
        {
          role: "Profesora — Sistema educativo formal",
          description:
            "Docente en establecimientos municipales y particulares pagados. Desarrollo de habilidades en planificación curricular, comunicación efectiva y gestión de grupos.",
        },
        {
          role: "Directora de Proyectos",
          description:
            "Gestión ágil de proyectos sociales, culturales y medioambientales. Definición de alcances, coordinación de equipos multidisciplinarios y resolución de problemas en contextos dinámicos.",
        },
      ],
    },
    education: {
      label: "Formación",
      heading: "Mi",
      headingAccent: "trayectoria académica",
      items: [
        {
          degree: "Ingeniería en Informática",
          description:
            "Desarrollo de software, arquitectura de bases de datos y patrones de diseño (MVC). Proyectos destacados con Spring Boot y aplicaciones móviles con Ionic.",
        },
        {
          degree: "Técnica Analista Programadora",
          description:
            "Título técnico obtenido con práctica profesional de 360 horas en Mimasoft bajo arquitectura multi-tenant y DDD.",
        },
        {
          degree: "FullStack Software Development",
          description:
            "Bootcamp intensivo de desarrollo full stack. Primer paso en la transición hacia el mundo del software.",
        },
        {
          degree: "Magíster en Educación",
          description:
            "Investigación educativa, diseño curricular y gestión de proyectos pedagógicos. Rigor metodológico y comunicación de ideas complejas — habilidades que hoy aplico directamente en desarrollo de software.",
        },
        {
          degree: "Licenciatura en Filosofía",
          description:
            "Formación en pensamiento crítico, argumentación estructurada y análisis de sistemas. Base que potencia mi capacidad para diseñar soluciones limpias y razonar sobre arquitecturas complejas.",
        },
      ],
    },
    process: {
      label: "Mi proceso",
      heading: "Cómo",
      headingAccent: "trabajo",
      steps: [
        { title: "Análisis", description: "Entiendo el problema a fondo antes de escribir la primera línea de código." },
        { title: "Diseño", description: "Defino la arquitectura y estructura de datos que mejor se adapta al proyecto." },
        { title: "Backend", description: "Construyo APIs sólidas, seguras y bien documentadas con Spring Boot o Node.js." },
        { title: "Frontend", description: "Transformo la lógica en interfaces reactivas, limpias y accesibles." },
        { title: "Entrega", description: "Despliego, documento y me aseguro de que todo funcione en producción." },
      ],
    },
    cta: {
      label: "¿Buscas una desarrolladora?",
      heading: "Estoy lista para",
      headingAccent: "sumarme a tu equipo",
      description:
        "Disponible para posiciones full-time, part-time y proyectos freelance.",
      btn1: "Escríbeme",
      btn2: "Descargar CV",
      btn3: "Contáctame por correo",
    },
    contact: {
      label: "Contacto",
      heading: "¿Quieres",
      headingAccent: "contratarme?",
      subheading:
        "Disponible para sumarme a equipos de desarrollo.",
      whatsapp: "Contacto rápido vía WhatsApp",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      availableText: "Disponible para nuevos proyectos",
      socialLabel: "Redes sociales",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailFieldLabel: "Email",
      emailPlaceholder: "tu@email.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿De qué se trata?",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto, idea o consulta...",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      successTitle: "¡Mensaje enviado!",
      successText: "Gracias por escribirme. Te responderé pronto.",
      successBtn: "Enviar otro mensaje",
      errorText: "Hubo un error al enviar el mensaje. Por favor intentá de nuevo.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Construyendo desde Santiago, Chile.",
      nav: "Navegación",
    },
    projectModal: {
      role: "Rol",
      stack: "Stack",
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de datos",
      tools: "Herramientas",
      whatIDid: "Qué hice",
      decision: "Decisión técnica",
      challenge: "Desafío resuelto",
      viewRepo: "Ver repositorio",
      viewLive: "Ver demo",
      viewDetail: "Ver detalle",
      close: "Cerrar",
    },
    langBar: {
      label: "Idioma",
    },
  },

  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      cta: "Let's talk",
    },
    hero: {
      badge1: "Available for hire",
      badge2: "Available for projects",
      greeting: "Hi, I'm",
      role: "Full Stack Developer",
      tagline:
        "I build digital products that work — from backend to frontend, with clear methodologies enabling clean and efficient code.",
      cta1: "See my projects",
      cta2: "Download CV",
    },
    about: {
      label: "About me",
      heading: "From the classroom to",
      headingAccent: "code",
      bio: "Computer Engineering student (in progress) with a technical degree as Programmer Analyst and real company experience. I handle the full development cycle: database architecture, REST APIs, business logic and frontend. I'm motivated to join teams where I can contribute from day one and keep growing technically.",
      extra:
        "Before transitioning into software development, I was a Philosophy teacher for over 8 years and hold a Master's degree in Education. That chapter taught me to communicate complex ideas clearly, manage projects with limited resources and collaborate with diverse teams — skills I apply directly to software development.",
      openToWork: "Open to work",
    },
    skills: {
      label: "Skills",
      heading: "My",
      headingAccent: "tech stack",
      categories: {
        "Lenguajes & Frameworks": "Languages & Frameworks",
        "Bases de Datos & ORM": "Databases & ORM",
        "Herramientas & Metodologías": "Tools & Methodologies",
        "Cloud & Deploy": "Cloud & Deploy",
      },
    },
    projects: {
      label: "Projects",
      heading: "Things I've",
      headingAccent: "built",
      live: "Live demo",
      code: "Code",
      moreOnGithub: "More on GitHub",
      items: [
        {
          id: 1,
          title: "Eclipse FM 107.7 — Web & Dashboard",
          description:
            "Full-stack platform for Radio Eclipse FM 107.7. Public site with live audio streaming, integrated chat, weekly program schedule, blog and news. Admin panel with 3 roles (Admin/SubAdmin/Team), NextAuth v5 + bcryptjs authentication, serverless PostgreSQL (Neon), transactional emails with Resend and schema validation with Zod.",
          role: "Sole developer — freelance project",
          bullets: [
            "Implemented real-time audio streaming player with integrated chat, allowing listeners to interact during live broadcasts.",
            "Developed admin dashboard with differentiated roles (Admin/SubAdmin/Team) for managing programs, sponsors, blog and news.",
            "Built weekly program schedule, program catalog and local news section with a complete content management system.",
          ],
          decision:
            "I chose NextAuth v5 for dashboard authentication due to its native integration with the Next.js App Router and flexible provider support. Keeping the public site and admin panel in the same codebase simplifies deployment and maintenance.",
          challenge:
            "Keeping the streaming player active across navigations without interrupting playback required a global context that persists audio state outside the route tree, preventing the component from unmounting on page change.",
        },
        {
          id: 2,
          title: "SII Automation Suite",
          description:
            "Two desktop tools to automate tax operations on Chile's SII portal. Invoice module with bulk processing, up to 3 concurrent threads and professional installer. Fee receipts module with full flow: authentication, bulk processing and reports.",
          role: "Sole developer — 2026",
          bullets: [
            "Invoice module (completed): bulk processing via Excel with up to 3 concurrent Chrome threads, headless mode, automatic report generation and a professional installer with PyInstaller + Inno Setup.",
            "Fee receipts module (in progress): replicates the base PyQt5 + QThread + Selenium architecture and is being integrated with the specific SII portal flow.",
            "Built the PyQt5 interface with real-time monitoring through operation logs, a progress bar and a thread-safe queue for thread synchronization.",
          ],
          decision:
            "I chose Selenium over direct SII APIs since the portal doesn't expose public endpoints. The QThread worker architecture keeps the UI responsive during concurrent processing.",
          challenge:
            "Synchronizing up to 3 simultaneous Chrome instances created race conditions in the logging system. I solved it by implementing a thread-safe queue with Python's queue.Queue to guarantee log integrity.",
        },
        {
          id: 4,
          title: "PlantiDex Mobile",
          description:
            "Hybrid mobile app for recording and sharing native plant species observations. Photo capture, GPS geolocation and offline-first persistence for field use without internet.",
          role: "Sole developer — academic project",
          bullets: [
            "Implemented native camera and GPS integration with Capacitor, requesting Android permissions at runtime with clear user feedback on denial.",
            "Developed offline-first persistence with @ionic/storage-angular (localForage) to record field observations without an internet connection.",
            "Built reactive state management with RxJS's BehaviorSubject to keep the species list synchronized in real time across multiple views.",
          ],
          decision:
            "I chose Ionic + Angular + Capacitor for the combination of web productivity with real access to native hardware (camera, GPS). The offline-first approach with localForage was key to ensuring usability in rural areas with limited connectivity.",
          challenge:
            "Integrating native Android permissions with Capacitor required explicit handling of states (granted/denied/not requested) each session. I solved it by implementing a centralized permissions service that checks status before every camera or GPS call.",
        },
        {
          id: 6,
          title: "Aguas Mi Sur — Institutional Website",
          description:
            "Institutional website for a purified water distribution company in Chile. Dynamic Markdown content rendering, serverless PostgreSQL with Prisma v7 and Neon, Zod v4 validation and continuous deployment on Vercel.",
          role: "Sole developer — freelance project",
          bullets: [
            "Developed a fully responsive institutional website with Next.js 16 App Router and Tailwind CSS v4.",
            "Integrated a serverless PostgreSQL database with Prisma v7 for dynamic content management.",
            "Configured Turbopack for optimized builds and continuous deployment on Vercel in a serverless environment.",
          ],
          decision:
            "I chose Next.js 16 with Turbopack for its development speed and serverless deployment on Vercel, ideal for an institutional site that requires low maintenance and high availability.",
          challenge:
            "Configuring Prisma v7 with Neon's serverless PostgreSQL adapter required specific adjustments for Vercel's serverless environment, ensuring efficient connections without pool exhaustion in edge functions.",
        },
        {
          id: 7,
          title: "PhantasiaWeb — Corporate Site",
          description:
            "Corporate website for Phantasia, a software design and development studio. Internationalization in three languages (ES/EN/FR) with locale-based routing, dark/light mode with system preference detection, and a 6-step onboarding form that persists leads to the database and sends automatic email notifications.",
          role: "Sole developer — freelance project",
          bullets: [
            "Implemented internationalization in three languages (ES/EN/FR) with locale-based routing on the Next.js App Router.",
            "Developed dark/light mode with automatic detection of the user's system preference.",
            "Built a 6-step onboarding form that persists leads to the database and triggers automatic email notifications with Resend.",
          ],
          decision:
            "I chose Next.js locale-based routing over an external i18n library to keep the bundle light and natively leverage the App Router across the site's three versions.",
          challenge:
            "Syncing the 6-step form's state between steps without losing data on page refreshes required intermediate client-side persistence before the final submission to the database.",
        },
        {
          id: 8,
          title: "Asegalbyf Asesorías — E-commerce",
          description:
            "E-commerce platform for selling advisory services. Manageable dashboard for service management and checkout with Transbank payment integration. Built solo in 3 weeks and deployed to production.",
          role: "Sole developer — freelance project",
          bullets: [
            "Developed a manageable dashboard for managing the services offered by the brokerage.",
            "Integrated checkout with the Transbank payment gateway to process production transactions.",
            "Delivered the entire project solo within 3 weeks, from requirements gathering to deployment.",
          ],
          decision:
            "I prioritized Prisma ORM over direct queries to keep a type-safe data schema and speed up development given the tight 3-week deadline.",
          challenge:
            "Integrating with the Transbank API required carefully handling transaction states (approved, rejected, voided) to avoid inconsistencies between payment status and order status in the database.",
        },
        {
          id: 9,
          title: "StayCool — Personal Agenda",
          description:
            "Personal agenda mobile app that tracks wellness, personal image, social activities, hygiene and expenses. Includes premium subscriptions with RevenueCat, a gamified reward system (MOOney) for avatar customization, and 'My Summary': PDF generation with activity statistics. In development since August 2026.",
          role: "Sole developer — personal project",
          bullets: [
            "Designed a modular feature-based architecture (wellness, image, hair, hygiene, social, expenses, preferences, notes) with a consistent types/services/hooks/screens pattern in every module.",
            "Implemented a premium subscription system (Basic and Full plans) with RevenueCat and gamified rewards (MOOney) for avatar customization.",
            "Built PDF generation with activity statistics ('My Summary'), local push notifications and deep links for password recovery.",
          ],
          decision:
            "I chose Expo + React Native over separate native development for iOS/Android for the iteration speed with EAS Build/Update, prioritizing fast feature delivery on an app still under active development.",
          challenge:
            "Keeping consistency across the multiple feature modules (wellness, image, hygiene, etc.) required defining numbered database migrations and Edge Functions for sensitive operations, avoiding duplicated business logic on the client.",
        },
        {
          id: 10,
          title: "ALT — Asamblea Las Torres",
          description:
            "Website for Asamblea Las Torres, a self-managed community organization dedicated to environmental and social regeneration in Quilicura. Features the organization's history, a catalog of reforestation projects (Miyawaki method) and urban art interventions, and a contact form for collaborations.",
          role: "Sole developer — personal / organization project",
          bullets: [
            "Developed a catalog of reforestation and urban art projects organized into three work areas: environmental, social and cultural.",
            "Built a contact form to manage collaborations from neighbors and volunteers interested in participating.",
            "Implemented a visual gallery of completed interventions and a presentation of the organization since its founding in 2019.",
          ],
          decision:
            "I chose Next.js with Prisma to keep project and collaboration content structured in a database, making future updates easier without touching code, since the organization keeps adding initiatives continuously.",
          challenge:
            "Translating the organization's horizontal, self-managed work into a clear data structure (projects, work areas, interventions) that would be easy to maintain for people without technical knowledge.",
        },
      ],
    },
    experience: {
      label: "Experience",
      heading: "Where I've",
      headingAccent: "worked",
      items: [
        {
          role: "Full Stack Developer (Professional Internship, 360 hrs)",
          description:
            "360-hour internship for Programmer Analyst certification. Developed a bilingual (ES/EN) institutional website in WordPress with Divi child theme, dynamic JavaScript translation system (data-es/data-en), WPForms integration with glassmorphism styles, reCAPTCHA v2 and Polylang configuration. Architecture under DDD multi-tenant.",
        },
        {
          role: "Full Stack Developer",
          description:
            "Freelance development of digital products for the studio and its clients. Built the multilingual corporate website (ES/EN/FR) with Next.js 16, a 6-step lead capture system with database storage and email notifications (Resend). Web development for external clients of the studio.",
        },
        {
          role: "Philosophy Teacher — Formal Education",
          description:
            "Teacher in public and private schools. Developed skills in curriculum planning, effective communication and group management.",
        },
        {
          role: "Project Director",
          description:
            "Agile management of social, cultural and environmental projects. Scope definition, coordination of multidisciplinary teams and problem-solving in dynamic contexts.",
        },
      ],
    },
    education: {
      label: "Education",
      heading: "My",
      headingAccent: "academic background",
      items: [
        {
          degree: "Computer Engineering",
          description:
            "Software development, database architecture and design patterns (MVC). Featured projects with Spring Boot and mobile applications with Ionic.",
        },
        {
          degree: "Programmer Analyst (Technical Degree)",
          description:
            "Technical degree obtained with a 360-hour professional internship at Mimasoft under multi-tenant architecture and DDD.",
        },
        {
          degree: "FullStack Software Development",
          description:
            "Intensive full stack development bootcamp. First step in the transition into the software world.",
        },
        {
          degree: "Master's in Education",
          description:
            "Educational research, curriculum design and pedagogical project management. Methodological rigor and communication of complex ideas — skills I now apply directly to software development.",
        },
        {
          degree: "Bachelor's in Philosophy",
          description:
            "Training in critical thinking, structured argumentation and systems analysis. A foundation that enhances my ability to design clean solutions and reason about complex architectures.",
        },
      ],
    },
    process: {
      label: "My process",
      heading: "How I",
      headingAccent: "work",
      steps: [
        { title: "Analysis", description: "I understand the problem deeply before writing a single line of code." },
        { title: "Design", description: "I define the architecture and data structure that fits the project best." },
        { title: "Backend", description: "I build solid, secure and well-documented APIs with Spring Boot or Node.js." },
        { title: "Frontend", description: "I turn logic into reactive, clean and accessible interfaces." },
        { title: "Delivery", description: "I deploy, document and ensure everything works correctly in production." },
      ],
    },
    cta: {
      label: "Looking for a developer?",
      heading: "I'm ready to",
      headingAccent: "join your team",
      description:
        "Available for full-time, part-time and freelance projects.",
      btn1: "Message me",
      btn2: "Download CV",
      btn3: "Contact me by email",
    },
    contact: {
      label: "Contact",
      heading: "Want to",
      headingAccent: "hire me?",
      subheading:
        "Available to join development teams.",
      whatsapp: "Quick contact via WhatsApp",
      emailLabel: "Email",
      locationLabel: "Location",
      availableText: "Available for new projects",
      socialLabel: "Social media",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailFieldLabel: "Email",
      emailPlaceholder: "you@email.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "What is it about?",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project, idea or question...",
      submit: "Send message",
      sending: "Sending...",
      successTitle: "Message sent!",
      successText: "Thanks for reaching out. I'll get back to you soon.",
      successBtn: "Send another message",
      errorText: "There was an error sending your message. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Building from Santiago, Chile.",
      nav: "Navigation",
    },
    projectModal: {
      role: "Role",
      stack: "Stack",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
      whatIDid: "What I did",
      decision: "Technical decision",
      challenge: "Challenge solved",
      viewRepo: "View repository",
      viewLive: "View demo",
      viewDetail: "See detail",
      close: "Close",
    },
    langBar: {
      label: "Language",
    },
  },
  fr: {
    nav: {
      about: "À propos",
      projects: "Projets",
      experience: "Expérience",
      education: "Formation",
      contact: "Contact",
      cta: "Discutons",
    },
    hero: {
      badge1: "Disponible à l'embauche",
      badge2: "Disponible pour des projets",
      greeting: "Bonjour, je suis",
      role: "Développeuse Full Stack",
      tagline:
        "Je construis des produits numériques qui fonctionnent — du backend au frontend, avec des méthodologies claires permettant un code propre et efficace.",
      cta1: "Voir mes projets",
      cta2: "Télécharger le CV",
    },
    about: {
      label: "À propos",
      heading: "De la salle de classe au",
      headingAccent: "code",
      bio: "Étudiante en Ingénierie Informatique (en cours) avec un diplôme technique d'Analyste Programmeuse et une expérience en entreprise réelle. Je maîtrise le cycle complet : architecture de base de données, API REST, logique métier et frontend. Je suis motivée à rejoindre des équipes où je peux apporter de la valeur dès le premier jour et continuer à grandir techniquement.",
      extra:
        "Avant de me consacrer au développement, j'ai été professeure de Philosophie pendant plus de 8 ans et je suis titulaire d'un Master en Éducation. Cette étape m'a appris à communiquer des idées complexes clairement, à gérer des projets avec des ressources limitées et à travailler avec des équipes diverses — des compétences que j'applique directement au développement logiciel.",
      openToWork: "Disponible",
    },
    skills: {
      label: "Compétences",
      heading: "Ma",
      headingAccent: "stack technique",
      categories: {
        "Lenguajes & Frameworks": "Langages & Frameworks",
        "Bases de Datos & ORM": "Bases de données & ORM",
        "Herramientas & Metodologías": "Outils & Méthodologies",
        "Cloud & Deploy": "Cloud & Déploiement",
      },
    },
    projects: {
      label: "Projets",
      heading: "Choses que j'ai",
      headingAccent: "construites",
      live: "Démo live",
      code: "Code",
      moreOnGithub: "Plus sur GitHub",
      items: [
        {
          id: 1,
          title: "Eclipse FM 107.7 — Web & Dashboard",
          description:
            "Plateforme full-stack pour Radio Eclipse FM 107.7. Site public avec lecteur audio en direct, chat intégré, grille de programmation hebdomadaire, blog et actualités. Panneau d'administration avec 3 rôles (Admin/SubAdmin/Team), authentification NextAuth v5 + bcryptjs, PostgreSQL serverless (Neon), emails avec Resend et validation avec Zod.",
          role: "Développeuse unique — projet freelance",
          bullets: [
            "J'ai implémenté un lecteur audio en streaming en temps réel avec chat intégré, permettant aux auditeurs d'interagir pendant les diffusions en direct.",
            "J'ai développé un tableau de bord d'administration avec des rôles différenciés (Admin/SubAdmin/Team) pour la gestion des programmes, sponsors, blog et actualités.",
            "J'ai construit une grille de programmation hebdomadaire, un catalogue d'émissions et une section d'actualités locales avec un système complet de gestion de contenu.",
          ],
          decision:
            "J'ai choisi NextAuth v5 pour l'authentification du tableau de bord grâce à son intégration native avec le App Router de Next.js et son support flexible des providers. La séparation entre le site public et le panneau admin dans la même base de code simplifie le déploiement et la maintenance.",
          challenge:
            "Maintenir le lecteur de streaming actif entre les navigations sans interrompre la lecture a nécessité un contexte global qui persiste l'état audio en dehors de l'arbre de routes, évitant que le composant ne soit démonté lors du changement de page.",
        },
        {
          id: 2,
          title: "Suite d'automatisation SII",
          description:
            "Deux outils bureau pour automatiser les opérations fiscales sur le portail SII du Chili. Module factures avec traitement en masse, jusqu'à 3 fils concurrents et installateur professionnel. Module honoraires avec flux complet : authentification, traitement en masse et rapports.",
          role: "Développeuse unique — 2026",
          bullets: [
            "Module factures (terminé) : traitement en masse via Excel avec jusqu'à 3 fils Chrome concurrents, mode headless, génération automatique de rapports et installateur professionnel avec PyInstaller + Inno Setup.",
            "Module honoraires (en développement) : reprend l'architecture de base PyQt5 + QThread + Selenium et est en cours d'intégration avec le flux spécifique du portail SII.",
            "J'ai construit l'interface PyQt5 avec un suivi en temps réel via des logs d'opération, une barre de progression et une file thread-safe pour la synchronisation des threads.",
          ],
          decision:
            "J'ai opté pour Selenium plutôt que les API directes du SII car le portail n'expose pas d'endpoints publics. L'architecture de workers en QThread garde l'interface réactive pendant le traitement concurrent.",
          challenge:
            "La synchronisation de jusqu'à 3 instances Chrome simultanées créait des conditions de concurrence dans le système de logs. J'ai résolu cela en implémentant une file thread-safe avec queue.Queue de Python pour garantir l'intégrité des enregistrements.",
        },
        {
          id: 4,
          title: "PlantiDex Mobile",
          description:
            "Application mobile hybride pour enregistrer et partager des observations de flore native. Capture photo, géolocalisation GPS et persistance offline-first pour une utilisation terrain sans connexion.",
          role: "Développeuse unique — projet académique",
          bullets: [
            "J'ai implémenté l'intégration native caméra et GPS avec Capacitor, en demandant les permissions Android à l'exécution avec un retour clair à l'utilisateur en cas de refus.",
            "J'ai développé une persistance offline-first avec @ionic/storage-angular (localForage) pour enregistrer les observations sur le terrain sans connexion internet.",
            "J'ai construit une gestion d'état réactive avec BehaviorSubject de RxJS pour garder la liste des espèces synchronisée en temps réel à travers plusieurs vues.",
          ],
          decision:
            "J'ai choisi Ionic + Angular + Capacitor pour combiner la productivité web avec un accès réel au matériel natif (caméra, GPS). L'approche offline-first avec localForage était essentielle pour garantir l'utilisabilité dans les zones rurales à connectivité limitée.",
          challenge:
            "L'intégration des permissions natives Android avec Capacitor a nécessité une gestion explicite des états (accordé/refusé/non demandé) à chaque session. J'ai résolu cela en implémentant un service de permissions centralisé qui vérifie l'état avant chaque appel caméra ou GPS.",
        },
        {
          id: 6,
          title: "Aguas Mi Sur — Site Institutionnel",
          description:
            "Site web institutionnel pour une entreprise de distribution d'eau purifiée au Chili. Rendu de contenu en Markdown, base de données PostgreSQL serverless avec Prisma v7 et Neon, validation avec Zod v4 et déploiement continu sur Vercel.",
          role: "Développeuse unique — projet freelance",
          bullets: [
            "J'ai développé un site institutionnel entièrement responsive avec Next.js 16 App Router et Tailwind CSS v4.",
            "J'ai intégré une base de données PostgreSQL serverless avec Prisma v7 pour la gestion de contenus dynamiques.",
            "J'ai configuré Turbopack pour des builds optimisés et un déploiement continu sur Vercel dans un environnement serverless.",
          ],
          decision:
            "J'ai choisi Next.js 16 avec Turbopack pour sa vitesse de développement et le déploiement serverless sur Vercel, idéal pour un site institutionnel nécessitant peu de maintenance et une haute disponibilité.",
          challenge:
            "La configuration de Prisma v7 avec l'adaptateur PostgreSQL serverless de Neon a nécessité des ajustements spécifiques pour l'environnement serverless de Vercel, garantissant des connexions efficaces sans épuisement du pool dans les fonctions edge.",
        },
        {
          id: 7,
          title: "PhantasiaWeb — Site Corporatif",
          description:
            "Site web corporatif pour Phantasia, studio de design et développement logiciel. Internationalisation en trois langues (ES/EN/FR) avec routage par locale, mode sombre/clair avec détection de la préférence système, et formulaire d'onboarding en 6 étapes qui persiste les leads en base de données et envoie des notifications automatiques par email.",
          role: "Développeuse unique — projet freelance",
          bullets: [
            "J'ai implémenté l'internationalisation en trois langues (ES/EN/FR) avec routage par locale sur le App Router de Next.js.",
            "J'ai développé le mode sombre/clair avec détection automatique de la préférence système de l'utilisateur.",
            "J'ai construit un formulaire d'onboarding en 6 étapes qui persiste les leads en base de données et déclenche des notifications automatiques par email avec Resend.",
          ],
          decision:
            "J'ai choisi le routage par locale de Next.js plutôt qu'une librairie i18n externe pour garder le bundle léger et exploiter nativement le App Router sur les trois versions du site.",
          challenge:
            "Synchroniser l'état du formulaire en 6 étapes sans perdre de données lors des rafraîchissements de page a nécessité une persistance intermédiaire côté client avant l'envoi final en base de données.",
        },
        {
          id: 8,
          title: "Asegalbyf Asesorías — E-commerce",
          description:
            "Plateforme e-commerce pour la vente de services de conseil. Tableau de bord administrable pour la gestion des services et checkout avec intégration des paiements Transbank. Développé en solo en 3 semaines et déployé en production.",
          role: "Développeuse unique — projet freelance",
          bullets: [
            "J'ai développé un tableau de bord administrable pour la gestion des services offerts par le courtage.",
            "J'ai intégré un checkout avec la passerelle de paiement Transbank pour traiter les transactions en production.",
            "J'ai livré le projet complet en solo en 3 semaines, du recueil des besoins jusqu'au déploiement.",
          ],
          decision:
            "J'ai privilégié Prisma ORM plutôt que des requêtes directes pour garder un schéma de données type-safe et accélérer le développement compte tenu du délai serré de 3 semaines.",
          challenge:
            "L'intégration avec l'API Transbank a nécessité de gérer soigneusement les états de transaction (approuvée, rejetée, annulée) pour éviter des incohérences entre le paiement et l'état de la commande en base de données.",
        },
        {
          id: 9,
          title: "StayCool — Agenda Personnel",
          description:
            "Application mobile d'agenda personnel qui enregistre le bien-être, l'image personnelle, les activités sociales, l'hygiène et les dépenses. Comprend des abonnements premium avec RevenueCat, un système de récompenses gamifié (MOOney) pour personnaliser l'avatar, et « Mon Résumé » : génération de PDF avec statistiques d'activité. En développement depuis août 2026.",
          role: "Développeuse unique — projet personnel",
          bullets: [
            "J'ai conçu une architecture modulaire par fonctionnalités (bien-être, image, cheveux, hygiène, social, dépenses, préférences, notes) avec un modèle cohérent types/services/hooks/screens dans chaque module.",
            "J'ai implémenté un système d'abonnements premium (plans Basic et Full) avec RevenueCat et des récompenses gamifiées (MOOney) pour la personnalisation de l'avatar.",
            "J'ai construit la génération de PDF avec statistiques d'activité (« Mon Résumé »), des notifications push locales et des liens profonds pour la récupération de mot de passe.",
          ],
          decision:
            "J'ai choisi Expo + React Native plutôt qu'un développement natif séparé pour iOS/Android pour la vitesse d'itération avec EAS Build/Update, en priorisant la livraison rapide de fonctionnalités sur une application encore en développement actif.",
          challenge:
            "Maintenir la cohérence entre les multiples modules de fonctionnalités (bien-être, image, hygiène, etc.) a nécessité de définir des migrations de base de données numérotées et des Edge Functions pour les opérations sensibles, évitant une logique métier dupliquée côté client.",
        },
        {
          id: 10,
          title: "ALT — Asamblea Las Torres",
          description:
            "Site web pour Asamblea Las Torres, organisation communautaire autogérée dédiée à la régénération environnementale et sociale à Quilicura. Présente l'histoire de l'organisation, un catalogue de projets de reforestation (méthode Miyawaki) et d'interventions d'art urbain, ainsi qu'un formulaire de contact pour les collaborations.",
          role: "Développeuse unique — projet personnel / organisation",
          bullets: [
            "J'ai développé un catalogue de projets de reforestation et d'art urbain organisés en trois axes de travail : environnemental, social et culturel.",
            "J'ai construit un formulaire de contact pour gérer les collaborations des voisins et bénévoles intéressés à participer.",
            "J'ai implémenté une galerie visuelle des interventions réalisées et une présentation de l'organisation depuis sa fondation en 2019.",
          ],
          decision:
            "J'ai choisi Next.js avec Prisma pour garder le contenu des projets et collaborations structuré en base de données, facilitant les mises à jour futures sans toucher au code, car l'organisation continue d'ajouter des initiatives en continu.",
          challenge:
            "Traduire le travail horizontal et autogéré de l'organisation en une structure de données claire (projets, axes, interventions) facile à maintenir par des personnes sans connaissances techniques.",
        },
      ],
    },
    experience: {
      label: "Expérience",
      heading: "Où j'ai",
      headingAccent: "travaillé",
      items: [
        {
          role: "Développeuse Full Stack (Stage professionnel, 360 h)",
          description:
            "Stage de 360 heures pour la certification d'Analyste Programmeuse. Développement d'un site institutionnel bilingue (ES/EN) sous WordPress avec Divi child theme, système de traduction dynamique JavaScript (data-es/data-en), intégration WPForms avec styles glassmorphism, reCAPTCHA v2 et configuration Polylang. Architecture DDD multi-tenant.",
        },
        {
          role: "Développeuse Full Stack",
          description:
            "Développement freelance de produits numériques pour le studio et ses clients. Construction du site web corporatif multilingue (ES/EN/FR) avec Next.js 16, système de captation de leads en 6 étapes avec stockage en base de données et notifications par email (Resend). Développement de sites et plateformes web pour les clients externes du studio.",
        },
        {
          role: "Professeure de Philosophie — Éducation formelle",
          description:
            "Enseignante dans des établissements publics et privés. Développement de compétences en planification curriculaire, communication efficace et gestion de groupes.",
        },
        {
          role: "Directrice de Projets",
          description:
            "Gestion agile de projets sociaux, culturels et environnementaux. Définition des périmètres, coordination d'équipes multidisciplinaires et résolution de problèmes dans des contextes dynamiques.",
        },
      ],
    },
    education: {
      label: "Formation",
      heading: "Mon",
      headingAccent: "parcours académique",
      items: [
        {
          degree: "Ingénierie Informatique",
          description:
            "Développement logiciel, architecture de base de données et patrons de conception (MVC). Projets remarquables avec Spring Boot et applications mobiles avec Ionic.",
        },
        {
          degree: "Analyste Programmeuse (Diplôme technique)",
          description:
            "Diplôme technique obtenu avec un stage professionnel de 360 heures chez Mimasoft sous architecture multi-tenant et DDD.",
        },
        {
          degree: "Développement Full Stack",
          description:
            "Bootcamp intensif de développement full stack. Première étape dans la transition vers le monde du logiciel.",
        },
        {
          degree: "Master en Éducation",
          description:
            "Recherche en éducation, conception curriculaire et gestion de projets pédagogiques. Rigueur méthodologique et communication d'idées complexes — des compétences que j'applique maintenant directement au développement logiciel.",
        },
        {
          degree: "Licence en Philosophie",
          description:
            "Formation à la pensée critique, à l'argumentation structurée et à l'analyse de systèmes. Une base qui renforce ma capacité à concevoir des solutions propres et à raisonner sur des architectures complexes.",
        },
      ],
    },
    process: {
      label: "Mon processus",
      heading: "Comment je",
      headingAccent: "travaille",
      steps: [
        { title: "Analyse", description: "Je comprends le problème en profondeur avant d'écrire la première ligne de code." },
        { title: "Conception", description: "Je définis l'architecture et la structure de données la plus adaptée au projet." },
        { title: "Backend", description: "Je construis des API solides, sécurisées et bien documentées avec Spring Boot ou Node.js." },
        { title: "Frontend", description: "Je transforme la logique en interfaces réactives, propres et accessibles." },
        { title: "Livraison", description: "Je déploie, documente et m'assure que tout fonctionne correctement en production." },
      ],
    },
    cta: {
      label: "Vous cherchez une développeuse ?",
      heading: "Je suis prête à",
      headingAccent: "rejoindre votre équipe",
      description:
        "Disponible pour des postes à temps plein, à temps partiel et des projets freelance.",
      btn1: "Écrivez-moi",
      btn2: "Télécharger le CV",
      btn3: "Me contacter par e-mail",
    },
    contact: {
      label: "Contact",
      heading: "Vous souhaitez",
      headingAccent: "m'embaucher ?",
      subheading:
        "Disponible pour rejoindre des équipes de développement.",
      whatsapp: "Contact rapide via WhatsApp",
      emailLabel: "E-mail",
      locationLabel: "Localisation",
      availableText: "Disponible pour de nouveaux projets",
      socialLabel: "Réseaux sociaux",
      nameLabel: "Nom",
      namePlaceholder: "Votre nom",
      emailFieldLabel: "E-mail",
      emailPlaceholder: "vous@email.com",
      subjectLabel: "Sujet",
      subjectPlaceholder: "De quoi s'agit-il ?",
      messageLabel: "Message",
      messagePlaceholder: "Parlez-moi de votre projet, idée ou question...",
      submit: "Envoyer le message",
      sending: "Envoi en cours...",
      successTitle: "Message envoyé !",
      successText: "Merci de m'avoir contactée. Je vous répondrai bientôt.",
      successBtn: "Envoyer un autre message",
      errorText: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
    },
    footer: {
      rights: "Tous droits réservés.",
      tagline: "Développement depuis Santiago, Chili.",
      nav: "Navigation",
    },
    projectModal: {
      role: "Rôle",
      stack: "Stack",
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de données",
      tools: "Outils",
      whatIDid: "Ce que j'ai fait",
      decision: "Décision technique",
      challenge: "Défi résolu",
      viewRepo: "Voir le dépôt",
      viewLive: "Voir la démo",
      viewDetail: "Voir le détail",
      close: "Fermer",
    },
    langBar: {
      label: "Langue",
    },
  },
} as const;

export type Translations = typeof translations.es;
