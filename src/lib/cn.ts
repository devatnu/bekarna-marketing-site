/**
 * Joins class names, dropping falsy entries.
 *
 * NOT tailwind-merge: later classes do not override earlier ones. If you pass
 * both `p-4` and `p-8`, both end up in the attribute and CSS order decides.
 * Compose conditionally rather than layering overrides.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
