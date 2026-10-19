export function formatDate(
  value: string | undefined,
  opts: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  },
): string {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return new Intl.DateTimeFormat("en-GB", opts).format(d);
}

export function formatDateRange(
  startIso: string | undefined,
  endIso: string | undefined,
): string {
  if (!startIso) return "";
  if (!endIso || endIso === startIso) return formatDate(startIso);
  return `${formatDate(startIso)} – ${formatDate(endIso)}`;
}

export function truncate(value: string, max = 160): string {
  if (value.length <= max) return value;
  return value.slice(0, max - 1).trimEnd() + "…";
}
