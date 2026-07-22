"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { companyUrl, posts } from "@/data/linkedin";
import { DraftBadge, ImagePlaceholder } from "./ui";

/** Small inline LinkedIn glyph so no external asset is needed. */
function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function LinkedInFeed() {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    // 1px tolerance for sub-pixel rounding.
    setCanPrev(el.scrollLeft > 1);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const overflows = canPrev || canNext;

  function scroll(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const amount = card ? card.clientWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: amount * dir, behavior: "smooth" });
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-[#0A66C2] text-white">
            <LinkedInIcon className="h-5 w-5" />
          </span>
          <div>
            <p className="text-sm font-bold text-bone">Bedi Consulting</p>
            <p className="text-xs muted">Follow us on LinkedIn</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <DraftBadge label="Placeholder posts" />
          {overflows && (
            <div className="hidden gap-2 sm:flex">
              <CarouselButton
                dir={-1}
                disabled={!canPrev}
                onClick={() => scroll(-1)}
              />
              <CarouselButton
                dir={1}
                disabled={!canNext}
                onClick={() => scroll(1)}
              />
            </div>
          )}
        </div>
      </div>

      <ul
        ref={track}
        onScroll={measure}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {posts.map((post) => {
          const href = post.url ?? companyUrl;
          return (
            <li
              key={post.id}
              className="w-[300px] shrink-0 snap-start sm:w-[340px]"
            >
              <article className="flex h-full flex-col border hairline bg-navy2/50">
                <div className="flex items-center justify-between p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-[#0A66C2] text-white">
                      <LinkedInIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-bone">
                        Bedi Consulting
                      </p>
                      <p className="text-[11px] muted">{post.date}</p>
                    </div>
                  </div>
                  <LinkedInIcon className="h-4 w-4 text-[#0A66C2]" />
                </div>

                <p className="px-5 text-sm leading-relaxed text-bone/80">
                  {post.excerpt}
                </p>

                <div className="mt-4 px-5">
                  <ImagePlaceholder
                    label="Post image"
                    aspect="aspect-[16/10]"
                  />
                </div>

                <div className="mt-auto flex items-center justify-between px-5 py-4">
                  <span className="text-[11px] uppercase tracking-[0.14em] muted">
                    {post.kind}
                  </span>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gold hover:underline"
                  >
                    View post →
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <div className="mt-6">
        <a
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gold/40 px-6 py-3 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:border-gold hover:bg-gold/10"
        >
          <LinkedInIcon className="h-4 w-4" />
          Follow on LinkedIn →
        </a>
      </div>
    </div>
  );
}

function CarouselButton({
  dir,
  onClick,
  disabled,
}: {
  dir: 1 | -1;
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 1 ? "Next posts" : "Previous posts"}
      className="flex h-9 w-9 items-center justify-center border hairline text-bone/70 transition-colors hover:border-gold/50 hover:text-gold disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-[color:var(--hairline)] disabled:hover:text-bone/70"
    >
      {dir === 1 ? "›" : "‹"}
    </button>
  );
}
