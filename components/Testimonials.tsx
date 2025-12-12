'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Hardcoded fallback for layout/design purpose if empty
// But ideally we just render what we have.
// We will map DB fields:
// clientName -> name
// clientRole, clientCompany -> role (combined)
// content -> content
// clientAvatar -> image

interface TestimonialProperty {
    id: number;
    clientName: string;
    clientRole: string;
    clientCompany: string;
    content: string;
    clientAvatar?: string;
    rating: number; // in case we added this, else default 5
}

interface TestimonialsProps {
    testimonials?: TestimonialProperty[];
}

const DEFAULT_TESTIMONIALS = [
    {
        id: 1,
        clientName: "Sarah Jenkins",
        clientRole: "CTO",
        clientCompany: "FinTech Solutions",
        content: "NovaGen transformed our legacy system into a state-of-the-art platform. Their team's technical expertise and dedication to quality are unmatched.",
        clientAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5
    },
    {
        id: 2,
        clientName: "Michael Chen",
        clientRole: "Founder",
        clientCompany: "HealthPlus",
        content: "The mobile app they built for us exceeded all expectations. User engagement has tripled since launch. Highly recommend their services!",
        clientAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5
    },
    {
        id: 3,
        clientName: "David Smith",
        clientRole: "Director",
        clientCompany: "RetailGiant",
        content: "Professional, transparent, and incredibly skilled. They delivered our e-commerce platform on time and within budget.",
        clientAvatar: "https://randomuser.me/api/portraits/men/86.jpg",
        rating: 5
    }
];

export default function Testimonials({ testimonials = [] }: TestimonialsProps) {
    // Fallback to default if no DB testimonials
    const dataSource = (testimonials && testimonials.length > 0) ? testimonials : DEFAULT_TESTIMONIALS;

    // Map DB data to UI data
    const testimonialsToDisplay = dataSource.map(t => ({
        id: t.id,
        name: t.clientName,
        role: `${t.clientRole}, ${t.clientCompany}`,
        image: t.clientAvatar || '/images/default-avatar.png', // Fallback image
        content: t.content,
        rating: 5
    }));

    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '8px 16px',
                            borderRadius: '100px',
                            background: 'linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(168,85,247,0.1) 100%)',
                            border: '1px solid rgba(56,189,248,0.3)',
                            marginBottom: '24px',
                            boxShadow: '0 0 20px rgba(56,189,248,0.2)'
                        }}>
                            <span style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
                                boxShadow: '0 0 12px rgba(56,189,248,0.8)',
                            }} />
                            <span style={{
                                background: 'linear-gradient(135deg, #38bdf8 0%, #a855f7 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                            }}>Client Feedback</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            What Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Clients Say</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Don&apos;t just take our word for it. Here&apos;s what industry leaders have to say about working with NovaGen.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonialsToDisplay.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                                border: '1px solid rgba(148,163,184,0.3)',
                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                            }}
                            className="rounded-3xl p-8 relative hover:-translate-y-2 transition-all duration-300 group backdrop-blur-sm"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-6xl text-blue-500/10 font-serif leading-none group-hover:text-blue-500/20 transition-colors select-none">
                                &quot;
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current drop-shadow-[0_0_8px_rgba(234,179,8,0.3)]" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-8 relative z-10 text-lg">
                                &quot;{testimonial.content}&quot;
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-700/50 pt-6 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500/30 ring-2 ring-blue-500/10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=0f172a&color=38bdf8`;
                                        }}
                                    />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm tracking-wide">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-blue-400 text-xs uppercase tracking-wider font-semibold mt-0.5">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
