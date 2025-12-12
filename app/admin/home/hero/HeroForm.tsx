'use client';

import { useState, useTransition } from 'react';
import { updateHero } from '@/app/actions/home';
import { motion } from 'framer-motion';

interface HeroFormProps {
    initialData: {
        title: string;
        subtitle: string;
        description: string;
        ctaText: string;
    } | null;
}

export default function HeroForm({ initialData }: HeroFormProps) {
    const [data, setData] = useState({
        title: initialData?.title || '',
        subtitle: initialData?.subtitle || '',
        description: initialData?.description || '',
        ctaText: initialData?.ctaText || 'Get Started',
    });
    const [isPending, startTransition] = useTransition();
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        startTransition(async () => {
            await updateHero(data);
            setMessage('Hero section updated successfully!');
            setTimeout(() => setMessage(''), 3000);
        });
    };

    const inputStyle = "w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all";
    const labelStyle = "block text-sm font-medium text-slate-400 mb-2";

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            <div>
                <label className={labelStyle}>Main Title</label>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData({ ...data, title: e.target.value })}
                    className={inputStyle}
                    placeholder="e.g. AI-Powered Digital Solutions"
                />
            </div>

            <div>
                <label className={labelStyle}>Subtitle</label>
                <input
                    type="text"
                    value={data.subtitle}
                    onChange={(e) => setData({ ...data, subtitle: e.target.value })}
                    className={inputStyle}
                    placeholder="e.g. Next-Gen Tech"
                />
            </div>

            <div>
                <label className={labelStyle}>Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData({ ...data, description: e.target.value })}
                    className={`${inputStyle} h-32 resize-none`}
                    placeholder="Hero description..."
                />
            </div>

            <div>
                <label className={labelStyle}>CTA Button Text</label>
                <input
                    type="text"
                    value={data.ctaText}
                    onChange={(e) => setData({ ...data, ctaText: e.target.value })}
                    className={inputStyle}
                    placeholder="e.g. Get Started"
                />
            </div>

            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                    {isPending ? 'Saving...' : 'Save Changes'}
                </button>
                {message && (
                    <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-emerald-400 text-sm font-medium"
                    >
                        {message}
                    </motion.span>
                )}
            </div>
        </form>
    );
}
