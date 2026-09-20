import React from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { AppointmentForm } from './AppointmentForm';
import { Phone, Instagram, MessageCircle, MapPin, Navigation, Clock, Mail } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

interface ContactSectionProps {
  initialLocation?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialLocation,
  initialService
}) => {
  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 bg-[#FAF8F5] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Direct Connection Points */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={headerViewportConfig}
                variants={headerContainerVariants}
              >
                <motion.div variants={headerItemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E0D5C5] text-[#A47E3B] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                  <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>Get In Touch</span>
                </motion.div>

                <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-3 sm:mb-4">
                  Connect With Sparsh
                </motion.h2>

                <motion.p variants={headerItemVariants} className="text-sm sm:text-base text-[#5C6762] leading-relaxed mb-6 sm:mb-8">
                  Whether you have questions regarding our holistic posture consultations, natural
                  therapies, or upcoming educational workshops, our team is here to assist you.
                </motion.p>
              </motion.div>

              {/* Primary Direct Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                <a
                  href={`tel:${clinic.phone}`}
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#143527] hover:bg-[#1D4A37] text-white flex flex-col items-center justify-center text-center transition-all shadow-sm group"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFCA9B] mb-1.5 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Call Now</span>
                  <span className="text-[11px] text-[#DFCA9B] mt-0.5">{clinic.displayPhone}</span>
                </a>

                <a
                  href={clinic.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 sm:p-4 rounded-2xl bg-[#2D6A4F] hover:bg-[#245841] text-white flex flex-col items-center justify-center text-center transition-all shadow-sm group"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFCA9B] mb-1.5 transition-transform group-hover:scale-110" />
                  <span className="text-xs font-semibold uppercase tracking-wider">WhatsApp</span>
                  <span className="text-[11px] text-[#DFCA9B] mt-0.5">Quick Chat</span>
                </a>
              </div>

              {/* Key Contact Information List */}
              <div className="space-y-3.5 sm:space-y-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#E5DED4] shadow-xs mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#A47E3B] shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#143527] uppercase tracking-wider">
                      Instagram Profile
                    </p>
                    <a
                      href={clinic.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#2D6A4F] hover:underline font-medium"
                    >
                      {clinic.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#F0EAE1]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#A47E3B] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#143527] uppercase tracking-wider">
                      Consultation Hours
                    </p>
                    <p className="text-xs text-[#5C6762]">{clinic.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-[#F0EAE1]">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] flex items-center justify-center text-[#A47E3B] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#143527] uppercase tracking-wider">
                      Active Regional Centers
                    </p>
                    <p className="text-xs text-[#5C6762]">
                      Ahilyanagar • Nashik • Pune • Delhi • Mumbai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <AppointmentForm
              initialLocation={initialLocation}
              initialService={initialService}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
