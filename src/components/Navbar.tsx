import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { clinic } from '../data/clinic';
import { Calendar, ChevronDown, Menu, X, Phone, MessageCircle } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preferredLocation?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [conditionsDropdown, setConditionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to capture initial scroll position if any
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdown(false);
    setConditionsDropdown(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Slim, subtle reading progress bar at the very top edge */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#E8E1D5]/30 overflow-hidden pointer-events-none z-50">
        <div
          className="h-full bg-gradient-to-r from-[#2D6A4F] via-[#C5A059] to-[#2D6A4F] transition-all duration-150 ease-out origin-left"
          style={{ width: `${scrollProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Reading progress"
        />
      </div>

      <nav
        className={`w-full transition-all duration-300 px-6 lg:px-12 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#E8E1D5]'
            : 'bg-[#FAF7F2] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on Left: Secondary 'S' Emblem on mobile for luxury minimalist feel, Full stacked logo on desktop */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center focus:outline-none"
            aria-label="Sparsh Holistic Health & Wellness Center - Home"
          >
            {/* Mobile: Secondary logo emblem (the 'S' logo medallion) */}
            <div className="block lg:hidden">
              <Logo
                variant="dark"
                emblemOnly={true}
                size="md"
                className="transition-transform group-hover:scale-105 active:scale-95"
              />
            </div>
            {/* Desktop: Full elegant stacked brand logo with typography */}
            <div className="hidden lg:block">
              <Logo variant="dark" layout="stacked" size="md" />
            </div>
          </a>

          {/* Desktop Nav Links (Center) */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium text-[#2D3748]">
            {/* Home with active underline */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="border-b-2 border-[#1E4D3A] text-[#1E4D3A] pb-1 transition-colors"
            >
              Home
            </a>

            {/* About */}
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="hover:text-[#1E4D3A] transition-colors pb-1"
            >
              About
            </a>

            {/* Wellness Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="flex items-center gap-1 hover:text-[#1E4D3A] transition-colors pb-1"
              >
                <span>Wellness Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
              </a>

              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E8E1D5] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {clinic.services.slice(0, 6).map((service) => (
                    <a
                      key={service.id}
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-4 py-2 text-xs text-[#2D3748] hover:bg-[#F6F1EA] hover:text-[#1E4D3A] transition-colors"
                    >
                      {service.title}
                    </a>
                  ))}
                  <div className="pt-1.5 border-t border-[#F0EAE1] mt-1">
                    <a
                      href="#services"
                      onClick={(e) => handleNavClick(e, '#services')}
                      className="block px-4 py-1.5 text-xs font-semibold text-[#1E4D3A] hover:underline"
                    >
                      View All 8 Services →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Conditions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setConditionsDropdown(true)}
              onMouseLeave={() => setConditionsDropdown(false)}
            >
              <a
                href="#conditions"
                onClick={(e) => handleNavClick(e, '#conditions')}
                className="flex items-center gap-1 hover:text-[#1E4D3A] transition-colors pb-1"
              >
                <span>Conditions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${conditionsDropdown ? 'rotate-180' : ''}`} />
              </a>

              {conditionsDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-[#E8E1D5] py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  {clinic.conditions.map((item) => (
                    <a
                      key={item.id}
                      href="#conditions"
                      onClick={(e) => handleNavClick(e, '#conditions')}
                      className="block px-4 py-2 text-xs text-[#2D3748] hover:bg-[#F6F1EA] hover:text-[#1E4D3A] transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Workshops */}
            <a
              href="#workshops"
              onClick={(e) => handleNavClick(e, '#workshops')}
              className="hover:text-[#1E4D3A] transition-colors pb-1"
            >
              Workshops
            </a>

            {/* Testimonials */}
            <a
              href="#testimonials"
              onClick={(e) => handleNavClick(e, '#testimonials')}
              className="hover:text-[#1E4D3A] transition-colors pb-1"
            >
              Testimonials
            </a>

            {/* Gallery */}
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, '#gallery')}
              className="hover:text-[#1E4D3A] transition-colors pb-1"
            >
              Gallery
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hover:text-[#1E4D3A] transition-colors pb-1"
            >
              Contact
            </a>
          </div>

          {/* Right Action: Book Consultation Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onOpenBooking()}
              className="bg-[#1E4D3A] hover:bg-[#153B2B] text-white text-sm font-medium px-5 py-2.5 rounded-full flex items-center gap-2 shadow-xs transition-all duration-200 group cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#DFCA9B] transition-transform group-hover:scale-110" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Trigger (Exact 3-line green hamburger matching mobile mockup) */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 -mr-1 rounded-lg text-[#1E4D3A] hover:bg-[#EFE9DD] transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1E4D3A]" />
              ) : (
                <div className="w-6 h-4 flex flex-col justify-between" aria-hidden="true">
                  <span className="w-full h-[2.5px] bg-[#1E4D3A] rounded-full" />
                  <span className="w-full h-[2.5px] bg-[#1E4D3A] rounded-full" />
                  <span className="w-full h-[2.5px] bg-[#1E4D3A] rounded-full" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#E5DED4] bg-[#FAF7F2] rounded-2xl p-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#E8E1D5]">
              <Logo variant="dark" layout="horizontal" size="sm" />
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#718096] bg-[#EFE9DD] px-2.5 py-1 rounded-full">
                Navigation
              </span>
            </div>
            <div className="flex flex-col space-y-3 text-sm font-medium text-[#2D3748]">
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                className="py-1.5 px-3 rounded-lg bg-[#EFE9DD] text-[#1E4D3A] font-semibold"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="py-1.5 px-3 rounded-lg hover:bg-[#F5EFE6]"
              >
                About
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="py-1.5 px-3 rounded-lg hover:bg-[#F5EFE6]"
              >
                Wellness Services
              </a>
              <a
                href="#conditions"
                onClick={(e) => handleNavClick(e, '#conditions')}
                className="py-1.5 px-3 rounded-lg hover:bg-[#F5EFE6]"
              >
                Conditions
              </a>
              <a
                href="#workshops"
                onClick={(e) => handleNavClick(e, '#workshops')}
                className="py-1.5 px-3 rounded-lg hover:bg-[#F5EFE6]"
              >
                Workshops
              </a>
              <a
                href="#testimonials"
                onClick={(e) => handleNavClick(e, '#testimonials')}
                className="py-1.5 px-3 rounded-lg hover:bg-[#F5EFE6]"
              >
                Testimonials
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleNavClick(e, '#gallery')}
                className="py-1.5 px-3 rounded-lg hover:bg-[#F5EFE6]"
              >
                Gallery
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="py-1.5 px-3 rounded-lg hover:bg-[#F5EFE6]"
              >
                Contact
              </a>

              <div className="pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-xs text-[#5C6762]">
                <a href={`tel:${clinic.phone}`} className="flex items-center gap-1 text-[#1E4D3A] font-medium">
                  <Phone className="w-3.5 h-3.5" />
                  <span>{clinic.displayPhone}</span>
                </a>
                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#2D6A4F] font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
