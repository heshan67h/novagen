'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const gradients = [
    'radial-gradient(circle at top left, rgba(56,189,248,0.14), transparent 55%)',
    'radial-gradient(circle at top left, rgba(34,197,94,0.12), transparent 55%)',
    'radial-gradient(circle at top left, rgba(129,140,248,0.14), transparent 55%)',
    'radial-gradient(circle at top left, rgba(236,72,153,0.12), transparent 55%)',
    'radial-gradient(circle at top left, rgba(168,85,247,0.14), transparent 55%)',
    'radial-gradient(circle at top left, rgba(239,68,68,0.12), transparent 55%)'
];

interface ProjectProperty {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    tags: string; // Comma separated string from DB
    link?: string;
    featured: boolean;
}

interface ProjectsSectionProps {
    projects?: ProjectProperty[];
}

const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: 'Smart Learning Platform',
        description: 'Comprehensive LMS platform for online exams, payments, and hybrid education management.',
        imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2070&auto=format&fit=crop',
        category: 'EdTech',
        tags: 'React, Node.js, AWS, Stripe',
        featured: true
    },
    {
        id: 2,
        title: 'Fintech Dashboard',
        description: 'Real-time analytics for wealth managers with portfolio monitoring and compliance.',
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        category: 'FinTech',
        tags: 'Next.js, Python, Blockchain, AI',
        featured: true
    },
    {
        id: 3,
        title: 'ElectroMart',
        description: 'Enterprise e-commerce platform with real-time inventory and multi-vendor support.',
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
        category: 'E-Commerce',
        tags: 'Vue.js, Django, Redis, PostgreSQL',
        featured: true
    },
    {
        id: 4,
        title: 'FemCare Health',
        description: 'Privacy-first health tracking with AI-powered cycle predictions and wellness insights.',
        imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
        category: 'Healthcare',
        tags: 'Mobile, WebRTC, Cloud, Security',
        featured: true
    },
    {
        id: 5,
        title: 'SmartHire AI',
        description: 'AI-powered recruitment with automated resume parsing and bias-free workflows.',
        imageUrl: 'https://images.unsplash.com/photo-1553877607-4972f7af60db?q=80&w=2070&auto=format&fit=crop',
        category: 'HR Tech',
        tags: 'Python, TensorFlow, React, NLP',
        featured: true
    },
    {
        id: 6,
        title: 'Cloud Migration Suite',
        description: 'Seamless migration of legacy systems to modern cloud infrastructure with zero downtime.',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        category: 'Cloud',
        tags: 'AWS, Kubernetes, Docker, Terraform',
        featured: true
    },
    {
        id: 7,
        title: 'SecureVault Pro',
        description: 'Enterprise password management with zero-knowledge encryption and biometric authentication.',
        imageUrl: 'https://images.unsplash.com/photo-1614064641938-3e81390235e1?q=80&w=2010&auto=format&fit=crop',
        category: 'Cybersecurity',
        tags: 'Rust, WebAssembly, iOS, Android',
        featured: true
    },
    {
        id: 8,
        title: 'GreenEnergy Analytics',
        description: 'Real-time monitoring and optimization platform for renewable energy infrastructure.',
        imageUrl: 'https://images.unsplash.com/photo-1473341304170-891463ee3287?q=80&w=2069&auto=format&fit=crop',
        category: 'CleanTech',
        tags: 'IoT, Grafana, Go, TimeScaleDB',
        featured: true
    }
];

export default function ProjectsSection({ projects = [] }: ProjectsSectionProps) {
    // Fallback to default if no DB projects
    const dataSource = (projects && projects.length > 0) ? projects : DEFAULT_PROJECTS;

    const projectsToDisplay = dataSource.map((p, index) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.imageUrl,
        tech: p.tags ? p.tags.split(',').map(t => t.trim()) : [],
        stats: { view: 'Details', type: 'Project' },
        gradient: gradients[index % gradients.length],
        accentColor: '#38bdf8'
    }));

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
                {/* ... (Header remains same) */}
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
                    {projectsToDisplay.map((project, index) => {
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
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>{project.description}</p>

                                        {/* Tech stack */}
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                            marginBottom: '24px',
                                        }}>
                                            {project.tech.slice(0, 4).map((tech: string, i: number) => (
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
                                            {project.tech.length > 4 && (
                                                <span style={{
                                                    fontSize: '0.7rem',
                                                    padding: '4px 8px',
                                                    color: 'rgba(148,163,184,0.8)',
                                                }}>+{project.tech.length - 4}</span>
                                            )}
                                        </div>

                                        {/* View Details Link */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            marginTop: 'auto',
                                        }}>
                                            <span style={{
                                                fontSize: '0.85rem',
                                                fontWeight: 600,
                                                color: '#38bdf8',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px'
                                            }}>
                                                View Project <ExternalLink size={14} />
                                            </span>
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
