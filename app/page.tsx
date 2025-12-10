'use client';

import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';
import SocialBar from '@/components/SocialBar';
import HorizontalProjectsSection from '@/components/HorizontalProjectsSection';

export default function Home(): JSX.Element {
  useEffect(() => {
    // Type-safe guards for SSR
    if (typeof window === 'undefined') return;

    // ==================== TYPING ANIMATIONS ====================
    const titleElement = document.getElementById('typing-text') as HTMLElement | null;
    const codeElement = document.getElementById('typing-code') as HTMLElement | null;

    if (titleElement) {
      const titles = [
        'AI-Powered Digital Solutions',
        'Next-Level Software Solutions',
        'Enterprise-Grade Web Platforms',
      ];
      let titleIndex = 0;
      let charIndex = 0;

      const typeTitle = (): void => {
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

      const fullCode = codeLines.join('\n');
      let charIndex = 0;

      const typeCode = (): void => {
        if (charIndex <= fullCode.length) {
          codeElement.innerHTML = fullCode.slice(0, charIndex);
          charIndex++;
          let speed = 15;
          speed += Math.random() * 10 - 5;
          setTimeout(typeCode, Math.max(speed, 10));
        }
      };

      setTimeout(typeCode, 300);
    }

    // ==================== SMOOTH SCROLLING FOR ANCHORS ====================
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
      const anchorElement = anchor as HTMLAnchorElement;
      anchorElement.addEventListener('click', function (e) {
        const targetId = anchorElement.getAttribute('href');

        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          const targetSection = document.querySelector(targetId) as HTMLElement | null;

          if (targetSection) {
            targetSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        }
      });
    });

    // ==================== NAVBAR HIDE ON SCROLL ====================
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar') as HTMLElement | null;

    const handleScroll = (): void => {
      const currentScroll = window.pageYOffset;

      if (navbar) {
        if (currentScroll > lastScroll && currentScroll > 100) {
          navbar.style.transform = 'translateY(-100%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    // ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.service-card').forEach(card => {
      const cardElement = card as HTMLElement;
      cardElement.style.opacity = '0';
      cardElement.style.transform = 'translateY(50px)';
      cardElement.style.transition = 'all 0.6s ease';
      observer.observe(cardElement);
    });

    // ==================== AVATAR HOVER EFFECTS ====================
    document.querySelectorAll('.avatar').forEach(avatar => {
      const avatarElement = avatar as HTMLElement;

      avatarElement.addEventListener('mouseenter', () => {
        avatarElement.style.boxShadow = '0 8px 30px rgba(0, 212, 255, 0.6)';
      });

      avatarElement.addEventListener('mouseleave', () => {
        avatarElement.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
      });
    });

    // ==================== SERVICE CARD PARTICLE EFFECT ====================
    document.querySelectorAll('.service-card').forEach(card => {
      const cardElement = card as HTMLElement;

      cardElement.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = cardElement.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;

        cardElement.style.setProperty('--mouse-x', `${x}px`);
        cardElement.style.setProperty('--mouse-y', `${y}px`);
      });
    });

    // ==================== SIGNUP BUTTON ====================
    const signupButton = document.querySelector('.btn-signup') as HTMLButtonElement | null;
    if (signupButton) {
      signupButton.addEventListener('click', () => {
        alert('Sign up functionality coming soon!');
      });
    }

    // ==================== GRADIENT ANIMATION ====================
    const sectionTitle = document.querySelector('.section-title .highlight') as HTMLElement | null;
    if (sectionTitle) {
      let hue = 0;
      setInterval(() => {
        hue = (hue + 1) % 360;
        sectionTitle.style.filter = `hue-rotate(${hue}deg)`;
      }, 50);
    }

    // ==================== MOBILE MENU ====================
    const mobileMenuToggle = document.getElementById('mobile-menu') as HTMLElement | null;
    const navMenu = document.querySelector('.nav-menu') as HTMLElement | null;

    if (mobileMenuToggle && navMenu) {
      const toggleMenu = (): void => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
      };

      mobileMenuToggle.addEventListener('click', toggleMenu);

      // Close menu when clicking on a link
      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenuToggle.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      const handleOutsideClick = (e: MouseEvent): void => {
        const target = e.target as Node | null;
        if (
          target &&
          !mobileMenuToggle.contains(target) &&
          !navMenu.contains(target)
        ) {
          mobileMenuToggle.classList.remove('active');
          navMenu.classList.remove('active');
        }
      };

      document.addEventListener('click', handleOutsideClick);
    }

    // ==================== FAQ ACCORDION ====================
    document.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question') as HTMLElement | null;
      if (!question) return;

      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(faq => {
          faq.classList.remove('active');
        });

        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    // ==================== CONTACT FORM ====================
    const contactForm = document.querySelector('.contact-form') as HTMLFormElement | null;
    if (contactForm) {
      contactForm.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon!');
        contactForm.reset();
      });
    }

    // ==================== PARALLAX EFFECT ====================
    const handleParallax = (): void => {
      if (window.innerWidth > 768) {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-content') as HTMLElement | null;
        if (hero) {
          hero.style.transform = `translateY(${scrolled * 0.5}px)`;
          hero.style.opacity = String(1 - scrolled / 500);
        }
      }
    };

    window.addEventListener('scroll', handleParallax);

    // ==================== REVEAL SECTIONS ====================
    const revealSections = document.querySelectorAll(
      '.projects, .technical, .process, .pricing, .testimonials, .faq, .contact'
    );

    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    revealSections.forEach(section => {
      const sectionElement = section as HTMLElement;
      sectionElement.style.opacity = '0';
      sectionElement.style.transform = 'translateY(30px)';
      sectionElement.style.transition = 'all 0.8s ease';
      revealObserver.observe(sectionElement);
    });

    // ==================== PROJECT IMAGE GRADIENTS ====================
    const projectImages = document.querySelectorAll('.project-image');
    const gradients = [
      'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
      'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    ];

    projectImages.forEach((img, index) => {
      const imgElement = img as HTMLElement;
      imgElement.style.background = gradients[index % gradients.length];
    });

    // ==================== PROCESS STEPS HOVER ====================
    document.querySelectorAll('.process-step').forEach(step => {
      const stepElement = step as HTMLElement;

      stepElement.addEventListener('mouseenter', () => {
        stepElement.style.transform = 'translateX(10px)';
      });

      stepElement.addEventListener('mouseleave', () => {
        stepElement.style.transform = 'translateX(0)';
      });
    });

    // ==================== PRICING BUTTONS ====================
    document.querySelectorAll('.btn-pricing').forEach(btn => {
      btn.addEventListener('click', (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        const card = target.closest('.pricing-card') as HTMLElement | null;
        if (!card) return;
        const titleElement = card.querySelector('h4') as HTMLElement | null;
        if (!titleElement) return;
        const plan = titleElement.textContent;
        alert(`You selected the ${plan} plan. We'll contact you soon!`);
      });
    });

    // ==================== CLEANUP ====================
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);


  return (
    <main style={{ background: 'radial-gradient(circle at top, #020617 0%, #020617 45%, #000 100%)', position: 'relative' }}>
      {/* Global Gradient Overlay (Matches About Page) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.14) 0, transparent 45%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.16) 0, transparent 50%)',
          opacity: 0.9,
          zIndex: 1,
        }}
      />
      {/* Navigation - Exact SoftGen Structure */}
      <nav className="navbar">
        <div className="nav-container" style={{ padding: '0 2rem', height: '25px', display: 'flex', alignItems: 'center' }}>
          <div className="nav-logo">
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <img src="/images/logo.png" alt="NovaGen Logo" style={{ height: '36px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                <span className="logo-text" style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>NovaGen</span>
                <span style={{ color: 'rgba(148,163,184,0.85)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Software Solutions</span>
              </div>
            </a>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="/services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="/projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="/blog" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="/team" className="nav-link">Team</a></li>
            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
            <li className="nav-item mobile-signup"><a href="#" className="nav-link btn-signup-mobile">Sign Up</a></li>
          </ul>
          <div className="nav-buttons">
            <a
              href="#contact"
              className="btn btn-primary inline-flex items-center gap-2 px-5 py-2 rounded-xl font-semibold shadow-[0_6px_18px_rgba(10,24,82,0.12)] transition-all duration-250"
              style={{
                background: 'linear-gradient(90deg, #0a1852 0%, #2563eb 100%)',
                color: '#fff',
                border: 'none',
                fontSize: '1rem',
                letterSpacing: '0.1px',
              }}
            >
              Get Started
            </a>
          </div>
          <div className="nav-toggle" id="mobile-menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <SocialBar />


      {/* Hero Section - Exact SoftGen Structure with Dark Theme */}
      <section id="home" className="hero relative overflow-hidden flex items-center" style={{ minHeight: 'calc(100vh + 80px)', paddingTop: '100px' }}>
        {/* Video Background - Exact SoftGen-Copy */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.35)', opacity: 1 }}
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
                  fontSize: '3.5rem',
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

              <p className="hero-description text-[rgba(148,163,184,0.95)] mb-10" style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '90%' }}>
                We craft cutting-edge software solutions that transform businesses and drive innovation.
                From concept to deployment, we deliver excellence in every line of code.
              </p>

              <div className="hero-buttons flex items-center gap-3 flex-wrap">
                <a
                  href="#contact"
                  className="btn btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-250"
                  style={{
                    fontSize: '1.05rem',
                    letterSpacing: '0.2px',
                    background: 'linear-gradient(90deg, #0a1852 0%, #2563eb 100%)',
                    color: '#fff',
                    border: 'none',
                    boxShadow: '0 10px 30px rgba(10,24,82,0.18)',
                  }}
                >
                  Get Started
                </a>
                <a
                  href="#projects"
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
      </section>

      <section id="services" className="services" style={{
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
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
                background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%)',
                border: '1px solid rgba(148,163,184,0.3)',
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
              <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '0.9rem', lineHeight: 1.6 }}>High-performance mobile apps for iOS and Android.</p>
            </div>

            {/* Web App Card */}
            <div style={{
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
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
                background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%)',
                border: '1px solid rgba(148,163,184,0.3)',
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
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
                background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%)',
                border: '1px solid rgba(148,163,184,0.3)',
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
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
                background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%)',
                border: '1px solid rgba(148,163,184,0.3)',
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
        padding: '60px 0',
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
            fontSize: '2.5rem',
            fontWeight: 800,
            color: 'white',
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            WHY CHOOSE US?
          </h2>

          {/* Description */}
          <p style={{
            color: 'rgba(148,163,184,0.95)',
            fontSize: '1.1rem',
            lineHeight: 1.8,
            maxWidth: '700px',
            margin: '0 auto 60px auto'
          }}>
            We aren&apos;t a massive agency where you get lost in the crowd. We are a focused team of
            creative engineers giving your project 100% attention.
          </p>

          {/* Team Section Title */}
          <div id="team" style={{ paddingTop: '60px', marginTop: '-60px' }}></div>
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
              <img src="/images/teamimage/2_heshan_x.png" alt="Heshan Sathyanga" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              <img src="/images/teamimage/1_shehan_priyadarshana.jpg" alt="Shehan Priyadarshana" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              <img src="/images/teamimage/dewaka.jpeg" alt="Dewaka" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              <img src="/images/teamimage/rumitha.jpeg" alt="Rumitha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== END WHY CHOOSE US ==================== */}

      {/* ==================== FEATURED PROJECTS SECTION ==================== */}
      <HorizontalProjectsSection />

      {/* ==================== PROCESS / HOW WE WORK SECTION ==================== */}
      <section className="process-section" style={{
        position: 'relative',
        padding: '60px 0',
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
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '5%',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, rgba(30, 41, 59, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(100px)'
          }}></div>
        </div>

        <div className="process-content-wrapper" style={{ width: '95%', maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.25)', borderRadius: '100px', padding: '8px 20px', marginBottom: '28px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <span style={{ color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Our Process</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.03em',
              lineHeight: 1.1
            }}>
              How We Build Excellence
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
            <div className="process-vertical-line" style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '3px',
              background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 50%, #38bdf8 100%)',
              transform: 'translateX(-50%)',
              opacity: 0.5,
              borderRadius: '2px'
            }}></div>

            {/* Step 1 - Discovery */}
            <div className="process-step" style={{ display: 'flex', alignItems: 'stretch', marginBottom: '0px', position: 'relative' }}>
              {/* Left Content */}
              <div className="process-content-left" style={{ flex: 1, paddingRight: '40px', textAlign: 'right', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Week 1-2</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>Discovery & Strategy</h3>
                <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  We begin with an in-depth analysis of your business objectives, target audience demographics, and technical requirements. Our team conducts comprehensive stakeholder interviews, competitive analysis, and market research to understand your unique position.
                </p>
                <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  We map out the complete project scope, define key milestones, identify potential risks, and create a detailed roadmap with clear deliverables and timelines.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', flexWrap: 'wrap' }} className="process-tags">
                  {['Requirements Analysis', 'User Research', 'Tech Stack Planning', 'Competitive Analysis', 'Risk Assessment'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(226,232,240,0.9)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(56, 189, 248, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Center Circle */}
              <div className="process-circle" style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #38bdf8, #2563eb)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(56, 189, 248, 0.5), 0 0 100px rgba(56, 189, 248, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(30, 41, 59, 0.8)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>01</span>
              </div>

              {/* Right - Stats */}
              <div className="process-stats mobile-hidden" style={{ flex: 1, paddingLeft: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>50+</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Projects Delivered</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>100%</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Design */}
            <div className="process-step" style={{ display: 'flex', alignItems: 'stretch', marginBottom: '0px', position: 'relative' }}>
              {/* Left - Stats */}
              <div className="process-stats mobile-hidden" style={{ flex: 1, paddingRight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>99.9%</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Uptime Guaranteed</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>15+</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Expert Engineers</div>
                  </div>
                </div>
              </div>

              {/* Center Circle */}
              <div className="process-circle" style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(37, 99, 235, 0.5), 0 0 100px rgba(37, 99, 235, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(30, 41, 59, 0.8)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>02</span>
              </div>

              {/* Right Content */}
              <div className="process-content-right" style={{ flex: 1, paddingLeft: '40px', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Week 2-4</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>UI/UX Design</h3>
                <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  Our design team crafts intuitive, pixel-perfect interfaces that not only look stunning but convert. We start with user journey mapping and information architecture, then move to wireframes and finally high-fidelity prototypes.
                </p>
                <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every design decision is backed by UX research and usability testing. We create comprehensive design systems that ensure consistency across all touchpoints and make future updates seamless.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} className="process-tags">
                  {['User Journey Mapping', 'Wireframes', 'UI Design', 'Interactive Prototypes', 'Design System', 'Usability Testing'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(226,232,240,0.9)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(56, 189, 248, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 - Development */}
            <div className="process-step" style={{ display: 'flex', alignItems: 'stretch', marginBottom: '0px', position: 'relative' }}>
              {/* Left Content */}
              <div className="process-content-left" style={{ flex: 1, paddingRight: '40px', textAlign: 'right', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(129, 140, 248, 0.15)', border: '1px solid rgba(129, 140, 248, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#818cf8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Week 4-10</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>Development & Engineering</h3>
                <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  Our engineers build clean, scalable, and maintainable code using cutting-edge technologies and industry best practices. We follow Agile methodology with 2-week sprints, daily standups, and weekly demo sessions to keep you in the loop.
                </p>
                <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Every feature undergoes rigorous code review, automated testing, and security audits. We implement CI/CD pipelines for continuous integration and seamless deployments. Performance optimization is built into every stage.
                </p>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', flexWrap: 'wrap' }} className="process-tags">
                  {['Frontend Development', 'Backend APIs', 'Database Design', 'Unit Testing', 'Code Review', 'CI/CD Pipeline', 'Security Audits'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(226,232,240,0.9)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(129, 140, 248, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(129, 140, 248, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Center Circle */}
              <div className="process-circle" style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(29, 78, 216, 0.5), 0 0 100px rgba(29, 78, 216, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(30, 41, 59, 0.8)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>03</span>
              </div>

              {/* Right - Stats */}
              <div className="mobile-hidden" style={{ flex: 1, paddingLeft: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>&lt;2h</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Response Time</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>24/7</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Support Available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 - Launch */}
            <div className="process-step" style={{ display: 'flex', alignItems: 'stretch', position: 'relative' }}>
              {/* Left - Stats */}
              <div className="process-stats mobile-hidden" style={{ flex: 1, paddingRight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '200px' }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '40px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>Zero</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Downtime Deployments</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>5★</div>
                    <div style={{ color: 'rgba(148,163,184,0.7)', fontSize: '0.9rem', fontWeight: 500, marginTop: '4px' }}>Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Center Circle */}
              <div className="process-circle" style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #1e40af, #1e3a8a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(30, 58, 138, 0.5), 0 0 100px rgba(30, 58, 138, 0.2)',
                position: 'relative',
                zIndex: 2,
                flexShrink: 0,
                border: '3px solid rgba(30, 41, 59, 0.8)'
              }}>
                <span style={{ color: 'white', fontSize: '1.6rem', fontWeight: 800 }}>04</span>
              </div>

              {/* Right Content */}
              <div className="process-content-right" style={{ flex: 1, paddingLeft: '40px', paddingTop: '0px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '6px', padding: '6px 14px', marginBottom: '14px' }}>
                  <span style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ongoing Partnership</span>
                </div>
                <h3 style={{ color: 'white', fontSize: '1.85rem', fontWeight: 700, marginBottom: '12px' }}>Launch & Continuous Support</h3>
                <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '1.05rem', lineHeight: 1.75, marginBottom: '18px' }}>
                  We execute seamless deployments with zero-downtime strategies, comprehensive monitoring, and instant rollback capabilities. Your launch is backed by our 24/7 support team ready to handle any issues.
                </p>
                <p style={{ color: 'rgba(148,163,184,0.8)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                  Post-launch, we provide ongoing maintenance, performance optimization, security patches, and feature enhancements. We monitor application health, track user analytics, and proactively identify opportunities for improvement.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }} className="process-tags">
                  {['Zero-Downtime Deploy', 'Real-time Monitoring', '24/7 Support', 'Performance Analytics', 'Security Updates', 'Feature Enhancements'].map((item, i) => (
                    <span key={i} style={{ color: 'rgba(226,232,240,0.9)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(56, 189, 248, 0.08)', padding: '6px 12px', borderRadius: '20px', border: '1px solid rgba(56, 189, 248, 0.15)' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
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
        padding: '60px 0',
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
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              Technologies We Master
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.8)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(15,23,42,0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)';
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.8)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(15,23,42,0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)';
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'pointer',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.8)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(15,23,42,0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)';
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.8)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(15,23,42,0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)';
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.8)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(15,23,42,0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)';
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
              background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
              border: '1px solid rgba(148,163,184,0.5)',
              borderRadius: '24px',
              padding: '28px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.8)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(15,23,42,0.95)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)';
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
          <div className="mobile-hidden" style={{
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
        padding: '60px 0',
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
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '20px',
              lineHeight: 1.2
            }}>
              What Our Clients Say
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
                    background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                    border: '1px solid rgba(148,163,184,0.5)',
                    borderRadius: '24px',
                    padding: '30px',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    flexShrink: 0,
                    boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = 'rgba(148,163,184,0.8)';
                      e.currentTarget.style.boxShadow = '0 25px 60px rgba(15,23,42,0.95)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                      e.currentTarget.style.boxShadow = '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)';
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
          <div className="mobile-hidden" style={{
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


    </main>
  );
}
