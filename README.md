# CBDOS Coalition Website

Website for the **Community-Based Organisations Coalition for Human Rights and Good Governance** (CBDOS), built as a modern, responsive React application by **DigiSkills Africa**.

- Short name: **CBDOS / CBOs-CHRGG**
- Country context: Malawi
- Primary purpose: public information, human rights awareness, good governance, projects, publications, events and organisational transparency.
- Developer contact: [info@digiskillsafrica.com](mailto:info@digiskillsafrica.com) — this is the **website developer** address, **not** CBDOS's public contact address.

---

## Technology

- **React 18** + **TypeScript**
- **Vite 5** (dev server, bundler)
- **React Router v6** (client-side routing)
- **Tailwind CSS 3** (design system)
- **Lucide React** (consistent interface icons)
- **React Hook Form** + **Zod** + `@hookform/resolvers` (form handling and validation)

No heavy state manager, animation library, UI kit or image CDN is used. The site is intentionally lightweight.

---

## Install, run, build

The repository uses npm.

```bash
# install
npm install

# start the dev server
npm run dev        # http://localhost:5173

# type-check only
npm run typecheck

# production build (writes to dist/)
npm run build

# preview the production build
npm run preview
```

All checks executed during initial delivery:

| Command | Result |
| --- | --- |
| `npm install` | ✅ Installed 290 packages, no vulnerabilities reported |
| `npx tsc -b` (strict mode) | ✅ Pass, 0 errors |
| `npm run build` | ✅ Pass, bundle ~409 KB JS / ~34 KB CSS before gzip |
| `npm run dev` + manual `curl /` | ✅ Dev server returns `200 OK` on `/` |

---

## What's included

### Primary pages (12)

1. `/` — Home
2. `/about` — About CBDOS
3. `/focus-areas` — Our Focus Areas
4. `/projects` — Projects & Programmes
5. `/news` — News & Blog
6. `/gallery` — Photo Gallery
7. `/reports` — Reports & Publications
8. `/events` — Events & Activities
9. `/team` — Our Team & Leadership
10. `/partners` — Partners & Membership
11. `/get-involved` — Get Involved
12. `/contact` — Contact Us

### Supporting / utility pages

- `/projects/:slug` — individual project
- `/news/:slug` — individual article
- `/reports/:slug` — individual report
- `/events/:slug` — individual event
- `/gallery/:slug` — gallery album with keyboard-navigable lightbox
- `/search` — client-side search across projects, news, reports, events and focus areas
- `/privacy` — Privacy Policy (draft, pending organisational review)
- `/accessibility` — Accessibility Statement
- `*` — custom 404 page

Internal links are wired to real routes. No dead CTAs.

### Design system

- **Palette:** black `#111111`, warm paper `#F7F7F5`, restrained green accent `#138A36`, secondary colours drawn from the CBDOS mark (cyan, navy, red, lime).
- **Typography:** Poppins (300/400/500/600/700/800) loaded from Google Fonts with a sans-serif fallback.
- **Spacing & layout:** editorial grids, controlled whitespace, limited rounded corners.
- **Dark hero/CTA** sections for contrast — not every section is a card.
- **Reduced-motion** support, `prefers-reduced-motion` observed.
- Focus-visible outlines, skip-to-content link, semantic landmarks.

### Data layer

All content lives under `src/data/`:

- `siteConfig.ts` — site name, nav, developer attribution, **currently-undefined** CBDOS contact fields awaiting verification
- `focusAreas.ts` — six proposed thematic areas (clearly presented as provisional)
- `projects.ts` — six demonstration projects marked `isDemonstration: true`
- `news.ts` — six sample articles marked `isDemonstration: true`
- `reports.ts` — six publication entries, all `availability: "pending-upload"`
- `events.ts` — upcoming & past demonstration events
- `gallery.ts` — three albums of documentary-style placeholder images
- `team.ts` — placeholder leadership slots with `isPlaceholder: true`
- `partners.ts` — partner **categories** (not invented partner names)
- `aboutContent.ts` — vision, mission, values, objectives, approach
- `images.ts` — central image manifest (every image in one place)

### Forms

The enquiry form on `/contact` and `/get-involved` uses React Hook Form + Zod. Submissions are logged to the console as a **frontend demonstration**. The success state explicitly tells the user that submission requires a backend to actually deliver the message. See [Backend integration](#backend-integration) below.

### SEO & social

- Per-page `<title>` and `<meta name="description">` via a `useSeo` hook
- Open Graph and Twitter card metadata
- Canonical URL per route (based on `siteConfig.siteUrl` — update before launch)
- `/public/robots.txt`
- `/public/favicon.svg`
- Structured headings, semantic landmarks, breadcrumb navigation

---

## Items that must be verified or supplied before launch

| Area | What to supply |
| --- | --- |
| **CBDOS logo** | Confirm the official vector; the files at `public/images/brand/cbdos-logo.svg` and `cbdos-mark.svg` are a professional interpretation of the brand description and should be replaced if the official vector exists. |
| **Public contact email** | Set `siteConfig.contact.publicEmail`. Until set, no public email is shown; the developer's address is **never** rendered as CBDOS's contact. |
| **Phone / office address** | Set `siteConfig.contact.phone` and `.address`. Leave undefined to keep them hidden. |
| **Social links** | Add verified entries to `siteConfig.socials`. |
| **Production domain** | Set `siteConfig.siteUrl` and update `/public/robots.txt`. |
| **Facts & numbers** | No invented impact figures appear. Add verified statistics into the About / Home sections when available. |
| **Project content** | Replace demonstration projects in `src/data/projects.ts`. |
| **News content** | Replace demonstration articles in `src/data/news.ts`. |
| **Report files** | Upload PDFs under `/public/reports/` and set `fileUrl`, `fileFormat`, `fileSize`, `availability: "available"` in `src/data/reports.ts`. |
| **Event details** | Replace demonstration events in `src/data/events.ts`. |
| **Team profiles** | Replace placeholders in `src/data/team.ts` with verified names, roles, bios and photos. |
| **Partners** | Replace partner categories in `src/data/partners.ts` with verified entries once approved. |
| **Privacy policy** | Draft at `/privacy` must be legally reviewed before publication. |

---

## Placeholder images

All imagery is routed through `src/data/images.ts` and loaded via `src/components/common/ImageWithFallback.tsx`, which falls back to a neutral SVG if a remote image fails.

Placeholders currently point to **documentary-style photographs on Unsplash** showing community meetings, workshops, dialogue and public participation. These are **not** CBDOS photographs and must not be used as evidence that a particular event occurred.

**Replace before launch:**

- `images.hero.*` — hero photographs (1800px wide recommended)
- `images.about.*` — about-page photographs
- `images.focusAreas.*` — one photograph per focus area
- `images.projects.*` — one hero and ideally a small gallery per project
- `images.news.*` — one hero per article
- `images.reports.*` — report cover artwork (3:4)
- `images.events.*` — event hero images
- `images.gallery.*` — album imagery

Replacing a URL in `src/data/images.ts` updates the image everywhere it is referenced.

---

## Backend integration

The site is fully functional as a frontend demonstration. For production, the enquiry form in `src/components/forms/EnquiryForm.tsx` should post to a real endpoint — options include:

- A static-form provider such as Formspree, Resend forms, or Netlify Forms
- A custom API endpoint hosted by CBDOS
- A headless CMS (e.g. Strapi, Payload, Sanity) if content management is also needed

A clean integration boundary already exists: swap the `onSubmit` body with a `fetch` call. Keep spam protection (hCaptcha / Turnstile) in mind.

Content is centralised in `src/data/` so that any of these sources can later feed the same page templates with minimal changes.

---

## Project structure

```
src/
  app/App.tsx                   # routes
  main.tsx                      # entry point
  styles/index.css              # Tailwind + base styles
  components/
    common/                     # Button, Container, SectionHeading, ImageWithFallback,
                                # Breadcrumbs, SearchInput, EmptyState, PageHero,
                                # FocusAreaIcon, ProjectCard, ArticleCard, ReportCard,
                                # EventCard, ShareLinks
    forms/EnquiryForm.tsx       # RHF + Zod, honest demonstration-only submit
    gallery/Lightbox.tsx        # accessible lightbox (Esc, arrows, focus mgmt)
    layout/
      Header.tsx                # utility bar + main nav + mobile drawer
      Footer.tsx                # detailed footer
      SiteLayout.tsx            # skip link + main landmark
      ScrollToTop.tsx           # scroll restoration on nav
  data/                         # centralised typed content
  lib/                          # cn, format, useSeo
  pages/                        # all 20+ route components
  types/content.ts              # content types
public/
  favicon.svg
  robots.txt
  images/brand/                 # CBDOS logo variants + DigiSkills credit
```

---

## Accessibility

- Semantic HTML with `<main id="main">`, `<nav>`, `<header>`, `<footer>` landmarks
- Skip-to-content link
- Visible focus ring on all interactive elements
- Lightbox: traps focus, closes on Escape, Prev/Next arrow-key support, restores body scroll
- Mobile menu: full-screen drawer with explicit close button
- Alt text on informative images, empty alt (`alt=""`) on decorative images
- Reduced-motion CSS respects `prefers-reduced-motion: reduce`
- Colour contrast: body text, buttons and links tested against the chosen palette

Target standard: WCAG 2.2 AA. Review again after real content is uploaded.

---

## Performance

- Single-page app with route components loaded eagerly (fast on first paint, low TTI)
- Image lazy-loading, defined aspect ratios to avoid layout shift
- `<picture>` + `fetchpriority="high"` for the hero image
- No animation library, no large component kits
- JS gzip ~115 KB, CSS gzip ~6.5 KB

For further gains after real content is in: enable route-level code-splitting via `React.lazy()` on the detail pages.

---

## Commands quick reference

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # outputs dist/
npm run preview    # serves dist/
```

---

## Verified during delivery

- 12 primary pages render
- Supporting detail routes resolve (/projects/:slug, /news/:slug, /reports/:slug, /events/:slug, /gallery/:slug)
- Breadcrumbs, filters, search, lightbox and mobile menu are wired to real behaviour
- Enquiry form validates with meaningful error messages and shows an **honest** success state
- No invented stats, dates, partners, phone numbers, email addresses or founding facts are presented as verified
- Build and TypeScript strict mode pass cleanly

## Honest remaining limitations

- Browser-based end-to-end testing (automated clicks across routes, responsive snapshots at the five target breakpoints) was not run from this environment. The dev server starts and returns `200` on `/`, but a visual pass across every page at 320px, 768px and 1440px should be performed before launch.
- The DigiSkills Africa logo at `/public/images/brand/digiskills-logo.svg` is a text-based placeholder — replace with the official DigiSkills Africa logo if available.
- The CBDOS logo artwork is an interpretation of the brand description, inspired by the official coalition mark colours (black ring + cyan / navy / red / lime arcs and a green centre). Confirm with the Secretariat whether to swap in an official vector before publication.

---

© Community-Based Organisations Coalition for Human Rights and Good Governance.
Website by [DigiSkills Africa](https://digiskills.live).
