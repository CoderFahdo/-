
import React from 'react';

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div 
      className={`relative group perspective transition-all duration-700 ease-out hover:scale-[1.03] ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-[#d4af37] to-[#064e3b] rounded-[2.5rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
      <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl flex flex-col h-full overflow-hidden border border-[#d4af37]/20">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full -mr-10 -mt-10 transition-all group-hover:w-32 group-hover:h-32"></div>
        {children}
      </div>
    </div>
  );
};
