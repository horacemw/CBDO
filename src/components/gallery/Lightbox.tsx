import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types/content";

interface Props {
  images: GalleryImage[];
  index: number | null;
  onClose: () => void;
  onChange: (next: number) => void;
}

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const isOpen = index !== null;
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index! + 1) % images.length);
      if (e.key === "ArrowLeft")
        onChange((index! - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, index, images.length, onClose, onChange]);

  if (!isOpen) return null;
  const img = images[index!];

  return (
    <div
      className="fixed inset-0 z-[80] bg-ink/90 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={img.caption ?? img.alt}
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        className="absolute top-5 right-5 h-11 w-11 inline-flex items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20 text-paper"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Close image viewer"
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="absolute left-5 top-1/2 -translate-y-1/2 h-11 w-11 inline-flex items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20 text-paper"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index! - 1 + images.length) % images.length);
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        className="absolute right-5 top-1/2 -translate-y-1/2 h-11 w-11 inline-flex items-center justify-center rounded-full bg-paper/10 hover:bg-paper/20 text-paper"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index! + 1) % images.length);
        }}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>

      <figure
        className="max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-w-full max-h-[75vh] object-contain rounded"
        />
        {img.caption ? (
          <figcaption className="mt-4 text-center text-sm text-paper/80">
            {img.caption}
            <span className="block text-xs text-paper/50 mt-1">
              {index! + 1} / {images.length}
            </span>
          </figcaption>
        ) : (
          <figcaption className="mt-4 text-center text-xs text-paper/50">
            {index! + 1} / {images.length}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
