import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { FocusAreaIcon } from "@/components/common/FocusAreaIcon";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { useSeo } from "@/lib/useSeo";
import { focusAreas } from "@/data/focusAreas";
import { images } from "@/data/images";
import { projects } from "@/data/projects";

const focusHero: Record<string, string> = {
  "human-rights": images.focusAreas.humanRights,
  "good-governance": images.focusAreas.goodGovernance,
  "transparency-accountability": images.focusAreas.transparency,
  "civic-participation": images.focusAreas.civic,
  "community-empowerment": images.focusAreas.empowerment,
  "inclusive-development": images.focusAreas.inclusive,
};

export function FocusAreasPage() {
  useSeo({
    title: "Focus Areas",
    path: "/focus-areas",
    description:
      "The thematic areas that shape the coalition's work with communities and public institutions.",
  });

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Focus Areas" }]}
      />
      <PageHero
        eyebrow="Focus areas"
        title="Where coalition members put their energy."
        description="These are the thematic areas that shape the coalition's work with communities and public institutions."
      />

      <section className="section bg-paper">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {focusAreas.map((f) => (
              <a
                key={f.id}
                href={`#${f.slug}`}
                className="group border border-border rounded p-5 hover:border-ink hover:bg-paper-soft transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 shrink-0 rounded bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                    <FocusAreaIcon icon={f.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold leading-tight">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                      {f.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium group-hover:text-brand-green-dark">
                      Read more
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {focusAreas.map((f, i) => {
        const related = projects.filter((p) => p.focusAreas.includes(f.id));
        const reverse = i % 2 === 1;
        return (
          <section
            id={f.slug}
            key={f.id}
            className={i % 2 === 0 ? "section bg-paper-soft" : "section bg-paper"}
          >
            <Container>
              <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div
                  className={
                    reverse
                      ? "lg:col-span-6 lg:order-2"
                      : "lg:col-span-6"
                  }
                >
                  <ImageWithFallback
                    src={focusHero[f.id]}
                    alt=""
                    aspect="4/3"
                    className="rounded"
                  />
                </div>
                <div
                  className={reverse ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"}
                >
                  <div className="eyebrow mb-3">Focus area</div>
                  <h2 className="text-balance">{f.title}</h2>
                  <p className="mt-4 text-lg text-text-muted">{f.tagline}</p>
                  <p className="mt-4 text-text leading-relaxed">{f.overview}</p>

                  <h3 className="mt-7 text-base font-semibold text-ink">
                    The issue
                  </h3>
                  <p className="mt-2 text-text-muted leading-relaxed">
                    {f.issue}
                  </p>

                  <h3 className="mt-6 text-base font-semibold text-ink">
                    How we approach it
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {f.approaches.map((a) => (
                      <li key={a} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-text">{a}</span>
                      </li>
                    ))}
                  </ul>

                  {related.length > 0 ? (
                    <div className="mt-7 flex flex-wrap gap-3">
                      {related.slice(0, 3).map((p) => (
                        <Link
                          key={p.slug}
                          to={`/projects/${p.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm border border-border rounded px-3 py-2 hover:border-ink"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-ink text-paper">
        <Container>
          <div className="py-14 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-paper text-balance">
                Interested in collaborating on one of these areas?
              </h2>
              <p className="mt-3 text-paper/80 max-w-2xl">
                Reach out via Get Involved or Contact to discuss how your
                organisation could work with CBDOS members.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right flex flex-wrap lg:justify-end gap-3">
              <Link to="/get-involved" className="btn-primary">
                Get involved
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="border border-paper/30 hover:border-paper/60 px-5 py-3 rounded font-medium inline-flex items-center gap-2"
              >
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
