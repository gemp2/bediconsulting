export type Tool = {
  href: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
};

/**
 * Free tools published under /tools. Each `href` points at a self-contained
 * static page in /public/tools (its own look, distinct from the main site).
 * Add a new tool by dropping its folder in /public/tools and adding an entry.
 */
export const tools: Tool[] = [
  {
    href: "/tools/tunnel-apparent-dip",
    name: "Tunnel Apparent Dip Converter",
    category: "Structural geology",
    description:
      "Convert between true dip and apparent dip for a geological plane intersected by a tunnel — with interactive plan view, longitudinal section and a 3D model.",
    tags: ["Apparent dip", "True dip", "Strike", "3D"],
  },
];

/** Ideas shown as "coming soon" so the page reads as a growing library. */
export const upcomingTools = [
  "Tunnel volume & spoil calculator",
  "RQD & rock mass rating helper",
  "Settlement trough estimator",
  "Unit converter for ground engineering",
];
