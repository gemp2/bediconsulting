"use client";

/**
 * Full-bleed hero background video. Loops only the first 5 seconds by
 * resetting playback, and sits behind a dark scrim so the white hero text
 * stays legible over the footage.
 */
export function HeroVideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/media/tunnel-bore.jpg"
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime >= 5) e.currentTarget.currentTime = 0;
        }}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/media/hero-tunnel.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/50"
      />
    </>
  );
}
