"use client";

import { motion } from "framer-motion";
import { Edit, MoreVertical, Plus, Search, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function AdminProjects() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Projects</h1>
                    <p className="text-slate-400 mt-1">Manage your portfolio showcase.</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white rounded-xl transition-all font-medium shadow-lg shadow-indigo-500/20 border border-white/10 group">
                    <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
                    Add Project
                </button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-4 bg-[#0a0f23]/80 p-1.5 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        className="w-full bg-transparent border-none rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-0 transition-colors"
                    />
                </div>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5].map((item) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: item * 0.1 }}
                        className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2"
                        style={{
                            background: `radial-gradient(circle at top right, rgba(255,255,255,0.03), transparent 60%), rgba(10, 15, 35, 0.8)`,
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            boxShadow: '0 4px 20px -5px rgba(0,0,0,0.3)'
                        }}
                    >
                        {/* Image Placeholder */}
                        <div className="aspect-video bg-slate-800 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f23] via-transparent to-transparent opacity-80" />

                            {/* Status Badge */}
                            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#0a0f23]/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></span>
                                <span className="text-[10px] font-bold text-slate-200 uppercase tracking-wider">Published</span>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-5">
                                <p className="text-xs font-semibold text-indigo-400 mb-1 uppercase tracking-wide">Web Development</p>
                                <h3 className="text-lg font-bold text-white leading-tight">Project Title {item}</h3>
                            </div>
                        </div>

                        <div className="p-4 flex items-center justify-between border-t border-white/5 bg-white/[0.01]">
                            <button className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors">
                                <ExternalLink className="w-3.5 h-3.5" />
                                View Live
                            </button>

                            <div className="flex items-center gap-1">
                                <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-indigo-400 transition-colors">
                                    <Edit className="w-4 h-4" />
                                </button>
                                <button className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-rose-400 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
