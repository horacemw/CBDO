import type { Project } from "@/types/content";
import { images } from "./images";

export const projects: Project[] = [
  {
    slug: "community-rights-education",
    title: "Community Rights Education Programme",
    summary:
      "A rolling programme of community dialogues and rights-awareness sessions supporting member CBOs across several districts.",
    category: "civic-education",
    status: "ongoing",
    heroImage: images.projects.civicEducation,
    gallery: [
      images.gallery.workshop1,
      images.gallery.dialogue1,
      images.gallery.training1,
    ],
    objectives: [
      "Raise awareness of fundamental rights and responsibilities",
      "Equip community facilitators to lead rights conversations",
      "Document community-level rights concerns and refer where needed",
    ],
    background:
      "Member organisations have identified a consistent demand for accessible, locally-led rights education. This programme provides a shared curriculum, facilitation materials and peer support.",
    activities: [
      "Facilitator training-of-trainers sessions",
      "Village-level rights dialogues",
      "Community listening posts and referral support",
      "Reflection meetings between participating CBOs",
    ],
    focusAreas: ["human-rights", "civic-participation", "community-empowerment"],
    featured: true,
    isDemonstration: true,
  },
  {
    slug: "paralegal-support-network",
    title: "Community Paralegal Support Network",
    summary:
      "A network of trained community paralegals providing first-line legal information and referrals in underserved areas.",
    category: "human-rights",
    status: "ongoing",
    heroImage: images.projects.paralegal,
    gallery: [images.gallery.workshop2, images.gallery.dialogue2],
    objectives: [
      "Improve access to basic legal information at community level",
      "Strengthen referral links between CBOs and formal legal services",
      "Build a sustained community paralegal practice",
    ],
    background:
      "In many areas, formal legal services are distant and unaffordable. Community paralegals help bridge this gap for routine legal needs and referrals.",
    activities: [
      "Paralegal training workshops",
      "Mobile legal information clinics",
      "Referral partnerships with legal aid providers",
    ],
    focusAreas: ["human-rights", "civic-participation"],
    featured: true,
    isDemonstration: true,
  },
  {
    slug: "youth-leadership-governance",
    title: "Youth Leadership for Good Governance",
    summary:
      "Supporting young community leaders to engage meaningfully in local decision-making processes.",
    category: "good-governance",
    status: "ongoing",
    heroImage: images.projects.youthLeadership,
    gallery: [images.gallery.training2, images.gallery.march1],
    objectives: [
      "Build youth capacity to engage with local governance structures",
      "Create space for intergenerational dialogue",
      "Promote inclusive youth participation in planning processes",
    ],
    background:
      "Young people make up a majority of the population but are often absent from the forums where decisions are made. This programme supports youth as active participants, not just beneficiaries.",
    activities: [
      "Civic leadership workshops with young facilitators",
      "Mentorship and coaching",
      "Youth-led community dialogues",
    ],
    focusAreas: ["good-governance", "civic-participation"],
    featured: true,
    isDemonstration: true,
  },
  {
    slug: "women-rights-advocacy",
    title: "Women's Rights Advocacy Initiative",
    summary:
      "Collective advocacy and awareness-raising on women's rights in partnership with women-led member organisations.",
    category: "human-rights",
    status: "ongoing",
    heroImage: images.projects.womenRights,
    objectives: [
      "Strengthen women-led CBO voices in coalition advocacy",
      "Raise awareness of women's rights at community level",
      "Document and respond to community-reported concerns",
    ],
    background:
      "Women-led CBOs are important drivers of change in their communities. The initiative supports their collective advocacy and visibility.",
    activities: [
      "Joint public awareness campaigns",
      "Policy engagement on women's rights",
      "Peer learning across member organisations",
    ],
    focusAreas: ["human-rights", "inclusive-development"],
    isDemonstration: true,
  },
  {
    slug: "citizen-budget-monitoring",
    title: "Citizen Budget Monitoring Initiative",
    summary:
      "Supporting communities to track local public spending and engage constructively with duty-bearers.",
    category: "good-governance",
    status: "ongoing",
    heroImage: images.projects.budgetMonitoring,
    objectives: [
      "Build community capacity to understand local budgets",
      "Facilitate dialogue between communities and local authorities",
      "Promote transparent and responsive public spending",
    ],
    background:
      "Local budgets touch every corner of community life. The initiative demystifies budget processes and supports constructive citizen engagement.",
    activities: [
      "Budget literacy workshops",
      "Simplified community budget briefs",
      "Community accountability meetings",
    ],
    focusAreas: ["good-governance", "transparency-accountability"],
    featured: true,
    isDemonstration: true,
  },
  {
    slug: "disability-inclusion-dialogues",
    title: "Disability Inclusion Dialogues",
    summary:
      "Working with disability-focused CBOs to make community services and spaces more inclusive.",
    category: "inclusive-development",
    status: "upcoming",
    heroImage: images.projects.disabilityInclusion,
    objectives: [
      "Raise awareness of disability rights and inclusion",
      "Identify practical barriers in community services",
      "Co-design solutions with disability-focused members",
    ],
    background:
      "People with disabilities continue to face avoidable barriers across many community spaces. This initiative places disability-focused members at the centre of coalition work.",
    activities: [
      "Inclusive community audits",
      "Capacity-building with disability-focused CBOs",
      "Joint statements and advocacy",
    ],
    focusAreas: ["inclusive-development", "human-rights"],
    isDemonstration: true,
  },
];

export const findProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const projectCategoryLabel: Record<
  Project["category"] | "all",
  string
> = {
  all: "All projects",
  "human-rights": "Human rights",
  "good-governance": "Good governance",
  "civic-education": "Civic education",
  "community-empowerment": "Community empowerment",
  "research-advocacy": "Research & advocacy",
  "inclusive-development": "Inclusive development",
};

export const projectStatusLabel: Record<Project["status"], string> = {
  ongoing: "Ongoing",
  upcoming: "Upcoming",
  completed: "Completed",
  proposed: "Proposed",
};
