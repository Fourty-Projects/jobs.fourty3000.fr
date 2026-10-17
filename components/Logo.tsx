"use client";

import { useState } from "react";
import { withBasePath } from "@/lib/paths";

const LOGO_SRC = "/img/fourty3000-logo.png";

/**
 * Logo Fourty3000.
 *
 * - `width`/`height` en `auto` : le logo garde son ratio intrinsèque, jamais déformé.
 * - `onError` : si le fichier est absent, retombe sur la pastille "F" au lieu
 *   d'afficher l'icône d'image cassée du navigateur.
 */
export default function Logo({
  className = "h-7 w-auto",
}: {
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`flex aspect-square items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-red-600 text-sm font-black text-white ${className}`}
        aria-label="Fourty3000"
      >
        F
      </span>
    );
  }

  // <img> nu : pas d'optimisation d'image possible sur un logo vectoriel
  // stocké dans /public, et `onError` est requis pour le fallback.
  /* eslint-disable @next/next/no-img-element */
  return (
    <img
      src={withBasePath(LOGO_SRC)}
      alt="Fourty3000"
      className={`${className} h-auto max-w-full object-contain`}
      onError={() => setFailed(true)}
    />
  );
}