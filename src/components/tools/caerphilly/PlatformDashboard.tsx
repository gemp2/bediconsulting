"use client";

import { useMemo, useState } from "react";
import {
  layers,
  ratingLabels,
  sections,
  waterLabels,
  dashboardText as t,
  type Layer,
  type Section,
} from "@/data/tools/caerphilly-demo";
import { TunnelStrip } from "./TunnelStrip";
import { SectionDetail } from "./SectionDetail";
import { chainageLabel, fmt, ratingColours, severityColours, waterColours } from "./palette";

const sum = (a: number[]) => a.reduce((x, y) => x + y, 0);

function driver(s: Section): string {
  const top = s.ratings.combined;
  const parts: string[] = [];
  if (s.ratings.defects === top) {
    const sp = 3 * s.spalling[0] + 2 * s.spalling[1] + s.spalling[2];
    const jt = 3 * s.joints[0] + 2 * s.joints[1] + s.joints[2];
    parts.push(jt > sp ? "Open joints" : "Spalling");
  }
  if (s.ratings.water === top && s.water > 0) parts.push(`Water ${waterLabels[s.water]}`);
  if (s.ratings.structural === top) parts.push("Structural shape");
  return parts.join(" + ") || "-";
}

const rank = (a: Section, b: Section) =>
  b.ratings.combined - a.ratings.combined || b.score - a.score;

/** Whole-tunnel totals: computed once, they do not depend on the filters. */
const totals = (() => {
  const spalling = [0, 1, 2].map((i) => sum(sections.map((s) => s.spalling[i])));
  const joints = [0, 1, 2].map((i) => sum(sections.map((s) => s.joints[i])));
  const recSpalling = [0, 1, 2].map((i) => sum(sections.map((s) => s.recSpalling[i])));
  const recJoints = [0, 1, 2].map((i) => sum(sections.map((s) => s.recJoints[i])));
  const waterCount = [1, 2, 3, 4, 5].map((c) => sections.filter((s) => s.water === c).length);
  return {
    spalling,
    joints,
    recSpalling,
    recJoints,
    waterCount,
    activeWater: sections.filter((s) => s.water >= 3).length,
    highRisk: sections.filter((s) => s.ratings.combined >= 2).length,
  };
})();

const defaultSelected = [...sections].sort(rank)[0].index;

export function PlatformDashboard() {
  const [layer, setLayer] = useState<Layer>("combined");
  const [minRating, setMinRating] = useState(0);
  const [mismatchOnly, setMismatchOnly] = useState(false);
  const [selected, setSelected] = useState(defaultSelected);

  const visible = useMemo(
    () => (s: Section) =>
      s.ratings[layer] >= minRating && (!mismatchOnly || s.mismatch),
    [layer, minRating, mismatchOnly],
  );

  const topRisk = useMemo(
    () => sections.filter(visible).sort(rank).slice(0, 5),
    [visible],
  );

  const sel = sections[selected];
  const last = sections.length - 1;

  const kpis = [
    { value: String(sections.length), label: t.kpis.sections },
    { value: fmt(sum(totals.spalling)), label: t.kpis.spalling },
    { value: fmt(sum(totals.joints)), label: t.kpis.joints },
    { value: String(totals.activeWater), label: t.kpis.water },
    { value: String(totals.highRisk), label: t.kpis.risk },
  ];

  const matchRows = [
    ...totals.spalling.map((v, i) => ({ cls: `Spalling S${i + 1}`, rec: totals.recSpalling[i], scan: v })),
    ...totals.joints.map((v, i) => ({ cls: `Open joints J${i + 1}`, rec: totals.recJoints[i], scan: v })),
  ];

  const maxBar = Math.max(sum(totals.spalling), sum(totals.joints));
  const maxWater = Math.max(...totals.waterCount);

  return (
    <div className="border hairline">
      {/* Header bar, as in the concept */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-bar px-4 py-3 text-white sm:px-5">
        <p className="text-sm">
          <span className="font-semibold text-gold">BEDI Platform</span>
          <span className="text-white/70"> - {t.tunnelLabel}</span>
        </p>
        <div role="group" aria-label={t.layerGroup} className="flex flex-wrap gap-1">
          {layers.map((l) => (
            <button
              key={l.id}
              type="button"
              aria-pressed={layer === l.id}
              onClick={() => setLayer(l.id)}
              className={`min-h-8 border px-3 py-1 text-[11px] uppercase tracking-[0.12em] transition-colors ${
                layer === l.id
                  ? "border-gold bg-gold text-white"
                  : "border-white/30 text-white/85 hover:border-white/70"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6 p-4 sm:p-5">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <label className="flex items-center gap-2">
            <span className="muted">{t.filterRating}</span>
            <select
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="min-h-9 border hairline bg-white px-2 py-1"
            >
              <option value={0}>{t.filterRatingAll}</option>
              {ratingLabels.slice(1).map((r, i) => (
                <option key={r} value={i + 1}>
                  {r} or worse
                </option>
              ))}
            </select>
          </label>
          <label className="flex min-h-9 items-center gap-2">
            <input
              type="checkbox"
              checked={mismatchOnly}
              onChange={(e) => setMismatchOnly(e.target.checked)}
              className="h-6 w-6 accent-[#f7941e]"
            />
            <span>{t.filterMismatch}</span>
          </label>
        </div>

        {/* Strip */}
        <div>
          <TunnelStrip
            sections={sections}
            layer={layer}
            selected={selected}
            visible={visible}
            onSelect={setSelected}
          />
          <div className="mt-3 flex items-center gap-3">
            <button
              type="button"
              aria-label={t.prev}
              onClick={() => setSelected((i) => Math.max(0, i - 1))}
              disabled={selected === 0}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center border hairline bg-white text-lg disabled:opacity-40"
            >
              ‹
            </button>
            <label className="flex min-w-0 flex-1 items-center gap-3">
              <span className="sr-only">{t.sectionSlider}</span>
              <input
                type="range"
                min={0}
                max={last}
                step={1}
                value={selected}
                onChange={(e) => setSelected(Number(e.target.value))}
                aria-valuetext={`Chainage ${chainageLabel(sel)}`}
                className="h-6 w-full min-w-0 cursor-pointer accent-[#f7941e]"
              />
            </label>
            <button
              type="button"
              aria-label={t.next}
              onClick={() => setSelected((i) => Math.min(last, i + 1))}
              disabled={selected === last}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center border hairline bg-white text-lg disabled:opacity-40"
            >
              ›
            </button>
            <span className="hidden shrink-0 text-sm tabular-nums sm:inline">
              Ch {chainageLabel(sel)}
            </span>
          </div>
          <p className="mt-2 text-xs muted">{t.stripHint}</p>
        </div>

        {/* KPI tiles */}
        <ul className="grid grid-cols-2 gap-px border hairline bg-black/10 sm:grid-cols-3 lg:grid-cols-5">
          {kpis.map((k) => (
            <li key={k.label} className="bg-white p-4 last:col-span-2 sm:last:col-span-1">
              <p className="font-display text-3xl font-extrabold text-gold">{k.value}</p>
              <p className="mt-1 text-[11px] leading-snug muted">{k.label}</p>
            </li>
          ))}
        </ul>

        <div className="grid gap-6 lg:grid-cols-2">
          <SectionDetail s={sel} />

          <div className="min-w-0 space-y-6">
            {/* Top risk */}
            <div className="border hairline p-5">
              <p className="eyebrow">{t.topRisk}</p>
              {topRisk.length === 0 ? (
                <p className="mt-4 text-sm muted">{t.topRiskEmpty}</p>
              ) : (
                <div className="mt-3 overflow-x-auto">
                  <table className="w-full min-w-[260px] text-left text-sm">
                    <thead>
                      <tr className="border-b hairline text-[11px] tracking-[0.04em] muted">
                        {t.topRiskCols.map((c) => (
                          <th key={c} className="py-2 pr-3 font-normal">
                            {c}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {topRisk.map((s) => (
                        <tr
                          key={s.index}
                          className={`border-b hairline last:border-0 ${
                            s.index === selected ? "bg-gold/10" : ""
                          }`}
                        >
                          <td className="py-1 pr-3">
                            <button
                              type="button"
                              onClick={() => setSelected(s.index)}
                              className="min-h-8 whitespace-nowrap text-left tabular-nums text-bone underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
                            >
                              Ch {chainageLabel(s)}
                            </button>
                          </td>
                          <td className="py-1 pr-3">
                            <span className="inline-flex items-center gap-1.5 font-semibold">
                              <span
                                className="inline-block h-2.5 w-2.5"
                                style={{ background: ratingColours[s.ratings.combined] }}
                              />
                              {ratingLabels[s.ratings.combined]}
                            </span>
                          </td>
                          <td className="py-1">{driver(s)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Defects by type and severity */}
            <div className="border hairline p-5">
              <p className="eyebrow">{t.byType}</p>
              <div className="mt-4 space-y-4">
                {[
                  { name: "Spalling", code: "S", v: totals.spalling },
                  { name: "Open joints", code: "J", v: totals.joints },
                ].map((d) => (
                  <div key={d.name}>
                    <div className="flex justify-between text-sm">
                      <span>{d.name}</span>
                      <span className="tabular-nums muted">{fmt(sum(d.v))} m²</span>
                    </div>
                    <div
                      className="mt-1.5 flex h-4"
                      style={{ width: `${(sum(d.v) / maxBar) * 100}%` }}
                    >
                      {d.v.map((v, i) => (
                        <div
                          key={i}
                          title={`${d.code}${i + 1}: ${fmt(v)} m²`}
                          style={{ flexGrow: v, flexBasis: 0, background: severityColours[i + 1] }}
                        />
                      ))}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-4 text-[11px] muted">
                      {d.v.map((v, i) => (
                        <span key={i} className="inline-flex items-center gap-1">
                          <span className="inline-block h-2 w-2" style={{ background: severityColours[i + 1] }} />
                          {d.code}
                          {i + 1} {fmt(v)} m²
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-[11px] muted">{t.byTypeNote}</p>

              <p className="mt-5 text-[10px] uppercase tracking-[0.14em] muted">{t.waterByClass}</p>
              <div className="mt-2 flex h-24 items-end gap-2">
                {totals.waterCount.map((c, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col items-center justify-end">
                    <span className="text-[11px] tabular-nums">{c}</span>
                    <div
                      className="w-full"
                      style={{
                        height: `${(c / maxWater) * 70}%`,
                        background: waterColours[i + 1],
                      }}
                    />
                    <span className="mt-1 text-[11px] muted">{waterLabels[i + 1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Records vs digital */}
        <div className="border hairline p-5">
          <p className="eyebrow">{t.match}</p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[280px] text-left text-sm">
              <thead>
                <tr className="border-b hairline text-[11px] tracking-[0.04em] muted">
                  {t.matchCols.map((c, i) => (
                    <th key={c} className={`py-2 pr-3 font-normal ${i > 0 ? "text-right" : ""}`}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matchRows.map((r) => {
                  const ok = Math.abs(r.rec - r.scan) <= 0.2 * Math.max(r.rec, r.scan);
                  return (
                    <tr key={r.cls} className="border-b hairline last:border-0">
                      <td className="py-1.5 pr-3">{r.cls}</td>
                      <td className="py-1.5 pr-3 text-right tabular-nums">{fmt(r.rec)}</td>
                      <td className="py-1.5 pr-3 text-right tabular-nums">{fmt(r.scan)}</td>
                      <td
                        className={`py-1.5 pr-3 text-right font-semibold ${
                          ok ? "text-emerald-700" : "text-red-700"
                        }`}
                      >
                        {ok ? "Yes" : "No"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] muted">{t.matchNote}</p>
        </div>
      </div>
    </div>
  );
}
