import { useMemo, useState } from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ReportCard } from "@/components/common/ReportCard";
import { SearchInput } from "@/components/common/SearchInput";
import { EmptyState } from "@/components/common/EmptyState";
import { reports, reportCategoryLabel } from "@/data/reports";
import { useSeo } from "@/lib/useSeo";
import type { Report } from "@/types/content";

type CategoryKey = "all" | Report["category"];
type YearKey = "all" | number;

export function ReportsPage() {
  useSeo({
    title: "Reports & Publications",
    path: "/reports",
    description:
      "Reports, policy briefs, statements, training materials and guides produced or shared by CBDOS.",
  });

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryKey>("all");
  const [year, setYear] = useState<YearKey>("all");

  const years = useMemo(() => {
    const set = new Set<number>();
    reports.forEach((r) => r.year && set.add(r.year));
    return Array.from(set).sort((a, b) => b - a);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return reports.filter((r) => {
      if (category !== "all" && r.category !== category) return false;
      if (year !== "all" && r.year !== year) return false;
      if (!q) return true;
      return (
        r.title.toLowerCase().includes(q) ||
        r.summary.toLowerCase().includes(q)
      );
    });
  }, [query, category, year]);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Reports & Publications" }]}
      />
      <PageHero
        eyebrow="Reports & publications"
        title="Publications, briefs and shared resources."
        description="Publications, briefs, statements, training materials and shared resources from the coalition."
      />

      <section className="section bg-paper">
        <Container>
          <div className="grid md:grid-cols-12 gap-4 mb-8">
            <div className="md:col-span-5">
              <SearchInput
                value={query}
                onValueChange={setQuery}
                placeholder="Search publications…"
                label="Search publications"
              />
            </div>
            <div className="md:col-span-4">
              <label htmlFor="repcat" className="sr-only">
                Category
              </label>
              <select
                id="repcat"
                className="input-base appearance-none bg-paper"
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryKey)}
              >
                <option value="all">{reportCategoryLabel.all}</option>
                <option value="annual-report">
                  {reportCategoryLabel["annual-report"]}
                </option>
                <option value="research">
                  {reportCategoryLabel.research}
                </option>
                <option value="policy-brief">
                  {reportCategoryLabel["policy-brief"]}
                </option>
                <option value="statement">
                  {reportCategoryLabel.statement}
                </option>
                <option value="training">
                  {reportCategoryLabel.training}
                </option>
                <option value="guide">{reportCategoryLabel.guide}</option>
              </select>
            </div>
            <div className="md:col-span-3">
              <label htmlFor="repyear" className="sr-only">
                Year
              </label>
              <select
                id="repyear"
                className="input-base appearance-none bg-paper"
                value={String(year)}
                onChange={(e) =>
                  setYear(
                    e.target.value === "all"
                      ? "all"
                      : Number(e.target.value),
                  )
                }
              >
                <option value="all">All years</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              title="No publications match these filters"
              description="Try different search terms or clear the filters."
            />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((r) => (
                <ReportCard key={r.slug} report={r} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
