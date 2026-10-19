import { Mail, Phone, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { useSeo } from "@/lib/useSeo";
import { siteConfig } from "@/data/siteConfig";

export function ContactPage() {
  useSeo({
    title: "Contact",
    path: "/contact",
    description: "Get in touch with the CBDOS Secretariat.",
  });

  const { contact } = siteConfig;

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the Secretariat."
        description="For general enquiries, media requests, partnership conversations or coalition membership questions."
      />

      <section className="section bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4 space-y-6">
              <div className="border border-border rounded p-6 bg-paper-soft">
                <h2 className="text-xl">Direct contact</h2>
                <ul className="mt-4 space-y-4 text-sm">
                  {contact.publicEmail ? (
                    <li className="flex items-start gap-3">
                      <Mail
                        className="h-4 w-4 mt-0.5 text-brand-green-dark shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-text-subtle text-[11px] uppercase tracking-wider">
                          Email
                        </div>
                        <a
                          href={`mailto:${contact.publicEmail}`}
                          className="link-inline"
                        >
                          {contact.publicEmail}
                        </a>
                      </div>
                    </li>
                  ) : (
                    <li className="flex items-start gap-3 text-text-muted">
                      <Mail
                        className="h-4 w-4 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-text-subtle text-[11px] uppercase tracking-wider">
                          Email
                        </div>
                        A public email address will be added here once
                        confirmed by the Secretariat.
                      </div>
                    </li>
                  )}

                  {contact.phone ? (
                    <li className="flex items-start gap-3">
                      <Phone
                        className="h-4 w-4 mt-0.5 text-brand-green-dark shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-text-subtle text-[11px] uppercase tracking-wider">
                          Phone
                        </div>
                        <a
                          href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                          className="link-inline"
                        >
                          {contact.phone}
                        </a>
                        {contact.phoneAlt ? (
                          <div>
                            <a
                              href={`tel:${contact.phoneAlt.replace(/\s+/g, "")}`}
                              className="link-inline"
                            >
                              {contact.phoneAlt}
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </li>
                  ) : null}

                  {contact.address ? (
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="h-4 w-4 mt-0.5 text-brand-green-dark shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-text-subtle text-[11px] uppercase tracking-wider">
                          Office
                        </div>
                        {contact.address}
                      </div>
                    </li>
                  ) : null}

                  {contact.officeHours ? (
                    <li className="flex items-start gap-3">
                      <Clock
                        className="h-4 w-4 mt-0.5 text-brand-green-dark shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="text-text-subtle text-[11px] uppercase tracking-wider">
                          Office hours
                        </div>
                        {contact.officeHours}
                      </div>
                    </li>
                  ) : null}
                </ul>
              </div>

              <div className="border border-border rounded p-6 bg-paper">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    className="h-4 w-4 mt-0.5 text-brand-green-dark shrink-0"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-ink">
                      Please note
                    </h3>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">
                      This website is not a secure channel for confidential
                      case reporting. For sensitive human-rights matters,
                      please use an in-person referral through a trusted
                      community organisation.
                    </p>
                  </div>
                </div>
              </div>

            </aside>

            <div className="lg:col-span-8">
              <div className="border border-border rounded p-6 md:p-8 bg-paper">
                <h2 className="text-xl">Send a message</h2>
                <p className="mt-2 text-sm text-text-muted">
                  Share a few details and a member of the Secretariat will be
                  in touch.
                </p>
                <div className="mt-6">
                  <EnquiryForm intent="contact" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
