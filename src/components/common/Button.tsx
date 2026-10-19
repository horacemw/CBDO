import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "dark" | "outline" | "ghost";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded transition-colors";

const variantClass: Record<Variant, string> = {
  primary: "bg-brand-green hover:bg-brand-green-dark text-paper",
  dark: "bg-ink hover:bg-ink-soft text-paper",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost: "text-ink hover:text-brand-green",
};

const sizeClass: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  sm: "px-3.5 py-2 text-sm",
};

interface SharedProps {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonProps = SharedProps & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    to: string;
    external?: boolean;
  };

export function Button({
  variant = "primary",
  size = "md",
  withArrow,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(base, variantClass[variant], sizeClass[size], className)}
      {...rest}
    >
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  withArrow,
  to,
  external,
  children,
  className,
  ...rest
}: LinkProps) {
  const content = (
    <>
      {children}
      {withArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </>
  );
  const classes = cn(base, variantClass[variant], sizeClass[size], className);
  if (external) {
    return (
      <a
        href={to}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <Link to={to} className={classes} {...(rest as object)}>
      {content}
    </Link>
  );
}
