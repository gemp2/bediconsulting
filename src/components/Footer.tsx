import Link from "next/link";
import { nav, site, socials } from "@/data/site";
import { Wordmark } from "./Wordmark";

function LinkedInMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function InstagramMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

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

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
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

            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] muted">
                Follow us
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bedi Consulting on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center border hairline text-bone/70 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <LinkedInMark />
                </a>
                <a
                  href={socials.instagram || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bedi Consulting on Instagram"
                  className="flex h-10 w-10 items-center justify-center border hairline text-bone/70 transition-colors hover:border-gold/50 hover:text-gold"
                >
                  <InstagramMark />
                </a>
              </div>
            </div>
          </div>
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
