import type { Project } from "../projects";

/**
 * Chipping Sodbury Tunnel - RILA digital assessment + site validation.
 * Kept in its own file so projects.ts is never edited in parallel.
 *
 * Facts: WEBSITE_kit_261014/BRIEF.md and data/summary.json (validation counts).
 * Comparison rows: kit assets/chipping-sodbury/compare/rows.json (box values copied unchanged).
 *
 * lat/lng: midpoint of the two portals listed on Wikipedia
 * (west 51.5317, -2.3583 - east 51.5297, -2.3000).
 */
const M = "/media/projects/chipping-sodbury";

export const chippingSodbury: Project = {
  id: 27,
  slug: "chipping-sodbury-tunnel-rila-assessment",
  name: "Chipping Sodbury Tunnel RILA Assessment",
  type: "Digital Assessment",
  year: 2020,
  endYear: 2026,
  location: "South Gloucestershire, UK",
  region: "Europe",
  lat: 51.531,
  lng: -2.329,
  description:
    "The train-borne RILA scan of this ~4 km Victorian brick tunnel already existed. We turned it into a depth map of the whole lining, took it into the tunnel at night, and most of the spots we checked were real - including defects missing from the existing records.",
  client: "Network Rail",
  role: "Depth mapping from existing RILA data + site validation",
  images: [
    {
      src: `${M}/workflow-scheme.webp`,
      caption:
        "From point cloud to defect map in four steps: preparation, reference surface, distance calculation, thresholding and mapping.",
    },
  ],
  caseStudy: {
    draft: "Pending client approval",
    noindex: true,
    category: "Digital Assessment - Train-borne LiDAR - Brick lining",
    stats: [
      { value: "~4 km", label: "Lining mapped from data that already existed" },
      { value: "214", label: "Spots flagged on the depth map" },
      { value: "35 / 39", label: "Checked spots with a clear outcome that were real defects" },
      { value: "10", label: "Real defects not in the existing records" },
    ],
    chips: [
      "RILA",
      "Train-borne LiDAR",
      "Depth map",
      "Site validation",
      "Brick lining",
      "Network Rail",
    ],

    method: [
      {
        step: "01",
        title: "Point-cloud preparation",
        body: "From the RILA 2020 train scan we extract the lining, keep a thin layer of points on the intrados and unwrap it to chainage, arc distance and local depth.",
        media: {
          kind: "video",
          src: `${M}/step1-preparation.mp4`,
          poster: `${M}/step1-preparation.jpg`,
        },
      },
      {
        step: "02",
        title: "Reference surface",
        body: "Victorian tunnels have no design coordinates, so the healthy intrados is inferred from the lining itself, with the defects left out.",
        media: {
          kind: "video",
          src: `${M}/step2-reference.mp4`,
          poster: `${M}/step2-reference.jpg`,
        },
      },
      {
        step: "03",
        title: "Distance from the reference",
        body: "Every point gets its distance from the reference surface in mm, proud or deeper.",
        media: {
          kind: "video",
          src: `${M}/step3-distance.mp4`,
          poster: `${M}/step3-distance.jpg`,
        },
      },
      {
        step: "04",
        title: "Thresholds and mapping",
        body: "Depths are banded at <20 mm, 20-50 mm and >50 mm (the severity bands of the standard inspection codes) and grouped into clusters typed by shape and size: open joints, spalling, missing bricks.",
        media: {
          kind: "video",
          src: `${M}/step4-thresholds.mp4`,
          poster: `${M}/step4-thresholds.jpg`,
        },
      },
    ],
    media: [
      {
        kind: "video",
        src: `${M}/operator-map-to-wall.mp4`,
        poster: `${M}/operator-map-to-wall.jpg`,
        caption:
          "On site: pick the spot on the depth map, find it from the section-marker plate, check the wall, measure and photograph.",
      },
      {
        kind: "video",
        src: `${M}/flythrough-validation.mp4`,
        poster: `${M}/flythrough-validation.jpg`,
        caption:
          "Fly-through of the depth map with the existing records and the site photos placed where they were taken.",
      },
    ],

    results: {
      heading: "Most of the spots we checked were real.",
      intro:
        "Over four night possessions in Nov-Dec 2025 we took the depth map into the tunnel, with the existing records overlaid as a roadmap. This was a targeted check of flagged spots, not a random survey: the numbers below are what we observed at the spots we checked, not accuracy statistics.",
      stats: [
        {
          value: "35 / 39",
          label: "Real defects",
          note: "At the spots we checked with a clear outcome: 30 confirmed, 5 partly. 4 were not a defect: objects on the wall (signs, concrete panels and blocks).",
        },
        {
          value: "10",
          label: "Not in the existing records",
          note: "Real defects at the spots we checked that the existing inspection records did not list.",
        },
        {
          value: "4",
          label: "Deeper than recorded",
          note: "At the spots we checked, the measured depth was in a higher severity band than the record.",
        },
        {
          value: "26 / 34",
          label: "Ruler readings in the map's depth class",
          note: "Readings at spots mapped 20-50 mm. 7 of the other 8 were deeper than the class.",
        },
      ],
      figures: [
        {
          src: `${M}/dash-strip.webp`,
          wide: true,
          caption:
            "Whole tunnel: 100 % of the lining mapped (~4 km); 82 section-marker intervals reviewed on the map (~40 % of the length); 214 spots flagged; 39 clear outcomes along the chainage.",
        },
        {
          src: `${M}/outcome-bars.webp`,
          caption:
            "Outcome at the 39 spots with a clear result, and 34 ruler readings against the map's depth class.",
        },
      ],
    },

    comparisons: {
      heading: "On site vs existing records vs RILA",
      intro:
        "Six spots side by side: the depth map with the flagged area outlined, the existing inspection record (standardised codes) at that spot, and the site photo with the ruler reading. Five are open joints; the sixth is a calcite deposit - a real change of the surface, matching the recorded water ingress, not scan noise.",
      rows: [
        {
          outcome: "agrees",
          label: "Agrees",
          spot: "SM79-80",
          mapSrc: `${M}/compare/r1-map.webp`,
          box: [0.3751363251777564, 0.18750000000000008, 0.2497273496444872, 0.625],
          code: "4J2",
          codeNote: "4 m² open joints\nseverity 2 (20-50 mm)",
          photoSrc: `${M}/compare/r1-photo.webp`,
          measured: "42 mm",
        },
        {
          outcome: "agrees",
          label: "Agrees",
          spot: "SM195-196",
          mapSrc: `${M}/compare/r2-map.webp`,
          box: [0.6663849711621462, 0.3649794929157346, 0.18022880868251875, 0.6249999999999999],
          code: "2J2",
          codeNote: "2 m² open joints\nseverity 2 (20-50 mm)",
          photoSrc: `${M}/compare/r2-photo.webp`,
          measured: "40 mm",
        },
        {
          outcome: "deeper",
          label: "Deeper than recorded",
          spot: "SM77-78",
          mapSrc: `${M}/compare/r3-map.webp`,
          box: [0.4281717371261574, 0.37500000000000033, 0.1436565257476853, 0.6249999999999997],
          code: "1J2",
          codeNote: "1 m² open joints\nseverity 2 (20-50 mm)",
          photoSrc: `${M}/compare/r3-photo.webp`,
          measured: "60 mm",
        },
        {
          outcome: "deeper",
          label: "Deeper than recorded",
          spot: "SM177-178",
          mapSrc: `${M}/compare/r4-map.webp`,
          box: [0.30769230769230793, 0.3243516062481583, 0.3846153846153846, 0.6035109048040083],
          code: "6J2",
          codeNote: "6 m² open joints\nseverity 2 (20-50 mm)",
          photoSrc: `${M}/compare/r4-photo.webp`,
          measured: "230 mm",
        },
        {
          outcome: "not-in-records",
          label: "Not in the records",
          spot: "SM81-82",
          mapSrc: `${M}/compare/r5-map.webp`,
          box: [0.11671200418585323, 0.34829400510204084, 0.11478288014972343, 0.625],
          code: "—",
          codeNote: "no joint code\nat this spot",
          photoSrc: `${M}/compare/r5-photo.webp`,
          measured: "60 mm",
        },
        {
          outcome: "agrees",
          label: "Agrees - calcite deposit",
          spot: "SM84-85",
          mapSrc: `${M}/compare/r6-map.webp`,
          box: [0.09624575191163977, 0.18750000000000003, 0.20624089695351375, 0.625],
          code: "10W3+40W4",
          codeNote: "water ingress codes,\nno joint code",
          photoSrc: `${M}/compare/r6-photo.webp`,
          measured: "calcite",
        },
      ],
    },

    problem: {
      heading: "Lining inspection is slow, subjective and partly out of reach",
      points: [
        "Visual inspection at night, in short possessions",
        "Slow and subjective; the crown is out of reach",
        "Existing records are codes on a grid, without depth",
        "RILA scans of the network already exist, but are not used for linings",
      ],
    },
    solution: {
      heading: "A depth map of the whole lining from the existing RILA scan",
      points: [
        "RILA 2020 train scan, captured at line speed",
        "Reference surface built from the lining itself",
        "Depth of every point in mm",
        "Bands at 20 mm and 50 mm, clusters typed by shape",
        "Spots located to the section marker",
        "Checked on site over four night possessions",
      ],
    },
    value: {
      heading: "Tells inspectors where to look",
      points: [
        "Whole-tunnel overview from data that already exists",
        "A roadmap to prioritise night inspections",
        "Adds depth and position to the existing records",
        "Repeatable: 2016 vs 2020 change detection is next",
      ],
    },

    limitations: {
      heading: "What RILA cannot see (yet)",
      points: [
        "RILA is a screening layer: it shows where to look, it does not replace hands-on inspection.",
        "RILA is coarser and noisier than terrestrial laser scanning (~10,000 vs ~20,000 pts/m², noise ≈ 8 mm vs ≈ 2 mm): single joints are lost in the noise, and defects shallower than ~20 mm cannot be separated from it.",
        "Very wide spalls read shallower than they are: the reference surface absorbs them, while their edges stay visible.",
        "Calcite and deposits change the surface and can mimic or hide defects.",
        "There was one clear miss at the spots we checked.",
        "The check was targeted at flagged spots: the map was reviewed on 82 of ~200 sections (~40 % of the length), with photos in 29 sections and ~240 m² looked at close up (~0.4 % of the lining).",
      ],
    },
    nextSteps: {
      heading: "From research to routine",
      points: [
        "Designed validation: a random sample per depth class, including cells the map shows as sound.",
        "Better processing: filtering, an adaptive reference surface, automatic classification.",
        "A field app on a tablet for the night shift.",
        "Other tunnels on the network.",
        "Change detection between the RILA 2016 and 2020 scans.",
      ],
    },

    toolLink: {
      href: "/tools/chipping-sodbury-validation",
      label: "Explore every checked spot",
      body: "The validation platform lists every flagged spot along the tunnel with its outcome, measurements and chainage.",
    },

    highlights: [
      {
        title: "No new survey",
        body: "The RILA scan had already been captured at line speed for other uses. The depth map reuses it.",
      },
      {
        title: "Checked in the tunnel",
        body: "Four night possessions; spots found from the section-marker plates, measured with a ruler and photographed.",
      },
      {
        title: "Finds what the records miss",
        body: "10 real defects at the checked spots were not in the existing records, and 4 were deeper than their recorded severity.",
      },
      {
        title: "Clear about its limits",
        body: "A screening and prioritisation layer for defects deeper than ~20 mm, located to the section marker - not (yet) a replacement for hands-on inspection.",
      },
    ],
  },
};
