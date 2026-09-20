import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Globe, GraduationCap, Compass, Sparkles } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

export const WhySparsh: React.FC = () => {
  const features = [
    {
      title: 'Personalized Approach',
      desc: 'No cookie-cutter protocols. Each person receives an individualized wellness blueprint rooted in attentive listening and bodily assessment.',
      icon: UserCheck
    },
    {
      title: 'Holistic Perspective',
      desc: 'We consider the full ecosystem of health—biomechanics, ergonomics, stress triggers, sleep hygiene, and constitutional balance.',
      icon: Globe
    },
    {
      title: 'Health Education',
      desc: 'We translate complex spine and health concepts into practical, actionable awareness you can apply throughout your daily life.',
      icon: GraduationCap
    },
    {
      title: 'Ongoing Guidance',
      desc: 'Continuous support and follow-through across our centers in Ahilyanagar, Nashik, Pune, Delhi, and Mumbai.',
      icon: Compass
    }
  ];

  return (
    <section id="why-sparsh" className="py-12 sm:py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden border-t border-[#EAE3D8] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: Feature Blocks */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={headerViewportConfig}
              variants={headerContainerVariants}
            >
              <motion.div variants={headerItemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E0D5C5] text-[#A47E3B] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Why Choose Sparsh</span>
              </motion.div>

              <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-3 sm:mb-5">
                Care That Looks At The Whole You
              </motion.h2>

              <motion.p variants={headerItemVariants} className="text-sm sm:text-base lg:text-lg text-[#5C6762] leading-relaxed mb-6 sm:mb-8 max-w-2xl">
                Healthcare should be compassionate, educational, and natural. Here is how our holistic
                model creates a welcoming space for your health journey.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E5DED4] shadow-xs hover:border-[#C5A059]/60 hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FAF6EE] border border-[#E8DEC8] flex items-center justify-center text-[#143527] mb-3 sm:mb-4 group-hover:bg-[#143527] group-hover:text-[#DFCA9B] transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="font-serif-luxury text-base sm:text-xl font-semibold text-[#143527] mb-1.5 sm:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C6762] leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Large Lifestyle / Wellness Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="hidden sm:block absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#143527]/10 via-[#C5A059]/20 to-transparent rotate-2 -z-10" />

              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm border border-[#E0D5C5] bg-white">
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80"
                  alt="Harmonious mindful living and natural health at Sparsh"
                  className="w-full h-[240px] sm:h-[400px] lg:h-[460px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                <div className="p-4 sm:p-6 bg-gradient-to-t from-[#143527] to-[#143527]/95 text-[#FAF8F5]">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#DFCA9B] mb-1">
                    Balanced Living
                  </p>
                  <p className="font-serif-luxury text-base sm:text-xl text-white italic leading-snug">
                    “Empowering patients with understanding, self-care, and natural vitality.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
