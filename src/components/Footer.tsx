import React from 'react';
import { ArrowUp, Instagram, Mail, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-neutral-400 py-16 border-t border-neutral-900 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-block group">
              <Logo size="sm" />
            </a>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              "{BRAND_INFO.tagline}"
            </p>
            <p className="text-xs text-neutral-500">
              Mobile Cinematography • Branding & Graphic Design • Creative Mobile Photography • Social Media Growth
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#hero" className="hover:text-[#E10600] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#E10600] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#E10600] transition-colors">Catalog Gallery</a></li>
              <li><a href="#process" className="hover:text-[#E10600] transition-colors">How We Work</a></li>
              <li><a href="#about" className="hover:text-[#E10600] transition-colors">About Adesola</a></li>
              <li><a href="#packages" className="hover:text-[#E10600] transition-colors">Content Packages</a></li>
              <li><a href="#contact" className="hover:text-[#E10600] transition-colors">Contact & Book</a></li>
            </ul>
          </div>

          {/* Socials & Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E10600]" />
                <span>{BRAND_INFO.phones[0]} / {BRAND_INFO.phones[1]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E10600]" />
                <span>{BRAND_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#E10600]" />
                <span>{BRAND_INFO.instagram}</span>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs text-white flex items-center gap-2 transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#E10600]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Adesola Creatives. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with passion in Lagos, Nigeria 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
