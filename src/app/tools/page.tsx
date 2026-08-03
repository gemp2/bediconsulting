import type { Metadata } from "next";
import { tools, upcomingTools } from "@/data/tools";
import { Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Free Tools for Tunnel & Geotechnical Engineers",
  description:
    "Free, browser-based tools for tunnelling and geotechnical engineers — starting with a true/apparent dip converter. Built and shared by BEDI Consulting.",
};

export default function ToolsPage() {
  return (
    <>
      <Section className="border-b hairline">
        <p className="eyebrow">BEDI Tools</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
          Free tools for tunnel &amp; geotechnical engineers.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed muted">
          Small, useful, browser-based tools we build for our own work and share
          for free — no sign-up, no cost. Made for engineers, geologists and
          students working underground.
        </p>
      </Section>

      <Section className="border-b hairline">
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <a
              key={tool.href}
              href={tool.href}
              className="group flex flex-col border hairline bg-navy2/50 p-7 transition-colors hover:border-gold/40"
            >
              <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
                {tool.category}
              </span>
              <h2 className="mt-3 text-xl">{tool.name}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed muted">
                {tool.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tool.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-black/10 px-3 py-1 text-[11px] text-bone/55"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 text-xs uppercase tracking-[0.14em] text-gold">
                Open tool →
              </span>
            </a>
          ))}

          <div className="flex flex-col justify-center border border-dashed border-black/15 p-7">
            <span className="text-[10px] uppercase tracking-[0.18em] muted">
              More coming
            </span>
            <p className="mt-3 text-sm leading-relaxed muted">
              We&rsquo;re adding tools over time. On the list:
            </p>
            <ul className="mt-4 space-y-2">
              {upcomingTools.map((u) => (
                <li key={u} className="flex items-start gap-2 text-sm text-bone/70">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-gold/50" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
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
