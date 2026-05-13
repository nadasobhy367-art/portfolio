// Typing Animation
const texts = [
    "Frontend Developer for Business Websites",
    "Landing Pages for Service Brands",
    "Responsive Website Design",
    "Arabic & English Interfaces"
];

const skills = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Vite", icon: "fas fa-bolt" },
    { name: "Tailwind CSS", icon: "fas fa-wind" },
    { name: "Responsive Design", icon: "fas fa-mobile-screen-button" },
    { name: "RTL UI", icon: "fas fa-language" },
    { name: "Git & GitHub", icon: "fab fa-github" },
    { name: "Cybersecurity", icon: "fas fa-shield-halved" },
    { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
    { name: "AI Tools", icon: "fas fa-robot" }
];

const projects = [
    {
        img: "images/gym.jpg",
        title: "PowerZone Gym",
        desc: "Complete gym website with membership plans, trainer profiles, BMI calculator and class schedule.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        details: "Designed a gym website that presents offers clearly and keeps visitors engaged with trainers, schedules, and fitness tools.",
        highlights: ["Membership pricing", "Trainer profiles", "BMI calculator", "Weekly schedule"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/gym-template"
    },
    {
        img: "images/restaurant.jpg",
        title: "La Fiesta Restaurant",
        desc: "Professional restaurant landing page with interactive menu, gallery, and reservation form.",
        tags: ["HTML", "CSS", "JavaScript", "Arabic RTL"],
        details: "Built a restaurant landing page focused on helping customers explore the menu, browse photos, and book reservations more easily. It includes responsive sections, animated menu tabs, a gallery lightbox, and clear calls to action.",
        highlights: ["Responsive layout", "Arabic RTL support", "Interactive menu", "Reservation section"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/restaurant-template"
    },
    {
        img: "images/dental.jpg",
        title: "Dental Clinic",
        desc: "Complete dental clinic website with appointment booking, FAQ, price list and dark mode.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        details: "Created a polished clinic website that helps visitors understand services, check pricing, and reach the clinic quickly. The experience includes appointment-focused sections, FAQ content, dark mode, and trust-building details.",
        highlights: ["Appointment-focused layout", "Dark mode", "FAQ accordion", "Price list and map"],
        imagePosition: "center center",
        link: "https://nadasobhy367-art.github.io/dental-clinic"
    },
    {
        img: "images/pharmacare.jpg",
        title: "PharmaCare — Online Pharmacy",
        desc: "Full-featured bilingual pharmacy app with dual dashboards, cart, 4 payment methods, and prescription management.",
        tags: ["HTML", "CSS", "JavaScript", "Web App"],
        details: "Built a complete pharmacy web application serving both customers and pharmacists. Features shopping cart, 4 payment methods, prescription upload, and full inventory management.",
        highlights: ["Dual-role login", "Shopping cart & checkout", "4 payment methods", "Prescription management"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/pharmacare"
    },
    {
        img: "images/pharmaplus.jpg",
        title: "Pharma+ — React Pharmacy App",
        desc: "A React + Vite pharmacy app with product catalog, cart, stock validation, and admin dashboard.",
        tags: ["React", "Vite", "JavaScript", "Web App"],
        details: "Built with React and Vite. Features product search, category filtering, shopping cart with stock validation, toast notifications, and admin dashboard with inventory and order management.",
        highlights: ["Built with React + Vite", "Cart with stock check", "Admin dashboard", "Order management"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/pharma-plus"
    },
    {
        img: "images/lumiere.jpg",
        title: "Lumiere Skin — Skincare Brand",
        desc: "Bilingual Arabic/English skincare brand catalog with product filtering, cart, and fuchsia design.",
        tags: ["HTML", "CSS", "JavaScript", "Bilingual"],
        details: "Designed a bilingual skincare brand website with 6 products, category filtering, product modals, 4-step ritual section, ingredients explorer, and shopping cart.",
        highlights: ["Bilingual AR/EN toggle", "Product catalog & filter", "Shopping cart", "Custom cursor"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/lumiere-skin"
    },
    {
        img: "images/chocolate.jpg",
        title: "Chocola Laveen — Chocolate Factory",
        desc: "Elegant Arabic chocolate factory website with product catalog, cart, production timeline, and custom orders.",
        tags: ["HTML", "CSS", "JavaScript", "Arabic RTL"],
        details: "Premium chocolate factory website with cinematic hero, product catalog with filters, shopping cart, 4-step production timeline, custom order section, and contact form.",
        highlights: ["Cinematic hero", "Product catalog & cart", "Production timeline", "Custom orders"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/chocolate-factory"
    },
    {
        img: "images/lawfirm.jpg",
        title: "Al-Nokhba — Law Firm Website",
        desc: "Premium dark & gold Arabic law firm website with animations, services, team, and contact form.",
        tags: ["HTML", "CSS", "JavaScript", "Arabic RTL"],
        details: "Dark luxury law firm website with floating particle animations, gold accents, services section, team profiles, testimonials, and contact form.",
        highlights: ["Dark & gold design", "Particle animations", "Team profiles", "Contact form"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/law-firm"
    },
    {
        img: "images/wordpress.jpg",
        title: "WebPro — Business Website",
        desc: "Modern Arabic business website with hero, services, blog, CTA, and animated counters.",
        tags: ["HTML", "CSS", "JavaScript", "Arabic RTL"],
        details: "Professional Arabic business website with animated stats, 6 service cards, blog section, scroll progress bar, and complete footer.",
        highlights: ["Scroll progress bar", "Animated counters", "6 service cards", "Blog section"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/webpro-site"
    },
    {
        img: "images/realestate.jpg",
        title: "Real Estate Platform",
        desc: "Full Arabic real estate platform with search, filters, favorites, comparison, and user reviews.",
        tags: ["HTML", "CSS", "JavaScript", "Multi-page"],
        details: "Complete Arabic real estate platform with advanced search, property details with image gallery, favorites (localStorage), 3-property comparison table, and user reviews.",
        highlights: ["Advanced search & filters", "Image gallery", "Favorites system", "Property comparison"],
        imagePosition: "center top",
        link: "https://nadasobhy367-art.github.io/real-estate"
    }
];

const typedElement = document.getElementById('typed');
const navLinks = document.getElementById('nav-links');
const hamburgerButton = document.querySelector('.hamburger');
const backToTopButton = document.querySelector('.back-to-top');
const projectsGrid = document.getElementById('projects-grid');
const projectsToggleButton = document.getElementById('projects-toggle');
const modal = document.getElementById('modal');
const modalContent = modal.querySelector('.modal-content');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const INITIAL_PROJECTS_COUNT = 6;
let lastFocusedElement = null;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let showingAllProjects = false;

function typeText() {
    if (prefersReducedMotion) {
        typedElement.textContent = texts[0];
        return;
    }

    const currentText = texts[textIndex];
    typedElement.textContent = currentText.slice(0, charIndex);

    if (!isDeleting && charIndex < currentText.length) {
        charIndex += 1;
        setTimeout(typeText, 90);
        return;
    }

    if (isDeleting && charIndex > 0) {
        charIndex -= 1;
        setTimeout(typeText, 45);
        return;
    }

    if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeText, 1400);
        return;
    }

    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, 250);
}

typeText();

document.getElementById('skills-grid').innerHTML = skills.map(s => `
    <div class="skill-card reveal">
        <i class="${s.icon}"></i>
        <p>${s.name}</p>
    </div>
`).join('');

function renderProjects() {
    const visibleProjects = showingAllProjects ? projects : projects.slice(0, INITIAL_PROJECTS_COUNT);

    projectsGrid.innerHTML = visibleProjects.map((p, i) => `
    <div class="project-card reveal" role="button" tabindex="0" data-project-index="${i}" aria-label="Open details for ${p.title}">
        <div class="project-media">
            <img src="${p.img}" alt="${p.title}" class="project-img" loading="lazy" decoding="async" style="object-position: ${p.imagePosition};">
            <span class="project-badge">${p.title.split(' — ')[0]}</span>
        </div>
        <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="project-tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
            <div class="project-highlights">
                ${p.highlights.map(item => `<span>${item}</span>`).join('')}
            </div>
            <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link">View Live Project</a>
        </div>
    </div>
`).join('');

    document.querySelectorAll('.project-card').forEach(card => {
        const projectIndex = Number(card.dataset.projectIndex);
        card.addEventListener('click', () => openModal(projectIndex));
        card.addEventListener('keydown', (event) => handleProjectCardKeydown(event, projectIndex));
    });

    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function updateProjectsToggle() {
    if (projects.length <= INITIAL_PROJECTS_COUNT) {
        projectsToggleButton.hidden = true;
        return;
    }

    projectsToggleButton.hidden = false;
    projectsToggleButton.textContent = showingAllProjects
        ? 'Show Less'
        : 'View More Projects';
}

function openModal(index) {
    const p = projects[index];
    lastFocusedElement = document.activeElement;
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-img').alt = `${p.title} preview`;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-desc').textContent = p.details;
    document.getElementById('modal-tags').innerHTML = [
        ...p.tags.map(t => `<span class="tag">${t}</span>`),
        ...p.highlights.map(item => `<span class="tag">${item}</span>`)
    ].join('');
    document.getElementById('modal-link').href = p.link;
    modal.classList.add('open');
    document.body.classList.add('modal-open');
    modalContent.focus();
}

function closeModal() {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    if (lastFocusedElement instanceof HTMLElement) {
        lastFocusedElement.focus();
    }
}

function handleProjectCardKeydown(event, index) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(index);
    }
}

projectsToggleButton.addEventListener('click', () => {
    showingAllProjects = !showingAllProjects;
    renderProjects();
    updateProjectsToggle();

    if (!showingAllProjects) {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

document.getElementById('modal-close').addEventListener('click', () => {
    closeModal();
});

modal.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }

    if (e.key === 'Tab' && modal.classList.contains('open')) {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
            element => !element.hasAttribute('disabled')
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

renderProjects();
updateProjectsToggle();

function animateCounter(el) {
    const target = +el.dataset.target;
    const step = target / 50;
    let current = 0;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 40);
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

window.addEventListener('scroll', () => {
    document.querySelector('.navbar').style.boxShadow =
        window.scrollY > 50 ? '0 5px 30px rgba(0,0,0,0.5)' : 'none';
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.querySelector('.progress-bar').style.width = scrolled + '%';
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

hamburgerButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburgerButton.setAttribute('aria-expanded', String(isOpen));
    hamburgerButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburgerButton.setAttribute('aria-expanded', 'false');
        hamburgerButton.setAttribute('aria-label', 'Open menu');
    });
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const [nameInput, emailInput, messageInput] = e.target.elements;
    const subject = encodeURIComponent(`Freelance Project Inquiry from ${nameInput.value}`);
    const body = encodeURIComponent(
        `Name: ${nameInput.value}\nEmail: ${emailInput.value}\n\nProject Details:\n${messageInput.value}`
    );

    window.location.href = `mailto:nadasobhy367@gmail.com?subject=${subject}&body=${body}`;
    e.target.reset();
});

const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particlesArr = [];
for (let i = 0; i < 80; i++) {
    particlesArr.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
    });
}

function animateParticles() {
    if (prefersReducedMotion) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArr.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,136,${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    });
    requestAnimationFrame(animateParticles);
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeIcon.className = 'fas fa-sun';
        themeToggle.setAttribute('aria-pressed', 'true');
        localStorage.setItem('theme', 'light');
        themeColorMeta.setAttribute('content', '#ffffff');
    } else {
        themeIcon.className = 'fas fa-moon';
        themeToggle.setAttribute('aria-pressed', 'false');
        localStorage.setItem('theme', 'dark');
        themeColorMeta.setAttribute('content', '#0a0a0a');
    }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.className = 'fas fa-sun';
    themeToggle.setAttribute('aria-pressed', 'true');
    themeColorMeta.setAttribute('content', '#ffffff');
}

if (!prefersReducedMotion) {
    animateParticles();
}
