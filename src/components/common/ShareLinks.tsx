import { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

interface Props {
  title: string;
  url?: string;
}

export function ShareLinks({ title, url }: Props) {
  const [copied, setCopied] = useState(false);
  const target =
    url ?? (typeof window !== "undefined" ? window.location.href : "");
  const text = encodeURIComponent(title);
  const u = encodeURIComponent(target);

  const share = [
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${text}&url=${u}`,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(target);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {share.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-text-muted hover:text-ink border border-border rounded px-3 py-1.5"
        >
          {s.label.replace("Share on ", "")}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted hover:text-ink border border-border rounded px-3 py-1.5"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5" aria-hidden="true" />
        ) : (
          <LinkIcon className="h-3.5 w-3.5" aria-hidden="true" />
        )}
        {copied ? "Link copied" : "Copy link"}
      </button>
    </div>
  );
}
