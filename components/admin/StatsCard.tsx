import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatsCardProps {
    title: string;
    value: string;
    change?: string;
    trend?: "up" | "down" | "neutral";
    icon: LucideIcon;
    color?: "indigo" | "purple" | "emerald" | "rose";
    delay?: number;
}

const colorMap = {
    indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/20", glow: "group-hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)]" },
    purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", glow: "group-hover:shadow-[0_0_20px_-5px_rgba(168,85,247,0.2)]" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", glow: "group-hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.2)]" },
    rose: { bg: "bg-rose-500/10", text: "text-rose-400", border: "border-rose-500/20", glow: "group-hover:shadow-[0_0_20px_-5px_rgba(244,63,94,0.2)]" },
};

export default function StatsCard({
    title,
    value,
    change,
    trend = "neutral",
    icon: Icon,
    color = "indigo",
    delay = 0,
}: StatsCardProps) {
    const styles = colorMap[color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "relative p-6 rounded-2xl border transition-all duration-300 group overflow-hidden",
                "bg-[#0a0f23] border-white/5", // Stricter dark background
                "hover:-translate-y-1 hover:border-white/10",
                styles.glow
            )}
        >
            {/* Subtle top highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

            <div className="relative z-10 flex items-start justify-between mb-2">
                <div className={cn("p-2 rounded-lg bg-white/5 border border-white/5", styles.text)}>
                    <Icon className="w-5 h-5" />
                </div>
                {change && (
                    <div className="flex items-center gap-1.5">
                        <span
                            className={cn(
                                "text-xs font-bold px-1.5 py-0.5 rounded",
                                trend === "up" && "text-emerald-400 bg-emerald-500/10",
                                trend === "down" && "text-rose-400 bg-rose-500/10",
                                trend === "neutral" && "text-slate-400 bg-slate-500/10"
                            )}
                        >
                            {change}
                        </span>
                    </div>
                )}
            </div>

            <div className="mt-4">
                <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
                <p className="text-sm font-medium text-slate-500 mt-1">{title}</p>
            </div>
        </motion.div>
    );
}
