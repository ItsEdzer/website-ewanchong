// Select all the elements you want to animate
const elementsToAnimate = document.querySelectorAll(
    '.hero-content, .hero-footer-right, .section-header, .project-item, .skill-tag, .contact-content'
);

// Respect users who've asked for reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    elementsToAnimate.forEach(el => el.classList.add('animate'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    elementsToAnimate.forEach(el => observer.observe(el));
}



// Typewriter effect
const phrases = ["Full Stack Developer", "UI/UX Designer", "Data Analyst"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriter');

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    charIndex += isDeleting ? -1 : 1;
    typewriterEl.textContent = currentPhrase.substring(0, charIndex);

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 1500; // pause when fully typed
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 300; // pause before typing next word
    }

    setTimeout(typeEffect, typeSpeed);
}

typeEffect();



// Shrink navbar on scroll
const navbar = document.querySelector('nav');

function handleNavScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleNavScroll);
handleNavScroll(); // run once on load in case page starts scrolled