'use client';

import React from 'react';

export default function Footer() {
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
              {['twitter', 'linkedin', 'github', 'instagram'].map((social, i) => (
                <a key={i} href="#" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  {/* Simple icons for demo */}
                  <span style={{ fontSize: '1.1rem' }}>
                    {social === 'twitter' ? '𝕏' : social === 'linkedin' ? 'in' : social === 'github' ? 'git' : 'ig'}
                  </span>
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
