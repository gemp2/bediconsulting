import type { Metadata } from "next";
import { services, approach } from "@/data/services";
import { challengeIntro, challenges } from "@/data/site";
import { Button, Card, Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mined tunnels, mechanised tunnels, cut and cover, shafts, geotechnical engineering, instrumentation and monitoring, and digital assessment.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b hairline">
        <p className="eyebrow">What we do</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
          Tunnel &amp; geotechnical services.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed muted">
          Design conception through construction: sprayed concrete and TBM
          tunnels, shafts and deep excavations, ground investigation,
          instrumentation and digital condition assessment.
        </p>
      </Section>

      {/* Intro — the underground challenge */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow={challengeIntro.eyebrow}
          title={challengeIntro.heading}
          body={challengeIntro.body}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c) => (
            <Card key={c.title}>
              <h3 className="text-base leading-snug text-bone">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed muted">{c.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* BLOCK 1 — Our services (click to expand) */}
      <Section className="border-b hairline">
        <p className="text-sm muted">Select a service for the full detail.</p>
        <div className="mt-8 space-y-4">
          {services.map((s) => (
            <details
              key={s.slug}
              id={s.slug}
              className="group scroll-mt-24 border hairline bg-navy2/40 open:bg-navy2/60"
            >
              <summary className="flex cursor-pointer list-none items-center gap-5 p-6 [&::-webkit-details-marker]:hidden">
                {s.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.image}
                    alt=""
                    className="hidden h-20 w-28 shrink-0 object-cover sm:block"
                    loading="lazy"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-sm font-semibold text-gold/70">
                      {s.num}
                    </span>
                    <h2 className="text-xl">{s.name}</h2>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed muted">{s.body}</p>
                </div>
                <span
                  aria-hidden
                  className="svc-toggle shrink-0 text-2xl leading-none text-gold"
                />
              </summary>

              <div className="border-t hairline px-6 pb-8 pt-6">
                {s.intro && (
                  <p className="max-w-3xl text-sm leading-relaxed text-bone/80">
                    {s.intro}
                  </p>
                )}

                {s.sections && (
                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {s.sections.map((sec) => (
                      <div key={sec.heading}>
                        <h3 className="text-sm font-semibold text-gold">
                          {sec.heading}
                        </h3>
                        {sec.body && (
                          <p className="mt-2 text-sm leading-relaxed muted">
                            {sec.body}
                          </p>
                        )}
                        {sec.points && (
                          <ul className="mt-3 space-y-2">
                            {sec.points.map((p) => (
                              <li
                                key={p}
                                className="flex items-start gap-3 text-sm text-bone/80"
                              >
                                <span
                                  aria-hidden
                                  className="mt-2 h-1 w-1 shrink-0 bg-gold/60"
                                />
                                {p}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-black/10 px-3 py-1 text-[11px] text-bone/55"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </Section>

      {/* BLOCK 2 — Our approach */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow="Method"
          title="Ground model to close-out."
          body="A continuous engagement from the design ground model through construction support and verification — not a design issued and forgotten."
        />

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {approach.map((step) => (
            <li key={step.num} className="border-t-2 border-gold/40 pt-6">
              <span className="font-display text-3xl font-extrabold text-gold/30">
                {step.num}
              </span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">
            Scoping a project?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed muted">
            Most projects span several of these disciplines. Send the ground and
            constraints and we will define the scope.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Talk to an engineer →</Button>
            <Button href="/projects" variant="outline">
              See the work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
