import type { CaseStudy } from "@/data/projects";
import { Button } from "@/components/ui";

/** Card pointing from a case study to its companion platform or a related project. */
export function ToolLinkCard({
  tool,
  kicker = "Project platform",
}: {
  tool: NonNullable<CaseStudy["toolLink"]>;
  kicker?: string;
}) {
  return (
    <div className="flex flex-col gap-6 border border-gold/30 bg-navy2/40 p-8 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl">
        <p className="eyebrow">{kicker}</p>
        <p className="mt-3 text-sm leading-relaxed muted">{tool.body}</p>
      </div>
      <Button href={tool.href} className="shrink-0">
        {tool.label}
      </Button>
    </div>
  );
}
