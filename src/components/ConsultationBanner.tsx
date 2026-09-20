import React from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { Calendar, Phone, Sparkles, ArrowRight } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

interface ConsultationBannerProps {
  onOpenBooking: () => void;
}

export const ConsultationBanner: React.FC<ConsultationBannerProps> = ({ onOpenBooking }) => {
  return (
    <section id="consultation" className="py-12 sm:py-20 lg:py-28 bg-[#143527] relative overflow-hidden text-center text-white select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#2D6A4F]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative leaf watermarks */}
      <svg
        className="absolute left-8 top-1/2 -translate-y-1/2 w-48 h-48 text-[#FAF8F5]/[0.02] pointer-events-none hidden md:block"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50 0C70 30 90 50 100 80C80 100 50 90 30 80C10 60 20 30 50 0Z" />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={headerViewportConfig}
          variants={headerContainerVariants}
        >
          <motion.div variants={headerItemVariants} className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#FAF8F5]/10 border border-[#C5A059]/40 text-[#DFCA9B] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6 backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Personalized Holistic Guidance</span>
          </motion.div>

          <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF8F5] leading-[1.18] font-medium tracking-tight mb-3 sm:mb-6">
            Begin Your Journey Towards{' '}
            <span className="italic font-normal text-[#DFCA9B]">Better Wellbeing</span>
          </motion.h2>

          <motion.p variants={headerItemVariants} className="text-sm sm:text-lg text-[#FAF8F5]/80 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10 font-light">
            Connect with Sparsh for personalized holistic health and wellness guidance. Discover
            non-invasive spine care, natural therapies, and healthy living practices tailored to your
            routine.
          </motion.p>

          <motion.div variants={headerItemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FAF8F5] text-[#143527] hover:bg-[#FAF4EB] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 border border-white cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#A47E3B]" />
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#143527]" />
            </button>

            <a
              href={`tel:${clinic.phone}`}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-transparent hover:bg-white/10 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 border border-[#C5A059]/60 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#DFCA9B]" />
              <span>Call {clinic.displayPhone}</span>
            </a>
          </motion.div>
        </motion.div>

        <div className="mt-8 text-xs text-[#FAF8F5]/60">
          <span>Ahilyanagar • Nashik • Pune • Delhi • Mumbai</span>
        </div>
      </div>
    </section>
  );
};
