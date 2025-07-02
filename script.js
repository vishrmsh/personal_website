// Portfolio initialization and interactive functionality

document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    setupInteractiveElements();
});

function initializePortfolio() {
    // Set up profile image
    const profileImage = document.getElementById('profileImage');
    if (profileImage) {
        profileImage.alt = 'Dr. Vish Ramesh, PhD - CEO & Founder of Vy Labs AI';
    }
    
    // Add smooth scrolling for any internal links
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
}

function setupInteractiveElements() {
    // Add hover effects to content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click tracking for analytics (optional)
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent || this.innerText;
            console.log(`Button clicked: ${buttonText}`);
        });
    });
}

function openProfessionalLink(url, trackingName) {
    console.log(`Opening link: ${trackingName} - ${url}`);
    window.open(url, '_blank', 'noopener,noreferrer');
}

function openEmailContact() {
    const mailtoLink = 'mailto:vramesh@vylabs.ai?subject=Professional Inquiry - Dr. Vish Ramesh&body=Hello Dr. Ramesh,%0A%0AI would like to discuss a professional opportunity...%0A%0ABest regards,';
    window.open(mailtoLink);
}

// Add intersection observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.hero-section, .content-card, .links-section, .social-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focused = document.activeElement;
        if (focused && focused.classList.contains('btn')) {
            e.preventDefault();
            focused.click();
        }
    }
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);