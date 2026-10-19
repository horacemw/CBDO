import { Search, X } from "lucide-react";
import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  containerClassName?: string;
}

export function SearchInput({
  value,
  onValueChange,
  label,
  placeholder = "Search…",
  id,
  containerClassName,
  ...rest
}: Props) {
  const inputId = id ?? "search-input";
  return (
    <div className={cn("w-full", containerClassName)}>
      {label ? (
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-subtle"
          aria-hidden="true"
        />
        <input
          id={inputId}
          type="search"
          className={cn("input-base pl-10 pr-10")}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={placeholder}
          {...rest}
        />
        {value ? (
          <button
            type="button"
            onClick={() => onValueChange("")}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-text-muted hover:text-ink"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
