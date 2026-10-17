import type { NextConfig } from "next";
import { existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Résolution du `basePath` pour GitHub Pages.
 *
 * - Domaine perso (public/CNAME présent) -> pas de sous-chemin.
 * - Repo projet (ex: user.github.io/mon-repo) -> le nom du repo est le sous-chemin.
 * - BASE_PATH en variable d'env pour forcer une valeur (vide = racine).
 *
 * La valeur est aussi injectée dans NEXT_PUBLIC_BASE_PATH pour que les
 * composants client puissent construire leurs URLs (cf. lib/paths.ts).
 */
function resolveBasePath(): string {
  const forced = process.env.BASE_PATH ?? process.env.NEXT_PUBLIC_BASE_PATH;
  if (forced !== undefined) {
    return forced;
  }
  if (existsSync(join(process.cwd(), "public", "CNAME"))) {
    return "";
  }
  const repo = process.env.GITHUB_REPOSITORY; // "user/repo"
  if (repo) {
    return `/${repo.split("/")[1]}`;
  }
  return "";
}

const basePath = resolveBasePath();

// Doit être posé avant que Next ne lise les NEXT_PUBLIC_*.
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig: NextConfig = {
  // Export statique : le build produit le dossier out/ pour GitHub Pages
  output: "export",
  basePath,
  // Génère out/postuler/xxx/index.html : indispensable sur GitHub Pages
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;