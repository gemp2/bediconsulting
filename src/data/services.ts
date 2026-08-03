export type Service = {
  slug: string;
  num: string;
  name: string;
  body: string;
  tags: string[];
  /** Real site photo for the card. */
  image?: string;
  /** Real site video for the card (takes precedence over image). */
  video?: string;
  poster?: string;
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
    body: "Sprayed concrete lining (SCL/NATM) design in soft ground, mixed face and rock — excavation sequence, face stability and temporary/permanent lining.",
    tags: ["SCL", "NATM", "Face stability", "Lining design"],
    image: "/media/tunnel-portal.jpg",
  },
  {
    slug: "mechanised-tunnels",
    num: "02",
    name: "Mechanised Tunnels",
    body: "TBM segmental lining and temporary works — EPB, slurry and compressed-air drives. Ring design, build tolerances and shaft interfaces.",
    tags: ["TBM", "Segmental lining", "EPB", "Slurry"],
    image: "/media/tunnel-bore.jpg",
  },
  {
    slug: "cut-and-cover-shafts",
    num: "03",
    name: "Cut & Cover / Shafts",
    body: "Piled and diaphragm walls, braced and strutted excavations, shaft design. Ground–structure interaction in constrained urban settings.",
    tags: ["Secant piles", "Braced excavation", "Shafts", "Retaining walls"],
  },
  {
    slug: "geotechnical-engineering",
    num: "04",
    name: "Geotechnical Engineering",
    body: "Ground investigation, interpretation and testing; finite-element analysis; parameter derivation and geotechnical design reports.",
    tags: ["Ground investigation", "FE analysis", "Testing", "GDR"],
  },
  {
    slug: "instrumentation-monitoring",
    num: "05",
    name: "Instrumentation & Monitoring",
    body: "Monitoring scheme design, trigger-level setting and engineering interpretation of instrumentation and settlement data.",
    tags: ["Trigger levels", "Settlement", "Interpretation"],
  },
  {
    slug: "digital-assessment",
    num: "06",
    name: "Digital Assessment",
    body: "LiDAR scanning, point-cloud processing and photogrammetry for non-invasive condition assessment of existing tunnels and heritage assets.",
    tags: ["LiDAR", "Point cloud", "Photogrammetry", "Non-invasive"],
    video: "/media/field-survey.mp4",
    poster: "/media/digital-survey.jpg",
  },
];

export type ApproachStep = {
  num: string;
  title: string;
  body: string;
};

/** Working method, ground model through close-out. */
export const approach: ApproachStep[] = [
  {
    num: "01",
    title: "Ground model",
    body: "Site history, ground investigation and hydrogeology reviewed to define the design ground model and governing cases.",
  },
  {
    num: "02",
    title: "Design",
    body: "Excavation sequence, support and lining designed to the ground model and the contractor's methods; verified by numerical analysis.",
  },
  {
    num: "03",
    title: "Construction support",
    body: "Face mapping and monitoring data reviewed during construction; design revised where the ground differs from prediction.",
  },
  {
    num: "04",
    title: "Verification",
    body: "Performance checked against trigger levels and as-built records; residual risk and ongoing monitoring documented.",
  },
];
