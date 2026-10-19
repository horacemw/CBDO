import { Link } from "react-router-dom";
import { ArrowRight, Images } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { galleryAlbums } from "@/data/gallery";
import { useSeo } from "@/lib/useSeo";

export function GalleryPage() {
  useSeo({
    title: "Photo Gallery",
    path: "/gallery",
    description:
      "Images from coalition dialogues, workshops and events across member organisations.",
  });

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <PageHero
        eyebrow="Photo gallery"
        title="Scenes from recent activities."
        description="Images from coalition dialogues, workshops, trainings and events across member organisations."
      />

      <section className="section bg-paper">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryAlbums.map((album) => (
              <article
                key={album.slug}
                className="group border border-border bg-paper rounded overflow-hidden hover:border-ink transition-colors"
              >
                <Link to={`/gallery/${album.slug}`} className="block">
                  <ImageWithFallback
                    src={album.coverImage}
                    alt={album.title}
                    aspect="4/3"
                  />
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <Images className="h-3.5 w-3.5" aria-hidden="true" />
                    {album.images.length} images
                    {album.date ? ` · ${album.date}` : ""}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">
                    <Link
                      to={`/gallery/${album.slug}`}
                      className="hover:text-brand-green-dark"
                    >
                      {album.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-text-muted leading-relaxed">
                    {album.description}
                  </p>
                  <Link
                    to={`/gallery/${album.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-green-dark"
                  >
                    Open album
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
