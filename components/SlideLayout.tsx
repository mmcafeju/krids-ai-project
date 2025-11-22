import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, title, subtitle, className = "" }) => {
  return (
    <div className={`w-full h-full flex flex-col p-8 md:p-12 lg:p-16 max-w-7xl mx-auto ${className}`}>
      {(title || subtitle) && (
        <div className="mb-8 md:mb-12 border-b border-slate-700 pb-4">
          {subtitle && <h3 className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-2">{subtitle}</h3>}
          {title && <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>}
        </div>
      )}
      <div className="flex-1 relative overflow-hidden">
        {children}
      </div>
    </div>
  );
};