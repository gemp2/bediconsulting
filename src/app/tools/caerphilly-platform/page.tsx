import type { Metadata } from "next";
import { Button, DraftBadge, Section } from "@/components/ui";
import { PlatformDashboard } from "@/components/tools/caerphilly/PlatformDashboard";
import { platformPage as p } from "@/data/tools/caerphilly-demo";

export const metadata: Metadata = {
  title: "Caerphilly Tunnel Platform - Concept",
  description: p.intro,
  robots: { index: false, follow: false },
};

export default function CaerphillyPlatformPage() {
  return (
    <>
      <Section className="pt-16! pb-10! md:pt-24!">
        <DraftBadge label={p.draft} />
        <p className="eyebrow mt-6">{p.eyebrow}</p>
        <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{p.title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed muted">{p.intro}</p>
      </Section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div
            role="note"
            className="mb-4 border-l-4 border-amber-500 bg-amber-100 px-4 py-3 text-amber-900"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em]">{p.banner.label}</p>
            <p className="mt-1 text-sm leading-relaxed">{p.banner.body}</p>
          </div>
          <PlatformDashboard />
          <p className="mt-4 max-w-3xl text-sm leading-relaxed muted">{p.viewerNote}</p>
        </div>
      </section>

      <Section className="border-t hairline">
        <div className="max-w-3xl">
          <h2 className="text-3xl leading-tight md:text-4xl">{p.featuresHeading}</h2>
          <p className="mt-5 text-base leading-relaxed muted">{p.featuresIntro}</p>
        </div>
        <ul className="mt-10 grid gap-px border hairline bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {p.features.map((f, i) => (
            <li key={f.title} className="bg-white p-6">
              <p className="font-display text-sm font-extrabold text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-lg leading-snug">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed muted">{f.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="mt-16 text-2xl">{p.usersHeading}</h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {p.users.map((u) => (
            <li key={u.role} className="border hairline bg-navy2/40 p-5">
              <p className="text-base font-semibold">{u.role}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.12em] muted">{u.where}</p>
              <p className="mt-3 text-sm leading-relaxed">{u.needs}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <Button href={p.projectLink.href} variant="outline">
            {p.projectLink.label} →
          </Button>
        </div>
      </Section>
    </>
  );
}
