import type { CaseStudy } from "@/data/projects";
import { CaseMedia } from "./CaseMedia";

/** Numbered method steps, media on the side (stacked on mobile). */
export function MethodSteps({
  steps,
}: {
  steps: NonNullable<CaseStudy["method"]>;
}) {
  return (
    <ol className="space-y-14">
      {steps.map((s) => (
        <li
          key={s.step}
          className={`grid grid-cols-1 gap-8 ${s.media ? "lg:grid-cols-2 lg:items-center" : ""}`}
        >
          <div>
            <span className="font-display text-3xl font-extrabold text-gold/25">
              {s.step}
            </span>
            <h3 className="mt-3 text-xl leading-snug">{s.title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed muted">{s.body}</p>
          </div>
          {s.media && (
            <div className="border hairline bg-navy2/40">
              <CaseMedia media={s.media} alt={s.title} className="aspect-video" />
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
