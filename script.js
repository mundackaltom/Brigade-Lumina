// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Navbar background on scroll
const throttle = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const throttledScrollHandler = throttle(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }
}, 16);

window.addEventListener('scroll', throttledScrollHandler);

// Tab functionality for floor plans and gallery
function initializeTabs(tabsSelector, contentSelector) {
    const tabBtns = document.querySelectorAll(tabsSelector);
    const tabContents = document.querySelectorAll(contentSelector);

    if (tabBtns.length > 0 && tabContents.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const targetTab = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and content
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                this.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ',
        warning: '⚠'
    };
    
    const colors = {
        success: { bg: '#10b981', text: 'white' },
        error: { bg: '#ef4444', text: 'white' },
        info: { bg: '#3b82f6', text: 'white' },
        warning: { bg: '#f59e0b', text: 'white' }
    };
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    const color = colors[type] || colors.info;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
        font-family: 'Inter', sans-serif;
        background: ${color.bg};
        color: ${color.text};
    `;
    
    const content = notification.querySelector('.notification-content');
    content.style.cssText = 'display: flex; align-items: center; gap: 0.75rem;';
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        font-size: 1.3rem;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        line-height: 1;
        opacity: 0.8;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        removeNotification(notification);
    }, 5000);
    
    closeBtn.addEventListener('click', () => {
        removeNotification(notification);
    });
}

function removeNotification(notification) {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 300);
}

// Animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize animations
const initializeAnimations = () => {
    const animateElements = document.querySelectorAll('.price-card, .plan-card, .highlight-card, .amenity-item, .connectivity-card, .benefit-card, .detail-card, .tower-card, .feature-highlight, .action-card, .gallery-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(el);
    });
};

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (mobileMenu && navMenu) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
        
        const notification = document.querySelector('.notification');
        if (notification) {
            removeNotification(notification);
        }
        
        const modal = document.querySelector('.modal-overlay');
        if (modal) {
            modal.remove();
        }
    }
});

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize tabs
    initializeTabs('.floor-plan-tabs .tab-btn', '.floor-plan-content');
    initializeTabs('.gallery-tabs .tab-btn', '.gallery-content');
    
    // Initialize animations
    initializeAnimations();
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Thank you for your inquiry! Our team will contact you soon.', 'success');
            contactForm.reset();
        });
    }
    
    // Hero shrinking and rounded corners effect
    const heroElement = document.querySelector('.hero');
    if (heroElement) {
        let ticking = false;
        
        // Easing function for smoother animation
        const easeOutQuart = (t) => 1 - (--t) * t * t * t;
        const easeOutCubic = (t) => (--t) * t * t + 1;
        
        const handleHeroShrink = () => {
            const scrolled = window.pageYOffset;
            const viewportHeight = window.innerHeight;
            const maxScroll = viewportHeight * 1.2; // Extended range for smoother effect
            
            // Calculate progress (0 to 1) with smoother curve
            let progress = Math.min(scrolled / maxScroll, 1);
            
            // Apply easing for smoother animation
            const easedProgress = easeOutQuart(progress);
            
            // Calculate scale (from 1 to 0.75) with smoother transition
            const scale = 1 - (easedProgress * 0.25);
            
            // Calculate border radius (from 0 to 32px) with different easing
            const borderRadius = easeOutCubic(progress) * 32;
            
            // Calculate margin (from 0 to 24px) with smoother easing
            const margin = easedProgress * 24;
            
            // Apply the CSS custom properties with requestAnimationFrame for smoothness
            requestAnimationFrame(() => {
                document.documentElement.style.setProperty('--hero-scale', scale);
                document.documentElement.style.setProperty('--hero-border-radius', `${borderRadius}px`);
                document.documentElement.style.setProperty('--hero-margin', `${margin}px`);
                ticking = false;
            });
        };
        
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(handleHeroShrink);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', onScroll, { passive: true });
        handleHeroShrink(); // Initial call
    }
    
    // Loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});