import CompanyCard from "@/components/CompanyCard";
import Logo from "@/components/Logo";
import { companies } from "@/lib/jobs";
import { withBasePath } from "@/lib/paths";

export default function Home() {
  const totalJobs = companies.reduce((acc, c) => acc + c.jobs.length, 0);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-4 py-3.5 md:px-8">
          <a href={withBasePath("/")} className="group flex min-w-0 items-center gap-3">
            <span className="flex h-10 w-auto shrink-0 items-center justify-center rounded-xl bg-white px-2 shadow-sm ring-1 ring-gray-200/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
              <Logo className="h-6 w-auto max-h-8" />
            </span>
            <span className="flex min-w-0 items-baseline gap-2">
              <span className="truncate text-lg font-bold tracking-tight text-gray-900">
                Fourty3000
              </span>
              <span className="text-sm text-gray-400">Jobs</span>
            </span>
          </a>

          <a
            href="#offres"
            className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-gray-700"
          >
            Voir les offres
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-4 pb-14 pt-16 md:pt-24">
        <div className="hero-glow" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-500">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-500" />
            </span>
            Recrutement ouvert
          </span>

          <h1 className="mb-5 text-5xl font-black leading-[1.05] tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            Nous recrutons pour{" "}
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              nos différentes structures
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
            Rejoignez les équipes de la Fourty3000 et découvrez les postes
            ouverts dans nos différentes structures.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#offres"
              className="group inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gray-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-700 hover:shadow-xl"
            >
              Explorer les {totalJobs} postes
              <i className="fa-solid fa-arrow-down text-[10px] transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Grid */}
      <main
        id="offres"
        className="mx-auto w-full max-w-[1800px] scroll-mt-20 px-4 pb-16 md:px-8"
      >
        {/* auto-fit + minmax : le nombre de colonnes s'adapte tout seul,
            les cartes occupent toujours toute la largeur disponible. */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] items-start gap-5">
          {companies.map((company) => (
            <CompanyCard key={company.name} company={company} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/60 bg-white/50 py-6 backdrop-blur-sm">
        <p className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-600">Fourty3000</span> —
          Tous droits réservés
        </p>
      </footer>
    </>
  );
}