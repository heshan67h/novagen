import { getHero } from '@/app/actions/home';
import HeroForm from './HeroForm';
import { Sparkles } from 'lucide-react';

export default async function AdminHeroPage() {
    const heroData = await getHero();

    return (
        <div className="p-8 pb-20 md:p-10 max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-indigo-400" />
                    Hero Section
                </h1>
                <p className="text-slate-400">Manage the main headline and typing text of the home page.</p>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-slate-900/40 backdrop-blur-md shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />
                <div className="relative z-10">
                    <HeroForm initialData={heroData} />
                </div>
            </div>
        </div>
    );
}
