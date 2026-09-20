/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ConditionsSection } from './components/ConditionsSection';
import { WhySparsh } from './components/WhySparsh';
import { WorkshopsSection } from './components/WorkshopsSection';
import { EducationSection } from './components/EducationSection';
import { PatientFeedback } from './components/PatientFeedback';
import { InstagramSection } from './components/InstagramSection';
import { GallerySection } from './components/GallerySection';
import { LocationsSection } from './components/LocationsSection';
import { ConsultationBanner } from './components/ConsultationBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WorkshopDetailModal } from './components/WorkshopDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { WellnessService, WorkshopItem, EducationArticle } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | undefined>(undefined);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(
    undefined
  );

  const [activeServiceModal, setActiveServiceModal] = useState<WellnessService | null>(null);
  const [activeWorkshopModal, setActiveWorkshopModal] = useState<WorkshopItem | null>(null);
  const [activeArticleModal, setActiveArticleModal] = useState<EducationArticle | null>(null);

  const handleOpenBooking = (location?: string, service?: string) => {
    setSelectedLocation(location);
    setSelectedServiceForBooking(service);
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscoverSparsh = () => {
    const el = document.getElementById('why-sparsh') || document.getElementById('about');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#232B28] font-sans selection:bg-[#E8DFD0] selection:text-[#173024]">
      {/* Sticky Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Layout */}
      <main id="main-content" className="flex-1">
        {/* Full-width Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 4-Card Trust & Philosophy Strip */}
        <TrustStrip />

        {/* About Sparsh Section */}
        <AboutSection
          onDiscoverClick={handleDiscoverSparsh}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Wellness Services Grid */}
        <ServicesSection
          onSelectService={(service) => setActiveServiceModal(service)}
          onBookService={(serviceTitle) => handleOpenBooking(undefined, serviceTitle)}
        />

        {/* Conditions Supported (Educational & Non-Curative) */}
        <ConditionsSection onOpenBooking={() => handleOpenBooking()} />

        {/* Why Sparsh: 4 Pillars & Holistic Overview */}
        <WhySparsh />

        {/* Practical Workshops & Guided Learning */}
        <WorkshopsSection
          onSelectWorkshop={(workshop) => setActiveWorkshopModal(workshop)}
          onInquireWorkshop={(workshopTitle) =>
            handleOpenBooking(undefined, workshopTitle ? `Workshop: ${workshopTitle}` : 'Workshops Inquiry')
          }
        />

        {/* Health Education Editorial Articles */}
        <EducationSection onSelectArticle={(article) => setActiveArticleModal(article)} />

        {/* Patient Experiences & Transparent Feedback */}
        <PatientFeedback />

        {/* Instagram Social Proof Grid (@sparshspinecenter) */}
        <InstagramSection />

        {/* Masonry Gallery with Interactive Lightbox */}
        <GallerySection />

        {/* Multi-Location Hubs: Ahilyanagar | Nashik | Pune | Delhi | Mumbai */}
        <LocationsSection
          onBookAtLocation={(locName) => handleOpenBooking(locName)}
        />

        {/* Dark Forest Green Consultation Banner */}
        <ConsultationBanner onOpenBooking={() => handleOpenBooking()} />

        {/* Comprehensive Contact & Consultation Request Form */}
        <ContactSection
          initialLocation={selectedLocation}
          initialService={selectedServiceForBooking}
        />
      </main>

      {/* Luxury Dark Forest Green Footer */}
      <Footer />

      {/* Fixed Bottom Mobile Healthcare Action Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Popup Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialLocation={selectedLocation}
        initialService={selectedServiceForBooking}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onBook={(serviceTitle) => handleOpenBooking(undefined, serviceTitle)}
      />

      {/* Workshop Detail Modal */}
      <WorkshopDetailModal
        workshop={activeWorkshopModal}
        onClose={() => setActiveWorkshopModal(null)}
        onInquire={(workshopTitle) =>
          handleOpenBooking(undefined, `Workshop: ${workshopTitle}`)
        }
      />

      {/* Health Education Article Reader Modal */}
      <ArticleModal
        article={activeArticleModal}
        onClose={() => setActiveArticleModal(null)}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
