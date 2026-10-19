import { Routes, Route } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { FocusAreasPage } from "@/pages/FocusAreasPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { NewsPage } from "@/pages/NewsPage";
import { ArticleDetailPage } from "@/pages/ArticleDetailPage";
import { ReportsPage } from "@/pages/ReportsPage";
import { ReportDetailPage } from "@/pages/ReportDetailPage";
import { EventsPage } from "@/pages/EventsPage";
import { EventDetailPage } from "@/pages/EventDetailPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { GalleryAlbumPage } from "@/pages/GalleryAlbumPage";
import { TeamPage } from "@/pages/TeamPage";
import { PartnersPage } from "@/pages/PartnersPage";
import { GetInvolvedPage } from "@/pages/GetInvolvedPage";
import { ContactPage } from "@/pages/ContactPage";
import { SearchPage } from "@/pages/SearchPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { AccessibilityPage } from "@/pages/AccessibilityPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export function App() {
  return (
    <>
      <ScrollToTop />
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/focus-areas" element={<FocusAreasPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<ArticleDetailPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reports/:slug" element={<ReportDetailPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:slug" element={<GalleryAlbumPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/get-involved" element={<GetInvolvedPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </>
  );
}
