// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // Change icon to 'X' when menu is open
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust for fixed header
                behavior: 'smooth'
            });
        }

        // Close the menu on mobile after clicking a link
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        }
    });
});

// Add scroll effect to header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});