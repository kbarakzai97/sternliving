// Prefixes a root-relative path with the deploy base (e.g. "/sternliving/" on GitHub Pages).
export const withBase = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')
