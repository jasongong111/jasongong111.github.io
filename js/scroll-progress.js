// Scroll Progress Indicator

(function() {
    'use strict';
    
    const progressBar = document.getElementById('scrollProgress');
    
    if (!progressBar) return;
    
    let ticking = false;
    
    function updateProgress() {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        // Calculate progress percentage
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        // Update progress bar width
        progressBar.style.width = progress + '%';
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateProgress);
            ticking = true;
        }
    }
    
    // Throttled scroll listener
    window.addEventListener('scroll', requestTick, { passive: true });
    
    // Initial update
    updateProgress();
})();
