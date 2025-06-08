import type { NextConfig } from 'next';

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8080';

const nextConfig: NextConfig = {
  /**
   * Proxy API requests to the backend server.
   * Uses BACKEND_URL from environment variables or defaults to localhost:8080.
   */
  async rewrites() {
    return [
      {
        source: '/api_v1/:path*',
        destination: `${BACKEND_URL}/api_v1/:path*`,
      },
      {
        source: '/members/:path*',
        destination: `${BACKEND_URL}/members/:path*`,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true, // TODO: Für Produktion auf false setzen
  },
  eslint: {
    ignoreDuringBuilds: true, // TODO: Für Produktion aktivieren
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;