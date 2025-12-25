// Calculate duration between two dates
function calculateDuration(startDate, endDate) {
    // Parse dates (format: "YYYY-MM")
    const [startYear, startMonth] = startDate.split('-').map(Number);
    const end = endDate === 'present' ? new Date() : new Date(endDate + '-01');
    const endYear = end.getFullYear();
    const endMonth = end.getMonth() + 1; // getMonth() returns 0-11
    
    let years = endYear - startYear;
    let months = endMonth - startMonth;
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Format duration as "Xmo / Yy"
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
            // Remove existing duration if any
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

// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const body = document.body;
    
    // Update button text based on current theme
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (themeToggle) {
        themeToggle.textContent = currentTheme === 'light' ? 'light' : 'dark';
    }
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            html.classList.toggle('light-mode');
            body.classList.toggle('light-mode');
            const isLightMode = body.classList.contains('light-mode');
            themeToggle.textContent = isLightMode ? 'light' : 'dark';
            localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        });
    }
});

// Overlay functionality
document.addEventListener('DOMContentLoaded', function() {
    const showAllLinks = document.querySelectorAll('.show-all');
    const overlays = document.querySelectorAll('.overlay');
    const closeLinks = document.querySelectorAll('.close-overlay');
    
    // Open overlay
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
