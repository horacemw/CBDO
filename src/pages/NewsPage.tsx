import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { ArticleCard } from "@/components/common/ArticleCard";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { SearchInput } from "@/components/common/SearchInput";
import { EmptyState } from "@/components/common/EmptyState";
import { articles, articleCategoryLabel } from "@/data/news";
import { images } from "@/data/images";
import { useSeo } from "@/lib/useSeo";
import type { Article } from "@/types/content";
import { formatDate } from "@/lib/format";

type CategoryKey = "all" | Article["category"];

export function NewsPage() {
  useSeo({
    title: "News & Blog",
    path: "/news",
    description: "Latest news, press releases, statements and reflections from CBDOS.",
  });

  const sorted = useMemo(
    () =>
      [...articles].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1)),
    [],
  );
  const featured = sorted.find((a) => a.featured) ?? sorted[0];
  const rest = sorted.filter((a) => a.slug !== featured.slug);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return rest.filter((a) => {
      if (category !== "all" && a.category !== category) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        (a.tags ?? []).join(" ").toLowerCase().includes(q)
      );
    });
  }, [rest, query, category]);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "News & Blog" }]}
      />

      {/* Editorial masthead */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="absolute inset-0">
          <img
            src={images.news.rightsDay}
            alt=""
            className="h-full w-full object-cover opacity-40"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/50" />
        </div>
        <Container>
          <div className="relative py-14 md:py-20 lg:py-24 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-brand-green-soft/80 mb-4">
                <Newspaper className="h-3.5 w-3.5" aria-hidden="true" />
                News &amp; blog
              </div>
              <h1 className="text-paper text-balance text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Updates, reflections and statements from the{" "}
                <span className="text-brand-green-soft">coalition</span>.
              </h1>
              <p className="mt-5 text-lg text-paper/80 max-w-2xl text-pretty">
                Short editorial updates from member organisations and the
                coalition's shared work — news, press releases, statements and
                reflections.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <dl className="grid grid-cols-2 lg:grid-cols-1 gap-5 lg:gap-4">
                <div>
                  <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                    Articles
                  </dt>
                  <dd className="mt-1 text-2xl font-semibold text-paper">
                    {sorted.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                    Latest
                  </dt>
                  <dd className="mt-1 text-sm text-paper">
                    {formatDate(sorted[0]?.publishedAt)}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured */}
      <section className="section bg-paper">
        <Container>
          <article className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <Link
                to={`/news/${featured.slug}`}
                className="block overflow-hidden rounded"
              >
                <ImageWithFallback
                  src={featured.heroImage}
                  alt=""
                  aspect="16/9"
                />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 text-xs text-text-muted">
                <span className="font-semibold uppercase tracking-wider text-brand-green-dark">
                  Featured · {articleCategoryLabel[featured.category]}
                </span>
                <span aria-hidden="true">·</span>
                <time dateTime={featured.publishedAt}>
                  {formatDate(featured.publishedAt)}
                </time>
              </div>
              <h2 className="mt-3 text-balance">
                <Link
                  to={`/news/${featured.slug}`}
                  className="hover:text-brand-green-dark"
                >
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 text-lg text-text-muted">
                {featured.excerpt}
              </p>
              <Link to={`/news/${featured.slug}`} className="mt-6 btn-outline">
                Read article
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        </Container>
      </section>

      {/* Filters + grid */}
      <section className="section bg-paper-soft border-t border-border">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-8">
            <div>
              <div className="eyebrow mb-2">All articles</div>
              <h2>Browse news &amp; blog</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-4 mb-8">
            <div className="md:col-span-7">
              <SearchInput
                value={query}
                onValueChange={setQuery}
                placeholder="Search articles…"
                label="Search articles"
              />
            </div>
            <div className="md:col-span-5">
              <label htmlFor="newscat" className="sr-only">
                Category
              </label>
              <select
                id="newscat"
                className="input-base appearance-none bg-paper"
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryKey)}
              >
                <option value="all">{articleCategoryLabel.all}</option>
                <option value="news">{articleCategoryLabel.news}</option>
                <option value="press-release">
                  {articleCategoryLabel["press-release"]}
                </option>
                <option value="statement">
                  {articleCategoryLabel.statement}
                </option>
                <option value="blog">{articleCategoryLabel.blog}</option>
                <option value="analysis">{articleCategoryLabel.analysis}</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              title="No matching articles"
              description="Try different search terms or clear the filter."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
