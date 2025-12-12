"use client";

import { cn } from "@/lib/utils";
import {
    BarChart3,
    FileText,
    FolderOpen,
    LayoutDashboard,
    LogOut,
    Menu,
    MessageSquare,
    Settings,
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sidebarLinks = [
    {
        name: "Overview",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Projects",
        href: "/admin/projects",
        icon: FolderOpen,
    },
    {
        name: "Blog Posts",
        href: "/admin/blog",
        icon: FileText,
    },
    {
        name: "Messages",
        href: "/admin/contact",
        icon: MessageSquare,
    },
    {
        name: "Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed top-4 left-4 z-50 p-2 bg-[#0a0f23]/80 backdrop-blur-md border border-white/10 rounded-lg md:hidden text-white shadow-lg"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Overlay for mobile */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar Container */}
            <motion.aside
                className={cn(
                    "fixed top-0 left-0 z-50 h-full w-72 transition-transform duration-300 ease-in-out md:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
                style={{
                    background: 'linear-gradient(180deg, rgba(10, 15, 35, 0.98) 0%, rgba(15, 23, 42, 0.98) 100%)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '4px 0 24px rgba(0,0,0,0.2)'
                }}
            >
                <div className="flex flex-col h-full">
                    {/* Logo Section */}
                    <div className="flex items-center justify-between p-6 border-b border-white/5">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                                <span className="text-xl font-bold text-white">N</span>
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                                NovaGen
                            </span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden p-1 text-slate-400 hover:text-white transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {sidebarLinks.map((link) => {
                            const isActive = pathname === link.href;
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden border border-transparent",
                                        isActive
                                            ? "text-white bg-white/5 border-white/10"
                                            : "text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/5"
                                    )}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {isActive && (
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-500 rounded-r-full shadow-[0_0_12px_rgba(99,102,241,0.5)]" />
                                    )}
                                    <Icon
                                        className={cn(
                                            "w-5 h-5 transition-colors relative z-10",
                                            isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-indigo-300"
                                        )}
                                    />
                                    <span className="relative z-10 font-medium tracking-wide text-sm">{link.name}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User Profile / Logout */}
                    <div className="p-4 border-t border-white/5 bg-black/20">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px] shadow-lg">
                                    <div className="w-full h-full rounded-full bg-[#0a0f23] flex items-center justify-center">
                                        <span className="font-bold text-white text-xs">AD</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">Admin User</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-wider">Super Admin</p>
                                </div>
                            </div>
                            <button className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-all border border-transparent hover:border-rose-500/20">
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    );
}
