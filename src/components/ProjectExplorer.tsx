"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  projects as allProjects,
  projectMatchesType,
  projectTypes,
  regions,
  typeColors,
  type Project,
  type ProjectType,
  type Region,
} from "@/data/projects";

// MapLibre touches `window` on import, so it must stay out of the server bundle.
const ProjectMap = dynamic(
  () => import("./ProjectMap").then((m) => m.ProjectMap),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse bg-navy2/60" />
    ),
  },
);

const PERIODS = [
  { label: "2002–2005", min: 2002, max: 2005 },
  { label: "2006–2009", min: 2006, max: 2009 },
  { label: "2010–2013", min: 2010, max: 2013 },
  { label: "2014–2020", min: 2014, max: 2020 },
] as const;

type View = "map" | "grid";

export function ProjectExplorer() {
  const [view, setView] = useState<View>("map");
  const [type, setType] = useState<ProjectType | null>(null);
  const [region, setRegion] = useState<Region | null>(null);
  const [period, setPeriod] = useState<(typeof PERIODS)[number] | null>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(
    () =>
      allProjects.filter((p) => {
        if (type && !projectMatchesType(p, type)) return false;
        if (region && p.region !== region) return false;
        if (period && (p.year < period.min || p.year > period.max)) return false;
        return true;
      }),
    [type, region, period],
  );

  const hasFilters = type || region || period;

  function reset() {
    setType(null);
    setRegion(null);
    setPeriod(null);
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm muted">
          Showing <span className="text-gold">{filtered.length}</span> of{" "}
          {allProjects.length} projects
        </p>

        <div className="flex border hairline" role="tablist" aria-label="View">
          {(["map", "grid"] as const).map((v) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.14em] transition-colors ${
                view === v ? "bg-gold text-navy" : "text-bone/60 hover:text-gold"
              }`}
            >
              {v === "map" ? "Map view" : "Grid view"}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <FilterRow label="Type">
          <Chip active={!type} onClick={() => setType(null)}>
            All
          </Chip>
          {projectTypes.map((t) => (
            <Chip
              key={t}
              active={type === t}
              onClick={() => setType(type === t ? null : t)}
              dot={typeColors[t]}
            >
              {t}
            </Chip>
          ))}
        </FilterRow>

        <FilterRow label="Region">
          <Chip active={!region} onClick={() => setRegion(null)}>
            All
          </Chip>
          {regions.map((r) => (
            <Chip
              key={r}
              active={region === r}
              onClick={() => setRegion(region === r ? null : r)}
            >
              {r}
            </Chip>
          ))}
        </FilterRow>

        <FilterRow label="Period">
          <Chip active={!period} onClick={() => setPeriod(null)}>
            All
          </Chip>
          {PERIODS.map((p) => (
            <Chip
              key={p.label}
              active={period?.label === p.label}
              onClick={() => setPeriod(period?.label === p.label ? null : p)}
            >
              {p.label}
            </Chip>
          ))}
        </FilterRow>

        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="text-xs uppercase tracking-[0.14em] text-gold hover:underline"
          >
            ✕ Reset filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-12 border hairline bg-navy2/40 p-12 text-center text-sm muted">
          No projects match the current filters.
        </p>
      ) : view === "map" ? (
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="h-[420px] border hairline md:h-[560px]">
            <ProjectMap
              projects={filtered}
              selectedId={selected?.id ?? null}
              onSelect={setSelected}
              className="h-full w-full"
            />
          </div>

          <aside className="max-h-[560px] overflow-y-auto border hairline bg-navy2/40">
            <p className="sticky top-0 border-b hairline bg-navy2 px-5 py-3 text-[10px] uppercase tracking-[0.18em] muted">
              Click a pin or select below
            </p>
            <ul>
              {filtered.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    onClick={() => setSelected(p)}
                    className={`w-full border-b hairline px-5 py-4 text-left transition-colors hover:bg-gold/5 ${
                      selected?.id === p.id ? "bg-gold/10" : ""
                    }`}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{ background: typeColors[p.type] }}
                      />
                      <span>
                        <span className="block text-sm text-bone">{p.name}</span>
                        <span className="mt-0.5 block text-xs muted">
                          {p.location} · {p.year}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      ) : (
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <li key={p.id}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      )}

      {view === "map" && selected && (
        <div className="mt-6 border hairline bg-navy2/40 p-7">
          <ProjectSummary project={selected} />
        </div>
      )}
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-2 w-14 text-[10px] uppercase tracking-[0.18em] muted">
        {label}
      </span>
      {children}
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
  dot,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  dot?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 border px-3 py-1.5 text-xs transition-colors ${
        active
          ? "border-gold bg-gold/15 text-gold"
          : "border-white/10 text-bone/60 hover:border-gold/40 hover:text-gold"
      }`}
    >
      {dot && (
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: dot }}
        />
      )}
      {children}
    </button>
  );
}

function ProjectSummary({ project }: { project: Project }) {
  return (
    <div>
      <span
        className="text-[10px] uppercase tracking-[0.18em]"
        style={{ color: typeColors[project.type] }}
      >
        {project.type}
      </span>
      <h3 className="mt-2 text-xl">{project.name}</h3>
      <p className="mt-1 text-xs muted">
        {project.location} · {project.year}
        {project.endYear ? `–${project.endYear}` : ""}
        {project.client ? ` · ${project.client}` : ""}
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed muted">
        {project.description}
      </p>
      {project.caseStudy && (
        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-block text-xs uppercase tracking-[0.14em] text-gold hover:underline"
        >
          Read the case study →
        </Link>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <span
        className="text-[10px] uppercase tracking-[0.18em]"
        style={{ color: typeColors[project.type] }}
      >
        {project.type}
      </span>
      <h3 className="mt-3 text-lg leading-snug">{project.name}</h3>
      <p className="mt-1 text-xs muted">
        {project.location} · {project.year}
      </p>
      <p className="mt-4 line-clamp-3 text-sm leading-relaxed muted">
        {project.description}
      </p>
      {project.caseStudy && (
        <span className="mt-4 inline-block text-xs uppercase tracking-[0.14em] text-gold">
          Case study →
        </span>
      )}
    </>
  );

  const className =
    "flex h-full flex-col border hairline bg-navy2/40 p-6 transition-colors hover:border-gold/30";

  return project.caseStudy ? (
    <Link href={`/projects/${project.slug}`} className={className}>
      {inner}
    </Link>
  ) : (
    <div className={className}>{inner}</div>
  );
}
