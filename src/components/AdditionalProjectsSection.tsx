import React from 'react';
import { ExternalLink, Layers, CheckCircle2, Maximize2, GitBranch } from 'lucide-react';
import { additionalProjects } from '../data/portfolioData';

interface AdditionalProjectsSectionProps {
  onOpenDiagram: (imageUrl: string, title: string, desc?: string) => void;
}

export const AdditionalProjectsSection: React.FC<AdditionalProjectsSectionProps> = ({
  onOpenDiagram
}) => {
  return (
    <section className="py-16 sm:py-24 border-t border-gray-200/70 dark:border-gray-800/70 bg-gray-50/40 dark:bg-[#0F172A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#168C86]/10 text-[#168C86] dark:bg-[#168C86]/20 dark:text-[#38B2AC] mb-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>ADDITIONAL WORK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            More Infrastructure & Pipeline Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Compact project overviews covering multi-repo GitOps workflows, native AWS CI/CD, multi-tier microservices, and serverless operational automation.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {additionalProjects.map((project) => (
            <div
              key={project.id}
              className="m3-card p-6 sm:p-7 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl sm:rounded-3xl flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#168C86] dark:text-[#38B2AC]">
                      {project.subtitle}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mt-1">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors shrink-0"
                    title="View GitHub Repository"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-gray-50 dark:bg-[#151D2C] text-gray-700 dark:text-gray-300 border border-gray-200/70 dark:border-gray-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Implementation Highlights */}
                <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    What I Implemented
                  </span>
                  <div className="space-y-2">
                    {project.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#168C86] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between gap-3">
                {project.diagramImage ? (
                  <button
                    onClick={() =>
                      onOpenDiagram(
                        project.diagramImage!,
                        `${project.title} — Architecture`,
                        project.subtitle
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4657C8] dark:text-[#8E9BEE] hover:underline cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View Architecture Diagram</span>
                  </button>
                ) : (
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    Single-repo configuration
                  </span>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                >
                  <span>Explore Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
