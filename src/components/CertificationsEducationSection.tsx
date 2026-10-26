import React from 'react';
import { Award, GraduationCap, ExternalLink, Calendar, MapPin, CheckCircle, Clock } from 'lucide-react';
import { certifications, education } from '../data/portfolioData';

export const CertificationsEducationSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 sm:py-24 border-t border-gray-200/70 dark:border-gray-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Certifications (Left/Top) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE]">
                <Award className="w-3.5 h-3.5" />
                <span>CERTIFICATIONS & TRAINING</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Verified Credentials & Learning
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Official certificates and current active coursework. Status is transparently stated.
              </p>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="m3-card p-5 sm:p-6 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl shrink-0 ${
                        cert.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                          : 'bg-amber-50 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400'
                      }`}
                    >
                      {cert.status === 'Completed' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Clock className="w-5 h-5" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                            cert.status === 'Completed'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300'
                              : 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300'
                          }`}
                        >
                          {cert.status === 'Completed' ? 'Completed' : 'In Progress'}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {cert.issuer}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white">
                        {cert.name}
                      </h3>
                      {cert.credentialId && (
                        <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </div>

                  {cert.certificateUrl && (
                    <div className="sm:self-center shrink-0">
                      <a
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#4657C8] dark:text-[#8E9BEE] bg-[#4657C8]/10 hover:bg-[#4657C8]/20 dark:bg-[#4657C8]/20 dark:hover:bg-[#4657C8]/30 rounded-xl transition-colors"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education (Right/Bottom) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#168C86]/10 text-[#168C86] dark:bg-[#168C86]/20 dark:text-[#38B2AC]">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>FORMAL EDUCATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Academic Background
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Foundational computer applications degree.
              </p>
            </div>

            <div className="m3-card p-6 bg-white dark:bg-[#1B2435] border border-gray-200/90 dark:border-gray-800 rounded-2xl shadow-sm space-y-4">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-medium text-[#4657C8] dark:text-[#8E9BEE]">
                  BACHELOR&apos;S DEGREE
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {education.institution}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-gray-500 dark:text-gray-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#168C86]" />
                  <span>{education.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#168C86]" />
                  <span>{education.location}</span>
                </div>
              </div>

              {education.highlights && (
                <div className="space-y-2 pt-3 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300">
                  {education.highlights.map((h, i) => (
                    <p key={i} className="leading-relaxed">
                      • {h}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
