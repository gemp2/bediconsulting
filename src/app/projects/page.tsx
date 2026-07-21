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
        <p className="eyebrow">Project portfolio</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight md:text-5xl">
          {projects.length} projects across {countryCount} countries.
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed muted">
          Tunnelling, deep excavation, utility and digital assessment work from{" "}
          {yearRange.min} to {yearRange.max}. Filter by discipline, region or
          period, or click any pin on the map.
        </p>
      </Section>

      <Section>
        <ProjectExplorer />
      </Section>
    </>
  );
}
