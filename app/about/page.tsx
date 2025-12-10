"use client";

import React from "react";
import Navbar from "@/components/Navbar";

export default function AboutPage(): JSX.Element {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #111827 0%, #020617 55%, #000 100%)",
        color: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      }}
    >
      <Navbar />

      <main>
        {/* Top gradient overlay */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              "radial-gradient(circle at 0% 0%, rgba(56,189,248,0.14) 0, transparent 45%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.16) 0, transparent 50%)",
            opacity: 0.9,
          }}
        />

        <div
          style={{
            width: "93%",
            maxWidth: "1800px",
            margin: "0 auto",
            padding: "120px 2rem 96px 2rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Crumb + badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
              fontSize: "0.8rem",
              color: "rgba(148,163,184,0.9)",
            }}
          >
            <span style={{ opacity: 0.7 }}>Home</span>
            <span style={{ opacity: 0.4 }}>/</span>
            <span style={{ opacity: 1 }}>About</span>
            <span
              style={{
                marginLeft: "auto",
                padding: "6px 14px",
                borderRadius: "999px",
                border: "1px solid rgba(148,163,184,0.35)",
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%)",
                color: "rgba(248,250,252,0.9)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: "0.7rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "999px",
                  background: "#22c55e",
                  boxShadow: "0 0 0 6px rgba(34,197,94,0.35)",
                }}
              />
              Software Agency
            </span>
          </div>

          {/* Hero row */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 2.1fr) minmax(0, 1.4fr)",
              gap: "32px",
              alignItems: "flex-start",
              marginBottom: "72px",
            }}
          >
            {/* Left: main copy */}
            <div>
              <p
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(148,163,184,0.9)",
                  marginBottom: "16px",
                }}
              >
                Inside NovaGen
              </p>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 3.4vw, 3.1rem)",
                  lineHeight: 1.1,
                  fontWeight: 700,
                  letterSpacing: "-0.04em",
                  marginBottom: "18px",
                  color: "#FFFFFF",
                }}
              >
                We are a product
                <br />
                engineering studio helping
                <br />
                teams ship faster.
              </h1>
              <p
                style={{
                  color: "rgba(148,163,184,0.95)",
                  fontSize: "0.98rem",
                  lineHeight: 1.8,
                  maxWidth: "36rem",
                }}
              >
                NovaGen is a boutique engineering partner for teams that want fewer meetings and more
                shipped releases. We blend strategy, design, and development to ship reliable
                products that your customers actually enjoy using.
              </p>
            </div>

            {/* Right: snapshot card */}
            <aside
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
                    How we work with you
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(226,232,240,0.9)",
                      maxWidth: "16rem",
                      lineHeight: 1.7,
                    }}
                  >
                    From first workshop to production launch, we plug into your roadmap, shape the
                    right scope, and deliver in small, verifiable increments instead of big risky
                    bets.
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
                  Production Ready
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
                  Clear timelines, weekly demos, and direct access to the people actually building
                  your product.
                </p>
                <p style={{ margin: 0 }}>
                  We behave like an embedded product teamowning outcomes, not just deliverables.
                </p>
              </div>

              <div className="mobile-hidden"
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
                    value: "5+",
                    label: "Core specialists",
                  },
                  {
                    value: "10+",
                    label: "Shipped products",
                  },
                  {
                    value: "2",
                    label: "Week sprints",
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
                        fontSize: "0.75rem",
                        color: "rgba(148,163,184,0.95)",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </section>

          {/* Story & mission row */}
          <section
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)",
              gap: 32,
              padding: "32px 0 40px 0",
              borderTop: "1px solid rgba(15,23,42,0.9)",
              borderBottom: "1px solid rgba(15,23,42,0.9)",
            }}
          >
            {/* Left story */}
            <div>
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(148,163,184,0.9)",
                  marginBottom: 10,
                }}
              >
                Our story so far
              </p>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  marginBottom: 14,
                }}
              >
                Building calm, predictable software for modern teams.
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(148,163,184,0.92)",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                NovaGen began as a small group of engineers frustrated by fragile launches, endless
                rewrites, and business teams left in the dark.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(148,163,184,0.9)",
                  lineHeight: 1.8,
                }}
              >
                Today we help founders and product leaders design, build, and operate software that
                can grow with themfrom the first release to the tenth major version.
              </p>

              {/* Story chips */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 12,
                  marginTop: 22,
                }}
              >
                {[
                  { title: "Home base", value: "Colombo, Sri Lanka" },
                  { title: "Focus", value: "Product-led delivery" },
                  { title: "Mindset", value: "Long-term partnerships" },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: 14,
                      border: "1px solid rgba(30,64,175,0.7)",
                      background:
                        "radial-gradient(circle at top, rgba(37,99,235,0.26) 0, rgba(15,23,42,0.96) 55%)",
                      padding: "10px 14px 11px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(148,163,184,0.9)",
                        marginBottom: 4,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(226,232,240,0.95)",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Why we exist */}
            <div
              style={{
                borderRadius: 20,
                border: "1px solid rgba(30,64,175,0.8)",
                background:
                  "radial-gradient(circle at 0 0, rgba(59,130,246,0.18) 0, transparent 55%), rgba(15,23,42,0.98)",
                padding: "18px 20px 18px 20px",
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(148,163,184,0.9)",
                  marginBottom: 8,
                }}
              >
                What we believe
              </p>
              <p
                style={{
                  fontSize: "0.94rem",
                  color: "rgba(226,232,240,0.95)",
                  lineHeight: 1.8,
                  marginBottom: 14,
                }}
              >
                We believe software should reduce stress, not add to it. Great products come from
                small, accountable teams who understand both the code and the business.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 10,
                  fontSize: "0.9rem",
                  color: "rgba(148,163,184,0.98)",
                }}
              >
                {[
                  "Opinionated, modern stacks instead of brittle legacy technology.",
                  "Tight feedback loops with real users, not endless internal debates.",
                  "A calm pace of delivery so quality and security never become an afterthought.",
                ].map((point, i) => (
                  <li key={i} style={{ display: "flex", gap: 10 }}>
                    <span
                      style={{
                        marginTop: 4,
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: "#38bdf8",
                        boxShadow: "0 0 0 4px rgba(56,189,248,0.35)",
                        flexShrink: 0,
                      }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Core values */}
          <section style={{ paddingTop: 48 }}>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(148,163,184,0.9)",
                marginBottom: 10,
              }}
            >
              How we think
            </p>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              The principles that shape every engagement, from discovery to long-term support.
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(148,163,184,0.9)",
                maxWidth: "38rem",
                lineHeight: 1.7,
                marginBottom: 26,
              }}
            >
              We use these principles to decide what to build, what to say no to, and how to show up
              for every client.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: 18,
              }}
            >
              {[
                {
                  title: "Practical innovation",
                  desc: "We introduce new technology only when it makes your product faster, safer, or easier to use.",
                },
                {
                  title: "Radical transparency",
                  desc: "You see the roadmap, the risks, and the trade-offsnot just the highlight reel.",
                },
                {
                  title: "Quality by default",
                  desc: "Reviews, automation, and observability baked into the workflownot bolted on later.",
                },
                {
                  title: "Client impact",
                  desc: "We measure success in shipped value: better metrics, happier teams, and fewer fire drills.",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(30,64,175,0.8)",
                    background:
                      "radial-gradient(circle at top left, rgba(59,130,246,0.32) 0, rgba(15,23,42,0.98) 55%)",
                    padding: "18px 18px 20px 18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 999,
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(248,250,252,0.9) 0, rgba(191,219,254,0.8) 40%, rgba(37,99,235,0.9) 100%)",
                      boxShadow: "0 10px 25px rgba(15,23,42,0.9)",
                    }}
                  />
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(148,163,184,0.96)",
                      lineHeight: 1.7,
                    }}
                  >
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
