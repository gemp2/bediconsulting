import Link from "next/link";
import {
  site,
  stats,
  capabilityTicker,
  challengeIntro,
  challenges,
  testimonials,
  clients,
} from "@/data/site";
import { services } from "@/data/services";
import { featuredProjects, countryCount, projects } from "@/data/projects";
import { Marquee } from "@/components/Marquee";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { LinkedInWidget } from "@/components/LinkedInWidget";
import {
  Button,
  Card,
  ImagePlaceholder,
  Section,
  SectionHeading,
  Stat,
} from "@/components/ui";

export default function HomePage() {
  const [before, after] = site.slogan.split(site.sloganAccent);

  return (
    <>
      {/* BLOCK 1 — Hero */}
      <section className="relative overflow-hidden border-b hairline">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(247,148,30,0.12),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] md:text-6xl">
            {before}
            <span className="text-gold">{site.sloganAccent}</span>
            {after}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed muted md:text-lg">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">Explore our work →</Button>
            <Button href="/services" variant="outline">
              Our services
            </Button>
          </div>
        </div>

        {/* Hero video — real BEDI site footage */}
        <div className="relative mt-8 md:mt-12">
          <video
            className="h-[55vh] w-full object-cover md:h-[72vh]"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/tunnel-bore.jpg"
          >
            <source src="/media/hero-tunnel.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* BLOCK 2 — Numbers + clients */}
      <Section className="border-b hairline">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        <div className="mt-16">
          <p className="eyebrow">Selected clients &amp; programmes</p>
          <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            {clients.map((c) => (
              <li key={c} className="text-sm tracking-wide text-bone/55">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Marquee items={capabilityTicker} />

      {/* The underground challenge */}
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

      {/* BLOCK 3 — Services */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow="What we do"
          title="Six disciplines. One focus: underground."
          body="From first ground investigation to post-construction monitoring — we cover every technical aspect of underground construction and asset assessment."
        />

        <ul className="mt-14 divide-y divide-white/5 border-y hairline">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services#${s.slug}`}
                className="group grid gap-4 py-8 transition-colors hover:bg-gold/[0.03] md:grid-cols-[80px_1fr_auto] md:items-baseline md:gap-8"
              >
                <span className="font-display text-sm font-semibold text-gold/70">
                  {s.num}
                </span>
                <div>
                  <h3 className="flex items-center gap-3 text-xl">
                    {s.name}
                    {s.isNew && (
                      <span className="border border-gold/40 px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-gold">
                        New
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed muted">
                    {s.body}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.14em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Featured case studies */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow="Selected work"
          title="Three projects, three different problems."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.slug}`}
              className="group flex flex-col border hairline bg-navy2/40 transition-colors hover:border-gold/30"
            >
              <ImagePlaceholder
                label={`${p.name} — photography needed`}
                aspect="aspect-[16/10]"
                className="border-0 border-b border-dashed"
              />
              <div className="flex flex-1 flex-col p-6">
                <span className="text-[10px] uppercase tracking-[0.18em] text-gold">
                  {p.caseStudy!.category}
                </span>
                <h3 className="mt-3 text-lg leading-snug">{p.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed muted">
                  {p.description}
                </p>
                <span className="mt-5 text-xs uppercase tracking-[0.14em] text-gold">
                  Read case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* In the field — real site media */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow="In the field"
          title="Where the work actually happens."
          body="Night possessions, heritage tunnels and live railway — our engineers on site, on the tools."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src="/media/tunnel-portal.jpg"
            alt="Engineers at a masonry railway tunnel portal at dusk"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
          <img
            src="/media/digital-survey.jpg"
            alt="Engineer capturing a digital survey of a brick tunnel wall"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
          <img
            src="/media/tunnel-bore.jpg"
            alt="View along the track into a lit tunnel bore"
            className="aspect-[3/4] w-full object-cover"
            loading="lazy"
          />
          <video
            className="aspect-[3/4] w-full object-cover"
            controls
            muted
            playsInline
            preload="metadata"
            poster="/media/digital-survey.jpg"
          >
            <source src="/media/field-survey.mp4" type="video/mp4" />
          </video>
        </div>
      </Section>

      {/* BLOCK 4 — World map */}
      <Section id="where-we-are" className="border-b hairline">
        <SectionHeading
          eyebrow="Where we work"
          title={`${projects.length} projects across ${countryCount} countries.`}
          body="Filter by discipline, region or period — or click any pin to see the detail."
        />
        <div className="mt-12">
          <ProjectExplorer />
        </div>
      </Section>

      {/* BLOCK 5 — Testimonials */}
      <Section className="border-b hairline">
        <SectionHeading eyebrow="What clients say" title="In their words." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col border hairline bg-navy2/40 p-7"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-bone/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t hairline pt-5">
                <span className="block text-sm text-gold">{t.name}</span>
                <span className="mt-1 block text-xs muted">
                  {t.role}, {t.org}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Closing CTA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight md:text-5xl">
            The ground is complex. We are ready for it.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed muted">
            Tell us about your project. A senior engineer will respond — not a
            sales team.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Start a conversation →</Button>
            <Button href="/projects" variant="outline">
              View our projects
            </Button>
          </div>
        </div>
      </Section>

      {/* BLOCK 5 (cont.) — LinkedIn feed */}
      <Section className="border-t hairline">
        <SectionHeading eyebrow="From our LinkedIn" title="Latest from BEDI." />
        <div className="mt-12">
          <LinkedInWidget />
        </div>
      </Section>
    </>
  );
}
