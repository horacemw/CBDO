import { useState, type ImgHTMLAttributes } from "react";
import { fallbackImage } from "@/data/images";
import { cn } from "@/lib/cn";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  aspect?: "16/9" | "4/3" | "3/2" | "1/1" | "3/4" | "21/9";
}

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
};

export function ImageWithFallback({
  src,
  alt,
  className,
  aspect,
  loading = "lazy",
  decoding = "async",
  ...rest
}: Props) {
  const [current, setCurrent] = useState(src || fallbackImage);
  const [errored, setErrored] = useState(false);

  const img = (
    <img
      src={current}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={() => {
        if (!errored) {
          setErrored(true);
          setCurrent(fallbackImage);
        }
      }}
      className={cn(
        "block h-full w-full object-cover bg-paper-sunk",
        !aspect && className,
      )}
      {...rest}
    />
  );
  if (aspect) {
    return (
      <div className={cn("overflow-hidden", aspectClass[aspect], className)}>
        {img}
      </div>
    );
  }
  return img;
}
