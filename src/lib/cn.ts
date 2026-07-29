/**
 * Class joiner — deliberately NOT tailwind-merge (same as the product app), so
 * later classes do not override earlier ones. Don't rely on override order.
 */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
