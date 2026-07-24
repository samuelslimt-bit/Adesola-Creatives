import React from 'react';
import { motion } from 'motion/react';
import { Video, Camera, Palette, TrendingUp, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenBookModal: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBookModal }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-[#E10600]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#E10600]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#E10600]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#E10600]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E10600]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E10600]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-3xl pointer-events-none" />

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
            <span>Core Creative Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Visual Solutions Engineered to <span className="text-[#E10600]">Convert</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-400"
          >
            From high-energy mobile video reels to brand graphics and end-to-end social media growth, we craft visuals that capture attention and drive real business revenue.
          </motion.p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 flex flex-col justify-between hover:border-[#E10600] hover:shadow-2xl transition-all duration-300 red-border-glow"
            >
              <div>
                {/* Header with Icon and Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-black border border-neutral-800 group-hover:border-[#E10600] flex items-center justify-center transition-colors shadow-inner">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-full bg-[#E10600]/10 border border-[#E10600]/30 text-[11px] font-semibold text-[#E10600]">
                      Custom Quote
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#E10600] transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Feature Bullet List */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-800/80 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300 block mb-2">
                    What's Included:
                  </span>
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#E10600] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="pt-4 border-t border-neutral-800">
                <button
                  onClick={() => onOpenBookModal(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-black hover:bg-[#E10600] border border-neutral-700 hover:border-[#E10600] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 group/btn transition-all shadow-md"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sub-banner CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border border-neutral-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-heading font-bold text-xl text-white">
              Need a Custom Multi-Service Package?
            </h4>
            <p className="text-sm text-neutral-400 mt-1">
              Combine Mobile Cinematography, Photography, and Graphic Design for your upcoming event or campaign.
            </p>
          </div>
          <button
            onClick={() => onOpenBookModal('Custom Multi-Service Bundle')}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg red-glow transition-all"
          >
            Get Custom Bundle Quote
          </button>
        </div>
      </div>
    </section>
  );
};
