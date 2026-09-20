import React, { useState } from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { WellnessService } from '../types';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';
import {
  Leaf,
  Flower2,
  Activity,
  UserCheck,
  Compass,
  Sparkles,
  Sun,
  RefreshCw,
  BookOpen,
  Users,
  ArrowRight
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: WellnessService) => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService
}) => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Four featured services matching the exact mobile mockup
  const featuredMobileServices = [
    {
      id: 'naturopathy',
      title: 'Naturopathy',
      desc: 'Natural healing methods for better health',
      icon: Leaf,
      category: 'Natural'
    },
    {
      id: 'wellness-therapies',
      title: 'Wellness Therapies',
      desc: 'Relax, rejuvenate and restore balance',
      icon: Flower2,
      category: 'Therapies'
    },
    {
      id: 'pain-spine',
      title: 'Pain & Spine Wellness',
      desc: 'Support for a healthier and stronger you',
      icon: Activity,
      category: 'Spine'
    },
    {
      id: 'lifestyle-guidance',
      title: 'Lifestyle Guidance',
      desc: 'Simple steps for long-term wellness',
      icon: UserCheck,
      category: 'Habits'
    }
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return Compass;
      case 'Leaf':
        return Leaf;
      case 'Sparkles':
        return Sparkles;
      case 'Activity':
        return Activity;
      case 'Sun':
        return Sun;
      case 'RefreshCw':
        return RefreshCw;
      case 'BookOpen':
        return BookOpen;
      case 'Users':
        return Users;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="services" className="py-12 sm:py-20 lg:py-24 bg-[#FAF7F2] relative select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Staggered Motion Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={headerViewportConfig}
          variants={headerContainerVariants}
          className="mb-6 sm:mb-10"
        >
          {/* Eyebrow: OUR WELLNESS SERVICES ──── */}
          <motion.div variants={headerItemVariants} className="flex items-center gap-3 mb-2 sm:mb-3">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-[#2D3748] uppercase">
              Our Wellness Services
            </span>
            <span className="w-10 sm:w-14 h-[1.5px] bg-[#C5BBAA] inline-block" />
          </motion.div>

          {/* Header Row: Title on Left, View All -> on Right */}
          <motion.div variants={headerItemVariants} className="flex items-center justify-between">
            <h2 className="font-serif-luxury text-[26px] sm:text-3xl lg:text-4xl text-[#1A202C] leading-tight font-normal">
              Explore Our Wellness Services
            </h2>

            <button
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="text-xs sm:text-sm font-semibold text-[#1E4D3A] hover:text-[#153B2B] flex items-center gap-1.5 transition-colors cursor-pointer group shrink-0 ml-4"
            >
              <span>{showAllMobile ? 'Show Less' : 'View All'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.div>
        </motion.div>

        {/* Mobile View: 2x2 Grid matching exact mockup (or expanded if View All is clicked) */}
        <div className="block lg:hidden">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {(showAllMobile
              ? clinic.services
              : clinic.services.slice(0, 4)
            ).map((service, idx) => {
              // Map to icon
              const item = featuredMobileServices[idx % 4];
              const Icon = item ? item.icon : Leaf;
              const displayDesc = item ? item.desc : service.shortDescription;

              return (
                <div
                  key={service.id}
                  onClick={() => onSelectService(service)}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#ECE5D9] shadow-xs hover:border-[#1E4D3A]/40 transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Pale Green Circular Icon Container */}
                    <div className="w-10 h-10 rounded-full bg-[#E8F0EC] text-[#2D6A4F] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-luxury font-medium text-sm sm:text-base text-[#1A202C] leading-snug mb-1 group-hover:text-[#1E4D3A] transition-colors">
                      {item ? item.title : service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-[11px] sm:text-xs text-[#5C6762] leading-relaxed font-normal line-clamp-2">
                      {displayDesc}
                    </p>
                  </div>

                  {/* Arrow on Bottom Right */}
                  <div className="flex justify-end mt-4">
                    <ArrowRight className="w-3.5 h-3.5 text-[#5C6762] group-hover:text-[#1E4D3A] group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View: Full 8-Card Grid with Complete Details */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {clinic.services.map((service) => {
            const Icon = getServiceIcon(service.iconName);
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bg-white rounded-2xl p-6 border border-[#ECE5D9] shadow-xs hover:shadow-md hover:border-[#1E4D3A]/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8F0EC] text-[#2D6A4F] flex items-center justify-center group-hover:bg-[#1E4D3A] group-hover:text-[#DFCA9B] transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-[#5C6762] bg-[#FAF7F2] px-2.5 py-1 rounded-full border border-[#ECE5D9]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-base text-[#1A202C] mb-2 leading-snug group-hover:text-[#1E4D3A] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#5C6762] leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs font-semibold text-[#1E4D3A]">
                  <span>Explore Plan</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
