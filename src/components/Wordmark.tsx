/**
 * Brand logo: the orange BEDI arch mark (theme-independent) plus the wordmark
 * text, which inherits colour from the parent (white on the grey header,
 * black on the white footer). Pass a text-colour class via `className`.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/media/logo-mark.png"
        alt=""
        className="h-6 w-auto"
        aria-hidden
      />
      <span className="font-display text-sm font-extrabold leading-none tracking-[0.1em]">
        BEDI CONSULTING
      </span>
    </span>
  );
}
