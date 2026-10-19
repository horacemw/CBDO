// Central image manifest. Local paths are routed through `asset()` so that
// they resolve correctly under Vite's base path (dev "/" vs GH Pages "/CBDO/").

import { asset } from "@/lib/asset";

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const images = {
  hero: {
    homeBanner: asset("/images/hero/home-banner.jpg"),
    communityDialogue: u("1517486808906-6ca8b3f04846", 1800),
    communityDialogueMobile: u("1517486808906-6ca8b3f04846", 900),
  },
  about: {
    communityMeeting: asset("/images/about/home-about-preview.jpg"),
    coalitionWork: u("1573497019940-1c28c88b4f3e", 1400),
  },
  focusAreas: {
    humanRights: u("1521791136064-7986c2920216", 1200),
    goodGovernance: u("1529107386315-e1a2ed48a620", 1200),
    transparency: u("1457369804613-52c61a468e7d", 1200),
    civic: u("1540910419892-4a36d2c3266c", 1200),
    empowerment: u("1593113598332-cd288d649433", 1200),
    inclusive: u("1545987796-200677ee1011", 1200),
  },
  projects: {
    civicEducation: u("1544531585-9847b68c8c86", 1400),
    paralegal: u("1521791136064-7986c2920216", 1400),
    youthLeadership: u("1544928147-ea3f759e4807", 1400),
    womenRights: u("1529333166437-7750a6dd5a70", 1400),
    budgetMonitoring: u("1554224155-6726b3ff858f", 1400),
    disabilityInclusion: u("1593113630400-ea4288922497", 1400),
  },
  news: {
    mchinjiCookstove1: asset("/images/news/mchinji-cookstove-1.jpg"),
    mchinjiCookstove2: asset("/images/news/mchinji-cookstove-2.jpg"),
    mchinjiCookstove3: asset("/images/news/mchinji-cookstove-3.jpg"),
    mchinjiDelivery1: asset("/images/news/mchinji-delivery-1.jpg"),
    mchinjiDelivery2: asset("/images/news/mchinji-delivery-2.jpg"),
    tidzukeArrival: asset("/images/news/tidzuke-shipment-arrival.jpg"),
    tidzukeDropoff: asset("/images/news/tidzuke-stoves-dropoff.jpg"),
    rightsDay: u("1521791055366-0d553872125f", 1400),
    budgetBrief: u("1554224155-6726b3ff858f", 1400),
    youthDialogue: u("1544928147-ea3f759e4807", 1400),
    coalitionStatement: u("1573164574511-73c773193279", 1400),
    communityWorkshop: u("1517486808906-6ca8b3f04846", 1400),
    disabilityAccess: u("1593113630400-ea4288922497", 1400),
  },
  gallery: {
    // Real CBDOS activity images
    tidzukeGathering1: asset("/images/gallery/tidzuke-centre-gathering-1.jpg"),
    tidzukeGathering2: asset("/images/gallery/tidzuke-centre-gathering-2.jpg"),
    coalitionTeam: asset("/images/hero/home-banner.jpg"),
    // Documentary placeholders retained for albums that have no real
    // photographs yet — safe to replace via this manifest.
    workshop1: u("1544531585-9847b68c8c86", 1200),
    workshop2: u("1573164574511-73c773193279", 1200),
    workshop3: u("1543269865-cbf427effbad", 1200),
    march1: u("1521791055366-0d553872125f", 1200),
    march2: u("1529107386315-e1a2ed48a620", 1200),
    march3: u("1517486808906-6ca8b3f04846", 1200),
    dialogue1: u("1540910419892-4a36d2c3266c", 1200),
    dialogue2: u("1573497019940-1c28c88b4f3e", 1200),
    dialogue3: u("1554224155-6726b3ff858f", 1200),
    training1: u("1544928147-ea3f759e4807", 1200),
    training2: u("1593113598332-cd288d649433", 1200),
    training3: u("1529333166437-7750a6dd5a70", 1200),
  },
  reports: {
    annualCover: u("1456513080510-7bf3a84b82f8", 900),
    policyCover: u("1457369804613-52c61a468e7d", 900),
    researchCover: u("1529107386315-e1a2ed48a620", 900),
    briefCover: u("1554224155-6726b3ff858f", 900),
    guideCover: u("1544531585-9847b68c8c86", 900),
    statementCover: u("1573164574511-73c773193279", 900),
  },
  events: {
    dialogue: u("1517486808906-6ca8b3f04846", 1400),
    training: u("1544928147-ea3f759e4807", 1400),
    conference: u("1540910419892-4a36d2c3266c", 1400),
    workshop: u("1544531585-9847b68c8c86", 1400),
  },
} as const;

export const fallbackImage =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'>
      <rect width='400' height='300' fill='#EFEFEC'/>
      <g fill='#B0B0AC' font-family='Poppins,Arial,sans-serif' text-anchor='middle'>
        <text x='200' y='150' font-size='18' font-weight='500'>Image unavailable</text>
        <text x='200' y='180' font-size='12'>Awaiting CBDOS asset</text>
      </g>
    </svg>`,
  );
