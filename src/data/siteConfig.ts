import { asset } from "@/lib/asset";

export interface SocialLink {
  label: string;
  url: string;
  icon: "facebook" | "twitter" | "linkedin" | "youtube" | "instagram";
}

export interface SiteContact {
  publicEmail?: string;
  phone?: string;
  phoneAlt?: string;
  address?: string;
  officeHours?: string;
}

export const siteConfig = {
  name: "CBDOS",
  shortName: "CBDOS",
  longName: "Community-Based Organisations Coalition for Human Rights and Good Governance",
  tagline: "Stronger Communities · Just Society · Good Governance",
  description:
    "Bringing community-based organisations together to promote human rights, accountability and inclusive development in Malawi.",
  siteUrl: "https://cbd.digiskills.live",
  country: "Malawi",
  // Official CBOs-CHRGG logo (raster, white background).
  // Use `logoLight` on light surfaces; on dark surfaces wrap it in a
  // white panel (see Footer).
  logoLight: asset("/images/brand/cbo-chrgg-logo.png"),
  logoMark: asset("/images/brand/cbdos-mark.svg"),
  defaultOgImage: asset("/images/og/og-default.jpg"),

  contact: {
    publicEmail: "coalitioncbos2018@gmail.com",
    phone: "+265 996 01 96 34",
    phoneAlt: "+265 882 56 81 34",
    address: undefined,
    officeHours: undefined,
  } satisfies SiteContact,

  socials: [] as SocialLink[],

  developer: {
    name: "DigiSkills Africa",
    website: "https://digiskills.live",
    contactEmail: "info@digiskillsafrica.com",
    logo: asset("/images/brand/digiskills-logo.svg"),
  },
} as const;

export const nav = {
  primary: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Focus Areas", to: "/focus-areas" },
    { label: "Projects", to: "/projects" },
    { label: "News", to: "/news" },
    { label: "Reports", to: "/reports" },
    { label: "Events", to: "/events" },
    { label: "Gallery", to: "/gallery" },
    { label: "Team", to: "/team" },
    { label: "Partners", to: "/partners" },
    { label: "Contact", to: "/contact" },
  ],
  footer: {
    organisation: [
      { label: "About CBDOS", to: "/about" },
      { label: "Focus Areas", to: "/focus-areas" },
      { label: "Team & Leadership", to: "/team" },
      { label: "Partners & Membership", to: "/partners" },
    ],
    engage: [
      { label: "Projects", to: "/projects" },
      { label: "News & Blog", to: "/news" },
      { label: "Events", to: "/events" },
      { label: "Gallery", to: "/gallery" },
    ],
    resources: [
      { label: "Reports & Publications", to: "/reports" },
      { label: "Get Involved", to: "/get-involved" },
      { label: "Contact", to: "/contact" },
      { label: "Search", to: "/search" },
    ],
    legal: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Accessibility Statement", to: "/accessibility" },
    ],
  },
} as const;
