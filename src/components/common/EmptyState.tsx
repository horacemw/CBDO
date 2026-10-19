import type { ReactNode } from "react";
import { Inbox } from "lucide-react";

interface Props {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({ title, description, icon, action }: Props) {
  return (
    <div className="border border-dashed border-border-strong bg-paper rounded p-10 text-center">
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper-sunk text-text-muted">
        {icon ?? <Inbox className="h-5 w-5" aria-hidden="true" />}
      </div>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      {description ? (
        <p className="mx-auto mt-1.5 max-w-md text-sm text-text-muted">
          {description}
        </p>
      ) : null}
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
