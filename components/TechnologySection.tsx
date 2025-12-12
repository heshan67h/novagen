'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Database, Cloud, Smartphone, Monitor, Server, Palette, Code, Terminal, Globe, Cpu, Shield } from 'lucide-react';

const techCategories = [
    {
        id: 'frontend',
        title: 'Frontend Development',
        icon: <Monitor className="w-6 h-6" />,
        description: "Creating stunning, responsive user interfaces with modern frameworks and cutting-edge design systems.",
        technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vue.js', 'Framer'],
        color: 'from-blue-500 to-indigo-500',
        glow: 'rgba(59, 130, 246, 0.5)'
    },
    {
        id: 'backend',
        title: 'Backend & APIs',
        icon: <Server className="w-6 h-6" />,
        description: "Building robust, scalable server-side solutions with secure RESTful and GraphQL APIs.",
        technologies: ['Node.js', 'Python', 'NestJS', 'Express', 'GraphQL', 'FastAPI'],
        color: 'from-emerald-500 to-teal-500',
        glow: 'rgba(16, 185, 129, 0.5)'
    },
    {
        id: 'database',
        title: 'Database & Storage',
        icon: <Database className="w-6 h-6" />,
        description: "Implementing reliable data persistence with optimized queries and efficient caching strategies.",
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Supabase', 'Firebase'],
        color: 'from-cyan-500 to-blue-500',
        glow: 'rgba(6, 182, 212, 0.5)'
    },
    {
        id: 'cloud',
        title: 'Cloud & DevOps',
        icon: <Cloud className="w-6 h-6" />,
        description: "Deploying and managing infrastructure with CI/CD pipelines and container orchestration.",
        technologies: ['AWS', 'Docker', 'Kubernetes', 'Vercel', 'GitHub Actions', 'Terraform'],
        color: 'from-orange-500 to-amber-500',
        glow: 'rgba(249, 115, 22, 0.5)'
    },
    {
        id: 'mobile',
        title: 'Mobile Development',
        icon: <Smartphone className="w-6 h-6" />,
        description: "Crafting native-quality cross-platform mobile applications for iOS and Android ecosystems.",
        technologies: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin', 'Firebase'],
        color: 'from-pink-500 to-rose-500',
        glow: 'rgba(236, 72, 153, 0.5)'
    },
    {
        id: 'design',
        title: 'Design & Prototyping',
        icon: <Palette className="w-6 h-6" />,
        description: "Creating beautiful, user-centric designs with interactive prototypes and design systems.",
        technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Framer', 'Sketch'],
        color: 'from-purple-500 to-violet-500',
        glow: 'rgba(139, 92, 246, 0.5)'
    }
];

export default function TechnologySection() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="technologies">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-6 backdrop-blur-sm">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                <Code size={14} /> Our Technology Arsenal
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Technologies We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Master</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            We leverage cutting-edge technologies to build scalable, high-performance applications that deliver exceptional results.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {techCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 relative group overflow-hidden"
                            style={{
                                boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 40px 80px -20px rgba(0,0,0,0.5)`
                            }}
                        >
                            {/* Hover Gradient Border */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${category.glow}, transparent 40%)`
                                }}
                            />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300`}>
                                    {category.icon}
                                </div>

                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                                        {category.title}
                                    </h3>
                                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 group-hover:border-slate-600 transition-colors">
                                        {category.technologies.length} Technologies
                                    </span>
                                </div>


                                <p className="text-slate-400 text-sm leading-relaxed mb-6 h-[40px]">
                                    {category.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {category.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/50 group-hover:bg-slate-700/80 group-hover:text-white transition-all duration-300 flex items-center gap-1.5"
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`}></span>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
