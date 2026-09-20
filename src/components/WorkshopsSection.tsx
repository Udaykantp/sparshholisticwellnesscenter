import React from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { WorkshopItem } from '../types';
import { Calendar, MapPin, Users, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

interface WorkshopsSectionProps {
  onSelectWorkshop: (workshop: WorkshopItem) => void;
  onInquireWorkshop: (workshopTitle?: string) => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  onSelectWorkshop,
  onInquireWorkshop
}) => {
  return (
    <section id="workshops" className="py-12 sm:py-20 lg:py-24 bg-[#F6F1EA] relative select-none">
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
            <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Educational Immersions</span>
          </motion.div>

          <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-3 sm:mb-4">
            Learn. Practice. Grow.
          </motion.h2>

          <motion.p variants={headerItemVariants} className="text-sm sm:text-base lg:text-lg text-[#5C6762] leading-relaxed max-w-2xl mx-auto">
            Health and wellness education through practical workshops and guided learning.
            Empowering individuals and corporate teams with actionable spine care and natural living
            practices.
          </motion.p>

          <motion.div variants={headerItemVariants} className="mt-2 text-[11px] sm:text-xs text-[#8C6D58]">
            <span>Regularly scheduled across Ahilyanagar, Nashik, Pune, Delhi &amp; Mumbai centers</span>
          </motion.div>
        </motion.div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-14">
          {clinic.workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5DED4] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badge */}
              <div className="relative h-44 sm:h-52 overflow-hidden bg-[#FAF6EE]">
                <img
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#143527] border border-[#C5A059]/40 shadow-xs">
                    {workshop.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#DFCA9B]" />
                    <span>{workshop.location}</span>
                  </span>
                  <span className="text-[11px] bg-[#143527]/80 px-2 py-0.5 rounded text-[#DFCA9B]">
                    {workshop.mode}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A47E3B] mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{workshop.schedule}</span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-semibold text-[#143527] mb-3 leading-snug group-hover:text-[#2D6A4F] transition-colors">
                    {workshop.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C6762] leading-relaxed mb-4">
                    {workshop.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#F0EAE1]">
                    {workshop.learningOutcomes.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#3D4742]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                  <button
                    onClick={() => onSelectWorkshop(workshop)}
                    className="text-xs font-semibold text-[#143527] hover:text-[#2D6A4F] flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onInquireWorkshop(workshop.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#FAF4EB] hover:bg-[#143527] text-[#143527] hover:text-[#FAF8F5] text-xs font-medium border border-[#E0D5C5] transition-colors"
                  >
                    Register Interest
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="text-center">
          <button
            onClick={() => onInquireWorkshop()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#143527] hover:bg-[#1D4A37] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm"
          >
            <span>View All Workshops & Custom Corporate Sessions</span>
            <ArrowRight className="w-4 h-4 text-[#DFCA9B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
