"use client";

import Navbar from "@/components/Navbar";

export default function Services() {
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
              Services
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
              Production-ready delivery
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
              Services designed
              <br />
              to ship real products
              <br />
              not just slides.
            </h1>
            <p
              style={{
                maxWidth: 620,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#9ca3af",
              }}
            >
              We combine product strategy, UX, and engineering into focused service lines so you
              always know where we are, what&apos;s next, and how it connects to your roadmap.
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
                  Engagement overview
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
                Choose a track that matches your stage.
              </h2>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "#9ca3af",
                  marginBottom: 14,
                }}
              >
                Whether you&apos;re validating an idea or scaling a product, we keep the scope lean,
                the releases small, and the feedback real.
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
                {["Discovery sprint", "MVP build", "Scale & optimize"].map((tag) => (
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

        {/* Service grid */}
        <section
          style={{
            borderTop: "1px solid rgba(31,41,55,1)",
            paddingTop: 40,
          }}
        >
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
                Service tracks
              </p>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#f9fafb",
                  margin: 0,
                }}
              >
                One team, three ways to work together.
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
              Every engagement has a clear owner, shared metrics, and visible progress. No black
              boxes, no mystery timelines.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {[
              {
                label: "01",
                title: "Product discovery sprint",
                summary:
                  "In two weeks we turn loose ideas into a validated product outline, low-fidelity flows, and a realistic roadmap.",
                bullets: [
                  "Stakeholder and user interviews",
                  "User journeys & low-fi prototypes",
                  "Tech approach and simple delivery plan",
                ],
              },
              {
                label: "02",
                title: "MVP design & build",
                summary:
                  "We design, build, and launch the smallest version of your product that still feels premium to your users.",
                bullets: [
                  "Modern web or mobile stack",
                  "Design system and production UI",
                  "Launch support and rollout plan",
                ],
              },
              {
                label: "03",
                title: "Product growth & reliability",
                summary:
                  "For live products, we add features, improve performance, and put the right monitoring in place.",
                bullets: [
                  "Backlog shaping with your team",
                  "Performance and reliability focus",
                  "Dashboards, alerts, and observability",
                ],
              },
            ].map((service, index) => (
              <div
                key={service.title}
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
                        index === 0
                          ? "radial-gradient(circle, rgba(56,189,248,0.22), transparent 60%)"
                          : index === 1
                            ? "radial-gradient(circle, rgba(129,140,248,0.24), transparent 60%)"
                            : "radial-gradient(circle, rgba(34,197,94,0.2), transparent 60%)",
                    }}
                  />
                </div>

                <div style={{ position: "relative" }}>
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
                      {service.label}
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
                      {index === 0
                        ? "Best for new ideas"
                        : index === 1
                          ? "Best for first launch"
                          : "Best for live products"}
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
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#9ca3af",
                      marginBottom: 12,
                    }}
                  >
                    {service.summary}
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
                    {service.bullets.map((item) => (
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

        {/* Delivery highlights section */}
        <section
          style={{
            marginTop: 52,
            borderTop: "1px solid rgba(31,41,55,1)",
            paddingTop: 40,
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1.3fr)",
              gap: 28,
              alignItems: "stretch",
            }}
          >
            {/* Process narrative */}
            <div
              style={{
                borderRadius: 22,
                padding: 22,
                border: "1px solid rgba(31,41,55,0.95)",
                background:
                  "radial-gradient(circle at top left, rgba(56,189,248,0.12), transparent 55%), radial-gradient(circle at bottom right, rgba(34,197,94,0.14), transparent 55%), rgba(15,23,42,0.97)",
                boxShadow:
                  "0 24px 65px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: 0.55,
                  mixBlendMode: "screen",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -140,
                    left: -80,
                    width: 220,
                    height: 220,
                    background:
                      "radial-gradient(circle, rgba(56,189,248,0.22), transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: -160,
                    right: -90,
                    width: 230,
                    height: 230,
                    background:
                      "radial-gradient(circle, rgba(129,140,248,0.25), transparent 60%)",
                  }}
                />
              </div>

              <div style={{ position: "relative" }}>
                <p
                  style={{
                    fontSize: 12,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "#9ca3af",
                    marginBottom: 4,
                  }}
                >
                  Delivery approach
                </p>
                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#f9fafb",
                    marginBottom: 10,
                  }}
                >
                  A calm, predictable way to ship complex products.
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#9ca3af",
                    marginBottom: 16,
                    maxWidth: 560,
                  }}
                >
                  We don&apos;t disappear for months and come back with surprises. Each phase has a
                  clear owner, a visible board, and a demo that your team can react to.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: 14,
                  }}
                >
                  {[
                    {
                      title: "Insight",
                      desc: "Workshops, user inputs, and system review to frame the problem properly.",
                    },
                    {
                      title: "Build",
                      desc: "Short sprints, integrated QA, and production-ready code every iteration.",
                    },
                    {
                      title: "Operate",
                      desc: "Monitoring, playbooks, and small releases instead of risky big-bang launches.",
                    },
                  ].map((step) => (
                    <div key={step.title}>
                      <p
                        style={{
                          fontSize: 11,
                          letterSpacing: 0.9,
                          textTransform: "uppercase",
                          color: "#9ca3af",
                          marginBottom: 4,
                        }}
                      >
                        {step.title}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          lineHeight: 1.6,
                          color: "#e5e7eb",
                        }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual service collage */}
            <div
              style={{
                display: "grid",
                gridTemplateRows: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
                gap: 14,
              }}
            >
              <div
                style={{
                  borderRadius: 20,
                  border: "1px solid rgba(31,41,55,0.95)",
                  background:
                    "radial-gradient(circle at top left, rgba(56,189,248,0.3), rgba(15,23,42,1))",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.35,
                    backgroundImage:
                      "radial-gradient(circle at 0 0, rgba(15,23,42,0.1) 0, transparent 55%), radial-gradient(circle at 100% 0, rgba(15,23,42,0.1) 0, transparent 55%)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    padding: 18,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: 12,
                        letterSpacing: 0.9,
                        textTransform: "uppercase",
                        color: "#e5e7eb",
                        marginBottom: 6,
                      }}
                    >
                      Interface preview
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: "#e5e7eb",
                        maxWidth: 260,
                      }}
                    >
                      High-fidelity UI with proper states for loading, errors, and empty screens.
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: 10,
                      borderRadius: 14,
                      padding: 10,
                      background:
                        "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.9))",
                      border: "1px solid rgba(15,23,42,0.9)",
                      display: "grid",
                      gridTemplateColumns: "2.1fr 1.2fr",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 10,
                        background:
                          "linear-gradient(135deg, rgba(15,23,42,1), rgba(15,23,42,0.96))",
                        border: "1px solid rgba(31,41,55,1)",
                        padding: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          height: 6,
                          borderRadius: 999,
                          background:
                            "linear-gradient(90deg, rgba(148,163,184,0.55), rgba(148,163,184,0.2))",
                          marginBottom: 2,
                        }}
                      />
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                          gap: 6,
                        }}
                      >
                        {["Signups", "Active", "Churn"].map((label) => (
                          <div
                            key={label}
                            style={{
                              borderRadius: 8,
                              padding: 6,
                              background:
                                "radial-gradient(circle at top, rgba(15,23,42,1), rgba(15,23,42,0.96))",
                              border: "1px solid rgba(31,41,55,1)",
                            }}
                          >
                            <p
                              style={{
                                fontSize: 10,
                                color: "#9ca3af",
                                marginBottom: 2,
                              }}
                            >
                              {label}
                            </p>
                            <p
                              style={{
                                fontSize: 13,
                                color: "#e5e7eb",
                              }}
                            >
                              {label === "Churn" ? "2.1%" : label === "Active" ? "3.4k" : "1.8k"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        borderRadius: 11,
                        background:
                          "radial-gradient(circle at top, rgba(34,197,94,0.2), rgba(15,23,42,1))",
                        border: "1px solid rgba(22,163,74,0.9)",
                        padding: 10,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 10,
                          textTransform: "uppercase",
                          letterSpacing: 0.8,
                          color: "#bbf7d0",
                          marginBottom: 4,
                        }}
                      >
                        Release window
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#ecfdf5",
                          marginBottom: 6,
                        }}
                      >
                        Next deployment in ~3 hours.
                      </p>
                      <div
                        style={{
                          height: 4,
                          borderRadius: 999,
                          background:
                            "linear-gradient(90deg, rgba(34,197,94,0.3), rgba(34,197,94,0.9))",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  borderRadius: 20,
                  border: "1px solid rgba(31,41,55,0.95)",
                  background:
                    "radial-gradient(circle at bottom, rgba(15,23,42,1), rgba(15,23,42,0.96))",
                  padding: 16,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: 12,
                        letterSpacing: 0.9,
                        textTransform: "uppercase",
                        color: "#9ca3af",
                        marginBottom: 3,
                      }}
                    >
                      Team snapshot
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        color: "#e5e7eb",
                      }}
                    >
                      Small, senior squads plugged directly into your Slack and tooling.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                    }}
                  >
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          border: "1px solid rgba(15,23,42,1)",
                          background:
                            "radial-gradient(circle at top, rgba(148,163,184,0.22), rgba(15,23,42,1))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          color: "#e5e7eb",
                          boxShadow: "0 0 12px rgba(148,163,184,0.5)",
                        }}
                      >
                        {i === 0 ? "PM" : i === 1 ? "UX" : i === 2 ? "FE" : "BE"}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 14,
                    fontSize: 11,
                    color: "#9ca3af",
                  }}
                >
                  <div>
                    <p style={{ marginBottom: 2 }}>Weekly standup</p>
                    <p style={{ color: "#e5e7eb" }}>30 min, async notes, shared board.</p>
                  </div>
                  <div>
                    <p style={{ marginBottom: 2 }}>Demo cadence</p>
                    <p style={{ color: "#e5e7eb" }}>Live walkthroughs every other Friday.</p>
                  </div>
                  <div>
                    <p style={{ marginBottom: 2 }}>Support window</p>
                    <p style={{ color: "#e5e7eb" }}>Hands-on help during key launches.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scenario pairs section */}
        <section
          style={{
            marginTop: 52,
            borderTop: "1px solid rgba(15,23,42,1)",
            paddingTop: 40,
            paddingBottom: 8,
          }}
        >
          {[0, 1].map((rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1.3fr)",
                gap: 26,
                alignItems: "stretch",
                marginBottom: rowIndex === 0 ? 32 : 0,
              }}
            >
              {/* Text column */}
              <div
                style={{
                  order: rowIndex === 0 ? 0 : 1,
                  borderRadius: 24,
                  padding: 24,
                  border: "1px solid rgba(31,41,55,1)",
                  background:
                    "radial-gradient(circle at top left, rgba(15,23,42,0.98), rgba(15,23,42,1))",
                  boxShadow:
                    "0 26px 65px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "4px 12px",
                    borderRadius: 999,
                    border: "1px solid rgba(251,146,60,0.28)",
                    background:
                      "linear-gradient(135deg, rgba(30,64,175,0.9), rgba(30,64,175,0.92))",
                    marginBottom: 12,
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
                      letterSpacing: 1,
                      textTransform: "uppercase",
                      color: "#fed7aa",
                    }}
                  >
                    {rowIndex === 0
                      ? "Product platforms"
                      : "Internal tools & operations"}
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#f9fafb",
                    marginBottom: 6,
                  }}
                >
                  {rowIndex === 0
                    ? "Multi-platform experiences from a single codebase."
                    : "Custom systems that feel better than spreadsheets."}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#9ca3af",
                    marginBottom: 14,
                    maxWidth: 560,
                  }}
                >
                  {rowIndex === 0
                    ? "Ship web, mobile, and desktop apps that share the same foundations but still feel native on every device. One product, many touchpoints."
                    : "Replace scattered sheets and email approvals with secure, purpose-built tools that match how your team actually works."}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    fontSize: 13,
                    color: "#e5e7eb",
                  }}
                >
                  {(rowIndex === 0
                    ? [
                        "Web, mobile, and desktop apps powered by a single shared stack.",
                        "Offline-friendly flows for field and on-the-go teams.",
                        "Design systems that keep every screen on-brand and consistent.",
                        "Release tooling for safe, coordinated multi-platform launches.",
                      ]
                    : [
                        "Role-based access for staff, managers, and leadership.",
                        "Real-time dashboards instead of static exports.",
                        "Automations for approvals, notifications, and reports.",
                        "Secure hosting with audit trails and backups by default.",
                      ]
                  ).map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 9,
                      }}
                    >
                      <span
                        style={{
                          marginTop: 5,
                          width: 5,
                          height: 5,
                          borderRadius: "999px",
                          background: "#22c55e",
                          boxShadow: "0 0 8px rgba(34,197,94,0.85)",
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: 14,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "5px 11px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,0.5)",
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.98), rgba(15,23,42,0.92))",
                    fontSize: 11,
                    color: "#e5e7eb",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "999px",
                      background: "#22c55e",
                    }}
                  />
                  {rowIndex === 0 ? "Web + Mobile + Desktop" : "Automated • Secure"}
                </div>
              </div>

              {/* Visual column */}
              <div
                style={{
                  order: rowIndex === 0 ? 1 : 0,
                  borderRadius: 26,
                  border: "1px solid rgba(31,41,55,1)",
                  background:
                    rowIndex === 0
                      ? "radial-gradient(circle at top left, rgba(56,189,248,0.22), rgba(15,23,42,1))"
                      : "radial-gradient(circle at bottom, rgba(34,197,94,0.26), rgba(15,23,42,1))",
                  boxShadow:
                    "0 26px 70px rgba(15,23,42,0.95), 0 0 0 1px rgba(15,23,42,1)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.35,
                    backgroundImage:
                      "radial-gradient(circle at 0 0, rgba(15,23,42,0.1) 0, transparent 55%), radial-gradient(circle at 100% 0, rgba(15,23,42,0.14) 0, transparent 55%)",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    padding: 18,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    height: "100%",
                  }}
                >
                  {/* Top bar */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      {["#38bdf8", "#22c55e", "#4ade80"].map((c) => (
                        <span
                          key={c}
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "999px",
                            background: c,
                          }}
                        />
                      ))}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: 6,
                        borderRadius: 999,
                        marginLeft: 10,
                        background:
                          "linear-gradient(90deg, rgba(15,23,42,0.7), rgba(148,163,184,0.5))",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 11,
                        color: "#e5e7eb",
                      }}
                    >
                      {rowIndex === 0 ? "Product dashboard" : "Ops control"}
                    </span>
                  </div>

                  {/* Screen content */}
                  <div
                    style={{
                      flex: 1,
                      display: "grid",
                      gridTemplateColumns: "minmax(0, 1.7fr) minmax(0, 1.1fr)",
                      gap: 10,
                    }}
                  >
                    <div
                      style={{
                        borderRadius: 14,
                        background:
                          "linear-gradient(135deg, rgba(15,23,42,1), rgba(15,23,42,0.96))",
                        border: "1px solid rgba(31,41,55,1)",
                        padding: 10,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      {/* Fake chart area */}
                      <div
                        style={{
                          height: 72,
                          borderRadius: 10,
                          background:
                            "radial-gradient(circle at top, rgba(56,189,248,0.22), rgba(15,23,42,1))",
                          padding: 6,
                          display: "flex",
                          alignItems: "flex-end",
                          gap: 3,
                          marginBottom: 4,
                        }}
                      >
                        {[24, 40, 32, 56, 44, 68, 60].map((h, i) => (
                          <div
                            key={i}
                            style={{
                              flex: 1,
                              height: `${h}%`,
                              borderRadius: 999,
                              background:
                                "linear-gradient(180deg, rgba(191,219,254,0.95), rgba(56,189,248,0.2))",
                              opacity: i === 6 ? 1 : 0.65,
                            }}
                          />
                        ))}
                      </div>
                      {/* Metric tiles */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                          gap: 6,
                        }}
                      >
                        {["MRR", "Active", "Conversion"].map((label) => (
                          <div
                            key={label}
                            style={{
                              borderRadius: 8,
                              padding: 6,
                              background:
                                "radial-gradient(circle at top, rgba(15,23,42,1), rgba(15,23,42,0.96))",
                              border: "1px solid rgba(31,41,55,1)",
                            }}
                          >
                            <p
                              style={{
                                fontSize: 10,
                                color: "#9ca3af",
                                marginBottom: 2,
                              }}
                            >
                              {label}
                            </p>
                            <p
                              style={{
                                fontSize: 13,
                                color: "#e5e7eb",
                              }}
                            >
                              {label === "MRR" ? "$48k" : label === "Active" ? "3.2k" : "5.4%"}
                            </p>
                            <p
                              style={{
                                fontSize: 10,
                                color: "#22c55e",
                              }}
                            >
                              {label === "MRR" ? "+18% MoM" : label === "Active" ? "+240" : "+0.8 pts"}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          borderRadius: 12,
                          padding: 9,
                          background:
                            "radial-gradient(circle at top, rgba(56,189,248,0.22), rgba(15,23,42,1))",
                          border: "1px solid rgba(59,130,246,0.9)",
                        }}
                      >
                        <p
                          style={{
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: 0.8,
                            color: "#bfdbfe",
                            marginBottom: 2,
                          }}
                        >
                          {rowIndex === 0 ? "Release health" : "Ops alerts"}
                        </p>
                        <div
                          style={{
                            height: 5,
                            borderRadius: 999,
                            background:
                              "linear-gradient(90deg, rgba(56,189,248,0.3), rgba(56,189,248,0.9))",
                          }}
                        />
                      </div>

                      <div
                        style={{
                          borderRadius: 12,
                          padding: 9,
                          background:
                            "radial-gradient(circle at bottom, rgba(34,197,94,0.24), rgba(15,23,42,1))",
                          border: "1px solid rgba(22,163,74,0.95)",
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 10,
                            textTransform: "uppercase",
                            letterSpacing: 0.8,
                            color: "#bbf7d0",
                          }}
                        >
                          Next action
                        </p>
                        <p
                          style={{
                            fontSize: 12,
                            color: "#ecfdf5",
                          }}
                        >
                          {rowIndex === 0
                            ? "Iterate on onboarding flow A/B test."
                            : "Roll out new approval queue to APAC team."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Guarantee section */}
        <section
          style={{
            marginTop: 56,
            borderTop: "1px solid rgba(15,23,42,1)",
            paddingTop: 40,
            paddingBottom: 32,
          }}
        >
          <div
            style={{
              maxWidth: 820,
              margin: "0 auto 26px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 12,
                letterSpacing: 1.3,
                textTransform: "uppercase",
                color: "#38bdf8",
                marginBottom: 6,
              }}
            >
              The NovaGen guarantee
            </p>
            <h2
              style={{
                fontSize: 22,
                fontWeight: 600,
                color: "#f9fafb",
                marginBottom: 6,
              }}
            >
              Why product teams trust us with their releases.
            </h2>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: "#9ca3af",
                margin: 0,
              }}
            >
              Whether you&apos;re starting from zero or scaling a live platform, our promise is the
              same: we treat your product like our own and ship work we&apos;re proud to sign.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {[
              {
                title: "Production-ready quality",
                desc: "Code reviews, automation, and monitoring baked in from day one.",
              },
              {
                title: "Realistic timelines",
                desc: "No big surprises. Clear scopes, honest estimates, and visible progress.",
              },
              {
                title: "Modern, stable stacks",
                desc: "Tools and frameworks that feel current without being experiments.",
              },
              {
                title: "Partnership mindset",
                desc: "We plan for the long term so today&apos;s decisions age well.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: 22,
                  padding: 18,
                  border: "1px solid rgba(15,23,42,1)",
                  background:
                    "radial-gradient(circle at top, rgba(15,23,42,0.98), rgba(15,23,42,1))",
                  boxShadow:
                    "0 18px 55px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at top, #38bdf8, #22c55e)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 18px rgba(56,189,248,0.9)",
                  }}
                >
                  <span
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "rgba(15,23,42,0.95)",
                    }}
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#f9fafb",
                      marginBottom: 4,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: "#9ca3af",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA band */}
        <section
          style={{
            marginTop: 40,
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              borderRadius: 32,
              padding: 26,
              border: "1px solid rgba(15,23,42,1)",
              background:
                "radial-gradient(circle at top left, rgba(59,130,246,0.4), rgba(15,23,42,1)), radial-gradient(circle at bottom right, rgba(234,88,12,0.6), rgba(15,23,42,1))",
              boxShadow:
                "0 32px 90px rgba(15,23,42,1), 0 0 0 1px rgba(15,23,42,1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 26,
            }}
          >
            <div style={{ maxWidth: 540 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "4px 12px 4px 4px",
                  borderRadius: 999,
                  border: "1px solid rgba(15,23,42,0.9)",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.92))",
                  marginBottom: 10,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background:
                      "conic-gradient(from 140deg, #22c55e, #22c55e 40deg, #38bdf8 120deg, #6366f1 220deg, #22c55e 360deg)",
                    boxShadow: "0 0 22px rgba(56,189,248,0.9)",
                  }}
                />
                <span
                  style={{
                    fontSize: 11,
                    letterSpacing: 0.9,
                    textTransform: "uppercase",
                    color: "#e5e7eb",
                  }}
                >
                  Let&apos;s ship your next release
                </span>
              </div>

              <h2
                style={{
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#f9fafb",
                  marginBottom: 6,
                }}
              >
                Ready to turn your idea into a production-ready product?
              </h2>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "#e5e7eb",
                  marginBottom: 14,
                }}
              >
                Share where you are today, and we&apos;ll respond with a clear outline, timeline, and
                next stepsno long forms, no pressure.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  fontSize: 11,
                }}
              >
                {["Dedicated Sri Lankan engineering team", "Transparent pricing & weekly demos"].map(
                  (chip) => (
                    <span
                      key={chip}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "5px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(148,163,184,0.55)",
                        background:
                          "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.9))",
                        color: "#e5e7eb",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "999px",
                          background: "#22c55e",
                        }}
                      />
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 10,
                minWidth: 260,
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  justifyContent: "flex-end",
                }}
              >
                <button
                  style={{
                    padding: "9px 18px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#0b1120",
                    background:
                      "linear-gradient(135deg, #22c55e, #38bdf8)",
                    boxShadow:
                      "0 12px 30px rgba(56,189,248,0.6), 0 0 0 1px rgba(15,23,42,0.95)",
                  }}
                >
                  Book a free call
                </button>
                <button
                  style={{
                    padding: "9px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(148,163,184,0.7)",
                    cursor: "pointer",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#e5e7eb",
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.9))",
                    boxShadow: "0 0 0 1px rgba(15,23,42,1)",
                  }}
                >
                  Talk to us now
                </button>
              </div>
              <p
                style={{
                  fontSize: 11,
                  color: "#e5e7eb",
                  textAlign: "right",
                  maxWidth: 260,
                }}
              >
                We usually reply within one business day with suggested scope, timeline, and ballpark
                budget.
              </p>
            </div>
          </div>
        </section>
      </div>
      </main>
    </div>
  );
}
