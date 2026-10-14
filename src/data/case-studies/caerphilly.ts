import type { Project } from "../projects";

/**
 * Caerphilly Tunnel - TLS digital condition assessment (agent 02).
 * Kept in its own file so projects.ts is never edited in parallel.
 *
 * Every number below is sourced in
 * WEBSITE_kit_261014/reports/02_caerphilly_facts.md (main source: BEDI report
 * BC-TfWCT-SUV-REP-010001 P01, May 2026). Do not add numbers that are not there.
 *
 * lat/lng: midpoint of the Caerphilly Tunnel way in OpenStreetMap
 * (portals 51.5515, -3.1853 - 51.5660, -3.1958).
 */
const M = "/media/projects/caerphilly";

export const caerphilly: Project = {
  id: 28,
  slug: "caerphilly-tunnel-digital-assessment",
  name: "Caerphilly Tunnel Digital Assessment",
  type: "Digital Assessment",
  // 2021 proposal and trial scan -> 2026 final assessment (44_TfWCT folders, report May 2026).
  year: 2021,
  endYear: 2026,
  location: "Caerphilly, Wales, UK",
  region: "Europe",
  lat: 51.559,
  lng: -3.191,
  description:
    "Two laser scans of the 1871 Caerphilly Tunnel, in 2024 and 2025, turned into joint-by-joint defect maps, change maps and a relative structural risk rating along the whole bore.",
  client: "Amey Infrastructure Wales for Transport for Wales",
  role: "Digital condition and change assessment, unlined-section geotechnical risk assessment",
  images: [
    {
      src: `${M}/scan-model-lining.webp`,
      caption:
        "Laser-scan model from the December 2025 survey: stone sidewall and brick arch, every block and joint resolved.",
    },
    {
      src: `${M}/3d-defects-view.webp`,
      caption:
        "Lining defects in 3D, 100-125 m from the low-mileage portal: points coloured by depth class over the scan.",
    },
  ],
  caseStudy: {
    draft: "Pending client approval",
    noindex: true,
    category: "Digital Assessment - Heritage Railway - Laser Scanning",
    stats: [
      { value: "1871", label: "Opened - brick arch, stone sidewalls" },
      { value: "1,775 m", label: "Tunnel length, five shafts" },
      { value: "2", label: "Laser-scan surveys compared, 2024 and 2025" },
      { value: "278", label: "Scan positions, December 2025 survey" },
    ],
    chips: ["TLS", "Point cloud", "Change detection", "Heritage"],

    method: [
      {
        step: "01",
        title: "Scan the bore",
        body: "The survey contractor scanned the tunnel in 2024 and again on 8-14 December 2025: 278 scan positions with two Riegl VZ-600i scanners, about every 10 m, plus high-resolution spherical imagery to colour the cloud. Raw density is better than one point every 4 mm; the processed model keeps a maximum 6 mm spacing, enough to resolve every joint.",
        media: {
          kind: "video",
          src: `${M}/tls-method.mp4`,
          poster: `${M}/tls-method-poster.jpg`,
        },
      },
      {
        step: "02",
        title: "Fit a reference surface",
        body: "No reliable design profile exists for an 1871 tunnel, so a smooth surface is fitted to the sound lining itself. The distance of every survey point from that surface is its defect depth, measured the same way along the whole bore.",
        media: {
          kind: "video",
          src: `${M}/reference-surface.mp4`,
          poster: `${M}/reference-surface-poster.jpg`,
        },
      },
      {
        step: "03",
        title: "Classify, cluster, separate",
        body: "Each point takes the depth band of the standard defect categories: up to 20, 20-50 and over 50 mm in brick (40 and 100 mm in stone). Points are grouped on a 100 mm grid, each cell taking its most severe class, and clusters are split automatically into open joints and spalling, so defective areas add up per 10 m and 20 m of tunnel.",
        media: { kind: "image", src: `${M}/joints-detail.webp` },
      },
      {
        step: "04",
        title: "Measure shape and change",
        body: "Circular arcs are fitted to the vault every 1 m. Deflection and distortion are normalised against the tunnel's own range and combined into four relative risk classes per 10 m section. The 2025 cloud is then compared with 2024: defect classes cell by cell, and cloud to cloud for any change over 10 mm.",
      },
    ],

    results: {
      heading: "Where the lining needs attention, and what changed in a year.",
      intro:
        "Defects are present throughout the tunnel but are mostly of low severity. Two zones stand out: the high-mileage end beyond about 1,300 m, and 560-640 m, where several sections have more than 25% of the intrados affected. Between the 2024 and 2025 surveys, conditions were broadly stable, with no evidence of systematic progressive deformation.",
      stats: [
        {
          value: "1,543",
          label: "Defective areas logged with setting-out coordinates",
          note: "2025 defect register for the 32 tunnel sections earmarked for repair",
        },
        {
          value: "117",
          label: "Of them in category 1, the deepest class",
          note: "61 open joints and 56 spalls: over 50 mm deep in brick, over 100 mm in stone",
        },
        {
          value: "4",
          label: "Sections with high relative structural risk",
          note: "At 900, 1,625, 1,694 and 1,752 m from the low-mileage portal",
        },
        {
          value: "<5%",
          label: "Of the lining surface changed in defective area, 2024 to 2025",
          note: "Generally; most change is a shift to lower categories, which may be survey-related",
        },
      ],
      figures: [
        {
          src: `${M}/dashboard-2025.webp`,
          caption:
            "Tunnel dashboard, 2025 survey: cumulative defective area per 20 m (all categories, then categories 1-2), water ingress and relative structural risk per 10 m, portal to portal.",
        },
        {
          src: `${M}/combined-log-extract.webp`,
          caption:
            "Combined assessment log, extract near Shaft 5: depth map on the real-colour lining, with defective areas, water and risk class for each 10 m section and the change from 2024.",
        },
        {
          src: `${M}/3d-defects-change.webp`,
          caption:
            "3D change views, 100-150 m from the low-mileage portal: cells whose defect category rose since 2024 (left) and structural shape change (right).",
        },
        {
          src: `${M}/distorted-section.webp`,
          caption:
            "Cross section at the isolated high-risk section near 900 m: surveyed profile against the best-fit reference, deviations in mm.",
        },
      ],
    },

    problem: {
      heading: "An 1871 tunnel with no reliable design profile",
      points: [
        "Brick arch on stone sidewalls, 1,775 m long",
        "Archive drawings scarce and barely legible",
        "Repairs to price and set out in the sections earmarked for repair",
        "Water ingress that changes with rainfall and season",
      ],
    },
    solution: {
      heading: "Terrestrial laser scanning, measured point by point",
      points: [
        "Colour scans on the tunnel control network, 2024 and 2025",
        "Depth of every point from a fitted reference surface",
        "Standard defect categories for brick and stone",
        "Open joints and spalling separated automatically",
        "Relative structural risk from the vault shape every 1 m",
        "Geotechnical risk assessment of the three unlined sections",
      ],
    },
    value: {
      heading: "A repeatable baseline for the whole bore",
      points: [
        "36 combined log sheets: defects, water and risk on one drawing",
        "Dashboards to read the whole tunnel at a glance",
        "3D change views and an atlas of distorted sections",
        "Defect register with setting-out coordinates",
        "Clear priorities for investigation",
        "A survey specification so future scans compare like for like",
      ],
    },

    limitations: {
      heading: "What a scan can and cannot tell",
      points: [
        "Non-contact: perished mortar without loss, hollow-sounding areas, loose masonry and minor cracks are not detected",
        "No access, testing or probing; the risk class is relative to this tunnel, not a structural assessment of the lining",
        "Different scanner positions (shadowing) and registration errors between scans can look like change",
        "Change in crown deflection is generally within ±5 mm, about the limit of accuracy of the method",
        "Water ingress varies with rainfall: the results show peak, not average, conditions",
      ],
    },
    nextSteps: {
      heading: "Building on the baseline",
      points: [
        "Physical inspection and geotechnical assessment at the high-risk section near 900 m",
        "Prioritised investigation of the high-mileage end and 520-640 m (all condition layers combined)",
        "Fixed scan stations, traversed control and one file per station in future surveys",
        "Better ways to see all condition layers together than PDF sheets",
      ],
    },
    toolLink: {
      href: "/tools/caerphilly-platform",
      label: "See the platform concept",
      body: "The assessment is carried out on a dense 3D model but delivered as drawings. The platform concept brings defects, water, structural risk and change into one 3D view with a dashboard.",
    },
    relatedLink: {
      href: "/projects/chipping-sodbury-tunnel-rila-assessment",
      label: "Chipping Sodbury Tunnel →",
      body: "Train-borne RILA scans already exist across the network. On Chipping Sodbury Tunnel we tested them as a screening layer: they show zones of deeper defects rather than single joints.",
    },

    highlights: [
      {
        title: "Every joint, measured",
        body: "With terrestrial scanning each brick and joint is resolved, so open joints are measured joint by joint. Train-borne RILA data, tested on our Chipping Sodbury Tunnel project, is sparser and noisier and shows zones rather than single joints: a screening layer, not a joint-by-joint survey.",
      },
      {
        title: "Objective and repeatable",
        body: "Defective areas come from a fixed 100 mm grid, not from estimates, so the 2025 result compares directly with 2024 and with the next survey.",
      },
      {
        title: "Drawn the way you face the wall",
        body: "Logs are unrolled from inside the tunnel with the track at the centre, so drawings and photos match what the examiner sees on site.",
      },
      {
        title: "Checked against the records",
        body: "The first assessment correlated well with the most recent detailed examination: more conservative on shallow defects, in good agreement on the two deepest categories.",
      },
    ],
  },
};
