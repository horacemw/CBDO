import type { ReactNode } from "react";
import { Container } from "./Container";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  rightSlot?: ReactNode;
}

export function PageHero({ eyebrow, title, description, rightSlot }: Props) {
  return (
    <section className="bg-ink text-paper">
      <Container>
        <div className="py-14 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            {eyebrow ? (
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-green-soft/70 mb-3">
                {eyebrow}
              </div>
            ) : null}
            <h1 className="text-balance text-paper">{title}</h1>
            {description ? (
              <p className="mt-5 text-lg text-paper/80 max-w-2xl text-pretty">
                {description}
              </p>
            ) : null}
          </div>
          {rightSlot ? (
            <div className="lg:col-span-4 lg:text-right">{rightSlot}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
