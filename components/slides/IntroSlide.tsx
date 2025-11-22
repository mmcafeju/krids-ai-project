import React from 'react';
import { SlideProps } from '../../types';
import { Sparkles } from 'lucide-react';

export const IntroSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`h-full w-full flex flex-col justify-center items-center text-center transition-all duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'} bg-slate-900 relative overflow-hidden`}>
      
      {/* Background Gradient & Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 z-0"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 text-blue-300 backdrop-blur-md border border-white/10 rounded-full text-sm font-bold mb-12 shadow-2xl">
          <Sparkles size={16} className="text-blue-400" />
          <span className="tracking-wide">Strategic Report 2025</span>
        </div>
        
        {/* Title: Reduced size to 5xl, applied leading-snug (approx 1.375) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-snug mb-10 tracking-tight drop-shadow-2xl">
          AI 도입 이후
          {/* block and margin-top ensures visual separation regardless of line-height */}
          <span className="block mt-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">
            보고서 용역 시장의 변화
          </span>
        </h1>
        
        {/* Subtitle: Applied leading-loose (2.0) for wide spacing */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-300 max-w-4xl mb-16 leading-loose font-light">
          위기를 기회로: 학회의 전문성과 AI의 효율성을 결합한<br/>
          새로운 지속 가능 모델 제안
        </p>

        <div className="flex items-center gap-6 text-slate-500">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-600"></div>
          <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold text-slate-400">Future Strategy</span>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-600"></div>
        </div>
      </div>
    </div>
  );
};