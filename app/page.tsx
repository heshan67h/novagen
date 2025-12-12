import { getHero, getServices, getProjects, getTestimonials, getProcessSteps } from '@/app/actions/home';
import HomeClient from '@/components/HomeClient';

export default async function Home() {
    let heroData, services, projects, testimonials, processSteps;

    try {
        // Fetch all data in parallel for better performance
        const [hero, serviceList, projectList, testimonialList, processList] = await Promise.allSettled([
            getHero(),
            getServices(),
            getProjects(),
            getTestimonials(),
            getProcessSteps()
        ]);

        heroData = hero.status === 'fulfilled' ? hero.value : null;
        services = serviceList.status === 'fulfilled' ? serviceList.value : [];
        projects = projectList.status === 'fulfilled' ? projectList.value : [];
        testimonials = testimonialList.status === 'fulfilled' ? testimonialList.value : [];
        processSteps = processList.status === 'fulfilled' ? processList.value : [];

        // Log errors if any
        if (hero.status === 'rejected') console.error('Failed to fetch hero data:', hero.reason);
        if (serviceList.status === 'rejected') console.error('Failed to fetch services:', serviceList.reason);
        if (projectList.status === 'rejected') console.error('Failed to fetch projects:', projectList.reason);
        if (testimonialList.status === 'rejected') console.error('Failed to fetch testimonials:', testimonialList.reason);
        if (processList.status === 'rejected') console.error('Failed to fetch process steps:', processList.reason);

    } catch (error) {
        console.error('Unexpected error fetching home page data:', error);
        // Fallback to empty/null
        heroData = null;
        services = [];
        projects = [];
        testimonials = [];
        processSteps = [];
    }

    return <HomeClient
        heroData={heroData}
        services={services}
        projects={projects}
        testimonials={testimonials}
        processSteps={processSteps}
    />;
}
