import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Discover our portfolio of successful projects and case studies showcasing our expertise in delivering high-quality software solutions.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
