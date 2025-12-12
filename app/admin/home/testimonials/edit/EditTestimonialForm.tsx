'use client';

import { updateTestimonial } from '@/app/actions/home';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Save, Loader2, User, Building, Quote, Image as ImageIcon } from 'lucide-react';

export default function EditTestimonialForm({ testimonial, onClose }: { testimonial: any, onClose: () => void }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        name: testimonial.name,
        role: testimonial.role,
        company: testimonial.company,
        content: testimonial.content,
        avatar: testimonial.avatar || ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            const res = await updateTestimonial(testimonial.id, formData);
            if (res.success) {
                router.refresh();
                onClose();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <User size={16} /> Client Name
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="e.g. John Doe"
                    />
                </div>

                {/* Role */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Building size={16} /> Role
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="e.g. CEO"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Building size={16} /> Company
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="e.g. TechCorp Inc."
                    />
                </div>

                {/* Avatar */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <ImageIcon size={16} /> Avatar URL (Optional)
                    </label>
                    <input
                        type="url"
                        value={formData.avatar}
                        onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="https://..."
                    />
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                    <Quote size={16} /> Testimonial Content
                </label>
                <textarea
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600 min-h-[120px]"
                    placeholder="What did the client say?"
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
                    <span>Save Changes</span>
                </button>
            </div>
        </form>
    );
}
