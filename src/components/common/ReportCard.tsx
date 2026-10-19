import { Link } from "react-router-dom";
import { FileText, Download, ArrowRight } from "lucide-react";
import type { Report } from "@/types/content";
import { reportCategoryLabel } from "@/data/reports";
import { ImageWithFallback } from "./ImageWithFallback";
import { formatDate } from "@/lib/format";

export function ReportCard({ report }: { report: Report }) {
  const available = report.availability === "available" && report.fileUrl;
  return (
    <article className="bg-paper border border-border hover:border-ink rounded transition-colors overflow-hidden flex flex-col">
      <Link
        to={`/reports/${report.slug}`}
        className="block relative"
        aria-label={report.title}
      >
        <ImageWithFallback
          src={report.coverImage}
          alt=""
          aspect="3/4"
          className="brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/0 to-ink/0" />
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 bg-paper/95 text-ink text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
            <FileText className="h-3 w-3" aria-hidden="true" />
            {reportCategoryLabel[report.category]}
          </span>
        </div>
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-semibold leading-snug">
          <Link
            to={`/reports/${report.slug}`}
            className="hover:text-brand-green-dark"
          >
            {report.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed line-clamp-3 flex-1">
          {report.summary}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
          <span>
            {report.publishedAt
              ? formatDate(report.publishedAt, { year: "numeric", month: "long" })
              : report.year
                ? report.year
                : ""}
          </span>
          {available ? (
            <a
              href={report.fileUrl}
              className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-brand-green-dark"
              download
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {report.fileFormat ?? "PDF"}
              {report.fileSize ? ` · ${report.fileSize}` : ""}
            </a>
          ) : (
            <Link
              to={`/reports/${report.slug}`}
              className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-brand-green-dark"
            >
              View details
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
