import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'khai-code.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
       {
        // hostname: process.env.PRODUCT_IMAGE_HOST,
        hostname: "localhost"
      },
    ],
  },
};

export default nextConfig;