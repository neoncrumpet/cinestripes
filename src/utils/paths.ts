// Astro prefixes generated assets, but authored navigation/public URLs need the base too.
export function withBase(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
