// Typing Animation
const texts = [
    "Frontend Developer 💻",
    "Cybersecurity Engineer 🔐",
    "Engineering Student 🎓",
    "Freelancer 🚀"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed');

function type() {
    const current = texts[textIndex];
    if (isDeleting) {
        typedEl.textContent = current.substring(0, charIndex--);
    } else {
        typedEl.textContent = current.substring(0, charIndex++);
    }
    if (!isDeleting && charIndex === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1500);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
    }
    setTimeout(type, isDeleting ? 50 : 100);
}

type();

const skills = [
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3" },
    { icon: "fab fa-js", name: "JavaScript" },
    { icon: "fas fa-shield-alt", name: "Cybersecurity" },
    { icon: "fas fa-network-wired", name: "Networking" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-linux", name: "Linux" },
    { icon: "fas fa-robot", name: "AI Tools" },
    { icon: "fas fa-code", name: "Web Design" }
];

const projects = [
    {
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
        title: "La Fiesta Restaurant",
        desc: "Professional restaurant landing page with interactive menu, gallery, and reservation form.",
        tags: ["HTML", "CSS", "JavaScript", "Arabic RTL"],
        details: "A fully responsive restaurant landing page featuring animated menu tabs, image gallery with lightbox, reservation form, and smooth scroll animations.",
        link: "https://nadasobhy367-art.github.io/restaurant-template"
    },
    {
        img: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600",
        title: "Dental Clinic",
        desc: "Complete dental clinic website with appointment booking, FAQ, price list and dark mode.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        details: "A professional dental clinic website with dark mode, animated counters, FAQ accordion, price list, Google Maps integration, and WhatsApp floating button.",
        link: "https://nadasobhy367-art.github.io/dental-clinic"
    },
    {
        img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600",
        title: "PowerZone Gym",
        desc: "Complete gym website with membership plans, trainer profiles, BMI calculator and class schedule.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        details: "A fully responsive gym landing page with membership pricing, trainer profiles, BMI calculator, weekly class schedule, FAQ section and dark theme.",
        link: "https://nadasobhy367-art.github.io/gym-template"
    }
];

document.getElementById('skills-grid').innerHTML = skills.map(s => `
    <div class="skill-card reveal">
        <i class="${s.icon}"></i>
        <p>${s.name}</p>
    </div>
`).join('');

document.getElementById('projects-grid').innerHTML = projects.map((p, i) => `
    <div class="project-card reveal" onclick="openModal(${i})">
        <img src="${p.img}" alt="${p.title}" class="project-img">
        <div class="project-info">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
            <div class="project-tags">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
    </div>
`).join('');

function openModal(index) {
    const p = projects[index];
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-desc').textContent = p.details;
    document.getElementById('modal-tags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('modal-link').href = p.link;
    document.getElementById('modal').classList.add('open');
}

document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('open');
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
});

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('open');
});

document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent successfully! I will get back to you soon ✅');
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

animateParticles();
