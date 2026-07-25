import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye, Play, Film, Camera, Palette, TrendingUp, Layers } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/portfolioData';
import { PortfolioItem, ServiceCategory } from '../types';
import { LightboxModal } from './LightboxModal';

interface PortfolioProps {
  onOpenBookModal: (serviceTitle: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenBookModal }) => {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filterTabs: { id: ServiceCategory | 'all'; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Catalog', icon: <Layers className="w-4 h-4" /> },
    { id: 'video', label: 'Mobile Cinematography', icon: <Film className="w-4 h-4" /> },
    { id: 'design', label: 'Branding & Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'photography', label: 'Mobile Photography', icon: <Camera className="w-4 h-4" /> },
    { id: 'social', label: 'Social Media', icon: <TrendingUp className="w-4 h-4" /> },
  ];

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-[#E10600]/30 text-xs font-bold uppercase tracking-widest text-[#E10600] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Catalog & Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Explore Our <span className="text-[#E10600]">Catalog</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-400"
          >
            Browse selected 4K mobile cinematography reels, retouched mobile photography, branding & graphic design, and social media campaigns.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-[#E10600] text-white keep-white shadow-lg red-glow scale-105'
                  : 'bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {tab.icon}
              <span className={activeFilter === tab.id ? 'keep-white' : ''}>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-[#E10600] cursor-pointer shadow-xl red-border-glow text-left flex flex-col justify-between"
              >
                {/* Image / Thumbnail */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 keep-dark backdrop-blur-md text-white keep-white border border-neutral-700">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Play icon indicator if video */}
                  {item.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-[#E10600]/90 text-white keep-white flex items-center justify-center shadow-lg red-glow group-hover:scale-125 transition-transform">
                        <Play className="w-6 h-6 fill-white text-white keep-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Quick View Hover Overlay Button */}
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="px-3 py-1.5 rounded-lg bg-[#E10600] text-white keep-white text-xs font-bold flex items-center gap-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5 text-white keep-white" />
                      <span className="keep-white">View Project Details</span>
                    </div>
                  </div>
                </div>

                {/* Content Footer */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <div className="text-[11px] font-mono text-[#E10600] font-semibold uppercase mb-1">
                      {item.client}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#E10600] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onBookItem={onOpenBookModal}
        />
      </div>
    </section>
  );
};
