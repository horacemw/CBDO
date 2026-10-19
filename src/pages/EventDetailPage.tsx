import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Globe } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { ShareLinks } from "@/components/common/ShareLinks";
import { events, findEvent } from "@/data/events";
import { findProject } from "@/data/projects";
import { useSeo } from "@/lib/useSeo";
import { formatDateRange } from "@/lib/format";
import { NotFoundPage } from "./NotFoundPage";

export function EventDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const event = slug ? findEvent(slug) : undefined;
  useSeo({
    title: event?.title ?? "Event",
    description: event?.summary,
    path: `/events/${slug ?? ""}`,
    image: event?.heroImage,
    type: "article",
  });
  if (!event) return <NotFoundPage />;

  const relatedProject = event.relatedProjectSlug
    ? findProject(event.relatedProjectSlug)
    : undefined;
  const otherEvents = events
    .filter((e) => e.slug !== event.slug && e.status === event.status)
    .slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Events", to: "/events" },
          { label: event.title },
        ]}
      />

      <section className="bg-ink text-paper">
        <Container>
          <div className="py-12 md:py-16 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-5 text-xs">
                <span className="chip-green">
                  {event.status === "upcoming"
                    ? "Upcoming event"
                    : event.status === "past"
                      ? "Past event"
                      : "Recurring event"}
                </span>
              </div>
              <h1 className="text-paper text-balance">{event.title}</h1>
              <p className="mt-4 text-lg text-paper/80 max-w-2xl">
                {event.summary}
              </p>
              <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4 text-sm">
                <div>
                  <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                    Date
                  </dt>
                  <dd className="mt-1 inline-flex items-center gap-1.5 text-paper">
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                    {formatDateRange(event.startDate, event.endDate)}
                  </dd>
                </div>
                {event.venue ? (
                  <div>
                    <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                      Venue
                    </dt>
                    <dd className="mt-1 inline-flex items-center gap-1.5 text-paper">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {event.venue}
                    </dd>
                  </div>
                ) : null}
                {event.isOnline ? (
                  <div>
                    <dt className="text-paper/50 uppercase text-[11px] tracking-wider">
                      Format
                    </dt>
                    <dd className="mt-1 inline-flex items-center gap-1.5 text-paper">
                      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                      Online
                    </dd>
                  </div>
                ) : null}
              </dl>
            </div>
            <div className="lg:col-span-5">
              <ImageWithFallback
                src={event.heroImage}
                alt=""
                aspect="4/3"
                className="rounded"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-paper">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <article className="prose-article">
                <h2>About this event</h2>
                <p>{event.description}</p>
              </article>

              {event.registrationUrl ? (
                <div className="mt-8">
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Register for this event
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              ) : event.status === "upcoming" ? (
                <div className="mt-8 border border-dashed border-border-strong rounded px-5 py-4 bg-paper-soft text-sm text-text-muted max-w-xl">
                  Registration details will be published once CBDOS confirms the
                  arrangements for this event.
                </div>
              ) : null}

              <div className="mt-10 border-t border-border pt-6">
                <ShareLinks title={event.title} />
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-6">
              {relatedProject ? (
                <div className="border border-border rounded p-6 bg-paper-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Related project
                  </h3>
                  <Link
                    to={`/projects/${relatedProject.slug}`}
                    className="mt-2 inline-flex items-center gap-1.5 text-ink font-medium hover:text-brand-green-dark"
                  >
                    {relatedProject.title}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              ) : null}

              {otherEvents.length > 0 ? (
                <div className="border border-border rounded p-6 bg-paper-soft">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-4">
                    Other events
                  </h3>
                  <ul className="space-y-3">
                    {otherEvents.map((e) => (
                      <li key={e.slug}>
                        <Link
                          to={`/events/${e.slug}`}
                          className="text-sm text-ink hover:text-brand-green-dark font-medium"
                        >
                          {e.title}
                        </Link>
                        <div className="text-xs text-text-muted">
                          {formatDateRange(e.startDate, e.endDate)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
