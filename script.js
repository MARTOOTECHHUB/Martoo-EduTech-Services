// Toggle mobile menu (hamburger menu functionality)
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Add animations to sections on scroll (example of smooth appearance when scrolling)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});
