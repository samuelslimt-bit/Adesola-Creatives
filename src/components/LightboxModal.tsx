import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, CheckCircle2, TrendingUp, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBookItem: (clientOrTitle: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onBookItem }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/90 backdrop-blur-md overflow-y-auto">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-[#121212] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-left"
        >
          {/* Top Close Bar */}
          <div className="flex items-center justify-between p-4 px-6 border-b border-neutral-800 bg-neutral-900/80">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E10600]/20 text-[#E10600] border border-[#E10600]/40">
                {item.categoryLabel}
              </span>
              <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                Client: <strong className="text-white">{item.client}</strong>
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 max-h-[80vh] overflow-y-auto">
            {/* Visual Media Container */}
            <div className="lg:col-span-7 bg-black flex items-center justify-center relative min-h-[300px]">
              {item.videoUrl ? (
                <div className="w-full h-full aspect-video lg:aspect-auto min-h-[320px] flex items-center justify-center bg-black relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#E10600] text-white flex items-center justify-center red-glow-lg mb-3">
                      <Film className="w-8 h-8" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">Interactive Video Reel Preview</h4>
                    <p className="text-xs text-neutral-400 max-w-xs mb-4">
                      Shot in crisp 4K 60FPS mobile video format for Instagram Reels & TikTok
                    </p>
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-neutral-900 border border-neutral-700 hover:border-[#E10600] text-white text-xs font-bold rounded-lg flex items-center gap-2"
                    >
                      <span>Watch Full HD Video</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#E10600]" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full min-h-[350px]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            {/* Case Study Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-[#121212] space-y-6">
              <div>
                <h3 className="font-heading font-extrabold text-2xl text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <div className="flex items-center gap-4 text-xs text-neutral-400 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#E10600]" />
                    {item.date}
                  </span>
                  <span>•</span>
                  <span>{item.client}</span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Deliverables List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E10600]" />
                    Project Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {item.deliverables.map((d, idx) => (
                      <li key={idx} className="text-xs text-neutral-300 bg-neutral-900 px-3 py-2 rounded-lg border border-neutral-800">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800 space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onBookItem(`Similar project like: ${item.title}`);
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg red-glow transition-all"
                >
                  Book a Similar Project
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
