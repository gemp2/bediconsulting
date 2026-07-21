# Bedi Consulting website

Next.js 16 (App Router) + Tailwind v4 + TypeScript. Deploys to Vercel.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where the content lives

All copy and data is separated from the components, in `src/data/`:

| File | Contains |
|---|---|
| `site.ts` | Slogan, description, stats, nav, testimonials, clients |
| `services.ts` | The six disciplines and the four-step approach |
| `projects.ts` | All 26 projects, coordinates, and the three case studies |
| `team.ts` | Team members, milestones, values |

**To change text on the site, edit these files — not the page components.**
The project counts, country count and date range on the site are computed from
the `projects` array, so adding a project updates them automatically.

## Pages

- `/` — hero, stats, capabilities, the underground challenge, services,
  featured case studies, interactive world map, testimonials
- `/about` — who we are, values, team, timeline, contact CTA
- `/services` — six service cards and the four-step approach
- `/projects` — filterable map and grid view over all 26 projects
- `/projects/[slug]` — case study pages (Victoria, Riyadh, Sapperton)
- `/contact` — contact details and enquiry form

## Placeholders

Content that does not exist yet renders with a visible amber `DRAFT` badge or a
dashed `ImagePlaceholder` box. **See [CONTENT-TODO.md](CONTENT-TODO.md)** for
the full list, plus several data conflicts inherited from the draft pages that
need a decision.

## `reference/`

The three original concept HTML pages. Not part of the build — kept because
their canvas animations are worth porting. See CONTENT-TODO.md §6.

## Deploying

Vercel auto-detects Next.js; no configuration needed. Push to `main` and it
deploys.
