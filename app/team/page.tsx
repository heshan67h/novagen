'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaRocket, FaCode, FaServer, FaAws, FaReact, FaNodeJs, FaPython, FaDocker } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiPostgresql, SiKubernetes, SiTerraform, SiGo } from 'react-icons/si';
import { BiWorld, BiTimeFive } from 'react-icons/bi';
import { MdSecurity } from 'react-icons/md';

export default function TeamPage(): JSX.Element {
    const coreTeam = [
        {
            name: 'Heshan Sathyanga',
            role: 'Founder · Product Engineer',
            focus: 'Architecture, product strategy, high‑leverage engineering',
            tags: ['Product-led', 'Full‑stack', 'Delivery'],
            image: '/images/teamimage/2_heshan_x.png',
            experience: '8+',
            socials: { linkedin: '#', github: '#', twitter: '#', website: '#' }
        },
        {
            name: 'Shehan Priyadarshana',
            role: 'Senior Engineer',
            focus: 'APIs, data models, observability, performance tuning',
            tags: ['Node.js', 'Postgres', 'Scalability'],
            image: '/images/teamimage/1_shehan_priyadarshana.jpg',
            experience: '6+',
            socials: { linkedin: '#', github: '#' }
        },
        {
            name: 'Dewaka',
            role: 'Product Designer',
            focus: 'Flows, interface systems, design libraries',
            tags: ['UX flows', 'Design systems', 'Prototyping'],
            image: '/images/teamimage/dewaka.jpeg',
            experience: '5+',
            socials: { linkedin: '#', website: '#' }
        },
        {
            name: 'Rumitha',
            role: 'Frontend Engineer',
            focus: 'Modern frontends, interactions, design implementation',
            tags: ['Next.js', 'Animations', 'Accessibility'],
            image: '/images/teamimage/rumitha.jpeg',
            experience: '4+',
            socials: { linkedin: '#', github: '#' }
        },
    ];

    const waysOfWorking = [
        {
            label: 'One small senior squad',
            copy:
                'You work with a compact team of senior specialists instead of a big rotating bench. Decisions are faster and context is never lost.',
        },
        {
            label: 'Embedded, not external',
            copy:
                'We plug into your tools, rituals, and roadmap so it feels like an extension of your product org—not a vendor on the side.',
        },
        {
            label: 'Outcome over output',
            copy:
                'We measure success by shipped releases, adoption, and stability—not by how many tickets closed or hours logged.',
        },
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                background:
                    'radial-gradient(circle at top, #020617 0%, #020617 50%, #000 100%)',
                color: '#e5e7eb',
            }}
        >
            <Navbar />

            <main
                style={{
                    padding: '120px 0 88px',
                }}
            >
                {/* Ambient gradients */}
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        pointerEvents: 'none',
                        opacity: 0.7,
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            inset: -260,
                            background:
                                'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.12), transparent 55%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.12), transparent 55%), radial-gradient(circle at 50% 100%, rgba(34,197,94,0.10), transparent 55%)',
                        }}
                    />
                </div>

                <div
                    style={{
                        position: 'relative',
                        width: '93%',
                        maxWidth: '1800px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        boxSizing: 'border-box',
                    }}
                >
                    {/* Crumb + badge */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            marginBottom: 32,
                            fontSize: 12,
                            color: 'rgba(148,163,184,0.9)',
                        }}
                    >
                        <span style={{ opacity: 0.7 }}>Home</span>
                        <span style={{ opacity: 0.35 }}>/</span>
                        <span style={{ opacity: 1 }}>Team</span>

                        <span
                            style={{
                                marginLeft: 'auto',
                                padding: '6px 14px',
                                borderRadius: 999,
                                border: '1px solid rgba(148,163,184,0.4)',
                                background:
                                    'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))',
                                letterSpacing: 1,
                                textTransform: 'uppercase',
                                fontSize: 11,
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 6,
                            }}
                        >
                            <span
                                style={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: '999px',
                                    background: '#22c55e',
                                    boxShadow: '0 0 10px rgba(34,197,94,0.9)',
                                }}
                            />
                            Core squad
                        </span>
                    </div>

                    {/* Hero row */}
                    <section
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0, 2.1fr) minmax(0, 1.4fr)',
                            gap: 34,
                            alignItems: 'flex-start',
                            marginBottom: 56,
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    fontSize: 12,
                                    letterSpacing: 2.6,
                                    textTransform: 'uppercase',
                                    color: 'rgba(148,163,184,0.9)',
                                    marginBottom: 14,
                                }}
                            >
                                Meet the operators
                            </p>
                            <h1
                                style={{
                                    fontSize: 'clamp(2.3rem, 3.1vw, 3rem)',
                                    lineHeight: 1.1,
                                    fontWeight: 700,
                                    letterSpacing: '-0.04em',
                                    marginBottom: 18,
                                    color: '#FFFFFF',
                                }}
                            >
                                Small senior team,
                                <br />
                                built for shipping.
                            </h1>
                            <p
                                style={{
                                    maxWidth: 620,
                                    fontSize: 15,
                                    lineHeight: 1.8,
                                    color: '#9ca3af',
                                }}
                            >
                                NovaGen is intentionally small. Everyone on the team has shipped production systems,
                                owned incidents, and worked directly with stakeholders. You get builders who can
                                talk strategy in the morning and merge code by the afternoon.
                            </p>
                        </div>

                        {/* Snapshot card */}
                        <aside
                            style={{
                                borderRadius: 24,
                                padding: 22,
                                border: '1px solid rgba(148,163,184,0.5)',
                                background:
                                    'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(34,197,94,0.18), transparent 55%), rgba(15,23,42,0.96)',
                                boxShadow:
                                    '0 24px 70px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,1)',
                            }}
                        >
                            <header
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: 18,
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            fontSize: 11,
                                            letterSpacing: 2.4,
                                            textTransform: 'uppercase',
                                            color: 'rgba(148,163,184,0.9)',
                                            marginBottom: 6,
                                        }}
                                    >
                                        How we show up
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: 'rgba(226,232,240,0.94)',
                                            maxWidth: 230,
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        Direct access to the people doing the work, clear ownership, and a calm delivery
                                        cadence.
                                    </p>
                                </div>
                                <span
                                    style={{
                                        padding: '4px 10px',
                                        borderRadius: 999,
                                        border: '1px solid rgba(148,163,184,0.5)',
                                        fontSize: 11,
                                        letterSpacing: 1.2,
                                        textTransform: 'uppercase',
                                        color: 'rgba(226,232,240,0.9)',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    No account managers
                                </span>
                            </header>

                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                                    gap: 16,
                                    borderTop: '1px solid rgba(148,163,184,0.4)',
                                    paddingTop: 14,
                                }}
                            >
                                {['5+', '10+', '3 timezones'].map((value, idx) => (
                                    <div key={idx} style={{ textAlign: 'left' }}>
                                        <div
                                            style={{
                                                fontSize: 22,
                                                fontWeight: 700,
                                                color: '#f9fafb',
                                                marginBottom: 2,
                                            }}
                                        >
                                            {value}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 12,
                                                color: 'rgba(148,163,184,0.95)',
                                            }}
                                        >
                                            {idx === 0 && 'Core specialists'}
                                            {idx === 1 && 'Shipped products'}
                                            {idx === 2 && 'Working windows'}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </section>

                    {/* Core team grid */}
                    <section
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: 24,
                            alignItems: 'stretch',
                            marginBottom: 56,
                        }}
                    >
                        {coreTeam.map((member, index) => (
                            <div
                                key={index}
                                className="group"
                                style={{
                                    borderRadius: 20,
                                    padding: 24,
                                    border: '1px solid rgba(55,65,81,0.9)',
                                    background:
                                        'radial-gradient(circle at top left, rgba(56,189,248,0.1), transparent 60%), radial-gradient(circle at bottom right, rgba(34,197,94,0.1), transparent 60%), rgba(15,23,42,0.98)',
                                    boxShadow:
                                        '0 18px 55px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to bottom, transparent 40%, rgba(15,23,42,0.8) 100%)',
                                        zIndex: 1,
                                        pointerEvents: 'none',
                                    }}
                                />

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 16,
                                        marginBottom: 16,
                                        position: 'relative',
                                        zIndex: 2,
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 80,
                                            height: 80,
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            border: '2px solid rgba(148,163,184,0.2)',
                                            flexShrink: 0,
                                        }}
                                    >
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>

                                    <div>
                                        <div
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 700,
                                                color: '#f9fafb',
                                                marginBottom: 4,
                                            }}
                                        >
                                            {member.name}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: 13,
                                                color: '#38bdf8',
                                                letterSpacing: 0.5,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {member.role}
                                        </div>
                                        {/* Experience Badge */}
                                        <div
                                            style={{
                                                marginTop: 6,
                                                display: 'inline-block',
                                                fontSize: 10,
                                                fontWeight: 600,
                                                padding: '2px 8px',
                                                borderRadius: 4,
                                                background: 'rgba(34,197,94,0.15)',
                                                color: '#4ade80',
                                                border: '1px solid rgba(34,197,94,0.2)'
                                            }}
                                        >
                                            {member.experience} Exp.
                                        </div>
                                    </div>
                                </div>

                                <div style={{ position: 'relative', zIndex: 2, flex: 1 }}>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            lineHeight: 1.6,
                                            color: '#cbd5e1',
                                            marginBottom: 16,
                                            minHeight: '46px',
                                        }}
                                    >
                                        {member.focus}
                                    </p>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 8,
                                            marginBottom: 20,
                                        }}
                                    >
                                        {member.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    fontSize: 11,
                                                    padding: '4px 10px',
                                                    borderRadius: 999,
                                                    border: '1px solid rgba(55,65,81,0.8)',
                                                    background: 'rgba(30,41,59,0.6)',
                                                    color: '#94a3b8',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Social Links */}
                                    <div style={{
                                        borderTop: '1px solid rgba(148,163,184,0.15)',
                                        paddingTop: 16,
                                        marginTop: 'auto',
                                        display: 'flex',
                                        gap: 12
                                    }}>
                                        {member.socials.linkedin && (
                                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
                                                <FaLinkedin size={16} />
                                            </a>
                                        )}
                                        {member.socials.github && (
                                            <a href={member.socials.github} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
                                                <FaGithub size={16} />
                                            </a>
                                        )}
                                        {member.socials.twitter && (
                                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
                                                <FaTwitter size={16} />
                                            </a>
                                        )}
                                        {member.socials.website && (
                                            <a href={member.socials.website} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#22c55e'} onMouseOut={(e) => e.currentTarget.style.color = '#94a3b8'}>
                                                <FaGlobe size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* SECTION 1: The Engineering Standard (Values) */}
                    <section style={{ marginBottom: 80 }}>
                        <div style={{ textAlign: 'center', marginBottom: 40 }}>
                            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(148,163,184,0.9)', marginBottom: 8 }}>
                                Our DNA
                            </p>
                            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                                The Engineering Standard
                            </h2>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                            {[
                                {
                                    icon: <FaRocket size={24} color="#38bdf8" />,
                                    title: "Shipping Velocity",
                                    desc: "We don't do month-long sprints. We ship small, test often, and deploy daily to keep feedback loops tight.",
                                    bg: "rgba(56,189,248,0.1)"
                                },
                                {
                                    icon: <FaCode size={24} color="#f472b6" />,
                                    title: "Code as Craft",
                                    desc: "Clean, typed, and self-documenting code. We build systems that your future team will thank us for.",
                                    bg: "rgba(244,114,182,0.1)"
                                },
                                {
                                    icon: <MdSecurity size={24} color="#22c55e" />,
                                    title: "Zero Bloat",
                                    desc: "No middle managers or endless meetings. You talk directly to the engineers building your product.",
                                    bg: "rgba(34,197,94,0.1)"
                                }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: 'rgba(15,23,42,0.6)',
                                    border: '1px solid rgba(55,65,81,0.5)',
                                    borderRadius: 16,
                                    padding: 32,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    gap: 16
                                }}>
                                    <div style={{ width: 48, height: 48, borderRadius: 12, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#f8fafc', marginBottom: 8 }}>{item.title}</h3>
                                        <p style={{ fontSize: 14, lineHeight: 1.6, color: '#94a3b8' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 2: Tech Arsenal (Tech Stack) */}
                    <section style={{ marginBottom: 80 }}>
                        <div style={{ textAlign: 'center', marginBottom: 40 }}>
                            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(148,163,184,0.9)', marginBottom: 8 }}>
                                Built Modern
                            </p>
                            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                                Our Tech Arsenal
                            </h2>
                        </div>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: 24
                        }}>
                            {/* Frontend */}
                            <div style={{ padding: 24, borderRadius: 20, background: 'linear-gradient(145deg, rgba(30,41,59,0.4), rgba(15,23,42,0.6))', border: '1px solid rgba(55,65,81,0.5)' }}>
                                <h3 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: '#94a3b8', marginBottom: 20, borderBottom: '1px solid rgba(55,65,81,0.5)', paddingBottom: 12 }}>Frontend</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', fontSize: 13 }}>
                                        <SiNextdotjs size={16} /> Next.js
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#38bdf8', fontSize: 13 }}>
                                        <FaReact size={16} /> React
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#38bdf8', fontSize: 13 }}>
                                        <SiTailwindcss size={16} /> Tailwind
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#3178c6', fontSize: 13 }}>
                                        <SiTypescript size={16} /> TypeScript
                                    </div>
                                </div>
                            </div>

                            {/* Backend */}
                            <div style={{ padding: 24, borderRadius: 20, background: 'linear-gradient(145deg, rgba(30,41,59,0.4), rgba(15,23,42,0.6))', border: '1px solid rgba(55,65,81,0.5)' }}>
                                <h3 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: '#94a3b8', marginBottom: 20, borderBottom: '1px solid rgba(55,65,81,0.5)', paddingBottom: 12 }}>Backend</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#68a063', fontSize: 13 }}>
                                        <FaNodeJs size={16} /> Node.js
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#00add8', fontSize: 13 }}>
                                        <SiGo size={16} /> Go
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#336791', fontSize: 13 }}>
                                        <SiPostgresql size={16} /> Postgres
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#ffd343', fontSize: 13 }}>
                                        <FaPython size={16} /> Python
                                    </div>
                                </div>
                            </div>

                            {/* Infrastructure */}
                            <div style={{ padding: 24, borderRadius: 20, background: 'linear-gradient(145deg, rgba(30,41,59,0.4), rgba(15,23,42,0.6))', border: '1px solid rgba(55,65,81,0.5)' }}>
                                <h3 style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 1, color: '#94a3b8', marginBottom: 20, borderBottom: '1px solid rgba(55,65,81,0.5)', paddingBottom: 12 }}>Infrastructure</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#FF9900', fontSize: 13 }}>
                                        <FaAws size={16} /> AWS
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#2496ed', fontSize: 13 }}>
                                        <FaDocker size={16} /> Docker
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#326ce5', fontSize: 13 }}>
                                        <SiKubernetes size={16} /> K8s
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 8, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', color: '#7b42bc', fontSize: 13 }}>
                                        <SiTerraform size={16} /> Terraform
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: Global Impact */}
                    <section style={{
                        borderRadius: 24,
                        overflow: 'hidden',
                        position: 'relative',
                        background: 'linear-gradient(to right, #0f172a, #1e293b)',
                        border: '1px solid rgba(55,65,81,0.6)',
                        padding: '40px 24px',
                        marginBottom: 60
                    }}>
                        {/* Background Map Effect */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'radial-gradient(rgba(56,189,248,0.1) 1px, transparent 1px)',
                            backgroundSize: '30px 30px',
                            opacity: 0.3,
                            pointerEvents: 'none'
                        }} />

                        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>
                            <div style={{ maxWidth: 500 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                    <BiWorld size={20} color="#38bdf8" />
                                    <span style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: '#38bdf8', fontWeight: 600 }}>Global Operations</span>
                                </div>
                                <h2 style={{ fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 12 }}>Always On, Everywhere.</h2>
                                <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>We team up with founders across the globe. Our distributed structure ensures 24/7 overlap and continuous shipping, no matter your timezone.</p>
                            </div>

                            <div style={{ display: 'flex', gap: 40, borderLeft: '1px solid rgba(148,163,184,0.2)', paddingLeft: 40 }}>
                                <div>
                                    <div style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>12+</div>
                                    <div style={{ fontSize: 13, color: '#94a3b8' }}>Countries Served</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>100%</div>
                                    <div style={{ fontSize: 13, color: '#94a3b8' }}>Remote Native</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: 36, fontWeight: 700, color: '#fff' }}>24/7</div>
                                    <div style={{ fontSize: 13, color: '#94a3b8' }}>Dev Coverage</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Ways of working / culture */}
                    <div
                        style={{
                            borderRadius: 22,
                            padding: 18,
                            border: '1px solid rgba(55,65,81,1)',
                            background:
                                'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 52%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.18), transparent 60%), radial-gradient(circle at 50% 100%, rgba(34,197,94,0.16), transparent 50%), rgba(15,23,42,0.98)',
                            boxShadow:
                                '0 22px 60px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,1)',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: 14,
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontSize: 11,
                                        letterSpacing: 2,
                                        textTransform: 'uppercase',
                                        color: 'rgba(148,163,184,0.9)',
                                        marginBottom: 4,
                                    }}
                                >
                                    How we work with you
                                </p>
                                <p
                                    style={{
                                        fontSize: 14,
                                        color: 'rgba(226,232,240,0.96)',
                                    }}
                                >
                                    A combination of product, engineering, and design that behaves like an embedded
                                    team rather than an outsourced shop.
                                </p>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    gap: 4,
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: 11,
                                        color: 'rgba(148,163,184,0.9)',
                                    }}
                                >
                                    Slack, Notion, Linear
                                </span>
                                <span
                                    style={{
                                        fontSize: 11,
                                        color: 'rgba(148,163,184,0.9)',
                                    }}
                                >
                                    Weekly demos & async updates
                                </span>
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 10,
                            }}
                        >
                            {waysOfWorking.map((item) => (
                                <div
                                    key={item.label}
                                    style={{
                                        borderRadius: 14,
                                        padding: 12,
                                        border: '1px solid rgba(55,65,81,1)',
                                        background:
                                            'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9))',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: 4,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: 13,
                                                color: '#e5e7eb',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.label}
                                        </span>
                                        <span
                                            style={{
                                                width: 9,
                                                height: 9,
                                                borderRadius: '999px',
                                                background: '#22c55e',
                                                boxShadow: '0 0 12px rgba(34,197,94,0.8)',
                                            }}
                                        />
                                    </div>
                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: 'rgba(148,163,184,0.96)',
                                        }}
                                    >
                                        {item.copy}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* CTA band */}
                    <section
                        style={{
                            borderRadius: 22,
                            padding: 18,
                            marginTop: 8,
                            border: '1px solid rgba(55,65,81,1)',
                            background:
                                'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 100% 0%, rgba(34,197,94,0.18), transparent 55%), rgba(15,23,42,0.98)',
                            boxShadow:
                                '0 22px 60px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 18,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 12,
                            }}
                        >
                            <span
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: '999px',
                                    background:
                                        'conic-gradient(from 160deg, #22c55e, #22c55e 40deg, #38bdf8 120deg, #6366f1 220deg, #22c55e 360deg)',
                                    boxShadow: '0 0 22px rgba(59,130,246,0.75)',
                                }}
                            />
                            <div>
                                <p
                                    style={{
                                        fontSize: 11,
                                        letterSpacing: 2,
                                        textTransform: 'uppercase',
                                        color: 'rgba(148,163,184,0.95)',
                                        marginBottom: 4,
                                    }}
                                >
                                    Work directly with the makers
                                </p>
                                <p
                                    style={{
                                        fontSize: 14,
                                        color: 'rgba(226,232,240,0.96)',
                                    }}
                                >
                                    Share your roadmap, constraints, and timeline—we'll show you how this team
                                    would plug in and what we can ship together.
                                </p>
                            </div>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                            }}
                        >
                            <button
                                style={{
                                    padding: '9px 18px',
                                    borderRadius: 999,
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: '#0b1120',
                                    background:
                                        'linear-gradient(135deg, #22c55e, #38bdf8)',
                                    boxShadow:
                                        '0 12px 30px rgba(56,189,248,0.6), 0 0 0 1px rgba(15,23,42,0.95)',
                                }}
                            >
                                Book a team intro
                            </button>
                            <button
                                style={{
                                    padding: '8px 14px',
                                    borderRadius: 999,
                                    border: '1px solid rgba(148,163,184,0.55)',
                                    cursor: 'pointer',
                                    fontSize: 12,
                                    color: 'rgba(226,232,240,0.95)',
                                    background:
                                        'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9))',
                                }}
                            >
                                Download team snapshot
                            </button>
                        </div>
                    </section>
                </div>
            </main >
        </div >
    );
}
