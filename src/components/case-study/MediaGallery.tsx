import type { CaseStudyMedia } from "@/data/projects";
import { CaseMedia } from "./CaseMedia";

/** "How it works" gallery of images and short looping videos. */
export function MediaGallery({ items }: { items: CaseStudyMedia[] }) {
  return (
    <div className={`grid grid-cols-1 gap-4 ${items.length > 1 ? "md:grid-cols-2" : ""}`}>
      {items.map((m) => (
        <figure key={m.src} className="border hairline bg-navy2/40">
          <CaseMedia media={m} alt={m.caption ?? ""} className="aspect-video" />
          {m.caption && (
            <figcaption className="px-4 py-3 text-xs muted">{m.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
