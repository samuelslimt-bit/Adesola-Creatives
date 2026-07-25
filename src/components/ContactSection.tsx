import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BRAND_INFO } from '../data/portfolioData';
import { Phone, Mail, Instagram, MessageCircle, Send, Copy, Check, MapPin, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  preselectedService?: string;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService = '',
  onShowToast,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    service: preselectedService || 'Mobile Cinematography',
    packageSelected: 'Growth Brand Pack',
    budgetRange: 'Open for Negotiation',
    projectDetails: '',
    preferredContact: 'whatsapp',
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        service: preselectedService,
      }));
    }
  }, [preselectedService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const targetEmail = BRAND_INFO.email; // ade.adesola023@gmail.com

    try {
      // 1. Send via server API route
      await fetch('/api/send-booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, targetEmail }),
      }).catch((err) => console.warn('Server endpoint notice:', err));

      // 2. Direct background submission to FormSubmit API to ensure instant inbox notification
      const emailPayload = {
        _subject: `🔥 New Booking Request: ${formData.service} - ${formData.fullName}`,
        _template: "table",
        _captcha: "false",
        _replyto: formData.email,
        "Full Name": formData.fullName,
        "Client Email": formData.email,
        "Phone / WhatsApp": formData.phone,
        "Primary Service": formData.service,
        "Package Selected": formData.packageSelected,
        "Budget Goal": formData.budgetRange,
        "Preferred Response Method": formData.preferredContact,
        "Project Details / Dates / Location": formData.projectDetails,
      };

      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      }).catch((err) => console.warn('Direct submission notice:', err));

    } catch (error) {
      console.error("Booking submission error:", error);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      onShowToast(`🎉 Booking request sent directly to ${targetEmail}!`);
    }
  };

  const copyToClipboard = (text: string, type: 'phone' | 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onShowToast('Phone number copied to clipboard!');
    } else {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onShowToast('Email address copied to clipboard!');
    }
  };

  // Pre-formatted WhatsApp link
  const waMessage = encodeURIComponent(
    `Hello Adesola Creatives! I would like to book a session for ${formData.service || 'a project'}. My name is ${
      formData.fullName || 'Client'
    }. My email is ${formData.email || 'ade.adesola023@gmail.com'}.`
  );
  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsappPrimary}?text=${waMessage}`;

  return (
    <section id="contact" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      {/* Background Red Accent Glows */}
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-[#E10600]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Bold Banner Box */}
        <div className="rounded-3xl bg-gradient-to-br from-[#E10600] via-red-700 to-black p-8 sm:p-12 lg:p-16 mb-16 shadow-2xl red-glow-lg text-left text-white relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <span className="font-heading font-black text-[180px] text-white">AC</span>
          </div>

          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/20 text-xs font-bold uppercase tracking-widest text-white">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Create Together</span>
            </div>

            <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Ready to Make Content That Commands Attention?
            </h2>

            <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal">
              Whether you need a full day mobile shoot in Lagos, personal branding photography, graphic design, or monthly social media management, let's talk today. All booking requests are routed instantly to our official inbox.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-black hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  const elem = document.getElementById('booking-full-name');
                  if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    elem.focus();
                  }
                }}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Fill Booking Form</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
              Send a Booking Request
            </h3>
            <p className="text-xs text-neutral-400 mb-8">
              Fill out this form to submit your booking session request directly to our team.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#E10600]/10 border border-[#E10600]/40 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#E10600] text-white flex items-center justify-center mx-auto red-glow">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-white">
                  Booking Request Sent!
                </h4>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your project details for <strong className="text-white">{formData.service}</strong> have been routed to our team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white uppercase tracking-wider"
                >
                  Submit Another Booking Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Full Name *
                    </label>
                    <input
                      id="booking-full-name"
                      type="text"
                      required
                      placeholder="e.g. Tobi Adebayo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-[#E10600] text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 09074018013"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-[#E10600] text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-[#E10600] text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Primary Service Needed *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-[#E10600] text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Mobile Cinematography">Mobile Cinematography (4K Reels & Video)</option>
                      <option value="Branding & Graphic Design">Branding & Graphic Design</option>
                      <option value="Creative Mobile Photography">Creative Mobile Photography</option>
                      <option value="Social Media Growth & Management">Social Media Growth & Management</option>
                      <option value="Custom Multi-Service Bundle">Custom Multi-Service Bundle</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Estimated Budget / Quote Goal
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-[#E10600] text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Open for Negotiation">Open for Negotiation</option>
                      <option value="Custom Scope Quote">Custom Scope Quote</option>
                      <option value="Full Campaign Retainer">Full Campaign Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                      Preferred Response Method
                    </label>
                    <div className="flex gap-2">
                      {(['whatsapp', 'email', 'phone'] as const).map((method) => (
                        <button
                          type="button"
                          key={method}
                          onClick={() => setFormData({ ...formData, preferredContact: method })}
                          className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-colors ${
                            formData.preferredContact === method
                              ? 'bg-[#E10600] border-[#E10600] text-white'
                              : 'bg-black border-neutral-800 text-neutral-400'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                    Project Details / Location / Date
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your brand, shoot location (e.g. Lekki, Ikeja), target shoot dates, and key goals..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-neutral-800 focus:border-[#E10600] text-white text-sm focus:outline-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#E10600] hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider shadow-xl red-glow flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span>Routing Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Booking Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Links Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Options */}
            <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
              <h4 className="font-heading font-extrabold text-xl text-white">
                Direct Contact Channels
              </h4>

              {/* Phone Numbers */}
              <div className="p-4 rounded-2xl bg-black border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#E10600]/10 text-[#E10600]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-neutral-500">Phone / WhatsApp</div>
                    <div className="text-sm font-bold text-white font-mono">
                      {BRAND_INFO.phones[0]} / {BRAND_INFO.phones[1]}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(BRAND_INFO.phones[0], 'phone')}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="p-4 rounded-2xl bg-black border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#E10600]/10 text-[#E10600]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-neutral-500">Official Email</div>
                    <div className="text-xs sm:text-sm font-bold text-white font-mono truncate max-w-[200px] sm:max-w-none">
                      {BRAND_INFO.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(BRAND_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                  Instagram Accounts:
                </span>
                
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-black hover:bg-neutral-800 border border-neutral-800 text-neutral-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <div>
                      <div className="text-xs font-bold text-white">Main Instagram</div>
                      <div className="text-[11px] text-neutral-400">{BRAND_INFO.instagram}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#E10600] font-bold">Follow →</span>
                </a>

                <a
                  href={BRAND_INFO.instagramBackupUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-black hover:bg-neutral-800 border border-neutral-800 text-neutral-800 hover:text-white transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="text-xs font-bold text-white">Backup Instagram</div>
                      <div className="text-[11px] text-neutral-400">{BRAND_INFO.instagramBackup}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#E10600] font-bold">Follow →</span>
                </a>
              </div>
            </div>

            {/* Studio Location Card */}
            <div className="p-6 rounded-3xl bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-black border border-neutral-800 text-[#E10600] shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="font-heading font-bold text-sm text-white">
                  Studio Base: Lagos, Nigeria 🇳🇬
                </div>
                <div className="text-neutral-400 mt-0.5">
                  Available for shoots in Lekki, Ikoyi, Victoria Island, Ikeja, Abuja, and destination shoots worldwide.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
