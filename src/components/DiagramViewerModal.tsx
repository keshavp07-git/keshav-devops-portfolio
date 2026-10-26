import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ExternalLink, Maximize2 } from 'lucide-react';

interface DiagramViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  description?: string;
  githubUrl?: string;
}

export const DiagramViewerModal: React.FC<DiagramViewerModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  description,
  githubUrl
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

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
      setZoomLevel(1);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagram-modal-title"
    >
      <div
        className="relative flex flex-col w-full max-w-6xl max-h-[92vh] bg-white dark:bg-[#1B2435] rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50/70 dark:bg-[#151D2C]">
          <div className="flex items-center gap-3 pr-4 min-w-0">
            <div className="p-2 rounded-lg bg-[#4657C8]/10 text-[#4657C8] dark:bg-[#4657C8]/20 dark:text-[#8E9BEE]">
              <Maximize2 className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3
                id="diagram-modal-title"
                className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate"
              >
                {title}
              </h3>
              {description && (
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                  {description}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center bg-white dark:bg-[#202B3D] border border-gray-200 dark:border-gray-700 rounded-lg p-1 shadow-sm">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 0.75}
                className="p-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded disabled:opacity-40 transition-colors"
                title="Zoom Out"
                aria-label="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="px-2 text-xs font-mono font-medium text-gray-600 dark:text-gray-300 min-w-12 text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                className="p-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded disabled:opacity-40 transition-colors"
                title="Zoom In"
                aria-label="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-1.5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded ml-1 transition-colors"
                title="Reset Zoom"
                aria-label="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-[#202B3D] border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewport with scroll and zoom */}
        <div className="relative flex-1 p-4 sm:p-6 overflow-auto bg-gray-950 flex items-center justify-center min-h-[350px]">
          <div
            className="transition-transform duration-150 ease-out flex items-center justify-center"
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
          >
            <img
              src={imageUrl}
              alt={title}
              className="max-w-full max-h-[70vh] object-contain rounded-md shadow-lg select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* Footer controls for mobile */}
        <div className="flex sm:hidden items-center justify-between px-4 py-3 bg-gray-50 dark:bg-[#151D2C] border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <button
              onClick={handleZoomOut}
              className="p-2 bg-white dark:bg-[#202B3D] border border-gray-200 dark:border-gray-700 rounded-md"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 font-mono">{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={handleZoomIn}
              className="p-2 bg-white dark:bg-[#202B3D] border border-gray-200 dark:border-gray-700 rounded-md"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          </div>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#4657C8] dark:text-[#8E9BEE] font-medium"
            >
              <span>View Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
