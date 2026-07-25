import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { About } from './components/About';
import { Packages } from './components/Packages';
import { ContactSection } from './components/ContactSection';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Mobile Cinematography');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState<boolean>(false);

  const handleToggleHighContrast = () => {
    setIsHighContrast((prev) => {
      const next = !prev;
      showToast(next ? '👁️ High Contrast Accessibility Mode Enabled' : 'Standard Dark Theme Restored');
      return next;
    });
  };

  // Sync scroll position with activeTab
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'services', 'portfolio', 'process', 'about', 'packages', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleSelectTab = (tabId: string) => {
    setActiveTab(tabId);
    const elem = document.getElementById(tabId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenBookModal = (serviceOrPackageName?: string) => {
    if (serviceOrPackageName) {
      setSelectedService(serviceOrPackageName);
    }
    setActiveTab('contact');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookFromEstimate = (estimateDetails: string) => {
    setSelectedService(estimateDetails);
    showToast('Custom project scope applied to booking form below!');
    setActiveTab('contact');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen selection:bg-[#E10600] selection:text-white font-sans antialiased relative transition-colors duration-300 ${
      isHighContrast ? 'bg-black text-white high-contrast-mode contrast-125' : 'bg-[#0D0D0D] text-slate-100'
    }`}>
      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenBookModal={handleOpenBookModal}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        isHighContrast={isHighContrast}
        onToggleHighContrast={handleToggleHighContrast}
      />

      {/* Main Multi-Page App Sections */}
      <main className="pt-12">
        {/* 1. Home / Hero Section */}
        <Hero onOpenBookModal={handleOpenBookModal} />

        {/* 2. Services Section */}
        <Services onOpenBookModal={handleOpenBookModal} />

        {/* 3. Catalog / Portfolio Section */}
        <Portfolio onOpenBookModal={handleOpenBookModal} />

        {/* 4. Process Section */}
        <Process onOpenBookModal={handleOpenBookModal} />

        {/* 5. About Section */}
        <About onOpenBookModal={handleOpenBookModal} />

        {/* 6. Packages & Content Packs Section */}
        <Packages
          onOpenBookModal={handleOpenBookModal}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 7. Contact & Booking Form Section */}
        <ContactSection
          preselectedService={selectedService}
          onShowToast={showToast}
        />
      </main>

      {/* Footer Navigation */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Sticky Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Interactive Project Budget Estimator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onBookEstimatedPackage={handleBookFromEstimate}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
