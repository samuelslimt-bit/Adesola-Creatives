import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, PhoneCall, Sparkles, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/portfolioData';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenBookModal: (serviceOrPackage?: string) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookModal, onOpenQuoteModal }) => {
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
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
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
        <a href="#hero" className="flex items-center gap-2 group py-1">
          <Logo size="sm" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-neutral-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#E10600] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-neutral-900 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white transition-all"
            title="Instant Budget Calculator"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
            Estimate Budget
          </button>

          <button
            onClick={() => onOpenBookModal()}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg bg-[#E10600] hover:bg-red-700 text-white shadow-lg red-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Book a Session
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => onOpenBookModal()}
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-base font-semibold text-neutral-200 hover:text-white hover:bg-neutral-900/80 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#E10600] opacity-0 group-hover:opacity-100">→</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800 space-y-2">
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
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookModal();
                }}
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
