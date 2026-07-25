import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, Sparkles, MessageSquare, Eye } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { Logo } from './Logo';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onOpenBookModal: (serviceOrPackage?: string) => void;
  onOpenQuoteModal: () => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenBookModal,
  onOpenQuoteModal,
  isHighContrast,
  onToggleHighContrast,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'portfolio', name: 'Catalog' },
    { id: 'process', name: 'Process' },
    { id: 'about', name: 'About' },
    { id: 'packages', name: 'Packages' },
    { id: 'contact', name: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onSelectTab(id);

    // Scroll to target element
    setTimeout(() => {
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-neutral-800/80 py-2 shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNavClick('hero')} className="flex items-center gap-2 group py-1 text-left">
          <Logo size="sm" />
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors relative py-1 ${
                  isActive ? 'text-[#E10600] font-bold' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E10600]"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* High Contrast Accessibility Toggle */}
          <button
            onClick={onToggleHighContrast}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
              isHighContrast
                ? 'bg-yellow-400 text-black border-yellow-300 font-bold shadow-md'
                : 'bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500'
            }`}
            title="Toggle High Contrast Mode for Accessibility"
            aria-label="Toggle High Contrast Mode"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{isHighContrast ? 'Contrast: High' : 'High Contrast'}</span>
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white transition-all"
            title="Instant Budget Calculator"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            Estimate Budget
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#E10600] hover:bg-red-700 text-white shadow-lg red-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Book a Session
          </button>
        </div>

        {/* Mobile Hamburger Button & Quick Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onToggleHighContrast}
            className={`p-2 text-xs font-bold rounded-lg border transition-all ${
              isHighContrast
                ? 'bg-yellow-400 text-black border-yellow-300'
                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:text-white'
            }`}
            title="High Contrast Mode"
            aria-label="High Contrast Mode"
          >
            <Eye className="w-4 h-4" />
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-3 py-1.5 text-xs font-bold uppercase rounded-md bg-[#E10600] text-white shadow-md"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white bg-neutral-900 rounded-lg border border-neutral-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0D0D] border-b border-neutral-800 px-4 pt-4 pb-6 mt-3 space-y-3"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 text-base font-semibold rounded-lg transition-colors flex items-center justify-between ${
                    activeTab === link.id
                      ? 'bg-[#E10600]/10 text-[#E10600] border border-[#E10600]/30'
                      : 'text-neutral-200 hover:text-white hover:bg-neutral-900/80'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-[#E10600]">→</span>
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800 space-y-2">
              <button
                onClick={onToggleHighContrast}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg border transition-all ${
                  isHighContrast
                    ? 'bg-yellow-400 text-black border-yellow-300 font-bold'
                    : 'bg-neutral-900 border-neutral-700 text-neutral-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>High Contrast Mode</span>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded font-mono ${isHighContrast ? 'bg-black text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                  {isHighContrast ? 'ACTIVE' : 'OFF'}
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200"
              >
                <Sparkles className="w-4 h-4 text-[#E10600]" />
                Estimate Project Budget
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-lg bg-[#E10600] text-white red-glow"
              >
                <MessageSquare className="w-4 h-4" />
                Book a Session Now
              </button>

              <div className="text-center pt-2 text-xs text-neutral-400">
                Lagos, Nigeria • {BRAND_INFO.phones[0]}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
