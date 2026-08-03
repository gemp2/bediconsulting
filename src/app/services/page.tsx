import type { Metadata } from "next";
import { services, approach } from "@/data/services";
import { challengeIntro, challenges } from "@/data/site";
import {
  Button,
  Card,
  ImagePlaceholder,
  Section,
  SectionHeading,
} from "@/components/ui";

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
          Our disciplines. One focus: underground.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed muted">
          From first ground investigation to post-construction monitoring — we
          cover every technical aspect of underground construction and asset
          assessment.
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

      {/* BLOCK 1 — Our services */}
      <Section className="border-b hairline">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 border hairline bg-navy2/40"
            >
              {s.video ? (
                <video
                  className="aspect-[16/9] w-full border-b hairline object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  poster={s.poster}
                >
                  <source src={s.video} type="video/mp4" />
                </video>
              ) : s.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={s.image}
                  alt={`${s.name} — Bedi Consulting on site`}
                  className="aspect-[16/9] w-full border-b hairline object-cover"
                  loading="lazy"
                />
              ) : (
                <ImagePlaceholder
                  label={`${s.name} — example image needed`}
                  aspect="aspect-[16/9]"
                  className="border-0 border-b border-dashed"
                />
              )}
              <div className="p-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-semibold text-gold/70">
                    {s.num}
                  </span>
                  <h2 className="text-xl">{s.name}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed muted">{s.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
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
            </article>
          ))}
        </div>
      </Section>

      {/* BLOCK 2 — Our approach */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow="Our approach"
          title="Understand. Design. Stay. Verify."
          body="A tunnel design that is issued and forgotten is a liability. Ours is a continuous engagement from ground investigation through to close-out."
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
            Not sure which discipline you need?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed muted">
            Most projects need several. Describe the problem and we will tell you
            what it actually requires.
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
