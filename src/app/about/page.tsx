import type { Metadata } from "next";
import {
  team,
  milestones,
  values,
  coreValues,
  type TeamMember,
} from "@/data/team";
import { companyUrl } from "@/data/linkedin";
import {
  Button,
  Card,
  DraftBadge,
  Section,
  SectionHeading,
} from "@/components/ui";

/** Initials avatar; swaps to a photo once `member.photo` is set. */
function Avatar({ member }: { member: TeamMember }) {
  const initials = member.name
    .replace(/^Dr\.?\s+/, "")
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  if (member.photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={member.photo}
        alt={member.name}
        className="h-14 w-14 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy2 text-sm text-bone/70"
    >
      {initials}
    </span>
  );
}

function LinkedInMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Bedi Consulting is a senior-led specialist tunnelling and geotechnical practice. Meet the team and read our story.",
};

export default function AboutPage() {
  return (
    <>
      {/* BLOCK 1 — Who we are */}
      <Section className="border-b hairline">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Who we are</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
              Specialist tunnelling and geotechnical practice.
            </h1>
            <p className="mt-7 text-base leading-relaxed muted">
              Bedi Consulting provides tunnel and geotechnical engineering from
              design conception through construction — soft-ground and mixed-face
              tunnels, shafts and deep excavations, mostly in constrained urban
              settings.
            </p>
            <p className="mt-5 text-base leading-relaxed muted">
              Design is senior-led and continues on site: excavation and support
              are revised against face mapping and monitoring data as the ground
              is exposed.
            </p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/tunnel-portal.jpg"
            alt="Bedi Consulting engineers on site at a railway tunnel portal"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>

        <div className="mt-20 border-t hairline pt-14">
          <p className="eyebrow">Core values</p>
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => (
              <div key={v.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed muted">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="border-b hairline">
        <SectionHeading eyebrow="How we work" title="Method." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <Card key={v.title}>
              <h3 className="text-base text-bone">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed muted">{v.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* BLOCK 2 — The team */}
      <Section className="border-b hairline">
        <SectionHeading eyebrow="The team" title="Engineers." />

        <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <li key={`${member.name}-${i}`} className="flex items-start gap-4">
              <Avatar member={member} />
              <div className="min-w-0">
                <h3 className="text-base text-bone">{member.name}</h3>
                <p className="mt-0.5 text-sm text-gold">{member.role}</p>
                <p className="mt-1.5 text-xs muted">{member.location}</p>
                <a
                  href={member.linkedin || companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="mt-3 inline-flex text-bone/40 transition-colors hover:text-[#0A66C2]"
                >
                  <LinkedInMark className="h-4 w-4" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* BLOCK 3 — Our story */}
      <Section className="border-b hairline">
        <SectionHeading eyebrow="Track record" title="Selected milestones." />

        <ol className="mt-14 border-l hairline">
          {milestones.map((m) => (
            <li key={m.year + m.title} className="relative pb-12 pl-8 last:pb-0">
              <span
                aria-hidden
                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold"
              />
              <p className="font-display text-sm font-semibold text-gold">
                {m.year}
              </p>
              <h3 className="mt-2 flex flex-wrap items-center gap-3 text-lg">
                {m.title}
                {m.placeholder && <DraftBadge label="Confirm" />}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed muted">
                {m.body}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* BLOCK 4 — Contact CTA */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl leading-tight md:text-4xl">
            Discuss a project.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed muted">
            Send the ground conditions, constraints and design stage. A senior
            engineer will respond.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">Contact →</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
