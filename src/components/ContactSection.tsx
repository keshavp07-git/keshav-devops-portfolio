import React from 'react';
import { Mail, Phone, MapPin, FileText, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  onRequestResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRequestResume }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-gray-200/70 dark:border-gray-800/70 bg-gradient-to-b from-transparent to-gray-50/70 dark:to-[#0F172A]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Ready to contribute to reliable cloud infrastructure.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400">
            I am actively interviewing for Junior DevOps and Junior Cloud Engineer positions. Open to on-site, hybrid, or remote roles with relocation availability.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="m3-card p-6 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#4657C8] dark:hover:border-[#8E9BEE] group transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE] w-fit group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Email Me
                </span>
                <p className="text-sm font-semibold text-gray-900 dark:text-white break-all mt-0.5">
                  {personalInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#4657C8] dark:text-[#8E9BEE]">
              <span>Open email client</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Phone Card */}
          <a
            href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
            className="m3-card p-6 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#168C86] dark:hover:border-[#38B2AC] group transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#168C86]/10 text-[#168C86] dark:bg-[#168C86]/20 dark:text-[#38B2AC] w-fit group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Direct Phone
                </span>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5">
                  {personalInfo.phone}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#168C86] dark:text-[#38B2AC]">
              <span>Call direct</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="m3-card p-6 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl flex flex-col justify-between space-y-4 hover:border-gray-400 dark:hover:border-gray-600 group transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white w-fit group-hover:scale-105 transition-transform">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  GitHub Profile
                </span>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5">
                  keshavp07-git
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <span>View repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="m3-card p-6 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#0A66C2] dark:hover:border-[#70B5F9] group transition-all"
          >
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#0A66C2] dark:text-[#70B5F9] w-fit group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  LinkedIn Network
                </span>
                <p className="text-sm font-semibold text-gray-900 dark:text-white mt-0.5">
                  keshav-prajapati
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#0A66C2] dark:text-[#70B5F9]">
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>

        {/* Location & Request Resume Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#4657C8]/10 via-[#168C86]/10 to-transparent border border-[#4657C8]/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4657C8] dark:text-[#8E9BEE]">
              <MapPin className="w-4 h-4" />
              <span>CURRENT BASE: {personalInfo.location}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Need a copy of my resume for an upcoming interview loop?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              Submit your inquiry and I will share my verified PDF resume directly with your team.
            </p>
          </div>

          <button
            onClick={onRequestResume}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#4657C8] hover:bg-[#3848B0] active:scale-[0.98] rounded-xl shadow-lg shadow-[#4657C8]/25 transition-all cursor-pointer shrink-0"
          >
            <FileText className="w-4 h-4" />
            <span>Request Resume Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};
