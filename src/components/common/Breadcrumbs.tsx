import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "./Container";

export interface Crumb {
  label: string;
  to?: string;
}

interface Props {
  items: Crumb[];
}

export function Breadcrumbs({ items }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-paper border-b border-border"
    >
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-4 text-xs text-text-muted">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
                {i > 0 ? (
                  <ChevronRight
                    className="h-3.5 w-3.5 text-text-subtle"
                    aria-hidden="true"
                  />
                ) : null}
                {item.to && !isLast ? (
                  <Link
                    to={item.to}
                    className="hover:text-ink underline-offset-4 hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-ink font-medium" : ""}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
