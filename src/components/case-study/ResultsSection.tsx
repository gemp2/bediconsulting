import type { CaseStudy } from "@/data/projects";

/** Big stat tiles followed by result figures. */
export function ResultsSection({
  results,
}: {
  results: NonNullable<CaseStudy["results"]>;
}) {
  return (
    <>
      <p className="eyebrow">Results</p>
      <h2 className="mt-3 max-w-3xl text-3xl leading-tight md:text-4xl">
        {results.heading}
      </h2>
      {results.intro && (
        <p className="mt-5 max-w-3xl text-base leading-relaxed muted">
          {results.intro}
        </p>
      )}

      <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {results.stats.map((s) => (
          <div key={s.label} className="border hairline bg-navy2/40 p-7">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block font-display text-4xl font-extrabold text-gold md:text-5xl">
                {s.value}
              </span>
              <span className="mt-3 block text-xs uppercase tracking-[0.14em] text-bone/80">
                {s.label}
              </span>
              {s.note && (
                <span className="mt-3 block text-xs leading-relaxed muted">
                  {s.note}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>

      {results.figures && results.figures.length > 0 && (
        <div
          className={`mt-12 grid grid-cols-1 gap-4 ${
            results.figures.length > 1 ? "md:grid-cols-2" : ""
          }`}
        >
          {results.figures.map((f) => (
            <figure key={f.src} className="border hairline bg-navy2/40">
              <div className={f.wide ? "overflow-x-auto" : ""}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.src}
                  alt={f.caption}
                  loading="lazy"
                  className={`w-full ${f.wide ? "min-w-[720px] md:min-w-0" : ""}`}
                />
              </div>
              <figcaption className="px-4 py-3 text-xs muted">{f.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </>
  );
}
