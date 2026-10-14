import type { CaseStudy } from "@/data/projects";

type Block = NonNullable<CaseStudy["limitations"]>;

/** Limitations and next steps side by side (either may be absent). */
export function LimitsNextSteps({
  limitations,
  nextSteps,
}: {
  limitations?: Block;
  nextSteps?: Block;
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {limitations && <Column kicker="Limitations" block={limitations} />}
      {nextSteps && <Column kicker="Next steps" block={nextSteps} />}
    </div>
  );
}

function Column({ kicker, block }: { kicker: string; block: Block }) {
  return (
    <div className="border hairline bg-navy2/40 p-7">
      <p className="eyebrow">{kicker}</p>
      <h3 className="mt-3 text-lg leading-snug">{block.heading}</h3>
      <ul className="mt-6 space-y-2.5">
        {block.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm muted">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-gold/60" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
