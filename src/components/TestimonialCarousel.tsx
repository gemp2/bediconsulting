"use client";

import { useState } from "react";
import { testimonials } from "@/data/site";

export function TestimonialCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const go = (d: number) =>
    setI((prev) => (prev + d + testimonials.length) % testimonials.length);

  return (
    <div className="mx-auto max-w-3xl text-center">
      <span aria-hidden className="font-display text-6xl leading-[0.5] text-gold">
        &ldquo;
      </span>
      <blockquote className="mt-6 text-xl leading-relaxed text-bone/90 md:text-2xl">
        {t.quote}
      </blockquote>
      <figcaption className="mt-8">
        <span className="block text-sm font-semibold text-bone">{t.name}</span>
        <span className="mt-1 block text-xs muted">
          {t.role}, {t.org}
        </span>
      </figcaption>

      <div className="mt-10 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous reference"
          className="flex h-10 w-10 items-center justify-center border hairline text-bone/70 transition-colors hover:border-gold/50 hover:text-gold"
        >
          ‹
        </button>
        <div className="flex" role="tablist" aria-label="References">
          {testimonials.map((tt, idx) => (
            <button
              key={tt.name}
              type="button"
              role="tab"
              aria-label={`Reference ${idx + 1}`}
              aria-selected={idx === i}
              onClick={() => setI(idx)}
              className="group flex h-6 w-6 items-center justify-center"
            >
              <span
                aria-hidden
                className={`h-2 w-2 rounded-full transition-colors ${
                  idx === i ? "bg-gold" : "bg-black/20 group-hover:bg-black/40"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next reference"
          className="flex h-10 w-10 items-center justify-center border hairline text-bone/70 transition-colors hover:border-gold/50 hover:text-gold"
        >
          ›
        </button>
      </div>
    </div>
  );
}
