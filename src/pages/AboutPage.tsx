import { Link } from "react-router-dom";
import { ArrowRight, Compass, Target, Heart, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { SectionHeading } from "@/components/common/SectionHeading";
import { useSeo } from "@/lib/useSeo";
import { aboutContent } from "@/data/aboutContent";
import { images } from "@/data/images";

export function AboutPage() {
  useSeo({
    title: "About CBDOS",
    path: "/about",
    description: aboutContent.intro,
  });

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "About" }]} />
      <PageHero
        eyebrow="About CBDOS"
        title="A coalition of community-based organisations working for human rights and good governance."
        description={aboutContent.intro}
      />

      {/* Vision / Mission */}
      <section className="section bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-border rounded p-7 bg-paper">
                  <div className="h-10 w-10 rounded bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl">Our vision</h2>
                  <p className="mt-3 text-text-muted leading-relaxed">
                    {aboutContent.vision}
                  </p>
                </div>
                <div className="border border-border rounded p-7 bg-paper">
                  <div className="h-10 w-10 rounded bg-brand-green-soft text-brand-green-dark flex items-center justify-center">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl">Our mission</h2>
                  <p className="mt-3 text-text-muted leading-relaxed">
                    {aboutContent.mission}
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ImageWithFallback
                src={images.about.coalitionWork}
                alt="Members of the coalition in discussion during a meeting"
                aspect="4/3"
                className="rounded"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="section bg-paper-soft border-y border-border">
        <Container>
          <SectionHeading
            eyebrow="Our values"
            title="What we hold ourselves to"
            description="These are the practical commitments that guide the way coalition members work together and with communities."
          />
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.values.map((v) => (
              <div
                key={v.title}
                className="bg-paper border border-border rounded p-6"
              >
                <div className="flex items-center gap-2.5">
                  <Heart
                    className="h-4 w-4 text-brand-green-dark"
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-semibold text-ink">
                    {v.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Objectives */}
      <section className="section bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Our objectives"
                title="What we are trying to achieve, together."
                description="Member organisations have agreed a set of broad objectives that shape the coalition's work."
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-border border-t border-b border-border">
                {aboutContent.objectives.map((o, i) => (
                  <li key={o} className="flex items-start gap-4 py-5">
                    <span className="shrink-0 h-7 w-7 rounded bg-ink text-paper text-xs font-semibold inline-flex items-center justify-center">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-text leading-relaxed">{o}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="section bg-paper-soft border-t border-border">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="How we work in practice"
            description="A short summary of the practical approach that shapes coalition work."
          />
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {aboutContent.approach.map((a) => (
              <div
                key={a.title}
                className="bg-paper border border-border rounded p-6 flex gap-4"
              >
                <CheckCircle2
                  className="h-5 w-5 mt-0.5 text-brand-green-dark shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                    {a.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-ink text-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <h2 className="text-paper">
                Explore our work with communities, or get in touch.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right flex flex-wrap lg:justify-end gap-3">
              <Link to="/projects" className="btn-primary">
                See our projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-paper/30 hover:border-paper/60 px-5 py-3 rounded font-medium"
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
