import React from 'react';
import {
  ArrowRight,
  FileText,
  Mail,
  ShieldCheck,
  Server,
  Layers,
  Terminal,
  RefreshCw,
  Cpu,
  MapPin
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

interface HeroSectionProps {
  onRequestResume: () => void;
  onExploreProjects: () => void;
  onOpenDiagram: (imageUrl: string, title: string, desc?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestResume,
  onExploreProjects,
  onOpenDiagram
}) => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#4657C8]/10 via-[#168C86]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE] border border-[#4657C8]/20">
              <span className="w-2 h-2 rounded-full bg-[#4657C8] animate-pulse" />
              <span>JUNIOR DEVOPS / CLOUD ENGINEER</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15]">
              Building reliable cloud infrastructure and{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4657C8] via-[#2F44BD] to-[#168C86]">
                automated delivery pipelines.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Keshav Prajapati</span>, a BCA graduate focused on AWS, Kubernetes, Infrastructure as Code, CI/CD automation, GitOps, DevSecOps, and observability. I build hands-on projects to explore reliable, secure, and repeatable cloud deployments.
            </p>

            {/* Location & Status Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs text-gray-600 dark:text-gray-400">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-[#1B2435] border border-gray-200 dark:border-gray-800 rounded-lg shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-[#168C86]" />
                <span>Lucknow, UP, India</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#168C86]/10 text-[#168C86] dark:bg-[#168C86]/20 dark:text-[#38B2AC] font-semibold rounded-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#168C86]" />
                <span>Open to relocation</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-[#1B2435] border border-gray-200 dark:border-gray-800 rounded-lg shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8A23A]" />
                <span>AWS SAA-C03 (In Progress)</span>
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <button
                onClick={onExploreProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#4657C8] hover:bg-[#3848B0] active:scale-[0.98] rounded-xl shadow-lg shadow-[#4657C8]/25 transition-all cursor-pointer"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onRequestResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-[#1B2435] hover:bg-gray-50 dark:hover:bg-[#202B3D] border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#4657C8] dark:text-[#8E9BEE]" />
                <span>Request Resume</span>
              </button>
            </div>

            {/* Real Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="Visit GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-gray-800 dark:text-gray-200" />
                <span>GitHub Profile</span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-[#0A66C2] dark:hover:text-[#70B5F9] transition-colors"
                title="Visit LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-[#4657C8] dark:hover:text-[#8E9BEE] transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 text-[#4657C8] dark:text-[#8E9BEE]" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Cloud-Native Architecture Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="m3-card p-6 space-y-5 bg-white dark:bg-[#1B2435] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl">
                {/* Header of widget */}
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE]">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                        Platform Architecture Highlights
                      </h3>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400">
                        Amazon EKS • GitOps • IaC • DevSecOps
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    VERIFIED
                  </span>
                </div>

                {/* Architecture Preview Frame */}
                <div
                  onClick={() =>
                    onOpenDiagram(
                      '/assets/gitops-eks-architecture.png',
                      'GitOps-Driven Microservices Platform on AWS EKS',
                      '11 Microservices, GitHub Actions CI matrix, Argo CD Image Updater, AWS private EKS, Gateway API, and Observability.'
                    )
                  }
                  className="relative group cursor-pointer overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-950 h-44 flex items-center justify-center p-2 shadow-inner"
                >
                  <img
                    src="/assets/gitops-eks-architecture.png"
                    alt="GitOps Platform Architecture"
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="px-3 py-1.5 rounded-lg bg-black/80 text-white text-xs font-medium backdrop-blur-xs flex items-center gap-1.5">
                      <span>Click to view full diagram</span>
                    </span>
                  </div>
                </div>

                {/* Key Technical Pillars */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-100 dark:border-gray-800 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white">
                      <Terminal className="w-3.5 h-3.5 text-[#4657C8]" />
                      <span>Terraform IaC</span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      VPC, EKS, Bastion host, S3 remote state & locking
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-100 dark:border-gray-800 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white">
                      <RefreshCw className="w-3.5 h-3.5 text-[#168C86]" />
                      <span>Argo CD GitOps</span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      Declarative sync, self-healing, Image Updater
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-100 dark:border-gray-800 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E8A23A]" />
                      <span>DevSecOps</span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      SonarQube quality gates, Trivy image & fs scans
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-100 dark:border-gray-800 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white">
                      <Cpu className="w-3.5 h-3.5 text-blue-500" />
                      <span>Observability</span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400">
                      Prometheus, Grafana, Slack alerts & ELK stack
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
