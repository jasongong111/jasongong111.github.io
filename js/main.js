// Main JavaScript - Portfolio Website

(function() {
    'use strict';
    
    // DOM Elements
    const navbar = document.getElementById('navbar');
    const themeToggle = document.getElementById('themeToggle');
    
    // Navbar scroll effect
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Smooth scroll for anchor links
    function handleSmoothScroll(e) {
        const target = e.target.closest('a[href^="#"]');
        if (!target) return;
        
        const href = target.getAttribute('href');
        if (href === '#') return;
        
        const element = document.querySelector(href);
        if (element) {
            e.preventDefault();
            const offsetTop = element.offsetTop - 80; // Account for navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // Theme toggle handler
    function handleThemeToggle() {
        if (window.toggleTheme) {
            window.toggleTheme();
        }
    }
    
    // Add event listeners
    function initEventListeners() {
        // Scroll events
        window.addEventListener('scroll', handleNavbarScroll, { passive: true });
        
        // Smooth scroll for anchor links
        document.addEventListener('click', handleSmoothScroll);
        
        // Theme toggle
        if (themeToggle) {
            themeToggle.addEventListener('click', handleThemeToggle);
        }
    }
    
    // Initialize page load animations
    function initPageLoad() {
        // Add loaded class to body for CSS animations
        document.body.classList.add('loaded');
        
        // Trigger navbar scroll check
        handleNavbarScroll();
    }
    
    // Main initialization
    function init() {
        initEventListeners();
        initPageLoad();
    }
    
    // Start on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
