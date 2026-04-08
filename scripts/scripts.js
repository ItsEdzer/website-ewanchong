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