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
  slogan: "We work where the ground fights back.",
  // The word rendered in gold within `slogan`.
  sloganAccent: "fights back.",
  description:
    "Bedi Consulting delivers specialist tunnel and geotechnical engineering for the world's most complex underground projects — where uncertainty is high, margin is low, and experience is everything.",
  email: "a.bedi@bediconsulting.com",
  office: "London Victoria, UK",
} as const;

/** Social profiles used in the footer. Add the Instagram URL when known. */
export const socials = {
  linkedin: "https://www.linkedin.com/company/bedi-consulting-ltd/",
  instagram: "", // TODO: add the BEDI Instagram profile URL
} as const;

export const nav = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "26", label: "Projects delivered" },
  { value: "8", label: "Countries worked in" },
  { value: "100%", label: "Senior-led delivery" },
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
  eyebrow: "The underground challenge",
  heading: "Every tunnel is a unique problem. We have seen them all.",
  body: "Below the surface, no two sites are alike. Ground conditions change metre by metre. Water finds every weakness. Adjacent structures react in ways no model fully predicts. This is where deep experience matters — not just calculation.",
} as const;

export const challenges = [
  {
    title: "Complex & mixed-face geology",
    body: "Transitions between rock, clay, gravel and fill within a single tunnel drive demand continuous design adaptation. A prescriptive design fails here — only experience and real-time engineering judgement keeps the work safe.",
  },
  {
    title: "High groundwater pressure",
    body: "Water under pressure is the most common cause of tunnel incidents. We design for the real hydrogeological regime — not the assumed one — combining permeability testing, pore pressure monitoring and drained/undrained design.",
  },
  {
    title: "Adjacent structures & live infrastructure",
    body: "Tunnelling beneath occupied buildings, live Tube lines or heritage assets leaves no room for error. We manage settlement risk from ground investigation through to greenfield reoccupation, with instrumentation thresholds set at the right level.",
  },
  {
    title: "Buried utilities & obstructions",
    body: "Victorian sewers, underpinned foundations, abandoned wells and unknown services create hazards that standard utility records miss entirely. We plan for what is not on the drawings.",
  },
  {
    title: "Heritage tunnels & existing assets",
    body: "Ageing tunnel linings, historic brick arches and century-old structures require assessment without invasive works. Our LiDAR and point cloud digital assessment delivers a complete structural picture — no shutdowns, no drilling.",
  },
  {
    title: "Construction in operational environments",
    body: "Working inside live metro stations, under operating motorways or within operational ports demands tight sequencing, real-time monitoring and absolute buildability of every design decision. We stay on site to ensure it.",
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
