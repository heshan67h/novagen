// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Animate service cards on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Team avatars animation on hover
document.querySelectorAll('.avatar').forEach(avatar => {
    avatar.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 8px 30px rgba(0, 212, 255, 0.6)';
    });
    
    avatar.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
    });
});

// Add particle effect on service card hover
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Sign up button click handler
document.querySelector('.btn-signup').addEventListener('click', () => {
    alert('Sign up functionality coming soon!');
});

// Add gradient animation to section title
const sectionTitle = document.querySelector('.section-title .highlight');
if (sectionTitle) {
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        sectionTitle.style.filter = `hue-rotate(${hue}deg)`;
    }, 50);
}

// FAQ accordion functionality
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(faq => {
            faq.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 500;
    }
});

// Smooth reveal animation for sections
const revealSections = document.querySelectorAll('.projects, .technical, .process, .pricing, .testimonials, .faq, .contact');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
    revealObserver.observe(section);
});

// Animate project images with different gradients
const projectImages = document.querySelectorAll('.project-image');
const gradients = [
    'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
];

projectImages.forEach((img, index) => {
    img.style.background = gradients[index % gradients.length];
});

// Add hover effect to process steps
document.querySelectorAll('.process-step').forEach(step => {
    step.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    step.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Pricing card click handlers
document.querySelectorAll('.btn-pricing').forEach(btn => {
    btn.addEventListener('click', function() {
        const plan = this.closest('.pricing-card').querySelector('h4').textContent;
        alert(`You selected the ${plan} plan. We'll contact you soon!`);
    });
});
