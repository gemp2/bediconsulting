import type { MetadataRoute } from "next";

/**
 * Mirrors the robots meta tag in layout.tsx. While the site still carries
 * placeholder content, crawling is disallowed outright. Set
 * NEXT_PUBLIC_ALLOW_INDEXING=true in Vercel to open it up at launch.
 */
export default function robots(): MetadataRoute.Robots {
  const allowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

  return {
    rules: allowed
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
  };
}
