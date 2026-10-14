import type { ComparisonOutcome, ComparisonRow as Row } from "@/data/projects";

const outcomeColour: Record<ComparisonOutcome, string> = {
  agrees: "bg-emerald-600",
  deeper: "bg-amber-500",
  "not-in-records": "bg-red-600",
  "not-a-defect": "bg-slate-400",
};

/**
 * One "map vs records vs site" row: outcome colour bar | map crop with the
 * flagged area outlined | existing record code | site photo with the measured
 * value. Stacks on mobile.
 */
export function ComparisonRow({ row }: { row: Row }) {
  const [x, y, w, h] = row.box;

  return (
    <li className="grid grid-cols-1 border hairline bg-navy2/40 md:grid-cols-[6px_2fr_1fr_1.5fr]">
      <span aria-hidden className={`h-1.5 md:h-auto ${outcomeColour[row.outcome]}`} />

      {/* Map crop */}
      <figure className="p-4">
        <figcaption className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-xs uppercase tracking-[0.14em] text-bone">
            {row.label}
          </span>
          <span className="text-[11px] muted">{row.spot}</span>
        </figcaption>
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={row.mapSrc}
            alt={`Depth map at ${row.spot}`}
            loading="lazy"
            className="block w-full"
          />
          <span
            aria-hidden
            className="absolute border-2 border-gold"
            style={{
              left: `${x * 100}%`,
              top: `${y * 100}%`,
              width: `${w * 100}%`,
              height: `${h * 100}%`,
            }}
          />
        </div>
      </figure>

      {/* Existing record */}
      <div className="flex flex-col justify-center border-t hairline p-4 md:border-l md:border-t-0">
        <p className="text-[10px] uppercase tracking-[0.18em] muted">
          Existing record
        </p>
        <p className="mt-2 font-display text-3xl font-extrabold text-bone">
          {row.code}
        </p>
        <p className="mt-2 whitespace-pre-line text-xs leading-relaxed muted">
          {row.codeNote}
        </p>
      </div>

      {/* Site photo */}
      <figure className="relative border-t hairline p-4 md:border-l md:border-t-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={row.photoSrc}
          alt={`Site photo at ${row.spot}`}
          loading="lazy"
          className="block h-auto w-full"
        />
        <figcaption className="absolute bottom-6 left-6 bg-bone/80 px-2 py-1 text-xs text-white">
          {/^\d/.test(row.measured) ? `Measured ${row.measured}` : row.measured}
        </figcaption>
      </figure>
    </li>
  );
}
