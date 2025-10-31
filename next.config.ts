import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["upload.wikimedia.org"],
  },
  experimental: {
    turbo: false,
  },
};

export default nextConfig;
