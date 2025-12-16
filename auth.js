// Authentication System
const auth = {
    init() {
        this.updateNavigation();
        this.setupLogoutHandler();
    },

    // Check if user is logged in
    isLoggedIn() {
        return localStorage.getItem('aeronix-user') !== null;
    },

    // Get current user data
    getCurrentUser() {
        const userData = localStorage.getItem('aeronix-user');
        return userData ? JSON.parse(userData) : null;
    },

    // Login user
    login(email, password, rememberMe = false) {
        // Demo authentication - in production, this would call a backend API
        // For now, accept any email/password combination
        const userData = {
            email: email,
            name: email.split('@')[0],
            loginTime: new Date().toISOString()
        };

        localStorage.setItem('aeronix-user', JSON.stringify(userData));

        if (rememberMe) {
            localStorage.setItem('aeronix-remember', 'true');
        }

        return { success: true, user: userData };
    },

    // Signup user
    signup(name, email, password) {
        // Demo signup - in production, this would call a backend API
        const userData = {
            email: email,
            name: name,
            signupTime: new Date().toISOString()
        };

        localStorage.setItem('aeronix-user', JSON.stringify(userData));
        return { success: true, user: userData };
    },

    // Logout user
    logout() {
        localStorage.removeItem('aeronix-user');
        localStorage.removeItem('aeronix-remember');
        window.location.href = 'index.html';
    },

    // Update navigation based on login state
    updateNavigation() {
        const authButtons = document.getElementById('authButtons');
        const userMenu = document.getElementById('userMenu');

        if (!authButtons && !userMenu) return;

        if (this.isLoggedIn()) {
            const user = this.getCurrentUser();
            if (authButtons) authButtons.style.display = 'none';
            if (userMenu) {
                userMenu.style.display = 'block';
                const userName = userMenu.querySelector('.user-name');
                if (userName) userName.textContent = user.name;
            }
        } else {
            if (authButtons) authButtons.style.display = 'flex';
            if (userMenu) userMenu.style.display = 'none';
        }
    },

    // Setup logout button handler
    setupLogoutHandler() {
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.logout();
            });
        }
    },

    // Password strength checker
    checkPasswordStrength(password) {
        let strength = 0;
        if (password.length >= 8) strength++;
        if (password.length >= 12) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z\d]/.test(password)) strength++;

        if (strength <= 2) return { level: 'weak', text: 'Weak', color: '#ef4444' };
        if (strength <= 3) return { level: 'medium', text: 'Medium', color: '#f59e0b' };
        return { level: 'strong', text: 'Strong', color: '#10b981' };
    }
};

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => {
    auth.init();
});

// Export for use in other files
window.aeronixAuth = auth;
