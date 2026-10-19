import type { TeamMember } from "@/types/content";

// NOTE: The coalition's leadership and staff list has not yet been
// supplied for this website. The entries below are generic placeholders
// clearly marked as such, so that the Team page shows the correct
// structure without inventing real people. Replace with verified
// profiles before publication.

export const teamMembers: TeamMember[] = [
  {
    slug: "coalition-leadership",
    name: "Coalition Leadership",
    role: "National Executive — profile to be confirmed",
    bio: "A short biography for the Executive lead will appear here once CBDOS has supplied verified profile text.",
    focusAreas: ["Strategy", "External representation"],
    isPlaceholder: true,
  },
  {
    slug: "programmes-coordinator",
    name: "Programmes Coordinator",
    role: "Programmes — profile to be confirmed",
    bio: "A short biography will appear here once CBDOS has supplied verified profile text.",
    focusAreas: ["Programme design", "Member coordination"],
    isPlaceholder: true,
  },
  {
    slug: "advocacy-lead",
    name: "Advocacy & Policy Lead",
    role: "Advocacy — profile to be confirmed",
    bio: "A short biography will appear here once CBDOS has supplied verified profile text.",
    focusAreas: ["Policy engagement", "Research"],
    isPlaceholder: true,
  },
  {
    slug: "membership-liaison",
    name: "Membership Liaison",
    role: "Member support — profile to be confirmed",
    bio: "A short biography will appear here once CBDOS has supplied verified profile text.",
    focusAreas: ["Member support", "Capacity-building"],
    isPlaceholder: true,
  },
];
