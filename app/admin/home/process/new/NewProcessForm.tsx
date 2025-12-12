'use client';

import { createProcessStep } from '@/app/actions/home';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Save, Loader2, Type, ListOrdered } from 'lucide-react';

export default function NewProcessForm({ onClose }: { onClose: () => void }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        order: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            const res = await createProcessStep(formData);
            if (res.success) {
                router.refresh();
                onClose();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Title */}
                <div className="col-span-2 space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Type size={16} /> Step Title
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="e.g. Discovery Call"
                    />
                </div>

                {/* Order */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <ListOrdered size={16} /> Step Order (Optional)
                    </label>
                    <input
                        type="number"
                        value={formData.order}
                        onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="Auto"
                    />
                </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-slate-400">Description</label>
                <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600 min-h-[100px]"
                    placeholder="Describe what happens in this step..."
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                >
                    {isPending ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                    <span>Create Step</span>
                </button>
            </div>
        </form>
    );
}
