import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['cdn3.iconfinder.com', 'png.pngtree.com', 'img.icons8.com'], // Add the hostname here
  },
};

export default nextConfig;
