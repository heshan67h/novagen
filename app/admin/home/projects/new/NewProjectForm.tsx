'use client';

import { createProject } from '@/app/actions/home';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { Save, Loader2, Link as LinkIcon, Image as ImageIcon, Tag, Type } from 'lucide-react';

export default function NewProjectForm({ onClose }: { onClose: () => void }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        category: '',
        tags: '',
        link: '',
        featured: false
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        startTransition(async () => {
            const res = await createProject(formData);
            if (res.success) {
                router.refresh();
                onClose();
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Type size={16} /> Title
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="Project Name"
                    />
                </div>

                {/* Category */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Tag size={16} /> Category
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="e.g. Web Development"
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
                    placeholder="Describe the project..."
                />
            </div>

            {/* Image URL */}
            <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                    <ImageIcon size={16} /> Image URL
                </label>
                <input
                    type="url"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                    placeholder="https://..."
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tags */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Tag size={16} /> Tech Stack Tags
                    </label>
                    <input
                        type="text"
                        value={formData.tags}
                        onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="React, Next.js, TypeScript (comma separated)"
                    />
                </div>

                {/* Link */}
                <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm font-medium text-slate-400">
                        <LinkIcon size={16} /> Project Link (Optional)
                    </label>
                    <input
                        type="url"
                        value={formData.link}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        className="w-full bg-[#1e293b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder-slate-600"
                        placeholder="https://..."
                    />
                </div>
            </div>

            {/* Featured Toggle */}
            <div className="flex items-center gap-3 p-4 bg-[#1e293b]/50 rounded-xl border border-white/5">
                <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="w-5 h-5 rounded border-slate-600 text-violet-600 focus:ring-violet-500 bg-slate-800"
                />
                <label htmlFor="featured" className="text-sm font-medium text-white cursor-pointer select-none">
                    Feature this project on home page?
                </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-violet-900/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                >
                    {isPending ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                    <span>Create Project</span>
                </button>
            </div>
        </form>
    );
}
