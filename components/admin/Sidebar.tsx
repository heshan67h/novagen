"use client";

import { cn } from "@/lib/utils";
import {
    Briefcase, // Added
    ChevronDown,
    ChevronRight,
    GitBranch, // Added
    Globe,
    Layout, // Added
    LayoutDashboard,
    LogOut,
    Menu,
    Settings,
    Users, // Added
    X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the structure for the sidebar menus
type SubMenuItem = {
    name: string;
    href: string;
};

type MenuItem = {
    name: string;
    icon?: any;
    href?: string; // If it's a direct link
    submenu?: SubMenuItem[]; // If it has dropdowns
};

const sidebarMenu: MenuItem[] = [
    {
        name: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
    },
    {
        name: "Home Page",
        icon: Globe,
        submenu: [
            { name: "Hero Section", href: "/admin/home/hero" },
            { name: "Services", href: "/admin/home/services" }, // Placeholder
            { name: "Projects", href: "/admin/home/projects" }, // Placeholder
            { name: "Process", href: "/admin/home/process" },   // Placeholder
            { name: "Testimonials", href: "/admin/home/testimonials" }, // Placeholder
            { name: "Contact", href: "/admin/home/contact" },   // Placeholder
        ],
    },
    {
        name: "About Page",
        icon: Globe,
        submenu: [
            { name: "Our Story", href: "/about#story" },
            { name: "Mission", href: "/about#mission" },
            { name: "Values", href: "/about#values" },
            { name: "Team", href: "/about#team" },
        ],
    },
    {
        name: "Services Page",
        icon: Globe,
        submenu: [
            { name: "Discovery", href: "/services#discovery" },
            { name: "MVP Build", href: "/services#mvp" },
            { name: "Scale & Growth", href: "/services#growth" },
            { name: "Process", href: "/services#delivery" },
        ],
    },
    {
        name: "Projects Page",
        icon: Globe,
        submenu: [
            { name: "All Projects", href: "/projects" },
            { name: "Featured", href: "/projects#featured" },
            { name: "Case Studies", href: "/projects#case-studies" },
        ],
    },
    {
        name: "Blog Page",
        icon: Globe,
        submenu: [
            { name: "Latest Posts", href: "/blog" },
            { name: "Technical", href: "/blog?cat=tech" },
            { name: "Design", href: "/blog?cat=design" },
            { name: "Company", href: "/blog?cat=company" },
        ],
    },
    {
        name: "Team Page",
        icon: Globe,
        submenu: [
            { name: "Leadership", href: "/team#leadership" },
            { name: "Engineering", href: "/team#engineering" },
            { name: "Designers", href: "/team#design" },
        ],
    },
    {
        name: "Contact Page",
        icon: Globe,
        submenu: [
            { name: "Contact Form", href: "/contact#form" },
            { name: "Locations", href: "/contact#locations" },
            { name: "Social Media", href: "/contact#socials" },
        ],
    },
    {
        name: 'Services',
        href: '/admin/home/services',
        icon: Layout,
    },
    {
        name: 'Projects',
        href: '/admin/home/projects',
        icon: Briefcase,
    },
    {
        name: 'Testimonials',
        href: '/admin/home/testimonials',
        icon: Users,
    },
    {
        name: 'Process',
        href: '/admin/home/process',
        icon: GitBranch,
    },
    {
        name: "Global Settings",
        href: "/admin/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // State to track which menu is expanded
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const toggleMenu = (name: string) => {
        if (expandedMenu === name) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(name);
        }
    };

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
                    background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                    borderRight: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '4px 0 24px rgba(15,23,42,0.5)'
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
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
                        {sidebarMenu.map((item) => {
                            const Icon = item.icon;
                            const isExpanded = expandedMenu === item.name;
                            const isActive = item.href === pathname || item.submenu?.some(sub => sub.href === pathname);

                            return (
                                <div key={item.name} className="mb-1">
                                    {item.submenu ? (
                                        // DROPDOWN MENU ITEM
                                        <div>
                                            <button
                                                onClick={() => toggleMenu(item.name)}
                                                className={cn(
                                                    "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group border border-transparent",
                                                    isExpanded || isActive
                                                        ? "text-white bg-white/5 border-white/10"
                                                        : "text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/5"
                                                )}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon className={cn("w-5 h-5", (isActive || isExpanded) ? "text-indigo-400" : "text-slate-500")} />
                                                    <span className="font-medium text-sm">{item.name}</span>
                                                </div>
                                                {isExpanded ? (
                                                    <ChevronDown className="w-4 h-4 text-slate-500" />
                                                ) : (
                                                    <ChevronRight className="w-4 h-4 text-slate-500" />
                                                )}
                                            </button>

                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-11 pr-2 py-2 space-y-1">
                                                            {item.submenu.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    href={sub.href}
                                                                    target={sub.href.startsWith('/admin') ? undefined : "_blank"}
                                                                    className="block px-3 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/5"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        // DIRECT LINK ITEM
                                        <Link
                                            href={item.href!}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group border border-transparent",
                                                pathname === item.href
                                                    ? "text-white bg-white/5 border-white/10"
                                                    : "text-slate-400 hover:text-white hover:bg-white/5 hover:border-white/5"
                                            )}
                                        >
                                            <Icon className={cn("w-5 h-5", pathname === item.href ? "text-indigo-400" : "text-slate-500")} />
                                            <span className="font-medium text-sm">{item.name}</span>
                                        </Link>
                                    )}
                                </div>
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
                            <button
                                onClick={async () => {
                                    await fetch('/api/auth/logout', { method: 'POST' });
                                    window.location.href = '/login';
                                }}
                                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-xl transition-all border border-transparent hover:border-rose-500/20"
                            >
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
