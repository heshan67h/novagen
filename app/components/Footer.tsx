'use client';

import React from 'react';

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  // Hide footer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer style={{
      background: '#020617',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      paddingTop: '50px',
      paddingBottom: '30px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '400px',
        background: 'radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ width: '93%', maxWidth: '1800px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 1 }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <img src="/images/logo.png" alt="NovaGen Logo" style={{ width: '40px', height: 'auto' }} />
              <span style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em' }}>NovaGen</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '20px' }}>
              Empowering businesses with next-generation software solutions. We build the digital infrastructure of tomorrow, today.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              {[
                { name: 'twitter', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg> },
                { name: 'linkedin', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.6.6 0 00.1.34V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg> },
                { name: 'github', icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02a9.68 9.68 0 012.5-.34c.85.01 1.7.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.17 22 16.42 22 12A10 10 0 0012 2z" /></svg> },
                { name: 'instagram', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg> }
              ].map((social, i) => (
                <a key={i} href="#" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.7)',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = '#020617';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Custom Software Development', 'Mobile App Development', 'AI & Machine Learning', 'Cloud Infrastructure', 'UI/UX Design', 'Enterprise Consulting'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: '0.95rem' }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['About Us', 'Our Team', 'Careers', 'Case Studies', 'Blog', 'Contact Us'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.3s ease', fontSize: '0.95rem' }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <span>Colombo, Sri Lanka</span>
              </li>
              <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📧</span>
                <a href="mailto:novagensoftware@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>novagensoftware@gmail.com</a>
              </li>
              <li style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📞</span>
                <a href="tel:+94725137006" style={{ color: 'inherit', textDecoration: 'none' }}>+94 72 513 7006</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', margin: 0 }}>
            &copy; 2025 NovaGen Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '30px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item, i) => (
              <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s ease' }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
