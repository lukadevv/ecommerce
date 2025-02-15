// TODO: Complete this with current base like "import.meta.env.BASE_URL"

export function appendUrlPath(path: string) {
  return `/${path.startsWith("/") ? path.slice(1) : path}`;
}
