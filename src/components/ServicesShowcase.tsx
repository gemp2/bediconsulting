"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";

/**
 * Full-bleed services section. The active service's photo fills the whole
 * section behind a frosted-glass panel that lists the services. The active
 * service changes on mouse hover AND on scroll (the row in the middle band of
 * the viewport wins), crossfading the background. Each row links to its detail
 * page, and the active service also shows an explicit "Learn more" button.
 *
 * Give a service a background video by setting `video` in
 * src/data/services.ts (file at /public/media/services/<slug>.mp4).
 */
export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const rowRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Scroll-driven highlight: the row crossing the viewport's centre band wins.
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.idx ?? "0"));
          }
        }
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    rowRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden border-b hairline">
      {/* Full-bleed background: crossfading service photos */}
      <div aria-hidden className="absolute inset-0">
        {services.map((sv, i) =>
          sv.video ? (
            <video
              key={sv.slug}
              src={sv.video}
              poster={sv.poster ?? sv.image}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={sv.slug}
              src={sv.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                active === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ),
        )}
        {/* Legibility gradient over the panel side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24">
        <div className="w-full max-w-md border border-white/15 bg-black/40 p-8 backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.22em] text-gold">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl leading-tight text-white">
            From ground investigation to construction support.
          </h2>

          <ul className="mt-8 divide-y divide-white/10">
            {services.map((sv, i) => (
              <li
                key={sv.slug}
                data-idx={i}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
              >
                <Link
                  href={`/services#${sv.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={active === i ? "true" : undefined}
                  className="group flex items-center gap-4 py-3.5"
                >
                  <span className="font-display text-xs font-semibold text-gold/70">
                    {sv.num}
                  </span>
                  <span
                    className={`flex-1 text-base transition-colors ${
                      active === i ? "text-gold" : "text-white/85"
                    }`}
                  >
                    {sv.name}
                  </span>
                  <span
                    className={`text-gold transition-opacity ${
                      active === i
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-60"
                    }`}
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Active service detail + explicit button */}
          <div className="mt-6 border-t border-white/15 pt-5">
            <p className="text-sm leading-relaxed text-white/75">{s.body}</p>
            <Link
              href={`/services#${s.slug}`}
              className="mt-5 inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-xs uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold/85"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
