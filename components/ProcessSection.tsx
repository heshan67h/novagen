'use client';

import React from 'react';
import { motion } from 'framer-motion';

const gradients = [
    'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
];

interface ProcessStepProperty {
    id: number;
    title: string;
    description: string;
    order: number;
}

interface ProcessSectionProps {
    steps?: ProcessStepProperty[];
}

const DEFAULT_STEPS = [
    {
        id: 1,
        title: "Discovery & Strategy",
        description: "We dive deep into your goals, analyze requirements, and map out a strategic roadmap for success.",
        order: 1
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Our designers craft intuitive, stunning interfaces that ensure exceptional user experiences.",
        order: 2
    },
    {
        id: 3,
        title: "Development",
        description: "We build robust, scalable solutions using cutting-edge technologies and best coding practices.",
        order: 3
    },
    {
        id: 4,
        title: "Launch & Support",
        description: "Seamless deployment and ongoing maintenance to keep your digital product performing at its peak.",
        order: 4
    }
];

export default function ProcessSection({ steps = [] }: ProcessSectionProps) {
    // Fallback to default if no DB steps
    const dataSource = (steps && steps.length > 0) ? steps : DEFAULT_STEPS;

    // Sort steps by order just in case
    const stepsToDisplay = [...dataSource].sort((a, b) => a.order - b.order);

    return (
        <section className="process-section relative py-20 overflow-hidden" id="process">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        A streamlined, transparent workspace designed to deliver excellence at every stage of development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20" />

                    {stepsToDisplay.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="relative group perspective"
                        >
                            <div style={{
                                background: 'radial-gradient(circle at top left, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.95) 100%)',
                                border: '1px solid rgba(148,163,184,0.1)',
                                boxShadow: '0 10px 40px -10px rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(10px)',
                            }} className="h-full rounded-2xl p-8 relative z-10 transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.15)] overflow-hidden">

                                {/* Number Background */}
                                <div className="absolute -right-4 -top-4 text-9xl font-bold text-slate-800/20 select-none group-hover:text-blue-500/5 transition-colors duration-500 font-mono">
                                    0{index + 1}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon/Number Badge */}
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl font-bold text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                                        style={{ background: gradients[index % gradients.length] }}
                                    >
                                        {index + 1}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {step.title}
                                    </h3>

                                    <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at center, rgba(59,130,246,0.15) 0%, transparent 70%)`
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
