// Deterministic date formatter — SSR and client produce identical output.
// Avoids hydration mismatches caused by toLocaleDateString (locale/timezone differences).
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDate(iso: string): string {
  // Expect YYYY-MM-DD; parse in UTC to keep server/client identical.
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${MONTHS[m - 1]} ${d}, ${y}`;
}
