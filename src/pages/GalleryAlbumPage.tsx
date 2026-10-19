import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Lightbox } from "@/components/gallery/Lightbox";
import { findAlbum } from "@/data/gallery";
import { useSeo } from "@/lib/useSeo";
import { NotFoundPage } from "./NotFoundPage";

export function GalleryAlbumPage() {
  const { slug } = useParams<{ slug: string }>();
  const album = slug ? findAlbum(slug) : undefined;
  useSeo({
    title: album?.title ?? "Album",
    path: `/gallery/${slug ?? ""}`,
    description: album?.description,
  });

  const [index, setIndex] = useState<number | null>(null);

  if (!album) return <NotFoundPage />;

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Gallery", to: "/gallery" },
          { label: album.title },
        ]}
      />
      <section className="section bg-paper">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-5 mb-8">
            <div>
              <div className="eyebrow mb-2">
                Album{album.date ? ` · ${album.date}` : ""}
              </div>
              <h1>{album.title}</h1>
              <p className="mt-3 max-w-2xl text-text-muted">
                {album.description}
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-green-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to gallery
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {album.images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className="block overflow-hidden rounded relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                aria-label={`Open image ${i + 1}: ${img.alt}`}
              >
                <ImageWithFallback
                  src={img.src}
                  alt={img.alt}
                  aspect="1/1"
                  className="hover:scale-[1.02] transition-transform"
                />
              </button>
            ))}
          </div>
        </Container>
      </section>

      <Lightbox
        images={album.images}
        index={index}
        onClose={() => setIndex(null)}
        onChange={setIndex}
      />
    </>
  );
}
