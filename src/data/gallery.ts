import type { GalleryAlbum } from "@/types/content";
import { images } from "./images";

export const galleryAlbums: GalleryAlbum[] = [
  {
    slug: "mchinji-clean-cookstove-rollout",
    title: "Mchinji clean cookstove rollout",
    description:
      "Images from the clean cookstove rollout in Mchinji — from the arrival of the first consignment and the Cookstove Distribution Assistants' induction, through to community engagement across member CBOs.",
    date: "2026",
    coverImage: images.news.tidzukeArrival,
    images: [
      {
        src: images.news.tidzukeArrival,
        alt: "iRise Carbon container trailer carrying the first consignment of clean cookstoves arriving in Mchinji",
        caption:
          "The iRise Carbon consignment arrives at the Tidzuke Women Organisation bulk drop-off point in Mchinji.",
      },
      {
        src: images.news.mchinjiDelivery1,
        alt: "First consignment of clean cookstoves stacked inside a storage hall in Mchinji",
        caption:
          "Fuel-efficient cookstoves secured at the bulk drop-off centre, ready for last-mile distribution.",
      },
      {
        src: images.news.tidzukeDropoff,
        alt: "Rows of fuel-efficient cookstoves lined up on the floor of a drop-off hall in Mchinji",
        caption:
          "Cookstoves lined up at the drop-off point ahead of last-mile distribution.",
      },
      {
        src: images.news.mchinjiCookstove1,
        alt: "Cookstove Distribution Assistants in Mchinji learning to use iVerify data collection on provided smartphones",
        caption:
          "Cookstove Distribution Assistants training on the iVerify digital data-collection workflow.",
      },
      {
        src: images.news.mchinjiCookstove2,
        alt: "Participants seated in a classroom in Mchinji taking notes during the clean cookstove distribution training",
        caption:
          "Training participants during an induction session at a community venue in Mchinji.",
      },
      {
        src: images.news.mchinjiCookstove3,
        alt: "Full cohort of CBO members and Cookstove Distribution Assistants in Mchinji during a group training session",
        caption:
          "The full cohort of CBO members and Cookstove Distribution Assistants during induction training.",
      },
      {
        src: images.news.mchinjiDelivery2,
        alt: "CBO team and distribution assistants at the Chimteka Children Support centre, planning the next phase of the rollout",
        caption:
          "Planning the next phase of the rollout at the Chimteka Children Support centre.",
      },
    ],
  },
  {
    slug: "coalition-gatherings",
    title: "Coalition gatherings & meetings",
    description:
      "Images from coalition gatherings and member meetings across the districts, including the Tidzuke Women and Orphan Care Moyo Centre and planning meetings in Mchinji and Dowa.",
    date: "2026",
    coverImage: images.gallery.tidzukeGathering1,
    images: [
      {
        src: images.gallery.coalitionTeam,
        alt: "Members of the CBOs Coalition for Human Rights and Good Governance in a group portrait",
        caption:
          "Members of the CBOs Coalition for Human Rights and Good Governance.",
      },
      {
        src: images.gallery.tidzukeGathering1,
        alt: "Large group of community members and CBO representatives in front of the Tidzuke Women and Orphan Care Moyo Centre",
        caption:
          "Community members and CBO representatives at the Tidzuke Women and Orphan Care Moyo Centre.",
      },
      {
        src: images.gallery.tidzukeGathering2,
        alt: "CBO members and Cookstove Distribution Assistants gathered outside a community centre during a planning meeting",
        caption:
          "CBO members and distribution assistants during a planning meeting at a member CBO centre.",
      },
    ],
  },
];

export const findAlbum = (slug: string) =>
  galleryAlbums.find((a) => a.slug === slug);
