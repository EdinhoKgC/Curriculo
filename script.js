document.addEventListener('DOMContentLoaded', () => {
    // Inicialização do Typed.js
    const typed = new Typed('#typed-text', {
        strings: ["Edilson Torres", "Analista de Suporte", "Futuro Desenvolvedor Java"],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 1500,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
        fadeOut: false,
        smartBackspace: true,
        preStringTyped: (arrayPos) => {
            const element = document.querySelector('#typed-text');
            element.style.opacity = '0';
            setTimeout(() => {
                element.style.opacity = '1';
            }, 100);
        }
    });

    // Configuração do tema
    const themeToggle = document.getElementById('toggle-theme');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
        }
    }

    // Verificar tema salvo ao carregar a página
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Configuração do seletor de idioma
    const languageSelect = document.getElementById('language-select');
    const translations = {
        pt: {
            subtitle: "Analista de Suporte | Desenvolvedor em Formação",
            about: "Profissional de TI, formado em Análise e Desenvolvimento de Sistemas e Pós em Tecnologia Java. Experiência com suporte, automação, documentação técnica e integração de sistemas. Interesse em manutenção de sistemas, testes e metodologias ágeis.",
            aboutTitle: "Sobre",
            skillsTitle: "Habilidades",
            skills: [
                "Suporte Técnico",
                "Java",
                "SQL",
                "HTML/CSS",
                "JavaScript",
                "Git",
                "Metodologias Ágeis",
                "Documentação Técnica",
                "Automação",
                "Integração de Sistemas"
            ]
        },
        en: {
            subtitle: "Support Analyst | Developer in Training",
            about: "IT professional, graduated in Systems Analysis and Development and Postgraduate in Java Technology. Experience with support, automation, technical documentation and system integration. Interest in system maintenance, testing and agile methodologies.",
            aboutTitle: "About",
            skillsTitle: "Skills",
            skills: [
                "Technical Support",
                "Java",
                "SQL",
                "HTML/CSS",
                "JavaScript",
                "Git",
                "Agile Methodologies",
                "Technical Documentation",
                "Automation",
                "System Integration"
            ]
        },
        es: {
            subtitle: "Analista de Soporte | Desarrollador en Formación",
            about: "Profesional de TI, graduado en Análisis y Desarrollo de Sistemas y Postgrado en Tecnología Java. Experiencia en soporte, automatización, documentación técnica e integración de sistemas. Interés en mantenimiento de sistemas, pruebas y metodologías ágiles.",
            aboutTitle: "Sobre mí",
            skillsTitle: "Habilidades",
            skills: [
                "Soporte Técnico",
                "Java",
                "SQL",
                "HTML/CSS",
                "JavaScript",
                "Git",
                "Metodologías Ágiles",
                "Documentación Técnica",
                "Automatización",
                "Integración de Sistemas"
            ]
        }
    };

    function updateLanguage(lang) {
        // Atualiza o subtítulo
        document.getElementById('subtitle').textContent = translations[lang].subtitle;
        
        // Atualiza a seção Sobre
        document.getElementById('about-title').textContent = translations[lang].aboutTitle;
        document.getElementById('about-text').textContent = translations[lang].about;
        
        // Atualiza a seção Habilidades
        document.querySelector('#skills h2').textContent = translations[lang].skillsTitle;
        
        // Atualiza a lista de habilidades
        const skillsList = document.querySelector('.skills');
        skillsList.innerHTML = '';
        translations[lang].skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });
    }

    // Verificar idioma salvo ao carregar a página
    const savedLanguage = localStorage.getItem('language') || 'pt';
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);

    languageSelect.addEventListener('change', (e) => {
        const lang = e.target.value;
        updateLanguage(lang);
        localStorage.setItem('language', lang);
    });
});