import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Leave empty unless using a specific port
        pathname: "/**", // Allows all paths under this hostname
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        port: "", // Leave empty unless using a specific port
        pathname: "/**", // Allows all paths under this hostname
      },
    ],
  },
};


export default nextConfig;
