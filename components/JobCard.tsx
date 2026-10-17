import type { Job } from "@/lib/jobs";
import { isInternal, withBasePath } from "@/lib/paths";

function badgeClass(type: string): string {
  switch (type) {
    case "Freelance":
      return "badge-freelance";
    case "Bénévole":
      return "badge-benevole";
    default:
      return "badge-autre";
  }
}

export default function JobCard({ job }: { job: Job }) {
  const isExternal = !isInternal(job.url);

  return (
    <div className="group py-3 first:pt-3 last:pb-1">
      <div className="flex items-center justify-between gap-3">
        {/* Title + badge */}
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-800 leading-snug">
            {job.emoji && <span className="mr-1.5">{job.emoji}</span>}
            {job.title}
          </p>
          <span
            className={`inline-block mt-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider ${badgeClass(job.type)}`}
          >
            {job.type}
          </span>
        </div>

        {/* Apply button */}
        <a
          href={isExternal ? job.url : withBasePath(job.url)}
          {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
          className="btn-apply flex-shrink-0 flex items-center gap-1.5 bg-gray-800 px-3.5 py-1.5 text-xs font-semibold text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-0.5 transition-transform"></i>
          <span className="hidden sm:inline">Postuler</span>
        </a>
      </div>
    </div>
  );
}
