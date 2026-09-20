import React from 'react';
import { EducationArticle } from '../types';
import { X, Clock, CheckCircle2, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: EducationArticle | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onOpenBooking }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E2D8CC] relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-[#5C6762] hover:text-[#143527] transition-colors shadow-xs"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A47E3B] bg-[#FAF4EB] px-3 py-1 rounded-full border border-[#EADFCF]">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-[#5C6762]">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              {article.readTime}
            </span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#143527] mb-2 leading-snug">
            {article.title}
          </h3>
        </div>

        <div className="rounded-2xl overflow-hidden mb-6 h-52 bg-[#FAF6EE]">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#3D4742] leading-relaxed mb-6">
          {article.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="p-5 rounded-2xl bg-white border border-[#E5DED4] mb-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527] mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Key Everyday Takeaways</span>
          </h4>
          <div className="space-y-2">
            {article.takeaways.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D4742]">
                <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-5 border-t border-[#E5DED4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#8C6D58]">
            Educational article by Sparsh Holistic Health Center.
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenBooking();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#143527] hover:bg-[#1D4A37] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs"
          >
            Schedule Assessment
          </button>
        </div>
      </div>
    </div>
  );
};
