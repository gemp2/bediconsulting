"use client";

import { useEffect } from "react";
import { widget, widgetConfigured } from "@/data/linkedin";
import { LinkedInFeed } from "./LinkedInFeed";
import { DraftBadge } from "./ui";

/**
 * Option B — live auto-updating LinkedIn feed via a third-party widget.
 *
 * Until a real embed ID is set in src/data/linkedin.ts, this renders the
 * styled example carousel and injects NO external script (so no third-party
 * cookies). Once configured, it loads the provider script once and mounts the
 * provider's container, which fills itself with the latest posts.
 */
export function LinkedInWidget() {
  useEffect(() => {
    if (!widgetConfigured) return;

    // Avoid injecting the provider script more than once.
    const existing = document.querySelector(
      `script[src="${widget.scriptSrc}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = widget.scriptSrc;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  if (!widgetConfigured) {
    return (
      <div>
        <div className="mb-6 flex items-center gap-3">
          <DraftBadge label="Example — live widget not connected yet" />
          <p className="text-xs muted">
            Live {widget.provider} feed mounts here once the embed ID is set.
          </p>
        </div>
        <LinkedInFeed />
      </div>
    );
  }

  return (
    <div
      className={widget.containerClass}
      data-embed-id={widget.embedId}
    />
  );
}
