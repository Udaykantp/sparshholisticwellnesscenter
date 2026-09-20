import React from 'react';
import { Leaf, User, BookOpen, Heart } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const items = [
    {
      title: 'Holistic Approach',
      subtitle: 'Care for your mind, body and lifestyle',
      icon: Leaf
    },
    {
      title: 'Personalized Care',
      subtitle: 'Tailored to your unique needs',
      icon: User
    },
    {
      title: 'Health & Wellness Education',
      subtitle: 'Learn. Practice. Grow.',
      icon: BookOpen
    },
    {
      title: 'Patient-Centered Guidance',
      subtitle: 'Your wellbeing is our priority',
      icon: Heart
    }
  ];

  return (
    <section className="bg-[#FAF7F2] relative py-4 sm:py-8 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Soft white rounded container card matching mobile mockup */}
        <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#ECE5D9] shadow-xs p-4 sm:p-6">
          <div className="grid grid-cols-4 divide-x divide-[#ECE5D9]">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center text-center px-1 sm:px-4 py-1"
                >
                  {/* Pale Sage Circular Icon Container */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#E5ECE7] text-[#2D6A4F] flex items-center justify-center shrink-0 mb-2 shadow-2xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-luxury font-medium text-[#143527] text-xs sm:text-[14px] leading-tight max-w-[95px] sm:max-w-none">
                    {item.title}
                  </h3>

                  {/* Subtitle visible on tablet/desktop */}
                  <p className="hidden md:block text-[11px] text-[#5C6762] leading-snug font-normal mt-1 max-w-[160px]">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
