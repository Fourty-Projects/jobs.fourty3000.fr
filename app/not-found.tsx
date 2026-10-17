import { withBasePath } from "@/lib/paths";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="text-center">
        <h4 className="uppercase text-md font-bold mb-3 text-red-500 tracking-wider">
          Erreur 404
        </h4>
        <h1 className="mb-3 text-4xl font-extrabold text-gray-900">
          Page introuvable
        </h1>
        <p className="text-gray-500 mb-6">
          La page que vous cherchez n&apos;existe pas.
        </p>
        <a
          href={withBasePath("/")}
          className="bg-gray-700 px-6 py-3 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-600 rounded-lg"
        >
          <i className="fa-solid fa-home mr-2"></i>
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
