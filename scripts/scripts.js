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