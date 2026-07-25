import React from 'react';
import { motion } from 'motion/react';
import { Play, ArrowRight, Camera, CheckCircle, Video, Award, MapPin } from 'lucide-react';
import { BRAND_INFO, TRUST_STATS, heroBgImg } from '../data/portfolioData';

interface HeroProps {
  onOpenBookModal: () => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookModal }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#0D0D0D]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Adesola Creatives Studio Background"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient opacity-80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-[#E10600]/40 text-xs font-semibold text-neutral-200 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#E10600] animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-[#E10600]" />
              <span>Based in Lagos, Nigeria • Available Worldwide</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
                Your Story. Our Lens.{' '}
                <span className="text-[#E10600] block mt-1 sm:inline">
                  Bold Content That Converts.
                </span>
              </h1>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed"
            >
              High-converting mobile cinematography, creative mobile photography, branding & graphic design, and social media growth for visionary brands, event owners, creators, and entrepreneurs worldwide.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#portfolio"
                className="px-8 py-4 rounded-xl bg-neutral-900 keep-dark hover:bg-neutral-800 border border-neutral-700 hover:border-[#E10600]/60 text-white keep-white font-bold text-sm tracking-wide uppercase flex items-center justify-center gap-2 transition-all hover:shadow-lg group"
              >
                <span className="keep-white">View Catalog</span>
                <ArrowRight className="w-4 h-4 text-[#E10600] group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenBookModal}
                className="px-8 py-4 rounded-xl bg-[#E10600] hover:bg-red-700 text-white keep-white font-bold text-sm tracking-wide uppercase shadow-xl red-glow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Camera className="w-4 h-4 text-white keep-white" />
                <span className="keep-white">Book a Session</span>
              </button>
            </motion.div>

            {/* Mini Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-neutral-400 border-t border-neutral-800/80"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#E10600]" />
                <span>4K Mobile Video Reels</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#E10600]" />
                <span>24H-48H Express Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#E10600]" />
                <span>Custom Negotiable Quotes</span>
              </div>
            </motion.div>
          </div>

          {/* Reel Video Showcase Card / Reel Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/80 p-3 shadow-2xl red-border-glow">
              {/* Top Bar */}
              <div className="flex items-center justify-between mb-3 px-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#E10600]" />
                  <span className="text-xs font-mono text-neutral-300">STUDIO SHOWREEL 2026</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-800 text-neutral-300 border border-neutral-700 font-mono">
                  4K 60FPS
                </span>
              </div>

              {/* Showreel Preview Container */}
              <div className="relative aspect-[9/16] max-h-[460px] w-full rounded-xl overflow-hidden bg-black group">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
                  alt="Adesola Mobile Cinematography Reel Preview"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                {/* Center Play Button */}
                <a
                  href="#portfolio"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/play cursor-pointer"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E10600] text-white flex items-center justify-center shadow-2xl red-glow-lg group-hover/play:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-white ml-1 text-white keep-white" />
                  </div>
                  <span className="px-3 py-1 bg-black/80 keep-dark backdrop-blur-md rounded-full text-xs font-semibold text-white keep-white border border-neutral-700">
                    Watch Featured Work
                  </span>
                </a>

                {/* Reel Floating Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-left">
                  <div>
                    <div className="text-[11px] text-gray-300 keep-white font-mono">
                      Mobile Cinematography & Photography
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#E10600]">
                      3.5M+ Views
                    </div>
                    <div className="text-[10px] text-gray-300 keep-white">
                      Reels & TikTok
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-neutral-800">
          {TRUST_STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-4 sm:p-6 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-[#E10600]/50 transition-all text-left"
            >
              <div className="font-heading font-black text-2xl sm:text-3xl text-white">
                <span className="text-[#E10600]">{stat.value}</span>
              </div>
              <div className="font-bold text-sm text-neutral-200 mt-1">{stat.label}</div>
              <div className="text-xs text-neutral-400 mt-1 hidden sm:block line-clamp-2">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Trust Banner */}
        <div className="mt-10 pt-6 border-t border-neutral-900 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Trusted by Visionary Brands, Event Owners & Entrepreneurs Worldwide
          </p>
        </div>
      </div>
    </section>
  );
};
