/**
 * LinkedIn feed content for the home page.
 *
 * PLACEHOLDER DATA. Two things are needed to make this real (see
 * CONTENT-TODO.md):
 *   1. The BEDI LinkedIn company page URL — set `companyUrl` below.
 *   2. Either real post content in `posts`, or a third-party feed widget
 *      (EmbedSocial / SociableKit / Taggbox) if you want it to auto-update.
 *
 * The `posts` below are obvious dummies flagged `placeholder: true` so they
 * render a visible DRAFT badge and cannot be mistaken for real posts.
 */

export const companyUrl = "https://www.linkedin.com/company/bedi-consulting"; // TODO: confirm the real handle

export type LinkedInPost = {
  id: string;
  date: string;
  excerpt: string;
  /** Label under the card, e.g. "Social Post", "Article". */
  kind: string;
  /** Real post URL when available; falls back to the company page. */
  url?: string;
  placeholder?: boolean;
};

export const posts: LinkedInPost[] = [
  {
    id: "1",
    date: "PLACEHOLDER — 3 weeks ago",
    kind: "Social Post",
    excerpt:
      "SAMPLE POST — replace with a real LinkedIn update. This is where a recent BEDI post about a project milestone, award or technical insight will appear.",
    placeholder: true,
  },
  {
    id: "2",
    date: "PLACEHOLDER — 1 month ago",
    kind: "Social Post",
    excerpt:
      "SAMPLE POST — replace with a real LinkedIn update. Company news, conference talks or a look inside a live tunnelling job would sit here.",
    placeholder: true,
  },
  {
    id: "3",
    date: "PLACEHOLDER — 2 months ago",
    kind: "Article",
    excerpt:
      "SAMPLE POST — replace with a real LinkedIn update. A longer-form article on ground risk, digital assessment or lessons from a completed drive.",
    placeholder: true,
  },
];
