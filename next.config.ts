import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Reserved JSM dashboard: an encrypted static page (public/riservato/jsm/index.html), opened with a password. */
  async rewrites() {
    return [{ source: "/riservato/jsm", destination: "/riservato/jsm/index.html" }];
  },
  async headers() {
    return [{ source: "/riservato/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
