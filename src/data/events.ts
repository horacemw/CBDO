import type { SiteEvent } from "@/types/content";
import { images } from "./images";

export const events: SiteEvent[] = [
  {
    slug: "community-rights-dialogue-series",
    title: "Community Rights Dialogue Series",
    summary:
      "A rolling series of district-level community dialogues organised by member CBOs.",
    description:
      "The series brings together community members, local leaders and member organisations for honest conversations about everyday rights concerns and locally relevant responses.",
    status: "upcoming",
    startDate: "2026-11-14",
    venue: "Member organisation venues — multiple districts",
    heroImage: images.events.dialogue,
    relatedProjectSlug: "community-rights-education",
    isDemonstration: true,
  },
  {
    slug: "youth-leadership-forum",
    title: "Youth Leadership Peer-Learning Forum",
    summary:
      "Peer-learning forum for young community leaders participating in the Youth Leadership for Good Governance initiative.",
    description:
      "A short peer-learning forum for youth participants to share experience of engaging with local governance processes.",
    status: "upcoming",
    startDate: "2026-12-05",
    endDate: "2026-12-06",
    venue: "Venue to be confirmed",
    heroImage: images.events.training,
    relatedProjectSlug: "youth-leadership-governance",
    isDemonstration: true,
  },
  {
    slug: "inclusive-services-roundtable",
    title: "Inclusive Services Roundtable",
    summary:
      "A roundtable with disability-focused member organisations and partners on inclusive community services.",
    description:
      "Participants will share early findings from the lightweight accessibility reviews and agree on practical, incremental improvements.",
    status: "upcoming",
    startDate: "2027-02-20",
    venue: "Venue to be confirmed",
    heroImage: images.events.conference,
    isDemonstration: true,
  },
  {
    slug: "coalition-annual-reflection",
    title: "Coalition Annual Reflection Meeting",
    summary:
      "Annual reflection meeting bringing together member organisations to review the year's learning.",
    description:
      "The annual reflection meeting is an opportunity for member organisations to share experience, review learning and shape the coalition's priorities for the coming period.",
    status: "past",
    startDate: "2026-03-08",
    venue: "Member organisation venue",
    heroImage: images.events.workshop,
    isDemonstration: true,
  },
  {
    slug: "paralegal-orientation-training",
    title: "Community Paralegal Orientation Training",
    summary:
      "Orientation training for a new cohort of community paralegals supported by member organisations.",
    description:
      "The orientation covered basic legal information, referral pathways and ethical practice for community paralegals.",
    status: "past",
    startDate: "2026-07-10",
    endDate: "2026-07-14",
    venue: "Member organisation training centre",
    heroImage: images.events.training,
    relatedProjectSlug: "paralegal-support-network",
    isDemonstration: true,
  },
];

export const findEvent = (slug: string) =>
  events.find((e) => e.slug === slug);
