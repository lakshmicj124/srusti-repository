// Smooth scroll navigation
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

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe skill bars for animation
document.querySelectorAll('.skill-progress').forEach((el, index) => {
    const width = el.style.width;
    el.style.setProperty('--width', width);
    el.style.width = '0';
});

// Animate skill bars when they come into view
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            if (progressBar) {
                const width = progressBar.style.getPropertyValue('--width');
                progressBar.style.animation = 'fillBar 1.5s ease-out forwards';
                progressBar.style.width = width;
            }
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-item').forEach(item => {
    skillObserver.observe(item);
});

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    skillObserver.observe(card);
});

// Form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Simple validation
    if (!name || !email || !message) {
        showNotification('Please fill in all fields!', 'error');
        return;
    }

    // Show success message (in real app, this would send to backend)
    showNotification('Message sent successfully! Thank you for reaching out.', 'success');
    form.reset();
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease-out;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Download resume
function downloadResume() {
    // Create a simple resume PDF or document
    const resumeContent = `
SRUSTIKA N
========================================
Email: ssrustika@gmail.com
Location: India

CAREER OBJECTIVE
================
Motivated and enthusiastic BCA graduate seeking an entry-level position as a Software Engineer, Testing Engineer, or Data Analyst. 
Eager to apply technical skills and knowledge in a dynamic organization where I can contribute, learn, and grow professionally.

PROFESSIONAL SKILLS
===================
Programming Languages: Java, Python, C++, JavaScript
Databases: SQL, MongoDB, Firebase
Web Technologies: HTML5, CSS3, JavaScript, React
Tools & Frameworks: Git, GitHub, REST APIs
Soft Skills: Problem Solving, Communication, Teamwork, Attention to Detail, Quick Learner, Adaptability

EDUCATION
=========
Bachelor of Computer Applications (BCA)
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent));
    element.setAttribute('download', 'Srustika_Resume.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    showNotification('Resume downloaded successfully!', 'success');
}

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        const scrolled = window.pageYOffset;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Create floating particles in hero
function createParticles() {
    const starsContainer = document.querySelector('.stars');
    if (!starsContainer) return;

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(79, 70, 229, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 3}s infinite ease-in-out;
            pointer-events: none;
        `;
        starsContainer.appendChild(particle);
    }
}

// Add float animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(${Math.random() * 50 - 25}px);
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    createParticles();

    // Add subtle animations to stat cards on load
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
        }, index * 100);
    });
});

// Click outside to close mobile menu
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.style.display === 'flex') {
        if (!e.target.closest('.nav-container')) {
            navMenu.style.display = 'none';
            if (hamburger) hamburger.classList.remove('active');
        }
    }
});

// Add keyboard accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
        if (hamburger) hamburger.classList.remove('active');
    }
});

// Performance optimization: Lazy loading images
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        imageObserver.observe(img);
    });
}

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});

// Add fade in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(fadeInStyle);

// Add scroll progress indicator
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    // You can use this for a progress bar if needed
}

window.addEventListener('scroll', updateScrollProgress);

console.log('Portfolio loaded successfully!');
