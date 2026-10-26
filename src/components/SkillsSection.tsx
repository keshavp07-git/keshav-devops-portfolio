import React, { useState } from 'react';
import {
  Cloud,
  Boxes,
  Terminal,
  GitPullRequest,
  ShieldCheck,
  Activity,
  Network,
  Cpu,
  GitBranch,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    Cloud,
    Boxes,
    Terminal,
    GitPullRequest,
    ShieldCheck,
    Activity,
    Network,
    Cpu,
    GitBranch
  };

  const filters = [
    { id: 'all', label: 'All Technologies' },
    { id: 'cloud', label: 'Cloud & Kubernetes' },
    { id: 'cicd', label: 'CI/CD & GitOps' },
    { id: 'observability', label: 'Observability & DevSecOps' },
    { id: 'systems', label: 'Networking & Systems' }
  ];

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'cloud') {
      return cat.id === 'cloud-aws' || cat.id === 'containers-k8s' || cat.id === 'iac';
    }
    if (selectedFilter === 'cicd') {
      return cat.id === 'cicd-gitops' || cat.id === 'version-control';
    }
    if (selectedFilter === 'observability') {
      return cat.id === 'observability' || cat.id === 'devsecops';
    }
    if (selectedFilter === 'systems') {
      return cat.id === 'networking' || cat.id === 'scripting-os';
    }
    return true;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-gray-200/70 dark:border-gray-800/70 bg-gray-50/50 dark:bg-[#0F172A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Categorized technical stack supported by verified projects.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Real tooling used across my Terraform configurations, Kubernetes manifests, and CI/CD pipelines. No arbitrary percentage bars or speculative ratings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === filter.id
                  ? 'bg-[#4657C8] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1B2435] text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] || Terminal;
            return (
              <div
                key={category.id}
                className="m3-card p-5 sm:p-6 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-50 dark:bg-[#151D2C] text-gray-800 dark:text-gray-200 border border-gray-200/70 dark:border-gray-700/60 hover:border-[#4657C8]/50 dark:hover:border-[#8E9BEE]/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-[11px] text-gray-400 dark:text-gray-500">
                  <span>{category.skills.length} core tools</span>
                  <span className="font-mono uppercase tracking-wider text-[10px]">Verified in Git</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
