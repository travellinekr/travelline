import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    serverActions: {
      allowedOrigins: ["bistred-nylah-subcrenately.ngrok-free.dev"],
    },
  },
};

export default nextConfig;
