import React from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { Instagram, Heart, ExternalLink, Sparkles } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#FAF8F5] relative border-t border-[#EAE3D8] select-none">
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
            <Instagram className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Social Connection</span>
          </motion.div>

          <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-2 sm:mb-3">
            Follow Sparsh Wellness
          </motion.h2>

          <motion.div variants={headerItemVariants} className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="text-sm sm:text-lg font-semibold tracking-wide text-[#143527]">
              {clinic.instagram.toUpperCase()}
            </span>
            <span className="text-[11px] sm:text-xs px-2 py-0.5 rounded-full bg-[#2D6A4F]/10 text-[#2D6A4F] font-medium">
              Official Page
            </span>
          </motion.div>

          <motion.p variants={headerItemVariants} className="text-sm sm:text-base text-[#5C6762] leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
            Daily spine wellness guidance, workshop moments, healthy living reminders, and community
            reflections straight from our centers.
          </motion.p>

          <motion.a
            variants={headerItemVariants}
            href={clinic.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#143527] hover:bg-[#1D4A37] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#DFCA9B]" />
            <span>Follow Us on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-75 ml-1" />
          </motion.a>
        </motion.div>

        {/* 6-Card Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {clinic.instagramFeed.map((item) => (
            <a
              key={item.id}
              href={clinic.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square border border-[#E5DED4] bg-neutral-100 shadow-xs hover:shadow-md transition-all duration-300 block"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Hover overlay with IG details */}
              <div className="absolute inset-0 bg-[#143527]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-between text-white text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#DFCA9B]">
                    {item.category}
                  </span>
                  <Instagram className="w-4 h-4 text-[#DFCA9B]" />
                </div>

                <div>
                  <p className="text-xs font-medium line-clamp-3 text-white/90 mb-1 leading-snug">
                    {item.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#DFCA9B]">
                    <Heart className="w-3 h-3 fill-[#DFCA9B]" />
                    <span>{item.likesPlaceholder}</span>
                  </div>
                </div>
              </div>

              {/* Corner badge for post type */}
              <div className="absolute top-2.5 right-2.5 group-hover:opacity-0 transition-opacity bg-black/40 backdrop-blur-xs text-white p-1 rounded-full">
                <Instagram className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
