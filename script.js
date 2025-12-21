// Overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    const showAllLinks = document.querySelectorAll('.show-all');
    const overlays = document.querySelectorAll('.overlay');
    const closeLinks = document.querySelectorAll('.close-overlay');
    
    // Open overlay (only if link has data-overlay and href is "#")
    showAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const overlayId = this.getAttribute('data-overlay');
            const href = this.getAttribute('href');
            // Only prevent default and show overlay if it's a placeholder link
            if (overlayId && href === '#') {
                e.preventDefault();
                const overlay = document.getElementById(`overlay-${overlayId}`);
                if (overlay) {
                    overlay.classList.add('active');
                }
            }
            // Otherwise, let the link navigate normally
        });
    });
    
    // Close overlay
    function closeAllOverlays() {
        overlays.forEach(overlay => {
            overlay.classList.remove('active');
        });
    }
    
    closeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            closeAllOverlays();
        });
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllOverlays();
        }
    });
    
    // Close on overlay background click
    overlays.forEach(overlay => {
        const overlayContent = overlay.querySelector('.overlay-content');
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeAllOverlays();
            }
        });
        if (overlayContent) {
            overlayContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    });
});
