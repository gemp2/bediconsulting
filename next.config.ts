import type { NextConfig } from "next";

/** Reserved JSM area: encrypted static pages in public/reserved/jsm, opened with a password. */
const reservedPages = ["/reserved/jsm", "/reserved/jsm/summary/lhr", "/reserved/jsm/summary/uxb", "/reserved/jsm/summary/fdl", "/reserved/jsm/summary/a312"];

const nextConfig: NextConfig = {
  async rewrites() {
    return reservedPages.map((source) => ({ source, destination: `${source}/index.html` }));
  },
  async redirects() {
    return [{ source: "/riservato/jsm", destination: "/reserved/jsm", permanent: true }];
  },
  async headers() {
    return [{ source: "/reserved/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
  },
};

export default nextConfig;
