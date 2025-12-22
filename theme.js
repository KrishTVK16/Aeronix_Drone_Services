// Theme Management System
const themeToggle = {
    init() {
        // Load saved theme or default to light
        const savedTheme = localStorage.getItem('aeronix-theme') || 'light';
        this.setTheme(savedTheme, false);

        // Add event listener to theme toggle button
        const toggleBtn = document.getElementById('themeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
            this.updateToggleIcon(savedTheme);
        }
    },

    setTheme(theme, save = true) {
        document.documentElement.setAttribute('data-theme', theme);
        if (save) {
            localStorage.setItem('aeronix-theme', theme);
        }
        this.updateToggleIcon(theme);
    },

    toggle() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    updateToggleIcon(theme) {
        const toggleBtn = document.getElementById('themeToggle');
        if (!toggleBtn) return;

        const icon = toggleBtn.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'bi bi-sun-fill';
            } else {
                icon.className = 'bi bi-moon-fill';
            }
        }
    }
};

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    themeToggle.init();
});
