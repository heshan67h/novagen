'use client';

import React from 'react';
import Navbar from '@/components/Navbar';

export default function TeamPage(): JSX.Element {
    const coreTeam = [
        {
            name: 'Heshan Sathyanga',
            role: 'Founder · Product Engineer',
            focus: 'Architecture, product strategy, high‑leverage engineering',
            tags: ['Product-led', 'Full‑stack', 'Delivery'],
        },
        {
            name: 'Senior Engineer',
            role: 'Backend · Platforms',
            focus: 'APIs, data models, observability, performance tuning',
            tags: ['Node.js', 'Postgres', 'Scalability'],
        },
        {
            name: 'Product Designer',
            role: 'UX · UI Systems',
            focus: 'Flows, interface systems, design libraries',
            tags: ['UX flows', 'Design systems', 'Prototyping'],
        },
        {
            name: 'Frontend Engineer',
            role: 'Interfaces · DX',
            focus: 'Modern frontends, interactions, design implementation',
            tags: ['Next.js', 'Animations', 'Accessibility'],
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
                            gridTemplateColumns: 'minmax(0, 1.9fr) minmax(0, 1.6fr)',
                            gap: 34,
                            alignItems: 'flex-start',
                            marginBottom: 56,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 16,
                            }}
                        >
                            {coreTeam.map((member, index) => (
                                <div
                                    key={index}
                                    style={{
                                        borderRadius: 20,
                                        padding: 18,
                                        border: '1px solid rgba(55,65,81,0.9)',
                                        background:
                                            'radial-gradient(circle at top left, rgba(56,189,248,0.16), transparent 55%), radial-gradient(circle at bottom right, rgba(34,197,94,0.16), transparent 55%), rgba(15,23,42,0.98)',
                                        boxShadow:
                                            '0 18px 55px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            marginBottom: 10,
                                            gap: 12,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 10,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 34,
                                                    height: 34,
                                                    borderRadius: '999px',
                                                    background:
                                                        'radial-gradient(circle at 30% 0%, #38bdf8, transparent 60%), radial-gradient(circle at 70% 100%, #22c55e, transparent 60%)',
                                                    boxShadow: '0 0 18px rgba(56,189,248,0.7)',
                                                }}
                                            />
                                            <div>
                                                <div
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: 600,
                                                        color: '#f9fafb',
                                                    }}
                                                >
                                                    {member.name}
                                                </div>
                                                <div
                                                    style={{
                                                        fontSize: 12,
                                                        color: 'rgba(148,163,184,0.95)',
                                                    }}
                                                >
                                                    {member.role}
                                                </div>
                                            </div>
                                        </div>

                                        <span
                                            style={{
                                                fontSize: 11,
                                                color: 'rgba(148,163,184,0.95)',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            Core team
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: '#9ca3af',
                                            marginBottom: 10,
                                        }}
                                    >
                                        {member.focus}
                                    </p>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 8,
                                            fontSize: 11,
                                        }}
                                    >
                                        {member.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    padding: '4px 9px',
                                                    borderRadius: 999,
                                                    border: '1px solid rgba(55,65,81,1)',
                                                    background:
                                                        'linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.9))',
                                                    color: 'rgba(148,163,184,0.95)',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

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
                    </section>

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
            </main>
        </div>
    );
}
