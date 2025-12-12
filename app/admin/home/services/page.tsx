import { getServices } from '@/app/actions/home';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import ServiceListClient from './ServiceListClient';
import ServiceStats from './ServiceStats';

export default async function ServicesPage() {
    const services = await getServices();

    // Calculate Stats
    const totalServices = services.length;
    const activeServices = services.filter((s: any) => s.active !== false).length; // Handle potentially undefined as active

    // Calculate simple content score (based on description length)
    // Target avg length: 50 chars = 100%
    const avgLen = services.reduce((acc: number, s: any) => acc + (s.description?.length || 0), 0) / (services.length || 1);
    const contentScore = Math.min(Math.round((avgLen / 50) * 100), 100);

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Services</h1>
                    <p className="text-slate-400">Manage your home page services</p>
                </div>
                <Link
                    href="/admin/home/services/new"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                    <Plus size={20} />
                    Add Service
                </Link>
            </div>

            <ServiceStats
                totalServices={totalServices}
                activeServices={activeServices}
                contentScore={contentScore}
            />

            <div>
                <ServiceListClient initialServices={services} />
            </div>
        </div>
    );
}
