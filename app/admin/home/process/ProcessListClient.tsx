'use client';

import { useState, useTransition } from 'react';
import { deleteProcessStep } from '@/app/actions/home';
import { Pencil, Trash2, Plus, ArrowDown, GitCommit } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import EditProcessForm from './edit/EditProcessForm';
import NewProcessForm from './new/NewProcessForm';

export default function ProcessListClient({ initialSteps }: { initialSteps: any[] }) {
    const [steps, setSteps] = useState(initialSteps);
    const [isPending, startTransition] = useTransition();
    const [editingStep, setEditingStep] = useState<any>(null);
    const [isCreating, setIsCreating] = useState(false);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this step?')) return;

        startTransition(async () => {
            const result = await deleteProcessStep(id);
            if (result.success) {
                setSteps(steps.filter(s => s.id !== id));
            }
        });
    };

    return (
        <div className="space-y-8">
            {/* Header Actions */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">Process Timeline</h2>
                <button
                    onClick={() => setIsCreating(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors font-medium shadow-lg shadow-violet-900/20"
                >
                    <Plus size={18} />
                    Add Step
                </button>
            </div>

            {/* Empty State */}
            {steps.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-white/5 border-dashed">
                    <GitCommit className="mx-auto text-slate-600 w-16 h-16 mb-4" />
                    <h3 className="text-slate-300 font-medium text-lg">No Process Steps</h3>
                    <p className="text-slate-500 mb-6">Define your workflow to show clients how you work.</p>
                    <button
                        onClick={() => setIsCreating(true)}
                        className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                    >
                        Add First Step
                    </button>
                </div>
            ) : (
                /* Process Timeline Grid - Vertical List with Connectors */
                <div className="relative max-w-3xl mx-auto space-y-4 before:absolute before:inset-0 before:ml-5 before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-violet-500 before:via-cyan-500 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">

                            {/* Dot */}
                            <div className="absolute left-0 h-10 w-10 rounded-full border-4 border-slate-900 bg-violet-500 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/50 z-10">
                                {step.order}
                            </div>

                            {/* Card */}
                            <div className="ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] md:group-odd:text-right p-6 bg-[#0f172a] border border-white/5 rounded-2xl hover:border-violet-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-violet-900/10 group-hover:scale-[1.02]">
                                <div className="flex justify-between items-start gap-4 mb-2 md:group-odd:flex-row-reverse">
                                    <h3 className="text-lg font-bold text-white">{step.title}</h3>

                                    {/* Actions */}
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setEditingStep(step)}
                                            className="p-1.5 bg-slate-800 hover:bg-violet-600 text-slate-400 hover:text-white rounded-lg transition-colors"
                                        >
                                            <Pencil size={14} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(step.id)}
                                            className="p-1.5 bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white rounded-lg transition-colors"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modals */}
            <Modal isOpen={isCreating} onClose={() => setIsCreating(false)} title="Add Process Step">
                <NewProcessForm onClose={() => setIsCreating(false)} />
            </Modal>

            <Modal isOpen={!!editingStep} onClose={() => setEditingStep(null)} title="Edit Process Step">
                {editingStep && (
                    <EditProcessForm step={editingStep} onClose={() => setEditingStep(null)} />
                )}
            </Modal>
        </div>
    );
}
