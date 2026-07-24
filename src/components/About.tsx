import React from 'react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/portfolioData';
import { Mic, Video, Camera, Palette, Sparkles, MapPin } from 'lucide-react';
import { Logo } from './Logo';

interface AboutProps {
  onOpenBookModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBookModal }) => {
  const credentials = [
    { title: 'Media Personality', icon: <Mic className="w-4 h-4 text-[#E10600]" />, desc: 'Camera charisma, hosting presence & audience engagement mastery' },
    { title: 'Mobile Cinematography', icon: <Video className="w-4 h-4 text-[#E10600]" />, desc: '4K mobile production, cinematic lighting & speed-edit mastery' },
    { title: 'Branding & Graphic Design', icon: <Palette className="w-4 h-4 text-[#E10600]" />, desc: 'High-converting visual identity & strategic campaign design' },
    { title: 'Creative Mobile Photography', icon: <Camera className="w-4 h-4 text-[#E10600]" />, desc: 'Expressive mobile camera capture with high-grade skin retouching' },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Logo Display Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-8 sm:p-12 shadow-2xl red-border-glow flex flex-col items-center justify-center min-h-[380px]">
              
              {/* Central Logo */}
              <div className="my-auto py-6 text-center">
                <Logo size="lg" showSubtitle />
              </div>

              {/* Floating Studio Info Badge */}
              <div className="w-full bg-neutral-900/90 backdrop-blur-md p-4 rounded-2xl border border-neutral-800 text-left mt-6">
                <div className="font-heading font-black text-lg text-white">
                  {BRAND_INFO.founder}
                </div>
                <div className="text-xs font-semibold text-[#E10600]">
                  Founder & Creative Director • Media Personality
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E10600]" />
                  <span>Studio Base: Lagos, Nigeria (Available Worldwide)</span>
                </div>
              </div>
            </div>

            {/* Accent Glow Circle */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#E10600]/20 rounded-full blur-2xl pointer-events-none" />
          </motion.div>

          {/* Right Column: Creative Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-[#E10600]/30 text-xs font-bold uppercase tracking-widest text-[#E10600] mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>About Adesola Creatives</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Fueled By Pure <span className="text-[#E10600]">Creativity</span> & Artistic Vision.
              </h2>
            </div>

            {/* Detailed Bio Content focusing purely on creativity */}
            <div className="space-y-4 text-base text-neutral-300 leading-relaxed">
              <p>
                Hello, I am <strong className="text-white">{BRAND_INFO.founder}</strong> — a multi-disciplinary creative director, mobile cinematographer, photographer, brand designer, and media personality based in Lagos, Nigeria.
              </p>
              <p>
                At <strong className="text-white">Adesola Creatives</strong>, creativity is not just a service — it is an obsession with visual art, emotional resonance, and high-impact storytelling. I specialize in turning simple concepts into captivating mobile video reels, sleek photography, and strategic branding that commands attention in today's fast-paced digital world.
              </p>
              <p>
                As a seasoned <span className="text-white font-semibold">Media Personality</span>, I combine camera confidence with strategic creative direction. Whether directing a high-energy mobile video shoot, retouching high-resolution portraits, or designing a brand identity, every piece of content is crafted with precision to convert viewers into loyal advocates.
              </p>
            </div>

            {/* Mission Box */}
            <div className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 border-l-4 border-l-[#E10600]">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E10600] mb-1">
                Creative Mission Statement
              </div>
              <p className="text-sm italic text-neutral-200">
                "{BRAND_INFO.mission}"
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {credentials.map((cred, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-black border border-neutral-800 shrink-0">
                    {cred.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{cred.title}</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">{cred.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenBookModal}
                className="px-8 py-4 rounded-xl bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg red-glow transition-all"
              >
                Work Directly With Adesola
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
