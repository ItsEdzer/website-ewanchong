// Select all the elements you want to animate
const elementsToAnimate = document.querySelectorAll(
    '.hero-content, .hero-footer-right, .section-header, .page-header-content, .project-item, .skill-tag, .contact-wrapper, .project-view-more'
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



// Typewriter effect (only runs if the element exists on the page)
const typewriterEl = document.getElementById('typewriter');

if (typewriterEl) {
    const phrases = ["Full Stack Developer", "UI/UX Designer", "Data Analyst"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

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
}



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



// Contact form handling (only runs if the form exists on the page)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    const formStatus = document.getElementById('form-status');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // NOTE: This is front-end only right now — it does not actually send
        // an email anywhere. To make this functional, connect it to a form
        // backend service such as Formspree, EmailJS, or your own server
        // endpoint, then replace this block with a fetch() call to that
        // service using the form's data.

        formStatus.textContent = "Thanks for reaching out! I'll get back to you soon.";
        formStatus.style.color = "var(--color-accent)";
        contactForm.reset();
    });
}