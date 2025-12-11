"use client";

import React from "react";

const TrustedBy = () => {
    const companies = [
        {
            name: "Nexus Systems",
            logo: (
                <svg viewBox="0 0 160 40" className="h-full w-auto fill-current">
                    <path d="M20 20L10 35H30L20 20ZM20 5L0 35H40L20 5Z" />
                    <text x="50" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif">NEXUS</text>
                </svg>
            ),
        },
        {
            name: "Vertex Dynamics",
            logo: (
                <svg viewBox="0 0 180 40" className="h-full w-auto fill-current">
                    <circle cx="20" cy="20" r="15" />
                    <path d="M20 10L25 20L20 30L15 20Z" fill="black" />
                    <text x="50" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif">VERTEX</text>
                </svg>
            ),
        },
        {
            name: "Horizon AI",
            logo: (
                <svg viewBox="0 0 160 40" className="h-full w-auto fill-current">
                    <path d="M0 20H40M20 0V40" stroke="currentColor" strokeWidth="5" />
                    <text x="50" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif">HORIZON</text>
                </svg>
            ),
        },
        {
            name: "Elevate Tech",
            logo: (
                <svg viewBox="0 0 160 40" className="h-full w-auto fill-current">
                    <path d="M10 30L20 10L30 30H10Z" />
                    <path d="M20 0L40 40H0L20 0Z" opacity="0.5" />
                    <text x="50" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif">ELEVATE</text>
                </svg>
            ),
        },
        {
            name: "Quantum",
            logo: (
                <svg viewBox="0 0 180 40" className="h-full w-auto fill-current">
                    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="4" fill="none" />
                    <circle cx="20" cy="20" r="6" fill="currentColor" />
                    <text x="50" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif">QUANTUM</text>
                </svg>
            ),
        },
        {
            name: "CyberFlow",
            logo: (
                <svg viewBox="0 0 180 40" className="h-full w-auto fill-current">
                    <rect x="0" y="10" width="20" height="20" rx="5" />
                    <rect x="25" y="10" width="20" height="20" rx="5" opacity="0.6" />
                    <text x="60" y="28" fontSize="20" fontWeight="bold" fontFamily="sans-serif">FLOW</text>
                </svg>
            ),
        },
    ];

    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Duplicate the companies array multiple times to ensure seamless scrolling on wide screens
    // 4 sets should be more than enough for most viewports
    const scrollingContent = [...companies, ...companies, ...companies, ...companies];

    if (!mounted) {
        return null;
    }

    return (
        <section className="py-12 bg-transparent overflow-hidden relative z-20">
            <div className="container mx-auto px-6 mb-10 text-center">
                <p className="text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">
                    Trusted by Innovative Companies
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-8">
                <div
                    className="relative flex overflow-x-hidden group"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}
                >
                    <div className="animate-marquee whitespace-nowrap flex gap-12 md:gap-24 items-center py-4">
                        {scrollingContent.map((company, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                            >
                                <div className="h-9 md:h-14 w-auto text-white/80 hover:text-white transition-colors">
                                    {company.logo}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        .animate-marquee {
          animation: marquee 60s linear infinite;
          /* Important: Ensure the width is fit for content so animation calculates correctly */
          width: max-content;
        }
        
        .animate-marquee:hover {
            animation-play-state: paused;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          /* We move by 50% because we doubled the content effectively (original set + duplicates) 
             Actually, to be perfect, it should be -25% if we have 4 sets and want to loop 1 set worth?
             Standard technique: Move by -50% if we have 2 distinct identical halves. 
             If we have 4 sets: [...A, ...A, ...A, ...A]
             Moving by -25% (one A set length) is the smoothest provided existing check.
             But cleaner simple CSS loop: 
             If we have X width content, and we want to loop, we often use 2 identical big chunks.
             Let's try translateX(-50%) on a container that has 2 copies of the FULL set.
             But here 'scrollingContent' is 4x companies. 
             Let's rely on a simpler calc: -25% implies moving one 'set' length.
          */
          100% { transform: translateX(-50%); } 
        }
      `}</style>
        </section>
    );
};

export default TrustedBy;
