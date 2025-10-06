// Language translations
const translations = {
    pt: {
        // Navigation
        nav: {
            home: "Início",
            about: "Sobre",
            skills: "Habilidades",
            projects: "Projetos",
            contact: "Contato"
        },
        // Hero Section
        hero: {
            greeting: "Olá, eu sou",
            subtitle: "Desenvolvedor Backend",
            description: "Especializado em criar soluções robustas e escaláveis para aplicações web e APIs. Apaixonado por arquitetura de software e boas práticas de desenvolvimento.",
            viewProjects: "Ver Projetos",
            resume: "Currículo",
            contact: "Contato"
        },
        // About Section
        about: {
            title: "Sobre Mim",
            paragraph1: "Sou um desenvolvedor backend apaixonado por criar soluções eficientes e escaláveis. Com experiência em Java, C# e seus respectivos ecossistemas (Spring Boot e .NET), busco sempre aplicar as melhores práticas de desenvolvimento.",
            paragraph2: "Minha jornada na programação começou com a curiosidade de entender como as coisas funcionam por trás das interfaces. Hoje, especializo-me em desenvolvimento backend com foco em APIs RESTful, bancos de dados relacionais e arquitetura de sistemas.",
            yearsExperience: "Anos de Experiência",
            projectsCompleted: "Projetos Concluídos",
            technologiesMastered: "Tecnologias Dominadas",
            backendDeveloper: "Backend Developer"
        },
        // Skills Section
        skills: {
            title: "Habilidades",
            backend: "Backend",
            frameworks: "Frameworks",
            databases: "Bancos de Dados",
            frontend: "Frontend",
            tools: "Ferramentas"
        },
        // Projects Section
        projects: {
            title: "Projetos",
            description: "Descrição",
            features: "Funcionalidades",
            technologies: "Tecnologias",
            viewDemo: "Ver Demo",
            viewCode: "Ver Código"
        },
        // Contact Section
        contact: {
            title: "Contato",
            subtitle: "Vamos Conversar!",
            description: "Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto interessante ou quer discutir tecnologia, não hesite em entrar em contato!",
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn",
            instagram: "Instagram"
        },
        // Footer
        footer: {
            backendDeveloper: "Desenvolvedor Backend",
            allRightsReserved: "Todos os direitos reservados."
        },
        // Resume Modal
        resume: {
            title: "Selecione o Currículo",
            portuguese: "Currículo em Português",
            portugueseDesc: "Versão completa em português brasileiro",
            english: "Resume in English",
            englishDesc: "Complete version in English",
            download: "Baixar PDF"
        }
    },
    en: {
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            greeting: "Hello, I'm",
            subtitle: "Backend Developer",
            description: "Specialized in creating robust and scalable solutions for web applications and APIs. Passionate about software architecture and development best practices.",
            viewProjects: "View Projects",
            resume: "Resume",
            contact: "Contact"
        },
        // About Section
        about: {
            title: "About Me",
            paragraph1: "I'm a backend developer passionate about creating efficient and scalable solutions. With experience in Java, C# and their respective ecosystems (Spring Boot and .NET), I always seek to apply the best development practices.",
            paragraph2: "My journey in programming started with the curiosity to understand how things work behind the interfaces. Today, I specialize in backend development focusing on RESTful APIs, relational databases and system architecture.",
            yearsExperience: "Years of Experience",
            projectsCompleted: "Projects Completed",
            technologiesMastered: "Technologies Mastered",
            backendDeveloper: "Backend Developer"
        },
        // Skills Section
        skills: {
            title: "Skills",
            backend: "Backend",
            frameworks: "Frameworks",
            databases: "Databases",
            frontend: "Frontend",
            tools: "Tools"
        },
        // Projects Section
        projects: {
            title: "Projects",
            description: "Description",
            features: "Features",
            technologies: "Technologies",
            viewDemo: "View Demo",
            viewCode: "View Code"
        },
        // Contact Section
        contact: {
            title: "Contact",
            subtitle: "Let's Talk!",
            description: "I'm always open to new opportunities and collaborations. If you have an interesting project or want to discuss technology, don't hesitate to get in touch!",
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn",
            instagram: "Instagram"
        },
        // Footer
        footer: {
            backendDeveloper: "Backend Developer",
            allRightsReserved: "All rights reserved."
        },
        // Resume Modal
        resume: {
            title: "Select Resume",
            portuguese: "Resume in Portuguese",
            portugueseDesc: "Complete version in Brazilian Portuguese",
            english: "Resume in English",
            englishDesc: "Complete version in English",
            download: "Download PDF"
        }
    }
};

// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.theme = theme;
        localStorage.setItem('theme', theme);
        
        // Update icon
        const icon = this.themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-moon';
        } else {
            icon.className = 'fas fa-sun';
        }
        
        // Force header background update
        this.updateHeaderBackground();
    }
    
    updateHeaderBackground() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        const isDark = this.theme === 'dark';
        if (window.scrollY > 100) {
            header.style.background = isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
}

// Smooth Scrolling
class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Mobile Menu
class MobileMenu {
    constructor() {
        this.menuToggle = document.getElementById('menuToggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        this.menuToggle.addEventListener('click', () => this.toggleMenu());
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.navMenu.classList.toggle('active');
        this.menuToggle.classList.toggle('active');
    }

    closeMenu() {
        this.navMenu.classList.remove('active');
        this.menuToggle.classList.remove('active');
    }
}

// Projects Data
// Para adicionar novos projetos, simplesmente adicione um novo objeto ao array abaixo
// O sistema mostrará apenas os 3 primeiros projetos
const projectsData = [
    {
        id: 1,
        title: "MoneyScope",
        description: "O MoneyScope é uma API de controle financeiro pessoal e inteligente, desenvolvida para ajudar usuários a gerenciar suas finanças de forma prática e organizada. Com ela, é possível registrar transações, definir metas, criar categorias personalizadas e gerar relatórios de desempenho financeiro.",
        shortDescription: "API de controle financeiro pessoal com gestão de transações e relatórios.",
        technologies: [".NET 8", "ASP.NET Core", "Entity Framework Core", "MySQL", "Clean Architecture", "JWT Authentication", "FluentValidation"],
        features: [
            "Registro e consulta de transações financeiras",
            "Definição de metas de economia",
            "Criação e gerenciamento de categorias personalizadas",
            "Geração de relatórios de desempenho financeiro",
            "Autenticação e autorização de usuários",
            "Arquitetura limpa e escalável",
            "Validação de dados com FluentValidation"
        ],
        demoUrl: "#",
        codeUrl: "https://github.com/wescaetano/money-scope",
        icon: "fas fa-chart-pie"
    },
    {
        id: 2,
        title: "Easy Order API",
        description: "Este projeto é uma API RESTful desenvolvida em Java com Spring Boot, que simula um sistema de compras de produtos. Ele possui um CRUD completo para usuários e pedidos, além de endpoints para consulta de produtos disponíveis.",
        shortDescription: "API RESTful para sistema de compras com CRUD completo de usuários e pedidos.",
        technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Postman", "Maven"],
        features: [
            "Usuários: Criar novo usuário, Listar todos os usuários, Buscar usuário por ID, Atualizar dados de um usuário, Deletar usuário por ID",
            "Produtos: Listar todos os produtos disponíveis, Buscar produto por ID",
            "Pedidos: Criar pedido vinculado a um usuário, Listar todos os pedidos de um usuário, Atualizar dados de um pedido, Deletar pedido por ID",
            "API RESTful completa com Spring Boot",
            "Integração com banco PostgreSQL",
            "Documentação e testes com Postman",
            "Gerenciamento de dependências com Maven"
        ],
        demoUrl: "#",
        codeUrl: "https://github.com/wescaetano/easy-order-api",
        icon: "fas fa-shopping-cart"
    },
    {
        id: 3,
        title: "DS List",
        description: "O projeto DSlist é uma API REST que gerencia informações sobre jogos e suas especificações, incluindo nome, gênero, avaliação, imagem, descrição curta e longa. Esta API oferece os seguintes endpoints para gerenciamento completo de listas de jogos.",
        shortDescription: "API REST para gerenciamento de informações e listas de jogos com suas especificações.",
        technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Postman", "Maven"],
        features: [
            "Listar todas as listas de jogos disponíveis",
            "Listar jogos por lista específica",
            "Listar todos os jogos cadastrados",
            "Buscar jogo por ID",
            "Reorganizar posição dos jogos em uma lista",
            "API REST completa com Spring Boot",
            "Integração com banco PostgreSQL para persistência de dados"
        ],
        demoUrl: "#",
        codeUrl: "https://github.com/wescaetano/dslist",
        icon: "fas fa-gamepad"
    },
    {
        id: 4,
        title: "Sistema de Notificações",
        description: "Sistema escalável de notificações em tempo real com suporte a múltiplos canais (email, SMS, push).",
        shortDescription: "Sistema de notificações em tempo real multi-canal.",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS SNS", "Docker"],
        features: [
            "Notificações em tempo real",
            "Suporte a múltiplos canais (email, SMS, push)",
            "Sistema de templates personalizáveis",
            "Fila de processamento assíncrona",
            "Integração com AWS SNS",
            "Dashboard de analytics",
            "Rate limiting e throttling"
        ],
        demoUrl: "#",
        codeUrl: "#",
        icon: "fas fa-bell"
    },
    {
        id: 5,
        title: "API de Autenticação",
        description: "Sistema robusto de autenticação e autorização com OAuth2, 2FA e gestão de permissões.",
        shortDescription: "Sistema completo de autenticação com OAuth2 e 2FA.",
        technologies: ["Java", "Spring Security", "PostgreSQL", "JWT", "OAuth2"],
        features: [
            "Autenticação OAuth2 completa",
            "Autenticação de dois fatores (2FA)",
            "Gestão granular de permissões",
            "Sessões seguras e distribuídas",
            "Auditoria de ações dos usuários",
            "Rate limiting por usuário",
            "Integração com provedores externos"
        ],
        demoUrl: "#",
        codeUrl: "#",
        icon: "fas fa-shield-alt"
    },
    {
        id: 6,
        title: "Sistema de Analytics",
        description: "Plataforma de analytics em tempo real para coleta, processamento e visualização de dados.",
        shortDescription: "Plataforma de analytics em tempo real com dashboards.",
        technologies: ["C#", ".NET", "MySQL", "PostgreSQL", "AWS", "Docker"],
        features: [
            "Coleta de dados em tempo real",
            "Processamento de dados com ETL",
            "Armazenamento em banco relacional",
            "Dashboards interativos",
            "Alertas e notificações automáticas",
            "API para integração externa",
            "Backup e retenção de dados"
        ],
        demoUrl: "#",
        codeUrl: "#",
        icon: "fas fa-chart-line"
    }
];

// Projects Manager
class ProjectsManager {
    constructor() {
        this.projectsGrid = document.getElementById('projectsGrid');
        this.modal = document.getElementById('projectModal');
        this.modalClose = document.getElementById('modalClose');
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupModalEvents();
    }

    renderProjects() {
        // Clear the grid first
        this.projectsGrid.innerHTML = '';
        
        // Show only the first 3 projects
        const projectsToRender = projectsData.slice(0, 3);
        
        // Render project cards
        projectsToRender.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.dataset.projectId = project.id;
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <i class="${project.icon}"></i>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.shortDescription}</p>
                    <div class="project-tech">
                        ${project.technologies.slice(0, 3).map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                        ${project.technologies.length > 3 ? 
                            `<span class="tech-tag">+${project.technologies.length - 3}</span>` : ''
                        }
                    </div>
                </div>
            `;
            
            // Add click event to project card
            projectCard.addEventListener('click', () => {
                this.openModal(project.id);
            });
            
            this.projectsGrid.appendChild(projectCard);
        });
    }

    setupModalEvents() {
        // Close modal events
        this.modalClose.addEventListener('click', () => this.closeModal());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        // Populate modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        
        // Fix modal image - use the container instead of img tag
        const modalImageContainer = document.querySelector('.modal-image');
        modalImageContainer.innerHTML = `<i class="${project.icon}"></i>`;
        
        // Technologies
        const modalTech = document.getElementById('modalTech');
        modalTech.innerHTML = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        // Features
        const modalFeatures = document.getElementById('modalFeatures');
        modalFeatures.innerHTML = project.features.map(feature => 
            `<li>${feature}</li>`
        ).join('');

        // Links - ensure they open in new tab and handle demo link
        const modalDemo = document.getElementById('modalDemo');
        const modalCode = document.getElementById('modalCode');
        
        // Clear any existing event listeners
        modalDemo.replaceWith(modalDemo.cloneNode(true));
        modalCode.replaceWith(modalCode.cloneNode(true));
        
        // Get fresh references after cloning
        const freshModalDemo = document.getElementById('modalDemo');
        const freshModalCode = document.getElementById('modalCode');
        
        if (project.demoUrl === '#') {
            freshModalDemo.style.opacity = '0.5';
            freshModalDemo.style.cursor = 'not-allowed';
            freshModalDemo.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        } else {
            freshModalDemo.href = project.demoUrl;
            freshModalDemo.target = '_blank';
            freshModalDemo.style.opacity = '1';
            freshModalDemo.style.cursor = 'pointer';
        }
        
        // Handle code link with explicit click handler
        freshModalCode.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (project.codeUrl && project.codeUrl !== '#') {
                window.open(project.codeUrl, '_blank');
            }
        });
        freshModalCode.style.cursor = 'pointer';

        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}



// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
        this.setupScrollEffects();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe sections
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            observer.observe(section);
        });

        // Observe skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            observer.observe(item);
        });

        // Observe project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
    }

    setupScrollEffects() {
        // Header background on scroll
        const updateHeaderBackground = () => {
            const header = document.querySelector('.header');
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            
            if (window.scrollY > 100) {
                header.style.background = isDark ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)';
            } else {
                header.style.background = isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)';
            }
        };

        window.addEventListener('scroll', updateHeaderBackground);
        
        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    updateHeaderBackground();
                }
            });
        });
        
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        });
    }
}

// Resume Manager
class ResumeManager {
    constructor() {
        this.resumeBtn = document.getElementById('resumeBtn');
        this.resumeModal = document.getElementById('resumeModal');
        this.resumeModalClose = document.getElementById('resumeModalClose');
        this.init();
    }

    init() {
        this.setupEvents();
    }

    setupEvents() {
        // Open resume modal
        this.resumeBtn.addEventListener('click', () => this.openModal());

        // Close modal events
        this.resumeModalClose.addEventListener('click', () => this.closeModal());
        this.resumeModal.addEventListener('click', (e) => {
            if (e.target === this.resumeModal) {
                this.closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.resumeModal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    openModal() {
        this.resumeModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.resumeModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Language Manager
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'pt';
        this.languageToggle = document.getElementById('languageToggle');
        this.init();
    }

    init() {
        this.setLanguage(this.currentLanguage);
        this.languageToggle.addEventListener('click', () => this.toggleLanguage());
    }

    setLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        
        // Update button text
        const span = this.languageToggle.querySelector('span');
        span.textContent = language.toUpperCase();
        
        // Update all text content
        this.updateContent();
    }

    toggleLanguage() {
        const newLanguage = this.currentLanguage === 'pt' ? 'en' : 'pt';
        this.setLanguage(newLanguage);
    }

    updateContent() {
        const t = translations[this.currentLanguage];
        
        // Navigation
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks[0].textContent = t.nav.home;
        navLinks[1].textContent = t.nav.about;
        navLinks[2].textContent = t.nav.skills;
        navLinks[3].textContent = t.nav.projects;
        navLinks[4].textContent = t.nav.contact;
        
        // Hero Section
        const heroTitle = document.querySelector('.hero-title');
        heroTitle.innerHTML = `${t.hero.greeting} <span class="highlight">Weslley Caetano</span>`;
        
        document.querySelector('.hero-subtitle').textContent = t.hero.subtitle;
        document.querySelector('.hero-description').textContent = t.hero.description;
        
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        heroButtons[0].textContent = t.hero.viewProjects;
        heroButtons[1].innerHTML = `<i class="fas fa-file-alt"></i> ${t.hero.resume}`;
        heroButtons[2].textContent = t.hero.contact;
        
        // About Section
        document.querySelector('#about .section-title').textContent = t.about.title;
        
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        aboutParagraphs[0].textContent = t.about.paragraph1;
        aboutParagraphs[1].textContent = t.about.paragraph2;
        
        const stats = document.querySelectorAll('.stat p');
        stats[0].textContent = t.about.yearsExperience;
        stats[1].textContent = t.about.projectsCompleted;
        stats[2].textContent = t.about.technologiesMastered;
        
        document.querySelector('.profile-card p').textContent = t.about.backendDeveloper;
        
        // Skills Section
        document.querySelector('#skills .section-title').textContent = t.skills.title;
        
        const skillCategories = document.querySelectorAll('.skill-category h3');
        skillCategories[0].textContent = t.skills.backend;
        skillCategories[1].textContent = t.skills.frameworks;
        skillCategories[2].textContent = t.skills.databases;
        skillCategories[3].textContent = t.skills.frontend;
        skillCategories[4].textContent = t.skills.tools;
        
        // Projects Section
        document.querySelector('#projects .section-title').textContent = t.projects.title;
        
        // Contact Section
        document.querySelector('#contact .section-title').textContent = t.contact.title;
        document.querySelector('.contact-info h3').textContent = t.contact.subtitle;
        document.querySelector('.contact-info p').textContent = t.contact.description;
        
        const contactLinks = document.querySelectorAll('.contact-link span');
        contactLinks[0].textContent = t.contact.email;
        contactLinks[1].textContent = t.contact.github;
        contactLinks[2].textContent = t.contact.linkedin;
        contactLinks[3].textContent = t.contact.instagram;
        
        // Footer
        document.querySelector('.footer-brand p').textContent = t.footer.backendDeveloper;
        document.querySelector('.footer-bottom p').textContent = `© 2024 Weslley Caetano. ${t.footer.allRightsReserved}`;
        
        // Resume Modal
        document.querySelector('#resumeModal .modal-header h3').textContent = t.resume.title;
        document.querySelector('#resumeModal .resume-option:nth-child(1) h4').textContent = t.resume.portuguese;
        document.querySelector('#resumeModal .resume-option:nth-child(1) p').textContent = t.resume.portugueseDesc;
        document.querySelector('#resumeModal .resume-option:nth-child(2) h4').textContent = t.resume.english;
        document.querySelector('#resumeModal .resume-option:nth-child(2) p').textContent = t.resume.englishDesc;
        
        const downloadButtons = document.querySelectorAll('#resumeModal .btn');
        downloadButtons[0].innerHTML = `<i class="fas fa-download"></i> ${t.resume.download}`;
        downloadButtons[1].innerHTML = `<i class="fas fa-download"></i> ${t.resume.download}`;
    }
}



// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new SmoothScroller();
    new MobileMenu();
    new ProjectsManager();
    new ScrollAnimations();
    new ResumeManager();
    new LanguageManager();

});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .skill-item {
        opacity: 0;
        transform: translateX(-20px);
    }
    
    .skill-item.animate-in {
        opacity: 1;
        transform: translateX(0);
        transition: all 0.6s ease;
    }
    
    .project-card {
        opacity: 0;
        transform: translateY(20px);
    }
    
    .project-card.animate-in {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.6s ease;
    }
    
    section {
        opacity: 0;
        transform: translateY(30px);
    }
    
    section.animate-in {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.8s ease;
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-top: none;
        padding: 1rem;
        box-shadow: var(--shadow-lg);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }
        
        .nav-menu.active {
            display: flex;
        }
    }
`;
document.head.appendChild(style);
