export type TeamMember = {
  name: string;
  role: string;
  location: string;
  /** Years of experience, e.g. "23 yrs". Optional — remove to hide. */
  experience?: string;
  linkedin?: string;
  /** Path under /public. Omit to render the initials fallback avatar. */
  photo?: string;
  /** External / associate support rather than core staff. */
  external?: boolean;
  /** Unnamed role still to be filled — renders a DRAFT badge. */
  placeholder?: boolean;
};

/**
 * TEAM — from the org chart (2026). PLEASE REVIEW AND EDIT before publishing.
 *
 * Still needed for each person (see CONTENT-TODO.md):
 *   - LOCATION: set to "TBC" everywhere the chart didn't state one. Fill in
 *     the real city/country.
 *   - LinkedIn profile URL (optional per person).
 *   - Headshot photo (optional — leave blank for the initials avatar).
 *
 * Also confirm: is Paschalis's surname known? Are the three "Helper" roles
 * named yet, or should they stay as open positions?
 */
export const team: TeamMember[] = [
  // — Leadership —
  {
    name: "Anmol Bedi",
    role: "Director",
    location: "TBC",
    experience: "23 yrs",
  },
  {
    name: "Raveen Bains",
    role: "HR / Finance Lead Consultant",
    location: "TBC",
  },

  // — Principal Engineers —
  {
    name: "Marco Invernici",
    role: "Principal Engineer",
    location: "TBC",
    experience: "14 yrs",
  },
  {
    name: "David Brock",
    role: "Principal Engineer",
    location: "TBC",
    experience: "14 yrs",
  },
  {
    name: "Sagar Sheth",
    role: "Principal Engineer",
    location: "TBC",
    experience: "13 yrs",
  },

  // — Senior Engineers —
  {
    name: "Ramnath Arumugam",
    role: "Senior Engineer",
    location: "TBC",
    experience: "10 yrs",
  },
  {
    name: "Dr. Rakshith Shetty",
    role: "Senior Engineer",
    location: "TBC",
    experience: "10 yrs",
  },
  {
    name: "Rasmus Bjorkman",
    role: "Senior Engineer",
    location: "TBC",
  },

  // — Engineers —
  {
    name: "William Fletcher",
    role: "Engineer",
    location: "TBC",
    experience: "8 yrs",
  },
  {
    name: "Roberta Marini",
    role: "Digital Engineer / Geoscientist",
    location: "TBC",
  },
  {
    name: "Dr. Praveen Huded",
    role: "Engineer",
    location: "TBC",
  },
  {
    name: "Gaurav Mamgain",
    role: "Engineering Geologist",
    location: "TBC",
  },
  {
    name: "John Leane",
    role: "CAD Technician (2D/3D)",
    location: "TBC",
  },

  // — Graduate —
  {
    name: "Dr. Harshal Verma",
    role: "Graduate Engineer",
    location: "TBC",
  },

  // — External support —
  {
    name: "Dr. Claus Wisser",
    role: "Digital Engineer",
    location: "TBC",
    external: true,
  },
  {
    name: "Paschalis",
    role: "Digital Engineer",
    location: "TBC",
    external: true,
  },

  // — Open positions / helpers (unnamed in the chart) —
  {
    name: "Open position",
    role: "Helper",
    location: "Australia",
    placeholder: true,
  },
  {
    name: "Open position",
    role: "Helper",
    location: "India",
    placeholder: true,
  },
  {
    name: "Open position",
    role: "Helper",
    location: "London, UK",
    placeholder: true,
  },
];

export type Milestone = {
  year: string;
  title: string;
  body: string;
  placeholder?: boolean;
};

/**
 * Milestones drawn from the verified project record where possible.
 * Entries marked `placeholder` need confirmation — see CONTENT-TODO.md.
 */
export const milestones: Milestone[] = [
  {
    year: "2002",
    title: "Earliest recorded project",
    body: "TransGrid cable tunnel, Sydney — the first project in our portfolio record.",
  },
  {
    year: "2007",
    title: "Victoria Station Upgrade begins",
    body: "Design lead and construction support on a £741M upgrade of London's busiest Underground station, running through to 2016.",
  },
  {
    year: "2009",
    title: "FOUNDING_YEAR_TO_CONFIRM",
    body: "The deck references an 'Est. 2009' badge, but the project record starts in 2002. Confirm the correct founding date.",
    placeholder: true,
  },
  {
    year: "2014",
    title: "ITA Tunnelling Project of the Year",
    body: "Victoria Station Upgrade recognised internationally, followed by the BGA Fleming Award in 2015 and Specialist Tunnelling Project of the Year in 2016.",
  },
  {
    year: "2019",
    title: "Digital assessment practice established",
    body: "LiDAR and point cloud condition assessment of Brunel's 1845 Sapperton Tunnel for Network Rail — our first fully non-invasive heritage survey.",
  },
];

/** Company values — from the deck, slide 13 ("company values"). Needs sign-off. */
export const values = [
  {
    title: "Senior-led, always",
    body: "The engineer who designs your tunnel is the engineer who stands at the face. No handover to a junior team.",
  },
  {
    title: "Ground first, model second",
    body: "We design for the conditions that exist, not the ones the ground investigation assumed.",
  },
  {
    title: "Present through construction",
    body: "A design is not finished when it is issued. We stay on site and re-design when the ground says otherwise.",
  },
];
