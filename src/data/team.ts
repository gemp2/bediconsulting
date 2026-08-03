export type TeamMember = {
  name: string;
  role: string;
  location: string;
  /** LinkedIn profile URL. Leave "" to fall back to the company page. */
  linkedin?: string;
  /** Path under /public (e.g. "/media/headshots/anmol.jpg"). "" = initials. */
  photo?: string;
};

/**
 * TEAM — edit this list freely.
 *
 * To update a person: change name / role / location, paste their LinkedIn
 * profile URL into `linkedin`, and (optionally) point `photo` at a headshot
 * in /public. To add someone, copy a block. To remove someone, delete it.
 */
export const team: TeamMember[] = [
  {
    name: "Anmol Bedi",
    role: "Director",
    location: "London",
    linkedin: "",
  },
  {
    name: "Raveen Bains",
    role: "HR / Finance Lead Consultant",
    location: "London",
    linkedin: "",
  },
  {
    name: "Marco Invernici",
    role: "Principal Engineer",
    location: "London",
    linkedin: "",
  },
  {
    name: "David Brock",
    role: "Principal Engineer",
    location: "Cyprus",
    linkedin: "",
  },
  {
    name: "Sagar Sheth",
    role: "Principal Engineer",
    location: "London",
    linkedin: "",
  },
  {
    name: "Ramnath Arumugam",
    role: "Senior Engineer",
    location: "India",
    linkedin: "",
  },
  {
    name: "Dr. Rakshith Shetty",
    role: "Senior Engineer",
    location: "India",
    linkedin: "",
  },
  {
    name: "Rasmus Bjorkman",
    role: "Senior Engineer",
    location: "Australia",
    linkedin: "",
  },
  {
    name: "William Fletcher",
    role: "Engineer",
    location: "London",
    linkedin: "",
  },
  {
    name: "Roberta Marini",
    role: "Digital Engineer / Geoscientist",
    location: "London",
    linkedin: "",
  },
  {
    name: "Dr. Praveen Huded",
    role: "Engineer",
    location: "India",
    linkedin: "",
  },
  {
    name: "Gaurav Mamgain",
    role: "Engineering Geologist",
    location: "India",
    linkedin: "",
  },
  {
    name: "John Leane",
    role: "CAD Technician (2D/3D)",
    location: "London",
    linkedin: "",
  },
  {
    name: "Dr. Harshal Verma",
    role: "Graduate Engineer",
    location: "India",
    linkedin: "",
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
