/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Type check during production builds
    ignoreBuildErrors: false,
  },
  eslint: {
    // Lint during production builds
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
