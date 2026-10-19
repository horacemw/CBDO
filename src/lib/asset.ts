/**
 * Resolve a public asset path against Vite's base URL so references work
 * both in development (base "/") and on GitHub Pages (base "/CBDO/").
 *
 * Pass paths exactly as they appear in /public, e.g. asset("/images/foo.jpg").
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const trimmed = path.replace(/^\//, "");
  return `${base}${trimmed}`;
}
