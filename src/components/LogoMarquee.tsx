import { clients } from "@/data/site";

/** Horizontally scrolling client logo strip. Logos duplicated for a seamless loop. */
export function LogoMarquee() {
  const items = [...clients, ...clients];
  return (
    <div className="relative overflow-hidden py-2" aria-label="Our clients">
      <div className="marquee-track flex w-max items-center gap-16">
        {items.map((c, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={c.logo}
            alt={i < clients.length ? c.name : ""}
            aria-hidden={i >= clients.length}
            className="h-9 w-auto max-w-[140px] shrink-0 object-contain opacity-70 grayscale"
          />
        ))}
      </div>
    </div>
  );
}
