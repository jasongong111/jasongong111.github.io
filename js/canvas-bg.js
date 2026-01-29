// Neural Network Canvas Background Animation

(function() {
    'use strict';
    
    const canvas = document.getElementById('neuralCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        canvas.style.display = 'none';
        return;
    }
    
    // Configuration
    const config = {
        particleCount: 30,
        connectionDistance: 150,
        particleSpeed: 0.3,
        particleRadius: 2,
        lineWidth: 0.5
    };
    
    let particles = [];
    let animationId = null;
    let mouseX = 0;
    let mouseY = 0;
    let isActive = true;
    
    // Resize canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * config.particleSpeed;
            this.vy = (Math.random() - 0.5) * config.particleSpeed;
            this.radius = Math.random() * config.particleRadius + 1;
        }
        
        update() {
            // Move particle
            this.x += this.vx;
            this.y += this.vy;
            
            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            
            // Mouse interaction - gentle repulsion
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 100) {
                const force = (100 - dist) / 100;
                this.x += (dx / dist) * force * 0.5;
                this.y += (dy / dist) * force * 0.5;
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#D97706';
            ctx.fill();
        }
    }
    
    // Initialize particles
    function initParticles() {
        particles = [];
        for (let i = 0; i < config.particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // Draw connections between particles
    function drawConnections() {
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#D97706';
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < config.connectionDistance) {
                    const opacity = 1 - (dist / config.connectionDistance);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = accentColor + Math.floor(opacity * 30).toString(16).padStart(2, '0');
                    ctx.lineWidth = config.lineWidth;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Animation loop
    function animate() {
        if (!isActive) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Draw connections
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Mouse move handler
    function handleMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }
    
    // Visibility change handler
    function handleVisibilityChange() {
        if (document.hidden) {
            isActive = false;
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        } else {
            isActive = true;
            animate();
        }
    }
    
    // Initialize
    function init() {
        resizeCanvas();
        initParticles();
        animate();
        
        // Event listeners
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });
        
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        document.addEventListener('visibilitychange', handleVisibilityChange);
    }
    
    // Start on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
