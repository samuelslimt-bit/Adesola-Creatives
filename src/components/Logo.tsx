import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showSubtitle = false }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-20',
    xl: 'h-32',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 500 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${sizeClasses[size]} w-auto max-w-full drop-shadow-md`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dark Background canvas if needed, otherwise transparent */}
        {/* Heavy Bold Sans Serif Text for ADESOLA */}
        <text
          x="250"
          y="110"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="84"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Montserrat', 'Arial Black', sans-serif"
          letterSpacing="2"
        >
          ADESOLA
        </text>

        {/* Cursive / Handwritten Script Overlay for Creatives */}
        <text
          x="250"
          y="155"
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="68"
          fontFamily="'Brush Script MT', 'Dancing Script', 'Great Vibes', 'Caveat', cursive"
          fontStyle="italic"
          fontWeight="400"
        >
          Creatives
        </text>
      </svg>
      {showSubtitle && (
        <span className="text-[10px] tracking-[0.25em] text-neutral-400 font-semibold uppercase -mt-1">
          LAGOS • WORLDWIDE
        </span>
      )}
    </div>
  );
};
