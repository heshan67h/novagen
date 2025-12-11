import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';


const inter = Inter({ subsets: ['latin'] });


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.novagen.software'),
  title: {
    default: 'NovaGen - Software Development Company',
    template: '%s | NovaGen'
  },
  description: 'NovaGen builds cutting-edge software solutions, AI systems, and enterprise web platforms that drive innovation and accelerate business growth.',
  keywords: ['Software Development', 'Web Development', 'AI Solutions', 'Mobile Apps', 'Sri Lanka', 'Enterprise Software', 'NovaGen', 'React', 'Next.js'],
  authors: [{ name: 'NovaGen Team' }],
  creator: 'NovaGen',
  publisher: 'NovaGen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'NovaGen - Software Development Company',
    description: 'We build cutting-edge software solutions that drive innovation and accelerate business growth.',
    url: 'https://www.novagen.software',
    siteName: 'NovaGen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NovaGen Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NovaGen - Software Development Company',
    description: 'We build cutting-edge software solutions that drive innovation and accelerate business growth.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NovaGen',
    url: 'https://www.novagen.software',
    logo: 'https://www.novagen.software/logo.png',
    description: 'We build cutting-edge software solutions that drive innovation and accelerate business growth.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'LK'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94 72 513 7006',
      contactType: 'customer service',
    },
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Footer />

      </body>
    </html>
  );
}
