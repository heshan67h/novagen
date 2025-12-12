
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const PROJECTS = [
    {
        title: 'Smart Learning Platform',
        description: 'Comprehensive LMS platform for online exams, payments, and hybrid education management.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2070&auto=format&fit=crop',
        category: 'EdTech',
        tags: 'React, Node.js, AWS, Stripe',
        featured: true
    },
    {
        title: 'Fintech Dashboard',
        description: 'Real-time analytics for wealth managers with portfolio monitoring and compliance.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        category: 'FinTech',
        tags: 'Next.js, Python, Blockchain, AI',
        featured: true
    },
    {
        title: 'ElectroMart',
        description: 'Enterprise e-commerce platform with real-time inventory and multi-vendor support.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop',
        category: 'E-Commerce',
        tags: 'Vue.js, Django, Redis, PostgreSQL',
        featured: true
    },
    {
        title: 'FemCare Health',
        description: 'Privacy-first health tracking with AI-powered cycle predictions and wellness insights.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
        category: 'Healthcare',
        tags: 'Mobile, WebRTC, Cloud, Security',
        featured: true
    },
    {
        title: 'SmartHire AI',
        description: 'AI-powered recruitment with automated resume parsing and bias-free workflows.',
        image: 'https://images.unsplash.com/photo-1553877607-4972f7af60db?q=80&w=2070&auto=format&fit=crop',
        category: 'HR Tech',
        tags: 'Python, TensorFlow, React, NLP',
        featured: true
    },
    {
        title: 'Cloud Migration Suite',
        description: 'Seamless migration of legacy systems to modern cloud infrastructure with zero downtime.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
        category: 'Cloud',
        tags: 'AWS, Kubernetes, Docker, Terraform',
        featured: true
    },
    {
        title: 'SecureVault Pro',
        description: 'Enterprise password management with zero-knowledge encryption and biometric authentication.',
        image: 'https://images.unsplash.com/photo-1614064641938-3e81390235e1?q=80&w=2010&auto=format&fit=crop',
        category: 'Cybersecurity',
        tags: 'Rust, WebAssembly, iOS, Android',
        featured: true
    },
    {
        title: 'GreenEnergy Analytics',
        description: 'Real-time monitoring and optimization platform for renewable energy infrastructure.',
        image: 'https://images.unsplash.com/photo-1473341304170-891463ee3287?q=80&w=2069&auto=format&fit=crop',
        category: 'CleanTech',
        tags: 'IoT, Grafana, Go, TimeScaleDB',
        featured: true
    }
];

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "CTO",
        company: "FinTech Solutions",
        content: "NovaGen transformed our legacy system into a state-of-the-art platform. Their team's technical expertise and dedication to quality are unmatched.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Michael Chen",
        role: "Founder",
        company: "HealthPlus",
        content: "The mobile app they built for us exceeded all expectations. User engagement has tripled since launch. Highly recommend their services!",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "David Smith",
        role: "Director",
        company: "RetailGiant",
        content: "Professional, transparent, and incredibly skilled. They delivered our e-commerce platform on time and within budget.",
        avatar: "https://randomuser.me/api/portraits/men/86.jpg"
    }
];

const PROCESS_STEPS = [
    {
        title: "Discovery & Strategy",
        description: "We dive deep into your goals, analyze requirements, and map out a strategic roadmap for success.",
        order: 1
    },
    {
        title: "UI/UX Design",
        description: "Our designers craft intuitive, stunning interfaces that ensure exceptional user experiences.",
        order: 2
    },
    {
        title: "Development",
        description: "We build robust, scalable solutions using cutting-edge technologies and best coding practices.",
        order: 3
    },
    {
        title: "Launch & Support",
        description: "Seamless deployment and ongoing maintenance to keep your digital product performing at its peak.",
        order: 4
    }
];

async function main() {
    console.log('Start seeding ...')

    // Check if projects exist, if not seed
    const projectCount = await prisma.project.count();
    if (projectCount === 0) {
        console.log('Seeding projects...');
        for (const p of PROJECTS) {
            const project = await prisma.project.create({
                data: p,
            })
            console.log(`Created project with id: ${project.id}`)
        }
    } else {
        console.log('Projects already exist. Skipping.');
    }

    // Check testimonials
    const testimonialCount = await prisma.testimonial.count();
    if (testimonialCount === 0) {
        console.log('Seeding testimonials...');
        for (const t of TESTIMONIALS) {
            const testimonial = await prisma.testimonial.create({
                data: t,
            })
            console.log(`Created testimonial with id: ${testimonial.id}`)
        }
    } else {
        console.log('Testimonials already exist. Skipping.');
    }

    // Check process steps
    const stepCount = await prisma.processStep.count();
    if (stepCount === 0) {
        console.log('Seeding process steps...');
        for (const s of PROCESS_STEPS) {
            const step = await prisma.processStep.create({
                data: s,
            })
            console.log(`Created step with id: ${step.id}`)
        }
    } else {
        console.log('Process steps already exist. Skipping.');
    }


    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
