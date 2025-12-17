// Drone-Themed Animations Script (OPTIMIZED)
// Author: Aeronix Development Team

// ============================================
// SCROLL ANIMATIONS (FASTER)
// ============================================

// Intersection Observer for Scroll Animations - Immediate trigger
const observerOptions = {
    threshold: 0.05, // Trigger earlier (was 0.1)
    rootMargin: '0px 0px -20px 0px' // Reduced margin for faster trigger
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements - No stagger delay
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class to service cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });

    // Add fade-in to other sections
    const sections = document.querySelectorAll('.row.g-4, .text-center.mb-5');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// ============================================
// STATS COUNTER ANIMATION (FASTER)
// ============================================

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target') || element.textContent.replace(/[^0-9]/g, ''));
    const duration = 1000; // Reduced from 2000ms to 1000ms
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
            const originalText = element.getAttribute('data-original');
            if (originalText) {
                const suffix = originalText.replace(/[0-9,]/g, '');
                element.textContent = target.toLocaleString() + suffix;
            }
        }
    };

    updateCounter();
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.display-6, .h1, .h2, .h3, .h4');
    statNumbers.forEach(stat => {
        if (/\d/.test(stat.textContent)) {
            stat.setAttribute('data-original', stat.textContent);
            stat.setAttribute('data-target', stat.textContent.replace(/[^0-9]/g, ''));
            stat.classList.add('stat-number');
            statsObserver.observe(stat);
        }
    });
});

// ============================================
// ENHANCED HOVER EFFECTS
// ============================================

// Add propeller spin to icons on card hover
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.icon-box i, .icon-box');
            if (icon) {
                icon.style.animation = 'propellerSpin 0.5s ease-in-out'; // Faster
            }
        });

        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.icon-box i, .icon-box');
            if (icon) {
                icon.style.animation = '';
            }
        });
    });
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Handle anchor links from footer to services page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'services.html' && window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                target.style.animation = 'highlight 1s ease-out'; // Faster highlight
            }
        }, 100);
    }
});

// Highlight animation for anchored sections
const style = document.createElement('style');
style.textContent = `
    @keyframes highlight {
        0%, 100% { background-color: transparent; }
        50% { background-color: rgba(56, 189, 248, 0.1); }
    }
`;
document.head.appendChild(style);

// ============================================
// PAGE TRANSITION EFFECT (DISABLED FOR SPEED)
// ============================================
// Removed fade-out transition for instant navigation

// ============================================
// FLYING SYMBOLS ANIMATION - 5 DRONE PATTERN
// ============================================

const flyingSymbols = ['✈', '🚁', '🛸'];

function createFlyingSymbol(emoji, direction, topPosition, duration = 10) {
    const symbol = document.createElement('div');
    symbol.className = 'flying-symbol';

    // Set emoji
    symbol.textContent = emoji;

    // Set vertical position
    symbol.style.top = `${topPosition}%`;

    // Set direction and animation - use helicopter-specific classes for 🚁
    const isHelicopter = emoji === '🚁';
    if (isHelicopter) {
        symbol.classList.add(`heli-${direction}`);
    } else {
        symbol.classList.add(`fly-${direction}`);
    }

    symbol.style.animationDuration = `${duration}s`;

    // Add to page
    document.body.appendChild(symbol);

    // Remove after animation completes
    setTimeout(() => {
        symbol.remove();
    }, duration * 1000);
}

// Create the 5-drone pattern
function launchDronePattern() {
    // IMMEDIATE LAUNCH (Time 0s)
    // Left #1: ✈ at 15% height
    createFlyingSymbol('✈', 'left-to-right', 15, 10);

    // Right #1: 🚁 at 30% height
    createFlyingSymbol('🚁', 'right-to-left', 30, 10);

    // Right #2: 🛸 at 60% height
    createFlyingSymbol('🛸', 'right-to-left', 60, 10);

    // === DIAGONAL CORNER DRONE (1 from top-right only) ===

    // Top-Right to Bottom-Left: ✈
    createFlyingSymbol('✈', 'diagonal-tr-bl', 0, 12);

    // Bottom-Left to Top-Right: 🛸
    createFlyingSymbol('🛸', 'diagonal-bl-tr', 0, 12);

    // Bottom-Right to Top-Left: 🚁
    createFlyingSymbol('🚁', 'diagonal-br-tl', 0, 12);

    // DELAYED LAUNCH (Time 3s)
    setTimeout(() => {
        // Left #2: 🛸 at 45% height
        createFlyingSymbol('🛸', 'left-to-right', 45, 10);

        // Right #3: ✈ at 75% height
        createFlyingSymbol('✈', 'right-to-left', 75, 10);
    }, 3000);
}

// Start the animation pattern
function startFlyingSymbols() {
    // Launch first pattern immediately
    launchDronePattern();

    // Repeat pattern every 15 seconds (10s flight + 5s gap)
    setInterval(() => {
        launchDronePattern();
    }, 15000);
}

// Start the animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    startFlyingSymbols();
});

console.log('🚁 Aeronix animations loaded! (Optimized)');
