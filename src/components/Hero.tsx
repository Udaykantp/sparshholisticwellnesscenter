import React from 'react';
import { Calendar, Phone, Leaf, ArrowRight } from 'lucide-react';
import { clinic } from '../data/clinic';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section
      id="hero"
      className="relative pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-8 bg-[#FAF7F2] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main Hero Card (Matches Mobile Mockup container) */}
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#FAF7F2] border border-[#ECE5D9] shadow-xs overflow-hidden p-6 sm:p-10 lg:p-12">
          {/* Decorative Organic Sage Leaves on the far left margin */}
          <div className="absolute top-4 left-0 w-32 sm:w-44 lg:w-56 pointer-events-none opacity-80 select-none z-10">
            <svg
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-[#9AB4A1]"
            >
              <path
                d="M-20 40 Q 60 70 120 45"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M30 55 C 35 35 60 30 70 45 C 60 58 40 60 30 55 Z"
                fill="currentColor"
                opacity="0.8"
              />
              <path
                d="M75 50 C 90 35 115 40 120 55 C 105 65 85 60 75 50 Z"
                fill="currentColor"
                opacity="0.75"
              />
              <path
                d="M95 48 C 115 28 145 35 150 50 C 130 60 110 58 95 48 Z"
                fill="#88A690"
                opacity="0.85"
              />
              <path
                d="M10 70 C 25 80 50 82 55 95 C 38 102 18 90 10 70 Z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>

          <div className="absolute bottom-6 left-0 w-32 sm:w-44 lg:w-56 pointer-events-none opacity-80 select-none z-10">
            <svg
              viewBox="0 0 200 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto text-[#9AB4A1]"
            >
              <path
                d="M-20 200 Q 50 170 110 140"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M20 180 C 35 160 60 165 65 178 C 50 190 30 190 20 180 Z"
                fill="currentColor"
                opacity="0.75"
              />
              <path
                d="M60 160 C 80 140 105 145 110 160 C 95 172 75 170 60 160 Z"
                fill="#88A690"
                opacity="0.85"
              />
              <path
                d="M90 145 C 115 125 145 130 150 145 C 130 158 105 155 90 145 Z"
                fill="currentColor"
                opacity="0.7"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-20">
            {/* Left Column: Eyebrow, Main Headline, Subtitle, and Two Action Buttons */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              {/* Eyebrow: HOLISTIC HEALTH & WELLNESS ──── */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#2D3748] uppercase">
                  Holistic Health &amp; Wellness
                </span>
                <span className="w-10 sm:w-14 h-[1.5px] bg-[#C5BBAA] inline-block" />
              </div>

              {/* Main Headline (Exact formatting: Reconnect With Your Natural Wellbeing) */}
              <h1 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[56px] leading-[1.12] tracking-tight font-normal mb-4 sm:mb-6">
                <span className="text-[#1A202C] block">Reconnect With</span>
                <span className="text-[#1A202C] inline">Your </span>
                <span className="text-[#2D6A4F] inline">Natural</span>
                <span className="text-[#2D6A4F] block">Wellbeing</span>
              </h1>

              {/* Subtitle Supporting Copy */}
              <p className="text-sm sm:text-base lg:text-lg text-[#4A5568] leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal">
                Holistic health and wellness care designed around your individual needs, lifestyle and
                wellbeing.
              </p>

              {/* Two Action Buttons (Exact mobile styling from screenshot) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                {/* Button 1: Book a Consultation -> */}
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1E4D3A] hover:bg-[#153B2B] text-white text-sm font-medium transition-all duration-200 shadow-sm flex items-center justify-between sm:justify-center gap-4 cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#DFCA9B] transition-transform group-hover:scale-110" />
                    <span>Book a Consultation</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#DFCA9B] transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* Button 2: Call 96231 00222 */}
                <a
                  href={`tel:${clinic.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-[#1E4D3A] text-sm font-medium transition-all duration-200 border border-[#1E4D3A]/50 shadow-2xs flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <Phone className="w-4 h-4 text-[#1E4D3A] transition-transform group-hover:scale-110" />
                  <span>Call {clinic.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Doctor & Patient Spine Model Consultation Image with Floating Badge & Dots */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-xl lg:max-w-none rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
                {/* Main Consultation Photo */}
                <div className="relative h-[320px] sm:h-[420px] lg:h-[480px] w-full bg-[#FAF7F2]">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85"
                    alt="Doctor consulting patient with spine anatomical model at Sparsh Holistic Health And Wellness Center"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Soft edge gradient feather */}
                  <div className="hidden lg:block absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/40 to-transparent pointer-events-none" />

                  {/* Floating Badge (Top-Right): Holistic Health & Wellness Center */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3 sm:py-2.5 sm:px-4 shadow-md border border-white/80 flex items-center gap-2.5 sm:gap-3 z-10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E8F0EC] text-[#2D6A4F] flex items-center justify-center shrink-0">
                      <Leaf className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] sm:text-xs font-semibold text-[#1A202C] leading-tight">
                        Holistic Health &amp;
                      </p>
                      <p className="text-[11px] sm:text-xs font-semibold text-[#1A202C] leading-tight">
                        Wellness Center
                      </p>
                    </div>
                  </div>

                  {/* Pagination Dots (Bottom-Right, matching screenshot) */}
                  <div className="absolute bottom-4 right-5 sm:bottom-6 sm:right-6 flex items-center gap-1.5 z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1E4D3A]" />
                    <span className="w-2 h-2 rounded-full bg-[#D5CDBC]" />
                    <span className="w-2 h-2 rounded-full bg-[#D5CDBC]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
