export type TeamMember = {
  name: string;
  role: string;
  location: string;
  linkedin?: string;
  /** Path under /public. Null renders the initials fallback avatar. */
  photo?: string;
  /** True until real details are supplied — drives the "draft" badge. */
  placeholder?: boolean;
};

/**
 * PLACEHOLDER DATA — only Dr. Anmol Bedi is confirmed from source material.
 *
 * The deck (slide 14) calls for 15 people with photo, role, location and
 * LinkedIn. None of that exists yet. The entries below are deliberately
 * obvious dummies so they cannot be mistaken for real staff; every one is
 * flagged `placeholder: true` and renders a visible "DRAFT" badge on the page.
 *
 * Replace with real people before launch. See CONTENT-TODO.md.
 */
export const team: TeamMember[] = [
  {
    name: "Dr. Anmol Bedi",
    role: "Founder & Principal Engineer",
    location: "London, UK",
  },
  {
    name: "TEAM_MEMBER_02",
    role: "ROLE_TO_BE_CONFIRMED",
    location: "LOCATION_TBC",
    placeholder: true,
  },
  {
    name: "TEAM_MEMBER_03",
    role: "ROLE_TO_BE_CONFIRMED",
    location: "LOCATION_TBC",
    placeholder: true,
  },
  {
    name: "TEAM_MEMBER_04",
    role: "ROLE_TO_BE_CONFIRMED",
    location: "LOCATION_TBC",
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
