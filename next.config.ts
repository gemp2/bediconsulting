import type { NextConfig } from "next";

/** Draft project platforms (pages + static files) stay out of search engines. */
const noindexPaths = [
  "/tools/chipping-sodbury-validation/:path*",
  "/tools/caerphilly-platform/:path*",
  "/tools/digital-tunnel/:path*",
];

const nextConfig: NextConfig = {
  async headers() {
    return noindexPaths.map((source) => ({
      source,
      headers: [{ key: "X-Robots-Tag", value: "noindex" }],
    }));
  },
};

export default nextConfig;
