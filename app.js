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

// Navigation Close Functionality
function initNavigationClose() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (!navbarCollapse) return;

    // Function to close navigation
    function closeNavigation() {
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
        }
    }

    // Close button (X) click handler
    const closeBtn = document.getElementById('navCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeNavigation);
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
        const navbar = document.getElementById('mainNavbar');
        const navbarToggler = document.querySelector('.navbar-toggler');
        
        // Check if click is outside navbar and navigation is open
        if (navbarCollapse.classList.contains('show') && 
            !navbar.contains(e.target) && 
            !navbarToggler?.contains(e.target)) {
            closeNavigation();
        }
    });

    // Close on window resize (when screen size increases)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Close navigation if window width is greater than lg breakpoint (992px)
            if (window.innerWidth >= 992 && navbarCollapse.classList.contains('show')) {
                closeNavigation();
            }
        }, 100);
    });

    // Close navigation when clicking on nav links (mobile)
    const navLinks = navbarCollapse.querySelectorAll('.nav-link, .dropdown-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Small delay to allow navigation to happen first
            setTimeout(() => {
                if (window.innerWidth < 992) {
                    closeNavigation();
                }
            }, 100);
        });
    });
}

// Initialize navigation close functionality
document.addEventListener('DOMContentLoaded', () => {
    initNavigationClose();
});

// Active Link Highlighter (Based on URL)
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
        link.classList.add('active');
    }
});

// Contact Form Handler with Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const formAlert = document.getElementById('formAlert');

    // Add Bootstrap validation styles on input
    const formInputs = contactForm.querySelectorAll('input[required], textarea[required]');
    formInputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                input.classList.add('is-invalid');
                input.classList.remove('is-valid');
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        });
    });

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();
        const honeypot = document.getElementById('honeypot').value;

        // Honeypot spam check
        if (honeypot) {
            showAlert('An error occurred. Please try again.', 'danger');
            return;
        }

        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (input.value.trim() === '') {
                input.classList.add('is-invalid');
                isValid = false;
            } else if (input.type === 'email' && !isValidEmail(input.value)) {
                input.classList.add('is-invalid');
                isValid = false;
            }
        });

        if (!isValid) {
            showAlert('Please fill in all required fields correctly.', 'danger');
            return;
        }

        // Get submit button and update state
        const btn = contactForm.querySelector('button[type="submit"]');
        const btnText = btn.querySelector('.btn-text');
        const originalText = btnText.textContent;

        btn.disabled = true;
        btnText.textContent = 'Sending...';

        try {
            // Save to database
            const success = await saveContactForm({
                name,
                email,
                subject,
                message,
                timestamp: new Date()
            });

            if (success) {
                showAlert('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
                contactForm.reset();
                formInputs.forEach(input => {
                    input.classList.remove('is-valid', 'is-invalid');
                });
                btnText.textContent = originalText;
                btn.disabled = false;
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showAlert('Sorry, there was an error sending your message. Please try again or contact us directly.', 'danger');
            btnText.textContent = originalText;
            btn.disabled = false;
        }
    });

    // Helper function to show alerts
    function showAlert(message, type) {
        formAlert.className = `alert alert-${type} mb-4`;
        formAlert.textContent = message;
        formAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formAlert.classList.add('d-none');
            }, 5000);
        }
    }

    // Email validation helper
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
