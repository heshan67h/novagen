'use client';

import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';

export default function Home(): JSX.Element {
  useEffect(() => {
    // Hero typing animations for title and code window
    const titleElement = document.getElementById('typing-text');
    const codeElement = document.getElementById('typing-code');

    if (titleElement) {
      const titles = [
        'AI-Powered Digital Solutions',
        'Next-Level Software Solutions',
        'Enterprise-Grade Web Platforms',
      ];
      let titleIndex = 0;
      let charIndex = 0;

      const typeTitle = () => {
        const current = titles[titleIndex];
        if (charIndex <= current.length) {
          titleElement.textContent = current.slice(0, charIndex);
          charIndex += 1;
          setTimeout(typeTitle, 80);
        } else {
          setTimeout(() => {
            charIndex = 0;
            titleIndex = (titleIndex + 1) % titles.length;
            typeTitle();
          }, 1500);
        }
      };

      typeTitle();
    }

    if (codeElement) {
      // Code with syntax highlighting spans - exact SoftGen style
      const codeLines = [
        '<span class="keyword">class</span> <span class="class-name">AdvancedAISystem</span>:',
        '    <span class="keyword">def</span> <span class="function">__init__</span>(<span class="keyword">self</span>, model, data_source):',
        '        <span class="keyword">self</span>.model = model',
        '        <span class="keyword">self</span>.data = data_source',
        '',
        '    <span class="keyword">def</span> <span class="function">run</span>(<span class="keyword">self</span>):',
        '        predictions = <span class="keyword">self</span>.model.<span class="function">predict</span>(<span class="keyword">self</span>.data)',
        '        <span class="keyword">return</span> predictions',
        '',
        '    <span class="keyword">def</span> <span class="function">optimize</span>(<span class="keyword">self</span>):',
        '        <span class="comment"># AI optimization algorithm</span>',
        '        <span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">100</span>):',
        '            loss = <span class="keyword">self</span>.<span class="function">compute_loss</span>()',
        '            <span class="keyword">self</span>.<span class="function">backpropagate</span>(loss)',
        '        <span class="keyword">return</span> <span class="string">"Optimized"</span>'
      ];

      // Full code as single string for smooth character-by-character typing
      const fullCode = codeLines.join('\n');
      let charIndex = 0;

      const typeCode = () => {
        if (charIndex <= fullCode.length) {
          codeElement.innerHTML = fullCode.slice(0, charIndex);
          charIndex++;

          // FAST typing speed - 15ms base with natural feel
          let speed = 15;
          speed += Math.random() * 10 - 5;

          setTimeout(typeCode, Math.max(speed, 10));
        }
      };

      // Start typing immediately
      setTimeout(typeCode, 300);
    }

    // Smooth scrolling for navigation links (only for hash anchors)
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');

        // Only prevent default and smooth scroll for hash anchors
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetSection = document.querySelector(targetId);

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
        // For full page routes (/about, /services, etc.), let them navigate normally
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
      {/* Navigation - Exact SoftGen Structure */}
      <nav className="navbar">
        <div className="nav-container" style={{ padding: '0 2rem', height: '25px', display: 'flex', alignItems: 'center' }}>
          <div className="nav-logo">
            <a href="#home">
              <span className="logo-text" style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700 }}>SoftGen</span>
            </a>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="/projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="/team" className="nav-link">Team</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            <li className="nav-item mobile-signup"><a href="#" className="nav-link btn-signup-mobile">Sign Up</a></li>
          </ul>
          <div className="nav-buttons">
            <a href="#" className="btn btn-signin">Sign Up</a>
          </div>
          <div className="nav-toggle" id="mobile-menu">
            <span className="bar"></span>
          </div>
        </div>
      </nav>


      {/* Hero Section - Exact SoftGen Structure with Dark Theme */}
      <section id="home" className="hero relative overflow-hidden flex items-center" style={{ minHeight: 'calc(100vh + 80px)', paddingTop: '100px' }}>
        {/* Video Background - Exact SoftGen-Copy */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.25)', opacity: 0.9 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark theme background overlay on video */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundColor: 'rgba(10, 15, 35, 0.5)' }}></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f23]/40 to-[#141a2e]/30 z-[2] pointer-events-none"></div>

        {/* Hero Content Container - Aligned with navbar */}
        <div className="hero-container relative z-[3]" style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem', boxSizing: 'border-box' }}>
          {/* Hero Split Layout - CSS GRID (1fr 1fr) with gap */}
          <div
            className="hero-split-layout w-full items-center"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'center'
            }}
          >

            {/* Left Side: Content - Same padding both sides */}
            <div className="hero-content-left relative z-[2] text-left" style={{ paddingRight: '0', marginLeft: '0' }}>
              <h1
                className="hero-title text-white leading-tight mb-8"
                style={{
                  fontSize: '4.8rem',
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: '-0.03em',
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
                  fontFamily: "'Poppins', 'Inter', sans-serif"
                }}
              >
                <span id="typing-text"></span>
                <span className="typing-cursor inline text-[#60a5fa]" style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>|</span>
              </h1>

              <p className="hero-subtitle text-[#e0e7ff] font-semibold tracking-wide mb-6" style={{ fontSize: '1.5rem', letterSpacing: '0.01em' }}>
                Premier Software Development Company
              </p>

              <p className="hero-description text-[#cbd5e1] mb-10" style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '90%' }}>
                We craft cutting-edge software solutions that transform businesses and drive innovation.
                From concept to deployment, we deliver excellence in every line of code.
              </p>

              <div className="hero-buttons flex items-center gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="btn btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0a0f23] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-all duration-250"
                  style={{ fontSize: '1.05rem', letterSpacing: '0.2px' }}
                >
                  Get Started
                </a>
                <a
                  href="#portfolio"
                  className="btn btn-secondary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white/95 font-semibold border border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.35)] transition-all duration-250 backdrop-blur-sm"
                  style={{ fontSize: '1.05rem', letterSpacing: '0.2px', backgroundColor: 'rgba(255,255,255,0.05)' }}
                >
                  View Our Work
                </a>
              </div>
            </div>

            {/* Right Side: Code Animation - Exact SoftGen Style */}
            <div className="hero-code-container" style={{ marginLeft: 'auto' }}>
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dots">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <span className="code-title">advanced_ai_system.py</span>
                </div>
                <div className="code-content">
                  <pre><code id="typing-code"></code></pre>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator" style={{
          position: 'absolute',
          bottom: '120px',
          left: '49%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          width: 'auto'
        }}>
          <div className="mouse-icon" style={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '8px'
          }}>
            <div style={{
              width: '4px',
              height: '12px',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: '2px',
              animation: 'scrollBounce 2s infinite'
            }}></div>
          </div>
          <span style={{
            color: 'rgba(255,255,255,0.35)',
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            fontFamily: "'Inter', sans-serif",
            textAlign: 'center'
          }}>Scroll</span>
        </div>
      </section>

      <section id="services" className="services" style={{
        background: 'linear-gradient(180deg, #0a0f23 0%, #0d1229 100%)',
        padding: '0 0 0px 0',
        position: 'relative',
        marginTop: '-50px'
      }}>
        <div style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {/* Mobile App Card */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '28px 24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 5
            }} className="service-card-hover">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>Mobile Application Development</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>High-performance mobile apps for iOS and Android.</p>
            </div>

            {/* Web App Card */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '28px 24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 5
            }} className="service-card-hover">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>Web Application Development</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>Robust, scalable web applications for complex workflows.</p>
            </div>

            {/* Website Card */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '28px 24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 5
            }} className="service-card-hover">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>Website Development</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>Modern, SEO-friendly websites that convert visitors.</p>
            </div>

            {/* UI/UX Card */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '28px 24px',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 5
            }} className="service-card-hover">
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #f43f5e 0%, #f97316 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </div>
              <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>UI/UX Design</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6 }}>Intuitive UI/UX that makes every interaction feel effortless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section id="about" style={{
        background: 'linear-gradient(180deg, #0d1229 0%, #0a0f23 100%)',
        padding: '100px 0',
        position: 'relative'
      }}>
        {/* Purple glow effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          {/* Title */}
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 800,
            color: 'white',
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            WHY CHOOSE <span style={{
              background: 'linear-gradient(135deg, #a78bfa 0%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>US?</span>
          </h2>

          {/* Description */}
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto 60px auto'
          }}>
            We aren&apos;t a massive agency where you get lost in the crowd. We are a focused team of
            creative engineers giving your project 100% attention.
          </p>

          {/* Team Section Title */}
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'white',
            marginBottom: '30px'
          }}>
            A Dedicated Team Focused on Your Success
          </h3>

          {/* Team Avatars */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '-12px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              border: '3px solid #0a0f23',
              marginLeft: '-12px',
              overflow: 'hidden'
            }}>
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              border: '3px solid #0a0f23',
              marginLeft: '-12px',
              overflow: 'hidden'
            }}>
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              border: '3px solid #0a0f23',
              marginLeft: '-12px',
              overflow: 'hidden'
            }}>
              <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              border: '3px solid #0a0f23',
              marginLeft: '-12px',
              overflow: 'hidden'
            }}>
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              border: '3px solid #0a0f23',
              marginLeft: '-12px',
              overflow: 'hidden'
            }}>
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
              border: '3px solid #0a0f23',
              marginLeft: '-12px',
              overflow: 'hidden'
            }}>
              <img src="https://randomuser.me/api/portraits/women/90.jpg" alt="Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== END WHY CHOOSE US ==================== */}

      {/* ==================== FEATURED PROJECTS SECTION ==================== */}
      <section id="projects" style={{
        background: 'linear-gradient(180deg, #0d1229 0%, #070b16 50%, #0a0f23 100%)',
        padding: '120px 0 140px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 10s ease-in-out infinite reverse'
        }}></div>

        {/* Grid pattern overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.5
        }}></div>

        <div style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

          {/* Section Header */}
          <div style={{ marginBottom: '70px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                borderRadius: '100px',
                padding: '8px 18px'
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span style={{ color: '#a78bfa', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Case Studies</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
              <div style={{ textAlign: 'center' }}>
                <h2 style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '16px',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1
                }}>
                  Digital Excellence <span style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #a78bfa 50%, #f472b6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>Delivered</span>
                </h2>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '1.1rem',
                  maxWidth: '650px',
                  lineHeight: 1.7,
                  margin: '0 auto'
                }}>
                  Transforming ambitious ideas into production-ready solutions. Every project crafted for scale, security, and seamless experience.
                </p>
              </div>

              <a href="#" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#06b6d4',
                fontSize: '0.95rem',
                fontWeight: 600,
                textDecoration: 'none',
                padding: '12px 24px',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '100px',
                background: 'rgba(6, 182, 212, 0.05)',
                transition: 'all 0.3s ease'
              }}>
                View All Projects
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bento Grid Projects Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px'
          }}>

            {/* ===== FEATURED PROJECT 1 - Horizontal Card ===== */}
            <div style={{
              gridColumn: 'span 6',
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row'
            }} className="project-card-main">
              {/* Gradient border effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                padding: '1px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, transparent 50%, rgba(6, 182, 212, 0.3) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none'
              }}></div>

              {/* Left - Project Image Area */}
              <div style={{
                position: 'relative',
                width: '280px',
                minHeight: '320px',
                background: 'linear-gradient(180deg, #1a1f35 0%, #0f1629 100%)',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                {/* Featured badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(139, 92, 246, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(139, 92, 246, 0.4)',
                  borderRadius: '100px',
                  padding: '5px 12px'
                }}>
                  <div style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#a78bfa',
                    boxShadow: '0 0 8px #a78bfa',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <span style={{ color: '#a78bfa', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Featured</span>
                </div>

                {/* Browser Mockup */}
                <div style={{
                  position: 'absolute',
                  top: '55%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) perspective(600px) rotateX(5deg) rotateY(-5deg)',
                  width: '85%',
                  height: '200px',
                  background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(139, 92, 246, 0.15)',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                    alt="Learning Platform"
                    style={{
                      width: '100%',
                      height: 'calc(100% - 26px)',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                </div>

                {/* Floating Icon */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '38px',
                  height: '38px',
                  background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
                  borderRadius: '10px',
                  boxShadow: '0 10px 20px rgba(139, 92, 246, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'float 3s ease-in-out infinite',
                  zIndex: 5
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
              </div>

              {/* Right - Project Info */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #1e293b, #334155)',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '100px',
                    textTransform: 'uppercase'
                  }}>Education</span>
                  <span style={{
                    background: 'rgba(34, 197, 94, 0.15)',
                    color: '#22c55e',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '100px'
                  }}>★ 4.9</span>
                </div>

                <h3 style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  lineHeight: 1.3
                }}>Smart Learning Management System</h3>

                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.8rem',
                  lineHeight: 1.6,
                  marginBottom: '14px'
                }}>
                  Comprehensive platform for online exams, payments, and hybrid education management.
                </p>

                {/* Challenge & Solution - Compact */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ color: '#f472b6', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Challenge</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.4, marginTop: '2px' }}>
                      Managing large student base across online and physical channels.
                    </p>
                  </div>
                  <div>
                    <span style={{ color: '#22c55e', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Solution</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.4, marginTop: '2px' }}>
                      Centralized API-driven LMS with real-time sync across all channels.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                  {['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(139, 92, 246, 0.1)',
                      color: '#a78bfa',
                      fontSize: '0.65rem',
                      padding: '3px 7px',
                      borderRadius: '4px'
                    }}>{tech}</span>
                  ))}
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '20px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 'auto' }}>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '1rem', fontWeight: 700 }}>50K+</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Users</div>
                  </div>
                  <div>
                    <div style={{ color: '#a78bfa', fontSize: '1rem', fontWeight: 700 }}>99.9%</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Uptime</div>
                  </div>
                  <div>
                    <div style={{ color: '#22c55e', fontSize: '1rem', fontWeight: 700 }}>3x</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Faster</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== FEATURED PROJECT 2 - Horizontal Card ===== */}
            <div style={{
              gridColumn: 'span 6',
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row'
            }} className="project-card-main">
              {/* Gradient border effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '20px',
                padding: '1px',
                background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4) 0%, transparent 50%, rgba(34, 197, 94, 0.3) 100%)',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                pointerEvents: 'none'
              }}></div>

              {/* Left - Project Image Area */}
              <div style={{
                position: 'relative',
                width: '280px',
                minHeight: '320px',
                background: 'linear-gradient(180deg, #0f1a2e 0%, #0a1220 100%)',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                {/* Featured badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  background: 'rgba(6, 182, 212, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(6, 182, 212, 0.4)',
                  borderRadius: '100px',
                  padding: '5px 12px'
                }}>
                  <div style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: '#06b6d4',
                    boxShadow: '0 0 8px #06b6d4',
                    animation: 'pulse 2s infinite 0.5s'
                  }}></div>
                  <span style={{ color: '#06b6d4', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Featured</span>
                </div>

                {/* Browser Mockup */}
                <div style={{
                  position: 'absolute',
                  top: '55%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) perspective(600px) rotateX(5deg) rotateY(5deg)',
                  width: '85%',
                  height: '200px',
                  background: 'linear-gradient(145deg, #1e293b 0%, #0f172a 100%)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 30px rgba(6, 182, 212, 0.15)',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', padding: '6px 10px', background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }}></div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80"
                    alt="Fintech Dashboard"
                    style={{
                      width: '100%',
                      height: 'calc(100% - 26px)',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>

                {/* Floating Icon */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  width: '38px',
                  height: '38px',
                  background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                  borderRadius: '10px',
                  boxShadow: '0 10px 20px rgba(6, 182, 212, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'float 3s ease-in-out infinite 0.5s',
                  zIndex: 5
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
              </div>

              {/* Right - Project Info */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'linear-gradient(135deg, #1e293b, #334155)',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '100px',
                    textTransform: 'uppercase'
                  }}>Fintech</span>
                  <span style={{
                    background: 'rgba(6, 182, 212, 0.15)',
                    color: '#06b6d4',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    padding: '4px 10px',
                    borderRadius: '100px'
                  }}>★ 4.8</span>
                </div>

                <h3 style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  lineHeight: 1.3
                }}>Enterprise Financial Dashboard</h3>

                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.8rem',
                  lineHeight: 1.6,
                  marginBottom: '14px'
                }}>
                  Real-time analytics for wealth managers with portfolio monitoring and compliance reporting.
                </p>

                {/* Challenge & Solution - Compact */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span style={{ color: '#f472b6', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Challenge</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.4, marginTop: '2px' }}>
                      Legacy systems couldn&apos;t handle 10K+ concurrent users with millisecond latency.
                    </p>
                  </div>
                  <div>
                    <span style={{ color: '#22c55e', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Solution</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.4, marginTop: '2px' }}>
                      Microservices with Redis caching, WebSocket streaming, and K8s auto-scaling.
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                  {['Next.js', 'Python', 'Redis', 'K8s', 'AWS'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: '#06b6d4',
                      fontSize: '0.65rem',
                      padding: '3px 7px',
                      borderRadius: '4px'
                    }}>{tech}</span>
                  ))}
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '20px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 'auto' }}>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '1rem', fontWeight: 700 }}>$2B+</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Processed</div>
                  </div>
                  <div>
                    <div style={{ color: '#22c55e', fontSize: '1rem', fontWeight: 700 }}>150+</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Clients</div>
                  </div>
                  <div>
                    <div style={{ color: '#f97316', fontSize: '1rem', fontWeight: 700 }}>40%</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>ROI Boost</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PROJECT 2 - E-Commerce ===== */}
            <div style={{
              gridColumn: 'span 4',
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }} className="project-card">
              {/* Category ribbon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 10,
                background: 'rgba(6, 182, 212, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '8px',
                padding: '6px 12px'
              }}>
                <span style={{ color: '#06b6d4', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>E-Commerce</span>
              </div>

              {/* Browser mockup with real e-commerce screenshot */}
              <div style={{
                height: '200px',
                background: 'linear-gradient(180deg, #1a1f35 0%, #0f1629 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                padding: '15px'
              }}>
                {/* Glow effect */}
                <div style={{
                  position: 'absolute',
                  width: '200px',
                  height: '100px',
                  background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
                  filter: 'blur(25px)'
                }}></div>
                <div style={{
                  width: '90%',
                  height: '160px',
                  background: '#1e293b',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 30px rgba(6, 182, 212, 0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 12px', background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                    <div style={{ flex: 1, marginLeft: '12px', height: '16px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px' }}></div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                    alt="E-Commerce Dashboard"
                    style={{
                      width: '100%',
                      height: 'calc(100% - 32px)',
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px' }}>ElectroMart Shopping Platform</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '12px' }}>
                  Enterprise-grade e-commerce platform for electronics retail with real-time inventory, multi-vendor support, and advanced analytics.
                </p>

                {/* Challenge & Solution */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <span style={{ color: '#f472b6', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Challenge</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.5, marginTop: '3px' }}>
                      Building a scalable platform handling 10K+ products with real-time stock sync across multiple warehouses.
                    </p>
                  </div>
                  <div>
                    <span style={{ color: '#22c55e', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase' }}>Solution</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.5, marginTop: '3px' }}>
                      Implemented microservices architecture with Redis caching, Elasticsearch for fast search, and Stripe Connect for vendor payouts.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                  {['Next.js', 'Prisma', 'Stripe', 'Redis'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(6, 182, 212, 0.1)',
                      color: '#06b6d4',
                      fontSize: '0.7rem',
                      padding: '4px 8px',
                      borderRadius: '5px'
                    }}>{tech}</span>
                  ))}
                </div>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '1rem', fontWeight: 700 }}>$2M+</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Monthly GMV</div>
                  </div>
                  <div>
                    <div style={{ color: '#22c55e', fontSize: '1rem', fontWeight: 700 }}>99.9%</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PROJECT 3 - HealthTech ===== */}
            <div style={{
              gridColumn: 'span 4',
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }} className="project-card">
              {/* Category ribbon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 10,
                background: 'rgba(34, 197, 94, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '8px',
                padding: '6px 12px'
              }}>
                <span style={{ color: '#22c55e', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>Health Tech</span>
              </div>

              {/* Phone mockup */}
              <div style={{
                height: '200px',
                background: 'linear-gradient(180deg, #1a1f35 0%, #0f1629 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                padding: '20px 0'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.25) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }}></div>
                <div style={{
                  width: '100px',
                  height: '170px',
                  background: '#0f0f0f',
                  borderRadius: '22px',
                  border: '3px solid #2a2a2a',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.4), 0 0 30px rgba(34, 197, 94, 0.15)'
                }}>
                  <div style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', width: '45px', height: '16px', background: '#0f0f0f', borderRadius: '8px', zIndex: 10 }}></div>
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80"
                    alt="Health App"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '18px'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50px',
                    background: 'linear-gradient(transparent, rgba(34, 197, 94, 0.8))',
                    borderRadius: '0 0 18px 18px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    paddingBottom: '8px'
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>FemCare Health Companion</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '12px' }}>
                  Privacy-first health tracking with AI-powered cycle predictions and personalized wellness insights.
                </p>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ marginBottom: '6px' }}>
                    <span style={{ color: '#f472b6', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Challenge</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', lineHeight: 1.4, marginTop: '2px' }}>
                      Accurate predictions while maintaining HIPAA compliance.
                    </p>
                  </div>
                  <div>
                    <span style={{ color: '#22c55e', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Solution</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', lineHeight: 1.4, marginTop: '2px' }}>
                      On-device ML with end-to-end encryption.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  {['Flutter', 'TensorFlow', 'Firebase'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      color: '#22c55e',
                      fontSize: '0.65rem',
                      padding: '3px 7px',
                      borderRadius: '4px'
                    }}>{tech}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div style={{ color: '#22c55e', fontSize: '1rem', fontWeight: 700 }}>100K+</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Downloads</div>
                  </div>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '1rem', fontWeight: 700 }}>4.8★</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== PROJECT 4 - AI/SaaS ===== */}
            <div style={{
              gridColumn: 'span 4',
              background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.6) 100%)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              padding: '0',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }} className="project-card">
              {/* Category ribbon */}
              <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                zIndex: 10,
                background: 'rgba(249, 115, 22, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                borderRadius: '8px',
                padding: '6px 12px'
              }}>
                <span style={{ color: '#f97316', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>AI / SaaS</span>
              </div>

              {/* Browser mockup */}
              <div style={{
                height: '200px',
                background: 'linear-gradient(180deg, #1a1f35 0%, #0f1629 100%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                padding: '15px'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '140px',
                  height: '100px',
                  background: 'radial-gradient(ellipse, rgba(249, 115, 22, 0.25) 0%, transparent 70%)',
                  filter: 'blur(25px)'
                }}></div>
                <div style={{
                  width: '90%',
                  height: '160px',
                  background: '#1e293b',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 30px rgba(249, 115, 22, 0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 12px', background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#eab308' }}></div>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80"
                    alt="AI Dashboard"
                    style={{
                      width: '100%',
                      height: 'calc(100% - 32px)',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </div>
                {/* Floating AI badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '15px',
                  right: '20px',
                  width: '36px',
                  height: '36px',
                  background: 'linear-gradient(135deg, #f97316, #ea580c)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(249, 115, 22, 0.4)',
                  zIndex: 2
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
                    <path d="M12 12a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z" />
                  </svg>
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>SmartHire AI Recruitment</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '12px' }}>
                  AI-powered recruitment with automated resume parsing and bias-free hiring workflows.
                </p>

                <div style={{ marginBottom: '12px' }}>
                  <div style={{ marginBottom: '6px' }}>
                    <span style={{ color: '#f472b6', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Challenge</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', lineHeight: 1.4, marginTop: '2px' }}>
                      Processing 1000s of applications while eliminating bias.
                    </p>
                  </div>
                  <div>
                    <span style={{ color: '#22c55e', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase' }}>Solution</span>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', lineHeight: 1.4, marginTop: '2px' }}>
                      GPT-4 skill extraction with blind resume mode.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginBottom: '12px' }}>
                  {['Python', 'FastAPI', 'GPT-4'].map((tech, i) => (
                    <span key={i} style={{
                      background: 'rgba(249, 115, 22, 0.1)',
                      color: '#f97316',
                      fontSize: '0.65rem',
                      padding: '3px 7px',
                      borderRadius: '4px'
                    }}>{tech}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <div>
                    <div style={{ color: '#f97316', fontSize: '1rem', fontWeight: 700 }}>85%</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Time Saved</div>
                  </div>
                  <div>
                    <div style={{ color: '#06b6d4', fontSize: '1rem', fontWeight: 700 }}>200+</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.6rem' }}>Companies</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '60px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.7) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '24px 40px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                We&apos;ve delivered <span style={{ color: 'white', fontWeight: 600 }}>50+ projects</span> across fintech, healthcare, education & retail
              </p>
              <a href="#contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: 600,
                padding: '12px 24px',
                borderRadius: '10px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)'
              }}>
                Start Your Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* ==================== END FEATURED PROJECTS ==================== */}

      {/* ==================== PROCESS / HOW WE WORK SECTION ==================== */}
      <section style={{
        position: 'relative',
        padding: '40px 0',
        overflow: 'hidden'
      }}>
        {/* Background Elements */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }}></div>
        </div>

        <div style={{ width: '95%', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.25)', borderRadius: '100px', padding: '8px 20px', marginBottom: '28px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <span style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Our Process</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}>
              How We Build <span style={{
                background: 'linear-gradient(135deg, #22c55e 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Excellence</span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.15rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              A proven methodology refined over 50+ successful projects. Transparent, collaborative, and results-driven approach that ensures your vision becomes reality.
            </p>
          </div>

          {/* Process Timeline */}
          <div style={{ position: 'relative' }}>

            {/* Vertical Line - Center */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '3px',
              background: 'linear-gradient(180deg, #8b5cf6 0%, #ec4899 25%, #06b6d4 50%, #22c55e 75%, #22c55e 100%)',
              transform: 'translateX(-50%)',
              opacity: 0.5,
              borderRadius: '2px'
            }}></div>

            {/* Step 1 - Discovery */}
            <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: '0px', position: 'relative' }}>
              {/* Left Content */}
              <div style={{ flex: 1, paddingRight: '40px', textAlign: 'right', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(139, 92, 246, 0.15)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#a78bfa', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Week 1-2</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>Discovery & Strategy</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  We begin with an in-depth analysis of your business objectives, target audience demographics, and technical requirements. Our team conducts comprehensive stakeholder interviews, competitive analysis, and market research to understand your unique position.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  We map out the complete project scope, define key milestones, identify potential risks, and create a detailed roadmap with clear deliverables and timelines.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', flexWrap: 'wrap' }}>
                  {['Requirements Analysis', 'User Research', 'Tech Stack Planning', 'Competitive Analysis', 'Risk Assessment'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(139, 92, 246, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(139, 92, 246, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Center Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(139, 92, 246, 0.5), 0 0 100px rgba(139, 92, 246, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(255,255,255,0.1)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>01</span>
              </div>

              {/* Right - Stats */}
              <div style={{ flex: 1, paddingLeft: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>50+</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Projects Delivered</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>100%</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Design */}
            <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: '0px', position: 'relative' }}>
              {/* Left - Stats */}
              <div style={{ flex: 1, paddingRight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>99.9%</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Uptime Guaranteed</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>15+</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Expert Engineers</div>
                  </div>
                </div>
              </div>

              {/* Center Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #ec4899, #db2777)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(236, 72, 153, 0.5), 0 0 100px rgba(236, 72, 153, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(255,255,255,0.1)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>02</span>
              </div>

              {/* Right Content */}
              <div style={{ flex: 1, paddingLeft: '40px', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(236, 72, 153, 0.15)', border: '1px solid rgba(236, 72, 153, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#f472b6', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Week 2-4</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>UI/UX Design</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  Our design team crafts intuitive, pixel-perfect interfaces that not only look stunning but convert. We start with user journey mapping and information architecture, then move to wireframes and finally high-fidelity prototypes.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every design decision is backed by UX research and usability testing. We create comprehensive design systems that ensure consistency across all touchpoints and make future updates seamless.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {['User Journey Mapping', 'Wireframes', 'UI Design', 'Interactive Prototypes', 'Design System', 'Usability Testing'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(236, 72, 153, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(236, 72, 153, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f472b6" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 - Development */}
            <div style={{ display: 'flex', alignItems: 'stretch', marginBottom: '0px', position: 'relative' }}>
              {/* Left Content */}
              <div style={{ flex: 1, paddingRight: '40px', textAlign: 'right', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#06b6d4', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Week 4-10</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>Development & Engineering</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  Our engineers build clean, scalable, and maintainable code using cutting-edge technologies and industry best practices. We follow Agile methodology with 2-week sprints, daily standups, and weekly demo sessions to keep you in the loop.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every feature undergoes rigorous code review, automated testing, and security audits. We implement CI/CD pipelines for continuous integration and seamless deployments. Performance optimization is built into every stage.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', flexWrap: 'wrap' }}>
                  {['Frontend Development', 'Backend APIs', 'Database Design', 'Unit Testing', 'Code Review', 'CI/CD Pipeline', 'Security Audits'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(6, 182, 212, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(6, 182, 212, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Center Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #06b6d4, #0891b2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(6, 182, 212, 0.5), 0 0 100px rgba(6, 182, 212, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(255,255,255,0.1)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>03</span>
              </div>

              {/* Right - Stats */}
              <div style={{ flex: 1, paddingLeft: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>&lt;2h</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Response Time</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>24/7</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Launch */}
            <div style={{ display: 'flex', alignItems: 'stretch', position: 'relative' }}>
              {/* Left - Stats */}
              <div style={{ flex: 1, paddingRight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>Zero</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Downtime Deployments</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>5★</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Center Circle */}
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #22c55e, #16a34a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(34, 197, 94, 0.5), 0 0 100px rgba(34, 197, 94, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(255,255,255,0.1)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>04</span>
              </div>

              {/* Right Content */}
              <div style={{ flex: 1, paddingLeft: '40px', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#22c55e', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ongoing Partnership</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>Launch & Continuous Support</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  We execute seamless deployments with zero-downtime strategies, comprehensive monitoring, and instant rollback capabilities. Your launch is backed by our 24/7 support team ready to handle any issues.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Post-launch, we provide ongoing maintenance, performance optimization, security patches, and feature enhancements. We monitor application health, track user analytics, and proactively identify opportunities for improvement.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {['Zero-Downtime Deploy', 'Real-time Monitoring', '24/7 Support', 'Performance Analytics', 'Security Updates', 'Feature Enhancements'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(34, 197, 94, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(34, 197, 94, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* ==================== END PROCESS SECTION ==================== */}

      {/* ==================== TECH STACK SECTION - ATTRACTIVE CARDS ==================== */}
      <section style={{
        position: 'relative',
        padding: '120px 0',
        overflow: 'hidden'
      }}>
        {/* Animated Background Effects */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 60%)',
            borderRadius: '50%',
            filter: 'blur(80px)'
          }}></div>
        </div>

        <div style={{ width: '95%', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

          {/* Section Header - Centered */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '100px',
              padding: '10px 24px',
              marginBottom: '28px',
              backdropFilter: 'blur(10px)'
            }}>
              <span style={{ fontSize: '1.1rem' }}>🛠️</span>
              <span style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>Our Technology Arsenal</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              Technologies <span style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>We Master</span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.15rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8
            }}>
              We leverage cutting-edge technologies to build scalable, high-performance applications that deliver exceptional results.
            </p>
          </div>

          {/* Tech Categories Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>

            {/* Frontend Development Card */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(139, 92, 246, 0.05) 0%, rgba(20, 20, 40, 0.4) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.2)',
              borderRadius: '20px',
              padding: '25px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(139, 92, 246, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
              }}>
              {/* Glow Effect */}
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    boxShadow: '0 8px 20px -6px rgba(139, 92, 246, 0.5)'
                  }}>⚛️</div>
                  <div>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      margin: 0,
                      marginBottom: '4px'
                    }}>Frontend Development</h3>
                    <span style={{ color: 'rgba(139, 92, 246, 0.8)', fontSize: '0.75rem', fontWeight: 600 }}>8 TECHNOLOGIES</span>
                  </div>
                </div>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  marginBottom: '18px'
                }}>
                  Creating stunning, responsive user interfaces with modern frameworks and cutting-edge design systems.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    { name: 'React', color: '#61DAFB' },
                    { name: 'Next.js', color: '#ffffff' },
                    { name: 'TypeScript', color: '#3178C6' },
                    { name: 'Tailwind', color: '#06B6D4' },
                    { name: 'Vue.js', color: '#4FC08D' },
                    { name: 'Framer', color: '#FF0055' },
                    { name: 'Redux', color: '#764ABC' },
                    { name: 'Zustand', color: '#433E38' }
                  ].map((tech, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease'
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(139, 92, 246, 0.15)';
                        e.currentTarget.style.borderColor = tech.color;
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        background: tech.color,
                        borderRadius: '50%',
                        boxShadow: `0 0 8px ${tech.color}`
                      }}></span>
                      <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 500 }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend & APIs Card */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(34, 197, 94, 0.05) 0%, rgba(20, 20, 40, 0.4) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '20px',
              padding: '25px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(34, 197, 94, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)';
              }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #22c55e 0%, #4ade80 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    boxShadow: '0 8px 20px -6px rgba(34, 197, 94, 0.5)'
                  }}>🖥️</div>
                  <div>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      margin: 0,
                      marginBottom: '4px'
                    }}>Backend & APIs</h3>
                    <span style={{ color: 'rgba(34, 197, 94, 0.8)', fontSize: '0.75rem', fontWeight: 600 }}>8 TECHNOLOGIES</span>
                  </div>
                </div>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '24px'
                }}>
                  Building robust, scalable server-side solutions with secure RESTful and GraphQL APIs.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    { name: 'Node.js', color: '#339933' },
                    { name: 'Python', color: '#3776AB' },
                    { name: 'NestJS', color: '#E0234E' },
                    { name: 'Express', color: '#ffffff' },
                    { name: 'GraphQL', color: '#E535AB' },
                    { name: 'FastAPI', color: '#009688' },
                    { name: 'Prisma', color: '#2D3748' },
                    { name: 'Socket.io', color: '#ffffff' }
                  ].map((tech, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease'
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(34, 197, 94, 0.15)';
                        e.currentTarget.style.borderColor = tech.color;
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        background: tech.color,
                        borderRadius: '50%',
                        boxShadow: `0 0 8px ${tech.color}`
                      }}></span>
                      <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 500 }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Database & Storage Card */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(6, 182, 212, 0.05) 0%, rgba(20, 20, 40, 0.4) 100%)',
              border: '1px solid rgba(6, 182, 212, 0.2)',
              borderRadius: '20px',
              padding: '25px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(6, 182, 212, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(6, 182, 212, 0.2)';
              }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    background: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                    boxShadow: '0 8px 20px -6px rgba(6, 182, 212, 0.5)'
                  }}>🗄️</div>
                  <div>
                    <h3 style={{
                      color: 'white',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      margin: 0,
                      marginBottom: '4px'
                    }}>Database & Storage</h3>
                    <span style={{ color: 'rgba(6, 182, 212, 0.8)', fontSize: '0.75rem', fontWeight: 600 }}>8 TECHNOLOGIES</span>
                  </div>
                </div>
                <p style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '24px'
                }}>
                  Implementing reliable data persistence with optimized queries and efficient caching strategies.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {[
                    { name: 'PostgreSQL', color: '#4169E1' },
                    { name: 'MongoDB', color: '#47A248' },
                    { name: 'Redis', color: '#DC382D' },
                    { name: 'MySQL', color: '#4479A1' },
                    { name: 'Supabase', color: '#3ECF8E' },
                    { name: 'Firebase', color: '#FFCA28' },
                    { name: 'Elasticsearch', color: '#005571' },
                    { name: 'AWS S3', color: '#FF9900' }
                  ].map((tech, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 16px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease'
                    }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(6, 182, 212, 0.15)';
                        e.currentTarget.style.borderColor = tech.color;
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        background: tech.color,
                        borderRadius: '50%',
                        boxShadow: `0 0 8px ${tech.color}`
                      }}></span>
                      <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem', fontWeight: 500 }}>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.05) 0%, rgba(249, 115, 22, 0.02) 100%)',
              border: '1px solid rgba(249, 115, 22, 0.2)',
              borderRadius: '20px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(249, 115, 22, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.2)';
              }}>
              <div style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0.1) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(249, 115, 22, 0.3)',
                boxShadow: '0 8px 32px rgba(249, 115, 22, 0.2)',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '1.3rem' }}>☁️</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  margin: 0
                }}>Cloud & DevOps</h3>
                <span style={{
                  background: 'rgba(249, 115, 22, 0.15)',
                  color: '#f97316',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  border: '1px solid rgba(249, 115, 22, 0.3)'
                }}>8 Technologies</span>
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                marginBottom: '18px'
              }}>
                Deploying and managing infrastructure with CI/CD pipelines and container orchestration.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { name: 'AWS', color: '#FF9900' },
                  { name: 'Docker', color: '#2496ED' },
                  { name: 'Kubernetes', color: '#326CE5' },
                  { name: 'Vercel', color: '#ffffff' },
                  { name: 'GitHub Actions', color: '#2088FF' },
                  { name: 'Terraform', color: '#7B42BC' },
                  { name: 'Nginx', color: '#009639' },
                  { name: 'Cloudflare', color: '#F38020' }
                ].map((tech, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '25px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(249, 115, 22, 0.15)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: tech.color,
                      borderRadius: '50%',
                      boxShadow: `0 0 8px ${tech.color}80`
                    }}></span>
                    <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Development */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(236, 72, 153, 0.02) 100%)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              borderRadius: '20px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(236, 72, 153, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(236, 72, 153, 0.2)';
              }}>
              <div style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(236, 72, 153, 0.3)',
                boxShadow: '0 8px 32px rgba(236, 72, 153, 0.2)',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '1.3rem' }}>📱</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  margin: 0
                }}>Mobile Development</h3>
                <span style={{
                  background: 'rgba(236, 72, 153, 0.15)',
                  color: '#ec4899',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  border: '1px solid rgba(236, 72, 153, 0.3)'
                }}>8 Technologies</span>
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                marginBottom: '18px'
              }}>
                Crafting native-quality cross-platform mobile applications for iOS and Android ecosystems.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { name: 'React Native', color: '#61DAFB' },
                  { name: 'Flutter', color: '#02569B' },
                  { name: 'Expo', color: '#ffffff' },
                  { name: 'Swift', color: '#FA7343' },
                  { name: 'Kotlin', color: '#7F52FF' },
                  { name: 'Firebase', color: '#FFCA28' },
                  { name: 'RevenueCat', color: '#FF6B4A' },
                  { name: 'OneSignal', color: '#E54B4D' }
                ].map((tech, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '25px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(236, 72, 153, 0.15)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: tech.color,
                      borderRadius: '50%',
                      boxShadow: `0 0 8px ${tech.color}80`
                    }}></span>
                    <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design & Prototyping */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(168, 85, 247, 0.02) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              borderRadius: '20px',
              padding: '25px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(168, 85, 247, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.2)';
              }}>
              <div style={{
                width: '45px',
                height: '45px',
                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(168, 85, 247, 0.1) 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                boxShadow: '0 8px 32px rgba(168, 85, 247, 0.2)',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '1.3rem' }}>🎨</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <h3 style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  margin: 0
                }}>Design & Prototyping</h3>
                <span style={{
                  background: 'rgba(168, 85, 247, 0.15)',
                  color: '#a855f7',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  border: '1px solid rgba(168, 85, 247, 0.3)'
                }}>8 Technologies</span>
              </div>

              <p style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.85rem',
                lineHeight: 1.5,
                marginBottom: '18px'
              }}>
                Creating beautiful, user-centric designs with interactive prototypes and design systems.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { name: 'Figma', color: '#F24E1E' },
                  { name: 'Adobe XD', color: '#FF61F6' },
                  { name: 'Photoshop', color: '#31A8FF' },
                  { name: 'Illustrator', color: '#FF9A00' },
                  { name: 'Framer', color: '#0055FF' },
                  { name: 'Sketch', color: '#F7B500' },
                  { name: 'After Effects', color: '#9999FF' },
                  { name: 'Lottie', color: '#00DDB3' }
                ].map((tech, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '25px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(168, 85, 247, 0.15)';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      background: tech.color,
                      borderRadius: '50%',
                      boxShadow: `0 0 8px ${tech.color}80`
                    }}></span>
                    <span style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            marginTop: '70px',
            paddingTop: '50px',
            borderTop: '1px solid rgba(255,255,255,0.06)'
          }}>
            {[
              { value: '50+', label: 'Technologies', desc: 'In our toolkit' },
              { value: '7', label: 'Categories', desc: 'Full-stack coverage' },
              { value: '100%', label: 'Modern Stack', desc: 'Latest versions' },
              { value: '24/7', label: 'Support', desc: 'Always available' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '8px',
                  lineHeight: 1
                }}>{stat.value}</div>
                <div style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '4px' }}>{stat.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{stat.desc}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* ==================== END TECH STACK SECTION ==================== */}

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section style={{
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          animation: 'float 10s ease-in-out infinite reverse'
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              borderRadius: '30px',
              padding: '8px 20px',
              marginBottom: '20px'
            }}>
              <span style={{ fontSize: '1.2rem' }}>💬</span>
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '1px'
              }}>CLIENT TESTIMONIALS</span>
            </div>

            <h2 style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: 'white',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              What Our <span style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Clients Say</span>
            </h2>

            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '1.1rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 1.7
            }}>
              Trusted by businesses worldwide. Here's what our clients have to say about working with us.
            </p>
          </div>

          {/* Testimonials Carousel with Navigation */}
          <div style={{ position: 'relative', marginBottom: '50px' }}>
            {/* Left Arrow Button */}
            <button
              id="testimonial-prev"
              onClick={() => {
                const container = document.getElementById('testimonials-container');
                if (container) {
                  container.scrollBy({ left: -450, behavior: 'smooth' });
                }
              }}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10,
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              ←
            </button>

            {/* Right Arrow Button */}
            <button
              id="testimonial-next"
              onClick={() => {
                const container = document.getElementById('testimonials-container');
                if (container) {
                  container.scrollBy({ left: 450, behavior: 'smooth' });
                }
              }}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10,
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(6, 182, 212, 0.4) 100%)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              →
            </button>

            {/* Testimonials Container */}
            <div
              id="testimonials-container"
              style={{
                overflowX: 'auto',
                overflowY: 'hidden',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style jsx>{`
                #testimonials-container::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div style={{
                display: 'flex',
                gap: '30px',
                minWidth: 'min-content',
                padding: '10px 0'
              }}>
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'CEO at TechVision',
                    image: '👩‍💼',
                    rating: 5,
                    text: 'Working with this team has been an absolute game-changer for our business. Their expertise in modern web technologies and attention to detail is unmatched. They delivered our project ahead of schedule and exceeded all expectations!',
                    color: '#8b5cf6'
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Founder of StartupHub',
                    image: '👨‍💻',
                    rating: 5,
                    text: 'The level of professionalism and technical skill is outstanding. They transformed our vision into a beautiful, high-performing application. Communication was seamless throughout the entire process. Highly recommend!',
                    color: '#06b6d4'
                  },
                  {
                    name: 'Emily Rodriguez',
                    role: 'Product Manager at InnovateCo',
                    image: '👩‍🎨',
                    rating: 5,
                    text: 'From concept to deployment, the experience was exceptional. They not only built what we asked for but also suggested improvements that significantly enhanced our product. True partners in innovation!',
                    color: '#22c55e'
                  },
                  {
                    name: 'David Park',
                    role: 'CTO at CloudScale',
                    image: '👨‍🔧',
                    rating: 5,
                    text: 'Their deep understanding of cloud architecture and DevOps practices helped us scale our infrastructure efficiently. The code quality is pristine, and they follow best practices religiously. A pleasure to work with!',
                    color: '#f97316'
                  },
                  {
                    name: 'Jessica Williams',
                    role: 'Marketing Director at BrandFlow',
                    image: '👩‍💼',
                    rating: 5,
                    text: 'They created a stunning website that perfectly captures our brand identity. The site is fast, responsive, and has significantly improved our conversion rates. The ongoing support has been fantastic too!',
                    color: '#ec4899'
                  },
                  {
                    name: 'Alex Thompson',
                    role: 'VP Engineering at DataSync',
                    image: '👨‍💼',
                    rating: 5,
                    text: 'Incredible technical expertise combined with excellent project management. They handled complex integrations with ease and delivered a robust, scalable solution. Would definitely work with them again!',
                    color: '#a855f7'
                  }
                ].map((testimonial, i) => (
                  <div key={i} style={{
                    minWidth: 'calc(25% - 22.5px)',
                    width: 'calc(25% - 22.5px)',
                    background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.01) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '30px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.borderColor = `${testimonial.color}40`;
                      e.currentTarget.style.boxShadow = `0 20px 60px ${testimonial.color}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>
                    {/* Quote Icon */}
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      fontSize: '3rem',
                      color: testimonial.color,
                      opacity: 0.1,
                      fontFamily: 'Georgia, serif'
                    }}>"</div>

                    {/* Rating Stars */}
                    <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <span key={j} style={{
                          color: '#fbbf24',
                          fontSize: '1.1rem',
                          filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.5))'
                        }}>⭐</span>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.8)',
                      fontSize: '0.95rem',
                      lineHeight: 1.8,
                      marginBottom: '25px',
                      fontStyle: 'italic'
                    }}>
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: `linear-gradient(135deg, ${testimonial.color}30 0%, ${testimonial.color}10 100%)`,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        border: `2px solid ${testimonial.color}40`,
                        boxShadow: `0 4px 20px ${testimonial.color}20`
                      }}>
                        {testimonial.image}
                      </div>
                      <div>
                        <div style={{
                          color: 'white',
                          fontSize: '1rem',
                          fontWeight: 600,
                          marginBottom: '4px'
                        }}>{testimonial.name}</div>
                        <div style={{
                          color: 'rgba(255, 255, 255, 0.5)',
                          fontSize: '0.85rem'
                        }}>{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginTop: '80px',
            padding: '0'
          }}>
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '5.0', label: 'Average Rating' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'white',
                  marginBottom: '8px',
                  lineHeight: 1
                }}>{stat.value}</div>
                <div style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.95rem',
                  fontWeight: 500
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== END TESTIMONIALS SECTION ==================== */}

      <ContactSection />

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
