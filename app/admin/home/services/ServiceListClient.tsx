'use client';

import { useState, useTransition } from 'react';
import { deleteService } from '@/app/actions/home';
import { Pencil, Trash2, Smartphone, Laptop, Globe, Palette, Code, Layers, Zap, Server, Database, Cloud, Shield, Cpu } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import EditServiceForm from './edit/[id]/EditServiceForm';

// Icon mapping
const ICON_MAP: Record<string, any> = {
    'Smartphone': Smartphone,
    'Laptop': Laptop,
    'Globe': Globe,
    'Palette': Palette,
    'Code': Code,
    'Layers': Layers,
    'Zap': Zap,
    'Server': Server,
    'Database': Database,
    'Cloud': Cloud,
    'Shield': Shield,
    'Cpu': Cpu
};

export default function ServiceListClient({ initialServices }: { initialServices: any[] }) {
    const [services, setServices] = useState(initialServices);
    const [isPending, startTransition] = useTransition();
    const [editingService, setEditingService] = useState<any>(null);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this service?')) return;

        startTransition(async () => {
            const result = await deleteService(id);
            if (result.success) {
                setServices(services.filter(s => s.id !== id));
            }
        });
    };

    return (
        <>
            <div className="home-services-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
            }}>
                {services.map((service) => {
                    const IconComponent = ICON_MAP[service.icon] || Code; // Default to Code icon

                    return (
                        <div
                            key={service.id}
                            style={{
                                background: 'radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.1) 0, transparent 50%), radial-gradient(circle at 100% 0%, rgba(6, 182, 212, 0.1) 0, transparent 50%), rgba(10,15,35,0.95)',
                                border: '1px solid rgba(148,163,184,0.3)',
                                borderRadius: '24px',
                                boxShadow: '0 18px 45px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,1)',
                                padding: '28px 24px',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                zIndex: 5
                            }}
                            className="service-card-hover group hover:border-violet-500/50"
                        >
                            {/* Actions Overlay */}
                            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                <button
                                    onClick={() => setEditingService(service)}
                                    className="p-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg shadow-lg transition-colors"
                                    title="Edit Service"
                                >
                                    <Pencil size={16} />
                                </button>
                                <button
                                    onClick={() => handleDelete(service.id)}
                                    disabled={isPending}
                                    className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-lg shadow-lg transition-colors disabled:opacity-50"
                                    title="Delete Service"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>

                            <div style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '12px',
                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)',
                                border: '1px solid rgba(139, 92, 246, 0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '18px'
                            }}>
                                <IconComponent size={24} color="white" />
                            </div>
                            <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: 600, marginBottom: '10px' }}>{service.title}</h3>
                            <p style={{ color: 'rgba(148,163,184,0.95)', fontSize: '0.9rem', lineHeight: 1.6 }}>{service.description}</p>
                        </div>
                    );
                })}
            </div>

            {/* Edit Service Modal */}
            <Modal
                isOpen={!!editingService}
                onClose={() => setEditingService(null)}
                title="Edit Service"
            >
                {editingService && (
                    <EditServiceForm
                        service={editingService}
                        onClose={() => setEditingService(null)}
                    />
                )}
            </Modal>
        </>
    );
}
