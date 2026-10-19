import type { Report } from "@/types/content";
import { images } from "./images";

export const reports: Report[] = [
  {
    slug: "annual-report-overview",
    title: "Coalition Annual Report — Overview Edition",
    summary:
      "A short overview edition summarising coalition activity, learning and priorities. Full publication to be uploaded by CBDOS.",
    category: "annual-report",
    year: 2025,
    coverImage: images.reports.annualCover,
    availability: "pending-upload",
    featured: true,
    isDemonstration: true,
  },
  {
    slug: "citizen-friendly-budget-brief",
    title: "Citizen-friendly Budget Brief",
    summary:
      "Plain-language brief distilling priority public allocations for community-level dialogue.",
    category: "policy-brief",
    publishedAt: "2026-09-22",
    year: 2026,
    coverImage: images.reports.briefCover,
    availability: "pending-upload",
    featured: true,
    isDemonstration: true,
  },
  {
    slug: "rights-education-facilitators-guide",
    title: "Rights Education — Facilitator's Guide",
    summary:
      "Practical guide used by trained facilitators to support community rights-awareness sessions.",
    category: "guide",
    year: 2026,
    coverImage: images.reports.guideCover,
    availability: "pending-upload",
    isDemonstration: true,
  },
  {
    slug: "statement-on-inclusive-services",
    title: "Statement on Inclusive Community Services",
    summary:
      "Coalition statement reaffirming the importance of accessible, inclusive community services.",
    category: "statement",
    publishedAt: "2026-08-18",
    year: 2026,
    coverImage: images.reports.statementCover,
    availability: "pending-upload",
    isDemonstration: true,
  },
  {
    slug: "learning-paper-youth-leadership",
    title: "Learning Paper — Youth Leadership for Governance",
    summary:
      "Short learning paper summarising reflections from the youth leadership for good governance initiative.",
    category: "research",
    year: 2026,
    coverImage: images.reports.researchCover,
    availability: "pending-upload",
    isDemonstration: true,
  },
  {
    slug: "training-outline-paralegal-support",
    title: "Training Outline — Community Paralegal Support",
    summary:
      "Training outline used in community paralegal orientation sessions.",
    category: "training",
    year: 2026,
    coverImage: images.reports.policyCover,
    availability: "pending-upload",
    isDemonstration: true,
  },
];

export const findReport = (slug: string) =>
  reports.find((r) => r.slug === slug);

export const reportCategoryLabel: Record<Report["category"] | "all", string> = {
  all: "All publications",
  "annual-report": "Annual reports",
  research: "Research",
  "policy-brief": "Policy briefs",
  statement: "Public statements",
  training: "Training materials",
  guide: "Guides & resources",
};
