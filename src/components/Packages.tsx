import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PACKAGES } from '../data/portfolioData';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface PackagesProps {
  onOpenBookModal: (packageName: string) => void;
  onOpenQuoteModal: () => void;
}

export const Packages: React.FC<PackagesProps> = ({ onOpenBookModal, onOpenQuoteModal }) => {
  return (
    <section id="packages" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-[#E10600]/30 text-xs font-bold uppercase tracking-widest text-[#E10600] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customizable Content Packs</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Invest in <span className="text-[#E10600]">Content That Converts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-400"
          >
            Flexible content packages tailored to your brand goals. All quotes are negotiable and customized to match your exact project scope.
          </motion.p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between text-left transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-neutral-900 via-black to-neutral-900 border-2 border-[#E10600] red-glow-lg scale-105 z-10'
                  : 'bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Most Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#E10600] text-white text-xs font-extrabold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="mb-6">
                  <h3 className="font-heading font-extrabold text-2xl text-white mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-neutral-400 min-h-[32px] leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Label Display */}
                <div className="mb-6 pb-6 border-b border-neutral-800">
                  <div className="font-heading font-black text-2xl sm:text-3xl text-white flex items-baseline gap-2">
                    <span className="text-[#E10600]">{pkg.pricingLabel}</span>
                  </div>
                  <div className="text-xs text-neutral-400 font-mono mt-1">
                    Turnaround: <strong className="text-neutral-200">{pkg.turnaround}</strong>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    Features Included:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <div className="p-0.5 rounded-full bg-[#E10600]/20 text-[#E10600] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-neutral-800 space-y-3">
                <button
                  onClick={() => onOpenBookModal(`Package: ${pkg.name}`)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.popular
                      ? 'bg-[#E10600] hover:bg-red-700 text-white keep-white red-glow hover:scale-105'
                      : 'bg-black keep-dark hover:bg-neutral-800 border border-neutral-700 text-white keep-white'
                  }`}
                >
                  <span className="keep-white">Request Quote for {pkg.name}</span>
                  <ArrowRight className="w-4 h-4 text-white keep-white" />
                </button>

                <div className="text-[11px] text-center text-neutral-500 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Best for: {pkg.bestFor}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Estimate Trigger */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-400">
            Have a custom event, shoot idea, or specific budget preference?{' '}
            <button
              onClick={onOpenQuoteModal}
              className="text-[#E10600] font-bold hover:underline inline-flex items-center gap-1"
            >
              Use our interactive project builder →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
