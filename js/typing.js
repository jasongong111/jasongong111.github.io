// Typing Effect for Hero Section

(function() {
    'use strict';
    
    const phrases = [
        'AI Student & Full-Stack Developer passionate about building intelligent systems and scalable applications.',
        'Machine Learning enthusiast exploring neural networks, computer vision, and deep learning.',
        'Full-Stack Developer crafting end-to-end solutions with React, TypeScript, and Python.',
        'Open-source contributor and lifelong learner passionate about AI and web technologies.'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50;
    let pauseTime = 2000;
    
    const typingElement = document.getElementById('typingText');
    const cursorElement = document.getElementById('typingCursor');
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            // Deleting text
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 25; // Faster when deleting
        } else {
            // Typing text
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 50; // Normal typing speed
        }
        
        // Check if phrase is complete
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Finished typing, pause before deleting
            isDeleting = true;
            typingSpeed = pauseTime;
        } else if (isDeleting && charIndex === 0) {
            // Finished deleting, move to next phrase
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing effect when DOM is ready
    function initTyping() {
        if (typingElement && cursorElement) {
            // Add a small delay before starting
            setTimeout(type, 500);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTyping);
    } else {
        initTyping();
    }
})();
