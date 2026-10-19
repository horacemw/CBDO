import { Link } from "react-router-dom";
import { ArrowRight, Compass } from "lucide-react";
import { Container } from "@/components/common/Container";
import { useSeo } from "@/lib/useSeo";

export function NotFoundPage() {
  useSeo({
    title: "Page not found",
    path: "/404",
    description: "The page you were looking for does not exist.",
  });
  return (
    <section className="section bg-paper">
      <Container width="narrow">
        <div className="text-center max-w-xl mx-auto py-10">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-paper-sunk text-text-muted">
            <Compass className="h-7 w-7" aria-hidden="true" />
          </div>
          <h1 className="mt-6">We can't find that page</h1>
          <p className="mt-4 text-text-muted">
            The page you were looking for might have been moved, renamed, or
            never existed. Here are some useful places to go next:
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-3 text-left">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About CBDOS" },
              { to: "/projects", label: "Projects & programmes" },
              { to: "/news", label: "News & blog" },
              { to: "/reports", label: "Reports & publications" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group inline-flex items-center justify-between border border-border rounded px-4 py-3 hover:border-ink"
              >
                <span className="font-medium text-ink">{l.label}</span>
                <ArrowRight
                  className="h-4 w-4 text-text-subtle group-hover:text-brand-green-dark"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
