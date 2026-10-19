import { useMemo, useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SearchInput } from "@/components/common/SearchInput";
import { EmptyState } from "@/components/common/EmptyState";
import { useSeo } from "@/lib/useSeo";
import { projects } from "@/data/projects";
import { articles } from "@/data/news";
import { reports } from "@/data/reports";
import { events } from "@/data/events";
import { focusAreas } from "@/data/focusAreas";

interface Result {
  type: "Project" | "News" | "Report" | "Event" | "Focus area";
  title: string;
  excerpt: string;
  to: string;
}

function buildIndex(): Result[] {
  const r: Result[] = [];
  projects.forEach((p) =>
    r.push({
      type: "Project",
      title: p.title,
      excerpt: p.summary,
      to: `/projects/${p.slug}`,
    }),
  );
  articles.forEach((a) =>
    r.push({
      type: "News",
      title: a.title,
      excerpt: a.excerpt,
      to: `/news/${a.slug}`,
    }),
  );
  reports.forEach((rp) =>
    r.push({
      type: "Report",
      title: rp.title,
      excerpt: rp.summary,
      to: `/reports/${rp.slug}`,
    }),
  );
  events.forEach((e) =>
    r.push({
      type: "Event",
      title: e.title,
      excerpt: e.summary,
      to: `/events/${e.slug}`,
    }),
  );
  focusAreas.forEach((f) =>
    r.push({
      type: "Focus area",
      title: f.title,
      excerpt: f.tagline,
      to: `/focus-areas#${f.slug}`,
    }),
  );
  return r;
}

const INDEX = buildIndex();

export function SearchPage() {
  const [params, setParams] = useSearchParams();
  const initialQ = params.get("q") ?? "";
  const [q, setQ] = useState(initialQ);

  useEffect(() => {
    const next = new URLSearchParams(params);
    if (q) next.set("q", q);
    else next.delete("q");
    setParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  useSeo({
    title: q ? `Search · ${q}` : "Search",
    path: "/search",
    description: "Search projects, news, reports, events and focus areas.",
  });

  const results = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return [];
    return INDEX.filter(
      (r) =>
        r.title.toLowerCase().includes(t) ||
        r.excerpt.toLowerCase().includes(t),
    );
  }, [q]);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Search" }]}
      />
      <PageHero
        eyebrow="Search"
        title="Search across the website."
        description="Projects, news, reports, events and focus areas are indexed in a lightweight client-side search. Replace with a backend search API when configured."
      />

      <section className="section bg-paper">
        <Container>
          <div className="max-w-xl">
            <SearchInput
              value={q}
              onValueChange={setQ}
              placeholder="What are you looking for?"
              label="Search the site"
              autoFocus
            />
          </div>

          <div className="mt-10">
            {!q.trim() ? (
              <p className="text-sm text-text-muted">
                Type a few words above to search projects, news, reports,
                events and focus areas.
              </p>
            ) : results.length === 0 ? (
              <EmptyState
                title={`No results for “${q}”`}
                description="Try different or shorter search terms."
              />
            ) : (
              <>
                <div className="text-sm text-text-muted mb-5">
                  {results.length} result{results.length === 1 ? "" : "s"}
                </div>
                <ul className="divide-y divide-border border-y border-border">
                  {results.map((r) => (
                    <li key={r.to}>
                      <Link
                        to={r.to}
                        className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-5"
                      >
                        <span className="chip-green">{r.type}</span>
                        <div className="min-w-0">
                          <div className="font-semibold text-ink group-hover:text-brand-green-dark">
                            {r.title}
                          </div>
                          <p className="mt-1 text-sm text-text-muted line-clamp-2">
                            {r.excerpt}
                          </p>
                        </div>
                        <ArrowRight
                          className="h-4 w-4 mt-1 text-text-subtle group-hover:text-brand-green-dark"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
