import {
  findCompanyByJobSlug,
  findJobBySlug,
  getInternalSlugs,
} from "@/lib/jobs";
import type { Metadata } from "next";
import { withBasePath } from "@/lib/paths";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getInternalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = findJobBySlug(slug);

  return {
    title: job ? `${job.title} | Fourty3000 Jobs` : "Fourty3000 Jobs",
    description: `Postulez pour le poste ${job?.title} chez Fourty3000`,
  };
}

export default async function PostulerPage({ params }: Props) {
  const { slug } = await params;
  const job = findJobBySlug(slug);
  const company = findCompanyByJobSlug(slug);

  if (!job) {
    return (
      <div className="flex items-center justify-center pt-32">
        <div className="text-center">
          <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-triangle-exclamation text-red-400 text-xl"></i>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Poste non trouvé</h1>
          <a
            href={withBasePath("/")}
            className="inline-flex items-center gap-2 mt-4 text-red-500 hover:text-red-600 font-medium text-sm transition-colors"
          >
            <i className="fa-solid fa-arrow-left"></i>
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    );
  }

  const isTally = !!job.tallyUrl;

  return (
    <main className="relative max-w-2xl mx-auto px-4 pt-16 pb-20">
      <div className="hero-glow" aria-hidden="true" />

      {/* Breadcrumb */}
      <a
        href={withBasePath("/")}
        className="relative z-10 inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors mb-8"
      >
        <i className="fa-solid fa-arrow-left text-xs"></i>
        Retour aux offres
      </a>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/50 p-8 md:p-10">
        {/* Company */}
        {company && (
          <div className="flex items-center gap-3 mb-6">
            <img
              src={company.logo}
              alt={company.logoAlt}
              className="w-10 h-10 rounded-xl object-cover ring-1 ring-gray-100"
            />
            <div>
              <p className="text-sm font-semibold text-gray-800">
                {company.name}
              </p>
              <p className="text-xs text-gray-400">{job.type}</p>
            </div>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
          {job.emoji && <span className="mr-2">{job.emoji}</span>}
          {job.title}
        </h1>

        <div className="h-px bg-gradient-to-r from-gray-100 to-transparent my-6" />

        {/* Info */}
        <div className="bg-gray-50 rounded-xl p-4 mb-8">
          <p className="text-sm text-gray-600 leading-relaxed">
            <i className="fa-solid fa-circle-info text-sky-500 mr-2"></i>
            {isTally
              ? "Le formulaire de candidature est géré via Tally. Cliquez ci-dessous pour y accéder."
              : "Ce poste est géré par une entité externe. Cliquez ci-dessous pour postuler."}
          </p>
        </div>

        {/* CTA */}
        <a
          href={isTally ? job.tallyUrl : job.url}
          target="_blank"
          rel="noreferrer"
          className="btn-apply flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-400 to-red-500 px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:from-red-500 hover:to-red-600 transition-all shadow-lg shadow-red-200"
        >
          <i className="fa-solid fa-rocket"></i>
          {isTally ? "Accéder au formulaire" : "Postuler maintenant"}
        </a>
      </div>

      {/* Footer */}
      <p className="relative z-10 text-center text-xs text-gray-300 mt-6">
        &copy; {new Date().getFullYear()} Fourty3000
      </p>
    </main>
  );
}
