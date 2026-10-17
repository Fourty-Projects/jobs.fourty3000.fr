/**
 * Préfixe `basePath` de GitHub Pages sur les liens internes.
 *
 * Next.js l'applique automatiquement a `next/link` et `next/image`, mais pas
 * aux `<a>`, aux `<img src="/...">` bruts ni aux URLs venant des données.
 * Sans ça, sur un repo projet (`user.github.io/mon-repo`), tous les liens
 * pointent vers la racine du domaine au lieu du sous-chemin.
 *
 * Les URLs absolues (externes) et les ancres (#id) sont laissées intactes.
 */
export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (!path || /^(https?:)?\/\//i.test(path) || path.startsWith("#")) {
    return path;
  }
  if (!basePath) {
    return path;
  }

  const suffix = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${suffix}` || `${basePath}/`;
}

/** true si l'URL pointe vers une page gérée par le site (donc à préfixer). */
export function isInternal(path: string): boolean {
  return !/^(https?:)?\/\//i.test(path);
}