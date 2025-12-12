
import { getProjects } from '@/app/actions/home';
import ProjectsListClient from './ProjectsListClient';
import { Layout, Star } from 'lucide-react';

export default async function AdminProjectsPage() {
    const projects = await getProjects();
    const totalProjects = projects.length;
    const featuredProjects = projects.filter(p => p.featured).length;

    return (
        <div className="space-y-8 w-full p-8">
            {/* Header / Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Layout size={100} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-400 font-medium mb-1">Total Projects</p>
                        <h2 className="text-4xl font-bold text-white tracking-tight">{totalProjects}</h2>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Star size={100} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-violet-400 font-medium mb-1">Featured Projects</p>
                        <h2 className="text-4xl font-bold text-white tracking-tight">{featuredProjects}</h2>
                    </div>
                </div>
            </div>

            <ProjectsListClient initialProjects={projects} />
        </div>
    );
}
