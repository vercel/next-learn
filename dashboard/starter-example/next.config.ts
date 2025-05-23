import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    nodeMiddleware: true
  }
};

export default nextConfig;
