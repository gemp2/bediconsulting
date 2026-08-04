import { site, stats } from "@/data/site";
import { projects, countryCount } from "@/data/projects";
import { HeroVideo } from "@/components/HeroVideo";
import { HomeMap } from "@/components/HomeMap";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { LinkedInWidget } from "@/components/LinkedInWidget";
import { Button, Section, SectionHeading, Stat } from "@/components/ui";

export default function HomePage() {
  const [before, after] = site.slogan.split(site.sloganAccent);

  return (
    <>
      {/* BLOCK 1 — Hero with background video */}
      <section className="relative overflow-hidden border-b hairline">
        <HeroVideo />
        <div className="relative mx-auto max-w-7xl px-6 py-36 md:py-52">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] text-white md:text-6xl">
            {before}
            <span className="text-gold">{site.sloganAccent}</span>
            {after}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            {site.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">Explore our work →</Button>
            <Button href="/services" variant="outline">
              Our services
            </Button>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — Numbers */}
      <Section className="border-b hairline">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      {/* Map — titled, light, single popup at a time */}
      <section id="where-we-are" className="border-b hairline pt-24 md:pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Projects</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">Where we work</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed muted">
            {projects.length} projects across {countryCount} countries. Select a
            pin for the project and detail.
          </p>
        </div>
        <div className="mt-12">
          <HomeMap />
        </div>
      </section>

      {/* Our Services — full-bleed image, frosted panel, hover/scroll reveal */}
      <ServicesShowcase />

      {/* Clients — below services */}
      <Section className="border-b hairline">
        <p className="eyebrow">Our Clients</p>
        <div className="mt-8">
          <LogoMarquee />
        </div>
      </Section>

      {/* References — single, carousel */}
      <Section className="border-b hairline">
        <SectionHeading eyebrow="References" title="What clients say." />
        <div className="mt-16">
          <TestimonialCarousel />
        </div>
      </Section>

      {/* Closing CTA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight md:text-5xl">
            Discuss a project.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed muted">
            Send the ground conditions, constraints and design stage. A senior
            engineer will respond.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Contact →</Button>
            <Button href="/projects" variant="outline">
              View projects
            </Button>
          </div>
        </div>
      </Section>

      {/* LinkedIn feed */}
      <Section className="border-t hairline">
        <SectionHeading eyebrow="From our LinkedIn" title="Latest from BEDI." />
        <div className="mt-12">
          <LinkedInWidget />
        </div>
      </Section>
    </>
  );
}
