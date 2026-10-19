import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone, Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { nav, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/cn";

const primaryTopLevel: {
  label: string;
  to: string;
  match?: string[];
}[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Focus Areas", to: "/focus-areas" },
  { label: "Projects", to: "/projects", match: ["/projects"] },
  { label: "News & Blog", to: "/news", match: ["/news"] },
  {
    label: "More",
    to: "/reports",
    match: ["/reports", "/events", "/gallery"],
  },
  { label: "People", to: "/team", match: ["/team", "/partners"] },
  { label: "Contact", to: "/contact" },
];

const moreChildren = [
  { label: "Reports", to: "/reports", desc: "Publications and resources" },
  { label: "Events", to: "/events", desc: "Dialogues, trainings and forums" },
  { label: "Gallery", to: "/gallery", desc: "Images from recent activities" },
];

const peopleChildren = [
  { label: "Team & Leadership", to: "/team", desc: "The people behind the coalition" },
  { label: "Partners & Membership", to: "/partners", desc: "Who we work with" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm">
      {/* Utility bar — contact information on the right */}
      <div className="hidden md:block bg-ink text-paper">
        <Container>
          <div className="flex items-center justify-end gap-5 py-2 text-xs">
            {siteConfig.contact.phone ? (
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 hover:text-brand-green-soft"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{siteConfig.contact.phone}</span>
              </a>
            ) : null}
            {siteConfig.contact.phoneAlt ? (
              <a
                href={`tel:${siteConfig.contact.phoneAlt.replace(/\s+/g, "")}`}
                className="hidden lg:inline-flex items-center gap-1.5 hover:text-brand-green-soft"
              >
                <span>{siteConfig.contact.phoneAlt}</span>
              </a>
            ) : null}
            {siteConfig.contact.publicEmail ? (
              <a
                href={`mailto:${siteConfig.contact.publicEmail}`}
                className="inline-flex items-center gap-1.5 hover:text-brand-green-soft"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{siteConfig.contact.publicEmail}</span>
              </a>
            ) : null}
            <span aria-hidden="true" className="h-3 w-px bg-paper/20" />
            <Link
              to="/search"
              className="inline-flex items-center gap-1.5 hover:text-brand-green-soft"
              aria-label="Search the website"
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Search</span>
            </Link>
          </div>
        </Container>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-paper">
        <Container>
          <div className="flex items-center justify-between gap-6 py-4">
            <Link
              to="/"
              className="flex items-center gap-3"
              aria-label={`${siteConfig.shortName} — home`}
            >
              <img
                src={siteConfig.logoLight}
                alt=""
                className="h-12 w-auto md:h-14"
              />
              <span className="sr-only">{siteConfig.longName}</span>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Primary"
            >
              {primaryTopLevel.map((item) => {
                const hasDropdown =
                  item.label === "More" || item.label === "People";
                const children =
                  item.label === "More"
                    ? moreChildren
                    : item.label === "People"
                      ? peopleChildren
                      : null;
                return (
                  <div key={item.label} className="relative group">
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        cn(
                          "inline-flex items-center gap-1 px-3.5 py-2.5 text-sm font-medium text-ink/85 hover:text-ink rounded transition-colors",
                          isActive && "text-ink",
                        )
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span className="relative">
                            {item.label}
                            <span
                              aria-hidden="true"
                              className={cn(
                                "absolute left-0 right-0 -bottom-1 h-0.5 bg-brand-green scale-x-0 origin-left transition-transform",
                                (isActive ||
                                  (item.match &&
                                    item.match.some((m) =>
                                      location.pathname.startsWith(m),
                                    ))) &&
                                  "scale-x-100",
                              )}
                            />
                          </span>
                        </>
                      )}
                    </NavLink>
                    {hasDropdown && children ? (
                      <div
                        className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all absolute left-0 top-full pt-2 w-72 z-50"
                      >
                        <div className="border border-border bg-paper rounded shadow-card p-2">
                          {children.map((c) => (
                            <NavLink
                              key={c.to}
                              to={c.to}
                              className={({ isActive }) =>
                                cn(
                                  "block rounded px-3 py-2.5 hover:bg-paper-soft",
                                  isActive && "bg-paper-sunk",
                                )
                              }
                            >
                              <div className="text-sm font-medium text-ink">
                                {c.label}
                              </div>
                              <div className="text-xs text-text-muted mt-0.5">
                                {c.desc}
                              </div>
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/get-involved"
                className="btn-primary"
              >
                Get Involved
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-border-strong text-ink"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-ink/60"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-paper shadow-xl overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2"
              >
                <img src={siteConfig.logoLight} alt="" className="h-10 w-auto" />
                <span className="sr-only">{siteConfig.shortName}</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="h-10 w-10 inline-flex items-center justify-center rounded border border-border-strong"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav className="px-3 py-2" aria-label="Mobile primary">
              <ul className="divide-y divide-border">
                {nav.primary.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-3.5 text-base font-medium text-ink hover:bg-paper-soft rounded",
                          isActive && "text-brand-green-dark bg-brand-green-soft/60",
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="p-3 mt-2">
                <Link
                  to="/get-involved"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full"
                >
                  Get Involved
                </Link>
                <Link
                  to="/search"
                  onClick={() => setMobileOpen(false)}
                  className="btn-outline w-full mt-3"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                  Search
                </Link>
              </div>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
