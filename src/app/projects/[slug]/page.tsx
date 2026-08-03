import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { featuredProjects, projects } from "@/data/projects";
import {
  Button,
  DraftBadge,
  ImagePlaceholder,
  Section,
} from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

/** Only projects with a written case study get a detail page. */
export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project?.caseStudy) notFound();

  const cs = project.caseStudy;

  return (
    <>
      <Section className="border-b hairline">
        <Link
          href="/projects"
          className="text-xs uppercase tracking-[0.14em] text-gold hover:underline"
        >
          ← All projects
        </Link>

        <p className="eyebrow mt-8">{cs.category}</p>
        <h1 className="mt-4 max-w-4xl text-4xl leading-tight md:text-5xl">
          {project.name}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed muted">
          {project.description}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {cs.chips.map((chip) => (
            <li
              key={chip}
              className="border border-gold/30 px-3 py-1 text-[11px] text-gold"
            >
              {chip}
            </li>
          ))}
        </ul>

        <dl className="mt-14 grid grid-cols-2 gap-8 border-t hairline pt-12 md:grid-cols-4">
          {cs.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-extrabold text-gold md:text-4xl">
                  {s.value}
                </span>
                <span className="mt-2 block text-xs uppercase tracking-[0.14em] muted">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Facts */}
      <Section className="border-b hairline">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Fact label="Client" value={project.client} />
          <Fact label="Contractor" value={project.contractor} />
          <Fact label="Our role" value={project.role} />
          <Fact
            label="Period"
            value={
              project.endYear
                ? `${project.year}–${project.endYear}`
                : String(project.year)
            }
          />
        </dl>

        <div className="mt-14">
          {project.images && project.images.length > 0 ? (
            <div
              className={`grid gap-4 ${
                project.images.length > 1 ? "md:grid-cols-2" : ""
              }`}
            >
              {project.images.map((img) => (
                <figure key={img.src} className="border hairline bg-navy2/40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt={img.caption ?? project.name}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                  />
                  {img.caption && (
                    <figcaption className="px-4 py-3 text-xs muted">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <ImagePlaceholder
              label={`${project.name} — construction photography needed`}
              aspect="aspect-[21/9]"
            />
          )}
        </div>
      </Section>

      {/* Problem → Solution → Value */}
      <Section className="border-b hairline">
        <div className="grid gap-6 lg:grid-cols-3">
          <Pillar
            step="01"
            kicker="The problem"
            heading={cs.problem.heading}
            points={cs.problem.points}
          />
          <Pillar
            step="02"
            kicker="Our solution"
            heading={cs.solution.heading}
            points={cs.solution.points}
          />
          <Pillar
            step="03"
            kicker="The value"
            heading={cs.value.heading}
            points={cs.value.points}
          />
        </div>
      </Section>

      {/* Highlights */}
      <Section className="border-b hairline">
        <h2 className="text-3xl leading-tight md:text-4xl">
          What made the difference.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {cs.highlights.map((h) => (
            <div key={h.title} className="border hairline bg-navy2/40 p-7">
              <h3 className="text-base text-gold">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed muted">{h.body}</p>
            </div>
          ))}
        </div>

        {project.awards && (
          <div className="mt-14 border-t hairline pt-12">
            <p className="eyebrow">Recognition</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.awards.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm text-bone/80">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-gold" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Section>

      {/* Datasheet CTA */}
      <Section>
        <div className="border hairline bg-navy2/40 p-10 text-center">
          <div className="flex justify-center">
            <DraftBadge label="PDF not yet available" />
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl">Full project datasheet</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed muted">
            Technical drawings, service scope and construction detail. The
            datasheet PDFs have not been produced yet — request a copy directly
            and we will send it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact">Request the datasheet →</Button>
            <Button href="/projects" variant="outline">
              All projects
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function Fact({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.18em] muted">{label}</dt>
      <dd className="mt-2 text-sm text-bone">
        {value ?? <span className="muted">Not recorded</span>}
      </dd>
    </div>
  );
}

function Pillar({
  step,
  kicker,
  heading,
  points,
}: {
  step: string;
  kicker: string;
  heading: string;
  points: readonly string[];
}) {
  return (
    <div className="border hairline bg-navy2/40 p-7">
      <span className="font-display text-3xl font-extrabold text-gold/25">
        {step}
      </span>
      <p className="eyebrow mt-4">{kicker}</p>
      <h3 className="mt-3 text-lg leading-snug">{heading}</h3>
      <ul className="mt-6 space-y-2.5">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-gold/60" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
