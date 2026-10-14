import type { Metadata } from "next";
import Link from "next/link";
import { platforms, upcomingTools } from "@/data/tools";
import {
  ImagePlaceholder,
  Section,
  SectionHeading,
} from "@/components/ui";
import { ApparentDipTool } from "@/components/tools/ApparentDipTool";

export const metadata: Metadata = {
  title: "Our Tools — Free Tools for Tunnel & Geotechnical Engineers",
  description:
    "Free, browser-based tools for tunnelling and geotechnical engineers — starting with a true/apparent dip converter. Built and shared by BEDI Consulting.",
};

export default function ToolsPage() {
  return (
    <>
      <Section className="border-b hairline">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Our Tools</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
              Free tools for tunnel &amp; geotechnical engineers.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed muted">
              Browser-based calculators used in our own work, shared free — no
              sign-up. For engineers, engineering geologists and students
              working underground.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/services/digital-assessment.png"
            alt="Point-cloud scan of a railway tunnel"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </Section>

      {/* The tool, embedded directly on the page */}
      <Section className="border-b hairline">
        <ApparentDipTool />

        <p className="mt-6 max-w-3xl text-xs leading-relaxed muted">
          Formula after Walsh, G.J. (2022), <em>An apparent dip calculator for
          spreadsheets</em>, U.S. Geological Survey Techniques and Methods, book 7,
          chap. C28; and Addie, G. (1968), <em>A new true thickness formula based
          on the apparent dip</em>, Economic Geology, v. 63. Provided as-is for
          guidance — verify against your own analysis.
        </p>
      </Section>

      {/* Platforms built for specific projects */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow="Project platforms"
          title="Built for a project, shared as a demo."
        />
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {platforms.map((p) => (
            <li key={p.slug}>
              <Link
                href={p.href}
                className="group flex h-full flex-col border hairline bg-navy2/40 transition-colors hover:border-gold/50"
              >
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                ) : (
                  <ImagePlaceholder label={p.name} aspect="aspect-[16/9]" />
                )}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] muted">
                      {p.project}
                    </p>
                    <span
                      className={`border px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] ${
                        p.status === "live"
                          ? "border-emerald-600/40 text-emerald-700"
                          : "border-black/20 text-bone/60"
                      }`}
                    >
                      {p.status === "live" ? "Live demo" : "Concept"}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg leading-snug">{p.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed muted">
                    {p.summary}
                  </p>
                  <span className="mt-6 text-xs uppercase tracking-[0.14em] text-gold group-hover:underline">
                    Open →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Growing library */}
      <Section className="border-b hairline">
        <SectionHeading eyebrow="Coming soon" title="More tools on the way." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcomingTools.map((u) => (
            <li
              key={u}
              className="border border-dashed border-black/15 p-5 text-sm text-bone/70"
            >
              {u}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">
            Beyond a quick calculation?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed muted">
            These are quick helpers. For design, analysis or monitoring on a live
            project, contact our engineers.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-gold px-6 py-3 text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold/85"
            >
              Get in touch →
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
