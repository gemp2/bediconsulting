export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-sm font-extrabold tracking-[0.12em] text-white ${className}`}
    >
      BEDI<span className="text-gold">.</span>CONSULTING
    </span>
  );
}
