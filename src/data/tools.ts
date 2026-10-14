/** Ideas shown as "coming soon" so the Tools page reads as a growing library. */
export const upcomingTools = [
  "Tunnel volume & spoil calculator",
  "RQD & rock mass rating helper",
  "Settlement trough estimator",
  "Unit converter for ground engineering",
];

/**
 * Project platforms — web apps built for a specific project, listed on /tools.
 * Entries with `noindex` are drafts awaiting client approval.
 */
export type Platform = {
  slug: string;
  name: string;
  project: string;
  summary: string;
  status: "live" | "concept";
  href: string;
  image?: string;
  noindex?: boolean;
};

/* STUBS — `chipping-sodbury-validation` owned by agent 03, `caerphilly-platform` by agent 04. */
export const platforms: Platform[] = [
  {
    slug: "chipping-sodbury-validation",
    name: "Chipping Sodbury Ground Truth",
    project: "Chipping Sodbury Tunnel",
    summary:
      "Spot-by-spot record of the site validation of the RILA depth map: 214 flagged spots along the tunnel, the map with the checked area boxed, site photos with ruler readings and the outcome at each spot checked.",
    status: "live",
    href: "/tools/chipping-sodbury-validation",
    image: "/media/tools/chipping-sodbury-validation.jpg",
    noindex: true,
  },
  {
    slug: "caerphilly-platform",
    name: "Caerphilly Tunnel Platform",
    project: "Caerphilly Tunnel",
    summary:
      "Concept dashboard for a tunnel digital twin: defects, water ingress and structural risk by 20 m section, in one place. Illustrative data.",
    status: "concept",
    href: "/tools/caerphilly-platform",
    image: "/media/tools/caerphilly-platform.jpg",
    noindex: true,
  },
];
