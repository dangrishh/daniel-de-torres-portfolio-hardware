import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/v0/b/**",
      },
      {
        protocol: "https",
        hostname: "www.hikvision.com",
      },
      {
        protocol: "https",
        hostname: "assets.hikvision.com",
      },
      {
        protocol: "https",
        hostname: "material.dahuasecurity.com",
      },
      {
        protocol: "https",
        hostname: "materialfile.dahuasecurity.com",
      },
    ],
  },
};

export default nextConfig;
