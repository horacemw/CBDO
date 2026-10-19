import type { FocusArea } from "@/types/content";

export const focusAreas: FocusArea[] = [
  {
    id: "human-rights",
    slug: "human-rights",
    title: "Human Rights",
    shortTitle: "Human Rights",
    icon: "scale",
    tagline: "Advancing civil, political, economic, social and cultural rights.",
    overview:
      "CBDOS member organisations work to protect and advance human rights in communities across Malawi, with a particular focus on rights that affect everyday life — access to justice, equal protection under the law, and freedom from discrimination.",
    issue:
      "Many citizens, especially in rural areas, face barriers to understanding, claiming and defending their rights. Awareness is uneven, legal aid is limited and vulnerable groups are often left behind.",
    approaches: [
      "Rights-awareness sessions with community groups",
      "Paralegal support and referral networks",
      "Advocacy for inclusive legal and policy frameworks",
      "Documentation and reporting of rights concerns",
    ],
  },
  {
    id: "good-governance",
    slug: "good-governance",
    title: "Good Governance",
    shortTitle: "Good Governance",
    icon: "landmark",
    tagline: "Strengthening accountable, responsive and participatory institutions.",
    overview:
      "The coalition promotes governance practices that are participatory, responsive and accountable at both national and local levels, encouraging citizens to engage constructively with public institutions.",
    issue:
      "Decisions that affect communities are often made without meaningful public input. Information gaps, limited civic space and weak feedback loops reduce the quality of local service delivery.",
    approaches: [
      "Civic education on governance structures and roles",
      "Facilitating dialogue between communities and duty-bearers",
      "Supporting participation in local development planning",
      "Promoting responsive public service delivery",
    ],
  },
  {
    id: "transparency-accountability",
    slug: "transparency-accountability",
    title: "Transparency & Accountability",
    shortTitle: "Transparency",
    icon: "shield-check",
    tagline: "Tracking public resources and promoting integrity.",
    overview:
      "CBDOS members support citizen-led monitoring of public resources and services so that funds reach the people they were intended for.",
    issue:
      "Weak monitoring and limited access to information create space for the misuse of public resources, which disproportionately affects the poorest households.",
    approaches: [
      "Social accountability tools and community scorecards",
      "Budget tracking and public expenditure monitoring",
      "Promoting access to public information",
      "Collaboration with oversight institutions",
    ],
  },
  {
    id: "civic-participation",
    slug: "civic-participation",
    title: "Civic Participation",
    shortTitle: "Civic Participation",
    icon: "users-round",
    tagline: "Supporting active, informed and inclusive citizenship.",
    overview:
      "Participation is at the heart of coalition work. CBDOS supports communities to take part in the decisions that shape their lives, from local development committees to national policy processes.",
    issue:
      "Women, youth, persons with disabilities and marginalised groups are frequently under-represented in public life. Without their voices, policies miss key realities on the ground.",
    approaches: [
      "Community dialogues on public issues",
      "Supporting inclusive representation in local forums",
      "Civic education campaigns",
      "Capacity-building for grassroots leaders",
    ],
  },
  {
    id: "community-empowerment",
    slug: "community-empowerment",
    title: "Community Empowerment",
    shortTitle: "Empowerment",
    icon: "hand-heart",
    tagline: "Equipping communities to lead their own development.",
    overview:
      "The coalition strengthens the capacity of community-based organisations themselves — because sustained change happens when community actors are organised, informed and resourced.",
    issue:
      "Many CBOs operate with limited resources, information and institutional support, which constrains the impact they can have for their members.",
    approaches: [
      "Capacity-strengthening for member organisations",
      "Peer learning and shared tools",
      "Networking and joint programming",
      "Mentorship for emerging community leaders",
    ],
  },
  {
    id: "inclusive-development",
    slug: "inclusive-development",
    title: "Inclusive Development",
    shortTitle: "Inclusive Development",
    icon: "sprout",
    tagline: "Development that reaches those most often left behind.",
    overview:
      "CBDOS promotes a vision of development in which women, youth, persons with disabilities and marginalised groups are active participants, not passive recipients.",
    issue:
      "Without a deliberate inclusion lens, well-meaning programmes can reinforce existing inequalities.",
    approaches: [
      "Mainstreaming gender and disability inclusion",
      "Supporting livelihoods for marginalised groups",
      "Advocating for inclusive public services",
      "Collecting disaggregated community evidence",
    ],
  },
];

export const findFocusArea = (slug: string) =>
  focusAreas.find((f) => f.slug === slug);
