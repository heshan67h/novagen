'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

export default function BlogPage(): JSX.Element {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const blogPosts = [
        {
            id: 1,
            title: "Building Scalable Microservices with Node.js",
            excerpt: "Learn how to architect and deploy production-ready microservices using Node.js, Docker, and Kubernetes for maximum scalability.",
            category: "AI/ML",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Dec 5, 2024",
            readTime: "8 min read",
            image: "/images/blog/microservices.png",
            featured: true
        },
        {
            id: 2,
            title: "Modern UI/UX Trends in 2025",
            excerpt: "Explore the latest design trends shaping user experiences, from glassmorphism to AI-powered personalization.",
            category: "Web Dev",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Dec 3, 2024",
            readTime: "6 min read",
            image: "/images/blog/uiux.png"
        },
        {
            id: 3,
            title: "Serverless Architecture: A Deep Dive",
            excerpt: "Understanding the benefits and challenges of serverless computing with AWS Lambda, Azure Functions, and Google Cloud Functions.",
            category: "Cloud",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Dec 1, 2024",
            readTime: "10 min read",
            image: "/images/blog/serverless.png"
        },
        {
            id: 4,
            title: "Zero Trust Security Implementation Guide",
            excerpt: "Step-by-step guide to implementing zero trust security architecture in modern cloud environments.",
            category: "Security",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Nov 28, 2024",
            readTime: "12 min read",
            image: "/images/blog/security.png"
        },
        {
            id: 5,
            title: "Getting Started with Next.js 14",
            excerpt: "Master the latest features of Next.js 14 including Server Actions, Partial Prerendering, and the new App Router.",
            category: "Tutorials",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Nov 25, 2024",
            readTime: "7 min read",
            image: "/images/blog/nextjs.png"
        },
        {
            id: 6,
            title: "AI-Powered Code Review Tools in 2025",
            excerpt: "Discover how AI is revolutionizing code quality with intelligent review tools that catch bugs before they ship.",
            category: "AI/ML",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Nov 22, 2024",
            readTime: "9 min read",
            image: "/images/blog/ai-code.png"
        },
        {
            id: 7,
            title: "TypeScript Best Practices for Large Codebases",
            excerpt: "Essential patterns and practices for maintaining type safety and developer productivity in enterprise applications.",
            category: "Web Dev",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Nov 20, 2024",
            readTime: "8 min read",
            image: "/images/blog/typescript.png"
        },
        {
            id: 8,
            title: "Container Orchestration with Kubernetes",
            excerpt: "From basics to advanced: mastering Kubernetes for deploying and scaling containerized applications.",
            category: "Cloud",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Nov 18, 2024",
            readTime: "11 min read",
            image: "/images/blog/kubernetes.png"
        },
        {
            id: 9,
            title: "GraphQL API Design Patterns",
            excerpt: "Learn best practices for designing scalable GraphQL APIs with efficient resolvers, schema design, and query optimization.",
            category: "Web Dev",
            author: "Heshan Sathyanga",
            authorImage: "/images/teamimage/2_heshan_x.png",
            date: "Nov 15, 2024",
            readTime: "9 min read",
            image: "/images/blog/graphql.png"
        }
    ];

    const categories = ["All", "AI/ML", "Web Dev", "Cloud", "Security", "Tutorials"];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeFilter === "All" || post.category === activeFilter;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'radial-gradient(circle at top, #020617 0%, #020617 50%, #000 100%)',
                color: '#e5e7eb',
            }}
        >
            <Navbar />

            <main className="blog-main-wrapper" style={{ padding: '120px 0 88px' }}>
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
                    className="blog-main-container"
                    style={{
                        position: 'relative',
                        width: '93%',
                        maxWidth: '1800px',
                        margin: '0 auto',
                        padding: '0 2rem',
                        boxSizing: 'border-box',
                    }}
                >
                    {/* Breadcrumb */}
                    <div
                        className="blog-breadcrumb"
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
                        <span style={{ opacity: 1 }}>Blog</span>

                        <span
                            style={{
                                marginLeft: 'auto',
                                padding: '6px 14px',
                                borderRadius: 999,
                                border: '1px solid rgba(148,163,184,0.4)',
                                background: 'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))',
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
                            Insights
                        </span>
                    </div>

                    {/* Hero Section */}
                    <section
                        className="blog-hero-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1.4fr)",
                            gap: "32px",
                            alignItems: "flex-start",
                            marginBottom: 72,
                        }}
                    >
                        {/* Left: main copy */}
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
                                NovaGen Blog
                            </p>
                            <h1
                                className="blog-hero-title"
                                style={{
                                    fontSize: 'clamp(2.4rem, 3.4vw, 3.2rem)',
                                    lineHeight: 1.1,
                                    fontWeight: 700,
                                    letterSpacing: '-0.04em',
                                    marginBottom: 18,
                                    color: '#FFFFFF',
                                }}
                            >
                                Insights & Innovation
                            </h1>
                            <p
                                style={{
                                    maxWidth: 620,
                                    fontSize: 15,
                                    lineHeight: 1.8,
                                    color: '#9ca3af',
                                    marginBottom: 32,
                                }}
                            >
                                Expert perspectives on software development, AI, cloud computing, and the future of technology.
                            </p>

                            {/* Search Bar */}
                            <div style={{ maxWidth: 600, position: 'relative' }}>
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '14px 48px 14px 20px',
                                        borderRadius: 12,
                                        border: '1px solid rgba(148,163,184,0.3)',
                                        background: 'rgba(15,23,42,0.6)',
                                        backdropFilter: 'blur(10px)',
                                        color: '#fff',
                                        fontSize: 14,
                                        outline: 'none',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onFocus={(e) => {
                                        e.currentTarget.style.borderColor = '#38bdf8';
                                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(56,189,248,0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                />
                                <svg
                                    style={{
                                        position: 'absolute',
                                        right: 18,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        width: 20,
                                        height: 20,
                                        color: '#9ca3af',
                                    }}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Right: snapshot card */}
                        <aside
                            className="blog-snapshot-card"
                            style={{
                                borderRadius: 24,
                                border: "1px solid rgba(148,163,184,0.5)",
                                background:
                                    "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.26) 0, transparent 52%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.26) 0, transparent 60%), rgba(15,23,42,0.94)",
                                padding: "22px 22px 20px 22px",
                                boxShadow:
                                    "0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)",
                            }}
                        >
                            <header
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    marginBottom: 18,
                                }}
                            >
                                <div>
                                    <p
                                        style={{
                                            fontSize: "0.7rem",
                                            letterSpacing: "0.16em",
                                            textTransform: "uppercase",
                                            color: "rgba(148,163,184,0.85)",
                                            marginBottom: 6,
                                        }}
                                    >
                                        Engineering Culture
                                    </p>
                                    <p
                                        style={{
                                            fontSize: "0.8rem",
                                            color: "rgba(226,232,240,0.9)",
                                            maxWidth: "16rem",
                                            lineHeight: 1.7,
                                        }}
                                    >
                                        We share our architectural decisions, code patterns, and hard-earned lessons openly.
                                    </p>
                                </div>
                                <span
                                    style={{
                                        padding: "4px 11px",
                                        borderRadius: 999,
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.12em",
                                        textTransform: "uppercase",
                                        border: "1px solid rgba(148,163,184,0.5)",
                                        color: "rgba(226,232,240,0.85)",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    OPEN SOURCE
                                </span>
                            </header>

                            <div
                                style={{
                                    fontSize: "0.8rem",
                                    color: "rgba(148,163,184,0.95)",
                                    lineHeight: 1.7,
                                    marginBottom: 18,
                                }}
                            >
                                <p style={{ marginBottom: 6 }}>
                                    Technical deep dives, tutorials, and insights from the team building NovaGen.
                                </p>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                                    gap: 16,
                                    borderTop: "1px solid rgba(148,163,184,0.4)",
                                    paddingTop: 14,
                                    marginTop: 4,
                                }}
                            >
                                {[
                                    {
                                        value: "9+",
                                        label: "Articles",
                                    },
                                    {
                                        value: "4",
                                        label: "Writers",
                                    },
                                    {
                                        value: "Weekly",
                                        label: "Updates",
                                    },
                                ].map((item, i) => (
                                    <div key={i} style={{ textAlign: "left" }}>
                                        <div
                                            style={{
                                                fontSize: "1.4rem",
                                                fontWeight: 700,
                                                color: "white",
                                                marginBottom: 2,
                                            }}
                                        >
                                            {item.value}
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "0.7rem",
                                                color: "rgba(148,163,184,0.8)",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </aside>
                    </section>

                    {/* Featured Post */}
                    {featuredPost && (
                        <section style={{ marginBottom: 60 }}>
                            <div
                                style={{
                                    position: 'relative',
                                    borderRadius: 24,
                                    overflow: 'hidden',
                                    border: '1px solid rgba(148,163,184,0.3)',
                                    background: 'radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 50%), rgba(15,23,42,0.95)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(56,189,248,0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <div className="blog-featured-post-card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 30, padding: 30 }}>
                                    <div className="blog-featured-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                padding: '4px 12px',
                                                borderRadius: 999,
                                                background: 'linear-gradient(135deg, #38bdf8, #22d3ee)',
                                                color: '#fff',
                                                fontSize: 11,
                                                fontWeight: 600,
                                                letterSpacing: 0.5,
                                                marginBottom: 16,
                                                width: 'fit-content',
                                            }}
                                        >
                                            FEATURED
                                        </span>
                                        <h2
                                            style={{
                                                fontSize: 'clamp(1.6rem, 2.2vw, 2rem)',
                                                fontWeight: 700,
                                                color: '#fff',
                                                marginBottom: 12,
                                                lineHeight: 1.2,
                                            }}
                                        >
                                            {featuredPost.title}
                                        </h2>
                                        <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.7, marginBottom: 20 }}>
                                            {featuredPost.excerpt}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                            <img
                                                src={featuredPost.authorImage}
                                                alt={featuredPost.author}
                                                style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                                            />
                                            <div>
                                                <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{featuredPost.author}</div>
                                                <div style={{ fontSize: 12, color: '#9ca3af' }}>
                                                    {featuredPost.date} · {featuredPost.readTime}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="blog-featured-image"
                                        style={{
                                            borderRadius: 16,
                                            height: 280,
                                            overflow: 'hidden',
                                            background: '#1e293b',
                                        }}
                                    >
                                        <img
                                            src={featuredPost.image}
                                            alt={featuredPost.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Category Filter Bar */}
                    <section style={{ marginBottom: 40 }}>
                        <div
                            className="blog-filter-bar"
                            style={{
                                display: 'flex',
                                gap: 12,
                                flexWrap: 'wrap',
                                padding: '20px 24px',
                                borderRadius: 16,
                                border: '1px solid rgba(148,163,184,0.2)',
                                background: 'rgba(15,23,42,0.4)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    style={{
                                        padding: '8px 18px',
                                        borderRadius: 999,
                                        border: activeFilter === category ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.3)',
                                        background: activeFilter === category
                                            ? 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(34,197,94,0.15))'
                                            : 'rgba(15,23,42,0.6)',
                                        color: activeFilter === category ? '#38bdf8' : '#9ca3af',
                                        fontSize: 13,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8,
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeFilter !== category) {
                                            e.currentTarget.style.borderColor = 'rgba(148,163,184,0.5)';
                                            e.currentTarget.style.background = 'rgba(15,23,42,0.8)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeFilter !== category) {
                                            e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)';
                                            e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
                                        }
                                    }}
                                >
                                    {activeFilter === category && (
                                        <span
                                            style={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: '50%',
                                                background: '#38bdf8',
                                                boxShadow: '0 0 8px rgba(56,189,248,0.8)',
                                            }}
                                        />
                                    )}
                                    {category}
                                </button>
                            ))}
                        </div>
                    </section>

                    {/* Blog Grid */}
                    <section>
                        <div
                            className="blog-grid"
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                                gap: 28,
                            }}
                        >
                            {regularPosts.map((post) => (
                                <article
                                    key={post.id}
                                    style={{
                                        borderRadius: 20,
                                        border: '1px solid rgba(148,163,184,0.25)',
                                        background: 'rgba(15,23,42,0.6)',
                                        backdropFilter: 'blur(10px)',
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-8px)';
                                        e.currentTarget.style.borderColor = 'rgba(56,189,248,0.5)';
                                        e.currentTarget.style.boxShadow = '0 20px 40px rgba(56,189,248,0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.borderColor = 'rgba(148,163,184,0.25)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {/* Article Image */}
                                    <div
                                        style={{
                                            height: 200,
                                            overflow: 'hidden',
                                            background: post.image.startsWith('gradient-')
                                                ? 'linear-gradient(135deg, rgba(139,92,246,0.3), rgba(56,189,248,0.3))'
                                                : '#1e293b',
                                        }}
                                    >
                                        {!post.image.startsWith('gradient-') && (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        )}
                                    </div>

                                    <div style={{ padding: 24 }}>
                                        {/* Category Badge */}
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                padding: '4px 10px',
                                                borderRadius: 6,
                                                background: 'rgba(56,189,248,0.15)',
                                                border: '1px solid rgba(56,189,248,0.3)',
                                                color: '#38bdf8',
                                                fontSize: 11,
                                                fontWeight: 600,
                                                marginBottom: 12,
                                            }}
                                        >
                                            {post.category}
                                        </span>

                                        <h3
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 700,
                                                color: '#fff',
                                                marginBottom: 10,
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {post.title}
                                        </h3>

                                        <p
                                            style={{
                                                fontSize: 13,
                                                color: '#9ca3af',
                                                lineHeight: 1.6,
                                                marginBottom: 16,
                                            }}
                                        >
                                            {post.excerpt}
                                        </p>

                                        {/* Author Info */}
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 16, borderTop: '1px solid rgba(148,163,184,0.15)' }}>
                                            <img
                                                src={post.authorImage}
                                                alt={post.author}
                                                style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }}
                                            />
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: 12, fontWeight: 600, color: '#fff' }}>{post.author}</div>
                                                <div style={{ fontSize: 11, color: '#9ca3af' }}>
                                                    {post.date} · {post.readTime}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* No Results Message */}
                        {regularPosts.length === 0 && (
                            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af' }}>
                                <p style={{ fontSize: 16, marginBottom: 8 }}>No articles found</p>
                                <p style={{ fontSize: 14 }}>Try adjusting your filters or search query</p>
                            </div>
                        )}
                    </section>

                    {/* Pagination */}
                    <section className="blog-pagination" style={{ marginTop: 60, display: 'flex', justifyContent: 'center', gap: 10 }}>
                        <button
                            style={{
                                padding: '10px 18px',
                                borderRadius: 10,
                                border: '1px solid rgba(148,163,184,0.3)',
                                background: 'rgba(15,23,42,0.6)',
                                color: '#9ca3af',
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#38bdf8';
                                e.currentTarget.style.color = '#38bdf8';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)';
                                e.currentTarget.style.color = '#9ca3af';
                            }}
                        >
                            Previous
                        </button>
                        {[1, 2, 3].map((page) => (
                            <button
                                key={page}
                                style={{
                                    padding: '10px 16px',
                                    borderRadius: 10,
                                    border: page === 1 ? '1px solid #38bdf8' : '1px solid rgba(148,163,184,0.3)',
                                    background: page === 1 ? 'rgba(56,189,248,0.15)' : 'rgba(15,23,42,0.6)',
                                    color: page === 1 ? '#38bdf8' : '#9ca3af',
                                    fontSize: 13,
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            style={{
                                padding: '10px 18px',
                                borderRadius: 10,
                                border: '1px solid rgba(148,163,184,0.3)',
                                background: 'rgba(15,23,42,0.6)',
                                color: '#9ca3af',
                                fontSize: 13,
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#38bdf8';
                                e.currentTarget.style.color = '#38bdf8';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(148,163,184,0.3)';
                                e.currentTarget.style.color = '#9ca3af';
                            }}
                        >
                            Next
                        </button>
                    </section>
                </div>
            </main>
        </div>
    );
}
