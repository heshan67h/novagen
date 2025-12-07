import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog - Insights & Innovation',
    description: 'Expert insights on software development, AI/ML, cloud computing, web development, and digital transformation from the NovaGen team.',
    keywords: ['software development blog', 'AI tutorials', 'web development', 'cloud computing', 'tech insights', 'programming tutorials'],
    alternates: {
        canonical: '/blog',
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
