import type { Metadata } from "next";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
import { DraftBadge, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Project enquiries for tunnel and geotechnical engineering. A senior engineer reviews every enquiry and replies directly.",
};

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Contact us</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
            Project enquiries.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed muted">
            A senior engineer reviews every enquiry and replies directly. Include
            ground conditions, constraints and the design stage where you can.
          </p>

          <dl className="mt-12 space-y-8">
            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] muted">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-gold hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] muted">
                Office
              </dt>
              <dd className="mt-2 text-sm text-bone">{site.office}</dd>
              <dd className="mt-2">
                <DraftBadge label="Full address & phone needed" />
              </dd>
            </div>

            <div>
              <dt className="text-[10px] uppercase tracking-[0.18em] muted">
                LinkedIn
              </dt>
              <dd className="mt-2">
                <DraftBadge label="Company page URL needed" />
              </dd>
            </div>
          </dl>
        </div>

        <div className="border hairline bg-navy2/40 p-8">
          <div className="mb-6 flex items-center gap-3">
            <DraftBadge label="Opens your mail client" />
          </div>
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
