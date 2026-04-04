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
      role: "Desarrolladora Full Stack — Técnico Analista Programador",
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
          title: "PlantiDex Mobile",
          description:
            "Aplicación móvil híbrida para registrar y compartir observaciones de flora nativa a nivel comunitario. Desarrollé el frontend móvil completo con persistencia local, formularios reactivos y permisos nativos.",
        },
        {
          title: "CTRL — Gestión de Usuarios y Proyectos",
          description:
            "Aplicación web MVC para gestión administrativa con control de roles (Admin/User). Diseñé la arquitectura de base de datos e implementé autenticación y autorización con Spring Boot.",
        },
        {
          title: "Asegal ByF — Dashboard de Administración",
          description:
            "Panel de administración moderno para gestionar contenido web (blog, servicios, imágenes). Desarrollé el frontend con Next.js con arquitectura de componentes eficiente.",
        },
        {
          title: "Asesorías Valdivia — Sistema Contable",
          description:
            "Sistema de gestión contable desarrollado desde cero. Diseño de base de datos, backend con Node.js y Prisma, e interfaz con React.",
        },
      ],
    },
    experience: {
      label: "Experiencia",
      heading: "Donde he",
      headingAccent: "trabajado",
      items: [
        {
          role: "Desarrolladora Full Stack (Práctica)",
          description:
            "Práctica de 360 horas para titulación de Técnico Analista Programadora. Soporte, desarrollo e implementación de funcionalidades bajo arquitectura multi-tenant con Domain-Driven Design. Diseño de mockups y desarrollo de página web institucional con WordPress.",
        },
        {
          role: "Desarrolladora Full Stack",
          description:
            "Desarrollo de aplicaciones web full stack bajo metodologías ágiles. Coordinación con cliente para definición de requerimientos, implementación de bases de datos relacionales y APIs REST.",
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
    cta: {
      label: "¿Buscas una desarrolladora?",
      heading: "Estoy lista para",
      headingAccent: "sumarme a tu equipo",
      description:
        "Disponible para posiciones full-time, part-time y proyectos freelance. Con experiencia en Java, Spring Boot, Python y React — y ganas de seguir creciendo.",
      btn1: "Escríbeme por WhatsApp",
      btn2: "Descargar CV",
      btn3: "Contáctame directamente",
    },
    contact: {
      label: "Contacto",
      heading: "¿Quieres",
      headingAccent: "contratarme?",
      subheading:
        "Disponible para sumarte a equipos de desarrollo. Respondo en menos de 24 horas.",
      whatsapp: "Contacto rápido vía WhatsApp",
      emailLabel: "Email",
      locationLabel: "Ubicación",
      availableText: "Disponible para nuevos proyectos",
      availableNote: "Tiempo de respuesta: menos de 24 horas en días hábiles.",
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
      role: "Full Stack Developer — Certified Programmer Analyst",
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
          title: "PlantiDex Mobile",
          description:
            "Hybrid mobile app for recording and sharing native flora observations at a community level. I built the complete mobile frontend with local persistence, reactive forms and native permissions.",
        },
        {
          title: "CTRL — User & Project Management",
          description:
            "MVC web application for administrative management with role-based access control (Admin/User). I designed the database architecture and implemented authentication and authorization with Spring Boot.",
        },
        {
          title: "Asegal ByF — Admin Dashboard",
          description:
            "Modern administration panel for managing web content (blog, services, images). I developed the frontend and admin interface using Next.js with an efficient component architecture.",
        },
        {
          title: "Asesorías Valdivia — Accounting System",
          description:
            "Accounting management system built from scratch. Database design, backend with Node.js and Prisma, and React interface.",
        },
      ],
    },
    experience: {
      label: "Experience",
      heading: "Where I've",
      headingAccent: "worked",
      items: [
        {
          role: "Full Stack Developer (Internship)",
          description:
            "360-hour internship for Programmer Analyst certification. Support, development and implementation of features under a multi-tenant architecture with Domain-Driven Design. Mockup design and development of the institutional website with WordPress.",
        },
        {
          role: "Full Stack Developer",
          description:
            "Full stack web application development under agile methodologies. Client coordination for requirements definition, implementation of relational databases and REST APIs.",
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
    cta: {
      label: "Looking for a developer?",
      heading: "I'm ready to",
      headingAccent: "join your team",
      description:
        "Available for full-time, part-time and freelance projects. Experienced in Java, Spring Boot, Python and React — eager to keep growing.",
      btn1: "Message me on WhatsApp",
      btn2: "Download CV",
      btn3: "Contact me directly",
    },
    contact: {
      label: "Contact",
      heading: "Want to",
      headingAccent: "hire me?",
      subheading:
        "Available to join development teams. I respond within 24 hours.",
      whatsapp: "Quick contact via WhatsApp",
      emailLabel: "Email",
      locationLabel: "Location",
      availableText: "Available for new projects",
      availableNote: "Response time: less than 24 hours on business days.",
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
      role: "Développeuse Full Stack — Analyste Programmeuse Certifiée",
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
          title: "PlantiDex Mobile",
          description:
            "Application mobile hybride pour enregistrer et partager des observations de flore native à l'échelle communautaire. J'ai développé l'intégralité du frontend mobile avec persistance locale, formulaires réactifs et permissions natives.",
        },
        {
          title: "CTRL — Gestion des utilisateurs et projets",
          description:
            "Application web MVC pour la gestion administrative avec contrôle d'accès basé sur les rôles (Admin/Utilisateur). J'ai conçu l'architecture de la base de données et implémenté l'authentification et l'autorisation avec Spring Boot.",
        },
        {
          title: "Asegal ByF — Tableau de bord d'administration",
          description:
            "Panneau d'administration moderne pour gérer le contenu web (blog, services, images). J'ai développé le frontend et l'interface d'administration avec Next.js et une architecture de composants efficace.",
        },
        {
          title: "Asesorías Valdivia — Système de comptabilité",
          description:
            "Système de gestion comptable développé de zéro. Conception de la base de données, backend avec Node.js et Prisma, et interface avec React.",
        },
      ],
    },
    experience: {
      label: "Expérience",
      heading: "Où j'ai",
      headingAccent: "travaillé",
      items: [
        {
          role: "Développeuse Full Stack (Stage)",
          description:
            "Stage de 360 heures pour la certification d'Analyste Programmeuse. Support, développement et implémentation de fonctionnalités sous une architecture multi-tenant avec Domain-Driven Design. Conception de maquettes et développement du site institutionnel avec WordPress.",
        },
        {
          role: "Développeuse Full Stack",
          description:
            "Développement d'applications web full stack sous méthodologies agiles. Coordination avec le client pour la définition des besoins, implémentation de bases de données relationnelles et d'API REST.",
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
    cta: {
      label: "Vous cherchez une développeuse ?",
      heading: "Je suis prête à",
      headingAccent: "rejoindre votre équipe",
      description:
        "Disponible pour des postes à temps plein, à temps partiel et des projets freelance. Expérimentée en Java, Spring Boot, Python et React — désireuse de continuer à progresser.",
      btn1: "Écrivez-moi sur WhatsApp",
      btn2: "Télécharger le CV",
      btn3: "Me contacter directement",
    },
    contact: {
      label: "Contact",
      heading: "Vous souhaitez",
      headingAccent: "m'embaucher ?",
      subheading:
        "Disponible pour rejoindre des équipes de développement. Je réponds en moins de 24 heures.",
      whatsapp: "Contact rapide via WhatsApp",
      emailLabel: "E-mail",
      locationLabel: "Localisation",
      availableText: "Disponible pour de nouveaux projets",
      availableNote: "Délai de réponse : moins de 24 heures les jours ouvrables.",
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
    langBar: {
      label: "Langue",
    },
  },
} as const;

export type Translations = typeof translations.es;
