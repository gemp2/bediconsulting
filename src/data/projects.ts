export type ProjectType =
  | "Road Tunnels"
  | "Metro / Rail"
  | "Utility Tunnels"
  | "Deep Excavation"
  | "Mining"
  | "Digital Assessment"
  | "Other";

export type Region =
  | "Europe"
  | "Americas"
  | "Asia"
  | "Middle East"
  | "Oceania";

export type Project = {
  id: number;
  slug: string;
  name: string;
  type: ProjectType;
  /** Additional categories a project also belongs to (e.g. digital workstreams). */
  alsoType?: ProjectType[];
  year: number;
  endYear?: number;
  location: string;
  region: Region;
  lat: number;
  lng: number;
  description: string;
  client?: string;
  contractor?: string;
  role?: string;
  value?: string;
  awards?: string[];
  /** Photos under /public/media/projects. Falls back to a placeholder if empty. */
  images?: { src: string; caption?: string }[];
  /** Present only on projects with a written case study. */
  caseStudy?: CaseStudy;
};

export type CaseStudy = {
  category: string;
  stats: { value: string; label: string }[];
  chips: string[];
  problem: { heading: string; points: string[] };
  solution: { heading: string; points: string[] };
  value: { heading: string; points: string[] };
  highlights: { title: string; body: string }[];
};

export const projectTypes: ProjectType[] = [
  "Road Tunnels",
  "Metro / Rail",
  "Utility Tunnels",
  "Deep Excavation",
  "Mining",
  "Digital Assessment",
  "Other",
];

export const regions: Region[] = [
  "Europe",
  "Americas",
  "Asia",
  "Middle East",
  "Oceania",
];

export const typeColors: Record<ProjectType, string> = {
  "Road Tunnels": "#4A9EBF",
  "Metro / Rail": "#C8A96E",
  "Utility Tunnels": "#7CB87C",
  "Deep Excavation": "#E07B54",
  Mining: "#B87CC8",
  "Digital Assessment": "#50C8A0",
  Other: "#8FA8C8",
};

/**
 * 26 unique projects.
 *
 * The draft map listed 28 entries, but two ("VSU — 3D/4D BIM Management" and
 * "Riyadh Metro — FEM Digital Design") were the Victoria and Riyadh projects
 * re-listed under Digital Assessment, which double-plotted them on the map and
 * inflated the count. Those are folded in here via `alsoType` so they still
 * appear under the Digital Assessment filter without being counted twice.
 *
 * Crossrail C121's longitude was 0.038 in the draft, which plots in the Thames
 * estuary; corrected to the Whitechapel/Liverpool Street area. Flagged in
 * CONTENT-TODO.md for confirmation.
 */
export const projects: Project[] = [
  {
    id: 1,
    slug: "port-of-miami-tunnel",
    name: "Port of Miami Tunnel",
    type: "Road Tunnels",
    year: 2013,
    location: "Miami, Florida, USA",
    region: "Americas",
    lat: 25.775,
    lng: -80.168,
    description:
      "TBM-driven twin tunnel beneath Biscayne Bay connecting the Port of Miami to I-395.",
  },
  {
    id: 2,
    slug: "sentosa-gateway-tunnel",
    name: "Sentosa Gateway Tunnel",
    type: "Road Tunnels",
    year: 2009,
    location: "Singapore",
    region: "Asia",
    lat: 1.256,
    lng: 103.821,
    description:
      "Road tunnel connecting Sentosa Island to the mainland in mixed tropical ground conditions.",
  },
  {
    id: 3,
    slug: "eagles-nest-highway-tunnels",
    name: "Eagles Nest Highway Tunnels",
    type: "Road Tunnels",
    year: 2004,
    location: "Hong Kong",
    region: "Asia",
    lat: 22.348,
    lng: 114.128,
    description:
      "Highway tunnels through granite rock in Hong Kong's challenging terrain.",
  },
  {
    id: 4,
    slug: "kallang-paya-lebar-expressway",
    name: "Kallang & Paya Lebar Expressway",
    type: "Road Tunnels",
    year: 2003,
    location: "Singapore",
    region: "Asia",
    lat: 1.31,
    lng: 103.872,
    description:
      "Cut and cover and bored tunnel sections of the KPE expressway through dense urban Singapore.",
  },
  {
    id: 5,
    slug: "victoria-station-upgrade",
    name: "Victoria Station Upgrade",
    type: "Metro / Rail",
    alsoType: ["Digital Assessment"],
    year: 2007,
    endYear: 2016,
    location: "London, UK",
    region: "Europe",
    lat: 51.4965,
    lng: -0.1447,
    description:
      "£741M upgrade of London's busiest Underground station. SCL tunnelling with <50mm clearance to live LU assets.",
    client: "London Underground",
    contractor: "Taylor Woodrow BAM Nuttall JV",
    role: "Design lead + construction support",
    value: "£741M",
    awards: [
      "ITA Tunnelling Project of the Year 2014",
      "ITA Awards Finalist 2015",
      "BGA Fleming Award 2015",
      "Specialist Tunnelling Project of the Year 2016",
    ],
    images: [
      {
        src: "/media/projects/victoria-station-upgrade.jpg",
        caption: "SCL tunnelling within the live Victoria Station.",
      },
      {
        src: "/media/projects/victoria-station-point-cloud.png",
        caption: "Point-cloud scan of the station tunnels.",
      },
    ],
    caseStudy: {
      category: "Metro & Rail · SCL Tunnelling · London",
      stats: [
        { value: "£741M", label: "Contract value" },
        { value: "2,000+", label: "Jet grout columns" },
        { value: "<50mm", label: "Clearance to live LU assets" },
        { value: "9 yrs", label: "Design through construction" },
      ],
      chips: ["SCL / NATM", "Jet grouting", "Live station"],
      problem: {
        heading: "Tunnelling inside a live Tube station",
        points: [
          "Water-bearing gravels",
          "London Clay interface",
          "Grade II listed theatre above",
          "50mm to live LU tunnels",
        ],
      },
      solution: {
        heading: "Ground treatment + optimised SCL design",
        points: [
          "2,000+ jet grout columns",
          "SCL primary + secondary linings",
          "Novel cross-passage method",
          "FEM lining optimisation",
          "Bar reinforcement eliminated",
          "3D/4D BIM real-time",
        ],
      },
      value: {
        heading: "Zero disruption. Four industry awards.",
        points: [
          "Station open throughout",
          "Full line capacity maintained",
          "Novel method became industry standard",
          "Cost savings through FEM",
          "Zero incidents",
          "4× international awards",
        ],
      },
      highlights: [
        {
          title: "Novel cross-passage method",
          body: "Eliminated station-side propping — railway at full capacity throughout.",
        },
        {
          title: "FEM lining optimisation",
          body: "All bar reinforcement removed from primary and secondary linings.",
        },
        {
          title: "3D/4D BIM risk management",
          body: "Real-time tunnel face sequencing adapted to actual ground.",
        },
        {
          title: "Four international awards",
          body: "ITA 2014 · ITA Finalist 2015 · BGA Fleming 2015 · Specialist TY 2016.",
        },
      ],
    },
  },
  {
    id: 6,
    slug: "vauxhall-station-upgrade",
    name: "Vauxhall Station Upgrade",
    type: "Metro / Rail",
    year: 2013,
    location: "London, UK",
    region: "Europe",
    lat: 51.486,
    lng: -0.122,
    description:
      "SCL tunnel design and construction support for the upgrade of Vauxhall Underground station.",
  },
  {
    id: 7,
    slug: "bond-street-station-upgrade",
    name: "Bond Street Station Upgrade",
    type: "Metro / Rail",
    year: 2012,
    location: "London, UK",
    region: "Europe",
    lat: 51.514,
    lng: -0.149,
    description:
      "Tunnel design for the Bond Street station upgrade as part of the Crossrail works.",
    client: "Crossrail",
  },
  {
    id: 8,
    slug: "tottenham-court-road-station-upgrade",
    name: "Tottenham Court Road Station Upgrade",
    type: "Metro / Rail",
    year: 2011,
    location: "London, UK",
    region: "Europe",
    lat: 51.516,
    lng: -0.13,
    description:
      "Complex SCL tunnelling beneath one of London's busiest intersections as part of the Crossrail station upgrade.",
    client: "Crossrail",
  },
  {
    id: 9,
    slug: "crossrail-c121-station-caverns",
    name: "Crossrail C121 Station Caverns",
    type: "Metro / Rail",
    year: 2008,
    location: "London, UK",
    region: "Europe",
    lat: 51.516,
    lng: -0.06,
    description:
      "SCL design for running tunnels and cross-passages on the Crossrail C121 contract in East London.",
    client: "Crossrail",
  },
  {
    id: 10,
    slug: "new-york-penn-station-extension",
    name: "New York Penn Station Extension",
    type: "Metro / Rail",
    year: 2009,
    location: "New York / New Jersey, USA",
    region: "Americas",
    lat: 40.75,
    lng: -74.002,
    description:
      "Deep excavation and mined tunnel design for the Penn Station Extension project in Manhattan.",
  },
  {
    id: 11,
    slug: "no-7-line-subway-extension",
    name: "No.7 Line Subway Extension",
    type: "Metro / Rail",
    year: 2009,
    location: "New York City, USA",
    region: "Americas",
    lat: 40.757,
    lng: -74.0,
    description:
      "Geotechnical and tunnel design for the extension of the No.7 subway line in Midtown Manhattan.",
  },
  {
    id: 12,
    slug: "perth-new-metro-rail-tunnel",
    name: "New Metro Rail Tunnel Project",
    type: "Metro / Rail",
    year: 2005,
    location: "Perth, WA, Australia",
    region: "Oceania",
    lat: -31.952,
    lng: 115.861,
    description:
      "Design support for the new underground metro rail tunnel project in central Perth.",
  },
  {
    id: 13,
    slug: "ns1-north-south-cable-tunnel",
    name: "NS1 North–South Cable Tunnel",
    type: "Utility Tunnels",
    year: 2012,
    location: "Singapore",
    region: "Asia",
    lat: 1.352,
    lng: 103.82,
    description:
      "TBM-driven high-voltage transmission cable tunnel for Singapore's national power grid.",
  },
  {
    id: 14,
    slug: "kupe-microtunnel-shore-crossing",
    name: "Kupe Microtunnel Shore Crossing",
    type: "Utility Tunnels",
    year: 2006,
    location: "Taranaki, New Zealand",
    region: "Oceania",
    lat: -39.52,
    lng: 173.98,
    description:
      "Microtunnel shore crossing for the Kupe gas field subsea pipeline landfall.",
  },
  {
    id: 15,
    slug: "warragamba-deep-storage-recovery",
    name: "Warragamba Deep Storage Recovery",
    type: "Utility Tunnels",
    year: 2005,
    location: "NSW, Australia",
    region: "Oceania",
    lat: -33.87,
    lng: 150.622,
    description:
      "Deep utility tunnel for Warragamba dam water storage and recovery infrastructure.",
  },
  {
    id: 16,
    slug: "transgrid-cable-tunnel",
    name: "TransGrid Cable Tunnel",
    type: "Utility Tunnels",
    year: 2002,
    location: "Sydney, NSW, Australia",
    region: "Oceania",
    lat: -33.872,
    lng: 151.205,
    description:
      "Underground high-voltage cable tunnel for TransGrid in central Sydney.",
    client: "TransGrid",
  },
  {
    id: 17,
    slug: "albany-pipe-jack-project",
    name: "Albany Pipe Jack Project",
    type: "Utility Tunnels",
    year: 2003,
    location: "Albany, WA, Australia",
    region: "Oceania",
    lat: -35.027,
    lng: 117.884,
    description:
      "Pipe jacking project for utility infrastructure in Albany, Western Australia.",
  },
  {
    id: 18,
    slug: "mt-whaleback-loadout-tunnels",
    name: "Mt Whaleback Loadout Tunnels",
    type: "Mining",
    year: 2005,
    location: "Newman, WA, Australia",
    region: "Oceania",
    lat: -23.361,
    lng: 119.662,
    description:
      "Advanced geotechnical analysis of loadout tunnels at the Mt Whaleback iron ore mine.",
  },
  {
    id: 19,
    slug: "port-hedland-under-harbour-tunnel",
    name: "Port Hedland Under Harbour Tunnel",
    type: "Mining",
    year: 2010,
    location: "Port Hedland, WA, Australia",
    region: "Oceania",
    lat: -20.312,
    lng: 118.576,
    description:
      "Under-harbour tunnel restoration for mining export infrastructure at Port Hedland.",
  },
  {
    id: 20,
    slug: "riyadh-metro-l1-tbm-launch-boxes",
    name: "Riyadh Metro L1 TBM Launch Boxes",
    type: "Deep Excavation",
    alsoType: ["Digital Assessment"],
    year: 2014,
    endYear: 2015,
    location: "Riyadh, Saudi Arabia",
    region: "Middle East",
    lat: 24.714,
    lng: 46.675,
    description:
      "Two 100m×16m TBM launch shafts in karstic Jurassic limestone with highly variable groundwater.",
    client: "Gall Zeidler Consultants",
    contractor: "BACS",
    role: "Detailed geotechnical & structural design",
    caseStudy: {
      category: "Deep Excavation · TBM Launch Shafts · Saudi Arabia",
      stats: [
        { value: "$12bn", label: "Metro programme value" },
        { value: "100m × 16m", label: "Each shaft clear span" },
        { value: "12–25m", label: "Variable water table depth" },
        { value: "2", label: "TBMs launched on schedule" },
      ],
      chips: ["Secant piles", "Karstic limestone", "FEM"],
      problem: {
        heading: "Karstic ground, asymmetric loading",
        points: [
          "Fractured Jurassic limestone",
          "Anhydrite + Breccia zones",
          "Karstic limestone",
          "Asymmetric wall loading",
        ],
      },
      solution: {
        heading: "Two bespoke designs — one for each shaft",
        points: [
          "North: bulk excavation + rock dowels",
          "South: secant pile wall",
          "Waler beams + struts",
          "Tiebacks below TBM crown",
          "FEM geotechnical modelling",
          "Adaptive design from logging data",
        ],
      },
      value: {
        heading: "Both TBMs launched on schedule",
        points: [
          "Both shafts constructed successfully",
          "All limit states satisfied",
          "Worst-case scenarios captured",
          "Value engineering incorporated",
          "Robust in variable ground",
          "Client expectations met",
        ],
      },
      highlights: [
        {
          title: "Design philosophy",
          body: "Captured all asymmetric and worst-case loading scenarios rather than a single governing case.",
        },
        {
          title: "FEM modelling",
          body: "Geotechnical limit states, load paths and structural demand fully modelled.",
        },
        {
          title: "Adaptive design",
          body: "Logging data reviewed throughout construction — analysis updated to in-situ conditions.",
        },
        {
          title: "Value engineering",
          body: "Contractor proposals reviewed and incorporated where safe — improving programme efficiency.",
        },
      ],
    },
  },
  {
    id: 21,
    slug: "beenyup-wwtp-deep-excavation",
    name: "Beenyup WWTP Deep Excavation",
    type: "Deep Excavation",
    year: 2006,
    location: "Perth, WA, Australia",
    region: "Oceania",
    lat: -31.737,
    lng: 115.744,
    description:
      "Deep excavation design for the Beenyup wastewater treatment plant expansion.",
  },
  {
    id: 22,
    slug: "quinns-main-sewer-alkimos-wwtp",
    name: "Quinns Main Sewer — Alkimos WWTP",
    type: "Deep Excavation",
    year: 2005,
    location: "Perth, WA, Australia",
    region: "Oceania",
    lat: -31.671,
    lng: 115.706,
    description:
      "Tunnel and shaft design for the Quinns main sewer connection to Alkimos WWTP.",
  },
  {
    id: 23,
    slug: "sapperton-tunnel-digital-assessment",
    name: "Sapperton Tunnel Digital Assessment",
    type: "Digital Assessment",
    year: 2019,
    endYear: 2020,
    location: "Gloucestershire, UK",
    region: "Europe",
    lat: 51.701,
    lng: -2.072,
    description:
      "LiDAR + point cloud non-invasive assessment of this 1845 Brunel tunnel — 5 possessions, zero extended closures.",
    client: "Network Rail",
    role: "Digital condition assessment + repair scoping",
    caseStudy: {
      category: "Digital Assessment · Heritage Railway · Non-invasive",
      stats: [
        { value: "1845", label: "Built — I.K. Brunel" },
        { value: "~2km", label: "Tunnel length surveyed" },
        { value: "5", label: "Short possessions, no closures" },
        { value: "0", label: "Invasive interventions" },
      ],
      chips: ["LiDAR", "Point cloud", "UAV", "Heritage"],
      problem: {
        heading: "Heritage tunnel — no access, no closures",
        points: [
          "Live operational railway",
          "No extended closures available",
          "Spalling + open joints",
          "Water ingress",
          "Subjective existing inspection data",
        ],
      },
      solution: {
        heading: "LiDAR + point cloud + UAV pipeline",
        points: [
          "3D laser scanning",
          "Colourised point cloud",
          "UAV photogrammetry",
          "In-house defect ID routines",
          "Quantitative severity scoring",
          "Structural risk class mapping",
        ],
      },
      value: {
        heading: "First complete digital record of the tunnel",
        points: [
          "Georeferenced defect map",
          "Clickable photo links",
          "Optimised repair scope",
          "Urgent vs deferrable separated",
          "Repeatable — future monitoring",
          "Reduced remedial cost",
        ],
      },
      highlights: [
        {
          title: "Safety first",
          body: "Fewer man-hours on live track — UAV replaces access in shafts and restricted zones.",
        },
        {
          title: "Objective and repeatable",
          body: "Depth of spalling and joint opening measured, not guessed.",
        },
        {
          title: "Network Rail TCMI compatible",
          body: "Standard defect codes — direct comparison with existing detailed examination data.",
        },
        {
          title: "Repair cost optimised",
          body: "Priority scoring separated urgent works from deferrable — significant saving on the remedial programme.",
        },
      ],
    },
  },
  {
    id: 24,
    slug: "burnett-dam-alliance",
    name: "Burnett Dam Alliance",
    type: "Other",
    year: 2004,
    location: "Queensland, Australia",
    region: "Oceania",
    lat: -25.47,
    lng: 151.48,
    description:
      "Geotechnical assessment and infrastructure design for the Burnett Dam Alliance project.",
  },
  {
    id: 25,
    slug: "kellys-gully-bridge-assessment",
    name: "Kelly's Gully Bridge Assessment",
    type: "Other",
    year: 2004,
    location: "NSW, Australia",
    region: "Oceania",
    lat: -32.5,
    lng: 151.6,
    description:
      "Structural assessment of Kelly's Gully bridge and various other NSW bridge structures.",
  },
  {
    id: 26,
    slug: "lihir-geothermal-power",
    name: "Lihir 30MW Geothermal Power",
    type: "Other",
    year: 2004,
    location: "Papua New Guinea",
    region: "Oceania",
    lat: -3.145,
    lng: 152.633,
    description:
      "Geotechnical design for a 30MW geothermal power project on Lihir Island, Papua New Guinea.",
  },
];

export const featuredProjects = projects.filter((p) => p.caseStudy);

export function projectMatchesType(p: Project, type: ProjectType): boolean {
  return p.type === type || (p.alsoType?.includes(type) ?? false);
}

export const yearRange = {
  min: Math.min(...projects.map((p) => p.year)),
  max: Math.max(...projects.map((p) => p.endYear ?? p.year)),
};

export const countryCount = 8;
