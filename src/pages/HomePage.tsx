import { Link } from "react-router-dom";
import {
  ArrowRight,
  Quote,
  CheckCircle2,
  Users,
  BookOpen,
  Megaphone,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { FocusAreaIcon } from "@/components/common/FocusAreaIcon";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ArticleCard } from "@/components/common/ArticleCard";
import { ReportCard } from "@/components/common/ReportCard";
import { useSeo } from "@/lib/useSeo";
import { images } from "@/data/images";
import { focusAreas } from "@/data/focusAreas";
import { projects } from "@/data/projects";
import { articles } from "@/data/news";
import { reports } from "@/data/reports";
import { galleryAlbums } from "@/data/gallery";

export function HomePage() {
  useSeo({
    title: "Home",
    path: "/",
    description:
      "The Community-Based Organisations Coalition for Human Rights and Good Governance (CBDOS) works for human rights, accountability and inclusive development.",
  });

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestArticles = [...articles]
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);
  const highlightedReports = reports.filter((r) => r.featured).slice(0, 3);
  const previewAlbum = galleryAlbums[0];

  return (
    <>
      {/* HERO — full-bleed coalition banner with left-anchored gradient for text */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <img
            src={images.hero.homeBanner}
            alt=""
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
          {/* Left-anchored dark gradient so the headline reads clearly while
              keeping the people on the right side of the frame visible. */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/30 md:hidden" />
        </div>
        <Container>
          <div className="relative py-24 md:py-32 lg:py-40 max-w-3xl">
            <div className="text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase text-brand-green-soft/80">
              Stronger Communities · Just Society · Good Governance
            </div>
            <h1 className="mt-5 text-paper text-balance text-4xl md:text-6xl font-semibold leading-[1.05]">
              Working together for human rights and{" "}
              <span className="text-brand-green-soft">good governance</span>.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-paper/80 max-w-2xl text-pretty">
              Bringing community-based organisations together to promote human
              rights, accountability and inclusive development.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">
                Explore our work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-paper/30 hover:border-paper/60 text-paper px-5 py-3 rounded font-medium transition-colors"
              >
                Learn about CBDOS
              </Link>
            </div>

            {/* trust strip */}
            <div className="mt-14 border-t border-paper/15 pt-6 grid grid-cols-2 md:grid-cols-3 gap-5 text-sm text-paper/80">
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 text-brand-green-soft shrink-0"
                  aria-hidden="true"
                />
                Member-led coalition grounded in community reality
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 text-brand-green-soft shrink-0"
                  aria-hidden="true"
                />
                Inclusion of women, youth &amp; persons with disabilities
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2
                  className="h-4 w-4 mt-0.5 text-brand-green-soft shrink-0"
                  aria-hidden="true"
                />
                Evidence-informed, grounded in daily practice
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FOCUS AREAS */}
      <section className="section bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Our focus"
                title="Where coalition members put their energy"
                description="Four interconnected areas shape our collective work with communities and public institutions."
              />
              <Link
                to="/focus-areas"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-green-dark"
              >
                See all focus areas
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {focusAreas.slice(0, 4).map((f) => (
                <Link
                  key={f.id}
                  to={`/focus-areas#${f.slug}`}
                  className="bg-paper p-6 hover:bg-paper-soft transition-colors group"
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
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-ink group-hover:text-brand-green-dark">
                        Explore
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section bg-paper-soft">
        <Container>
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-6 lg:col-span-5 order-2 md:order-1">
              <div className="eyebrow mb-3">About CBDOS</div>
              <h2 className="text-balance">
                A coalition of community-based organisations working for a just
                society.
              </h2>
              <p className="mt-5 text-lg text-text-muted text-pretty">
                CBDOS exists to amplify the voice of community actors on the
                issues that matter in daily life — from rights awareness and
                legal literacy to governance, transparency and inclusive
                development.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Member-led priorities and planning",
                  "Grounded in community experience",
                  "Partnerships with civil society and public institutions",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      className="h-4 w-4 mt-0.5 text-brand-green-dark shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-text">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Link to="/about" className="btn-outline">
                  Read our story
                </Link>
              </div>
            </div>
            <div className="md:col-span-6 lg:col-span-7 order-1 md:order-2">
              <div className="relative">
                <ImageWithFallback
                  src={images.about.communityMeeting}
                  alt="Coalition members and partners during a working session at a convening"
                  aspect="4/3"
                  className="rounded"
                />
                <div className="hidden md:block absolute -bottom-6 -left-6 bg-paper border border-border p-5 max-w-xs shadow-card rounded">
                  <Quote
                    className="h-5 w-5 text-brand-green-dark"
                    aria-hidden="true"
                  />
                  <p className="mt-2 text-sm text-text leading-relaxed">
                    Change happens when communities are organised, informed and
                    able to speak for themselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK (replaces fabricated stats) */}
      <section className="section bg-ink text-paper">
        <Container>
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green-soft/80 mb-3">
              How we work
            </div>
            <h2 className="text-paper text-balance">
              Practical, patient, community-first.
            </h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-px bg-paper/10">
            {[
              {
                icon: Users,
                title: "Member-led",
                body: "Priorities and plans are shaped by member CBOs rather than imposed from the top.",
              },
              {
                icon: BookOpen,
                title: "Evidence-informed",
                body: "We take time to document what we learn and use it to improve the next cycle of work.",
              },
              {
                icon: Megaphone,
                title: "Collective voice",
                body: "We work with others when it strengthens outcomes — amplifying community concerns together.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-ink p-8">
                <Icon
                  className="h-6 w-6 text-brand-green-soft"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl font-semibold text-paper">{title}</h3>
                <p className="mt-2.5 text-paper/70 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section bg-paper">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-5 mb-10">
            <SectionHeading
              eyebrow="Featured projects"
              title="Programmes under way with member organisations"
              description="A selection of coalition initiatives supported by member CBOs across the country."
            />
            <Link
              to="/projects"
              className="btn-ghost text-sm"
            >
              View all projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* LATEST NEWS + REPORTS */}
      <section className="section bg-paper-soft">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              <div className="flex items-end justify-between flex-wrap gap-5 mb-8">
                <SectionHeading
                  eyebrow="Latest news"
                  title="Updates from the coalition"
                />
                <Link to="/news" className="btn-ghost text-sm">
                  All news
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {latestArticles.slice(0, 2).map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-8 space-y-6">
                {latestArticles.slice(2).map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="compact" />
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
                <SectionHeading
                  eyebrow="Publications"
                  title="Recent publications"
                  as="h3"
                />
              </div>
              <div className="space-y-6">
                {highlightedReports.map((r) => (
                  <ReportCard key={r.slug} report={r} />
                ))}
              </div>
              <Link
                to="/reports"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-green-dark"
              >
                All publications
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section bg-paper">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-5 mb-10">
            <SectionHeading
              eyebrow="From the field"
              title="Scenes from recent activities"
              description="Images from community dialogues, workshops and events supported by member organisations."
            />
            <Link to="/gallery" className="btn-ghost text-sm">
              View gallery
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {previewAlbum.images.slice(0, 4).map((img, i) => (
              <Link
                key={i}
                to={`/gallery/${previewAlbum.slug}`}
                className="block overflow-hidden rounded group"
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  aspect="1/1"
                  className="group-hover:scale-[1.02] transition-transform"
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* GET INVOLVED CTA */}
      <section className="bg-brand-green text-paper">
        <Container>
          <div className="py-14 md:py-20 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-paper/80 mb-3">
                Get involved
              </div>
              <h2 className="text-paper text-balance">
                Join a coalition working for community-led change.
              </h2>
              <p className="mt-4 text-paper/90 max-w-2xl text-lg">
                Partner with us, participate in community initiatives or
                collaborate on advocacy. Reach out — we welcome serious,
                committed engagement.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <div className="flex flex-wrap lg:justify-end gap-3">
                <Link
                  to="/get-involved"
                  className="bg-paper text-ink hover:bg-paper-soft px-5 py-3 rounded font-medium inline-flex items-center gap-2"
                >
                  Get involved
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-paper/40 hover:border-paper px-5 py-3 rounded font-medium inline-flex items-center gap-2"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
