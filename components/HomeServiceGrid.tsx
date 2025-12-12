'use client';

import React from 'react';

const DEFAULT_SERVICES = [
    {
        id: 101,
        title: 'Mobile Application Development',
        description: 'High-performance mobile apps for iOS and Android.',
        icon: '📱',
        isDefault: true,
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <line x1="12" y1="18" x2="12" y2="18" />
            </svg>
        )
    },
    {
        id: 102,
        title: 'Web Application Development',
        description: 'Robust, scalable web applications for complex workflows.',
        icon: '💻',
        isDefault: true,
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
        )
    },
    {
        id: 103,
        title: 'Website Development',
        description: 'Modern, SEO-friendly websites that convert visitors.',
        icon: '🌐',
        isDefault: true,
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
        )
    },
    {
        id: 104,
        title: 'UI/UX Design',
        description: 'Intuitive UI/UX that makes every interaction feel effortless.',
        icon: '🎨',
        isDefault: true,
        svg: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        )
    }
];

import { Smartphone, Laptop, Globe, Palette, Code, Layers, Zap } from 'lucide-react';

// Icon mapping
const ICON_MAP: Record<string, any> = {
    'Smartphone': Smartphone,
    'Laptop': Laptop,
    'Globe': Globe,
    'Palette': Palette,
    'Code': Code,
    'Layers': Layers,
    'Zap': Zap
};

export default function HomeServiceGrid({ services }: { services?: any[] }) {
    const displayServices = (services && services.length > 0) ? services : DEFAULT_SERVICES;

    return (
        <div className="home-services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
        }}>
            {displayServices.map((service: any) => {
                const IconComponent = ICON_MAP[service.icon];

                return (
                    <div
                        key={service.id}
                        style={{
                            background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                            border: '1px solid rgba(148,163,184,0.5)',
                            borderRadius: '24px',
                            boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                            padding: '28px 24px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            position: 'relative',
                            zIndex: 5
                        }}
                        className="service-card-hover"
                    >
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
                            {/* Render Dynamic Icon if available, else Default SVG, else Fallback Icon */}
                            {IconComponent ? (
                                <IconComponent size={24} color="white" />
                            ) : (
                                service.isDefault && service.svg ? service.svg : <Code size={24} color="white" />
                            )}
                        </div>
                        <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>{service.title}</h3>
                        <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '0.9rem', lineHeight: 1.6 }}>{service.description}</p>
                    </div>
                );
            })}
        </div>
    );
}
