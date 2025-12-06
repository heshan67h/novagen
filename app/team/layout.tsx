import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented professionals behind NovaGen who are dedicated to delivering excellence in every project.',
  alternates: {
    canonical: '/team',
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
