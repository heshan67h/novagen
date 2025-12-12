"use client";

import { cn } from "@/lib/utils";
import {
    Bell,
    CheckCircle,
    Briefcase,
    FileText,
    MessageSquare,
    Eye,
    MoreHorizontal,
    Search,
    ArrowUpRight,
    ArrowDownRight,
    RefreshCw,
    LogOut,
    TrendingUp,
    Download,
    Hash,
    Shield,
    Plus,
    Settings,
    UserPlus,
    Mail,
    Zap,
    Globe,
    PenTool,
    Smartphone,
    Cpu
} from "lucide-react";
import { motion } from "framer-motion";

// Service Card Style Definition (Extracted from Home Page)
const cardStyle = {
    background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
    border: '1px solid rgba(255,255,255,0.2)', // White border as requested
    boxShadow: '0 4px 20px rgba(15,23,42,0.5)', // Adjusted shadow for dashboard context
};

const iconBoxStyle = {
    background: 'linear-gradient(135deg, rgba(15,23,42,0.9) 0%, rgba(15,23,42,0.6) 100%)',
    border: '1px solid rgba(148,163,184,0.3)',
};

export default function AdminDashboard() {
    return (
        <div className="h-full flex flex-col gap-4">
            {/* HEADER */}
            <div className="flex-none flex items-center justify-between pb-2 border-b border-white/5">
                <h1 className="text-xl font-bold text-white tracking-tight flex items-center gap-3">
                    Novagen Dashboard
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/20 uppercase tracking-widest">
                        Pro
                    </span>
                </h1>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full bg-[#0d1226] border border-white/5 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors placeholder:text-slate-600"
                        />
                    </div>
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <RefreshCw className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors relative">
                        <Bell className="w-4 h-4" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-[#0a0f23]" />
                    </button>
                    <button className="bg-gradient-to-r from-[#0a1852] to-[#2563eb] hover:shadow-lg hover:shadow-blue-900/20 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all border border-white/10">
                        Back to Site
                    </button>
                </div>
            </div>

            {/* ROW 1: LARGE STATS (KPIs) */}
            <div className="flex-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <BigStatCard title="Total Projects" value="12" change="+3 New" changeLabel="this month" icon={Briefcase} />
                <BigStatCard title="Published Articles" value="24" change="+2 New" changeLabel="this week" icon={FileText} />
                <BigStatCard title="New Inquiries" value="5" change="+5 Unread" changeLabel="awaiting reply" icon={MessageSquare} />
                <BigStatCard title="Total Views" value="12.5K" change="+12.5%" changeLabel="vs last month" icon={Eye} trend="up" />
            </div>

            {/* ROW 2: MINI STATS (Operational) */}
            <div className="flex-none grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                <MiniStatCard label="Draft Projects" value="2" icon={PenTool} />
                <MiniStatCard label="Pending Reviews" value="3" icon={CheckCircle} />
                <MiniStatCard label="Subscribers" value="156" icon={Mail} />
                <MiniStatCard label="Today's Traffic" value="840" icon={TrendingUp} />
                <MiniStatCard label="Active Now" value="14" icon={Globe} />
                <MiniStatCard label="Server Load" value="24%" icon={Cpu} />
            </div>

            {/* ROW 3: CHARTS (Analytics) */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Chart 1: Traffic Growth (Line) */}
                <div style={cardStyle} className="rounded-2xl p-5 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                    <h3 className="text-sm font-bold text-white mb-4">Traffic Growth</h3>
                    <div className="flex-1 w-full relative flex items-end px-2 gap-1 opacity-80">
                        {/* Mock Line Chart */}
                        <svg className="absolute inset-x-0 bottom-0 h-full w-full pointer-events-none" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path d="M0,150 Q100,140 150,100 T250,20 L250,150 L0,150 Z" fill="url(#growthGradient)" />
                            <path d="M0,150 Q100,140 150,100 T250,20" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        {/* Axis labels mocked */}
                        <div className="absolute bottom-0 left-0 w-full flex justify-between text-[10px] text-slate-400 pt-2 border-t border-white/5 font-medium">
                            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
                        </div>
                    </div>
                </div>

                {/* Chart 2: Project Categories (Donut) */}
                <div style={cardStyle} className="rounded-2xl p-5 flex flex-col items-center justify-center relative group hover:border-white/20 transition-all duration-300">
                    <h3 className="absolute top-5 left-5 text-sm font-bold text-white">Project Types</h3>
                    <div className="relative w-32 h-32 mt-4">
                        {/* CSS Donut Chart approximation */}
                        <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                            {/* Web 45% */}
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="45 55" strokeDashoffset="0" />
                            {/* Mobile 30% */}
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="30 70" strokeDashoffset="-45" />
                            {/* Design 25% */}
                            <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="25 75" strokeDashoffset="-75" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-xl font-bold text-white">12</span>
                            <span className="text-[10px] text-slate-400 font-medium">Total</span>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3 justify-center text-[10px]">
                        <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" /> Web</span>
                        <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(139,92,246,0.6)]" /> Mobile</span>
                        <span className="flex items-center gap-1.5 text-slate-300"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" /> Design</span>
                    </div>
                </div>

                {/* Chart 3: Client Engagement (Bar) */}
                <div style={cardStyle} className="rounded-2xl p-5 flex flex-col group hover:border-white/20 transition-all duration-300">
                    <h3 className="text-sm font-bold text-white mb-4">Engagement</h3>
                    <div className="flex-1 flex items-end justify-between px-2 gap-2">
                        {[40, 60, 30, 80, 50, 90, 45].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    className={cn(
                                        "w-full rounded-t-sm opacity-80 group-hover:opacity-100 transition-opacity",
                                        i % 2 === 0 ? "bg-[#8b5cf6]" : "bg-[#3b82f6]"
                                    )}
                                />
                                <span className="text-[10px] text-slate-400 text-center font-medium">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-4 mt-2 text-[10px]">
                        <span className="flex items-center gap-1.5 text-slate-400"><span className="w-2 h-2 rounded bg-[#8b5cf6]" /> Views</span>
                        <span className="flex items-center gap-1.5 text-slate-400"><span className="w-2 h-2 rounded bg-[#3b82f6]" /> Clicks</span>
                    </div>
                </div>
            </div>

            {/* ROW 4: BOTTOM (Recent Inquiries & Actions) */}
            <div className="flex-none h-48 grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Recent Inquiries List */}
                <div style={cardStyle} className="lg:col-span-2 rounded-2xl p-5 flex flex-col hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-bold text-white">Recent Inquiries (5)</h3>
                        <button className="text-[10px] text-blue-400 hover:text-white font-bold uppercase tracking-wide transition-colors">View All</button>
                    </div>
                    <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                        {[
                            { name: "Sarah Wilson", subject: "E-commerce Project Quote", time: "2m ago", status: "New" },
                            { name: "TechCorp Inc.", subject: "Partnership Proposal", time: "1h ago", status: "Read" },
                            { name: "Mike Johnson", subject: "Re: Mobile App Design", time: "3h ago", status: "Replied" },
                            { name: "Anna Smith", subject: "Portfolio Inquiry", time: "1d ago", status: "New" },
                        ].map((msg, i) => (
                            <div key={i} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-white/5 transition-all cursor-pointer border border-transparent hover:border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1e293b] to-[#334155] border border-white/10 flex items-center justify-center text-xs font-bold text-white uppercase shadow-inner">
                                        {msg.name.substring(0, 2)}
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-xs font-bold text-white truncate group-hover:text-blue-400 transition-colors">{msg.subject}</h4>
                                        <p className="text-[10px] text-slate-400 truncate">{msg.name} • {msg.time}</p>
                                    </div>
                                </div>
                                <span className={cn("text-[10px] px-2.5 py-1 rounded-full font-bold border",
                                    msg.status === 'New' && "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
                                    msg.status === 'Read' && "bg-slate-500/10 text-slate-400 border-slate-500/20",
                                    msg.status === 'Replied' && "bg-blue-500/10 text-blue-400 border-blue-500/20",
                                )}>
                                    {msg.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div style={cardStyle} className="rounded-2xl p-5 flex flex-col hover:border-white/20 transition-all duration-300">
                    <h3 className="text-sm font-bold text-white mb-3">Quick Actions</h3>
                    <div className="flex-1 flex flex-col gap-2">
                        <button className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 text-left transition-all group">
                            <div style={iconBoxStyle} className="p-1.5 rounded-lg flex items-center justify-center">
                                <Briefcase className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Add Project</span>
                        </button>
                        <button className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 text-left transition-all group">
                            <div style={iconBoxStyle} className="p-1.5 rounded-lg flex items-center justify-center">
                                <FileText className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Write Article</span>
                        </button>
                        <button className="flex items-center gap-3 w-full p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-white/10 text-left transition-all group">
                            <div style={iconBoxStyle} className="p-1.5 rounded-lg flex items-center justify-center">
                                <Mail className="w-4 h-4 text-purple-400 group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-sm font-medium text-slate-300 group-hover:text-white">Check Inbox</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function BigStatCard({ title, value, change, changeLabel, trend = "up", icon: Icon }: any) {
    return (
        <div
            style={cardStyle}
            className="p-5 rounded-2xl flex flex-col justify-between hover:-translate-y-1 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
        >
            <div className="flex justify-between items-start z-10">
                <div>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide">{title}</p>
                    <h3 className="text-3xl font-bold text-white mt-3 tracking-tight">{value}</h3>
                </div>
                <div style={iconBoxStyle} className="p-3 rounded-xl shadow-lg group-hover:shadow-blue-500/20 transition-all">
                    <Icon className="w-5 h-5 text-white" />
                </div>
            </div>
            <div className="mt-4 flex items-center gap-2 z-10">
                <span className={cn("text-xs font-bold px-1.5 py-0.5 rounded",
                    trend === 'down' ? "text-rose-400 bg-rose-500/10" : "text-emerald-400 bg-emerald-500/10"
                )}>
                    {change}
                </span>
                <span className="text-[10px] text-slate-500 font-medium">{changeLabel}</span>
            </div>
        </div>
    )
}

function MiniStatCard({ label, value, icon: Icon }: any) {
    return (
        <div
            style={cardStyle}
            className="p-3.5 rounded-2xl flex items-center gap-3 hover:-translate-y-0.5 hover:border-white/20 transition-all duration-300"
        >
            <div style={iconBoxStyle} className="p-2 rounded-lg">
                <Icon className="w-4 h-4 text-white" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-white leading-none">{value}</h4>
                <p className="text-[10px] text-slate-400 font-medium mt-1.5">{label}</p>
            </div>
        </div>
    )
}
