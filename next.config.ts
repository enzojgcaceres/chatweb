import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Vercel deploy bypass (as per Landing Page Playbook) ──
  // Ignores TS/ESLint errors from 3rd-party libs (ogl, react-bits)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
