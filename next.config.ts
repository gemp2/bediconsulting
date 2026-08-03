import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Serve the self-contained static tool at a clean URL (no /index.html).
      {
        source: "/tools/tunnel-apparent-dip",
        destination: "/tools/tunnel-apparent-dip/index.html",
      },
    ];
  },
};

export default nextConfig;
