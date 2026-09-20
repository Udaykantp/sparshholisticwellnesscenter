import React, { useState } from 'react';
import { Home, LayoutGrid, Calendar, Image as ImageIcon, User } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'book' | 'gallery' | 'more'>('home');

  const scrollTo = (id: string, tab: 'home' | 'services' | 'book' | 'gallery' | 'more') => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/98 backdrop-blur-md border-t border-[#ECE5D9] shadow-lg px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1 select-none"
    >
      <div className="flex items-center justify-around max-w-md mx-auto relative">
        {/* 1. Home */}
        <button
          onClick={() => scrollTo('hero', 'home')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeTab === 'home' ? 'text-[#1E4D3A]' : 'text-[#718096] hover:text-[#1E4D3A]'
          }`}
          aria-label="Home"
        >
          <Home className={`w-5 h-5 ${activeTab === 'home' ? 'stroke-[2.2]' : 'stroke-[1.75]'}`} />
          <span className="text-[10px] font-medium tracking-tight mt-1">Home</span>
        </button>

        {/* 2. Services */}
        <button
          onClick={() => scrollTo('services', 'services')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeTab === 'services' ? 'text-[#1E4D3A]' : 'text-[#718096] hover:text-[#1E4D3A]'
          }`}
          aria-label="Wellness Services"
        >
          <LayoutGrid className={`w-5 h-5 ${activeTab === 'services' ? 'stroke-[2.2]' : 'stroke-[1.75]'}`} />
          <span className="text-[10px] font-medium tracking-tight mt-1">Services</span>
        </button>

        {/* 3. Book - Elevated Central Floating Action Button */}
        <div className="flex flex-col items-center justify-center flex-1 -mt-5 relative z-10">
          <button
            onClick={() => {
              setActiveTab('book');
              onOpenBooking();
            }}
            className="w-12 h-12 rounded-full bg-[#1E4D3A] text-white flex items-center justify-center shadow-md border-[3.5px] border-[#FAF7F2] transition-transform active:scale-95 cursor-pointer hover:bg-[#153B2B]"
            aria-label="Book Consultation"
          >
            <Calendar className="w-5 h-5 text-[#DFCA9B]" />
          </button>
          <span className="text-[10px] font-semibold text-[#1E4D3A] tracking-tight mt-0.5">
            Book
          </span>
        </div>

        {/* 4. Gallery */}
        <button
          onClick={() => scrollTo('gallery', 'gallery')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeTab === 'gallery' ? 'text-[#1E4D3A]' : 'text-[#718096] hover:text-[#1E4D3A]'
          }`}
          aria-label="Clinic Gallery"
        >
          <ImageIcon className={`w-5 h-5 ${activeTab === 'gallery' ? 'stroke-[2.2]' : 'stroke-[1.75]'}`} />
          <span className="text-[10px] font-medium tracking-tight mt-1">Gallery</span>
        </button>

        {/* 5. More */}
        <button
          onClick={() => scrollTo('contact', 'more')}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors cursor-pointer ${
            activeTab === 'more' ? 'text-[#1E4D3A]' : 'text-[#718096] hover:text-[#1E4D3A]'
          }`}
          aria-label="More Options and Contact"
        >
          <User className={`w-5 h-5 ${activeTab === 'more' ? 'stroke-[2.2]' : 'stroke-[1.75]'}`} />
          <span className="text-[10px] font-medium tracking-tight mt-1">More</span>
        </button>
      </div>
    </nav>
  );
};
