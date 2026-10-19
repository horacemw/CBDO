import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  MapPin,
  Tag,
  ArrowRight,
  Target,
  ListChecks,
  Lightbulb,
} from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ShareLinks } from "@/components/common/ShareLinks";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ArticleCard } from "@/components/common/ArticleCard";
import {
  findProject,
  projects,
  projectCategoryLabel,
  projectStatusLabel,
} from "@/data/projects";
import { articles } from "@/data/news";
import { useSeo } from "@/lib/useSeo";
import { NotFoundPage } from "./NotFoundPage";
import { formatDateRange } from "@/lib/format";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? findProject(slug) : undefined;
  useSeo({
    title: project?.title ?? "Project",
    path: `/projects/${slug ?? ""}`,
    description: project?.summary,
    image: project?.heroImage,
    type: "article",
  });

  if (!project) return <NotFoundPage />;

  const related = projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.focusAreas.some((fa) => project.focusAreas.includes(fa)),
    )
    .slice(0, 3);

  const relatedArticles = articles
    .filter((a) =>
      a.tags?.some((t) =>
        project.title.toLowerCase().includes(t.toLowerCase()),
      ),
    )
    .slice(0, 2);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Projects", to: "/projects" },
          { label: project.title },
        ]}
      />

      <section className="bg-ink text-paper">
        <Container>
          <div className="py-12 md:py-16 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-5 text-xs">
                <span className="chip-green">
                  {projectCategoryLabel[project.category]}
                </span>
                <span className="chip">
                  {projectStatusLabel[project.status]}
                </span>
              </div>
              <h1 className="text-paper text-balance">{project.title}</h1>
              <p className="mt-4 text-lg text-paper/80 max-w-2xl">
                {project.summary}
              </p>
              <dl className="mt-7 grid grid-cols-2 md:grid-cols-3 gap-5 text-sm">
                {project.startDate ? (
                  <div>
                    <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                      Timeline
                    </dt>
                    <dd className="mt-1 flex items-center gap-1.5 text-paper">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {formatDateRange(project.startDate, project.endDate)}
                    </dd>
                  </div>
                ) : null}
                {project.location ? (
                  <div>
                    <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                      Location
                    </dt>
                    <dd className="mt-1 flex items-center gap-1.5 text-paper">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {project.location}
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                    Focus
                  </dt>
                  <dd className="mt-1 flex items-center gap-1.5 text-paper">
                    <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                    {project.focusAreas.length} area
                    {project.focusAreas.length === 1 ? "" : "s"}
                  </dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-5">
              <ImageWithFallback
                src={project.heroImage}
                alt=""
                aspect="4/3"
                className="rounded"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose-article">
                <h2>Background</h2>
                <p>{project.background}</p>
              </article>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <Panel icon={Target} title="Objectives">
                  <ul className="space-y-2.5 text-sm">
                    {project.objectives.map((o) => (
                      <li key={o} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-text">{o}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
                <Panel icon={ListChecks} title="Activities">
                  <ul className="space-y-2.5 text-sm">
                    {project.activities.map((o) => (
                      <li key={o} className="flex items-start gap-2.5">
                        <span
                          className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-text">{o}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              </div>

              {project.outcomes && project.outcomes.length > 0 ? (
                <div className="mt-6">
                  <Panel icon={Lightbulb} title="Early outcomes">
                    <ul className="space-y-2.5 text-sm">
                      {project.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5">
                          <span
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-green shrink-0"
                            aria-hidden="true"
                          />
                          <span className="text-text">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </Panel>
                </div>
              ) : null}

              {project.gallery && project.gallery.length > 0 ? (
                <div className="mt-10">
                  <h2 className="text-xl">Project gallery</h2>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.gallery.map((src, i) => (
                      <ImageWithFallback
                        key={i}
                        src={src}
                        alt="Project activity image"
                        aspect="4/3"
                        className="rounded"
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-10 border-t border-border pt-6">
                <ShareLinks title={project.title} />
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              <div className="border border-border rounded p-6 bg-paper-soft">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                  Related focus areas
                </h3>
                <ul className="mt-3 space-y-2">
                  {project.focusAreas.map((f) => (
                    <li key={f}>
                      <Link
                        to={`/focus-areas#${f}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-green-dark"
                      >
                        {f.replace(/-/g, " ").replace(/\b\w/g, (c) =>
                          c.toUpperCase(),
                        )}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {relatedArticles.length > 0 ? (
                <div className="border border-border rounded p-6 bg-paper-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                    Related news
                  </h3>
                  <div className="space-y-5">
                    {relatedArticles.map((a) => (
                      <ArticleCard key={a.slug} article={a} variant="compact" />
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="section bg-paper-soft border-t border-border">
          <Container>
            <h2 className="mb-8">Related projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}

function Panel({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-border rounded p-6 bg-paper">
      <div className="flex items-center gap-2.5 text-ink">
        <Icon className="h-4 w-4 text-brand-green-dark" aria-hidden="true" />
        <h3 className="text-sm font-semibold uppercase tracking-wider">
          {title}
        </h3>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
