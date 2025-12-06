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

    const makeProps = (href: string) => ({
        href,
        style: pathname === (href === '/' ? '/' : href) ? { ...linkStyle, ...activeStyle } : linkStyle,
    });

    return (
        <nav className="navbar">
            <div className="nav-container" style={{ padding: '0 2rem', height: '25px', display: 'flex', alignItems: 'center' }}>
                <div className="nav-logo">
                    <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <img src="/images/logo.png" alt="NovaGen Logo" style={{ height: '32px', width: 'auto' }} />
                        <span className="logo-text" style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700 }}>NovaGen</span>
                    </a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><a {...makeProps('/')} className="nav-link">Home</a></li>
                    <li className="nav-item"><a {...makeProps('/about')} className="nav-link">About</a></li>
                    <li className="nav-item"><a {...makeProps('/services')} className="nav-link">Services</a></li>
                    <li className="nav-item"><a {...makeProps('/projects')} className="nav-link">Projects</a></li>
                    <li className="nav-item"><a {...makeProps('/team')} className="nav-link">Team</a></li>
                    <li className="nav-item"><a {...makeProps('/contact')} className="nav-link">Contact</a></li>
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
    );
};

export default Navbar;
