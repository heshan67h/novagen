import { getServiceById } from '@/app/actions/home';
import { notFound } from 'next/navigation';
import EditServiceForm from './EditServiceForm';

export default async function EditServicePage({ params }: { params: { id: string } }) {
    const id = parseInt(params.id);
    const service = await getServiceById(id);

    if (!service) {
        notFound();
    }

    return <EditServiceForm service={service} />;
}
