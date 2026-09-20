import React from 'react';
import { motion } from 'motion/react';
import { clinic } from '../data/clinic';
import { EducationArticle } from '../types';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { headerContainerVariants, headerItemVariants, headerViewportConfig } from '../utils/animations';

interface EducationSectionProps {
  onSelectArticle: (article: EducationArticle) => void;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ onSelectArticle }) => {
  return (
    <section className="py-12 sm:py-20 lg:py-24 bg-[#FAF8F5] relative select-none">
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
            <BookOpen className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Educational Insights</span>
          </motion.div>

          <motion.h2 variants={headerItemVariants} className="font-serif-luxury text-[26px] sm:text-4xl md:text-5xl text-[#143527] leading-[1.2] tracking-tight font-medium mb-3 sm:mb-4">
            Health Knowledge That Empowers You
          </motion.h2>

          <motion.p variants={headerItemVariants} className="text-sm sm:text-base lg:text-lg text-[#5C6762] leading-relaxed max-w-2xl mx-auto">
            Accessible educational insights on posture, spine awareness, and natural self-care
            habits inspired by our daily clinical interactions and workshops.
          </motion.p>
        </motion.div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clinic.educationArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5DED4] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image & Read Time */}
              <div className="relative h-44 overflow-hidden bg-[#FAF6EE]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#143527] border border-[#C5A059]/40">
                    {article.category}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-3 bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded text-[10px] flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#DFCA9B]" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#143527] mb-2 leading-snug group-hover:text-[#2D6A4F] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#5C6762] leading-relaxed line-clamp-3 mb-4">
                    {article.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0EAE1]">
                  <button
                    onClick={() => onSelectArticle(article)}
                    className="text-xs font-semibold text-[#143527] hover:text-[#2D6A4F] flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059] transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
