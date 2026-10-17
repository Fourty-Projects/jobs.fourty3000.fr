import type { Company } from "@/lib/jobs";
import { withBasePath } from "@/lib/paths";
import JobCard from "./JobCard";

export default function CompanyCard({ company }: { company: Company }) {
  return (
    <div className="jobsCard flex flex-col rounded-2xl bg-white/80 backdrop-blur-sm p-5 hover:bg-white">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-sky-50 flex-shrink-0 ring-1 ring-blue-100">
          <a
            href={company.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src={withBasePath(company.logo)}
              className="h-9 w-9 rounded-lg object-cover"
              alt={company.logoAlt}
            />
          </a>
        </div>
        <div className="min-w-0">
          <a
            href={company.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <h2 className="font-bold text-gray-900 leading-tight hover:text-gray-700 transition-colors">
              {company.name}
            </h2>
          </a>
          <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-3">
            {company.description}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 mb-1" />

      {/* Jobs list */}
      <div className="flex-1">
        {company.jobs.length > 0 ? (
          company.jobs.map((job, i) => <JobCard key={i} job={job} />)
        ) : (
          <div className="flex items-center justify-center py-6">
            <p className="text-gray-300 text-xs text-center italic flex items-center gap-2">
              <i className="fa-regular fa-folder-open"></i>
              {company.noJobsMessage}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
