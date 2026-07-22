# Content & launch to-do

The site structure is built and deploys. What remains is content and a handful
of decisions only BEDI can make. Nothing below is a code problem.

---

## 1. Data conflicts — decide the correct figure

The three draft HTML pages contradicted each other. The site currently uses the
**defensible** number (what the project record actually supports), not the
larger claim. Confirm or correct each.

| Claim | Drafts said | Site now says | Why |
|---|---|---|---|
| Projects delivered | `40+` | `26` | The map listed 28, but 2 were duplicates of Victoria and Riyadh re-filed under Digital Assessment |
| Countries | `10+` / `9` | `8` | UK, USA, Singapore, Hong Kong, Australia, NZ, Saudi Arabia, PNG |
| Years experience | `15+` | `20+` | Project record starts 2002 |
| Date range | `2002–2024` | `2002–2020` | Latest actual project is Sapperton, 2019–2020 |

**If the real numbers are higher, the missing projects just need adding to
`src/data/projects.ts`** — the counts derive from that array automatically.

---

## 2. Errors carried over from the drafts — now fixed, please verify

- **Crossrail C121 coordinates.** Draft had longitude `0.038`, which plots in
  the Thames estuary. Changed to `-0.06` (Whitechapel / Liverpool St). Confirm
  the actual site.
- **"Seven disciplines" vs six cards.** The drafts headlined seven but listed
  six, numbered 01–05 then 07 with no 06. Renumbered 01–06 and the heading now
  says six. If a seventh exists, `Handworks & Headings` and `Construction
  Support` appear in the capability ticker without a service card — likely
  candidates.
- **Victoria awards count.** One page said 4 awards, another 3. Site uses 4
  (including ITA Awards Finalist 2015). Confirm.
- **"2km in 4 hours"** appeared once for Sapperton and nowhere else. Not used
  on the site — verify before reinstating.
- **Copyright year** now renders automatically. No more stale 2024.

---

## 3. Content that does not exist yet

These render as visible placeholders with amber `DRAFT` badges so they cannot
ship unnoticed.

### Team — `src/data/team.ts`
Only **Dr. Anmol Bedi** is confirmed. The deck (slide 14) calls for 15 people
with photo, role, location and LinkedIn. Three obvious dummies are in place.
Needed per person: name, role, location, headshot, LinkedIn URL.

### Photography
Every image on the site is a labelled placeholder. The only real photo that
existed anywhere was one Victoria Station image hosted on the current
WordPress site. Needed:
- Team photo (About, block 1)
- Headshots for every team member
- Construction photography for the 3 case studies
- An example image per service (6)

### Founding date
The deck references an "Est. 2009" badge, but the project record starts in
2002. Which is right? Currently flagged as a draft milestone.

### Contact details
Only `a.bedi@bediconsulting.com` exists. Needed: full postal address, phone,
and the LinkedIn company page URL.

### LinkedIn feed — `src/data/linkedin.ts`
The home page ends with a LinkedIn feed carousel (deck block 5), currently
showing three placeholder posts. To make it real:
1. Set `companyUrl` to the actual BEDI LinkedIn company page.
2. Either fill `posts` with real updates by hand, **or** decide you want a
   live auto-updating feed — that needs a third-party widget (EmbedSocial,
   SociableKit or Taggbox). Those load an external script and set cookies, so
   they'd also need a mention in the cookie/privacy notice. Tell me which and
   I'll wire it in.

### Project datasheets
The drafts had four "Download Datasheet" buttons all pointing at `#` — no PDFs
were ever produced. The site now shows a "request the datasheet" CTA instead of
a dead download link. Produce the PDFs or leave as-is.

---

## 4. Before going live

> **The site is currently blocked from Google.** Both `robots.txt` and the
> robots meta tag say `noindex` while placeholder content is live, so
> "TEAM_MEMBER_02" can never be indexed against the BEDI name.
>
> **To launch:** add `NEXT_PUBLIC_ALLOW_INDEXING=true` to the Vercel project's
> environment variables and redeploy. Do this *only* once the placeholders are
> gone.


- [ ] **Contact form has no backend.** It currently opens the visitor's mail
      client with a pre-filled message. That works, but enquiries depend on the
      visitor having mail configured. Wire up Resend / Formspree / a route
      handler for a real submission. See the comment in
      `src/components/ContactForm.tsx`.
- [ ] **Cookie consent** — the deck (slide 31) flags this as missing on the
      current site. If analytics are added, this becomes a legal requirement.
      Not needed while the site sets no cookies.
- [ ] **Privacy policy** — required once the contact form stores or transmits
      personal data.
- [ ] **Domain** — point `bediconsulting.com` at Vercel, or use the
      `.vercel.app` subdomain while reviewing.
- [ ] **Set the real production URL** in `src/data/site.ts` (`site.url`) so
      Open Graph tags and metadata resolve correctly.
- [ ] **Favicon** — still the Next.js default.
- [ ] **Redirects from the old site** so existing Google results don't 404.

---

## 5. SEO — the deck's main complaint, now addressed

Slide 32 flagged that the current site puts its key sentence inside an image,
so Google can't read it. On the new site **all copy is real HTML text**, every
page has its own `<title>` and meta description, and headings are properly
structured. Once real content lands, add:

- [ ] Per-project Open Graph images
- [ ] `sitemap.ts` and `robots.ts`
- [ ] Structured data (`Organization`, `Article` per case study)

---

## 6. Deferred from the deck

Ideas in the deck that are not built yet, in rough priority order:

1. **Animated canvas illustrations** (slides 6, 8, 24). The drafts had genuinely
   good hand-written canvas animations — tunnel, shaft, LiDAR, TBM. They are
   preserved in `reference/` and can be ported.
2. **LinkedIn feed embed** (slide 10). Needs the company page URL and a feed
   widget or API access.
3. **Hero video** (slide 6) — "video or images of a tunnel that represent us".
4. **Hover-reveal effect** (slide 35, competitor idea).
5. **Award badges on project cards** (site map). Data exists for Victoria only.
