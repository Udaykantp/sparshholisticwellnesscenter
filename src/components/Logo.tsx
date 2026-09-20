import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  showSubtitle?: boolean;
  showText?: boolean;
  emblemOnly?: boolean;
  className?: string;
  layout?: 'stacked' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  showSubtitle = true,
  showText = true,
  emblemOnly = false,
  className = '',
  layout = 'horizontal',
  size = 'md'
}) => {
  const isLight = variant === 'light' || variant === 'footer';
  const shouldRenderText = showText && !emblemOnly;

  return (
    <div
      className={`select-none flex ${
        layout === 'stacked' ? 'flex-col items-center text-center' : 'items-center gap-2.5 sm:gap-3 text-left'
      } ${className}`}
    >
      {/* Official Sparsh Emblem (The Human Garage / Holistic Center Medallion) */}
      <div
        className={`relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          size === 'sm'
            ? 'w-10 h-10'
            : size === 'lg'
            ? 'w-16 h-16'
            : size === 'hero'
            ? 'w-24 h-24'
            : 'w-11 h-11 sm:w-12 sm:h-12'
        }`}
      >
        <svg
          viewBox="0 0 160 160"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gold Gradients */}
            <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFCA9B" />
              <stop offset="40%" stopColor="#B38738" />
              <stop offset="70%" stopColor="#F5E7C4" />
              <stop offset="100%" stopColor="#8C6321" />
            </linearGradient>

            {/* Navy Hands Gradient */}
            <linearGradient id="navyHands" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1B3A57" />
              <stop offset="100%" stopColor="#0B1A2C" />
            </linearGradient>

            {/* Leaf Gradient */}
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#78B13F" />
              <stop offset="100%" stopColor="#2D6A28" />
            </linearGradient>

            {/* Leaf 2 Gradient */}
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8EC74A" />
              <stop offset="100%" stopColor="#3F7A33" />
            </linearGradient>

            {/* Rich Terracotta / Crimson Floral "S" Gradient */}
            <linearGradient id="crimsonS" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9B2C1C" />
              <stop offset="50%" stopColor="#7A1D13" />
              <stop offset="100%" stopColor="#53100A" />
            </linearGradient>

            {/* Spine Bone Gradient */}
            <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FAF4E6" />
              <stop offset="60%" stopColor="#E2D4B7" />
              <stop offset="100%" stopColor="#C4AF8B" />
            </linearGradient>

            {/* Pattern for intricate floral fill on the S */}
            <pattern id="damaskPattern" width="16" height="16" patternUnits="userSpaceOnUse">
              <path
                d="M8 0 Q12 4 8 8 Q4 4 8 0 Z M0 8 Q4 12 0 16 Q-4 12 0 8 Z M16 8 Q20 12 16 16 Q12 12 16 8 Z"
                fill="#B83A28"
                opacity="0.5"
              />
            </pattern>
          </defs>

          {/* 1. Outer Golden Open Arc Ring */}
          <path
            d="M 28 85 A 58 58 0 1 1 132 85"
            stroke="url(#goldRim)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Inner hairline golden circle */}
          <path
            d="M 34 83 A 50 50 0 1 1 126 83"
            stroke="#DFCA9B"
            strokeWidth="1"
            opacity="0.6"
          />

          {/* 2. Vibrant Green Leaves at Top */}
          {/* Main upright leaf */}
          <path
            d="M 80 44 C 74 25 80 14 86 12 C 92 14 96 28 80 44 Z"
            fill="url(#leafGrad)"
          />
          <path
            d="M 80 44 Q 84 26 86 12"
            stroke="#CBE58B"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Secondary left angled leaf */}
          <path
            d="M 76 44 C 64 36 60 30 58 34 C 58 38 68 46 76 44 Z"
            fill="url(#leafGrad2)"
          />
          <path
            d="M 76 44 Q 65 38 58 34"
            stroke="#E3F4B5"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* 3. The Ornate Terracotta / Gold Serif "S" */}
          {/* Background gold border for the S */}
          <path
            d="M 104 52 C 102 44 94 40 82 40 C 68 40 60 48 60 58 C 60 70 78 74 88 80 C 100 86 104 94 104 104 C 104 118 90 126 76 126 C 62 126 54 118 52 108 L 64 108 C 66 114 70 118 78 118 C 86 118 92 112 92 104 C 92 94 76 90 66 84 C 54 78 48 70 48 58 C 48 44 62 32 82 32 C 98 32 112 40 114 52 Z"
            fill="url(#goldRim)"
          />

          {/* Main Crimson / Terracotta Body of the S */}
          <path
            d="M 101 53 C 99 46 92 43 82 43 C 70 43 63 50 63 58 C 63 68 80 72 89 78 C 99 84 101 92 101 103 C 101 115 89 123 76 123 C 64 123 57 116 55 108 L 64 108 C 66 112 70 115 77 115 C 84 115 89 110 89 103 C 89 94 74 90 65 84 C 55 78 51 71 51 58 C 51 46 63 35 82 35 C 96 35 108 42 111 53 Z"
            fill="url(#crimsonS)"
          />

          {/* Damask pattern overlay */}
          <path
            d="M 101 53 C 99 46 92 43 82 43 C 70 43 63 50 63 58 C 63 68 80 72 89 78 C 99 84 101 92 101 103 C 101 115 89 123 76 123 C 64 123 57 116 55 108 L 64 108 C 66 112 70 115 77 115 C 84 115 89 110 89 103 C 89 94 74 90 65 84 C 55 78 51 71 51 58 C 51 46 63 35 82 35 C 96 35 108 42 111 53 Z"
            fill="url(#damaskPattern)"
          />

          {/* 4. The Human Spine Integration (Cervical, Thoracic & Lumbar Column) */}
          <g id="spineColumn" transform="translate(4, -1)">
            {/* Cranium base */}
            <path
              d="M 76 46 C 74 44 78 40 82 40 C 86 40 88 44 86 47 C 84 49 80 50 78 48 Z"
              fill="url(#boneGrad)"
              stroke="#8C7355"
              strokeWidth="0.6"
            />
            {/* Eye socket / zygomatic detail */}
            <circle cx="82" cy="44" r="1.2" fill="#5A3A1A" />

            {/* Cervical vertebrae (Neck) */}
            <ellipse cx="78" cy="52" rx="3.5" ry="1.4" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="77" cy="56" rx="4" ry="1.5" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="76" cy="60" rx="4.2" ry="1.6" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />

            {/* Ribcage delicate arching ribs */}
            <path d="M 75 62 Q 70 65 67 70" stroke="url(#boneGrad)" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 75 66 Q 69 70 66 75" stroke="url(#boneGrad)" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 75 70 Q 70 75 68 81" stroke="url(#boneGrad)" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M 75 74 Q 72 79 70 85" stroke="url(#boneGrad)" strokeWidth="1.2" strokeLinecap="round" />

            {/* Thoracic vertebrae (Mid-back curving with S) */}
            <ellipse cx="75" cy="65" rx="4.5" ry="1.7" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="75" cy="70" rx="4.8" ry="1.8" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="75.5" cy="75" rx="5" ry="1.9" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="76.5" cy="80" rx="5" ry="1.9" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="78" cy="85" rx="5.2" ry="2" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />

            {/* Lumbar vertebrae (Lower back curving gracefully) */}
            <ellipse cx="79.5" cy="91" rx="5.5" ry="2.2" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="80.5" cy="97" rx="5.8" ry="2.3" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="80" cy="103" rx="5.8" ry="2.3" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />
            <ellipse cx="78.5" cy="109" rx="5.5" ry="2.2" fill="url(#boneGrad)" stroke="#7A5C3C" strokeWidth="0.5" />

            {/* Sacrum / Coccyx base */}
            <path
              d="M 75 112 Q 78 117 76 122 Q 74 116 75 112 Z"
              fill="url(#boneGrad)"
              stroke="#7A5C3C"
              strokeWidth="0.6"
            />
          </g>

          {/* 5. Two Supporting Deep Navy Cupped Hands with Golden Trim at Bottom */}
          {/* Left Hand */}
          <path
            d="M 24 86 C 26 102 42 120 70 125 C 56 123 38 114 30 102 C 26 96 25 90 24 86 Z"
            fill="url(#navyHands)"
          />
          {/* Left Hand outer golden outline */}
          <path
            d="M 24 86 C 26 102 42 120 70 125"
            stroke="url(#goldRim)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Right Hand */}
          <path
            d="M 136 86 C 134 102 118 120 90 125 C 104 123 122 114 130 102 C 134 96 135 90 136 86 Z"
            fill="url(#navyHands)"
          />
          {/* Right Hand outer golden outline */}
          <path
            d="M 136 86 C 134 102 118 120 90 125"
            stroke="url(#goldRim)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography: SPARSH & Holistic Health & Wellness Center */}
      {shouldRenderText && (
        <div className={`flex flex-col ${layout === 'stacked' ? 'items-center mt-1' : ''}`}>
          <div className="flex items-center">
            <span
              className={`font-serif font-bold uppercase tracking-[0.24em] transition-colors leading-none ${
                size === 'sm'
                  ? 'text-base sm:text-lg'
                  : size === 'lg'
                  ? 'text-2xl sm:text-3xl'
                  : size === 'hero'
                  ? 'text-3xl sm:text-4xl'
                  : 'text-lg sm:text-xl'
              } ${isLight ? 'text-[#FAF8F5]' : 'text-[#143527]'}`}
            >
              SPARSH
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`font-sans font-medium tracking-[0.14em] uppercase mt-1 leading-tight ${
                size === 'sm'
                  ? 'text-[8px] sm:text-[9px]'
                  : size === 'lg'
                  ? 'text-[11px] sm:text-xs'
                  : 'text-[9px] sm:text-[10px]'
              } ${isLight ? 'text-[#DFCA9B]' : 'text-[#5C6762]'}`}
            >
              Holistic Health &amp; Wellness Center
            </span>
          )}
        </div>
      )}
    </div>
  );
};
