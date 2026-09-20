import React from 'react';
import { WellnessService } from '../types';
import { X, CheckCircle2, Sparkles, Clock, Calendar, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: WellnessService | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
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

        <div className="mb-6">
          <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#A47E3B] bg-[#FAF4EB] px-3 py-1 rounded-full border border-[#EADFCF] mb-3">
            {service.category}
          </span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#143527] mb-2">
            {service.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-[#5C6762]">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Format: {service.durationPlaceholder}</span>
          </div>
        </div>

        <div className="space-y-6 text-sm text-[#3D4742]">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527] mb-2">
              Clinical & Holistic Overview
            </h4>
            <p className="text-[#5C6762] leading-relaxed">{service.fullDescription}</p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E5DED4]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Assessment & Care Focus</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.focusAreas.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#3D4742]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FAF4EB] border border-[#E0D5C5]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#143527] mb-3">
              Expected Patient Benefits
            </h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-[#3D4742]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[#E5DED4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#8C6D58] italic text-center sm:text-left">
            *Individually customized following initial assessment.
          </span>

          <button
            onClick={() => {
              onClose();
              onBook(service.title);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#143527] hover:bg-[#1D4A37] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#DFCA9B]" />
            <span>Consult For This Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};
