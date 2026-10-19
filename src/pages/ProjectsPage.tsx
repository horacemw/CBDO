import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ProjectCard } from "@/components/common/ProjectCard";
import { SearchInput } from "@/components/common/SearchInput";
import { EmptyState } from "@/components/common/EmptyState";
import { useSeo } from "@/lib/useSeo";
import {
  projects,
  projectCategoryLabel,
  projectStatusLabel,
} from "@/data/projects";
import type { Project } from "@/types/content";

type CategoryKey = "all" | Project["category"];
type StatusKey = "all" | Project["status"];

export function ProjectsPage() {
  useSeo({
    title: "Projects & Programmes",
    path: "/projects",
    description:
      "Projects and programmes supported by CBDOS member organisations.",
  });

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey>("all");
  const [status, setStatus] = useState<StatusKey>("all");

  const featured = projects.find((p) => p.featured);
  const rest = useMemo(
    () => projects.filter((p) => p.slug !== featured?.slug),
    [featured?.slug],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (status !== "all" && p.status !== status) return false;
      if (!q) return true;
      return (
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.activities.join(" ").toLowerCase().includes(q)
      );
    });
  }, [rest, query, category, status]);

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "all", label: projectCategoryLabel.all },
    { key: "human-rights", label: projectCategoryLabel["human-rights"] },
    { key: "good-governance", label: projectCategoryLabel["good-governance"] },
    { key: "civic-education", label: projectCategoryLabel["civic-education"] },
    {
      key: "community-empowerment",
      label: projectCategoryLabel["community-empowerment"],
    },
    {
      key: "inclusive-development",
      label: projectCategoryLabel["inclusive-development"],
    },
  ];

  const statuses: { key: StatusKey; label: string }[] = [
    { key: "all", label: "All statuses" },
    { key: "ongoing", label: projectStatusLabel.ongoing },
    { key: "upcoming", label: projectStatusLabel.upcoming },
    { key: "completed", label: projectStatusLabel.completed },
    { key: "proposed", label: projectStatusLabel.proposed },
  ];

  const hasFilters = query || category !== "all" || status !== "all";

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Projects" }]} />
      <PageHero
        eyebrow="Projects & programmes"
        title="Coalition initiatives in practice."
        description="A rolling view of the projects supported by coalition member organisations across Malawi."
      />

      {/* Featured */}
      {featured ? (
        <section className="section bg-paper">
          <Container>
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <ImageWithFallback
                  src={featured.heroImage}
                  alt=""
                  aspect="16/9"
                  className="rounded"
                />
              </div>
              <div className="lg:col-span-5">
                <div className="chip-green">Featured project</div>
                <h2 className="mt-3 text-balance">{featured.title}</h2>
                <p className="mt-4 text-lg text-text-muted">
                  {featured.summary}
                </p>
                <Link
                  to={`/projects/${featured.slug}`}
                  className="mt-6 btn-outline"
                >
                  View project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {/* Filters + grid */}
      <section className="section bg-paper-soft border-t border-border">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8">
            <div>
              <div className="eyebrow mb-2">All projects</div>
              <h2>Browse projects</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              Filter and search
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-4 mb-8">
            <div className="md:col-span-5">
              <SearchInput
                value={query}
                onValueChange={setQuery}
                placeholder="Search projects…"
                label="Search projects"
              />
            </div>
            <div className="md:col-span-4">
              <label htmlFor="category" className="sr-only">
                Category
              </label>
              <select
                id="category"
                className="input-base appearance-none bg-paper"
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryKey)}
              >
                {categories.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-3">
              <label htmlFor="status" className="sr-only">
                Status
              </label>
              <select
                id="status"
                className="input-base appearance-none bg-paper"
                value={status}
                onChange={(e) => setStatus(e.target.value as StatusKey)}
              >
                {statuses.map((s) => (
                  <option key={s.key} value={s.key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-text-muted mb-6">
            <div>
              {filtered.length} project{filtered.length === 1 ? "" : "s"}
            </div>
            {hasFilters ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("all");
                  setStatus("all");
                }}
                className="font-medium text-ink hover:text-brand-green-dark underline underline-offset-4"
              >
                Clear filters
              </button>
            ) : null}
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              title="No matching projects"
              description="Try different search terms or clear the filters."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
