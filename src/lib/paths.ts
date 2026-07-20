/** Join a path with Astro's base URL, always inserting exactly one slash. */
export function withBase(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "") || "";
  const clean = path.replace(/^\/+/, "");
  if (!clean) return `${base}/` || "/";
  return `${base}/${clean}`;
}
