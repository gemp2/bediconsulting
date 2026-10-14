import type { Metadata } from "next";
import Link from "next/link";
import { DraftBadge, Section } from "@/components/ui";
import { platforms } from "@/data/tools";

/* Owned by agent 03 (validation platform). The app itself is the static file
   public/tools/chipping-sodbury-validation/app.html (records inline, images in ./media/). */

const platform = platforms.find((p) => p.slug === "chipping-sodbury-validation")!;
const appSrc = "/tools/chipping-sodbury-validation/app.html";
const projectHref = "/projects/chipping-sodbury-tunnel-rila-assessment";

const title = "Chipping Sodbury - site validation explorer";
const intro = [
  "All 214 spots the RILA depth map flagged in Chipping Sodbury Tunnel, and what we found at the spots we checked on the night inspections of Nov-Dec 2025: the map with the checked area boxed, the site photos with ruler readings, and the outcome at each checked spot.",
  "Pick a spot on the tunnel strip or in the list, or filter by outcome. Arrow keys step through the spots.",
];

export const metadata: Metadata = {
  title,
  description: platform.summary,
  robots: { index: false, follow: false },
};

export default function ChippingSodburyValidationPage() {
  return (
    <Section>
      <Link
        href="/tools"
        className="-my-2 inline-block py-2 text-xs uppercase tracking-[0.14em] text-gold hover:underline"
      >
        ← All tools
      </Link>

      <div className="mt-8">
        <DraftBadge label="Pending client approval" />
      </div>

      <p className="eyebrow mt-8">Project platform</p>
      <h1 className="mt-4 max-w-4xl text-4xl leading-tight md:text-5xl">{title}</h1>
      <div className="mt-7 max-w-3xl space-y-3 text-base leading-relaxed muted">
        {intro.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.14em]">
        <a href={appSrc} target="_blank" rel="noopener" className="-my-2 hidden py-2 text-gold hover:underline md:inline-block">
          Open full screen ↗
        </a>
        <Link href={projectHref} className="-my-2 py-2 text-gold hover:underline">
          About the project →
        </Link>
      </div>

      {/* Desktop and tablet: the app embedded. */}
      <iframe
        src={appSrc}
        title="Chipping Sodbury site validation explorer"
        loading="lazy"
        className="mt-8 hidden h-[85vh] w-full border hairline md:block"
      />

      {/* Phones: a nested scrolling frame is awkward, so show a preview and open the app on its own. */}
      <div className="mt-8 md:hidden">
        <a href={appSrc} target="_blank" rel="noopener" className="block border hairline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={platform.image}
            alt="The validation explorer: outcome tiles and the tunnel strip with every flagged spot"
            className="aspect-[16/10] w-full object-cover object-left-top"
          />
        </a>
        <p className="mt-4 text-sm leading-relaxed muted">
          Best on a larger screen. On a phone, open it full screen.
        </p>
        <a
          href={appSrc}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-flex items-center justify-center bg-gold px-6 py-3 text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold/85"
        >
          Open full screen ↗
        </a>
      </div>
    </Section>
  );
}
