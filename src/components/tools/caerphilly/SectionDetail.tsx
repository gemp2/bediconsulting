import {
  ratingLabels,
  structuralLabels,
  waterLabels,
  dashboardText as t,
  type Section,
} from "@/data/tools/caerphilly-demo";
import { chainageLabel, fmt, ratingColours, severityColours, waterColours } from "./palette";

function Badge({ label, value, colour }: { label: string; value: string; colour: string }) {
  return (
    <div className="border hairline bg-white px-3 py-2">
      <p className="text-[10px] uppercase tracking-[0.14em] muted">{label}</p>
      <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
        <span className="inline-block h-3 w-3 shrink-0" style={{ background: colour }} />
        {value}
      </p>
    </div>
  );
}

/** Detail of the selected 20 m section: ratings, areas by class, unwrapped lining. */
export function SectionDetail({ s }: { s: Section }) {
  const rows: { cls: string; rec: number; scan: number }[] = [
    ...s.spalling.map((v, i) => ({ cls: `Spalling S${i + 1}`, rec: s.recSpalling[i], scan: v })),
    ...s.joints.map((v, i) => ({ cls: `Open joints J${i + 1}`, rec: s.recJoints[i], scan: v })),
  ];

  return (
    <div className="min-w-0 border hairline bg-navy2/40 p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="eyebrow">{t.detail}</p>
        {s.shaft && (
          <span className="text-[11px] uppercase tracking-[0.14em] muted">Shaft {s.shaft}</span>
        )}
      </div>
      <h3 className="mt-2 text-2xl" aria-live="polite">
        Ch {chainageLabel(s)}
      </h3>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Badge label="Combined" value={ratingLabels[s.ratings.combined]} colour={ratingColours[s.ratings.combined]} />
        <Badge label="Defects" value={ratingLabels[s.ratings.defects]} colour={ratingColours[s.ratings.defects]} />
        <Badge label="Water" value={waterLabels[s.water]} colour={waterColours[s.water]} />
        <Badge label="Structural" value={structuralLabels[s.structural]} colour={ratingColours[s.structural]} />
      </div>

      {/* Unwrapped lining */}
      <p className="mt-5 text-[10px] uppercase tracking-[0.14em] muted">{t.detailMap}</p>
      <div className="mt-2 flex gap-2">
        <div className="flex w-16 shrink-0 flex-col justify-between py-0.5 text-right text-[9px] leading-tight muted">
          {t.detailMapAxis.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <svg
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            className="block h-32 w-full border hairline bg-[#eceef0]"
            role="img"
            aria-label={`Unwrapped lining for chainage ${chainageLabel(s)}, ${s.patches.length} illustrative defect patches`}
          >
            {Array.from({ length: 19 }, (_, i) => (
              <line key={i} x1={(i + 1) * 10} y1="0" x2={(i + 1) * 10} y2="100" stroke="#d5d8dc" strokeWidth="0.4" />
            ))}
            <line x1="0" y1="50" x2="200" y2="50" stroke="#c3c7cc" strokeWidth="0.5" strokeDasharray="2 2" />
            {s.patches.map((p, i) => (
              <rect
                key={i}
                x={p.x * 10}
                y={p.y * 100}
                width={p.w * 10}
                height={p.h * 100}
                fill={severityColours[p.sev]}
                opacity={0.9}
              />
            ))}
          </svg>
          <div className="mt-1 flex justify-between text-[10px] muted">
            <span>{s.from} m</span>
            <span>{s.to} m</span>
          </div>
        </div>
      </div>

      {/* Areas by class */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[280px] text-left text-sm">
          <thead>
            <tr className="border-b hairline text-[11px] tracking-[0.04em] muted">
              <th className="py-2 pr-3 font-normal">{t.detailTable.cls}</th>
              <th className="py-2 pr-3 text-right font-normal">{t.detailTable.recorded}</th>
              <th className="py-2 text-right font-normal">{t.detailTable.scan}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.cls} className="border-b hairline last:border-0">
                <td className="py-1.5 pr-3">{r.cls}</td>
                <td className="py-1.5 pr-3 text-right tabular-nums">{fmt(r.rec)}</td>
                <td className="py-1.5 text-right tabular-nums">{fmt(r.scan)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="button"
          disabled
          className="inline-flex min-h-9 cursor-not-allowed items-center border border-black/20 px-4 py-2 text-xs uppercase tracking-[0.14em] text-bone/50"
        >
          {t.viewer}
        </button>
        <span className="text-[11px] muted">{t.viewerConcept}</span>
      </div>
    </div>
  );
}
