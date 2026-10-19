import { Link } from "react-router-dom";
import { ArrowRight, Handshake } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useSeo } from "@/lib/useSeo";
import { partners, partnerCategoryLabel } from "@/data/partners";

export function PartnersPage() {
  useSeo({
    title: "Partners & Membership",
    path: "/partners",
    description:
      "The categories of partners and members the coalition works with. Verified entries will be added by the Secretariat.",
  });

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Partners & Membership" }]}
      />
      <PageHero
        eyebrow="Partners & membership"
        title="Who we work with."
        description="The partners, member organisations and networks the coalition works with across human rights, governance and inclusive development."
      />

      <section className="section bg-paper">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((p) => (
              <article
                key={p.slug}
                className="border border-border rounded p-6 bg-paper"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded bg-brand-green-soft text-brand-green-dark inline-flex items-center justify-center">
                    <Handshake className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="chip-green mb-1.5">
                      {partnerCategoryLabel[p.category]}
                    </div>
                    <h3 className="text-base font-semibold">{p.name}</h3>
                  </div>
                </div>
                {p.description ? (
                  <p className="mt-4 text-sm text-text-muted leading-relaxed">
                    {p.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-paper-soft border-y border-border">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Membership"
                title="Becoming part of the coalition"
                description="Coalition membership is open to community-based organisations working in alignment with the coalition's values."
              />
            </div>
            <div className="lg:col-span-7">
              <ol className="divide-y divide-border border-t border-b border-border">
                {[
                  {
                    t: "Share your interest",
                    d: "Contact the Secretariat with a short description of your organisation and the communities you work with.",
                  },
                  {
                    t: "Explore alignment",
                    d: "A short conversation to understand mutual interests and any specific coalition requirements.",
                  },
                  {
                    t: "Participate",
                    d: "Join coalition activities, working groups and shared learning spaces.",
                  },
                  {
                    t: "Formal membership",
                    d: "Once eligibility steps have been confirmed, your organisation will be welcomed as a member.",
                  },
                ].map((s, i) => (
                  <li key={s.t} className="py-5 flex gap-4">
                    <span className="shrink-0 h-7 w-7 rounded bg-ink text-paper text-xs font-semibold inline-flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">
                        {s.t}
                      </h3>
                      <p className="mt-1 text-sm text-text-muted leading-relaxed">
                        {s.d}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-brand-green text-paper">
        <Container>
          <div className="py-14 md:py-20 flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-paper text-balance">
                Interested in joining or partnering with CBDOS?
              </h2>
              <p className="mt-3 text-paper/90">
                Reach out via Get Involved — we will respond with next steps.
              </p>
            </div>
            <Link
              to="/get-involved"
              className="bg-paper text-ink hover:bg-paper-soft px-5 py-3 rounded font-medium inline-flex items-center gap-2"
            >
              Get involved
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
