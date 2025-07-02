// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// "Hello, World!" Example: https://learn-code.wix.com/en/article/hello-world

// Dr. Vish Ramesh - VC-Ready Professional Portfolio
// CEO & Founder of Vy Labs AI

// Import Wix modules
import wixLocation from 'wix-location';
import wixWindow from 'wix-window';

$w.onReady(function () {
    console.log('🚀 Loading Modern Professional Portfolio...');
    initializePortfolio();
    setupProfessionalContent();
    setupInteractiveElements();
    addModernStyling();
});

function initializePortfolio() {
    // Set professional headshot with modern styling
    const profileImage = $w('#profileImage');
    if (profileImage) {
        profileImage.src = 'https://static.wixstatic.com/media/vish_ramesh.jpg';
        profileImage.alt = 'Dr. Vish Ramesh, PhD - CEO & Founder of Vy Labs AI';
        addDropShadow(profileImage, '0 12px 40px rgba(0,0,0,0.15)');
    }
    
    // Fade in animations
    const mainElements = ['#heroSection', '#contentCard', '#linksSection'];
    mainElements.forEach((elementId, index) => {
        const element = $w(elementId);
        if (element) {
            setTimeout(() => {
                element.show('fade', { duration: 800 });
            }, index * 200);
        }
    });
}

function setupProfessionalContent() {
    // Professional content structure for modern presentation
    const content = {
        name: "Dr. Vish Ramesh, PhD",
        title: "CEO & Founder of Vy Labs AI",
        tagline: "Bringing AI to All",
        summary: "Leading the democratization of AI with proven track record in healthcare AI, 12+ publications, multiple patents, and successful company building.",
        
        currentRole: {
            title: "🚀 Current Leadership",
            content: "CEO & Founder - Vy Labs AI (2024-Present)\nBuilding next-generation AI platforms to democratize access globally."
        },
        
        recentWork: {
            title: "💡 Recent Experience", 
            content: "R&D Leadership - Vy Ventures (2023)\nCEO & Founder - Ilomai Health Solutions (2020-2022)\nIndustry: Samsung Research America, IBM TJ Watson Research"
        },
        
        education: {
            title: "🎓 Academic Excellence",
            content: "PhD in Bioengineering - UC San Diego (2020)\nDissertation: Human-Centered Machine Learning for Healthcare\nBS in Bioengineering - UCLA (2015, Summa cum laude)"
        },
        
        contact: {
            title: "📧 Connect",
            content: "vramesh@vylabs.ai\nProfessional inquiries welcome"
        }
    };
    
    // Update text elements with professional content
    updateTextElements(content);
    
    // Highlight dissertation
    highlightDissertation();
}

function updateTextElements(content) {
    const textElements = $w('Text');
    let contentIndex = 0;
    
    const contentArray = [
        content.name,
        content.title, 
        content.tagline,
        content.summary,
        content.currentRole.title,
        content.currentRole.content,
        content.recentWork.title,
        content.recentWork.content,
        content.education.title,
        content.education.content,
        content.contact.title,
        content.contact.content
    ];
    
    textElements.forEach((element, index) => {
        if (contentIndex < contentArray.length) {
            element.text = contentArray[contentIndex];
            
            // Modern typography styling
            if (contentIndex === 0) { // Name
                element.style.fontSize = '48px';
                element.style.fontWeight = '700';
                element.style.color = '#1a1a1a';
            } else if (contentIndex === 1) { // Title
                element.style.fontSize = '24px';
                element.style.fontWeight = '500';
                element.style.color = '#0066CC';
            } else if (contentIndex === 2) { // Tagline
                element.style.fontSize = '18px';
                element.style.fontWeight = '400';
                element.style.color = '#666';
            }
            
            // Add drop shadow to content cards
            if ([4, 6, 8, 10].includes(contentIndex)) {
                addDropShadow(element, '0 4px 20px rgba(0,0,0,0.08)');
            }
            
            contentIndex++;
        }
    });
}

function setupInteractiveElements() {
    // Professional links with modern interaction
    const professionalLinks = [
        { id: '#vyLabsButton', url: 'https://vylabs.ai/', label: 'Vy Labs AI', primary: true },
        { id: '#scholarButton', url: 'https://scholar.google.com/citations?user=ePqYlWoAAAAJ&hl=en&oi=ao', label: 'Google Scholar' },
        { id: '#dissertationButton', url: 'https://escholarship.org/content/qt2g61p87c/qt2g61p87c_noSplash_4f64d6ca52484dc00a698b4f914266c3.pdf', label: 'PhD Dissertation' },
        { id: '#cvButton', url: 'https://www.vishramesh.com/_files/ugd/9504ed_a4bc83f62935453aac4f1e6ce35e02cc.pdf', label: 'Executive CV' },
        { id: '#vyVenturesButton', url: 'https://vy.ventures/', label: 'Vy Ventures' },
        { id: '#ubistrokeButton', url: 'https://hxi.ucsd.edu/project/ubistroke/', label: 'UbiStroke Research' },
        { id: '#homniButton', url: 'https://www.homnihealth.com/', label: 'Homni Health' }
    ];
    
    professionalLinks.forEach(link => {
        const button = $w(link.id);
        if (button) {
            button.label = link.label;
            button.onClick(() => openProfessionalLink(link.url, link.label));
            
            // Modern button styling with drop shadows
            if (link.primary) {
                addDropShadow(button, '0 8px 25px rgba(0,102,204,0.3)');
                button.style.backgroundColor = '#0066CC';
            } else {
                addDropShadow(button, '0 4px 15px rgba(0,0,0,0.1)');
            }
            
            // Hover effects
            button.onMouseIn(() => {
                button.style.transform = 'translateY(-2px)';
                if (link.primary) {
                    addDropShadow(button, '0 12px 35px rgba(0,102,204,0.4)');
                } else {
                    addDropShadow(button, '0 8px 25px rgba(0,0,0,0.15)');
                }
            });
            
            button.onMouseOut(() => {
                button.style.transform = 'translateY(0px)';
                if (link.primary) {
                    addDropShadow(button, '0 8px 25px rgba(0,102,204,0.3)');
                } else {
                    addDropShadow(button, '0 4px 15px rgba(0,0,0,0.1)');
                }
            });
        }
    });
    
    // Social media links
    setupSocialLinks();
    
    // Contact email functionality
    setupContactEmail();
}

function setupSocialLinks() {
    // LinkedIn
    const linkedinButton = $w('#linkedinButton');
    if (linkedinButton) {
        linkedinButton.label = 'LinkedIn';
        linkedinButton.onClick(() => openProfessionalLink('https://www.linkedin.com/in/vishramesh/', 'LinkedIn Profile'));
        addDropShadow(linkedinButton, '0 4px 15px rgba(10,102,194,0.2)');
    }
    
    // Threads @vishrmsh
    const threadsButton = $w('#threadsButton');
    if (threadsButton) {
        threadsButton.label = 'Threads @vishrmsh';
        threadsButton.onClick(() => openProfessionalLink('https://www.threads.net/@vishrmsh', 'Threads Profile'));
        addDropShadow(threadsButton, '0 4px 15px rgba(0,0,0,0.1)');
    }
}

function setupContactEmail() {
    // Professional email contact
    const emailButton = $w('#emailButton');
    if (emailButton) {
        emailButton.label = 'Professional Contact';
        emailButton.onClick(() => {
            const mailtoLink = 'mailto:vramesh@vylabs.ai?subject=Professional Inquiry - Dr. Vish Ramesh&body=Hello Dr. Ramesh,%0A%0AI would like to discuss a professional opportunity...%0A%0ABest regards,';
            window.open(mailtoLink);
        });
        addDropShadow(emailButton, '0 6px 20px rgba(0,150,0,0.2)');
    }
}

function highlightDissertation() {
    // Special highlighting for dissertation
    const dissertationElements = $w('Text').filter(element => 
        element.text && element.text.includes('Human-Centered Machine Learning for Healthcare')
    );
    
    dissertationElements.forEach(element => {
        element.style.fontWeight = '600';
        element.style.color = '#0066CC';
        element.style.backgroundColor = 'rgba(0,102,204,0.05)';
        element.style.padding = '12px';
        element.style.borderRadius = '8px';
        addDropShadow(element, '0 6px 20px rgba(0,102,204,0.15)');
        
        // Make clickable
        element.onClick(() => {
            openProfessionalLink(
                'https://escholarship.org/content/qt2g61p87c/qt2g61p87c_noSplash_4f64d6ca52484dc00a698b4f914266c3.pdf',
                'PhD Dissertation'
            );
        });
    });
}

function addModernStyling() {
    // Add modern styling to all major containers
    const containers = ['#heroSection', '#contentCard', '#linksSection', '#socialSection'];
    
    containers.forEach(containerId => {
        const container = $w(containerId);
        if (container) {
            container.style.borderRadius = '12px';
            container.style.padding = '32px';
            container.style.backgroundColor = 'rgba(255,255,255,0.95)';
            addDropShadow(container, '0 8px 32px rgba(0,0,0,0.12)');
        }
    });
    
    // Modern page background
    const page = $w('#page');
    if (page) {
        page.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
    }
}

function addDropShadow(element, shadowValue) {
    if (element && element.style) {
        element.style.boxShadow = shadowValue;
        element.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    }
}

function openProfessionalLink(url, trackingName) {
    console.log(`Opening: ${trackingName}`);
    window.open(url, '_blank', 'noopener,noreferrer');
}

// Initialize modern portfolio
setTimeout(() => {
    console.log('');
    console.log('✨ MODERN PROFESSIONAL PORTFOLIO READY');
    console.log('🎯 Features:');
    console.log('   • Minimalistic design with elegant drop shadows');
    console.log('   • CEO & Founder of Vy Labs AI prominence');
    console.log('   • Complete research and professional links');
    console.log('   • Interactive social media integration');
    console.log('   • Dissertation highlighting');
    console.log('   • Modern responsive design');
    console.log('🚀 Ready to impress!');
}, 1500);
