import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  Terminal,
  Shield,
  Activity,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Server
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

interface FeaturedProjectsSectionProps {
  onOpenDiagram: (imageUrl: string, title: string, desc?: string) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  onOpenDiagram
}) => {
  const [activeProjectTab, setActiveProjectTab] = useState<Record<string, string>>({
    'gitops-microservices-eks': 'arch',
    'amazon-prime-clone-cicd': 'arch'
  });

  const handleTabChange = (projectId: string, tab: string) => {
    setActiveProjectTab((prev) => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4657C8]/20 text-[#8E9BEE] border border-[#4657C8]/30 mb-3">
            <Server className="w-3.5 h-3.5" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Cloud & DevOps Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400">
            In-depth engineering implementations backed by verified repositories, reproducible Terraform infrastructure, automated security gates, and GitOps delivery.
          </p>
        </div>

        {/* Featured Projects Cards */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => {
            const currentTab = activeProjectTab[project.id] || 'arch';

            return (
              <div
                key={project.id}
                className="m3-card bg-[#1B2435] border border-gray-800 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-8 border-b border-gray-800/80 bg-gradient-to-r from-[#151D2C] to-[#1B2435]">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#4657C8]/20 text-[#8E9BEE] border border-[#4657C8]/30">
                          {project.badge}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          FEATURED PROJECT 0{index + 1}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-300 max-w-4xl">
                        {project.shortDescription}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() =>
                          onOpenDiagram(
                            project.architectureDiagram,
                            `${project.title} — Architecture`,
                            project.architectureExplanation
                          )
                        }
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-[#4657C8] hover:bg-[#3848B0] rounded-xl shadow-md shadow-[#4657C8]/20 transition-all cursor-pointer"
                      >
                        <Maximize2 className="w-4 h-4" />
                        <span>View Diagram</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-gray-200 bg-[#202B3D] border border-gray-700 hover:bg-gray-700 rounded-xl transition-all shadow-xs"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-[#151D2C] text-gray-300 border border-gray-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub-Tabs Navigation */}
                <div className="flex items-center gap-2 px-6 sm:px-8 border-b border-gray-800 bg-[#151D2C]/60 overflow-x-auto no-scrollbar">
                  <button
                    onClick={() => handleTabChange(project.id, 'arch')}
                    className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                      currentTab === 'arch'
                        ? 'border-[#8E9BEE] text-[#8E9BEE]'
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    <Layers className="w-4 h-4" />
                    <span>Architecture Diagram</span>
                  </button>
                  <button
                    onClick={() => handleTabChange(project.id, 'iac')}
                    className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                      currentTab === 'iac'
                        ? 'border-[#8E9BEE] text-[#8E9BEE]'
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Infrastructure (IaC)</span>
                  </button>
                  <button
                    onClick={() => handleTabChange(project.id, 'ci')}
                    className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                      currentTab === 'ci'
                        ? 'border-[#8E9BEE] text-[#8E9BEE]'
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    <GitBranch className="w-4 h-4" />
                    <span>CI & DevSecOps</span>
                  </button>
                  <button
                    onClick={() => handleTabChange(project.id, 'delivery')}
                    className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                      currentTab === 'delivery'
                        ? 'border-[#8E9BEE] text-[#8E9BEE]'
                        : 'border-transparent text-gray-400 hover:text-white'
                    }`}
                  >
                    <Shield className="w-4 h-4" />
                    <span>GitOps & Reliability</span>
                  </button>
                </div>

                {/* Tab Content Body */}
                <div className="p-6 sm:p-8">
                  {currentTab === 'arch' && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
                      {/* Diagram Canvas */}
                      <div className="lg:col-span-7">
                        <div
                          className="relative group rounded-2xl overflow-hidden border border-gray-700 bg-gray-950 flex items-center justify-center p-3 cursor-pointer shadow-md"
                          onClick={() =>
                            onOpenDiagram(
                              project.architectureDiagram,
                              `${project.title} — Architecture`,
                              project.architectureExplanation
                            )
                          }
                        >
                          <img
                            src={project.architectureDiagram}
                            alt={`${project.title} Architecture`}
                            className="max-h-[360px] w-full object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="flex items-center gap-2 px-4 py-2 bg-black/80 text-white text-xs font-semibold rounded-xl backdrop-blur-xs shadow-lg">
                              <Maximize2 className="w-4 h-4" />
                              <span>Click for Fullscreen Zoomable View</span>
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Explanation & Key Points */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-base font-bold text-white">
                            Workflow & Component Topology
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {project.architectureExplanation}
                          </p>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-gray-800">
                          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Core Highlights
                          </span>
                          <div className="space-y-2">
                            {project.keyHighlights.slice(0, 4).map((h, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex items-start gap-2.5 text-xs text-gray-300"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentTab === 'iac' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">
                          {project.sections.infrastructure.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {project.sections.infrastructure.subtitle}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          {project.sections.infrastructure.points.map((p, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#151D2C] border border-gray-800 text-xs sm:text-sm text-gray-300"
                            >
                              <ChevronRight className="w-4 h-4 text-[#8E9BEE] shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>

                        {project.sections.infrastructure.codeSnippet && (
                          <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0F172A] p-4 font-mono text-xs text-gray-200 flex flex-col justify-between">
                            <div className="flex items-center justify-between text-gray-400 border-b border-gray-800 pb-2 mb-3">
                              <span>infrastructure snippet</span>
                              <span className="uppercase text-[10px]">{project.sections.infrastructure.codeSnippet.language}</span>
                            </div>
                            <pre className="overflow-x-auto text-[11px] leading-relaxed">
                              <code>{project.sections.infrastructure.codeSnippet.code}</code>
                            </pre>
                            <div className="pt-3 text-[10px] text-gray-500">
                              Terraform modular architecture
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {currentTab === 'ci' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">
                          {project.sections.ci.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {project.sections.ci.subtitle}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          {project.sections.ci.points.map((p, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 p-3 rounded-xl bg-[#151D2C] border border-gray-800 text-xs sm:text-sm text-gray-300"
                            >
                              <ChevronRight className="w-4 h-4 text-[#8E9BEE] shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>

                        {project.sections.ci.codeSnippet && (
                          <div className="rounded-xl overflow-hidden border border-gray-800 bg-[#0F172A] p-4 font-mono text-xs text-gray-200 flex flex-col justify-between">
                            <div className="flex items-center justify-between text-gray-400 border-b border-gray-800 pb-2 mb-3">
                              <span>CI / DevSecOps Gate</span>
                              <span className="uppercase text-[10px]">{project.sections.ci.codeSnippet.language}</span>
                            </div>
                            <pre className="overflow-x-auto text-[11px] leading-relaxed">
                              <code>{project.sections.ci.codeSnippet.code}</code>
                            </pre>
                            <div className="pt-3 text-[10px] text-gray-500">
                              Automated security analysis & artifact tagging
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {currentTab === 'delivery' && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-white">
                          {project.sections.gitops.title} & Observability
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {project.sections.gitops.subtitle}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-[#151D2C] border border-gray-800 space-y-3">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Argo CD Delivery Flow
                          </h5>
                          {project.sections.gitops.points.map((p, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-300"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#168C86] shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 rounded-xl bg-[#151D2C] border border-gray-800 space-y-3">
                          <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Observability & Reliability
                          </h5>
                          {project.sections.observability.points.map((p, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-xs text-gray-300"
                            >
                              <Activity className="w-3.5 h-3.5 text-[#4657C8] shrink-0 mt-0.5" />
                              <span>{p}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Direct Link to Repo & Diagram Viewer */}
                <div className="px-6 sm:px-8 py-4 bg-[#151D2C]/80 border-t border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="text-gray-400">
                    <span>Verified against GitHub repository manifests, IaC, and pipelines</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() =>
                        onOpenDiagram(
                          project.architectureDiagram,
                          `${project.title} — Architecture`,
                          project.architectureExplanation
                        )
                      }
                      className="font-semibold text-gray-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Expand Architecture Diagram</span>
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#8E9BEE] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Repository on GitHub</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
