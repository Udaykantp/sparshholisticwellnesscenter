import React, { useState } from 'react';
import { Logo } from './Logo';
import { clinic } from '../data/clinic';
import { Phone, Instagram, Facebook, Youtube, MessageCircle, MapPin, ShieldCheck, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Sparsh', href: '#about' },
    { label: 'Wellness Services', href: '#services' },
    { label: 'Conditions', href: '#conditions' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D2319] text-[#FAF8F5] pt-14 sm:pt-20 pb-28 sm:pb-12 border-t border-[#C5A059]/30 relative overflow-hidden select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#143527]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5">
            <Logo variant="footer" size="md" className="mb-6" />

            <p className="text-sm text-[#FAF8F5]/70 max-w-sm leading-relaxed mb-6 font-light">
              Sparsh Holistic Health & Wellness Center is dedicated to natural, holistic, and
              wellness-oriented healthcare, spine consciousness, health education, therapies,
              workshops, and attentive patient care.
            </p>

            <div className="flex items-center space-x-3 text-[#DFCA9B]">
              <a
                href={clinic.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#143527] hover:bg-[#C5A059] hover:text-[#143527] transition-all flex items-center justify-center border border-[#C5A059]/40"
                aria-label="Sparsh Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={clinic.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#143527] hover:bg-[#C5A059] hover:text-[#143527] transition-all flex items-center justify-center border border-[#C5A059]/40"
                aria-label="Sparsh WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={clinic.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#143527] hover:bg-[#C5A059] hover:text-[#143527] transition-all flex items-center justify-center border border-[#C5A059]/40"
                aria-label="Sparsh Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={clinic.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#143527] hover:bg-[#C5A059] hover:text-[#143527] transition-all flex items-center justify-center border border-[#C5A059]/40"
                aria-label="Sparsh YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFCA9B] mb-5">
              Explore Sparsh
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-[#DFCA9B] transition-colors py-0.5 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Locations & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFCA9B] mb-5">
              Centers & Inquiries
            </h4>

            <div className="space-y-3 text-xs text-[#FAF8F5]/80 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-white">Active Regional Hubs:</strong>
                  <p className="text-[#DFCA9B] mt-0.5">
                    Ahilyanagar • Nashik • Pune • Delhi • Mumbai
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <span>Central Line: </span>
                <a
                  href={`tel:${clinic.phone}`}
                  className="text-white hover:text-[#DFCA9B] font-medium"
                >
                  {clinic.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a
                  href={clinic.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DFCA9B] hover:underline"
                >
                  {clinic.instagram}
                </a>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#143527]/70 border border-[#C5A059]/20 text-[11px] text-[#FAF8F5]/70">
              <p className="font-semibold text-white uppercase tracking-wider text-[10px] mb-1">
                Ethical Healthcare Commitment
              </p>
              <p>
                Natural wellness education, lifestyle ergonomics, and personalized non-invasive
                therapies.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF8F5]/50 gap-4">
          <p>© {new Date().getFullYear()} Sparsh Holistic Health And Wellness Center. All rights reserved.</p>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#DFCA9B] transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#DFCA9B] transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="bg-[#FAF8F5] text-[#232B28] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E2D8CC] relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-5 right-5 text-[#5C6762] hover:text-[#143527] p-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#143527] mb-3">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            <div className="text-xs sm:text-sm text-[#5C6762] leading-relaxed space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Sparsh Holistic Health & Wellness Center is strictly committed to protecting the
                    privacy of all patients, consultation seekers, and workshop participants.
                  </p>
                  <p>
                    All personal details (including contact phone numbers, emails, and consultation
                    concerns) submitted via our booking channels are handled with strict
                    confidentiality and are never sold or rented to third-party marketing entities.
                  </p>
                  <p>
                    We use submitted information solely for scheduling clinical consultations,
                    dispatching workshop details, and answering your healthcare inquiries.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    The information provided on this website is for educational and wellness
                    purposes only. Sparsh emphasizes lifestyle awareness, posture education, and
                    natural therapeutic principles.
                  </p>
                  <p>
                    Content on this website does not substitute professional medical diagnosis or
                    emergency medical treatment. Always consult qualified healthcare practitioners
                    regarding acute medical emergencies.
                  </p>
                  <p>
                    Workshop schedules and consultation timings are subject to availability across
                    our centers in Ahilyanagar, Nashik, Pune, Delhi, and Mumbai.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5DED4] text-right">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 rounded-xl bg-[#143527] text-white text-xs font-semibold tracking-wider uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
