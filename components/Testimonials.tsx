"use client";

import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CTO, FinTech Solutions",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            content: "NovaGen transformed our legacy system into a state-of-the-art platform. Their team's technical expertise and dedication to quality are unmatched.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Founder, HealthPlus",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            content: "The mobile app they built for us exceeded all expectations. User engagement has tripled since launch. Highly recommend their services!",
            rating: 5
        },
        {
            name: "David Smith",
            role: "Director, RetailGiant",
            image: "https://randomuser.me/api/portraits/men/86.jpg",
            content: "Professional, transparent, and incredibly skilled. They delivered our e-commerce platform on time and within budget.",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">


            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        What Our Clients Say
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                                border: '1px solid rgba(148,163,184,0.5)',
                                borderRadius: '24px',
                                boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                                padding: '32px',
                                transition: 'all 0.3s ease',
                                position: 'relative'
                            }}
                            className="hover:-translate-y-2 transition-transform duration-300 group"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 text-6xl text-blue-500/10 font-serif leading-none group-hover:text-blue-500/20 transition-colors">
                                "
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-slate-700/50 pt-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full border border-blue-500/30 object-cover"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
