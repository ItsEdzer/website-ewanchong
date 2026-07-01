// Select all the elements you want to animate
const elementsToAnimate = document.querySelectorAll(
    '.hero-content, .hero-description, .section-header, .work-item, .contact-content'
);

// Add the animate class to all of them
elementsToAnimate.forEach(el => el.classList.add('animate'));

// Then observe them
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

elementsToAnimate.forEach(el => observer.observe(el));


// Typewriter effect
const phrases = ["Developer", "UI/UX Designer", "Data Analytics"];
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