import React, { useState } from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { HealthConditionCategory } from '../types';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';
import {
  Activity,
  ShieldAlert,
  Clock,
  Heart,
  Smile,
  CheckCircle,
  Lightbulb,
  ShieldCheck,
  Calendar
} from 'lucide-react';

interface ConditionsSectionProps {
  onOpenBooking: () => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ onOpenBooking }) => {
  const [selectedConditionId, setSelectedConditionId] = useState<string>(clinic.conditions[0].id);

  const selectedCondition =
    clinic.conditions.find((c) => c.id === selectedConditionId) || clinic.conditions[0];

  const getConditionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return Activity;
      case 'ShieldAlert':
        return ShieldAlert;
      case 'Clock':
        return Clock;
      case 'Heart':
        return Heart;
      case 'Smile':
        return Smile;
      case 'CheckCircle':
        return CheckCircle;
      default:
        return Activity;
    }
  };

  return (
    <section id="conditions" className="py-12 sm:py-20 lg:py-24 bg-[#FAF8F5] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={headerViewportConfig}
          variants={headerContainerVariants}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-12"
        >
          <motion.div variants={headerItemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E0D5C5] text-[#A47E3B] text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            <Activity className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Educational Guidance</span>
          </motion.div>

          <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-3 sm:mb-4">
            Supporting Your Health Journey
          </motion.h2>

          <motion.p variants={headerItemVariants} className="text-sm sm:text-base lg:text-lg text-[#5C6762] leading-relaxed max-w-2xl mx-auto">
            We provide evidence-informed educational insights and holistic wellness strategies
            designed to nurture your body’s natural alignment and resilience.
          </motion.p>

          <motion.p variants={headerItemVariants} className="mt-2 text-[11px] sm:text-xs text-[#8C6D58] italic">
            *Educational overview: Sparsh focuses on lifestyle ergonomics, spine consciousness, and
            natural therapeutics.
          </motion.p>
        </motion.div>

        {/* Interactive Exploration: Condition Selector Buttons (Swipeable on mobile) */}
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 scrollbar-none px-1">
          {clinic.conditions.map((item) => {
            const Icon = getConditionIcon(item.iconName);
            const isActive = item.id === selectedConditionId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedConditionId(item.id)}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#143527] text-[#FAF8F5] shadow-md border border-[#143527]'
                    : 'bg-white text-[#3D4742] border border-[#E2D8CC] hover:border-[#C5A059] hover:bg-[#FAF6EE]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-[#DFCA9B]' : 'text-[#2D6A4F]'}`} />
                <span className="whitespace-nowrap">{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Condition Deep-Dive Display Card */}
        <div className="bg-white rounded-[24px] sm:rounded-3xl p-5 sm:p-10 lg:p-12 border border-[#E2D8CC] shadow-xs relative overflow-hidden">
          {/* Subtle background tone */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FAF4EB]/60 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Overview & Scope */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-[#A47E3B] bg-[#FAF4EB] px-3 py-1 rounded-full border border-[#EADFCF] mb-3">
                  Holistic Focus Area
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#143527] font-semibold mb-4">
                  {selectedCondition.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5C6762] leading-relaxed mb-6">
                  {selectedCondition.description}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7DFD4] space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#143527] uppercase tracking-wide">
                  <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                  <span>The Sparsh Perspective</span>
                </div>
                <p className="text-xs text-[#5C6762] leading-relaxed">
                  Rather than viewing strain in isolation, we examine habitual postures, mechanical
                  repetitive stress, sleep support, and emotional bracing.
                </p>
                <button
                  onClick={onOpenBooking}
                  className="mt-2 w-full py-2.5 rounded-xl bg-[#143527] hover:bg-[#1D4A37] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#DFCA9B]" />
                  <span>Discuss Your Wellness Goals</span>
                </button>
              </div>
            </div>

            {/* Educational Notes & Lifestyle Tips */}
            <div className="lg:col-span-7 space-y-6">
              {/* Educational Insights Box */}
              <div className="p-6 rounded-2xl bg-[#FBF9F6] border border-[#EADFCF]">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-4 h-4 text-[#A47E3B]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527]">
                    Educational Understanding
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {selectedCondition.educationalNotes.map((note, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D4742]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0" />
                      <span className="leading-relaxed">{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Lifestyle Micro-Habits */}
              <div className="p-6 rounded-2xl bg-[#F4EFEA]/80 border border-[#E2D8CC]">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-[#2D6A4F]" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527]">
                    Practical Everyday Self-Care
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {selectedCondition.lifestyleTips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D4742]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] mt-2 shrink-0" />
                      <span className="leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
