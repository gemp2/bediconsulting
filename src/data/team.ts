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
    photo: "/media/headshots/anmol-bedi.jpeg",
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
    photo: "/media/headshots/marco-invernici.jpeg",
  },
  {
    name: "David Brock",
    role: "Principal Engineer",
    location: "Cyprus",
    linkedin: "",
    photo: "/media/headshots/david-brock.jpeg",
  },
  {
    name: "Sagar Sheth",
    role: "Principal Engineer",
    location: "London",
    linkedin: "",
    photo: "/media/headshots/sagar-sheth.jpeg",
  },
  {
    name: "Ramnath Arumugam",
    role: "Senior Engineer",
    location: "India",
    linkedin: "",
    photo: "/media/headshots/ramnath-arumugam.jpeg",
  },
  {
    name: "Dr. Rakshith Shetty",
    role: "Senior Engineer",
    location: "India",
    linkedin: "",
    photo: "/media/headshots/rakshith-shetty.jpeg",
  },
  {
    name: "Rasmus Bjorkman",
    role: "Senior Engineer",
    location: "Australia",
    linkedin: "",
    photo: "/media/headshots/rasmus-bjorkman.jpeg",
  },
  {
    name: "William Fletcher",
    role: "Engineer",
    location: "London",
    linkedin: "",
    photo: "/media/headshots/william-fletcher.jpeg",
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
    photo: "/media/headshots/praveen-huded.jpeg",
  },
  {
    name: "Gaurav Mamgain",
    role: "Engineering Geologist",
    location: "India",
    linkedin: "",
    photo: "/media/headshots/gaurav-mamgain.jpeg",
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
    photo: "/media/headshots/harshal-verma.jpeg",
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

/** Core values (from BEDI). */
export const coreValues = [
  {
    title: "Excellence",
    body: "We aim to deliver perfection in all facets of our work.",
  },
  {
    title: "Integrity",
    body: "Upholding high moral standards and ethical principles throughout all dealings.",
  },
  {
    title: "Reliability",
    body: "Working above and beyond expectation to deliver success.",
  },
  {
    title: "Transparency",
    body: "We believe in open communication and accountability.",
  },
  {
    title: "Collaboration",
    body: "Working together with clients to deliver co-operative designs.",
  },
  {
    title: "Safety",
    body: "We hold the safety of the public and the individual highly in all decisions.",
  },
];

/** How the practice works — method statements, not slogans. */
export const values = [
  {
    title: "Senior-led design",
    body: "The engineer responsible for the design remains involved through construction.",
  },
  {
    title: "Observational method",
    body: "Design assumptions are checked against face and monitoring data and revised where the ground differs from prediction.",
  },
  {
    title: "Buildable design",
    body: "Support and sequence are specified to the contractor's plant and methods, not in isolation.",
  },
];
