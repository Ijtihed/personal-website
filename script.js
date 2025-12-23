// Overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    const showAllLinks = document.querySelectorAll('.show-all');
    const overlays = document.querySelectorAll('.overlay');
    const closeLinks = document.querySelectorAll('.close-overlay');
    
    // Progressive reveal functionality
    const clickableElements = document.querySelectorAll('.clickable');
    const clickHint = document.querySelector('.click-hint');
    
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        const buildersTimeElement = document.getElementById('builders-time');
        
        const now = new Date();
        
        // Use browser's locale for local time formatting
        const timeString = now.toLocaleTimeString(undefined, { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
        
        if (currentTimeElement && currentTimeElement.offsetParent !== null) {
            currentTimeElement.textContent = timeString;
        }
        
        if (buildersTimeElement && buildersTimeElement.offsetParent !== null) {
            buildersTimeElement.textContent = timeString;
        }
    }
    
    setInterval(updateTime, 1000);
    
    clickableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.stopPropagation();
            const step = this.getAttribute('data-step');
            const branch = this.getAttribute('data-branch');
            const nextStep = document.getElementById(`step-${step}`);
            
            // Remove highlight from clicked element
            this.classList.add('clicked');
            this.classList.remove('highlight');
            this.style.cursor = 'default';
            
            // Hide hint after second click (when "name" is clicked, step 2)
            if (step === '2' && clickHint) {
                clickHint.style.display = 'none';
            }
            
            // Handle branching
            if (branch) {
                // Show selected branch (don't hide others - allow multiple branches to be visible)
                const selectedBranch = document.getElementById(`${branch}-branch`);
                if (selectedBranch) {
                    // Only show if not already visible
                    if (selectedBranch.style.display === 'none' || !selectedBranch.style.display) {
                        if (branch === 'sensofusion' || branch === 'builders') {
                            // Sensofusion and builders: new line (block display)
                            selectedBranch.style.display = 'block';
                        } else {
                            // Research: inline display
                            selectedBranch.style.display = 'inline';
                        }
                    }
                }
            } else {
                // Normal step progression (handles both regular steps and branch steps)
                let targetStep = nextStep;
                
                // If step contains a dash, it's a branch step (e.g., "sensofusion-1")
                if (step.includes('-')) {
                    targetStep = document.getElementById(step);
                }
                
                if (targetStep) {
                    targetStep.style.display = 'inline';
                    
                    // If next step has a time element, update it immediately
                    const timeEl = targetStep.querySelector('#current-time') || targetStep.querySelector('#builders-time');
                    if (timeEl) {
                        const now = new Date();
                        // Use browser's locale for local time formatting
                        const timeString = now.toLocaleTimeString(undefined, { 
                            hour: 'numeric', 
                            minute: '2-digit',
                            hour12: true 
                        });
                        timeEl.textContent = timeString;
                    }
                }
            }
        });
    });
    
    // Open overlay
    showAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const overlayId = this.getAttribute('data-overlay');
            const overlay = document.getElementById(`overlay-${overlayId}`);
            if (overlay) {
                overlay.classList.add('active');
            }
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
