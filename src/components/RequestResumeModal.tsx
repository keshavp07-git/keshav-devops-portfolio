import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Mail, Building, User, MessageSquare, AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';

interface RequestResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail?: string;
}

export const RequestResumeModal: React.FC<RequestResumeModalProps> = ({
  isOpen,
  onClose,
  recipientEmail = 'keshav.prajapati830@gmail.com'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [composeInitiated, setComposeInitiated] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [gmailUrl, setGmailUrl] = useState('');

  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => firstInputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
      setErrors({});
      setComposeInitiated(false);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    }
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `Resume Request — ${name.trim()}`;
    const bodyLines = [
      'Hello Keshav,',
      '',
      'I would like to request a copy of your resume.',
      '',
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Company / Organization: ${company.trim() || 'Not specified'}`,
      '',
      'Message:',
      message.trim() ? message.trim() : 'No additional message provided.',
      '',
      'Thank you.'
    ];
    const body = bodyLines.join('\n');

    // Build properly URL-encoded URLs
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const encodedRecipient = encodeURIComponent(recipientEmail);

    const fullGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedRecipient}&su=${encodedSubject}&body=${encodedBody}`;
    const fullMailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    setGmailUrl(fullGmailUrl);
    setMailtoUrl(fullMailtoUrl);
    setComposeInitiated(true);

    // Attempt to open Gmail compose window in a new tab
    const newWindow = window.open(fullGmailUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback: if popup is blocked, trigger mailto protocol
      window.location.href = fullMailtoUrl;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-resume-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white dark:bg-[#1B2435] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-7 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE]">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <h2
              id="request-resume-title"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              Request My Resume
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Direct inquiry to Keshav Prajapati
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 mb-5">
          To ensure tailored conversations, I share my updated resume directly via email. Submitting this form prepares an email request with your details.
        </p>

        {composeInitiated ? (
          <div className="space-y-4 py-2 animate-in fade-in duration-300">
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-900 dark:text-blue-200 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-blue-900 dark:text-blue-100">
                    Email Compose Window Opened
                  </p>
                  <p className="text-xs text-blue-800 dark:text-blue-300">
                    A pre-filled Gmail draft has been generated for you. Please hit <strong>Send</strong> in your email client to dispatch the request to <code>{recipientEmail}</code>.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-3.5 bg-gray-50 dark:bg-[#151D2C] border border-gray-200 dark:border-gray-800 rounded-xl text-xs text-gray-600 dark:text-gray-400 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Didn't see the window open?</span>
              </div>
              <p>Popups may have been restricted by your browser. Use the direct links below:</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#4657C8] text-white rounded-lg text-xs font-medium hover:bg-[#3848B0] transition-colors"
                >
                  <span>Open in Gmail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-[#202B3D] border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-lg text-xs font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span>Default Email Client</span>
                  <Mail className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Full Name */}
            <div>
              <label
                htmlFor="visitor-name"
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  ref={firstInputRef}
                  id="visitor-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white dark:bg-[#151D2C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-400/30'
                      : 'border-gray-300 dark:border-gray-700 focus:border-[#4657C8] focus:ring-[#4657C8]/20'
                  }`}
                  required
                />
              </div>
              {errors.name && (
                <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="visitor-email"
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Your Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  id="visitor-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="e.g. sjenkins@company.com"
                  className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white dark:bg-[#151D2C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-400/30'
                      : 'border-gray-300 dark:border-gray-700 focus:border-[#4657C8] focus:ring-[#4657C8]/20'
                  }`}
                  required
                />
              </div>
              {errors.email && (
                <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Company / Organization (Optional) */}
            <div>
              <label
                htmlFor="visitor-company"
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Company / Organization <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  id="visitor-company"
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. CloudTech Inc."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151D2C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#4657C8] focus:ring-2 focus:ring-[#4657C8]/20 transition-all"
                />
              </div>
            </div>

            {/* Message (Optional) */}
            <div>
              <label
                htmlFor="visitor-message"
                className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5"
              >
                Message or Role Details <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <textarea
                  id="visitor-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a bit about the role, team, or opportunity..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#151D2C] text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#4657C8] focus:ring-2 focus:ring-[#4657C8]/20 transition-all resize-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-200 dark:border-gray-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-[#4657C8] hover:bg-[#3848B0] active:scale-[0.98] rounded-xl shadow-md shadow-[#4657C8]/20 transition-all"
              >
                <span>Send Resume Request</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
