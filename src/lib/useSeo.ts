import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

export interface SeoInput {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  type?: "website" | "article";
}

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
): void {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string): void {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({
  title,
  description,
  image,
  path,
  type = "website",
}: SeoInput): void {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — ${siteConfig.shortName}`
      : `${siteConfig.shortName} — Coalition for Human Rights and Good Governance`;
    document.title = fullTitle;

    const desc = description ?? siteConfig.description;
    upsertMeta("name", "description", desc);

    const url = `${siteConfig.siteUrl}${path ?? (typeof window !== "undefined" ? window.location.pathname : "/")}`;
    upsertLink("canonical", url);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:type", type);
    upsertMeta(
      "property",
      "og:image",
      image ?? `${siteConfig.siteUrl}${siteConfig.defaultOgImage}`,
    );
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
  }, [title, description, image, path, type]);
}
