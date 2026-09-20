import React from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { MapPin, Phone, ExternalLink, Calendar, Navigation } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

interface LocationsSectionProps {
  onBookAtLocation: (locationName: string) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onBookAtLocation }) => {
  return (
    <section id="locations" className="py-12 sm:py-20 lg:py-24 bg-[#F6F1EA] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={headerViewportConfig}
          variants={headerContainerVariants}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-14"
        >
          <motion.div variants={headerItemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E0D5C5] text-[#A47E3B] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Our Network</span>
          </motion.div>

          <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-3 sm:mb-4">
            Sparsh Across Multiple Locations
          </motion.h2>

          <motion.p variants={headerItemVariants} className="text-sm sm:text-base lg:text-lg text-[#5C6762] leading-relaxed max-w-2xl mx-auto">
            Convenient holistic healthcare, spine wellness consultations, and community health
            workshops across five prime regional hubs.
          </motion.p>

          <motion.p variants={headerItemVariants} className="mt-2 text-[11px] sm:text-xs text-[#8C6D58]">
            Direct centralized inquiry line: <strong className="text-[#143527]">{clinic.displayPhone}</strong>
          </motion.p>
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {clinic.locations.map((loc) => {
            const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              loc.mapsQuery
            )}`;

            return (
              <div
                key={loc.id}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E2D8CC] shadow-xs hover:shadow-md hover:border-[#C5A059]/70 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF6EE] border border-[#EADFCF] flex items-center justify-center text-[#143527] group-hover:bg-[#143527] group-hover:text-[#DFCA9B] transition-colors">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                    </div>
                    {loc.isPrimary ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#2D6A4F] bg-[#E7EFEA] px-2.5 py-1 rounded-full border border-[#C5D8CC]">
                        Flagship Hub
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A47E3B] bg-[#FAF4EB] px-2.5 py-1 rounded-full border border-[#EADFCF]">
                        Wellness Center
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-semibold text-[#143527] mb-1">
                    {loc.name}
                  </h3>
                  <p className="text-xs font-medium text-[#A47E3B] mb-4">{loc.tagline}</p>

                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE3D8] mb-4 text-xs text-[#5C6762] space-y-2">
                    <div className="flex items-start gap-2">
                      <Navigation className="w-3.5 h-3.5 text-[#A47E3B] shrink-0 mt-0.5" />
                      <span className="leading-snug">{loc.addressPlaceholder}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#143527] font-medium pt-1 border-t border-[#F0EAE1]">
                      <Phone className="w-3 h-3 text-[#2D6A4F]" />
                      <a href={`tel:${loc.phone}`} className="hover:underline">
                        {loc.displayPhone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EAE1] flex items-center gap-2.5">
                  <button
                    onClick={() => onBookAtLocation(loc.name)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#143527] hover:bg-[#1D4A37] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#DFCA9B]" />
                    <span>Book Center</span>
                  </button>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl border border-[#E0D5C5] hover:border-[#143527] text-[#143527] text-xs font-semibold transition-colors flex items-center justify-center gap-1 bg-[#FAF8F5]"
                    title={`Get directions to Sparsh ${loc.name} via Google Maps`}
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#A47E3B]" />
                    <span>Map</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
