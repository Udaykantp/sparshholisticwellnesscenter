import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { clinic } from '../data/clinic';
import { AppointmentFormData } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  User,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

interface AppointmentFormProps {
  initialLocation?: string;
  initialService?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialLocation,
  initialService,
  onSuccess,
  isModal = false
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredLocation: initialLocation || clinic.locations[0].name,
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM – 1:00 PM)',
    areaOfConcern: initialService || 'Spine & Back Wellness',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [requestId, setRequestId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const concernOptions = [
    'Spine & Back Wellness',
    'Neck & Postural Balance',
    'Holistic Wellness Consultation',
    'Naturopathy & Natural Therapies',
    'Stress Relief & Relaxation',
    'Workshops & Health Education',
    'General Lifestyle Guidance',
    'Other Wellness Inquiry'
  ];

  const timeSlots = [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (1:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 7:00 PM)'
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim() || !formData.phoneNumber.trim()) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }

    if (formData.phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedId = `SPARSH-${Math.floor(100000 + Math.random() * 900000)}`;
      setRequestId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#C5A059', '#143527', '#2D6A4F', '#DFCA9B']
        });
      } catch {
        // Ignore if unsupported in environment
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      preferredLocation: initialLocation || clinic.locations[0].name,
      preferredDate: '',
      preferredTime: 'Morning (10:00 AM – 1:00 PM)',
      areaOfConcern: 'Spine & Back Wellness',
      message: ''
    });
  };

  const whatsappInquiryUrl = `https://wa.me/919623100222?text=${encodeURIComponent(
    `Hello Sparsh Wellness, I have submitted consultation inquiry #${requestId} for ${formData.fullName} at your ${formData.preferredLocation} center. Please confirm my appointment time.`
  )}`;

  return (
    <div
      id="booking"
      className={`relative bg-white rounded-3xl border border-[#E2D8CC] shadow-lg ${
        isModal ? 'p-5 sm:p-8' : 'p-5 sm:p-10 lg:p-12'
      }`}
    >
      {submitted ? (
        /* Clean Confidential Success State */
        <div className="text-center py-6 sm:py-10 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-full bg-[#EBF5EF] border border-[#2D6A4F]/30 flex items-center justify-center text-[#2D6A4F] mx-auto mb-5 shadow-xs">
            <CheckCircle2 className="w-8 h-8 stroke-[2]" />
          </div>

          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAF4EB] text-[#A47E3B] border border-[#E0D5C5] mb-2">
            Consultation Request Received
          </span>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#143527] mb-2">
            Thank You, {formData.fullName.split(' ')[0]}
          </h3>

          <p className="text-sm text-[#5C6762] max-w-md mx-auto leading-relaxed mb-6">
            Your appointment consultation inquiry has been logged with Reference{' '}
            <strong className="text-[#143527] font-mono tracking-wider">{requestId}</strong>. Our
            wellness coordination team will contact you on{' '}
            <strong className="text-[#143527]">{formData.phoneNumber}</strong> to confirm your slot
            at the <strong>{formData.preferredLocation}</strong> center.
          </p>

          <div className="max-w-md mx-auto p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE3D8] text-xs text-[#3D4742] mb-8 text-left space-y-1.5">
            <div className="flex justify-between">
              <span className="text-[#5C6762]">Selected Center:</span>
              <span className="font-semibold text-[#143527]">{formData.preferredLocation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C6762]">Preferred Slot:</span>
              <span className="font-semibold text-[#143527]">{formData.preferredTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#5C6762]">Area of Concern:</span>
              <span className="font-semibold text-[#143527]">{formData.areaOfConcern}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#143527] hover:bg-[#1D4A37] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#DFCA9B]" />
              <span>Connect on WhatsApp for Quick Confirmation</span>
            </a>

            <button
              onClick={handleReset}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-[#FAF6EE] text-[#143527] text-xs font-semibold tracking-wider uppercase transition-colors border border-[#E0D5C5]"
            >
              Submit Another Request
            </button>
          </div>

          <div className="mt-8 pt-4 border-t border-[#F0EAE1] flex items-center justify-center gap-2 text-xs text-[#8C6D58]">
            <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
            <span>Your information is held in strict medical confidentiality.</span>
          </div>
        </div>
      ) : (
        /* Appointment Form */
        <div>
          <div className="mb-6 sm:mb-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF4EB] border border-[#E0D5C5] text-[#A47E3B] text-xs font-semibold tracking-wider uppercase mb-3">
              <Calendar className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Personalized Healthcare</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#143527] mb-2">
              Request Your Consultation
            </h3>
            <p className="text-xs sm:text-sm text-[#5C6762] leading-relaxed">
              Schedule your individualized assessment across our centers in Ahilyanagar, Nashik,
              Pune, Delhi, or Mumbai.
            </p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left">
            {/* Full Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A47E3B]" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Ramesh Kulkarni"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A47E3B]" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="10-digit Mobile (e.g. 96231 00222)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Email & Preferred Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A47E3B]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com (optional)"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                  Preferred Center *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A47E3B] pointer-events-none" />
                  <select
                    name="preferredLocation"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors appearance-none cursor-pointer"
                  >
                    {clinic.locations.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.name} Center
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Preferred Date & Preferred Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A47E3B] pointer-events-none" />
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors appearance-none cursor-pointer"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Area of Concern */}
            <div>
              <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                Area of Concern / Focus
              </label>
              <select
                name="areaOfConcern"
                value={formData.areaOfConcern}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors appearance-none cursor-pointer"
              >
                {concernOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Message / Additional Information */}
            <div>
              <label className="block text-xs font-semibold text-[#143527] uppercase tracking-wider mb-1.5">
                Message or Specific Questions (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Briefly describe your posture goals, daily work habits, or questions..."
                className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E2D8CC] text-sm text-[#232B28] focus:outline-none focus:border-[#143527] focus:bg-white transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#143527] hover:bg-[#1D4A37] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <span>Processing Request...</span>
                ) : (
                  <>
                    <span>Request Consultation</span>
                    <ArrowRight className="w-4 h-4 text-[#DFCA9B]" />
                  </>
                )}
              </button>
            </div>

            {/* Privacy note */}
            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-[#8C6D58]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Confidential & secure. We respect your health privacy.</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
