import { useMemo } from "react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { EventCard } from "@/components/common/EventCard";
import { EmptyState } from "@/components/common/EmptyState";
import { events } from "@/data/events";
import { useSeo } from "@/lib/useSeo";

export function EventsPage() {
  useSeo({
    title: "Events & Activities",
    path: "/events",
    description:
      "Upcoming and past coalition events, dialogues, trainings and forums.",
  });

  const now = new Date();
  const { upcoming, past } = useMemo(() => {
    const up: typeof events = [];
    const pa: typeof events = [];
    for (const e of events) {
      const start = new Date(e.startDate);
      if (e.status === "past" || start < now) pa.push(e);
      else up.push(e);
    }
    up.sort((a, b) => (a.startDate < b.startDate ? -1 : 1));
    pa.sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
    return { upcoming: up, past: pa };
  }, [now]);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Events" }]}
      />
      <PageHero
        eyebrow="Events & activities"
        title="Dialogues, trainings and coalition convenings."
        description="Dialogues, trainings, forums and other events organised with coalition member organisations."
      />

      <section className="section bg-paper">
        <Container>
          <h2 className="mb-6">Upcoming events</h2>
          {upcoming.length === 0 ? (
            <EmptyState
              title="No upcoming events at the moment"
              description="New events will appear here once CBDOS confirms upcoming activities."
            />
          ) : (
            <div className="space-y-5">
              {upcoming.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <section className="section bg-paper-soft border-t border-border">
        <Container>
          <h2 className="mb-6">Past events</h2>
          {past.length === 0 ? (
            <EmptyState title="No past events to display yet" />
          ) : (
            <div className="space-y-5">
              {past.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
