import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { siteConfig, nav } from "@/data/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <Container>
        <div className="pt-16 pb-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 lg:col-span-4">
            <Link
              to="/"
              aria-label={`${siteConfig.shortName} home`}
              className="inline-flex items-center justify-center bg-paper rounded px-3 py-2.5"
            >
              <img
                src={siteConfig.logoLight}
                alt=""
                className="h-14 w-auto"
              />
              <span className="sr-only">{siteConfig.longName}</span>
            </Link>
            <p className="mt-5 text-sm text-paper max-w-sm leading-relaxed">
              A coalition of community-based organisations working together for
              human rights, good governance and inclusive development in {" "}
              {siteConfig.country}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/get-involved"
                className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark px-4 py-2.5 rounded text-sm font-medium"
              >
                Get Involved
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-paper/30 hover:border-paper/60 px-4 py-2.5 rounded text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <FooterColumn title="Organisation" items={nav.footer.organisation} />
            <FooterColumn title="Our Work" items={nav.footer.engage} />
            <FooterColumn title="Resources" items={nav.footer.resources} />
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70 mb-4">
                Contact
              </h3>
              <ul className="space-y-3 text-sm text-paper">
                {siteConfig.contact.publicEmail ? (
                  <li className="flex items-start gap-2.5">
                    <Mail className="h-4 w-4 mt-0.5 text-paper shrink-0" aria-hidden="true" />
                    <a
                      href={`mailto:${siteConfig.contact.publicEmail}`}
                      className="text-paper hover:text-brand-green-soft"
                    >
                      {siteConfig.contact.publicEmail}
                    </a>
                  </li>
                ) : null}
                {siteConfig.contact.phone ? (
                  <li className="flex items-start gap-2.5">
                    <Phone className="h-4 w-4 mt-0.5 text-paper shrink-0" aria-hidden="true" />
                    <div className="text-paper">
                      <a
                        href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                        className="text-paper hover:text-brand-green-soft"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      {siteConfig.contact.phoneAlt ? (
                        <div>
                          <a
                            href={`tel:${siteConfig.contact.phoneAlt.replace(/\s+/g, "")}`}
                            className="text-paper hover:text-brand-green-soft"
                          >
                            {siteConfig.contact.phoneAlt}
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </li>
                ) : null}
                {siteConfig.contact.address ? (
                  <li className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 mt-0.5 text-paper shrink-0" aria-hidden="true" />
                    <span>{siteConfig.contact.address}</span>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-paper/15 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-paper">
          <div>
            © {year} {siteConfig.longName}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {nav.footer.legal.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-paper hover:text-brand-green-soft"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={siteConfig.developer.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-paper hover:text-brand-green-soft"
            >
              Website by {siteConfig.developer.name}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly { label: string; to: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/70 mb-4">
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm text-paper">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="text-paper hover:text-brand-green-soft"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
