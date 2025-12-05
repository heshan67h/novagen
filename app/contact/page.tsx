'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

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
                                Start a project with SoftGen
                            </p>
                            <h1
                                style={{
                                    fontSize: 'clamp(2.2rem, 3vw, 2.8rem)',
                                    lineHeight: 1.1,
                                    fontWeight: 700,
                                    letterSpacing: '-0.04em',
                                    marginBottom: 18,
                                    color: '#f9fafb',
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
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
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
                                        <span style={{ color: '#38bdf8' }}> hello@softgen.studio</span>
                                    </p>
                                </div>
                            </form>
                        </aside>
                    </section>
                </div>
            </main>
        </div>
    );
}
