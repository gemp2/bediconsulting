import Link from "next/link";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{title}</h2>
      {body && <p className="mt-5 text-base leading-relaxed muted">{body}</p>}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-xs uppercase tracking-[0.14em] transition-colors";
  const styles =
    variant === "solid"
      ? "bg-gold text-navy hover:bg-gold/85"
      : "border border-gold/40 text-gold hover:border-gold hover:bg-gold/10";

  const external = href.startsWith("http") || href.startsWith("mailto:");
  if (external) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`border hairline bg-navy2/40 p-7 transition-colors hover:border-gold/30 ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-4xl font-extrabold text-gold md:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.14em] muted">{label}</p>
    </div>
  );
}

/**
 * Marks content that is not yet real. Deliberately loud — this must never
 * ship to production unnoticed.
 */
export function DraftBadge({ label = "Draft content" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 border border-amber-400/50 bg-amber-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-amber-300">
      {label}
    </span>
  );
}

/**
 * Stand-in for project and team photography, which does not exist yet.
 * Renders a labelled placeholder rather than a stock image so the gap is
 * visible during review.
 */
export function ImagePlaceholder({
  label,
  aspect = "aspect-[4/3]",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`${aspect} ${className} flex items-center justify-center border border-dashed border-bone/15 bg-navy2/60`}
    >
      <span className="px-4 text-center text-[10px] uppercase tracking-[0.18em] text-bone/35">
        {label}
      </span>
    </div>
  );
}
