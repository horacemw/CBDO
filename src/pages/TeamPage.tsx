import { UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { useSeo } from "@/lib/useSeo";
import { teamMembers } from "@/data/team";

export function TeamPage() {
  useSeo({
    title: "Team & Leadership",
    path: "/team",
    description:
      "The people behind the CBDOS coalition. Verified profiles will be published here once provided by the Secretariat.",
  });

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Team & Leadership" }]}
      />
      <PageHero
        eyebrow="Team & leadership"
        title="The people behind the coalition."
        description="The Secretariat and leadership of the CBOs Coalition for Human Rights and Good Governance."
      />

      <section className="section bg-paper">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((m) => (
              <article
                key={m.slug}
                className="border border-border rounded p-6 bg-paper"
              >
                <div className="h-20 w-20 rounded-full bg-paper-sunk border border-border inline-flex items-center justify-center text-text-subtle">
                  <UserRound className="h-8 w-8" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-lg font-semibold">{m.name}</h2>
                <p className="text-sm text-brand-green-dark font-medium">
                  {m.role}
                </p>
                {m.bio ? (
                  <p className="mt-3 text-sm text-text-muted leading-relaxed">
                    {m.bio}
                  </p>
                ) : null}
                {m.focusAreas && m.focusAreas.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {m.focusAreas.map((f) => (
                      <span key={f} className="chip">
                        {f}
                      </span>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
