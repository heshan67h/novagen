'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getHero() {
    return await prisma.heroSection.findFirst();
}

export async function updateHero(data: {
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
}) {
    const hero = await prisma.heroSection.findFirst();

    if (hero) {
        await prisma.heroSection.update({
            where: { id: hero.id },
            data,
        });
    } else {
        await prisma.heroSection.create({
            data,
        });
    }

    revalidatePath('/');
    return { success: true };
}

// ==================== SERVICES ACTIONS ====================

export async function getServices() {
    return await prisma.service.findMany({
        orderBy: { order: 'asc' },
    });
}

export async function getServiceById(id: number) {
    return await prisma.service.findUnique({
        where: { id },
    });
}

export async function createService(data: { title: string; description: string; icon: string }) {
    // Get max order
    const maxOrder = await prisma.service.aggregate({
        _max: { order: true }
    });
    const order = (maxOrder._max.order || 0) + 1;

    await prisma.service.create({
        data: { ...data, order },
    });
    revalidatePath('/');
    return { success: true };
}

export async function updateService(id: number, data: { title?: string; description?: string; icon?: string; active?: boolean; order?: number }) {
    await prisma.service.update({
        where: { id },
        data,
    });
    revalidatePath('/');
    return { success: true };
}


export async function deleteService(id: number) {
    await prisma.service.delete({
        where: { id },
    });
    revalidatePath('/');
    return { success: true };
}

// ==================== PROJECTS ACTIONS ====================

export async function getProjects() {
    try {
        return await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
    } catch (error) {
        return [];
    }
}

export async function createProject(data: any) {
    try {
        await prisma.project.create({ data });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function updateProject(id: number, data: any) {
    try {
        await prisma.project.update({ where: { id }, data });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function deleteProject(id: number) {
    try {
        await prisma.project.delete({ where: { id } });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

// ==================== PROCESS ACTIONS ====================

export async function getProcessSteps() {
    try {
        return await prisma.processStep.findMany({ orderBy: { order: 'asc' } });
    } catch (error) {
        return [];
    }
}

export async function createProcessStep(data: any) {
    try {
        // Auto-increment order if not provided
        if (!data.order) {
            const lastStep = await prisma.processStep.findFirst({ orderBy: { order: 'desc' } });
            data.order = (lastStep?.order || 0) + 1;
        }
        await prisma.processStep.create({ data: { ...data, order: Number(data.order) } });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function updateProcessStep(id: number, data: any) {
    try {
        await prisma.processStep.update({
            where: { id },
            data: { ...data, order: Number(data.order) }
        });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function deleteProcessStep(id: number) {
    try {
        await prisma.processStep.delete({ where: { id } });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

// ==================== TESTIMONIALS ACTIONS ====================

export async function getTestimonials() {
    try {
        return await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
    } catch (error) {
        return [];
    }
}

export async function createTestimonial(data: any) {
    try {
        await prisma.testimonial.create({ data });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function updateTestimonial(id: number, data: any) {
    try {
        await prisma.testimonial.update({ where: { id }, data });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

export async function deleteTestimonial(id: number) {
    try {
        await prisma.testimonial.delete({ where: { id } });
        revalidatePath('/');
        return { success: true };
    } catch (error) {
        return { success: false, error };
    }
}

