import type { CaseStudy } from "@/data/projects";
import { ComparisonRow } from "./ComparisonRow";

export function ComparisonsSection({
  comparisons,
}: {
  comparisons: NonNullable<CaseStudy["comparisons"]>;
}) {
  return (
    <>
      <h2 className="max-w-3xl text-3xl leading-tight md:text-4xl">
        {comparisons.heading}
      </h2>
      {comparisons.intro && (
        <p className="mt-5 max-w-3xl text-base leading-relaxed muted">
          {comparisons.intro}
        </p>
      )}
      <ul className="mt-12 space-y-6">
        {comparisons.rows.map((row) => (
          <ComparisonRow key={row.spot} row={row} />
        ))}
      </ul>
    </>
  );
}
