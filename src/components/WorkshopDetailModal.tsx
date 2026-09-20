import React from 'react';
import { WorkshopItem } from '../types';
import { X, Calendar, MapPin, CheckCircle2, Users, ArrowRight } from 'lucide-react';

interface WorkshopDetailModalProps {
  workshop: WorkshopItem | null;
  onClose: () => void;
  onInquire: (workshopTitle: string) => void;
}

export const WorkshopDetailModal: React.FC<WorkshopDetailModalProps> = ({
  workshop,
  onClose,
  onInquire
}) => {
  if (!workshop) return null;

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
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-5">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#A47E3B] bg-[#FAF4EB] px-3 py-1 rounded-full border border-[#EADFCF] mb-3">
            {workshop.category}
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#143527] mb-2">
            {workshop.title}
          </h3>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#5C6762] pt-1">
            <span className="flex items-center gap-1.5 text-[#143527] font-medium">
              <Calendar className="w-4 h-4 text-[#A47E3B]" />
              {workshop.schedule}
            </span>
            <span className="flex items-center gap-1.5 text-[#143527] font-medium">
              <MapPin className="w-4 h-4 text-[#2D6A4F]" />
              {workshop.location}
            </span>
            <span className="px-2 py-0.5 rounded bg-[#FAF4EB] border border-[#E0D5C5] text-[11px] text-[#A47E3B]">
              {workshop.mode}
            </span>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-6 h-52 bg-[#FAF6EE]">
          <img
            src={workshop.image}
            alt={workshop.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-6 text-sm text-[#3D4742]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527] mb-2">
              Workshop Overview
            </h4>
            <p className="text-[#5C6762] leading-relaxed">{workshop.fullDescription}</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E5DED4]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527] mb-3">
              Practical Learning Outcomes
            </h4>
            <div className="space-y-2.5">
              {workshop.learningOutcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3D4742]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[#E5DED4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#8C6D58]">
            Individual & corporate group registrations welcome.
          </span>

          <button
            onClick={() => {
              onClose();
              onInquire(workshop.title);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#143527] hover:bg-[#1D4A37] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <span>Register Interest</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#DFCA9B]" />
          </button>
        </div>
      </div>
    </div>
  );
};
