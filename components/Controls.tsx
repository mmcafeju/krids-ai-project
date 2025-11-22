import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

export const Controls: React.FC<ControlsProps> = ({ currentSlide, totalSlides, onNext, onPrev }) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900/90 backdrop-blur-sm border-t border-slate-800 p-4 z-50 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-sm font-mono text-slate-400">
          {currentSlide + 1} / {totalSlides}
        </span>
        <div className="w-32 md:w-64 h-1.5 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex gap-2">
        <button 
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-full hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-30 disabled:hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/50"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};