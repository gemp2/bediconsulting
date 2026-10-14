import type { Metadata } from "next";
import Link from "next/link";
import { DraftBadge, Section } from "@/components/ui";
import { digitalTunnel as dt } from "@/data/tools/digital-tunnel";

/* The app itself is the static PWA in public/tools/digital-tunnel/app/. */

export const metadata: Metadata = {
  title: dt.title,
  description: dt.intro[0],
  robots: { index: false, follow: false },
};

const openButton =
  "inline-flex items-center justify-center bg-gold px-6 py-3 text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold/85";

export default function DigitalTunnelPage() {
  return (
    <>
      <Section className="border-b hairline">
        <Link
          href="/tools"
          className="-my-2 inline-block py-2 text-xs uppercase tracking-[0.14em] text-gold hover:underline"
        >
          ← All tools
        </Link>

        <div className="mt-8">
          <DraftBadge label="Pending client approval" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="eyebrow">{dt.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
              {dt.title}
            </h1>
            <div className="mt-7 max-w-2xl space-y-3 text-base leading-relaxed muted">
              {dt.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-6 max-w-2xl border-l-2 border-amber-500 bg-amber-100 px-4 py-3 text-sm text-amber-800">
              {dt.mockupNote}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href={dt.appSrc} target="_blank" rel="noopener" className={openButton}>
                Open the app ↗
              </a>
              <Link
                href={dt.projectHref}
                className="-my-2 py-2 text-xs uppercase tracking-[0.14em] text-gold hover:underline"
              >
                About the project →
              </Link>
            </div>

            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {dt.features.map((f) => (
                <li key={f.title} className="border hairline bg-navy2/40 p-5">
                  <h2 className="text-base text-gold">{f.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed muted">{f.body}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Large screens: the app running in a phone-sized frame. */}
          <div className="hidden lg:block">
            <div className="rounded-[2.5rem] border-[10px] border-[#1c2227] bg-[#0e1215] shadow-xl">
              <iframe
                src={dt.appSrc}
                title="Digital Tunnel field app (mockup)"
                loading="lazy"
                allow="camera; fullscreen; xr-spatial-tracking"
                className="block h-[780px] w-[375px] rounded-[1.8rem]"
              />
            </div>
            <p className="mt-3 text-center text-xs muted">Live mockup - scroll and tap inside</p>
          </div>
        </div>
      </Section>

      {/* Screens: on phones and tablets they stand in for the embedded app. */}
      <Section className="lg:hidden">
        <ul className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2">
          {dt.screens.map((s) => (
            <li key={s.src} className="w-[62%] shrink-0 snap-start sm:w-[40%]">
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.caption}
                  loading="lazy"
                  className="w-full rounded-2xl border hairline"
                />
                <figcaption className="mt-2 text-xs muted">{s.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <a href={dt.appSrc} target="_blank" rel="noopener" className={`mt-8 ${openButton}`}>
          Open the app ↗
        </a>
      </Section>
    </>
  );
}
