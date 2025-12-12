"use client";

import { motion } from "framer-motion";
import { Edit, FileText, MoreHorizontal, Plus, Search, Trash2, Calendar } from "lucide-react";

export default function AdminBlog() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Blog Posts</h1>
                    <p className="text-slate-400 mt-1">Manage your articles and content.</p>
                </div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0a0f23] hover:bg-white/5 text-white border border-white/10 rounded-xl transition-colors font-medium hover:border-white/20">
                    <Plus className="w-4 h-4" />
                    New Creating
                </button>
            </div>

            <div className="bg-[#0a0f23]/80 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm shadow-xl">
                <table className="w-full text-left">
                    <thead className="bg-white/[0.02] text-slate-400 text-xs uppercase tracking-wider font-semibold border-b border-white/5">
                        <tr>
                            <th className="p-5 font-medium">Post Details</th>
                            <th className="p-5 font-medium">Status</th>
                            <th className="p-5 font-medium">Published Date</th>
                            <th className="p-5 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.tr
                                key={item}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: item * 0.1 }}
                                className="hover:bg-white/[0.02] transition-colors group"
                            >
                                <td className="p-5">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-500 border border-white/5 group-hover:border-indigo-500/30 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all">
                                            <FileText className="w-5 h-5 group-hover:text-indigo-400 transition-colors" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-white group-hover:text-indigo-300 transition-colors">How to optimize Next.js {item}</h4>
                                            <p className="text-xs text-slate-500 mt-0.5">Author: Admin User</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-5">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                        Published
                                    </span>
                                </td>
                                <td className="p-5">
                                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                                        <Calendar className="w-4 h-4 text-slate-600" />
                                        Dec 12, 2025
                                    </div>
                                </td>
                                <td className="p-5 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 hover:bg-indigo-500/10 rounded-lg text-slate-400 hover:text-indigo-400 transition-colors border border-transparent hover:border-indigo-500/20">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button className="p-2 hover:bg-rose-500/10 rounded-lg text-slate-400 hover:text-rose-400 transition-colors border border-transparent hover:border-rose-500/20">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
