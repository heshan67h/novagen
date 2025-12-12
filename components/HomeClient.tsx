'use client';

import { useEffect } from 'react';
import ContactSection from '@/components/ContactSection';
import SocialBar from '@/components/SocialBar';
import HorizontalProjectsSection from '@/components/HorizontalProjectsSection';
import TrustedBy from '@/components/TrustedBy';
import SuccessStats from '@/components/SuccessStats';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import HomeServiceGrid from '@/components/HomeServiceGrid';
import TechnologySection from '@/components/TechnologySection';

interface HomeClientProps {
  heroData?: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
  } | null;
  services?: any[];
  projects?: any[];
  testimonials?: any[];
  processSteps?: any[];
}

export default function HomeClient({
  heroData,
  services,
  projects,
  testimonials,
  processSteps
}: HomeClientProps): JSX.Element {
  useEffect(() => {
    // Type-safe guards for SSR
    if (typeof window === 'undefined') return;

    // ==================== TYPING ANIMATIONS ====================
    const titleElement = document.getElementById('typing-text') as HTMLElement | null;
    const codeElement = document.getElementById('typing-code') as HTMLElement | null;

    if (titleElement) {
      const titles = heroData?.title
        ? [heroData.title]
        : [
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
  }, [heroData]);


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
        <div className="nav-container home-nav-container" style={{ padding: '0 2rem', height: '25px', display: 'flex', alignItems: 'center' }}>
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
          style={{ filter: 'brightness(0.35)', opacity: 0.6 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark theme background overlay on video */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundColor: 'rgba(10, 15, 35, 0.5)' }}></div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f23]/40 to-[#141a2e]/30 z-[2] pointer-events-none"></div>

        {/* Hero Content Container - Aligned with navbar */}
        <div className="hero-container home-hero-container relative z-[3]" style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem', boxSizing: 'border-box' }}>
          {/* Hero Split Layout - CSS GRID (1fr 1fr) with gap */}
          <div
            className="hero-split-layout home-split-layout w-full items-center"
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
                id="mobile-hero-title-force"
                className="hero-title home-hero-title text-white leading-tight mb-8"
                style={{
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
                {heroData?.subtitle || 'Premier Software Development Company'}
              </p>

              <p className="hero-description text-[rgba(148,163,184,0.95)] mb-10" style={{ fontSize: '1.25rem', lineHeight: 1.8, maxWidth: '90%' }}>
                {heroData?.description || 'We craft cutting-edge software solutions that transform businesses and drive innovation. From concept to deployment, we deliver excellence in every line of code.'}
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
                  {heroData?.ctaText || 'Get Started'}
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

      {/* ==================== TRUSTED BY SECTION ==================== */}


      <section id="services" className="services" style={{
        padding: '0 0 0px 0',
        position: 'relative',
        marginTop: '0'
      }}>
        <div className="home-services-container" style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem' }}>
          <HomeServiceGrid services={services} />
        </div>
      </section>

      {/* ==================== SUCCESS STATS SECTION ==================== */}
      <SuccessStats />

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

        <div className="home-about-container" style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
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
      <HorizontalProjectsSection projects={projects} />
      <TrustedBy />

      {/* ==================== TECHNOLOGY SECTION ==================== */}
      <TechnologySection />

      {/* ==================== PROCESS SECTION ==================== */}
      <ProcessSection steps={processSteps} />
      <Testimonials testimonials={testimonials} />

      {/* ==================== CONTACT SECTION ==================== */}
      <ContactSection />

      {/* ==================== FOOTER ==================== */}
      <footer className="footer" style={{ background: '#020617', borderTop: '1px solid rgba(30,41,59,0.5)', padding: '80px 0 40px 0' }}>
        <div className="footer-container" style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '60px' }}>
            {/* Brand */}
            <div className="footer-brand">
              <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '24px' }}>
                <img src="/images/logo.png" alt="NovaGen Logo" style={{ height: '40px', width: 'auto' }} />
                <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>NovaGen</span>
              </a>
              <p style={{ color: 'rgba(148,163,184,0.8)', lineHeight: 1.6, marginBottom: '24px' }}>
                Empowering businesses with next-generation software solutions. We build the future of digital innovation.
              </p>
              <div className="footer-social" style={{ display: 'flex', gap: '16px' }}>
                {/* Social icons would go here */}
              </div>
            </div>

            {/* Links */}
            <div className="footer-links">
              <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['About', 'Services', 'Projects', 'Blog', 'Careers'].map((item) => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <a href={`/${item.toLowerCase()}`} style={{ color: 'rgba(148,163,184,0.8)', textDecoration: 'none', transition: 'color 0.2s ease' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-links">
              <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI Integration', 'DevOps'].map((item) => (
                  <li key={item} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ color: 'rgba(148,163,184,0.8)', textDecoration: 'none', transition: 'color 0.2s ease' }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ color: 'rgba(148,163,184,0.8)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  contact@novage.lk
                </li>
                <li style={{ color: 'rgba(148,163,184,0.8)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  +94 77 123 4567
                </li>
                <li style={{ color: 'rgba(148,163,184,0.8)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Colombo, Sri Lanka
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid rgba(30,41,59,0.5)', paddingTop: '32px', textAlign: 'center', color: 'rgba(148,163,184,0.6)', fontSize: '0.9rem' }}>
            <p>&copy; {new Date().getFullYear()} NovaGen Software Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
