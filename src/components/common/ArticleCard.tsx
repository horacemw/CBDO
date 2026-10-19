import { Link } from "react-router-dom";
import type { Article } from "@/types/content";
import { articleCategoryLabel } from "@/data/news";
import { formatDate } from "@/lib/format";
import { ImageWithFallback } from "./ImageWithFallback";

interface Props {
  article: Article;
  variant?: "default" | "compact";
}

export function ArticleCard({ article, variant = "default" }: Props) {
  if (variant === "compact") {
    return (
      <article className="group grid grid-cols-[112px_1fr] gap-4">
        <Link
          to={`/news/${article.slug}`}
          className="block overflow-hidden rounded"
        >
          <ImageWithFallback
            src={article.heroImage}
            alt=""
            aspect="1/1"
            className="group-hover:scale-[1.02] transition-transform"
          />
        </Link>
        <div className="min-w-0">
          <div className="text-xs text-text-muted">
            {formatDate(article.publishedAt)}
          </div>
          <h3 className="mt-1 text-sm font-semibold leading-snug">
            <Link
              to={`/news/${article.slug}`}
              className="hover:text-brand-green-dark line-clamp-3"
            >
              {article.title}
            </Link>
          </h3>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-paper border border-border hover:border-ink rounded transition-colors overflow-hidden">
      <Link to={`/news/${article.slug}`} className="block">
        <ImageWithFallback src={article.heroImage} alt="" aspect="16/9" />
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-text-muted">
          <span className="font-semibold uppercase tracking-wider text-brand-green-dark">
            {articleCategoryLabel[article.category]}
          </span>
          <span aria-hidden="true">·</span>
          <time dateTime={article.publishedAt}>
            {formatDate(article.publishedAt)}
          </time>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug">
          <Link
            to={`/news/${article.slug}`}
            className="hover:text-brand-green-dark"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>
    </article>
  );
}
