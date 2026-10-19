import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  width = "default",
  ...rest
}: ContainerProps) {
  const widthClass =
    width === "narrow"
      ? "max-w-4xl"
      : width === "wide"
        ? "max-w-[1360px]"
        : "max-w-[1200px]";
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthClass, className)}
      {...rest}
    >
      {children}
    </div>
  );
}
