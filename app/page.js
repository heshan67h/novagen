'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
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
        if (navbar) {
          navbar.style.transform = 'translateY(-100%)';
        }
      } else if (navbar) {
        navbar.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    });

    // Animate service cards on scroll
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver(entries => {
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
      avatar.addEventListener('mouseenter', function () {
        this.style.boxShadow = '0 8px 30px rgba(0, 212, 255, 0.6)';
      });

      avatar.addEventListener('mouseleave', function () {
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
      });
    });

    // Add particle effect on service card hover
    document.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // Sign up button click handler
    const signupButton = document.querySelector('.btn-signup');
    if (signupButton) {
      signupButton.addEventListener('click', () => {
        alert('Sign up functionality coming soon!');
      });
    }

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
      if (!question) return;

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
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        e.target.reset();
      });
    }

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
    const revealSections = document.querySelectorAll(
      '.projects, .technical, .process, .pricing, .testimonials, .faq, .contact'
    );
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

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
      'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    ];

    projectImages.forEach((img, index) => {
      img.style.background = gradients[index % gradients.length];
    });

    // Add hover effect to process steps
    document.querySelectorAll('.process-step').forEach(step => {
      step.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(10px)';
      });

      step.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(0)';
      });
    });

    // Pricing card click handlers
    document.querySelectorAll('.btn-pricing').forEach(btn => {
      btn.addEventListener('click', function () {
        const card = this.closest('.pricing-card');
        if (!card) return;
        const titleElement = card.querySelector('h4');
        if (!titleElement) return;
        const plan = titleElement.textContent;
        alert(`You selected the ${plan} plan. We'll contact you soon!`);
      });
    });
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path
                  d="M20 5 L35 12.5 L35 27.5 L20 35 L5 27.5 L5 12.5 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <text
                  x="20"
                  y="25"
                  fontSize="16"
                  fill="white"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  SG
                </text>
              </svg>
              <span className="logo-text">SoftGen</span>
            </div>
            <ul className="nav-menu">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#team">Team</a>
              </li>
              <li>
                <a href="#technical">Technical</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#blogs">Blogs</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Ideas Into{' '}
              <span className="gradient-text">Digital Reality</span>
            </h1>
            <p className="hero-subtitle">
              We build cutting-edge software solutions that drive innovation and
              accelerate business growth
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">View Projects</button>
            </div>
          </div>
          <div className="scroll-indicator">
            <div className="mouse-icon" />
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card mobile-card">
              <div className="service-icon purple-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              </div>
              <h3>Mobile Application Development</h3>
              <p>High-performance mobile apps for iOS and Android.</p>
            </div>

            <div className="service-card web-card">
              <div className="service-icon pink-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Web Application Development</h3>
              <p>Robust, scalable web applications for complex workflows.</p>
            </div>

            <div className="service-card website-card">
              <div className="service-icon blue-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Website Development</h3>
              <p>Modern, SEO-friendly websites that convert visitors.</p>
            </div>

            <div className="service-card design-card">
              <div className="service-icon orange-icon">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h3>UI/UX Design</h3>
              <p>Intuitive UI/UX that makes every interaction feel effortless.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="why-choose-us">
        <div className="container">
          <h2 className="section-title">
            WHY CHOOSE <span className="highlight">US?</span>
          </h2>
          <p className="section-subtitle">
            We aren't a massive agency where you get lost in the crowd. We are
            a focused team of creative engineers giving your project 100%
            attention.
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-icon">⚡</div>
              <h4>Fast Delivery</h4>
              <p>Quick turnaround without compromising quality</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🎯</div>
              <h4>Focused Approach</h4>
              <p>Dedicated attention to every detail</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">🚀</div>
              <h4>Latest Technology</h4>
              <p>Modern tech stack and best practices</p>
            </div>
            <div className="feature-box">
              <div className="feature-icon">💎</div>
              <h4>Premium Quality</h4>
              <p>Excellence in every line of code</p>
            </div>
          </div>

          <div id="team" className="team-section">
            <h3 className="team-title">
              A Dedicated Team Focused on Your Success
            </h3>
            <div className="team-avatars">
              <div className="avatar avatar-1" />
              <div className="avatar avatar-2" />
              <div className="avatar avatar-3" />
              <div className="avatar avatar-4" />
              <div className="avatar avatar-5" />
              <div className="avatar avatar-6" />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">
            OUR <span className="highlight">PROJECTS</span>
          </h2>
          <p className="section-subtitle">
            Delivering exceptional solutions across various industries
          </p>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <button className="btn-view">View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h4>E-Commerce Platform</h4>
                <p>Full-stack marketplace solution</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <button className="btn-view">View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h4>Healthcare Management</h4>
                <p>Patient management system</p>
                <div className="project-tags">
                  <span className="tag">Angular</span>
                  <span className="tag">Python</span>
                  <span className="tag">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-overlay">
                  <button className="btn-view">View Project</button>
                </div>
              </div>
              <div className="project-info">
                <h4>Finance Dashboard</h4>
                <p>Real-time analytics platform</p>
                <div className="project-tags">
                  <span className="tag">Vue.js</span>
                  <span className="tag">Django</span>
                  <span className="tag">Redis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technical" className="technical">
        <div className="container">
          <h2 className="section-title">
            TECHNICAL <span className="highlight">EXPERTISE</span>
          </h2>
          <p className="section-subtitle">
            Mastering the latest technologies to build powerful solutions
          </p>

          <div className="tech-categories">
            <div className="tech-category">
              <h4 className="tech-category-title">Frontend</h4>
              <div className="tech-icons">
                <div className="tech-item">React</div>
                <div className="tech-item">Vue.js</div>
                <div className="tech-item">Angular</div>
                <div className="tech-item">Next.js</div>
              </div>
            </div>

            <div className="tech-category">
              <h4 className="tech-category-title">Backend</h4>
              <div className="tech-icons">
                <div className="tech-item">Node.js</div>
                <div className="tech-item">Python</div>
                <div className="tech-item">Java</div>
                <div className="tech-item">.NET</div>
              </div>
            </div>

            <div className="tech-category">
              <h4 className="tech-category-title">Database</h4>
              <div className="tech-icons">
                <div className="tech-item">MongoDB</div>
                <div className="tech-item">PostgreSQL</div>
                <div className="tech-item">MySQL</div>
                <div className="tech-item">Redis</div>
              </div>
            </div>

            <div className="tech-category">
              <h4 className="tech-category-title">Cloud &amp; DevOps</h4>
              <div className="tech-icons">
                <div className="tech-item">AWS</div>
                <div className="tech-item">Azure</div>
                <div className="tech-item">Docker</div>
                <div className="tech-item">Kubernetes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process">
        <div className="container">
          <h2 className="section-title">
            OUR <span className="highlight">PROCESS</span>
          </h2>
          <p className="section-subtitle">
            A streamlined approach to deliver exceptional results
          </p>

          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">01</div>
              <div className="step-content">
                <h4>Discovery &amp; Planning</h4>
                <p>Understanding your vision and requirements</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <div className="step-content">
                <h4>Design &amp; Prototype</h4>
                <p>Creating intuitive designs and interactive prototypes</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <div className="step-content">
                <h4>Development</h4>
                <p>Building with clean code and best practices</p>
              </div>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <div className="step-content">
                <h4>Testing &amp; Launch</h4>
                <p>Rigorous testing and smooth deployment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="section-title">
            FLEXIBLE <span className="highlight">PRICING</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your project
          </p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h4>Starter</h4>
                <div className="price">$2,999</div>
                <p>Perfect for small projects</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Responsive Design</li>
                <li>✓ Up to 5 Pages</li>
                <li>✓ Basic SEO</li>
                <li>✓ 1 Month Support</li>
              </ul>
              <button className="btn-pricing">Get Started</button>
            </div>

            <div className="pricing-card featured">
              <div className="featured-badge">Popular</div>
              <div className="pricing-header">
                <h4>Professional</h4>
                <div className="price">$7,999</div>
                <p>Ideal for growing businesses</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Custom Web Application</li>
                <li>✓ Advanced Features</li>
                <li>✓ API Integration</li>
                <li>✓ 3 Months Support</li>
              </ul>
              <button className="btn-pricing primary">Get Started</button>
            </div>

            <div className="pricing-card">
              <div className="pricing-header">
                <h4>Enterprise</h4>
                <div className="price">Custom</div>
                <p>For large-scale solutions</p>
              </div>
              <ul className="pricing-features">
                <li>✓ Full-Stack Development</li>
                <li>✓ Cloud Infrastructure</li>
                <li>✓ Dedicated Team</li>
                <li>✓ 12 Months Support</li>
              </ul>
              <button className="btn-pricing">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="testimonials">
        <div className="container">
          <h2 className="section-title">
            CLIENT <span className="highlight">REVIEWS</span>
          </h2>
          <p className="section-subtitle">What our clients say about us</p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "SoftGen transformed our business with an incredible
                application. The team was professional, responsive, and
                delivered beyond expectations."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" />
                <div className="author-info">
                  <h5>John Smith</h5>
                  <p>CEO, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Outstanding quality and attention to detail. They truly
                understood our needs and delivered a solution that exceeded our
                expectations."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" />
                <div className="author-info">
                  <h5>Sarah Johnson</h5>
                  <p>Founder, StartupHub</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">
                "Working with SoftGen was a game-changer. Their expertise in
                modern technologies helped us launch our product ahead of
                schedule."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar" />
                <div className="author-info">
                  <h5>Michael Chen</h5>
                  <p>CTO, InnovateLab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container">
          <h2 className="section-title">
            FREQUENTLY ASKED <span className="highlight">QUESTIONS</span>
          </h2>
          <p className="section-subtitle">Everything you need to know</p>

          <div className="faq-container">
            <div className="faq-item">
              <div className="faq-question">
                <h4>How long does a typical project take?</h4>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Project timelines vary based on complexity. A simple website
                  takes 2-4 weeks, while complex applications can take 3-6
                  months. We provide detailed timelines during the planning
                  phase.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>What technologies do you specialize in?</h4>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  We specialize in modern web technologies including React,
                  Vue.js, Angular for frontend, Node.js, Python, and Java for
                  backend, along with cloud platforms like AWS and Azure.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>Do you provide ongoing support?</h4>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Yes, we offer comprehensive support and maintenance packages.
                  All projects include initial support, and we provide extended
                  support plans based on your needs.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>Can you work with our existing team?</h4>
                <span className="faq-icon">+</span>
              </div>
              <div className="faq-answer">
                <p>
                  Absolutely! We can seamlessly integrate with your existing
                  development team or work independently. We're flexible and
                  adapt to your workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">
            GET IN <span className="highlight">TOUCH</span>
          </h2>
          <p className="section-subtitle">Let's discuss your next project</p>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hello@softgen.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required />
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path
                    d="M20 5 L35 12.5 L35 27.5 L20 35 L5 27.5 L5 12.5 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x="20"
                    y="25"
                    fontSize="16"
                    fill="white"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    SG
                  </text>
                </svg>
                <span>SoftGen</span>
              </div>
              <p>Building the future, one line of code at a time.</p>
              <div className="social-links">
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
                <a href="#">GitHub</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#services">Web Development</a>
                </li>
                <li>
                  <a href="#services">Mobile Apps</a>
                </li>
                <li>
                  <a href="#services">UI/UX Design</a>
                </li>
                <li>
                  <a href="#services">Cloud Solutions</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#team">Our Team</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#blogs">Blog</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 SoftGen. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
