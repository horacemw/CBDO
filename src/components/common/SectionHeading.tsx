import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <div className="eyebrow mb-3">{eyebrow}</div> : null}
      <Tag className="text-balance">{title}</Tag>
      {description ? (
        <p className="mt-4 text-lg text-text-muted text-pretty">{description}</p>
      ) : null}
    </div>
  );
}
