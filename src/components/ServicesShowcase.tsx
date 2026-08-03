"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";

/**
 * Service list with a media panel that reveals a service's photo — or video,
 * where one exists. The active service changes on mouse hover AND on scroll:
 * whichever row sits in the middle band of the viewport becomes active, so the
 * panel steps through the services as the page scrolls.
 *
 * Drop a clip at /public/media/services/<slug>.mp4 and set `video` in
 * src/data/services.ts to give any service a hover video.
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
            const idx = Number(
              (e.target as HTMLElement).dataset.idx ?? "0",
            );
            setActive(idx);
          }
        }
      },
      // Thin band across the vertical centre of the viewport.
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    rowRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
      {/* media panel */}
      <div className="order-1 lg:order-2 lg:sticky lg:top-24 lg:h-fit">
        <div className="relative aspect-[4/3] w-full overflow-hidden border hairline bg-navy2">
          {s.video ? (
            <video
              key={s.slug}
              src={s.video}
              poster={s.poster ?? s.image}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          ) : s.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={s.slug}
              src={s.image}
              alt={s.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-xs uppercase tracking-[0.18em] text-bone/30">
              {s.name}
            </div>
          )}
          <span className="absolute bottom-3 left-3 bg-black/55 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
            {s.name}
          </span>
        </div>
      </div>

      {/* list */}
      <ul className="order-2 divide-y divide-black/5 border-y hairline lg:order-1">
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
              className="group grid grid-cols-[38px_1fr] gap-4 py-5 transition-colors"
            >
              <span className="font-display text-sm font-semibold text-gold/70">
                {sv.num}
              </span>
              <div>
                <h3
                  className={`text-lg transition-colors ${
                    active === i ? "text-gold" : "text-bone"
                  }`}
                >
                  {sv.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed muted">{sv.body}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
