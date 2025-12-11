'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Smart Learning Platform',
        category: 'Education',
        description: 'Comprehensive LMS platform for online exams, payments, and hybrid education management.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
        tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        stats: { users: '50K+', uptime: '99.9%' },
        gradient: 'radial-gradient(circle at top left, rgba(56,189,248,0.14), transparent 55%)',
        border: 'rgba(56,189,248,0.2)',
        accentColor: '#38bdf8'
    },
    {
        id: 2,
        title: 'Fintech Dashboard',
        category: 'Finance',
        description: 'Real-time analytics for wealth managers with portfolio monitoring and compliance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        tech: ['Next.js', 'Python', 'Redis', 'K8s'],
        stats: { processed: '$2B+', clients: '150+' },
        gradient: 'radial-gradient(circle at top left, rgba(34,197,94,0.12), transparent 55%)',
        border: 'rgba(34,197,94,0.2)',
        accentColor: '#22c55e'
    },
    {
        id: 3,
        title: 'ElectroMart',
        category: 'E-commerce',
        description: 'Enterprise e-commerce platform with real-time inventory and multi-vendor support.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
        tech: ['Next.js', 'Stripe', 'Redis'],
        stats: { sales: '$2M+', rating: '4.8★' },
        gradient: 'radial-gradient(circle at top left, rgba(129,140,248,0.14), transparent 55%)',
        border: 'rgba(129,140,248,0.2)',
        accentColor: '#818cf8'
    },
    {
        id: 4,
        title: 'FemCare Health',
        category: 'Healthcare',
        description: 'Privacy-first health tracking with AI-powered cycle predictions and wellness insights.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
        tech: ['Flutter', 'TensorFlow', 'Firebase'],
        stats: { downloads: '100K+', rating: '4.9★' },
        gradient: 'radial-gradient(circle at top left, rgba(236,72,153,0.12), transparent 55%)',
        border: 'rgba(236,72,153,0.2)',
        accentColor: '#ec4899'
    },
    {
        id: 5,
        title: 'SmartHire AI',
        category: 'AI / SaaS',
        description: 'AI-powered recruitment with automated resume parsing and bias-free workflows.',
        image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=800&q=80',
        tech: ['Python', 'FastAPI', 'GPT-4'],
        stats: { saved: '85%', companies: '200+' },
        gradient: 'radial-gradient(circle at top left, rgba(168,85,247,0.14), transparent 55%)',
        border: 'rgba(168,85,247,0.2)',
        accentColor: '#a855f7'
    },
    {
        id: 6,
        title: 'Cloud Migration Suite',
        category: 'Cloud / DevOps',
        description: 'Seamless migration of legacy systems to modern cloud infrastructure with zero downtime.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        tech: ['AWS', 'Terraform', 'Docker'],
        stats: { migrated: '100+', savings: '40%' },
        gradient: 'radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 55%)',
        border: 'rgba(56,189,248,0.2)',
        accentColor: '#38bdf8'
    },
    {
        id: 7,
        title: 'SecureVault Pro',
        category: 'Cybersecurity',
        description: 'Enterprise password management with zero-knowledge encryption and biometric authentication.',
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
        tech: ['Rust', 'WebAssembly', 'AES-256'],
        stats: { encrypted: '10M+', breaches: '0' },
        gradient: 'radial-gradient(circle at top left, rgba(239,68,68,0.12), transparent 55%)',
        border: 'rgba(239,68,68,0.2)',
        accentColor: '#ef4444'
    },
    {
        id: 8,
        title: 'GreenEnergy Analytics',
        category: 'Sustainability',
        description: 'Real-time monitoring and optimization platform for renewable energy infrastructure.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
        tech: ['IoT', 'GraphQL', 'TimeSeries'],
        stats: { sensors: '5000+', saved: '2GWh' },
        gradient: 'radial-gradient(circle at top left, rgba(34,197,94,0.14), transparent 55%)',
        border: 'rgba(34,197,94,0.2)',
        accentColor: '#22c55e'
    }
];

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            style={{
                position: 'relative',
                padding: '100px 0 120px 0',
                overflow: 'hidden'
            }}
        >

            <div className="home-projects-container" style={{
                width: '93%',
                maxWidth: '1800px',
                margin: '0 auto',
                padding: '0 2rem',
                position: 'relative',
                zIndex: 1
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            borderRadius: '100px',
                            background: 'linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(168,85,247,0.1) 100%)',
                            border: '1px solid rgba(56,189,248,0.3)',
                            marginBottom: '24px',
                            boxShadow: '0 0 20px rgba(56,189,248,0.2)'
                        }}>
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
                                boxShadow: '0 0 12px rgba(56,189,248,0.8)',
                            }} />
                            <span style={{
                                background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                            }}>Featured Projects</span>
                        </div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            color: 'white',
                            marginBottom: '24px',
                            letterSpacing: '-0.02em'
                        }}>
                            FEATURED PROJECTS
                        </h2>
                        <p style={{
                            color: 'rgba(148,163,184,0.9)',
                            fontSize: '1.15rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            lineHeight: 1.8,
                        }}>
                            Transforming visionary ideas into production-ready solutions with cutting-edge technology and design excellence.
                        </p>
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="home-projects-card-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '24px',
                    maxWidth: '1400px',
                    margin: '0 auto',
                }}>
                    {projects.map((project, index) => {
                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                whileHover={{
                                    scale: 1.03,
                                    transition: { duration: 0.2 }
                                }}
                                style={{
                                    width: '100%',
                                    height: '480px',
                                    cursor: 'pointer',
                                }}
                            >
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '24px',
                                    // About page card style
                                    background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                                    border: '1px solid rgba(148,163,184,0.5)',
                                    boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    backdropFilter: 'blur(20px)',
                                }}>
                                    {/* Image */}
                                    <div style={{
                                        width: '100%',
                                        height: '200px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderBottom: '1px solid rgba(148,163,184,0.2)',
                                    }}>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'brightness(0.9) saturate(0.8)', // Slightly desaturated for professional look
                                            transition: 'transform 0.5s ease',
                                        }} className="project-image-hover" />

                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: `linear-gradient(to bottom, transparent 0%, rgba(15,23,42,0.8) 100%)`,
                                        }} />

                                        {/* Category badge - Professional style */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '16px',
                                            left: '16px',
                                            padding: '6px 14px',
                                            borderRadius: '100px',
                                            background: 'rgba(15,23,42,0.95)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(148,163,184,0.3)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                        }}>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                color: '#e2e8f0', // Slate-200
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                            }}>{project.category}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '24px' }}>
                                        <h3 style={{
                                            fontSize: '1.4rem',
                                            fontWeight: 700,
                                            color: 'white',
                                            marginBottom: '10px',
                                            lineHeight: 1.3,
                                            letterSpacing: '-0.01em',
                                        }}>{project.title}</h3>

                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: 'rgba(148,163,184,0.9)', // Matching body text color
                                            lineHeight: 1.6,
                                            marginBottom: '20px',
                                        }}>{project.description}</p>

                                        {/* Tech stack */}
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                            marginBottom: '24px',
                                        }}>
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        fontSize: '0.7rem',
                                                        padding: '4px 10px',
                                                        borderRadius: '6px',
                                                        background: 'rgba(56,189,248,0.1)', // Subtle blue tint
                                                        color: '#93c5fd', // Blue-300
                                                        border: '1px solid rgba(56,189,248,0.15)',
                                                        fontWeight: 500,
                                                    }}
                                                >{tech}</span>
                                            ))}
                                        </div>

                                        {/* Stats - Uniform coloring */}
                                        <div style={{
                                            display: 'flex',
                                            gap: '24px',
                                            paddingTop: '16px',
                                            borderTop: '1px solid rgba(148,163,184,0.2)',
                                        }}>
                                            {Object.entries(project.stats).map(([key, value], i) => (
                                                <div key={i}>
                                                    <div style={{
                                                        fontSize: '1.05rem',
                                                        fontWeight: 700,
                                                        color: 'white',
                                                        marginBottom: '2px',
                                                    }}>{value}</div>
                                                    <div style={{
                                                        fontSize: '0.65rem',
                                                        color: 'rgba(148,163,184,0.7)',
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.5px',
                                                        fontWeight: 600,
                                                    }}>{key}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
