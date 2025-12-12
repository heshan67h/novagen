'use client';

import { BarChart3, CheckCircle2, LayoutGrid, Zap } from 'lucide-react';

interface ServiceStatsProps {
    totalServices: number;
    activeServices: number;
    contentScore: number;
}

export default function ServiceStats({ totalServices, activeServices, contentScore }: ServiceStatsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Services Card */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-xl group hover:border-blue-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <LayoutGrid size={80} />
                </div>
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                        <LayoutGrid size={24} />
                    </div>
                    <div className="flex items-center gap-1 text-xs font-semibold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                        <Zap size={12} fill="currentColor" />
                        <span>Live</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-slate-400 text-sm font-medium mb-1">Total Services</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-white tracking-tight">{totalServices}</span>
                        <span className="text-slate-500 text-sm">active items</span>
                    </div>
                </div>
            </div>

            {/* Content Health Score (Progress) */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-xl group hover:border-purple-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BarChart3 size={80} />
                </div>
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                        <BarChart3 size={24} />
                    </div>
                    <div className="text-right">
                        <span className="block text-2xl font-bold text-white">{contentScore}%</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-slate-400 text-sm font-medium mb-3">Content Optimization</h3>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 mb-2 overflow-hidden">
                        <div
                            className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${contentScore}%` }}
                        />
                    </div>
                    <p className="text-xs text-slate-500">Based on description length & icon usage</p>
                </div>
            </div>

            {/* System Status */}
            <div className="relative overflow-hidden bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-xl group hover:border-emerald-500/30 transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <CheckCircle2 size={80} />
                </div>
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                        <CheckCircle2 size={24} />
                    </div>
                </div>
                <div>
                    <h3 className="text-slate-400 text-sm font-medium mb-1">System Status</h3>
                    <div className="mt-2 text-white font-medium flex items-center gap-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        All Systems Operational
                    </div>
                    <p className="text-xs text-slate-500 mt-2">Last synced: Just now</p>
                </div>
            </div>
        </div>
    );
}
