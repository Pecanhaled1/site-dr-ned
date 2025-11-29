import React from 'react';

interface SectionCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, children, className = '', icon }) => {
  return (
    <div className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-2">
          {icon && <span className="text-gold-400">{icon}</span>}
          <h3 className="text-xl font-semibold text-gold-300 uppercase tracking-widest">{title}</h3>
        </div>
      )}
      <div className="text-gray-300 font-light leading-relaxed">
        {children}
      </div>
    </div>
  );
};