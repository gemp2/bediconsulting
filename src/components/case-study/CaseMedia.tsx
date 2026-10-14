"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import type { CaseStudyMedia } from "@/data/projects";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

/**
 * Image or looping video. Videos load nothing until they scroll into view,
 * then play muted and pause again when off screen (no `autoPlay`, which would
 * override `preload="none"` and fetch every video on page load). Users who
 * prefer reduced motion, and the server render, get the poster only.
 */
export function CaseMedia({
  media,
  alt,
  className = "",
}: {
  media: Omit<CaseStudyMedia, "caption">;
  alt: string;
  className?: string;
}) {
  const reduced = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => true,
  );
  const video = useRef<HTMLVideoElement>(null);
  const isVideo = media.kind === "video" && !reduced;

  useEffect(() => {
    const el = video.current;
    if (!isVideo || !el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [isVideo]);

  const still = media.kind === "image" ? media.src : media.poster;

  if (isVideo) {
    return (
      <video
        ref={video}
        src={media.src}
        poster={media.poster}
        muted
        playsInline
        loop
        preload="none"
        aria-label={alt}
        className={`w-full bg-navy2 object-cover ${className}`}
      />
    );
  }

  if (!still) {
    return <div aria-label={alt} role="img" className={`w-full bg-navy2 ${className}`} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={still}
      alt={alt}
      loading="lazy"
      className={`w-full bg-navy2 object-cover ${className}`}
    />
  );
}
