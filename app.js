import { saveContactForm } from './db.js';

// Navbar Scroll Effect
const navbar = document.getElementById('mainNavbar');
if (navbar) {
    // Add background if page is not index (has content at top)
    if (!document.querySelector('.hero-section')) {
        navbar.classList.add('navbar-scrolled');
    } else {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
}

// Active Link Highlighter (Based on URL)
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active');
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('contactEmail').value;
        const btn = contactForm.querySelector('button');

        btn.disabled = true;
        btn.textContent = 'Sending...';

        // Use the DB module
        const success = await saveContactForm({ email, timestamp: new Date() });

        if (success) {
            btn.textContent = 'Sent!';
            btn.classList.remove('btn-light');
            btn.classList.add('btn-success');
        } else {
            btn.textContent = 'Error';
            btn.disabled = false;
        }
    });
}
