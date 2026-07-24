import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const waMessage = encodeURIComponent(
    'Hello Adesola Creatives! I saw your portfolio website and would like to inquire about your mobile cinematography and creative services.'
  );
  const waUrl = `https://wa.me/${BRAND_INFO.whatsappPrimary}?text=${waMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Tooltip Popup */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="mb-3 max-w-xs bg-[#181818] border border-neutral-700 rounded-2xl p-3.5 shadow-2xl text-left text-xs text-white relative"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-neutral-400 hover:text-white"
              aria-label="Dismiss chat tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-emerald-400 text-[11px]">Online • Fast Response</span>
            </div>
            <p className="text-neutral-200">
              Need a quick quote or shoot availability in Lagos? Chat directly with Adesola!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#E10600]"></span>
        </span>
      </a>
    </div>
  );
};
