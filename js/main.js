const translations = {
      pt: {
        title: "Jéssica Rodrigues",
        subtitle: "👩‍💻 Engenheira de Software | Web Developer | Back-end Developer",
        btnContact: "Entre em Contato",
        projectsTitle: "Projetos",
        projectCrud: "CRUD com Entity Framework, Migrations e SQLite.",
        projectApi: "API Java com Spring Boot, JWT e autenticação segura.",
        projectBlog: "Blog de tecnologia feito com Node.js e MongoDB.",
        advancedProjectsTitle: "Projetos Avançados",
        advancedProjectFiapDesc: "Repositórios com desafios de cada módulo da pós-graduação.",
        advancedProjectHackathonDesc: "Projeto desenvolvido durante o hackathon da pós-graduação.",
        aboutTitle: "Sobre Mim",
        aboutText: "Sou uma engenheira de software apaixonada por tecnologia, com experiência em C# e Java, sempre buscando evoluir minhas habilidades.",
        contactTitle: "Contato",
        footer: "Desenvolvido por Jéssica Rodrigues"
      },
      en: {
        title: "Jéssica Rodrigues",
        subtitle: "👩‍💻 Software Engineer | Web Developer | Back-end Developer",
        btnContact: "Get in Touch",
        projectsTitle: "Projects",
        projectCrud: "CRUD with Entity Framework, Migrations and SQLite.",
        projectApi: "Java API with Spring Boot, JWT and secure authentication.",
        projectBlog: "Tech blog built with Node.js and MongoDB.",
        advancedProjectsTitle: "Advanced Projects",
        advancedProjectFiapDesc: "Repositories with challenges from each module of the postgraduate course.",
        advancedProjectHackathonDesc: "Project developed during the postgraduate hackathon.",
        aboutTitle: "About Me",
        aboutText: "I'm a software engineer passionate about technology, experienced in C# and Java, always seeking to grow my skills.",
        contactTitle: "Contact",
        footer: "Developed by Jéssica Rodrigues"
      },
      es: {
        title: "Jéssica Rodrigues",
        subtitle: "👩‍💻 Ingeniera de Software | Desarrolladora Web | Back-end Developer",
        btnContact: "Contáctame",
        projectsTitle: "Proyectos",
        projectCrud: "CRUD con Entity Framework, Migrations y SQLite.",
        projectApi: "API en Java con Spring Boot, JWT y autenticación segura.",
        projectBlog: "Blog de tecnología hecho con Node.js y MongoDB.",
        advancedProjectsTitle: "Proyectos Avanzados",
        advancedProjectFiapDesc: "Repositorios con desafíos de cada módulo de la posgrado.",
        advancedProjectHackathonDesc: "Proyecto desarrollado durante el hackathon de la posgrado.",
        aboutTitle: "Sobre Mí",
        aboutText: "Soy una ingeniera de software apasionada por la tecnología, con experiencia en C# y Java, siempre buscando mejorar mis habilidades.",
        contactTitle: "Contacto",
        footer: "Desarrollado por Jéssica Rodrigues"
      }
    };

    function setLang(lang) {
      document.getElementById('title').innerText = translations[lang].title;
      document.getElementById('subtitle').innerText = translations[lang].subtitle;
      document.getElementById('btnContact').innerText = translations[lang].btnContact;
      document.getElementById('projectsTitle').innerText = translations[lang].projectsTitle;
      document.getElementById('projectCrud').innerText = translations[lang].projectCrud;
      document.getElementById('projectApi').innerText = translations[lang].projectApi;
      document.getElementById('projectBlog').innerText = translations[lang].projectBlog;
      document.getElementById('advancedProjectsTitle').innerText = translations[lang].advancedProjectsTitle;
      document.getElementById('advancedProjectFiapDesc').innerText = translations[lang].advancedProjectFiapDesc;
      document.getElementById('advancedProjectHackathonDesc').innerText = translations[lang].advancedProjectHackathonDesc;
      document.getElementById('aboutTitle').innerText = translations[lang].aboutTitle;
      document.getElementById('aboutText').innerText = translations[lang].aboutText;
      document.getElementById('contactTitle').innerText = translations[lang].contactTitle;
      document.getElementById('footer').innerText = translations[lang].footer;
    }