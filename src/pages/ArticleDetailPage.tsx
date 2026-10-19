import { useParams, Link } from "react-router-dom";
import { Calendar, Clock, User, MapPin, ArrowLeft, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ShareLinks } from "@/components/common/ShareLinks";
import { ArticleCard } from "@/components/common/ArticleCard";
import { articles, findArticle, articleCategoryLabel } from "@/data/news";
import { useSeo } from "@/lib/useSeo";
import { formatDate } from "@/lib/format";
import { NotFoundPage } from "./NotFoundPage";

/** Very small markdown renderer: supports h2 (## ), h3 (### ), ul (- ),
 *  blockquote (> ) and paragraphs. Intentionally minimal — no HTML injection,
 *  no raw HTML allowed in content. */
function renderBody(body: string) {
  const blocks: Array<React.ReactNode> = [];
  const lines = body.split(/\n/);
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(<h2 key={key++}>{line.slice(3).trim()}</h2>);
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(<h3 key={key++}>{line.slice(4).trim()}</h3>);
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push(
        <ul key={key++}>
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>,
      );
      continue;
    }
    if (line.startsWith("> ")) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        parts.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push(<blockquote key={key++}>{parts.join(" ")}</blockquote>);
      continue;
    }
    // paragraph (collect until blank line)
    const paraLines: string[] = [line];
    i++;
    while (i < lines.length && lines[i].trim() && !/^[#>\-]/.test(lines[i])) {
      paraLines.push(lines[i]);
      i++;
    }
    blocks.push(<p key={key++}>{paraLines.join(" ")}</p>);
  }
  return blocks;
}

export function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? findArticle(slug) : undefined;
  useSeo({
    title: article?.title ?? "Article",
    description: article?.excerpt,
    path: `/news/${slug ?? ""}`,
    image: article?.heroImage,
    type: "article",
  });

  if (!article) return <NotFoundPage />;

  const sorted = [...articles].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
  const idx = sorted.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const related = sorted
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "News & Blog", to: "/news" },
          { label: article.title },
        ]}
      />

      <article>
        <header className="bg-paper">
          <Container width="narrow">
            <div className="pt-10 md:pt-14 pb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
                <span className="font-semibold uppercase tracking-wider text-brand-green-dark">
                  {articleCategoryLabel[article.category]}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>
                </span>
                {article.author ? (
                  <span className="inline-flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.author}
                  </span>
                ) : null}
                {article.readingMinutes ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.readingMinutes} min read
                  </span>
                ) : null}
                {article.location ? (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {article.location}
                  </span>
                ) : null}
              </div>
              <h1 className="mt-5 text-balance">{article.title}</h1>
              <p className="mt-4 text-lg text-text-muted">{article.excerpt}</p>
            </div>
          </Container>
          <Container>
            <ImageWithFallback
              src={article.heroImage}
              alt=""
              aspect="21/9"
              className="rounded"
            />
          </Container>
        </header>

        <section className="pt-10 pb-16 bg-paper">
          <Container width="narrow">
            <div className="prose-article">{renderBody(article.body)}</div>

            {article.gallery && article.gallery.length > 0 ? (
              <div className="mt-12">
                <h2 className="text-xl mb-4">From the field</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {article.gallery.map((img, i) => (
                    <figure key={i} className="space-y-2">
                      <ImageWithFallback
                        src={img.src}
                        alt={img.alt}
                        aspect="4/3"
                        className="rounded"
                      />
                      {img.caption ? (
                        <figcaption className="text-xs text-text-muted leading-relaxed">
                          {img.caption}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              </div>
            ) : null}

            {article.partners && article.partners.length > 0 ? (
              <div className="mt-10 border border-border bg-paper-soft rounded p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  In partnership with
                </div>
                <div className="mt-2 text-sm text-ink">
                  {article.partners.join(" · ")}
                </div>
              </div>
            ) : null}

            <div className="mt-10 border-t border-border pt-6 flex flex-wrap items-center justify-between gap-4">
              <ShareLinks title={article.title} />
              {article.tags && article.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <span key={t} className="chip">
                      #{t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </Container>
        </section>
      </article>

      {/* Prev / Next */}
      <section className="bg-paper-soft border-y border-border">
        <Container>
          <div className="py-8 grid md:grid-cols-2 gap-6">
            {prev ? (
              <Link
                to={`/news/${prev.slug}`}
                className="group border border-border rounded p-5 bg-paper hover:border-ink"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  Previous article
                </span>
                <div className="mt-2 text-sm font-semibold text-ink group-hover:text-brand-green-dark">
                  {prev.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                to={`/news/${next.slug}`}
                className="group border border-border rounded p-5 bg-paper hover:border-ink md:text-right"
              >
                <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
                  Next article
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <div className="mt-2 text-sm font-semibold text-ink group-hover:text-brand-green-dark">
                  {next.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="section bg-paper">
          <Container>
            <h2 className="mb-8">Related articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
}
