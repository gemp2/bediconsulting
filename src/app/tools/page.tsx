import type { Metadata } from "next";
import { upcomingTools } from "@/data/tools";
import { Section, SectionHeading } from "@/components/ui";
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
        <p className="eyebrow">Our Tools</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
          Free tools for tunnel &amp; geotechnical engineers.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed muted">
          Small, useful, browser-based tools we build for our own work and share
          for free — no sign-up, no cost. Made for engineers, geologists and
          students working underground.
        </p>
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
            Need something more involved?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed muted">
            These are quick helpers. For real project work — design, analysis,
            monitoring — talk to our engineers.
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
