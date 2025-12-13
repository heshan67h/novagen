import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NovaGen Software Solutions',
    short_name: 'NovaGen',
    description: 'We build cutting-edge software solutions that drive innovation and accelerate business growth.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',// checking git update
      },
    ],
  };
}
