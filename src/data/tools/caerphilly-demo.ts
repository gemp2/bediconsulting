/**
 * Caerphilly tunnel platform - concept demo (agent 04).
 *
 * WHAT IS REAL
 *   Tunnel geometry only: length, portals and shaft chainages, from BEDI's 2026
 *   assessment report (44_TfWCT/03_Reports/Produced/2026 assessment/
 *   Report_00_260519_MInv.docx, Tables 2-1 and 2-2, which cite the client's
 *   detailed examinations and Tunnel Management Strategy).
 *
 * WHAT IS SYNTHETIC
 *   Every condition value (defect areas, water ingress classes, structural
 *   classes, existing-record areas, defect patches). They come from a seeded
 *   generator below and are NOT Caerphilly results. The page shows a permanent
 *   "Concept demo - illustrative data" banner. To show real results later,
 *   replace `sections` with the per-20 m values behind the report's dashboards
 *   (Report_00 Figures 5-1 to 5-5) once the client has cleared them.
 */

/* ── page copy ─────────────────────────────────────────────────────────── */

export const platformPage = {
  draft: "Pending client approval",
  eyebrow: "Project platform - Concept",
  title: "Caerphilly Tunnel Platform",
  intro:
    "One place for every layer of a tunnel assessment: defects, water ingress and structural shape, by 20 m section, linked to the 3D scan. This is the dashboard from our platform concept, built as a working demo.",
  banner: {
    label: "Concept demo - illustrative data",
    body: "Tunnel length, portals and shafts follow Caerphilly Tunnel. Every condition value on this dashboard is synthetic, generated for the demo. These are not Caerphilly results.",
  },
  projectLink: {
    href: "/projects/caerphilly-tunnel-digital-assessment",
    label: "See the Caerphilly Tunnel digital assessment",
  },
  featuresHeading: "What the full platform does",
  featuresIntro:
    "The concept joins historical information, hydrogeology, existing inspection records (standardised codes), digital assessments and user updates in one digital twin of the tunnel.",
  features: [
    {
      title: "High-resolution 3D model",
      body: "Walk along the track or zoom to a single brick, on the full laser-scan model.",
    },
    {
      title: "Spatial coordination",
      body: "Move by chainage; place markers, measure distances and draw paths, all on real coordinates.",
    },
    {
      title: "Annotations, 3D to 2D",
      body: "Mark a defect, a note or an area in 3D; it appears in the same place on the 2D map and prints to PDF.",
    },
    {
      title: "Results on the model",
      body: "Defects, water ingress and structural deformation overlaid on the lining, together.",
    },
    {
      title: "Multi-layered view",
      body: "Existing records, the digital defect analysis and the true-colour lining in one view, with deformation sections.",
    },
    {
      title: "Records kept live",
      body: "Inspectors confirm, relocate, close or add records; repairs feed back so the model stays current and auditable.",
    },
  ],
  usersHeading: "Who it is for",
  users: [
    { role: "Field inspector", where: "In tunnel - tablet", needs: "Precise defect view; mark defects on the model" },
    { role: "Asset engineer", where: "Office - desktop", needs: "Defect priority list; PDF report export" },
    { role: "Asset manager", where: "Strategic - whole tunnel", needs: "Global risk overview; planning and scheduling" },
    { role: "Contractor", where: "On site - targeted works", needs: "Exact work location; scope of works" },
    { role: "Repair crew", where: "In tunnel", needs: "Where to work; repair instructions" },
  ],
  viewerNote:
    "In the full platform each 20 m section opens the 3D viewer: walk, orbit or fly; 3D, 2D map, cross and long section; annotate, compare with records, export to PDF.",
};

/* ── geometry (real, see header) ───────────────────────────────────────── */

export const tunnel = {
  name: "Caerphilly Tunnel",
  lengthM: 1775,
  sectionM: 20,
  lowMileage: "Lisvane portal (LM)",
  highMileage: "Caerphilly portal (HM)",
  shafts: [
    { id: "S5", chainage: 280 },
    { id: "S4", chainage: 560 },
    { id: "S3 adit", chainage: 845 },
    { id: "S2", chainage: 1240 },
    { id: "S1", chainage: 1580 },
  ],
};

/* ── classes and labels ────────────────────────────────────────────────── */

export type Layer = "combined" | "defects" | "water" | "structural";

export const layers: { id: Layer; label: string; row: string }[] = [
  { id: "combined", label: "Combined", row: "All layers combined" },
  { id: "defects", label: "Defects", row: "Lining defects" },
  { id: "water", label: "Water", row: "Water ingress" },
  { id: "structural", label: "Structural", row: "Structural risk" },
];

/** Rating 0-3 used to colour the strip and to filter. */
export const ratingLabels = ["Low", "Medium", "High", "Critical"] as const;
export const structuralLabels = ["Very low", "Low", "Medium", "High"] as const;
/** Water ingress classes; W1 is the most severe. */
export const waterLabels = ["None", "W5", "W4", "W3", "W2", "W1"] as const;

export const dashboardText = {
  heading: "Dashboard",
  tunnelLabel: "Tunnel CAR - concept demo",
  layerGroup: "Colour the strip by",
  filterRating: "Highlight sections rated",
  filterRatingAll: "All ratings",
  filterMismatch: "Only where records and scan disagree",
  sectionSlider: "Section",
  prev: "Previous section",
  next: "Next section",
  stripHint: "Tap a section, or use the slider, to open its detail.",
  kpis: {
    sections: "20 m sections",
    spalling: "Spalling, m²",
    joints: "Open joints, m²",
    water: "Sections with active water ingress (W1-W3)",
    risk: "Sections rated high or critical",
  },
  byType: "Defects by type and severity",
  byTypeNote: "Illustrative data. In the full platform, area is measured on the scan, whole tunnel. Severity 1 is the most severe.",
  waterByClass: "Water ingress, sections per class",
  detail: "Section detail",
  detailMap: "Unwrapped lining, defect patches",
  detailMapAxis: ["Up sidewall", "Crown", "Down sidewall"],
  detailTable: { cls: "Class", recorded: "Records, m²", scan: "Scan, m²" },
  viewer: "Open in 3D viewer",
  viewerConcept: "Full platform only",
  topRisk: "Top risk sections",
  topRiskCols: ["Chainage", "Rating", "Main driver"],
  topRiskEmpty: "No section matches the current filters.",
  match: "Records vs digital assessment - match check",
  matchCols: ["Defect class", "Records, m²", "Scan, m²", "Match"],
  matchNote: "Illustrative data. Match = within 20 % of each other. In the full platform, existing record areas are compared with areas measured on the scan.",
  legendWater: "Water ingress",
};

/* ── synthetic condition data ──────────────────────────────────────────── */

export type Patch = { x: number; y: number; w: number; h: number; sev: 1 | 2 | 3 };

export type Section = {
  index: number;
  from: number;
  to: number;
  /** Spalling area on the scan, m², by severity [S1, S2, S3]. */
  spalling: [number, number, number];
  /** Open joints area on the scan, m², by severity [J1, J2, J3]. */
  joints: [number, number, number];
  /** Same classes as recorded in the existing inspection records. */
  recSpalling: [number, number, number];
  recJoints: [number, number, number];
  /** 0 = none, 1 = W5 ... 5 = W1 (most severe). */
  water: 0 | 1 | 2 | 3 | 4 | 5;
  /** Relative structural risk class 0 = very low ... 3 = high. */
  structural: 0 | 1 | 2 | 3;
  ratings: Record<Layer, number>;
  score: number;
  mismatch: boolean;
  shaft?: string;
  patches: Patch[];
};

/** mulberry32: small deterministic PRNG, so server and client render the same data. */
function prng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const r1 = (n: number) => Math.round(n * 10) / 10;

function buildSections(): Section[] {
  const rnd = prng(20261014);
  const n = Math.ceil(tunnel.lengthM / tunnel.sectionM);

  // Smooth random "condition" signal so neighbouring sections look related.
  const raw = Array.from({ length: n }, () => rnd());
  const wet = Array.from({ length: n }, () => rnd());
  const smooth = (a: number[], i: number) =>
    (a[Math.max(0, i - 1)] + 2 * a[i] + a[Math.min(n - 1, i + 1)]) / 4;

  return Array.from({ length: n }, (_, i) => {
    const from = i * tunnel.sectionM;
    const to = Math.min(tunnel.lengthM, from + tunnel.sectionM);
    const base = smooth(raw, i);
    const k = base * base * 1.6 + 0.1;

    const s3 = r1(k * (2 + rnd() * 9));
    const s2 = r1(s3 * rnd() * 0.45);
    const s1 = rnd() < base * 0.35 ? r1(0.2 + rnd() * 1.5) : 0;
    const j3 = r1(k * (1 + rnd() * 7));
    const j2 = r1(j3 * rnd() * 0.5);
    const j1 = rnd() < base * 0.3 ? r1(0.2 + rnd() * 1.2) : 0;

    const w = smooth(wet, i) + rnd() * 0.25;
    const water = (w < 0.58 ? 0 : Math.min(5, Math.floor((w - 0.58) * 10) + 1)) as Section["water"];
    const sv = rnd() * 0.7 + base * 0.45;
    const structural = (sv < 0.5 ? 0 : sv < 0.82 ? 1 : sv < 1.0 ? 2 : 3) as Section["structural"];

    // Records scatter around the scan; a per-class bias makes some classes disagree.
    const rec = (v: number, bias: number) => (rnd() < 0.12 ? 0 : r1(v * bias * (0.55 + rnd() * 0.9)));
    const recSpalling: Section["recSpalling"] = [rec(s1, 0.7), rec(s2, 1), rec(s3, 1)];
    const recJoints: Section["recJoints"] = [rec(j1, 1), rec(j2, 0.7), rec(j3, 1)];

    const weighted = 3 * (s1 + j1) + 2 * (s2 + j2) + (s3 + j3);
    const defects = weighted < 8 ? 0 : weighted < 16 ? 1 : weighted < 26 ? 2 : 3;
    const waterRating = water <= 1 ? 0 : water <= 3 ? 1 : water === 4 ? 2 : 3;
    const ratings: Record<Layer, number> = {
      defects,
      water: waterRating,
      structural,
      combined: Math.max(defects, waterRating, structural),
    };

    const scanTotal = s1 + s2 + s3 + j1 + j2 + j3;
    const recTotal = [...recSpalling, ...recJoints].reduce((a, b) => a + b, 0);
    const mismatch = Math.abs(scanTotal - recTotal) > Math.max(1.5, 0.3 * scanTotal);

    const shaft = tunnel.shafts.find((s) => s.chainage >= from && s.chainage < to)?.id;

    // Defect patches on the unwrapped lining: x along 20 m, y across the arc (0-1).
    const count = Math.min(40, Math.round(scanTotal * 1.2) + 3);
    const patches: Patch[] = Array.from({ length: count }, () => {
      const p = rnd();
      const sev: Patch["sev"] = p < 0.06 + base * 0.08 ? 1 : p < 0.3 ? 2 : 3;
      return {
        x: r1(rnd() * 19),
        y: Math.round(rnd() * 90) / 100,
        w: r1(0.3 + rnd() * 1.4),
        h: Math.round((0.02 + rnd() * 0.08) * 100) / 100,
        sev,
      };
    });

    return {
      index: i,
      from,
      to,
      spalling: [s1, s2, s3],
      joints: [j1, j2, j3],
      recSpalling,
      recJoints,
      water,
      structural,
      ratings,
      score: weighted + 6 * waterRating + 8 * structural,
      mismatch,
      shaft,
      patches,
    };
  });
}

export const sections: Section[] = buildSections();
