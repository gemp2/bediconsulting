/**
 * Infinite horizontal scroll strip. The item list is rendered twice so the
 * -50% keyframe lands exactly on a repeat, giving a seamless loop.
 */
export function Marquee({ items }: { items: readonly string[] }) {
  return (
    <div
      className="relative overflow-hidden border-y hairline py-5"
      aria-label="Our capabilities"
    >
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="text-xs uppercase tracking-[0.18em] text-bone/45"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
