'use client';

import { useState, useTransition } from 'react';
import { deleteProject } from '@/app/actions/home';
import { Pencil, Trash2, Plus, Code, Globe, Layout, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Modal from '@/components/ui/Modal';
import EditProjectForm from './edit/EditProjectForm';
import NewProjectForm from './new/NewProjectForm';

export default function ProjectsListClient({ initialProjects }: { initialProjects: any[] }) {
    const [projects, setProjects] = useState(initialProjects);
    const [isPending, startTransition] = useTransition();
    const [editingProject, setEditingProject] = useState<any>(null);
    const [isCreating, setIsCreating] = useState(false);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this project?')) return;

        startTransition(async () => {
            const result = await deleteProject(id);
            if (result.success) {
                setProjects(projects.filter(p => p.id !== id));
            }
        });
    };

    return (
        <div className="space-y-8">
            {/* Header Actions */}
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-white">All Projects</h2>
                <button
                    onClick={() => setIsCreating(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors font-medium shadow-lg shadow-violet-900/20"
                >
                    <Plus size={18} />
                    Add Project
                </button>
            </div>

            {/* Empty State */}
            {projects.length === 0 ? (
                <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-white/5 border-dashed">
                    <Layout className="mx-auto text-slate-600 w-16 h-16 mb-4" />
                    <h3 className="text-slate-300 font-medium text-lg">No Projects Found</h3>
                    <p className="text-slate-500 mb-6">Start by adding your first project case study.</p>
                    <button
                        onClick={() => setIsCreating(true)}
                        className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                    >
                        Create Project
                    </button>
                </div>
            ) : (
                /* Projects Grid - Matching Home Page Styles */
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '24px',
                }}>
                    {projects.map((project) => {
                        const techTags = project.tags ? project.tags.split(',').map((t: string) => t.trim()) : [];
                        return (
                            <div
                                key={project.id}
                                style={{
                                    width: '100%',
                                    height: '480px',
                                    cursor: 'pointer',
                                }}
                                className="group relative"
                            >
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '24px',
                                    background: 'radial-gradient(circle at 0% 0%, rgba(56,189,248,0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                                    border: '1px solid rgba(148,163,184,0.5)',
                                    boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    backdropFilter: 'blur(20px)',
                                    transition: 'transform 0.2s',
                                }} className="hover:scale-[1.03]">

                                    {/* Admin Actions Overlay */}
                                    <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setEditingProject(project); }}
                                            className="p-2 bg-slate-900/90 hover:bg-violet-600 text-white rounded-lg backdrop-blur-sm transition-colors border border-white/10 shadow-lg"
                                        >
                                            <Pencil size={16} />
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleDelete(project.id); }}
                                            className="p-2 bg-slate-900/90 hover:bg-red-600 text-white rounded-lg backdrop-blur-sm transition-colors border border-white/10 shadow-lg"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </div>

                                    {/* Image */}
                                    <div style={{
                                        width: '100%',
                                        height: '200px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderBottom: '1px solid rgba(148,163,184,0.2)',
                                    }}>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${project.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            filter: 'brightness(0.9) saturate(0.8)',
                                            transition: 'transform 0.5s ease',
                                        }} className="group-hover:scale-105" />

                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: `linear-gradient(to bottom, transparent 0%, rgba(15,23,42,0.8) 100%)`,
                                        }} />

                                        {/* Category badge */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '16px',
                                            left: '16px',
                                            padding: '6px 14px',
                                            borderRadius: '100px',
                                            background: 'rgba(15,23,42,0.95)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(148,163,184,0.3)',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                                        }}>
                                            <span style={{
                                                fontSize: '0.7rem',
                                                fontWeight: 600,
                                                color: '#e2e8f0',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px',
                                            }}>{project.category}</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: '24px' }}>
                                        <h3 style={{
                                            fontSize: '1.4rem',
                                            fontWeight: 700,
                                            color: 'white',
                                            marginBottom: '10px',
                                            lineHeight: 1.3,
                                            letterSpacing: '-0.01em',
                                        }}>{project.title}</h3>

                                        <p style={{
                                            fontSize: '0.9rem',
                                            color: 'rgba(148,163,184,0.9)',
                                            lineHeight: 1.6,
                                            marginBottom: '20px',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            height: '4.8em' // Explicit height for fallback
                                        }}>{project.description}</p>

                                        {/* Tech stack */}
                                        <div style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                            marginBottom: '24px',
                                        }}>
                                            {techTags.slice(0, 4).map((tech: string, i: number) => (
                                                <span
                                                    key={i}
                                                    style={{
                                                        fontSize: '0.7rem',
                                                        padding: '4px 10px',
                                                        borderRadius: '6px',
                                                        background: 'rgba(56,189,248,0.1)',
                                                        color: '#93c5fd',
                                                        border: '1px solid rgba(56,189,248,0.15)',
                                                        fontWeight: 500,
                                                    }}
                                                >{tech}</span>
                                            ))}
                                            {techTags.length > 4 && (
                                                <span style={{
                                                    fontSize: '0.7rem',
                                                    padding: '4px 8px',
                                                    color: 'rgba(148,163,184,0.8)',
                                                }}>+{techTags.length - 4}</span>
                                            )}
                                        </div>

                                        {/* View Details Link */}
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            marginTop: 'auto',
                                        }}>
                                            <span style={{
                                                fontSize: '0.85rem',
                                                fontWeight: 600,
                                                color: '#38bdf8',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '4px'
                                            }}>
                                                View Project <Globe size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Modals */}
            <Modal isOpen={isCreating} onClose={() => setIsCreating(false)} title="Create New Project">
                <NewProjectForm onClose={() => setIsCreating(false)} />
            </Modal>

            <Modal isOpen={!!editingProject} onClose={() => setEditingProject(null)} title="Edit Project">
                {editingProject && (
                    <EditProjectForm project={editingProject} onClose={() => setEditingProject(null)} />
                )}
            </Modal>
        </div>
    );
}
