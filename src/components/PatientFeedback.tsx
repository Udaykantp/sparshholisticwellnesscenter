import React from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { HeartHandshake, Instagram, MessageSquareHeart, ShieldCheck, ExternalLink } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

export const PatientFeedback: React.FC = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-20 lg:py-24 bg-[#F6F1EA] relative select-none">
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
            <HeartHandshake className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Community Reflections</span>
          </motion.div>

          <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-3 sm:mb-4">
            Patient Experiences
          </motion.h2>

          <motion.p variants={headerItemVariants} className="text-sm sm:text-base lg:text-lg text-[#5C6762] leading-relaxed max-w-2xl mx-auto">
            Personal stories and genuine impressions from individuals who have engaged with our
            holistic wellness consultations and workshops.
          </motion.p>
        </motion.div>

        {/* Elegant Placeholder Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E2D8CC] shadow-xs text-center relative overflow-hidden">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FAF6EE] border border-[#E5DCCF] flex items-center justify-center text-[#143527] mx-auto mb-4 sm:mb-6">
              <MessageSquareHeart className="w-7 h-7 sm:w-8 sm:h-8 text-[#A47E3B] stroke-[1.5]" />
            </div>

            <h3 className="font-serif-luxury text-xl sm:text-3xl font-medium text-[#143527] mb-2 sm:mb-3">
              Patient experiences will be added here.
            </h3>

            <p className="text-sm sm:text-base text-[#5C6762] max-w-xl mx-auto leading-relaxed mb-6 sm:mb-8">
              We uphold strict ethical healthcare standards and do not fabricate testimonials.
              Authentic patient feedback and workshop reactions are documented in the{' '}
              <strong className="text-[#143527]">“Feedback”</strong> highlight on our official
              Instagram profile.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={clinic.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-[#143527] hover:bg-[#1D4A37] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4 text-[#DFCA9B]" />
                <span>View on Instagram</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <a
                href={`https://wa.me/919623100222?text=Hello%20Sparsh%20Wellness%2C%20I%20would%20like%20to%20share%20my%20feedback%20from%20my%20recent%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-[#FAF6EE] text-[#143527] text-xs font-semibold tracking-wider uppercase transition-colors border border-[#C5A059]/50 shadow-xs flex items-center justify-center gap-2"
              >
                <span>Share Your Experience</span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-[#F0EAE1] flex items-center justify-center gap-2 text-xs text-[#8C6D58]">
              <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
              <span>Verified patient-first communication across Ahilyanagar, Nashik, Pune, Delhi & Mumbai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
