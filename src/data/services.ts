export type Service = {
  slug: string;
  num: string;
  name: string;
  body: string;
  tags: string[];
};

/**
 * Six disciplines. The draft pages headlined "Seven disciplines" but only ever
 * listed six cards, numbering them 01-05 then 07 with no 06. Renumbered
 * sequentially here. "Handworks & Headings" and "Construction Support" appear
 * in the capability ticker without a card — likely the missing seventh.
 * See CONTENT-TODO.md.
 */
export const services: Service[] = [
  {
    slug: "mined-tunnels",
    num: "01",
    name: "Mined Tunnels",
    body: "SCL/NATM design for soft ground, mixed face and rock. Multi-face sequences, face stability and temporary lining design.",
    tags: ["SCL", "NATM", "Face stability", "Temporary lining"],
  },
  {
    slug: "mechanised-tunnels",
    num: "02",
    name: "Mechanised Tunnels",
    body: "TBM segmental lining design, ring build and temporary works. EPB, slurry and compressed air experience across multiple continents.",
    tags: ["TBM", "Segmental lining", "EPB", "Slurry"],
  },
  {
    slug: "cut-and-cover-shafts",
    num: "03",
    name: "Cut & Cover / Shafts",
    body: "Piled retaining walls, braced excavations and shaft design. Ground–structure interaction in the most constrained urban settings.",
    tags: ["Secant piles", "Braced excavation", "Shafts", "Retaining walls"],
  },
  {
    slug: "geotechnical-engineering",
    num: "04",
    name: "Geotechnical Engineering",
    body: "Ground investigation, soil and rock testing, FEM numerical modelling and ground characterisation reports for every stage of a project.",
    tags: ["Ground investigation", "FEM", "Rock testing", "Characterisation"],
  },
  {
    slug: "instrumentation-monitoring",
    num: "05",
    name: "Instrumentation & Monitoring",
    body: "Monitoring scheme design, trigger level setting and real-time engineering response. Data that drives decisions, not just records them.",
    tags: ["Trigger levels", "Settlement", "Real-time response"],
  },
  {
    slug: "digital-assessment",
    num: "06",
    name: "Digital Assessment",
    body: "LiDAR scanning, point cloud processing and remote sensing for non-invasive structural health and material assessment of existing tunnels and heritage assets.",
    tags: ["LiDAR", "Point cloud", "UAV", "Non-invasive"],
  },
];

export type ApproachStep = {
  num: string;
  title: string;
  body: string;
};

/** From the deck, slide 18: "Our Approach". */
export const approach: ApproachStep[] = [
  {
    num: "01",
    title: "Understand",
    body: "We start with the ground, not the drawing. Site history, investigation data, hydrogeology and the constraints that actually govern the work — before any design decision is made.",
  },
  {
    num: "02",
    title: "Design a tailored solution",
    body: "No prescriptive templates. Each design responds to the specific geology, the adjacent assets and the contractor's real means and methods.",
  },
  {
    num: "03",
    title: "Stay close through construction",
    body: "We remain on site as the work proceeds, reviewing logging and monitoring data and re-designing when conditions differ from prediction — because they will.",
  },
  {
    num: "04",
    title: "Verify",
    body: "Close-out against the as-built record: monitoring performance against trigger levels, lessons captured, and a defensible technical record for the asset owner.",
  },
];
