'use client';

import { useState, useTransition } from 'react';
import { deleteTestimonial } from '@/app/actions/home';
import { Pencil, Trash2, Plus, Quote, User, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import EditTestimonialForm from './edit/EditTestimonialForm';
import NewTestimonialForm from './new/NewTestimonialForm';

export default function TestimonialsListClient({ initialTestimonials }: { initialTestimonials: any[] }) {
    const [testimonials, setTestimonials] = useState(initialTestimonials);
    const [isPending, startTransition] = useTransition();
    const [editingTestimonial, setEditingTestimonial] = useState<any>(null);
    const [isCreating, setIsCreating] = useState(false);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this testimonial?')) return;

        startTransition(async () => {
            const result = await deleteTestimonial(id);
            if (result.success) {
                setTestimonials(testimonials.filter(t => t.id !== id));
            }
        });
    };

    return (
        <div className="space-y-8">
            {/* Header Actions */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">Client Reviews</h2>
                <button
                    onClick={() => setIsCreating(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors font-medium shadow-lg shadow-violet-900/20"
                >
                    <Plus size={18} />
                    Add Testimonial
                </button>
            </div>

            {/* Empty State */}
            {testimonials.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-white/5 border-dashed">
                    <MessageSquare className="mx-auto text-slate-600 w-16 h-16 mb-4" />
                    <h3 className="text-slate-300 font-medium text-lg">No Testimonials Yet</h3>
                    <p className="text-slate-500 mb-6">Add feedback from your happy clients.</p>
                    <button
                        onClick={() => setIsCreating(true)}
                        className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                    >
                        Add Testimonial
                    </button>
                </div>
            ) : (
                /* Testimonials Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-[#0f172a] border border-white/5 rounded-2xl p-6 hover:border-violet-500/50 transition-all shadow-xl hover:shadow-2xl hover:shadow-violet-900/10 flex flex-col group relative"
                        >
                            {/* Actions */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => setEditingTestimonial(testimonial)}
                                    className="p-2 bg-slate-800 hover:bg-violet-600 text-white rounded-lg transition-colors"
                                >
                                    <Pencil size={14} />
                                </button>
                                <button
                                    onClick={() => handleDelete(testimonial.id)}
                                    className="p-2 bg-slate-800 hover:bg-red-600 text-white rounded-lg transition-colors"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>

                            {/* Quote Icon */}
                            <Quote size={32} className="text-violet-500/20 mb-4" />

                            {/* Content */}
                            <p className="text-slate-300 italic mb-6 leading-relaxed flex-grow">
                                "{testimonial.content}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                                <div className="relative w-10 h-10 rounded-full bg-slate-800 overflow-hidden flex items-center justify-center border border-white/10">
                                    {testimonial.avatar ? (
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    ) : (
                                        <User size={18} className="text-slate-500" />
                                    )}
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                                    <p className="text-slate-500 text-xs">{testimonial.role}, {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modals */}
            <Modal isOpen={isCreating} onClose={() => setIsCreating(false)} title="Add Testimonial">
                <NewTestimonialForm onClose={() => setIsCreating(false)} />
            </Modal>

            <Modal isOpen={!!editingTestimonial} onClose={() => setEditingTestimonial(null)} title="Edit Testimonial">
                {editingTestimonial && (
                    <EditTestimonialForm testimonial={editingTestimonial} onClose={() => setEditingTestimonial(null)} />
                )}
            </Modal>
        </div>
    );
}
