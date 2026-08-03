/**
 * Single source of truth for site-wide copy and figures.
 *
 * Figures below are derived from the project dataset in `projects.ts` rather
 * than copied from the draft pages, which disagreed with each other
 * (the drafts claimed 40+ projects / 10+ countries against 26 / 8 actual).
 * See CONTENT-TODO.md.
 */

export const site = {
  name: "Bedi Consulting",
  legalName: "Bedi Consulting Ltd",
  url: "https://bediconsulting.com",
  tagline: "Specialist Tunnelling & Geotechnical Engineers",
  eyebrow: "Geotechnical & Tunnel Engineering",
  slogan: "Tunnel and geotechnical engineering for difficult ground.",
  // The phrase rendered in gold within `slogan`.
  sloganAccent: "difficult ground.",
  description:
    "SCL/NATM and TBM tunnels, shafts and deep excavations, ground investigation, instrumentation and digital condition assessment — from design conception to construction support.",
  email: "a.bedi@bediconsulting.com",
  office: "London W4, UK",
  address: "11 Whitehall Gardens, London W4 3LT",
  phone: "+44 (0)7912 201891",
} as const;

/** Social profiles used in the footer and contact page. */
export const socials = {
  linkedin:
    "https://www.linkedin.com/company/bedi-consulting-ltd/posts/?feedView=all",
  instagram: "", // TODO: add the BEDI Instagram profile URL
} as const;

/** Google Maps query for the office. */
export const officeMapQuery = "11 Whitehall Gardens, London W4 3LT";

export const nav = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Tools", href: "/tools" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const stats = [
  { value: "20+", label: "Years in tunnelling" },
  { value: "26", label: "Projects" },
  { value: "8", label: "Countries" },
  { value: "100%", label: "Senior-led design" },
] as const;

/** Capability labels for the marquee. Two of these have no service card yet. */
export const capabilityTicker = [
  "SCL / NATM Tunnelling",
  "TBM Mechanised Tunnels",
  "Cut & Cover Structures",
  "Geotechnical Engineering",
  "Digital Assessment",
  "Instrumentation & Monitoring",
  "Handworks & Headings",
  "Construction Support",
] as const;

export const challengeIntro = {
  eyebrow: "Ground conditions",
  heading: "Design is governed by the ground, not by templates.",
  body: "Mixed-face geology, pore-pressure regime and adjacent assets change the governing case along a drive. Each is addressed explicitly, from ground investigation through construction.",
} as const;

export const challenges = [
  {
    title: "Mixed-face geology",
    body: "Rock–soil transitions within a single drive: excavation sequence, face support and lining revised to the observed ground.",
  },
  {
    title: "High pore pressure",
    body: "Pore-pressure regime derived from permeability and piezometric data; drained/undrained design, depressurisation and grouting specified accordingly.",
  },
  {
    title: "Adjacent structures & live assets",
    body: "Volume-loss and settlement prediction, building damage assessment and instrumentation trigger levels beneath buildings and operating railways.",
  },
  {
    title: "Obstructions & buried services",
    body: "Interpretation beyond record drawings — abandoned foundations, wells, legacy sewers — carried into the excavation and support sequence.",
  },
  {
    title: "Heritage & existing linings",
    body: "Non-invasive assessment of masonry and legacy linings by LiDAR and point cloud, with quantified defect mapping — no possessions, no drilling.",
  },
  {
    title: "Operational environments",
    body: "Sequencing, monitoring and buildability for works within live stations, ports and highways, verified against face and instrumentation data on site.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Anmol has demonstrated a truly collaborative approach and has set the benchmark for how consultants approach a Design & Build contract. I would have no hesitation in working with Bedi Consulting in the future.",
    name: "Craig Prangley",
    role: "Project Director",
    org: "Taylor Woodrow BAM Nuttall JV",
  },
  {
    quote:
      "Anmol has been instrumental in delivering efficient designs that have achieved economy for the project. His ability to deliver the designs and see them implemented through on site has allowed London Underground to manage risk.",
    name: "Glen Keelan",
    role: "Programme Manager",
    org: "London Underground",
  },
  {
    quote:
      "Dr. Anmol Bedi was instrumental in assisting with the development of many of the key design features that have made the tunnelling works at VSU such a success. I would not hesitate to recommend Bedi Consulting.",
    name: "Ian Heath",
    role: "Tunnel Manager",
    org: "Victoria Station Upgrade",
  },
] as const;

/** Real clients with logos (from the deck's "Our Clients" wall). */
export const clients = [
  { name: "Network Rail", logo: "/media/clients/network-rail.png" },
  { name: "Transport for London", logo: "/media/clients/tfl.png" },
  { name: "Docklands Light Railway", logo: "/media/clients/dlr.png" },
  { name: "Morgan Sindall Group", logo: "/media/clients/morgan-sindall.png" },
  { name: "Willmott Dixon", logo: "/media/clients/willmott-dixon.png" },
  { name: "Walker", logo: "/media/clients/walker.png" },
] as const;
