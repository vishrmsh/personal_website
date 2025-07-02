// Modern Minimalistic Portfolio - Vish Ramesh, PhD
// CEO & Founder of Vy Labs AI

$w.onReady(function () {
    initializeMinimalisticPortfolio();
    setupProfessionalLinks();
    addDropShadowDepth();
});

function initializeMinimalisticPortfolio() {
    // Set professional headshot
    if ($w('#profileImage')) {
        $w('#profileImage').src = 'https://static.wixstatic.com/media/9504ed_vish_ramesh.jpeg';
        $w('#profileImage').alt = 'Vish Ramesh, PhD - CEO & Founder of Vy Labs AI';
    }
    
    // Set clean professional content
    if ($w('#nameTitle')) {
        $w('#nameTitle').text = 'Vish Ramesh, PhD';
    }
    
    if ($w('#currentRole')) {
        $w('#currentRole').text = 'CEO & Founder, Vy Labs AI';
    }
    
    if ($w('#dissertation')) {
        $w('#dissertation').text = 'Human-Centered Machine Learning for Healthcare';
        $w('#dissertation').style.fontStyle = 'italic';
        $w('#dissertation').style.color = '#0066CC';
    }
    
    // Fade in sections
    if ($w('#heroSection')) {
        $w('#heroSection').show('fade', { duration: 800 });
    }
}

function setupProfessionalLinks() {
    // Vy Labs AI - Primary company
    if ($w('#vyLabsButton')) {
        $w('#vyLabsButton').onClick(() => {
            openLink('https://vylabs.ai/', 'Vy Labs AI');
        });
    }
    
    // Google Scholar
    if ($w('#scholarButton')) {
        $w('#scholarButton').onClick(() => {
            openLink('https://scholar.google.com/citations?user=ePqYlWoAAAAJ&hl=en&oi=ao', 'Google Scholar');
        });
    }
    
    // CV Download
    if ($w('#cvButton')) {
        $w('#cvButton').onClick(() => {
            openLink('https://www.vishramesh.com/_files/ugd/9504ed_a4bc83f62935453aac4f1e6ce35e02cc.pdf', 'CV Download');
        });
    }
    
    // Dissertation PDF
    if ($w('#dissertationButton')) {
        $w('#dissertationButton').onClick(() => {
            openLink('https://escholarship.org/content/qt2g61p87c/qt2g61p87c_noSplash_4f64d6ca52484dc00a698b4f914266c3.pdf', 'PhD Dissertation');
        });
    }
    
    // LinkedIn
    if ($w('#linkedinButton')) {
        $w('#linkedinButton').onClick(() => {
            openLink('https://www.linkedin.com/in/vishramesh/', 'LinkedIn');
        });
    }
    
    // Threads
    if ($w('#threadsButton')) {
        $w('#threadsButton').onClick(() => {
            openLink('https://www.threads.net/@vishrmsh', 'Threads @vishrmsh');
        });
    }
    
    // Vy Ventures
    if ($w('#venturesButton')) {
        $w('#venturesButton').onClick(() => {
            openLink('https://vy.ventures/', 'Vy Ventures');
        });
    }
    
    // UbiStroke Research
    if ($w('#researchButton')) {
        $w('#researchButton').onClick(() => {
            openLink('https://hxi.ucsd.edu/project/ubistroke/', 'UbiStroke Research');
        });
    }
    
    // Homni Health
    if ($w('#homniButton')) {
        $w('#homniButton').onClick(() => {
            openLink('https://www.homnihealth.com/', 'Homni Health');
        });
    }
    
    // Contact email
    if ($w('#contactButton')) {
        $w('#contactButton').onClick(() => {
            const mailtoLink = 'mailto:vramesh@vylabs.ai?subject=Professional Inquiry&body=Hello Dr. Ramesh,\n\nI would like to discuss...\n\nBest regards,';
            window.open(mailtoLink);
        });
    }
}

function addDropShadowDepth() {
    // Elements that need drop shadows for depth
    const shadowElements = [
        '#profileImage',
        '#heroCard',
        '#linksCard',
        '#contactCard'
    ];
    
    shadowElements.forEach(elementId => {
        const element = $w(elementId);
        if (element) {
            // Base drop shadow
            element.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
            element.style.borderRadius = '12px';
            element.style.transition = 'all 0.3s ease';
            
            // Enhanced shadow on hover
            element.onMouseIn(() => {
                element.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.18)';
                element.style.transform = 'translateY(-2px)';
            });
            
            element.onMouseOut(() => {
                element.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.12)';
                element.style.transform = 'translateY(0)';
            });
        }
    });
    
    // Button shadows
    const buttons = $w('Button');
    buttons.forEach(button => {
        button.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        button.style.borderRadius = '8px';
        button.style.transition = 'all 0.2s ease';
        
        button.onMouseIn(() => {
            button.style.boxShadow = '0 6px 24px rgba(0, 0, 0, 0.15)';
            button.style.transform = 'scale(1.02)';
        });
        
        button.onMouseOut(() => {
            button.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
            button.style.transform = 'scale(1)';
        });
    });
}

function openLink(url, name) {
    console.log(`Opening: ${name}`);
    window.open(url, '_blank', 'noopener,noreferrer');
}
