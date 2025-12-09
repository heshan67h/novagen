'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const linkStyle: React.CSSProperties = {
        padding: '0.35rem 0.8rem',
        borderRadius: 999,
        fontSize: '0.85rem',
        color: 'rgba(209,213,219,0.85)',
        textDecoration: 'none',
        transition: 'all 0.18s ease',
    };

    const activeStyle: React.CSSProperties = {
        color: '#f9fafb',
        background:
            'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.28), transparent 55%), radial-gradient(circle at 100% 100%, rgba(34,197,94,0.24), transparent 55%), rgba(15,23,42,0.95)',
        boxShadow: '0 8px 24px rgba(15,23,42,0.85)',
        border: '1px solid rgba(148,163,184,0.5)',
    };

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const makeProps = (href: string) => ({
        href,
        style: pathname === (href === '/' ? '/' : href) ? { ...linkStyle, ...activeStyle } : linkStyle,
        onClick: closeMenu,
    });

    return (
        <nav className="navbar">
            <div className="nav-container" style={{ padding: '0 2rem', height: '25px', display: 'flex', alignItems: 'center' }}>
                <div className="nav-logo">
                    <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <img src="/images/logo.png" alt="NovaGen Logo" style={{ height: '36px', width: 'auto' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: '5px' }}>
                            <span className="logo-text" style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: '1' }}>NovaGen</span>
                            <span style={{ color: 'rgba(148,163,184,0.85)', fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>Software Solutions</span>
                        </div>
                    </a>
                </div>
                <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item"><a {...makeProps('/')} className="nav-link">Home</a></li>
                    <li className="nav-item"><a {...makeProps('/about')} className="nav-link">About</a></li>
                    <li className="nav-item"><a {...makeProps('/services')} className="nav-link">Services</a></li>
                    <li className="nav-item"><a {...makeProps('/projects')} className="nav-link">Projects</a></li>
                    <li className="nav-item"><a {...makeProps('/blog')} className="nav-link">Blog</a></li>
                    <li className="nav-item"><a {...makeProps('/team')} className="nav-link">Team</a></li>
                    <li className="nav-item"><a {...makeProps('/contact')} className="nav-link">Contact</a></li>
                    <li className="nav-item mobile-signup"><a href="#" className="nav-link btn-signup-mobile">Sign Up</a></li>
                </ul>
                <div className="nav-buttons">
                    <a
                        href="/contact"
                        className="btn btn-primary inline-flex items-center gap-2 px-5 py-2 rounded-xl font-semibold shadow-[0_6px_18px_rgba(10,24,82,0.12)] transition-all duration-250"
                        style={{
                            background: 'linear-gradient(90deg, #0a1852 0%, #2563eb 100%)',
                            color: '#fff',
                            border: 'none',
                            fontSize: '1rem',
                            letterSpacing: '0.1px',
                            textDecoration: 'none'
                        }}
                    >
                        Get Started
                    </a>
                </div>
                <div className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
