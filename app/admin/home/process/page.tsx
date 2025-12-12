
import { getProcessSteps } from '@/app/actions/home';
import ProcessListClient from './ProcessListClient';
import { GitCommit, Clock } from 'lucide-react';

export default async function AdminProcessPage() {
    const steps = await getProcessSteps();
    const totalSteps = steps.length;

    return (
        <div className="space-y-8 max-w-7xl mx-auto p-8">
            {/* Header / Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <GitCommit size={100} />
                    </div>
                    <div className="relative z-10">
                        <p className="text-slate-400 font-medium mb-1">Process Steps</p>
                        <h2 className="text-4xl font-bold text-white tracking-tight">{totalSteps}</h2>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-white/10 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Clock size={100} />
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-white">Workflow Timeline</h3>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Clients love transparency. Define your 3-5 step process clearly to set expectations right from the start.
                        </p>
                    </div>
                </div>
            </div>

            <ProcessListClient initialSteps={steps} />
        </div>
    );
}
