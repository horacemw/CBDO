import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import type { SiteEvent } from "@/types/content";
import { ImageWithFallback } from "./ImageWithFallback";
import { formatDateRange } from "@/lib/format";

export function EventCard({ event }: { event: SiteEvent }) {
  return (
    <article className="bg-paper border border-border hover:border-ink rounded transition-colors overflow-hidden">
      <div className="grid md:grid-cols-[280px_1fr]">
        <Link to={`/events/${event.slug}`} className="block">
          <ImageWithFallback
            src={event.heroImage}
            alt=""
            aspect="4/3"
            className="h-full"
          />
        </Link>
        <div className="p-6 flex flex-col">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
              {formatDateRange(event.startDate, event.endDate)}
            </span>
            {event.venue ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {event.venue}
              </span>
            ) : null}
            <span
              className={
                event.status === "upcoming"
                  ? "chip-green"
                  : event.status === "past"
                    ? "chip"
                    : "chip-green"
              }
            >
              {event.status === "upcoming"
                ? "Upcoming"
                : event.status === "past"
                  ? "Past event"
                  : "Recurring"}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-snug">
            <Link
              to={`/events/${event.slug}`}
              className="hover:text-brand-green-dark"
            >
              {event.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">
            {event.summary}
          </p>
          <Link
            to={`/events/${event.slug}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink hover:text-brand-green-dark"
          >
            Event details
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
