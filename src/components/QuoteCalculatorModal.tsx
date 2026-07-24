import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calculator, Send } from 'lucide-react';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookEstimatedPackage: (details: string) => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  onBookEstimatedPackage,
}) => {
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>({
    reels: true,
    photography: true,
    graphics: false,
    management: false,
  });

  const [reelCount, setReelCount] = useState(4);
  const [shootDuration, setShootDuration] = useState<'half' | 'full' | 'multi'>('half');

  if (!isOpen) return null;

  const toggleService = (key: string) => {
    setSelectedServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const selectedList = Object.keys(selectedServices)
    .filter((k) => selectedServices[k])
    .map((k) => {
      if (k === 'reels') return `${reelCount}x Mobile Video Reels`;
      if (k === 'photography') return 'Creative Mobile Photography';
      if (k === 'graphics') return 'Branding & Graphic Design';
      if (k === 'management') return 'Social Media Management';
      return k;
    })
    .join(', ');

  const handleApplyEstimate = () => {
    const summary = `Custom Scope: ${selectedList || 'Custom Project'} (${
      shootDuration === 'half' ? 'Half-Day Shoot' : shootDuration === 'full' ? 'Full-Day Shoot' : 'Multi-Day Campaign'
    })`;
    onBookEstimatedPackage(summary);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-[#121212] border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 text-left"
        >
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#E10600]" />
              <h3 className="font-heading font-extrabold text-xl text-white">
                Custom Project Builder
              </h3>
            </div>
            <button onClick={onClose} className="p-1 text-neutral-400 hover:text-white rounded-lg">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6 text-sm text-neutral-300">
            {/* Service Selection Toggles */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                1. Select Desired Capabilities:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => toggleService('reels')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                    selectedServices.reels
                      ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  <span className="font-semibold text-xs">Mobile Video Reels</span>
                  {selectedServices.reels && <Check className="w-4 h-4 text-[#E10600]" />}
                </button>

                <button
                  type="button"
                  onClick={() => toggleService('photography')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                    selectedServices.photography
                      ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  <span className="font-semibold text-xs">Mobile Photography</span>
                  {selectedServices.photography && <Check className="w-4 h-4 text-[#E10600]" />}
                </button>

                <button
                  type="button"
                  onClick={() => toggleService('graphics')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                    selectedServices.graphics
                      ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  <span className="font-semibold text-xs">Branding & Graphic Design</span>
                  {selectedServices.graphics && <Check className="w-4 h-4 text-[#E10600]" />}
                </button>

                <button
                  type="button"
                  onClick={() => toggleService('management')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-colors ${
                    selectedServices.management
                      ? 'bg-[#E10600]/10 border-[#E10600] text-white'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  <span className="font-semibold text-xs">Social Media Management</span>
                  {selectedServices.management && <Check className="w-4 h-4 text-[#E10600]" />}
                </button>
              </div>
            </div>

            {/* Slider for Reels Count if Reels enabled */}
            {selectedServices.reels && (
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-neutral-300 mb-2">
                  <span>Number of 4K Mobile Video Reels:</span>
                  <span className="text-[#E10600] font-heading font-black text-sm">{reelCount} Reels</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="2"
                  value={reelCount}
                  onChange={(e) => setReelCount(parseInt(e.target.value))}
                  className="w-full accent-[#E10600] cursor-pointer"
                />
              </div>
            )}

            {/* Duration */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                2. Shoot / Production Scope:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setShootDuration('half')}
                  className={`py-2 px-3 rounded-lg border text-center font-semibold ${
                    shootDuration === 'half' ? 'bg-[#E10600] text-white border-[#E10600]' : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  Half-Day Shoot
                </button>
                <button
                  type="button"
                  onClick={() => setShootDuration('full')}
                  className={`py-2 px-3 rounded-lg border text-center font-semibold ${
                    shootDuration === 'full' ? 'bg-[#E10600] text-white border-[#E10600]' : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  Full-Day Shoot
                </button>
                <button
                  type="button"
                  onClick={() => setShootDuration('multi')}
                  className={`py-2 px-3 rounded-lg border text-center font-semibold ${
                    shootDuration === 'multi' ? 'bg-[#E10600] text-white border-[#E10600]' : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                  }`}
                >
                  Multi-Day Campaign
                </button>
              </div>
            </div>

            {/* Selected Summary */}
            <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-left space-y-1">
              <span className="text-[10px] font-bold text-[#E10600] uppercase tracking-widest block">
                Selected Scope Summary:
              </span>
              <div className="font-heading font-bold text-sm text-white">
                {selectedList || 'Custom Project Package'}
              </div>
              <p className="text-[11px] text-neutral-400 mt-1">
                Pricing is fully negotiable based on shoot location, complexity, and specific requirements.
              </p>
            </div>

            {/* Submit */}
            <button
              onClick={handleApplyEstimate}
              className="w-full py-3.5 px-4 rounded-xl bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg red-glow flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Negotiable Quote</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
