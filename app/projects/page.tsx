"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      label: "01",
      title: "Fintech Dashboard",
      image: "/images/newprojects/Fintech Dashboard.png",
      summary:
        "A comprehensive dashboard for financial data visualization, enabling real-time insights and decision making.",
      bullets: [
        "Real-time data visualization",
        "Secure transaction processing",
        "Customizable reporting tools",
      ],
      category: "Finance",
    },
    {
      label: "02",
      title: "Health Monitor App",
      image: "/images/newprojects/Health Monitor App.png",
      summary:
        "Mobile application for patient monitoring and engagement, connecting patients with healthcare providers.",
      bullets: [
        "Remote patient monitoring",
        "Secure messaging system",
        "Appointment scheduling",
      ],
      category: "Healthcare",
    },
    {
      label: "03",
      title: "E-commerce Platform",
      image: "/images/newprojects/E-commerce Platform.png",
      summary:
        "Scalable online store with advanced inventory management and seamless checkout experience.",
      bullets: [
        "Advanced inventory management",
        "Seamless checkout process",
        "Integrated marketing tools",
      ],
      category: "Retail",
    },
    {
      label: "04",
      title: "AI Analytics Suite",
      image: "/images/newprojects/AI Analytics Suite.png",
      summary:
        "Predictive analytics platform powered by machine learning for business intelligence and forecasting.",
      bullets: [
        "ML model integration",
        "Trend forecasting",
        "Data mining capabilities",
      ],
      category: "AI / ML",
    },
    {
      label: "05",
      title: "Smart Home Hub",
      image: "/images/newprojects/Smart Home Hub.png",
      summary:
        "IoT control center for managing connected devices across residential properties with automation.",
      bullets: [
        "Device integration",
        "Automated routines",
        "Energy monitoring",
      ],
      category: "IoT",
    },
    {
      label: "06",
      title: "Logistics Tracker",
      image: "/images/newprojects/Logistics Tracker.png",
      summary:
        "Real-time fleet management and supply chain visibility solution for global logistics companies.",
      bullets: [
        "GPS tracking",
        "Route optimization",
        "Delivery proof",
      ],
      category: "Logistics",
    },
    {
      label: "07",
      title: "Cloud Migration",
      image: "/images/newprojects/Cloud Migration.png",
      summary:
        "Seamless migration of legacy systems to modern cloud infrastructure with zero downtime.",
      bullets: [
        "AWS/Azure migration",
        "Microservices architecture",
        "Cost optimization",
      ],
      category: "Cloud",
    },
    {
      label: "08",
      title: "Secure Vault",
      image: "/images/newprojects/Secure Vault.png",
      summary:
        "Enterprise-grade security platform for protecting sensitive data and managing access controls.",
      bullets: [
        "End-to-end encryption",
        "Identity management",
        "Compliance auditing",
      ],
      category: "Security",
    },
  ];

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #020617 0, #020617 26%, #020617 50%, #000 100%)",
        color: "#e5e7eb",
      }}
    >
      <Navbar />

      <main
        style={{
          padding: "120px 0 80px",
        }}
      >
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            opacity: 0.65,
            mixBlendMode: "screen",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -200,
              background:
                "radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 55%), radial-gradient(circle at top right, rgba(129,140,248,0.12), transparent 55%), radial-gradient(circle at bottom, rgba(34,197,94,0.08), transparent 55%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            width: "93%",
            maxWidth: "1800px",
            margin: "0 auto",
            padding: "0 2rem",
            boxSizing: "border-box",
          }}
        >
          {/* Top meta row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
              gap: 16,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "4px 10px 4px 4px",
                borderRadius: 999,
                background:
                  "linear-gradient(120deg, rgba(56,189,248,0.16), rgba(129,140,248,0.12))",
                border: "1px solid rgba(148,163,184,0.4)",
              }}
            >
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "999px",
                  background:
                    "conic-gradient(from 140deg, #22c55e, #22c55e 40deg, #38bdf8 120deg, #6366f1 220deg, #22c55e 360deg)",
                  boxShadow: "0 0 22px rgba(56,189,248,0.58)",
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  color: "#e5e7eb",
                }}
              >
                Projects
              </span>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 12px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.45)",
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.88))",
                boxShadow:
                  "0 18px 45px rgba(15,23,42,0.8), 0 0 0 1px rgba(15,23,42,0.9)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "999px",
                  background: "#22c55e",
                  boxShadow: "0 0 10px rgba(34,197,94,0.9)",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  color: "#9ca3af",
                }}
              >
                Case Studies
              </span>
            </div>
          </div>

          {/* Hero */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1.4fr)",
              gap: 34,
              alignItems: "flex-start",
              marginBottom: 56,
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: "clamp(2.3rem, 3.2vw, 3rem)",
                  lineHeight: 1.1,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  marginBottom: "18px",
                  color: "#FFFFFF",
                }}
              >
                Work that drives
                <br />
                real business impact
                <br />
                not just pixels.
              </h1>
              <p
                style={{
                  maxWidth: 620,
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#9ca3af",
                }}
              >
                We build digital products that solve complex problems. Here are a few selected projects that showcase our approach to design and engineering.
              </p>
            </div>

            {/* Snapshot card */}
            <aside
              style={{
                position: "relative",
                borderRadius: 24,
                padding: 22,
                border: "1px solid rgba(148,163,184,0.45)",
                background:
                  "radial-gradient(circle at top left, rgba(56,189,248,0.14), transparent 55%), radial-gradient(circle at bottom right, rgba(34,197,94,0.16), transparent 55%), rgba(15,23,42,0.95)",
                boxShadow:
                  "0 24px 70px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,1)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.5,
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -180,
                    right: -120,
                    width: 260,
                    height: 260,
                    background:
                      "radial-gradient(circle, rgba(56,189,248,0.24), transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -200,
                    left: -160,
                    width: 280,
                    height: 280,
                    background:
                      "radial-gradient(circle, rgba(34,197,94,0.19), transparent 60%)",
                  }}
                />
              </div>

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 11px 4px 4px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,0.55)",
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.92), rgba(15,23,42,0.86))",
                    marginBottom: 14,
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: "50%",
                      background:
                        "conic-gradient(from 160deg, #22c55e, #22c55e 40deg, #38bdf8 120deg, #6366f1 220deg, #22c55e 360deg)",
                      boxShadow: "0 0 22px rgba(59,130,246,0.7)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: 0.6,
                      textTransform: "uppercase",
                      color: "#e5e7eb",
                    }}
                  >
                    Our Approach
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    marginBottom: 8,
                    color: "#f9fafb",
                  }}
                >
                  Every project is a partnership.
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#9ca3af",
                    marginBottom: 14,
                  }}
                >
                  We work closely with our clients to understand their goals and deliver solutions that matter.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    marginTop: 10,
                    marginBottom: 4,
                    flexWrap: "wrap",
                  }}
                >
                  {["Fintech", "Healthcare", "E-commerce"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        padding: "5px 9px",
                        borderRadius: 999,
                        border: "1px solid rgba(148,163,184,0.6)",
                        color: "#e5e7eb",
                        background:
                          "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.9))",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </section>

          {/* Filter Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 40,
            paddingTop: 20,
            borderTop: "1px solid rgba(31,41,55,1)"
          }}>
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '8px 20px',
                    borderRadius: 999,
                    border: isActive
                      ? '1px solid #38bdf8'
                      : '1px solid rgba(55,65,81,0.8)',
                    background: isActive
                      ? 'rgba(56,189,248,0.1)'
                      : 'rgba(15,23,42,0.6)',
                    color: isActive ? '#f8fafc' : '#94a3b8',
                    cursor: 'pointer',
                    fontSize: 13,
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: isActive ? '#38bdf8' : '#64748b',
                    boxShadow: isActive ? '0 0 8px #38bdf8' : 'none'
                  }} />
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects grid */}
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 24,
                marginBottom: 26,
              }}
            >
              <div>
                <p
                  style={{
                    fontSize: 12,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    marginBottom: 4,
                  }}
                >
                  Selected Work
                </p>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#f9fafb",
                    margin: 0,
                  }}
                >
                  {activeFilter === 'All' ? 'Recent projects we are proud of.' : `${activeFilter} Projects`}
                </h2>
              </div>

              <p
                style={{
                  maxWidth: 420,
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "#9ca3af",
                  margin: 0,
                }}
              >
                From early-stage startups to established enterprises, we help companies build better software.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="project-card-hover"
                  style={{
                    position: "relative",
                    borderRadius: 20,
                    padding: 20,
                    border: "1px solid rgba(31,41,55,0.95)",
                    background:
                      "radial-gradient(circle at top, rgba(15,23,42,0.96), rgba(15,23,42,0.98))",
                    boxShadow:
                      "0 20px 55px rgba(15,23,42,0.85), 0 0 0 1px rgba(15,23,42,1)",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.5,
                      mixBlendMode: "screen",
                      pointerEvents: "none",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: -130,
                        right: -60,
                        width: 180,
                        height: 180,
                        background:
                          index % 3 === 0
                            ? "radial-gradient(circle, rgba(56,189,248,0.22), transparent 60%)"
                            : index % 3 === 1
                              ? "radial-gradient(circle, rgba(129,140,248,0.24), transparent 60%)"
                              : "radial-gradient(circle, rgba(34,197,94,0.2), transparent 60%)",
                      }}
                    />
                  </div>

                  <div style={{ position: "relative", zIndex: 1 }}>
                    {/* Project Image */}
                    <div
                      style={{
                        width: "100%",
                        height: "180px",
                        marginBottom: "20px",
                        borderRadius: "12px",
                        overflow: "hidden",
                        border: "1px solid rgba(148,163,184,0.1)",
                        position: "relative",
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(to bottom, transparent 0%, rgba(2,6,23,0.2) 100%)",
                        }}
                      />
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 11,
                          letterSpacing: 1.2,
                          textTransform: "uppercase",
                          color: "#9ca3af",
                        }}
                      >
                        {project.label}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          padding: "3px 8px",
                          borderRadius: 999,
                          border: "1px solid rgba(148,163,184,0.5)",
                          color: "#e5e7eb",
                          background:
                            "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.9))",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#f9fafb",
                        marginBottom: 8,
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#9ca3af",
                        marginBottom: 12,
                      }}
                    >
                      {project.summary}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                        fontSize: 12,
                        color: "#d1d5db",
                      }}
                    >
                      {project.bullets.map((item) => (
                        <li
                          key={item}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 8,
                          }}
                        >
                          <span
                            style={{
                              marginTop: 4,
                              width: 4,
                              height: 4,
                              borderRadius: "999px",
                              background: "#22c55e",
                              boxShadow: "0 0 8px rgba(34,197,94,0.8)",
                            }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Engineering DNA Section */}
          <section
            style={{
              marginTop: 80,
              borderTop: "1px solid rgba(31,41,55,1)",
              paddingTop: 60,
            }}
          >
            <div style={{ marginBottom: 40 }}>
              <p
                style={{
                  fontSize: 12,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "#38bdf8",
                  marginBottom: 8,
                  fontWeight: 600,
                }}
              >
                Engineering DNA
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
                  fontWeight: 700,
                  color: "#f9fafb",
                  marginBottom: 16,
                  maxWidth: "600px",
                }}
              >
                Built for scale, security, and speed.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "#9ca3af",
                  maxWidth: "700px",
                }}
              >
                We don't just write code; we engineer resilient systems. Every project is built upon a foundation of industry-leading standards and future-proof architecture.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 24,
              }}
            >
              {[
                {
                  title: "Security by Design",
                  icon: "🛡️",
                  desc: "Zero-trust architecture, automated compliance scanning, and end-to-end encryption for data at rest and in transit.",
                  gradient: "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(56,189,248,0.02))",
                  border: "rgba(56,189,248,0.2)",
                },
                {
                  title: "Global Scalability",
                  icon: "🌍",
                  desc: "Edge-cached content delivery, serverless compute, and auto-scaling infrastructure designed to handle millions of concurrent requests.",
                  gradient: "linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.02))",
                  border: "rgba(34,197,94,0.2)",
                },
                {
                  title: "Performance First",
                  icon: "⚡",
                  desc: "Core Web Vitals optimization, intelligent bundle splitting, and sub-second latency targets for every user interaction.",
                  gradient: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(168,85,247,0.02))",
                  border: "rgba(168,85,247,0.2)",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: 32,
                    borderRadius: 24,
                    background: item.gradient,
                    border: `1px solid ${item.border}`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      marginBottom: 20,
                      filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 18,
                      fontWeight: 600,
                      color: "#f9fafb",
                      marginBottom: 12,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "#cbd5e1",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack & Pipeline Section */}
          <section
            style={{
              marginTop: 60,
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.5fr) minmax(0, 1fr)",
              gap: 32,
            }}
          >
            {/* Tech Stack */}
            <div
              style={{
                padding: 32,
                borderRadius: 24,
                background: "rgba(15,23,42,0.6)",
                border: "1px solid rgba(31,41,55,0.8)",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#f9fafb",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 10px #38bdf8" }}></span>
                Our Technology Ecosystem
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { cat: "Frontend", techs: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
                  { cat: "Backend", techs: ["Node.js", "Python", "Go", "GraphQL", "PostgreSQL", "Redis"] },
                  { cat: "DevOps", techs: ["Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions"] },
                ].map((row, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "center", gap: 20, borderBottom: idx !== 2 ? "1px solid rgba(255,255,255,0.05)" : "none", paddingBottom: idx !== 2 ? 20 : 0 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8", width: 80, textTransform: "uppercase", letterSpacing: 0.5 }}>{row.cat}</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {row.techs.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontSize: 13,
                            padding: "4px 10px",
                            borderRadius: 6,
                            background: "rgba(255,255,255,0.05)",
                            color: "#e2e8f0",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Pipeline Visual */}
            <div
              style={{
                padding: 32,
                borderRadius: 24,
                background: "linear-gradient(160deg, rgba(15,23,42,0.9), rgba(15,23,42,0.95))",
                border: "1px solid rgba(31,41,55,0.8)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div style={{ position: "absolute", top: 0, right: 0, width: "100%", height: "100%", background: "radial-gradient(circle at top right, rgba(34,197,94,0.1), transparent 50%)", pointerEvents: "none" }}></div>

              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#f9fafb",
                  marginBottom: 24,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 10px #22c55e" }}></span>
                Delivery Pipeline
              </h3>

              <div style={{ position: "relative", paddingLeft: 20 }}>
                <div style={{ position: "absolute", left: 7, top: 10, bottom: 10, width: 2, background: "rgba(255,255,255,0.1)" }}></div>

                {[
                  { step: "Code Analysis", desc: "Static analysis & security linting" },
                  { step: "Automated Testing", desc: "Unit, integration & E2E suites" },
                  { step: "Staging Preview", desc: "Ephemeral environments for QA" },
                  { step: "Production Rollout", desc: "Zero-downtime deployment" },
                ].map((item, i) => (
                  <div key={i} style={{ marginBottom: 24, position: "relative" }}>
                    <div style={{ position: "absolute", left: -17, top: 6, width: 10, height: 10, borderRadius: "50%", background: "#0f172a", border: "2px solid #22c55e" }}></div>
                    <h4 style={{ fontSize: 14, fontWeight: 600, color: "#f1f5f9", marginBottom: 2 }}>{item.step}</h4>
                    <p style={{ fontSize: 12, color: "#64748b" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
