"use client";

import dynamic from "next/dynamic";
import { projects, typeColors, projectTypes } from "@/data/projects";

// MapLibre touches `window`, so keep it out of the server bundle.
const ProjectMap = dynamic(
  () => import("./ProjectMap").then((m) => m.ProjectMap),
  {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-navy2" />,
  },
);

/**
 * Bare, light project map for the home page — no title, numbers or filters.
 * Click a pin for a popup with a "More detail" link into the projects section.
 */
export function HomeMap() {
  return (
    <div>
      <div className="h-[70vh] min-h-[420px] w-full border-y hairline">
        <ProjectMap projects={projects} className="h-full w-full" />
      </div>

      {/* Legend keeps the colours readable at a glance. */}
      <ul className="mx-auto flex max-w-7xl flex-wrap gap-x-6 gap-y-2 px-6 py-5">
        {projectTypes.map((t) => (
          <li key={t} className="flex items-center gap-2 text-xs muted">
            <span
              aria-hidden
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: typeColors[t] }}
            />
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
