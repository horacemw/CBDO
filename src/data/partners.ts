import type { Partner } from "@/types/content";

// NOTE: CBDOS has not yet supplied the final list of member organisations
// and verified partners. The entries below describe the partnership
// categories the website is designed to display. They are not real
// endorsements and must be replaced before launch.

export const partners: Partner[] = [
  {
    slug: "member-cbos",
    name: "Member CBOs",
    description:
      "Community-based organisations that participate in CBDOS coalition activities. The verified list will be added once confirmed by the Secretariat.",
    category: "member",
    isPlaceholder: true,
  },
  {
    slug: "civil-society-networks",
    name: "Civil society networks",
    description:
      "Networks of civil-society organisations the coalition collaborates with on shared issues.",
    category: "network",
    isPlaceholder: true,
  },
  {
    slug: "government-institutions",
    name: "Government institutions",
    description:
      "Public institutions the coalition engages with on policy and service delivery, as part of its advocacy work.",
    category: "government",
    isPlaceholder: true,
  },
  {
    slug: "funders-and-supporters",
    name: "Funders & supporters",
    description:
      "Organisations that have supported coalition activity. The verified list will appear once confirmed.",
    category: "funder",
    isPlaceholder: true,
  },
  {
    slug: "international-partners",
    name: "International partners",
    description:
      "International civil-society and solidarity partners of the coalition.",
    category: "international",
    isPlaceholder: true,
  },
];

export const partnerCategoryLabel: Record<Partner["category"], string> = {
  member: "Member organisations",
  funder: "Funders & supporters",
  government: "Government",
  international: "International",
  network: "Civil-society networks",
};
