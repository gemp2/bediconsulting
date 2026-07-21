import Link from "next/link";
import { nav, site } from "@/data/site";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t hairline bg-navy2/40">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Wordmark />
            <p className="mt-4 text-sm muted">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-gold hover:underline"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-bone/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t hairline pt-6 text-xs muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} · {site.office}
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
