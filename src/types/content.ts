export type FocusAreaId =
  | "human-rights"
  | "good-governance"
  | "transparency-accountability"
  | "civic-participation"
  | "community-empowerment"
  | "inclusive-development";

export interface FocusArea {
  id: FocusAreaId;
  slug: string;
  title: string;
  shortTitle: string;
  icon:
    | "scale"
    | "landmark"
    | "shield-check"
    | "users-round"
    | "hand-heart"
    | "sprout";
  tagline: string;
  overview: string;
  issue: string;
  approaches: string[];
  relatedProjects?: string[];
}

export type ProjectStatus =
  | "ongoing"
  | "upcoming"
  | "completed"
  | "proposed";

export type ProjectCategory =
  | "human-rights"
  | "good-governance"
  | "civic-education"
  | "community-empowerment"
  | "research-advocacy"
  | "inclusive-development";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  startDate?: string;
  endDate?: string;
  location?: string;
  heroImage: string;
  gallery?: string[];
  objectives: string[];
  background: string;
  activities: string[];
  outcomes?: string[];
  partners?: string[];
  focusAreas: FocusAreaId[];
  featured?: boolean;
  isDemonstration?: boolean;
}

export type ArticleCategory =
  | "news"
  | "press-release"
  | "statement"
  | "blog"
  | "analysis";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: ArticleCategory;
  publishedAt: string;
  author?: string;
  readingMinutes?: number;
  heroImage: string;
  gallery?: { src: string; alt: string; caption?: string }[];
  location?: string;
  partners?: string[];
  tags?: string[];
  featured?: boolean;
  isDemonstration?: boolean;
}

export type ReportCategory =
  | "annual-report"
  | "research"
  | "policy-brief"
  | "statement"
  | "training"
  | "guide";

export interface Report {
  slug: string;
  title: string;
  summary: string;
  category: ReportCategory;
  publishedAt?: string;
  year?: number;
  fileUrl?: string;
  fileFormat?: "PDF" | "DOCX" | "XLSX";
  fileSize?: string;
  pages?: number;
  coverImage: string;
  authors?: string[];
  featured?: boolean;
  availability: "available" | "pending-upload" | "coming-soon";
  isDemonstration?: boolean;
}

export type EventStatus = "upcoming" | "past" | "recurring";

export interface SiteEvent {
  slug: string;
  title: string;
  summary: string;
  description: string;
  status: EventStatus;
  startDate: string;
  endDate?: string;
  venue?: string;
  location?: string;
  isOnline?: boolean;
  registrationUrl?: string;
  heroImage: string;
  relatedProjectSlug?: string;
  isDemonstration?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryAlbum {
  slug: string;
  title: string;
  description: string;
  date?: string;
  coverImage: string;
  images: GalleryImage[];
  isDemonstration?: boolean;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio?: string;
  focusAreas?: string[];
  photo?: string;
  isPlaceholder?: boolean;
}

export interface Partner {
  slug: string;
  name: string;
  description?: string;
  category: "member" | "funder" | "government" | "international" | "network";
  logo?: string;
  website?: string;
  isPlaceholder?: boolean;
}
