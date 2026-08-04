export type ServiceSection = {
  heading: string;
  body?: string;
  points?: string[];
};

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
  /** Expanded detail (from bediconsulting.com/services). */
  intro?: string;
  sections?: ServiceSection[];
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
    image: "/media/services/mined-tunnels.jpg",
    intro:
      "Mined tunnels are designed and built by conventional means — sprayed concrete lining (SCL/NATM) in soft ground and rock, and drill-and-blast or roadheader excavation in rock. Dr. Bedi has extensive experience applying the SCL/NATM technique for complex urban infrastructure, publishes peer-reviewed research and leads training modules for the British Tunnelling Society.",
    sections: [
      {
        heading: "Rock tunnels & caverns",
        body: "Large-span tunnels and caverns across varying rock conditions, combining rock mechanics with the NATM approach for weak rock. Critical design areas are addressed early, with geologists and engineers working together.",
        points: [
          "Rock mechanics and rock engineering",
          "Rock bolt support with temporary shotcrete",
          "Excavation sequences",
          "Tunnel intersections, rock pillars and openings",
        ],
      },
      {
        heading: "Soft-ground tunnels (SCL)",
        body: "SCL is flexible during construction and well suited to complex tunnel arrangements in poor ground — with designer representation on site as the work proceeds.",
        points: [
          "Excavation and support sequence design",
          "Contingency / toolbox measures",
          "Ground and face stability assessment (analytical and numerical)",
          "Ground treatment and dewatering assessment",
          "SCL performance specifications",
          "Site support through RESS engineers",
        ],
      },
      {
        heading: "Secondary lining design",
        body: "Holistic structural and geotechnical design of permanent linings, with numerical load-sharing assessment between primary and secondary linings to optimise the design — including replacing bar reinforcement with steel fibre.",
        points: [
          "Unreinforced, conventional and steel-fibre cast in-situ linings",
          "Permanent sprayed concrete linings",
          "Primary/secondary load-sharing optimisation",
          "Drainage and waterproofing detailing",
        ],
      },
    ],
  },
  {
    slug: "mechanised-tunnels",
    num: "02",
    name: "Mechanised Tunnels",
    body: "TBM segmental lining and temporary works — EPB, slurry and compressed-air drives. Ring design, build tolerances and shaft interfaces.",
    tags: ["TBM", "Segmental lining", "EPB", "Slurry"],
    image: "/media/services/mechanised-tunnels.jpg",
    intro:
      "Dr. Bedi is experienced in the design of TBM segmental linings for both soft ground and rock tunnels — precast concrete with conventional or steel-fibre reinforcement, and cast iron segments. Ground conditions, hydrology, imposed loads and segment configuration are assessed to optimise support, together with interfaces to cut-and-cover structures, conventionally mined tunnels and cross passages.",
    sections: [
      {
        heading: "Segmental lining design",
        points: [
          "Lining segmentation and specification",
          "Structural design in conventional or steel-fibre reinforcement",
          "Permanent support to segment openings",
          "Pipe jacking, micro-tunnelling and trenchless technology",
        ],
      },
      {
        heading: "Temporary works",
        body: "Complete design of the temporary works associated with mechanised tunnelling, led by engineers proficient across the relevant disciplines.",
        points: [
          "TBM launch frames and seals",
          "Alternative 'flying start' launch arrangements",
          "Temporary lining support at openings",
          "Face pressure assessment",
        ],
      },
    ],
  },
  {
    slug: "cut-and-cover-shafts",
    num: "03",
    name: "Cut & Cover / Shafts",
    body: "Piled and diaphragm walls, braced and strutted excavations, shaft design. Ground–structure interaction in constrained urban settings.",
    tags: ["Secant piles", "Braced excavation", "Shafts", "Retaining walls"],
    image: "/media/services/cut-and-cover-shafts.jpg",
    intro:
      "Ground movements and their effect on adjacent structures are of paramount importance, especially in urban areas. Dr. Bedi has extensive experience with cut-and-cover structures in complex urban settings and large-scale TBM launch boxes, using numerical modelling to optimise toe lengths, reaction forces and safety while keeping the works economical.",
    sections: [
      {
        heading: "Cut & cover tunnels",
        body: "Design of temporary and permanent retaining structures, including strutting and waling systems.",
        points: [
          "Temporary retaining walls — sheet, soldier or bored piles, diaphragm walls",
          "Temporary strutting and waling",
          "Permanent retaining walls in cast in-situ or diaphragm concrete",
          "Control of ground movements",
          "Control of groundwater flow",
        ],
      },
      {
        heading: "Shafts",
        body: "Shafts are often the first construction phase for tunnel break-outs, so robust design and assured performance of the excavation and adjacent assets is critical. Dr. Bedi has designed numerous complex shafts adjacent to live railway infrastructure.",
        points: [
          "Retaining structures — precast segments, bored piles, diaphragm walls",
          "Shotcrete and soil-anchor support",
          "Control of ground movements and groundwater flow",
        ],
      },
    ],
  },
  {
    slug: "geotechnical-engineering",
    num: "04",
    name: "Geotechnical Engineering",
    body: "Ground investigation, interpretation and testing; finite-element analysis; parameter derivation and geotechnical design reports.",
    tags: ["Ground investigation", "FE analysis", "Testing", "GDR"],
    image: "/media/services/geotechnical-engineering.jpg",
    intro:
      "Detailed knowledge of the geology to be encountered is one of the most important aspects of any tunnel project — around half of the delays and cost over-runs on projects are caused by 'unforeseen ground conditions' met once construction has begun. We do not model for the sake of modelling: analysis is a tool used to optimise the design, verified against established rock-mass classification and convergence-confinement methods.",
    sections: [
      {
        heading: "Analysis",
        points: [
          "Tunnel analysis",
          "Deep excavation analysis",
          "Slope stability analysis",
          "Earthquake and soil dynamics analysis",
          "Groundwater modelling",
        ],
      },
      {
        heading: "Settlement & damage assessment",
        body: "Considerable experience in potential damage assessment from complex soft-ground SCL projects, especially in dense urban environments.",
        points: [
          "Settlement prediction by empirical and numerical analysis",
          "Building impact (damage category) assessment",
          "Prediction of total slope changes",
          "Impact assessment on other assets",
        ],
      },
    ],
  },
  {
    slug: "instrumentation-monitoring",
    num: "05",
    name: "Instrumentation & Monitoring",
    body: "Monitoring scheme design, trigger-level setting and engineering interpretation of instrumentation and settlement data.",
    tags: ["Trigger levels", "Settlement", "Interpretation"],
    image: "/media/services/instrumentation-monitoring.jpg",
    intro:
      "Instrumentation and monitoring (I&M) is often seen as an additional, over-specified expense. We believe well-designed I&M reduces construction cost: it verifies the design assumptions and allows them to be optimised through performance evaluation. Our engineers understand the tools available and the specific requirements needed to measure the behaviour of the ground and underground structures during construction.",
    sections: [
      {
        heading: "Design & interpretation",
        body: "I&M systems designed to verify excavation performance and assure asset owners of structural integrity — developed with monitoring contractors on site, particularly for large excavations near operational assets.",
        points: [
          "I&M scheme specification",
          "Instrumentation layout and detailing",
          "Trigger-level setting",
          "Engineering interpretation of monitoring and settlement data",
        ],
      },
    ],
  },
  {
    slug: "digital-assessment",
    num: "06",
    name: "Digital Assessment",
    body: "LiDAR scanning, point-cloud processing and photogrammetry for non-invasive condition assessment of existing tunnels and heritage assets.",
    tags: ["LiDAR", "Point cloud", "Photogrammetry", "Non-invasive"],
    image: "/media/services/digital-assessment.png",
    intro:
      "Non-invasive condition assessment of existing tunnels and heritage assets using LiDAR, point-cloud processing and photogrammetry — a complete, repeatable structural record captured without extended possessions or drilling. Demonstrated on the 1845 Brunel Sapperton Tunnel for Network Rail.",
    sections: [
      {
        heading: "Survey & capture",
        points: [
          "3D laser scanning",
          "Colourised point cloud",
          "UAV photogrammetry in shafts and restricted zones",
        ],
      },
      {
        heading: "Assessment & output",
        body: "In-house routines turn the survey into an objective, repeatable record that can be compared against standard defect codes (e.g. Network Rail TCMI).",
        points: [
          "Quantitative defect identification and severity scoring",
          "Structural risk-class mapping",
          "Georeferenced defect maps with clickable photo links",
          "Prioritised, optimised repair scope",
        ],
      },
    ],
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
