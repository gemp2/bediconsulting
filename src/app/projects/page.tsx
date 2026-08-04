import type { Metadata } from "next";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { projects, countryCount, yearRange } from "@/data/projects";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Projects",
  description: `${projects.length} tunnelling, geotechnical and digital assessment projects across ${countryCount} countries, ${yearRange.min}–${yearRange.max}.`,
};

export default function ProjectsPage() {
  return (
    <>
      <Section className="border-b hairline">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Project portfolio</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
              {projects.length} projects across {countryCount} countries.
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed muted">
              Tunnelling, deep excavation, utility and digital assessment work
              from {yearRange.min} to {yearRange.max}. Filter by discipline,
              region or period, or click any pin on the map.
            </p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/projects/victoria-station-upgrade.jpg"
            alt="SCL tunnelling at Victoria Station"
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </Section>

      <Section>
        <ProjectExplorer />
      </Section>
    </>
  );
}
