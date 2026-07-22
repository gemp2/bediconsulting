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

export const companyUrl =
  "https://www.linkedin.com/company/bedi-consulting-ltd/";

/**
 * Live-feed widget (Option B). The feed auto-updates once this is configured
 * with a real embed ID from a third-party provider.
 *
 * TO GO LIVE:
 *   1. Sign up at sociablekit.com (or embedsocial.com), connect the BEDI
 *      LinkedIn page, and create a "LinkedIn Page Posts" widget.
 *   2. Paste the widget's embed ID into `embedId` below and set `scriptSrc`
 *      + `containerClass` to the snippet the provider gives you (the defaults
 *      below are SociableKit's LinkedIn Page Posts widget).
 *   3. Add a cookie-consent + privacy notice — the widget loads an external
 *      script and sets third-party cookies (see CONTENT-TODO.md §4).
 *
 * While `embedId` is the placeholder EXAMPLE_ID, NO external script loads and
 * the site shows the styled example carousel instead — so there are no
 * third-party cookies yet.
 */
export const widget = {
  provider: "SociableKit",
  embedId: "EXAMPLE_ID", // <-- replace with the real widget ID to go live
  scriptSrc: "https://widgets.sociablekit.com/linkedin-page-posts/widget.js",
  containerClass: "sk-ww-linkedin-page-post",
};

export const widgetConfigured = widget.embedId !== "EXAMPLE_ID";

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
