'use client';

import { createService } from '@/app/actions/home';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { ArrowLeft, Save, Loader2, Smartphone, Laptop, Globe, Palette, Code, Layers, Zap, Server, Database, Cloud, Shield, Cpu } from 'lucide-react';
import Link from 'next/link';

// Available icons for selection
const AVAILABLE_ICONS = [
    { name: 'Smartphone', component: Smartphone },
    { name: 'Laptop', component: Laptop },
    { name: 'Globe', component: Globe },
    { name: 'Palette', component: Palette },
    { name: 'Code', component: Code },
    { name: 'Layers', component: Layers },
    { name: 'Zap', component: Zap },
    { name: 'Server', component: Server },
    { name: 'Database', component: Database },
    { name: 'Cloud', component: Cloud },
    { name: 'Shield', component: Shield },
    { name: 'Cpu', component: Cpu },
];

export default function NewServicePage() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        icon: 'Zap' // Default icon name
    });

    const SelectedIcon = AVAILABLE_ICONS.find(i => i.name === formData.icon)?.component || Code;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            const res = await createService(formData);
            if (res.success) {
                router.push('/admin/home/services');
                router.refresh(); // Ensure list is updated
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/home/services" className="p-2 hover:bg-white/5 rounded-lg text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                <div>
                    <h1 className="text-2xl font-bold text-white">Add New Service</h1>
                    <p className="text-slate-400 text-sm">Create a new service offering for your home page</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Form */}
                <div className="lg:col-span-2 space-y-6">
                    <form onSubmit={handleSubmit} className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 shadow-xl space-y-8">

                        {/* Icon Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-400 mb-4">Service Icon</label>
                            <div className="grid grid-cols-6 gap-3">
                                {AVAILABLE_ICONS.map(({ name, component: Icon }) => (
                                    <button
                                        key={name}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, icon: name })}
                                        className={`p-3 rounded-xl border transition-all flex items-center justify-center ${formData.icon === name
                                            ? 'bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/20 scale-105'
                                            : 'bg-[#1e293b] border-white/5 text-slate-400 hover:bg-white/5 hover:text-white hover:border-white/10'
                                            }`}
                                        title={name}
                                    >
                                        <Icon size={24} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Title Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-400">Service Title</label>
                            <input
                                type="text"
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600 transition-all font-medium"
                                placeholder="e.g. Cloud Migration"
                            />
                        </div>

                        {/* Description Input */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-slate-400">Description</label>
                            <textarea
                                required
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600 min-h-[120px] transition-all"
                                placeholder="Briefly describe what this service offers..."
                            />
                            <p className="text-xs text-slate-500 text-right">
                                {formData.description.length} characters
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 flex justify-end">
                            <button
                                type="submit"
                                disabled={isPending}
                                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {isPending ? <Loader2 size={20} className="animate-spin" /> : <Save size={20} />}
                                <span>Create Service</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Column: Live Preview */}
                <div className="lg:col-span-1">
                    <div className="sticky top-8">
                        <label className="block text-sm font-medium text-slate-400 mb-4">Live Preview</label>

                        {/* Preview Card */}
                        <div
                            style={{
                                background: 'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                                border: '1px solid rgba(148,163,184,0.5)',
                                borderRadius: '24px',
                                boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                                padding: '28px 24px',
                                position: 'relative',
                            }}
                        >
                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '18px'
                            }}>
                                <SelectedIcon size={24} color="white" />
                            </div>
                            <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>
                                {formData.title || 'New Service Title'}
                            </h3>
                            <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                                {formData.description || 'Description will appear here...'}
                            </p>
                        </div>

                        <div className="mt-6 p-4 bg-violet-500/5 rounded-xl border border-violet-500/10 text-xs text-violet-400 leading-relaxed">
                            <span className="font-semibold block mb-1">💡 Professional Tip</span>
                            Use concise, action-oriented titles and clear descriptions to maximize engagement.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
