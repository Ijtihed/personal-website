// Calculate duration between two dates
function calculateDuration(startDate, endDate) {
    const [startYear, startMonth] = startDate.split('-').map(Number);
    const end = endDate === 'present' ? new Date() : new Date(endDate + '-01');
    const endYear = end.getFullYear();
    const endMonth = end.getMonth() + 1;
    
    let years = endYear - startYear;
    let months = endMonth - startMonth;
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    const parts = [];
    if (months > 0) {
        parts.push(`${months}mo`);
    }
    if (years > 0) {
        parts.push(`${years}y`);
    }
    
    return parts.length > 0 ? parts.join(' / ') : '<1mo';
}

// Update experience durations in overlay
function updateExperienceDurations(overlay) {
    if (overlay.id !== 'overlay-experiences') return;
    
    const experienceItems = overlay.querySelectorAll('.overlay-body p[data-start]');
    experienceItems.forEach(item => {
        const start = item.getAttribute('data-start');
        const end = item.getAttribute('data-end');
        
        if (start && end) {
            const existingDuration = item.querySelector('.duration');
            if (existingDuration) {
                existingDuration.remove();
            }
            
            const duration = calculateDuration(start, end);
            const durationSpan = document.createElement('span');
            durationSpan.className = 'duration';
            durationSpan.textContent = ` (${duration})`;
            item.appendChild(durationSpan);
        }
    });
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            const target = document.getElementById(`section-${targetSection}`);
            
            if (target && target.classList.contains('active')) {
                // If already active, collapse it
                target.classList.remove('active');
            } else {
                // Hide all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                // Show target section
                if (target) {
                    target.classList.add('active');
                }
            }
        });
    });
    
    // Overlay functionality
    const showAllLinks = document.querySelectorAll('.show-all');
    const overlays = document.querySelectorAll('.overlay');
    const closeLinks = document.querySelectorAll('.close-overlay');
    
    showAllLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const overlayId = this.getAttribute('data-overlay');
            const overlay = document.getElementById(`overlay-${overlayId}`);
            if (overlay) {
                overlay.classList.add('active');
                updateExperienceDurations(overlay);
            }
        });
    });
    
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
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllOverlays();
        }
    });
    
    overlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeAllOverlays();
            }
        });
    });
});
