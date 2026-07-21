import type { Metadata } from "next";
import { team, milestones, values } from "@/data/team";
import { stats } from "@/data/site";
import {
  Button,
  Card,
  DraftBadge,
  ImagePlaceholder,
  Section,
  SectionHeading,
  Stat,
} from "@/components/ui";

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
              A senior-led practice for the hardest ground.
            </h1>
            <p className="mt-7 text-base leading-relaxed muted">
              Bedi Consulting is a specialist tunnelling and geotechnical
              engineering practice. We work on projects where the ground is
              uncertain, the tolerances are unforgiving and the consequences of
              getting it wrong are measured in more than money.
            </p>
            <p className="mt-5 text-base leading-relaxed muted">
              Every design is led by a senior engineer who stays with the project
              through construction — because underground work rarely matches the
              ground investigation, and the response has to come from someone
              who understands the original design intent.
            </p>
          </div>

          <ImagePlaceholder
            label="Team photograph needed — see CONTENT-TODO.md"
            aspect="aspect-[4/3]"
          />
        </div>

        <div className="mt-20 grid grid-cols-2 gap-10 border-t hairline pt-14 md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section className="border-b hairline">
        <SectionHeading eyebrow="How we work" title="What we hold to." />
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
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="The team"
            title="The engineers behind the work."
          />
          <DraftBadge label="Placeholder people" />
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-relaxed muted">
          Only Dr. Anmol Bedi is confirmed. The remaining cards are deliberate
          placeholders — replace them with real names, roles, locations and
          photographs before launch.
        </p>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.name}>
              <div className="flex h-full flex-col border hairline bg-navy2/40">
                <ImagePlaceholder
                  label={
                    member.placeholder ? "Photo needed" : `${member.name} — photo needed`
                  }
                  aspect="aspect-square"
                  className="border-0 border-b border-dashed"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm text-bone">{member.name}</h3>
                  <p className="mt-1 text-xs text-gold">{member.role}</p>
                  <p className="mt-2 flex-1 text-xs muted">{member.location}</p>
                  {member.placeholder && (
                    <span className="mt-4">
                      <DraftBadge label="Draft" />
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* BLOCK 3 — Our story */}
      <Section className="border-b hairline">
        <SectionHeading
          eyebrow="Our story"
          title="Two decades underground."
          body="Milestones drawn from the project record. Entries marked as draft need confirmation."
        />

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
            Working on something difficult?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed muted">
            Tell us about the ground conditions and the constraints. A senior
            engineer will read it.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">Get in touch →</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
