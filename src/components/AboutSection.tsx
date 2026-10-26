import React from 'react';
import {
  Server,
  Terminal,
  ShieldCheck,
  RefreshCw,
  Activity,
  GraduationCap,
  Award,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { personalInfo, education, certifications } from '../data/portfolioData';

interface AboutSectionProps {
  onRequestResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onRequestResume }) => {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-gray-200/70 dark:border-gray-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#168C86]/10 text-[#168C86] dark:bg-[#168C86]/20 dark:text-[#38B2AC] mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Practical infrastructure engineer dedicated to declarative automation.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Self-directed projects grounded in real cloud architectures, Infrastructure as Code, and pull-based delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I am an aspiring DevOps and Cloud Engineer with a Bachelor of Computer Applications (BCA) degree from Shri Ramswaroop Memorial University. Rather than relying purely on theoretical concepts, I have focused my efforts on building, configuring, and testing end-to-end cloud platforms hands-on.
            </p>

            <p>
              My self-directed projects concentrate on realistic operational concerns: provisioning modular AWS infrastructure with <strong className="text-gray-900 dark:text-white font-semibold">Terraform</strong> (using remote S3 state and locking), deploying multi-service polyglot architectures to <strong className="text-gray-900 dark:text-white font-semibold">Amazon EKS</strong>, and implementing pure <strong className="text-gray-900 dark:text-white font-semibold">GitOps delivery</strong> with Argo CD and automated image updaters.
            </p>

            <p>
              In CI/CD, I write and maintain automated pipelines across both <strong className="text-gray-900 dark:text-white font-semibold">GitHub Actions</strong> and <strong className="text-gray-900 dark:text-white font-semibold">Jenkins</strong>. Every build incorporates security gates — including static code analysis with <strong className="text-gray-900 dark:text-white font-semibold">SonarQube</strong> and container vulnerability scanning with <strong className="text-gray-900 dark:text-white font-semibold">Aqua Trivy</strong>.
            </p>

            <p>
              I am actively preparing for the <strong className="text-gray-900 dark:text-white font-semibold">AWS Solutions Architect Associate (SAA-C03)</strong> certification and am seeking an entry-level DevOps or Cloud Engineer opportunity where I can contribute reliable automation, learn from experienced mentors, and take ownership of delivery workflows.
            </p>

            <div className="pt-2">
              <button
                onClick={onRequestResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#4657C8] hover:bg-[#3848B0] rounded-xl shadow-md shadow-[#4657C8]/20 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request Updated Resume</span>
              </button>
            </div>
          </div>

          {/* Quick Info & Highlights Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            {/* Education Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1B2435] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Formal Education
                  </h3>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {education.degree}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {education.institution} • {education.duration}
              </p>
            </div>

            {/* Certifications Snapshot Card */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1B2435] border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#168C86]/10 text-[#168C86] dark:bg-[#168C86]/20 dark:text-[#38B2AC]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Certifications & Training
                  </h3>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    AWS & DevOps Credentials
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                {certifications.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-[#151D2C] border border-gray-100 dark:border-gray-800 text-xs"
                  >
                    <span className="font-medium text-gray-800 dark:text-gray-200 truncate pr-2">
                      {c.name}
                    </span>
                    <span
                      className={`shrink-0 px-2 py-0.5 rounded text-[10px] font-semibold ${
                        c.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Principles */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1B2435] border border-gray-200 dark:border-gray-800 shadow-sm space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                Core Engineering Tenets
              </h3>
              <div className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                <span>Zero write credentials in CI: Pull-based GitOps with Argo CD.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                <span>Repeatable infrastructure: All cloud resources defined in Terraform.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                <span>Shift-left security: SonarQube quality gates and Trivy image scanning.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-gray-700 dark:text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-[#168C86] shrink-0 mt-0.5" />
                <span>Cost consciousness: Automated cleanup scripts and teardown pipelines.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
