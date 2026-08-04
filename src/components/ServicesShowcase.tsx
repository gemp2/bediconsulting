"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { services } from "@/data/services";

/**
 * Full-bleed services band. The active service's photo fills the section as a
 * crossfading background; the six services sit in a frosted-glass box, each
 * with its own short description. The active service changes on mouse hover and
 * on scroll (the row in the middle band of the viewport wins). Each row links
 * to its detail page. The section title lives above this component.
 */
export function ServicesShowcase() {
  const [active, setActive] = useState(0);
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
        {/* Light gradient, just enough depth behind the box */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
      </div>

      {/* Content — only the six services, in a frosted box */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 py-24">
        <ul className="w-full max-w-lg divide-y divide-white/10 border border-white/15 bg-black/35 px-7 py-3 backdrop-blur-md">
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
                className="group block py-4"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs font-semibold text-gold/70">
                    {sv.num}
                  </span>
                  <span
                    className={`flex-1 text-base transition-colors ${
                      active === i
                        ? "text-gold"
                        : "text-white/90 group-hover:text-gold"
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
                </div>
                <p className="mt-1.5 pl-7 text-xs leading-relaxed text-white/65">
                  {sv.body}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
