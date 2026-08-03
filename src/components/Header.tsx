"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-bar text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" onClick={() => setOpen(false)} aria-label="Bedi Consulting home">
          <Wordmark className="text-white" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            const base = "text-xs uppercase tracking-[0.14em] transition-colors";

            // Contact Us — highlighted pill (primary CTA).
            if (item.href === "/contact") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${base} rounded-full border border-gold px-4 py-1.5 text-gold hover:bg-gold hover:text-[#4d4d4f]`}
                >
                  {item.label}
                </Link>
              );
            }

            // Tools — distinct colour to set the free tools apart.
            if (item.href === "/tools") {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`${base} font-semibold text-[#5eb3f5] hover:text-white`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`${base} hover:text-gold ${
                  active ? "text-gold" : "text-white/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden text-xs uppercase tracking-[0.14em] text-white/80"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-white/15 md:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-white/15 px-6 py-4 text-xs uppercase tracking-[0.14em] ${
                item.href === "/tools"
                  ? "font-semibold text-[#5eb3f5]"
                  : item.href === "/contact"
                    ? "text-gold"
                    : "text-white/80"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
