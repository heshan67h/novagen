"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ProjectsPage() {
  const projects = [
    {
      label: "B2B SaaS",
      name: "Revenue Intelligence Platform",
      stage: "From 0 → 1 in 14 weeks",
      summary:
        "We partnered with a seed-stage startup to build an end-to-end revenue intelligence platform – from product strategy and UX flows to a production-ready app.",
      timeline: "Discovery, MVP, v1 rollout",
      impact: [
        "+38%", "sales pipeline visibility",
        "< 4 months", "time to first enterprise deal",
      ],
      imageUrl: "/images/projects/revenue-platform-mockup.png",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      category: "SaaS Platform",
      featured: true,
    },
    {
      label: "Fintech",
      name: "Personal Finance Copilot",
      stage: "Shipping to 50k+ users",
      summary:
        "Mobile and web experience that helps users understand, track, and automate their finances with AI powered insights.",
      timeline: "Design system, apps, analytics",
      impact: [
        "4.8★", "app store rating",
        "+22%", "increase in paid conversions",
      ],
      imageUrl: "/images/projects/finance-app-mockup.png",
      techStack: ["React Native", "Next.js", "Python", "TensorFlow"],
      category: "Mobile App",
    },
    {
      label: "Ops tooling",
      name: "Operations Command Center",
      stage: "Rolling out across regions",
      summary:
        "Unified control center that gives operations teams real-time visibility across logistics, support, and on‑ground teams.",
      timeline: "Pilots, rollout, ongoing iteration",
      impact: ["x3", "faster incident response", "95%", "SLA compliance"],
      imageUrl: "/images/projects/operations-dashboard-mockup.png",
      techStack: ["Vue.js", "GraphQL", "Redis", "Kubernetes"],
      category: "Dashboard",
    },
  ];

  const containerStyle: React.CSSProperties = {
    width: "93%",
    maxWidth: "1800px",
    margin: "0 auto",
    padding: "0 2rem",
    boxSizing: "border-box",
  };

  const cardStyle: React.CSSProperties = {
    borderRadius: "18px",
    border: "1px solid rgba(148,163,184,0.35)",
    background:
      "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.08), transparent 55%), radial-gradient(circle at 100% 100%, rgba(34,197,94,0.06), transparent 55%), rgba(15,23,42,0.93)",
    boxShadow: "0 24px 60px rgba(15,23,42,0.9)",
    padding: "1.5rem 1.75rem",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #020617 0, #020617 45%, #020617 55%, #020617 100%)",
        color: "#e5e7eb",
      }}
    >
      <Navbar />
      <main style={{ padding: "120px 0 88px" }}>
        <div style={containerStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "1.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                  fontSize: "0.8rem",
                  color: "#9ca3af",
                }}
              >
                <span>SoftGen</span>
                <span style={{ opacity: 0.45 }}>•</span>
                <span>Case Studies</span>
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.18rem 0.7rem",
                  borderRadius: "999px",
                  border: "1px solid rgba(148,163,184,0.7)",
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.18), transparent 60%), rgba(15,23,42,0.85)",
                  color: "#e5e7eb",
                  fontSize: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle at 0% 0%, #22c55e, #15803d)",
                  }}
                />
                <span>Selected work</span>
              </div>
              <h1
                style={{
                  fontSize: "2.5rem",
                  lineHeight: 1.1,
                  marginBottom: "0.75rem",
                }}
              >
                Real products shipped with
                <br />
                small, focused teams.
              </h1>
              <p
                style={{
                  maxWidth: "32rem",
                  fontSize: "0.95rem",
                  color: "#9ca3af",
                }}
              >
                From 0 → 1 bets to critical internal tools, we help
                founders and product leaders design, build, and ship
                software that actually moves the business.
              </p>
            </div>

            <div style={{ minWidth: "260px" }}>
              <div style={cardStyle}>
                <p
                  style={{
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#9ca3af",
                    marginBottom: "0.9rem",
                  }}
                >
                  Track record
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                    gap: "0.9rem 1.2rem",
                  }}
                >
                  {[{
                    label: "Projects shipped",
                    value: "20+",
                  },
                  {
                    label: "Product verticals",
                    value: "4",
                  },
                  {
                    label: "Average engagement",
                    value: "12 weeks",
                  },
                  {
                    label: "Timezones covered",
                    value: "3",
                  }].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 600,
                          color: "#f9fafb",
                        }}
                      >
                        {item.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#9ca3af",
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Premium Projects Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,1.5fr) minmax(0,1.2fr)",
              gap: "1.5rem",
              marginBottom: "2.25rem",
            }}
          >
            {/* Projects Column */}
            <div
              style={{
                display: "grid",
                gap: "1.5rem",
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className={`project-card-enhanced ${project.featured ? 'project-card-featured gradient-border-animated' : ''}`}
                >
                  {/* Project Image */}
                  <div className="project-image-container">
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      width={1200}
                      height={750}
                      className="project-device-mockup"
                      priority={index === 0}
                    />

                    {/* Glassmorphic Overlay */}
                    <div className="project-glass-overlay">
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          fontSize: "0.75rem",
                          color: "#9ca3af",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span
                          style={{
                            padding: "0.15rem 0.6rem",
                            borderRadius: "999px",
                            border: "1px solid rgba(148,163,184,0.6)",
                            background:
                              "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(15,23,42,0.9))",
                            color: "#e5e7eb",
                          }}
                        >
                          {project.label}
                        </span>
                        <span style={{ opacity: 0.45 }}>•</span>
                        <span>{project.stage}</span>
                      </div>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          color: "#f9fafb",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="project-content">
                    <p
                      style={{
                        fontSize: "0.9rem",
                        color: "#9ca3af",
                        marginBottom: "0.75rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {project.summary}
                    </p>

                    {/* Tech Stack */}
                    <div className="tech-stack-container">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-badge">
                          <span className="tech-badge-icon" />
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact Metrics */}
                    <div className="project-impact-metrics">
                      <div className="impact-metric-item">
                        <div className="impact-metric-value">
                          {project.impact[0]}
                        </div>
                        <div className="impact-metric-label">
                          {project.impact[1]}
                        </div>
                      </div>
                      <div className="impact-metric-item">
                        <div className="impact-metric-value">
                          {project.impact[2]}
                        </div>
                        <div className="impact-metric-label">
                          {project.impact[3]}
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button className="btn-case-study">
                      View Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Metrics & CTA */}
            <div>
              <div
                style={{
                  ...cardStyle,
                  padding: "1.2rem 1.3rem 1.35rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-40% -40% auto auto",
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.45), transparent 55%)",
                    opacity: 0.55,
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.8rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#9ca3af",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Delivery metrics
                    </div>
                    <h2
                      style={{
                        fontSize: "1.05rem",
                        color: "#e5e7eb",
                      }}
                    >
                      How we measure success across projects
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.45rem",
                      padding: "0.35rem 0.45rem",
                      borderRadius: "999px",
                      background: "rgba(15,23,42,0.85)",
                      border: "1px solid rgba(51,65,85,0.9)",
                    }}
                  >
                    {["Product", "Delivery", "Quality"].map((tab, index) => (
                      <span
                        key={tab}
                        style={{
                          fontSize: "0.7rem",
                          padding: "0.2rem 0.55rem",
                          borderRadius: "999px",
                          background:
                            index === 1
                              ? "linear-gradient(135deg,#38bdf8,#22c55e)"
                              : "transparent",
                          color: index === 1 ? "#0b1120" : "#9ca3af",
                          fontWeight: index === 1 ? 600 : 500,
                        }}
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "minmax(0,1.1fr) minmax(0,0.9fr)",
                    gap: "1rem",
                    alignItems: "stretch",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                        gap: "0.6rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {[{
                        label: "Average cycle time",
                        value: "6.5 days",
                      },
                      {
                        label: "On-time milestones",
                        value: "93%",
                      },
                      {
                        label: "Uptime on shipped infra",
                        value: "99.9%",
                      }].map((metric) => (
                        <div
                          key={metric.label}
                          style={{
                            padding: "0.55rem 0.6rem",
                            borderRadius: "12px",
                            background:
                              "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.8))",
                            border:
                              "1px solid rgba(51,65,85,0.95)",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "0.8rem",
                              color: "#9ca3af",
                              marginBottom: "0.1rem",
                            }}
                          >
                            {metric.label}
                          </div>
                          <div
                            style={{
                              fontSize: "0.95rem",
                              fontWeight: 600,
                              color: "#e5e7eb",
                            }}
                          >
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        alignItems: "flex-end",
                        height: 130,
                      }}
                    >
                      {[75, 62, 88, 54, 92].map((value, index) => (
                        <div
                          key={index}
                          style={{
                            flex: 1,
                            borderRadius: "999px",
                            background:
                              "linear-gradient(to top, rgba(15,23,42,0.7), rgba(30,64,175,0.55))",
                            border: "1px solid rgba(30,64,175,0.8)",
                            padding: 2,
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              width: "100%",
                              height: `${value}%`,
                              borderRadius: "999px",
                              background:
                                index % 2 === 0
                                  ? "linear-gradient(to top,#22c55e,#38bdf8)"
                                  : "linear-gradient(to top,#22c55e,#a5b4fc)",
                              boxShadow:
                                "0 0 18px rgba(56,189,248,0.6)",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.7rem",
                      justifyContent: "space-between",
                    }}
                  >
                    {["Discovery + design", "MVP build", "Scale & evolve"].map(
                      (stage, index) => (
                        <div
                          key={stage}
                          style={{
                            padding: "0.7rem 0.8rem",
                            borderRadius: "14px",
                            background:
                              "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.25), transparent 60%), rgba(15,23,42,0.98)",
                            border: "1px solid rgba(51,65,85,0.95)",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "0.75rem",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: "0.8rem",
                                color: "#9ca3af",
                                marginBottom: "0.15rem",
                              }}
                            >
                              {stage}
                            </div>
                            <div
                              style={{
                                fontSize: "0.82rem",
                                color: "#e5e7eb",
                              }}
                            >
                              {index === 0 &&
                                "Shape the problem, scope, and happy paths before a single line of code."}
                              {index === 1 &&
                                "Ship the smallest valuable version to real users with proper instrumentation."}
                              {index === 2 &&
                                "Iterate based on signal, tighten the core loops, and harden infra."}
                            </div>
                          </div>
                          <span
                            style={{
                              fontSize: "0.75rem",
                              padding: "0.22rem 0.65rem",
                              borderRadius: "999px",
                              border: "1px solid rgba(148,163,184,0.6)",
                              background:
                                "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))",
                              color: "#e5e7eb",
                            }}
                          >
                            {index === 0 && "~1–2 weeks"}
                            {index === 1 && "~8–10 weeks"}
                            {index === 2 && "Ongoing"}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem 1.2rem",
                  borderRadius: "16px",
                  border: "1px solid rgba(30,64,175,0.7)",
                  background:
                    "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.3), transparent 60%), radial-gradient(circle at 100% 100%, rgba(34,197,94,0.25), transparent 55%), rgba(15,23,42,0.98)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#cbd5f5",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Next project
                  </p>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      marginBottom: "0.2rem",
                      color: "#f9fafb",
                    }}
                  >
                    See your product in this list next.
                  </h3>
                  <p
                    style={{ fontSize: "0.85rem", color: "#e5e7eb" }}
                  >
                    Tell us what you want to ship. We'll map a
                    lean, realistic path from idea to impact.
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <button
                    style={{
                      padding: "0.55rem 1.05rem",
                      borderRadius: "999px",
                      border: "none",
                      cursor: "pointer",
                      background:
                        "linear-gradient(135deg,#38bdf8,#22c55e)",
                      color: "#020617",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      boxShadow:
                        "0 18px 35px rgba(56,189,248,0.45)",
                    }}
                  >
                    Book a free call
                  </button>
                  <button
                    style={{
                      padding: "0.55rem 0.95rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(148,163,184,0.6)",
                      background:
                        "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))",
                      color: "#e5e7eb",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Download capabilities deck
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
