"use client";

import type { MouseEvent } from "react";
import {
  layers,
  tunnel,
  waterLabels,
  ratingLabels,
  dashboardText as t,
  type Layer,
  type Section,
} from "@/data/tools/caerphilly-demo";
import { cellColour, ratingColours, waterColours } from "./palette";

const pct = (m: number) => `${(m / tunnel.lengthM) * 100}%`;
const ticks = [0, 250, 500, 750, 1000, 1250, 1500, 1750];

/**
 * Long section + one strip per layer, by 20 m section. Wide by design: on
 * phones it scrolls inside its own box, never the page.
 */
export function TunnelStrip({
  sections,
  layer,
  selected,
  visible,
  onSelect,
}: {
  sections: Section[];
  layer: Layer;
  selected: number;
  visible: (s: Section) => boolean;
  onSelect: (index: number) => void;
}) {
  const sel = sections[selected];

  function pick(e: MouseEvent<HTMLDivElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    const m = ((e.clientX - box.left) / box.width) * tunnel.lengthM;
    const i = Math.floor(m / tunnel.sectionM);
    onSelect(Math.max(0, Math.min(sections.length - 1, i)));
  }

  return (
    <div className="overflow-x-auto border hairline bg-white">
      <div className="min-w-[760px] px-5 pb-4 pt-3">
        {/* Long section: ground line, shafts, portals */}
        <div className="relative h-24" aria-hidden="true">
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M0 88 C 60 40, 140 30, 220 34 S 380 18, 470 26 S 640 14, 720 22 S 880 30, 1000 70 L1000 100 L0 100 Z"
              fill="#e6efe6"
            />
            <line x1="0" y1="90" x2="1000" y2="90" stroke="#4d4d4f" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          {tunnel.shafts.map((s) => (
            <div
              key={s.id}
              className="absolute bottom-[10%] flex -translate-x-1/2 flex-col items-center"
              style={{ left: pct(s.chainage), top: "6%" }}
            >
              <span className="whitespace-nowrap text-[10px] font-semibold text-bone/70">{s.id}</span>
              <span className="mt-0.5 w-px flex-1 bg-bone/40" />
            </div>
          ))}
          <span className="absolute bottom-0 left-0 text-[10px] font-semibold text-bone/70">S</span>
          <span className="absolute bottom-0 right-0 text-[10px] font-semibold text-bone/70">N</span>
          {sel && (
            <div
              className="absolute bottom-[8%] h-2 bg-gold"
              style={{ left: pct(sel.from), width: pct(sel.to - sel.from) }}
            />
          )}
        </div>

        {/* Strips */}
        <div
          className="relative mt-3 cursor-pointer"
          onClick={pick}
          aria-hidden="true"
        >
          {layers
            .filter((l) => l.id !== "combined")
            .concat(layers.filter((l) => l.id === "combined"))
            .map((l) => {
              const active = l.id === layer;
              return (
                <div key={l.id} className="mb-2 last:mb-0">
                  <p
                    className={`mb-1 text-[10px] uppercase tracking-[0.16em] ${
                      active ? "font-semibold text-bone" : "muted"
                    }`}
                  >
                    {l.row}
                  </p>
                  <div
                    className={`flex h-6 gap-px ${active ? "" : "opacity-80"}`}
                  >
                    {sections.map((s) => (
                      <div
                        key={s.index}
                        className="h-full transition-opacity"
                        style={{
                          flexGrow: s.to - s.from,
                          flexBasis: 0,
                          background: cellColour(l.id, s),
                          opacity: visible(s) ? 1 : 0.18,
                        }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          {sel && (
            <div
              className="pointer-events-none absolute -bottom-1 -top-1 outline-2 outline-bone"
              style={{
                left: pct(sel.from),
                width: pct(sel.to - sel.from),
                outlineStyle: "solid",
              }}
            />
          )}
        </div>

        {/* Chainage axis */}
        <div className="relative mt-2 h-5 text-[10px] muted" aria-hidden="true">
          {ticks.map((m) => (
            <span
              key={m}
              className={`absolute top-0 whitespace-nowrap ${
                m === 0 ? "" : m === 1750 ? "-translate-x-full" : "-translate-x-1/2"
              }`}
              style={{ left: pct(m) }}
            >
              {m} m
            </span>
          ))}
        </div>
        <div className="mt-1 flex justify-between gap-4 text-[11px] muted">
          <span>{tunnel.lowMileage} - 0 m</span>
          <span>
            {tunnel.highMileage} - {tunnel.lengthM} m
          </span>
        </div>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] text-bone/75">
          {ratingLabels.map((r, i) => (
            <span key={r} className="inline-flex items-center gap-1.5">
              <span className="inline-block h-3 w-3" style={{ background: ratingColours[i] }} />
              {r}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5">
            {t.legendWater}
            {waterLabels.slice(1).map((w, i) => (
              <span
                key={w}
                title={w}
                className="inline-block h-3 w-3"
                style={{ background: waterColours[i + 1] }}
              />
            ))}
            <span className="muted">W5 to W1</span>
          </span>
        </div>
      </div>
    </div>
  );
}
