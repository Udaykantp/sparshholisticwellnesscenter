import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

interface AboutSectionProps {
  onDiscoverClick: () => void;
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDiscoverClick, onOpenBooking }) => {
  const pillars = [
    {
      title: 'Natural & Holistic Foundation',
      desc: 'Respecting the body’s innate self-regulating mechanisms through gentle, non-invasive therapeutic practices.'
    },
    {
      title: 'Individualized Attention',
      desc: 'No generic formulas. Every evaluation considers posture, daily stressors, physical habits, and restorative objectives.'
    },
    {
      title: 'Health Awareness & Education',
      desc: 'True health extends beyond consultations. We equip you with spine literacy and ergonomics for everyday life.'
    },
    {
      title: 'Compassionate Patient Support',
      desc: 'A supportive, collaborative journey across Ahilyanagar, Nashik, Pune, Delhi, and Mumbai.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-20 lg:py-28 bg-[#FAF7F2] relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Soft card container */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-[#ECE5D9] shadow-xs p-5 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Clinic Treatment Room with Wooden Bed & Warm Natural Light */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#ECE5D9] bg-[#FAF7F2]">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1100&q=85"
                  alt="Sparsh Holistic Health and Wellness clinical treatment bed with natural wood and serene sunlight"
                  className="w-full h-[260px] sm:h-[360px] lg:h-[440px] object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle warm vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Editorial Text matching exact mobile mockup */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={headerViewportConfig}
                variants={headerContainerVariants}
                className="w-full"
              >
                {/* Eyebrow: ABOUT SPARSH ──── */}
                <motion.div variants={headerItemVariants} className="flex items-center gap-3 mb-3 sm:mb-5">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#2D3748] uppercase">
                    About Sparsh
                  </span>
                  <span className="w-10 sm:w-14 h-[1.5px] bg-[#C5BBAA] inline-block" />
                </motion.div>

                {/* Headline */}
                <motion.h2
                  variants={headerItemVariants}
                  className="font-serif-luxury text-[26px] sm:text-3xl lg:text-4xl text-[#1A202C] leading-[1.2] tracking-tight font-normal mb-3 sm:mb-5"
                >
                  A Holistic Approach<br className="hidden sm:inline" /> To Better Wellbeing
                </motion.h2>

                {/* Body Copy (Exact wording from mobile mockup) */}
                <motion.p
                  variants={headerItemVariants}
                  className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-6 font-normal"
                >
                  Sparsh Holistic Health And Wellness Center is dedicated to providing natural, holistic and
                  personalized care for a healthier, balanced life.
                </motion.p>
              </motion.div>

              {/* Additional detail on desktop */}
              <div className="hidden sm:grid grid-cols-2 gap-3.5 mb-6 w-full">
                {pillars.slice(0, 2).map((pillar) => (
                  <div key={pillar.title} className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#ECE5D9]">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-semibold text-[#1A202C] mb-0.5">{pillar.title}</h4>
                        <p className="text-[11px] text-[#5C6762] leading-snug">{pillar.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button: Discover Sparsh -> (Exact pill button with border) */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onDiscoverClick}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-[#FAF7F2] text-[#1E4D3A] text-xs sm:text-sm font-medium transition-all duration-200 border border-[#1E4D3A] shadow-2xs flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Discover Sparsh</span>
                  <ArrowRight className="w-4 h-4 text-[#1E4D3A] transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
