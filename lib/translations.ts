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
          title: "Eclipse FM 107.7 — Web & Dashboard",
          description:
            "Plataforma full-stack para Radio Eclipse FM 107.7. Sitio público con reproductor de audio en vivo, chat integrado, grilla de programación semanal, blog y noticias. Panel de administración con 3 roles (Admin/SubAdmin/Team), autenticación NextAuth v5 + bcryptjs, PostgreSQL serverless (Neon), emails con Resend y validación con Zod.",
        },
        {
          title: "Suite de Automatización SII",
          description:
            "Dos herramientas de escritorio para automatizar operaciones tributarias en el SII. Módulo de facturas con procesamiento masivo, hasta 3 hilos concurrentes e instalador profesional. Módulo de boletas con flujo completo: autenticación, procesamiento masivo y reportes.",
        },
        {
          title: "Tienda Berbelis",
          description:
            "E-commerce completo para venta de productos orgánicos. Catálogo con filtros, carrito persistente, checkout, panel de administración y despliegue en Vercel con PostgreSQL serverless.",
        },
        {
          title: "PlantiDex Mobile",
          description:
            "Aplicación móvil híbrida para registrar y compartir observaciones de flora nativa. Captura de fotos, geolocalización GPS y persistencia offline-first para uso en campo sin conexión.",
        },
        {
          title: "CTRL — Gestión de Usuarios y Proyectos",
          description:
            "Plataforma web MVC con autenticación por roles (Admin/User) y CRUD completo de usuarios y proyectos. Desarrollé la arquitectura con Java Spring Boot, Thymeleaf y H2 Database.",
        },
        {
          title: "Aguas Mi Sur — Sitio Institucional",
          description:
            "Sitio web institucional para empresa distribuidora de agua purificada en Chile. Renderizado de contenido en Markdown, base de datos PostgreSQL serverless con Prisma v7 y Neon, validación con Zod v4 y despliegue continuo en Vercel.",
        },
      ],
    },
    experience: {
      label: "Experiencia",
      heading: "Donde he",
      headingAccent: "trabajado",
      items: [
        {
          role: "Desarrolladora Full Stack",
          description:
            "Desarrollo freelance de productos digitales para el estudio y sus clientes. Construcción del sitio web corporativo multilingüe (ES/EN/FR) con Next.js 16, sistema de captación de leads de 6 pasos con almacenamiento en base de datos y notificaciones por email (Resend). Desarrollo de sitios y plataformas web para clientes externos del estudio.",
        },
        {
          role: "Desarrolladora Full Stack (Práctica)",
          description:
            "Práctica (360 horas) para salida intermedia Técnico Analista Programador. Desarrollé sitio web institucional bilingüe (ES/EN) en WordPress con Divi child theme, sistema de traducción dinámico JavaScript (data-es/data-en), integración de formularios WPForms con estilos glassmorphism, reCAPTCHA v2 y configuración Polylang. Arquitectura bajo DDD multi-tenant.",
        },
        {
          role: "Desarrolladora Full Stack",
          description:
            "Desarrollo de aplicaciones web full stack para clientes externos bajo metodologías ágiles. Construcción de sitios y plataformas con Next.js 15, gestión de base de datos con Prisma ORM sobre MySQL, PostgreSQL y Supabase, y despliegue continuo en Vercel. Coordinación directa con clientes para levantamiento y definición de requerimientos.",
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
          title: "Eclipse FM 107.7 — Web & Dashboard",
          description:
            "Full-stack platform for Radio Eclipse FM 107.7. Public site with live audio streaming, integrated chat, weekly program schedule, blog and news. Admin panel with 3 roles (Admin/SubAdmin/Team), NextAuth v5 + bcryptjs authentication, serverless PostgreSQL (Neon), transactional emails with Resend and schema validation with Zod.",
        },
        {
          title: "SII Automation Suite",
          description:
            "Two desktop tools to automate tax operations on Chile's SII portal. Invoice module with bulk processing, up to 3 concurrent threads and professional installer. Fee receipts module with full flow: authentication, bulk processing and reports.",
        },
        {
          title: "Tienda Berbelis",
          description:
            "Full e-commerce platform for organic health and beauty products. Product catalog with filters, persistent cart, checkout, admin panel and deployment on Vercel with serverless PostgreSQL.",
        },
        {
          title: "PlantiDex Mobile",
          description:
            "Hybrid mobile app for recording and sharing native plant species observations. Photo capture, GPS geolocation and offline-first persistence for field use without internet.",
        },
        {
          title: "CTRL — User & Project Management",
          description:
            "MVC web platform with role-based authentication (Admin/User) and full CRUD for users and projects. Built with Java Spring Boot, Thymeleaf and H2 Database.",
        },
        {
          title: "Aguas Mi Sur — Institutional Website",
          description:
            "Institutional website for a purified water distribution company in Chile. Dynamic Markdown content rendering, serverless PostgreSQL with Prisma v7 and Neon, Zod v4 validation and continuous deployment on Vercel.",
        },
      ],
    },
    experience: {
      label: "Experience",
      heading: "Where I've",
      headingAccent: "worked",
      items: [
        {
          role: "Full Stack Developer",
          description:
            "Freelance development of digital products for the studio and its clients. Built the multilingual corporate website (ES/EN/FR) with Next.js 16, a 6-step lead capture system with database storage and email notifications (Resend). Web development for external clients of the studio.",
        },
        {
          role: "Full Stack Developer (Internship)",
          description:
            "360-hour internship for Programmer Analyst certification. Developed a bilingual (ES/EN) institutional website in WordPress with Divi child theme, dynamic JavaScript translation system (data-es/data-en), WPForms integration with glassmorphism styles, reCAPTCHA v2 and Polylang configuration. Architecture under DDD multi-tenant.",
        },
        {
          role: "Full Stack Developer",
          description:
            "Full stack web application development for external clients under agile methodologies. Built sites and platforms with Next.js 15, database management with Prisma ORM on MySQL, PostgreSQL and Supabase, and continuous deployment on Vercel. Direct client coordination for requirements gathering and definition.",
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
          title: "Eclipse FM 107.7 — Web & Dashboard",
          description:
            "Plateforme full-stack pour Radio Eclipse FM 107.7. Site public avec lecteur audio en direct, chat intégré, grille de programmation hebdomadaire, blog et actualités. Panneau d'administration avec 3 rôles (Admin/SubAdmin/Team), authentification NextAuth v5 + bcryptjs, PostgreSQL serverless (Neon), emails avec Resend et validation avec Zod.",
        },
        {
          title: "Suite d'automatisation SII",
          description:
            "Deux outils bureau pour automatiser les opérations fiscales sur le portail SII du Chili. Module factures avec traitement en masse, jusqu'à 3 fils concurrents et installateur professionnel. Module honoraires avec flux complet : authentification, traitement en masse et rapports.",
        },
        {
          title: "Tienda Berbelis",
          description:
            "Plateforme e-commerce complète pour la vente de produits organiques. Catalogue avec filtres, panier persistant, checkout, panneau d'administration et déploiement sur Vercel avec PostgreSQL serverless.",
        },
        {
          title: "PlantiDex Mobile",
          description:
            "Application mobile hybride pour enregistrer et partager des observations de flore native. Capture photo, géolocalisation GPS et persistance offline-first pour une utilisation terrain sans connexion.",
        },
        {
          title: "CTRL — Gestion des utilisateurs et projets",
          description:
            "Plateforme web MVC avec authentification par rôles (Admin/Utilisateur) et CRUD complet. Développée avec Java Spring Boot, Thymeleaf et H2 Database.",
        },
        {
          title: "Aguas Mi Sur — Site Institutionnel",
          description:
            "Site web institutionnel pour une entreprise de distribution d'eau purifiée au Chili. Rendu de contenu en Markdown, base de données PostgreSQL serverless avec Prisma v7 et Neon, validation avec Zod v4 et déploiement continu sur Vercel.",
        },
      ],
    },
    experience: {
      label: "Expérience",
      heading: "Où j'ai",
      headingAccent: "travaillé",
      items: [
        {
          role: "Développeuse Full Stack",
          description:
            "Développement freelance de produits numériques pour le studio et ses clients. Construction du site web corporatif multilingue (ES/EN/FR) avec Next.js 16, système de captation de leads en 6 étapes avec stockage en base de données et notifications par email (Resend). Développement de sites et plateformes web pour les clients externes du studio.",
        },
        {
          role: "Développeuse Full Stack (Stage)",
          description:
            "Stage de 360 heures pour la certification d'Analyste Programmeuse. Développement d'un site institutionnel bilingue (ES/EN) sous WordPress avec Divi child theme, système de traduction dynamique JavaScript (data-es/data-en), intégration WPForms avec styles glassmorphism, reCAPTCHA v2 et configuration Polylang. Architecture DDD multi-tenant.",
        },
        {
          role: "Développeuse Full Stack",
          description:
            "Développement d'applications web full stack pour des clients externes sous méthodologies agiles. Construction de sites et plateformes avec Next.js 15, gestion de base de données avec Prisma ORM sur MySQL, PostgreSQL et Supabase, et déploiement continu sur Vercel. Coordination directe avec les clients pour le recueil et la définition des besoins.",
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
