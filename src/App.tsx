/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('Mobile Cinematography');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleOpenBookModal = (serviceOrPackageName?: string) => {
    if (serviceOrPackageName) {
      setSelectedService(serviceOrPackageName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookFromEstimate = (estimateDetails: string) => {
    setSelectedService(estimateDetails);
    showToast('Quote estimate applied to booking request form!');
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-slate-100 selection:bg-[#E10600] selection:text-white font-sans antialiased relative">
      {/* Navigation */}
      <Navbar
        onOpenBookModal={handleOpenBookModal}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBookModal={handleOpenBookModal} />

        {/* 2. Services Section */}
        <Services onOpenBookModal={handleOpenBookModal} />

        {/* 3. Portfolio Section */}
        <Portfolio onOpenBookModal={handleOpenBookModal} />

        {/* 4. Process Section */}
        <Process onOpenBookModal={handleOpenBookModal} />

        {/* 5. About Section */}
        <About onOpenBookModal={handleOpenBookModal} />

        {/* 6. Packages & Pricing Section */}
        <Packages
          onOpenBookModal={handleOpenBookModal}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 7. Contact & Booking Form */}
        <ContactSection
          preselectedService={selectedService}
          onShowToast={showToast}
        />
      </main>

      {/* Footer */}
      <Footer />

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
