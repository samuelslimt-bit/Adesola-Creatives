import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenBookModal: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenBookModal }) => {
  return (
    <section id="process" className="py-24 bg-[#080808] relative overflow-hidden border-t border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-[#E10600]/30 text-xs font-bold uppercase tracking-widest text-[#E10600] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Execution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            How We Work: <span className="text-[#E10600]">4-Step Blueprint</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-400"
          >
            No guesswork. No agency delays. A battle-tested workflow designed for speed, clarity, and maximum creative output.
          </motion.p>
        </div>

        {/* Timeline Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-2xl bg-neutral-900/80 border border-neutral-800 p-6 flex flex-col justify-between hover:border-[#E10600]/60 transition-all text-left group"
            >
              <div>
                {/* Big Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-heading font-black text-4xl text-[#E10600]/80 group-hover:text-[#E10600] transition-colors">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-500 px-2.5 py-1 rounded bg-black border border-neutral-800">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {step.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#E10600] uppercase tracking-wider mb-4">
                  {step.subtitle}
                </h4>

                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Sub-deliverables */}
              <div className="pt-4 border-t border-neutral-800 space-y-2">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E10600] shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookModal}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-xl red-glow hover:scale-105 transition-all"
          >
            <span>Start Step 1: Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
