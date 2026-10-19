import { useParams, Link } from "react-router-dom";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ShareLinks } from "@/components/common/ShareLinks";
import {
  findReport,
  reportCategoryLabel,
  reports,
} from "@/data/reports";
import { useSeo } from "@/lib/useSeo";
import { formatDate } from "@/lib/format";
import { NotFoundPage } from "./NotFoundPage";

export function ReportDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const report = slug ? findReport(slug) : undefined;
  useSeo({
    title: report?.title ?? "Report",
    path: `/reports/${slug ?? ""}`,
    description: report?.summary,
    image: report?.coverImage,
    type: "article",
  });
  if (!report) return <NotFoundPage />;

  const related = reports
    .filter((r) => r.slug !== report.slug && r.category === report.category)
    .slice(0, 3);
  const available = report.availability === "available" && report.fileUrl;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Reports", to: "/reports" },
          { label: report.title },
        ]}
      />

      <section className="section bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="rounded border border-border overflow-hidden shadow-card">
                <ImageWithFallback
                  src={report.coverImage}
                  alt={`${report.title} — cover`}
                  aspect="3/4"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 text-xs mb-4">
                <span className="chip-green inline-flex items-center gap-1">
                  <FileText className="h-3 w-3" aria-hidden="true" />
                  {reportCategoryLabel[report.category]}
                </span>
                {report.year ? <span className="chip">{report.year}</span> : null}
              </div>
              <h1 className="text-balance">{report.title}</h1>
              <p className="mt-4 text-lg text-text-muted">{report.summary}</p>

              <dl className="mt-7 grid grid-cols-2 md:grid-cols-3 gap-5 text-sm">
                {report.publishedAt ? (
                  <div>
                    <dt className="text-text-subtle text-[11px] uppercase tracking-wider">
                      Published
                    </dt>
                    <dd className="mt-1 text-ink">
                      {formatDate(report.publishedAt)}
                    </dd>
                  </div>
                ) : null}
                {report.pages ? (
                  <div>
                    <dt className="text-text-subtle text-[11px] uppercase tracking-wider">
                      Length
                    </dt>
                    <dd className="mt-1 text-ink">{report.pages} pages</dd>
                  </div>
                ) : null}
                {report.fileFormat ? (
                  <div>
                    <dt className="text-text-subtle text-[11px] uppercase tracking-wider">
                      Format
                    </dt>
                    <dd className="mt-1 text-ink">
                      {report.fileFormat}
                      {report.fileSize ? ` · ${report.fileSize}` : ""}
                    </dd>
                  </div>
                ) : null}
              </dl>

              {available ? (
                <div className="mt-8">
                  <a href={report.fileUrl} download className="btn-primary">
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download {report.fileFormat ?? "PDF"}
                  </a>
                </div>
              ) : null}

              <div className="mt-10 border-t border-border pt-6">
                <ShareLinks title={report.title} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="section bg-paper-soft border-t border-border">
          <Container>
            <div className="flex items-end justify-between gap-5 mb-8">
              <h2>Related publications</h2>
              <Link
                to="/reports"
                className="btn-ghost text-sm"
              >
                All publications
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="divide-y divide-border border-y border-border">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    to={`/reports/${r.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4"
                  >
                    <span className="chip-green">
                      {reportCategoryLabel[r.category]}
                    </span>
                    <span className="text-ink font-medium group-hover:text-brand-green-dark">
                      {r.title}
                    </span>
                    <span className="text-xs text-text-muted">
                      {r.year ?? ""}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
