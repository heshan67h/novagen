'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import { FaRocket, FaUsers, FaSearch, FaComments, FaFileAlt, FaPlay, FaShieldAlt, FaClock } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';
import { MdVerified } from 'react-icons/md';

export default function ContactPage(): JSX.Element {
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
                    className="contact-main-container"
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
                        <span style={{ opacity: 1 }}>Contact</span>

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
                            Get in touch
                        </span>
                    </div>

                    {/* Hero + form layout */}
                    <section
                        className="contact-hero-grid"
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1.6fr)',
                            gap: 34,
                            alignItems: 'flex-start',
                        }}
                    >
                        {/* Left copy + meta */}
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
                                Start a project with NovaGen
                            </p>
                            <h1
                                className="contact-hero-title"
                                style={{
                                    fontSize: 'clamp(2.2rem, 3vw, 2.8rem)',
                                    lineHeight: 1.1,
                                    fontWeight: 700,
                                    letterSpacing: '-0.04em',
                                    marginBottom: 18,
                                    color: '#FFFFFF',
                                }}
                            >
                                Share the problem,
                                <br />
                                we'll propose the path.
                            </h1>
                            <p
                                style={{
                                    maxWidth: 600,
                                    fontSize: 15,
                                    lineHeight: 1.8,
                                    color: '#9ca3af',
                                    marginBottom: 20,
                                }}
                            >
                                Tell us where you are today, what you're trying to ship, and the constraints you
                                care about most. We'll respond with a short plan, rough timelines, and how our team
                                would plug in.
                            </p>

                            {/* Contact meta cards */}
                            <div
                                className="contact-meta-grid"
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: 14,
                                    marginTop: 10,
                                }}
                            >
                                <div
                                    style={{
                                        borderRadius: 18,
                                        padding: 14,
                                        border: '1px solid rgba(55,65,81,0.9)',
                                        background:
                                            'radial-gradient(circle at top left, rgba(56,189,248,0.16), transparent 55%), rgba(15,23,42,0.98)',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: 11,
                                            letterSpacing: 2,
                                            textTransform: 'uppercase',
                                            color: 'rgba(148,163,184,0.9)',
                                            marginBottom: 6,
                                        }}
                                    >
                                        Typical response
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: 'rgba(226,232,240,0.96)',
                                            marginBottom: 4,
                                        }}
                                    >
                                        Within 12 business days
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 12,
                                            color: 'rgba(148,163,184,0.95)',
                                        }}
                                    >
                                        You'll hear directly from someone who would join your project.
                                    </p>
                                </div>

                                <div
                                    style={{
                                        borderRadius: 18,
                                        padding: 14,
                                        border: '1px solid rgba(55,65,81,0.9)',
                                        background:
                                            'radial-gradient(circle at top right, rgba(34,197,94,0.2), transparent 55%), rgba(15,23,42,0.98)',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: 11,
                                            letterSpacing: 2,
                                            textTransform: 'uppercase',
                                            color: 'rgba(148,163,184,0.9)',
                                            marginBottom: 6,
                                        }}
                                    >
                                        Best for
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: 'rgba(226,232,240,0.96)',
                                        }}
                                    >
                                        New product builds, refactors, or long-term product partnerships.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: contact form card */}
                        <aside
                            className="contact-form-aside"
                            style={{
                                borderRadius: 24,
                                padding: 20,
                                border: '1px solid rgba(148,163,184,0.5)',
                                background:
                                    'radial-gradient(circle at top left, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(34,197,94,0.18), transparent 55%), rgba(15,23,42,0.97)',
                                boxShadow:
                                    '0 24px 70px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,1)',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    marginBottom: 16,
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
                                        Project overview
                                    </p>
                                    <p
                                        style={{
                                            fontSize: 14,
                                            color: 'rgba(226,232,240,0.96)',
                                        }}
                                    >
                                        No long formsjust the context we actually need.
                                    </p>
                                </div>
                                <span
                                    style={{
                                        fontSize: 11,
                                        color: 'rgba(148,163,184,0.95)',
                                    }}
                                >
                                    ~5 minutes
                                </span>
                            </div>

                            <form
                                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert('Thank you for reaching out! We will reply shortly.');
                                }}
                            >
                                <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
                                    <div>
                                        <label
                                            style={{
                                                display: 'block',
                                                fontSize: 12,
                                                color: 'rgba(148,163,184,0.95)',
                                                marginBottom: 4,
                                            }}
                                        >
                                            Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            style={{
                                                width: '100%',
                                                borderRadius: 999,
                                                border: '1px solid rgba(55,65,81,1)',
                                                background: 'rgba(15,23,42,0.98)',
                                                padding: '8px 12px',
                                                fontSize: 13,
                                                color: '#e5e7eb',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{
                                                display: 'block',
                                                fontSize: 12,
                                                color: 'rgba(148,163,184,0.95)',
                                                marginBottom: 4,
                                            }}
                                        >
                                            Work email
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            style={{
                                                width: '100%',
                                                borderRadius: 999,
                                                border: '1px solid rgba(55,65,81,1)',
                                                background: 'rgba(15,23,42,0.98)',
                                                padding: '8px 12px',
                                                fontSize: 13,
                                                color: '#e5e7eb',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        style={{
                                            display: 'block',
                                            fontSize: 12,
                                            color: 'rgba(148,163,184,0.95)',
                                            marginBottom: 4,
                                        }}
                                    >
                                        Company / team
                                    </label>
                                    <input
                                        type="text"
                                        style={{
                                            width: '100%',
                                            borderRadius: 999,
                                            border: '1px solid rgba(55,65,81,1)',
                                            background: 'rgba(15,23,42,0.98)',
                                            padding: '8px 12px',
                                            fontSize: 13,
                                            color: '#e5e7eb',
                                            outline: 'none',
                                        }}
                                    />
                                </div>

                                <div>
                                    <label
                                        style={{
                                            display: 'block',
                                            fontSize: 12,
                                            color: 'rgba(148,163,184,0.95)',
                                            marginBottom: 4,
                                        }}
                                    >
                                        What are you looking to build?
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        style={{
                                            width: '100%',
                                            borderRadius: 16,
                                            border: '1px solid rgba(55,65,81,1)',
                                            background: 'rgba(15,23,42,0.98)',
                                            padding: '8px 12px',
                                            fontSize: 13,
                                            color: '#e5e7eb',
                                            outline: 'none',
                                            resize: 'vertical',
                                        }}
                                    />
                                </div>

                                <div
                                    className="contact-form-row"
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                        gap: 10,
                                    }}
                                >
                                    <div>
                                        <label
                                            style={{
                                                display: 'block',
                                                fontSize: 12,
                                                color: 'rgba(148,163,184,0.95)',
                                                marginBottom: 4,
                                            }}
                                        >
                                            Ideal start date
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="E.g. Next month, Q1, flexible"
                                            style={{
                                                width: '100%',
                                                borderRadius: 999,
                                                border: '1px solid rgba(55,65,81,1)',
                                                background: 'rgba(15,23,42,0.98)',
                                                padding: '8px 12px',
                                                fontSize: 13,
                                                color: '#e5e7eb',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            style={{
                                                display: 'block',
                                                fontSize: 12,
                                                color: 'rgba(148,163,184,0.95)',
                                                marginBottom: 4,
                                            }}
                                        >
                                            Rough budget (optional)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Range is fine"
                                            style={{
                                                width: '100%',
                                                borderRadius: 999,
                                                border: '1px solid rgba(55,65,81,1)',
                                                background: 'rgba(15,23,42,0.98)',
                                                padding: '8px 12px',
                                                fontSize: 13,
                                                color: '#e5e7eb',
                                                outline: 'none',
                                            }}
                                        />
                                    </div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginTop: 6,
                                        gap: 10,
                                    }}
                                >
                                    <button
                                        type="submit"
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
                                        Send message
                                    </button>

                                    <p
                                        style={{
                                            fontSize: 11,
                                            color: 'rgba(148,163,184,0.9)',
                                            maxWidth: 220,
                                        }}
                                    >
                                        Or email us directly at
                                        <span style={{ color: '#38bdf8' }}> novagensoftware@gmail.com</span>
                                    </p>
                                </div>
                            </form>
                        </aside>

                    </section>

                    {/* SECTION 1: Engagement Models */}
                    <section style={{ marginBottom: 100, marginTop: 100 }}>
                        <div style={{ textAlign: 'center', marginBottom: 56 }}>
                            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(148,163,184,0.9)', marginBottom: 8 }}>
                                How we engage
                            </p>
                            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                                Flexible partnership models.
                            </h2>
                        </div>

                        <div className="contact-engagement-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                            {[
                                {
                                    icon: <FaRocket size={24} color="#38bdf8" />,
                                    title: "MVP Build",
                                    price: "Fixed Scope",
                                    desc: "Perfect for 0 to 1. We take your idea and ship a production-ready V1 in 4-8 weeks.",
                                    features: ["Rapid Prototyping", "Full Stack Dev", "Launch Support"],
                                    bg: "rgba(56,189,248,0.1)"
                                },
                                {
                                    icon: <FaUsers size={24} color="#22c55e" />,
                                    title: "Dedicated Squad",
                                    price: "Monthly Retainer",
                                    desc: "Your instant engineering team. A senior PM, designer, and engineers working exclusively for you.",
                                    features: ["Daily Standups", "Slack Integration", "Scalable Team"],
                                    bg: "rgba(34,197,94,0.1)"
                                },
                                {
                                    icon: <FaSearch size={24} color="#f472b6" />,
                                    title: "Audit & Rescue",
                                    price: "Custom",
                                    desc: "Legacy code slowing you down? We analyze your architecture, fix bottlenecks, and modernize it.",
                                    features: ["Code Review", "Performance Tuning", "Tech Debt Removal"],
                                    bg: "rgba(244,114,182,0.1)"
                                }
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: 'rgba(15,23,42,0.6)',
                                    border: '1px solid rgba(55,65,81,0.5)',
                                    borderRadius: 24,
                                    padding: 32,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 20,
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        top: 0, right: 0,
                                        padding: '6px 16px',
                                        background: 'rgba(255,255,255,0.05)',
                                        borderBottomLeftRadius: 16,
                                        fontSize: 12,
                                        color: '#94a3b8',
                                        borderLeft: '1px solid rgba(55,65,81,0.5)',
                                        borderBottom: '1px solid rgba(55,65,81,0.5)'
                                    }}>
                                        {item.price}
                                    </div>

                                    <div style={{ width: 56, height: 56, borderRadius: 16, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        {item.icon}
                                    </div>

                                    <div>
                                        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#f8fafc', marginBottom: 8 }}>{item.title}</h3>
                                        <p style={{ fontSize: 14, lineHeight: 1.6, color: '#94a3b8' }}>{item.desc}</p>
                                    </div>

                                    <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid rgba(55,65,81,0.5)' }}>
                                        {item.features.map((feat, f) => (
                                            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, fontSize: 13, color: '#cbd5e1' }}>
                                                <MdVerified size={14} color="#38bdf8" />
                                                {feat}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 2: The Roadmap */}
                    <section style={{ marginBottom: 100 }}>
                        <div style={{ textAlign: 'center', marginBottom: 56 }}>
                            <p style={{ fontSize: 12, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(148,163,184,0.9)', marginBottom: 8 }}>
                                What happens next
                            </p>
                            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                                From connection to kickoff.
                            </h2>
                        </div>

                        <div className="contact-roadmap-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: 40,
                            position: 'relative'
                        }}>
                            {/* Connector Line (Desktop only hack - hidden on mobile via overflow usually but keeping simple) */}
                            <div className="contact-roadmap-connector" style={{
                                position: 'absolute',
                                top: 24,
                                left: 50,
                                right: 50,
                                height: 2,
                                background: 'linear-gradient(to right, #38bdf8 0%, #22c55e 100%)',
                                zIndex: 0,
                                opacity: 0.2
                            }} />

                            {[
                                {
                                    icon: <FaComments size={20} color="#fff" />,
                                    title: "1. Discovery Call",
                                    desc: "We listen to your vision, ask hard technical questions, and assess if we're a true fit—no sales fluff."
                                },
                                {
                                    icon: <FaFileAlt size={20} color="#fff" />,
                                    title: "2. Strategy Brief",
                                    desc: "Within 48 hours, we send a proposal outlining the roadmap, budget options, and team composition."
                                },
                                {
                                    icon: <FaPlay size={20} color="#fff" />,
                                    title: "3. Kickoff",
                                    desc: "Once specialized, we set up Slack, GitHub, and Jira. We deploy the first 'Hello World' regarding your project."
                                }
                            ].map((step, i) => (
                                <div key={i} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                                    <div style={{
                                        width: 48, height: 48, borderRadius: 999,
                                        background: '#0f172a',
                                        border: '2px solid rgba(55,65,81,0.8)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        margin: '0 auto 24px',
                                        boxShadow: '0 0 20px rgba(56,189,248,0.2)'
                                    }}>
                                        {step.icon}
                                    </div>
                                    <h3 style={{ fontSize: 18, fontWeight: 600, color: '#fff', marginBottom: 12 }}>{step.title}</h3>
                                    <p style={{ fontSize: 14, lineHeight: 1.6, color: '#94a3b8', maxWidth: 300, margin: '0 auto' }}>{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* SECTION 3: FAQ */}
                    <section className="contact-faq-section" style={{
                        background: 'linear-gradient(145deg, rgba(30,41,59,0.2), rgba(15,23,42,0.4))',
                        borderRadius: 32,
                        padding: '60px 40px',
                        border: '1px solid rgba(55,65,81,0.3)'
                    }}>
                        <div className="contact-faq-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: 60 }}>
                            <div>
                                <h2 style={{ fontSize: 28, fontWeight: 700, color: '#FFFFFF', marginBottom: 16 }}>
                                    Common Questions
                                </h2>
                                <p style={{ color: '#94a3b8', lineHeight: 1.7, marginBottom: 32 }}>
                                    Everything you need to know about billing, IP, and how we operate as a remote team.
                                </p>
                                <div style={{ display: 'flex', gap: 12 }}>
                                    <div style={{ padding: '12px 20px', borderRadius: 12, background: 'rgba(56,189,248,0.1)', color: '#38bdf8', fontSize: 13, fontWeight: 600 }}>
                                        Billing & Contracts
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gap: 24 }}>
                                {[
                                    {
                                        q: "Who owns the Intellectual Property (IP)?",
                                        a: "You do. 100%. From the moment we write the first line of code, it belongs to your company. We sign standard NDAs and IP assignment agreements."
                                    },
                                    {
                                        q: "How do you handle timezones?",
                                        a: "We structure our work to have at least 4 hours of overlap with your core team daily. We use async docs for updates and sync calls for decisions."
                                    },
                                    {
                                        q: "Can we scale the team up or down?",
                                        a: "Yes. Our retainer model is flexible. You can add more engineers for a sprint or scale back during maintenance periods with 2 weeks' notice."
                                    }
                                ].map((faq, i) => (
                                    <div key={i} style={{ borderBottom: '1px solid rgba(55,65,81,0.5)', paddingBottom: 24 }}>
                                        <h4 style={{ fontSize: 16, fontWeight: 600, color: '#f1f5f9', marginBottom: 8 }}>{faq.q}</h4>
                                        <p style={{ fontSize: 14, lineHeight: 1.6, color: '#94a3b8' }}>{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main >
        </div >
    );
}
