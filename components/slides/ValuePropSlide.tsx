import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Bot, UserCheck, ArrowRightLeft } from 'lucide-react';

export const ValuePropSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout className="flex flex-col justify-center items-center text-center">
      <div className="mb-8">
        <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm">
          Core Value Proposition
        </span>
      </div>
      
      <h2 className="text-4xl md:text-6xl font-black text-white mb-16 leading-tight">
        "신뢰 기반 <span className="text-blue-400">자동화</span> 보고 시스템"
      </h2>

      <div className="relative w-full max-w-4xl bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* AI Side */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center text-slate-400">
              <Bot size={48} />
            </div>
            <h3 className="text-xl font-bold text-white">AI (System)</h3>
            <p className="text-slate-400 text-sm">초안 작성, 데이터 분석, 차트 생성<br/>(Efficiency)</p>
          </div>

          {/* Connection */}
          <div className="flex flex-col items-center justify-center gap-2 text-blue-400">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center animate-pulse border border-blue-500/30">
              <ArrowRightLeft size={24} />
            </div>
            <span className="font-bold text-sm tracking-wider">SYNERGY</span>
          </div>

          {/* Human Side */}
          <div className="flex flex-col items-center gap-4 flex-1">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-900/50">
              <UserCheck size={48} />
            </div>
            <h3 className="text-xl font-bold text-white">학회 (Society)</h3>
            <p className="text-slate-400 text-sm">검증, 표준화, 신뢰 부여<br/>(Authority & Trust)</p>
          </div>
          
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-2xl font-medium text-slate-300">
            "AI는 초안을 작성하고, <br className="md:hidden"/>학회는 <span className="text-yellow-300 font-bold">검증·표준·신뢰</span>를 제공합니다."
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};