import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  Layers,
  Terminal,
  GitBranch,
  Shield,
  Activity,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  Code
} from 'lucide-react';
import { FeaturedProject } from '../types/portfolio';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: FeaturedProject | null;
  onOpenDiagram: (imageUrl: string, title: string, desc?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  project,
  onOpenDiagram
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'infrastructure' | 'ci' | 'gitops' | 'observability' | 'screenshots'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      setActiveTab('overview');
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Layers },
    { id: 'infrastructure', label: 'Terraform IaC', icon: Terminal },
    { id: 'ci', label: 'CI Pipeline', icon: GitBranch },
    { id: 'gitops', label: 'GitOps & Delivery', icon: Shield },
    { id: 'observability', label: 'Observability & Net', icon: Activity },
    { id: 'screenshots', label: 'Evidence & Assets', icon: Maximize2 }
  ] as const;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative flex flex-col w-full max-w-5xl h-[92vh] bg-white dark:bg-[#1B2435] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-[#151D2C]">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className="hidden sm:inline-flex px-2.5 py-1 text-xs font-semibold rounded-full bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE]">
              {project.badge}
            </span>
            <h2
              id="case-study-title"
              className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white truncate"
            >
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-[#202B3D] border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1B2435] overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-3 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-[#4657C8] text-[#4657C8] dark:border-[#8E9BEE] dark:text-[#8E9BEE]'
                    : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Architecture Diagram Banner */}
              <div className="relative group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-900">
                <img
                  src={project.architectureDiagram}
                  alt={`${project.title} Architecture Diagram`}
                  className="w-full max-h-[380px] object-contain p-2"
                />
                <button
                  onClick={() =>
                    onOpenDiagram(
                      project.architectureDiagram,
                      `${project.title} — System Architecture`,
                      project.architectureExplanation
                    )
                  }
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 bg-black/75 hover:bg-black text-white text-xs font-medium rounded-lg backdrop-blur-sm transition-all shadow-md"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand Diagram</span>
                </button>
              </div>

              {/* Problem & Objective */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#E8A23A]" />
                    Objective & Scope
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-200 dark:border-gray-800">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Engineering Challenge
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
              </div>

              {/* Architecture Explanation */}
              <div className="p-5 rounded-xl bg-[#4657C8]/5 dark:bg-[#4657C8]/10 border border-[#4657C8]/20">
                <h4 className="text-sm font-bold text-[#4657C8] dark:text-[#8E9BEE] mb-2">
                  Architecture & Workflow Design
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.architectureExplanation}
                </p>
              </div>

              {/* Key Implementation Highlights */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3">
                  Verified Implementation Details
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.keyHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 dark:bg-[#151D2C] border border-gray-100 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'infrastructure' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  {project.sections.infrastructure.title}
                </h3>
                {project.sections.infrastructure.subtitle && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {project.sections.infrastructure.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {project.sections.infrastructure.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-200 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#4657C8] dark:text-[#8E9BEE] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {project.sections.infrastructure.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <Code className="w-3.5 h-3.5" />
                    <span>Sample Terraform Configuration</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#0F172A] text-gray-100 text-xs sm:text-sm overflow-x-auto border border-gray-800 font-mono">
                    <code>{project.sections.infrastructure.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'ci' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  {project.sections.ci.title}
                </h3>
                {project.sections.ci.subtitle && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {project.sections.ci.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {project.sections.ci.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-200 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#4657C8] dark:text-[#8E9BEE] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {project.sections.ci.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <Code className="w-3.5 h-3.5" />
                    <span>Pipeline Definition Snippet</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#0F172A] text-gray-100 text-xs sm:text-sm overflow-x-auto border border-gray-800 font-mono">
                    <code>{project.sections.ci.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'gitops' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  {project.sections.gitops.title}
                </h3>
                {project.sections.gitops.subtitle && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {project.sections.gitops.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {project.sections.gitops.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-200 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#4657C8] dark:text-[#8E9BEE] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {project.sections.gitops.codeSnippet && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
                    <Code className="w-3.5 h-3.5" />
                    <span>Argo CD Application Manifest</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#0F172A] text-gray-100 text-xs sm:text-sm overflow-x-auto border border-gray-800 font-mono">
                    <code>{project.sections.gitops.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>
          )}

          {activeTab === 'observability' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                  {project.sections.observability.title}
                </h3>
                {project.sections.observability.subtitle && (
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {project.sections.observability.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                {project.sections.observability.points.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-200 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <ChevronRight className="w-4 h-4 text-[#4657C8] dark:text-[#8E9BEE] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {project.sections.networking && (
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                    {project.sections.networking.title}
                  </h4>
                  <div className="space-y-2">
                    {project.sections.networking.points.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-gray-50 dark:bg-[#151D2C] text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#168C86] shrink-0 mt-2" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'screenshots' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Direct visual assets and verification artifacts from Keshav&apos;s project repositories. Click any image to view in fullscreen high-resolution.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {project.screenshots?.map((screenshot, index) => (
                  <div
                    key={index}
                    className="flex flex-col rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-[#151D2C] group"
                  >
                    <div
                      className="relative overflow-hidden bg-black/90 cursor-pointer h-48 sm:h-56 flex items-center justify-center p-2"
                      onClick={() =>
                        onOpenDiagram(
                          screenshot.url,
                          screenshot.caption,
                          screenshot.description
                        )
                      }
                    >
                      <img
                        src={screenshot.url}
                        alt={screenshot.caption}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-black/80 text-white text-xs font-medium rounded-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>View Fullscreen</span>
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1">
                      <h5 className="text-sm font-semibold text-gray-900 dark:text-white">
                        {screenshot.caption}
                      </h5>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {screenshot.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-[#151D2C]">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Source code verified against repository manifests.
          </div>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#4657C8] hover:bg-[#3848B0] rounded-xl shadow-sm transition-colors"
            >
              <span>Explore Code on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
