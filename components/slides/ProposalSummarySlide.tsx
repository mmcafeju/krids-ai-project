
import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Quote, CheckCircle2, TrendingUp, Zap, MousePointerClick } from 'lucide-react';

export const ProposalSummarySlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="제안 요약 및 추진 제언" subtitle="Executive Summary">
      <div className="flex flex-col h-full gap-6 lg:gap-8 justify-between">
        
        {/* Main Conclusion Box - Reduced padding slightly for safety */}
        <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-l-4 border-blue-500 p-6 md:p-8 rounded-r-xl shadow-lg shrink-0">
          <div className="flex items-start gap-4">
            <Quote size={32} className="text-blue-400 opacity-50 shrink-0 md:w-10 md:h-10" />
            <div>
              <h3 className="text-xl md:text-3xl font-bold text-white mb-3 leading-snug">
                "반복성과 표준화가 가능한 <span className="text-blue-400 border-b-2 border-blue-500/50">성과지표 기반 보고 시스템</span>은<br/> 
                AI 자동화 적합성이 매우 높습니다."
              </h3>
              <p className="text-slate-300 text-base md:text-lg">
                현재 기관들이 수행하는 작업 중 <span className="text-yellow-400 font-bold">70% 이상</span>이 자동화 가능하며, 
                학회는 이를 통해 단순 용역 수행을 넘어 <span className="text-white font-bold">플랫폼 오너</span>로 도약할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Action Strategy - Uses flex-1 to take available space but allow shrinking */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-1 min-h-0">
            <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all flex flex-col justify-center">
                <div className="bg-blue-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-blue-400 mb-3">
                    <Zap size={20} />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">1. 데이터 구조화</h4>
                <p className="text-slate-400 text-xs md:text-sm">전문 지표 데이터 구조 설계 및 표준화 선점</p>
            </div>
             <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all flex flex-col justify-center">
                <div className="bg-indigo-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400 mb-3">
                    <MousePointerClick size={20} />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">2. 템플릿 & 플랫폼</h4>
                <p className="text-slate-400 text-xs md:text-sm">기관 맞춤형 보고서 템플릿 및 자동화 도구 판매</p>
            </div>
             <div className="bg-slate-800 p-5 rounded-2xl border border-slate-700 hover:border-teal-500/50 transition-all flex flex-col justify-center">
                <div className="bg-teal-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-teal-400 mb-3">
                    <TrendingUp size={20} />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">3. 구독형 SaaS 전환</h4>
                <p className="text-slate-400 text-xs md:text-sm">일회성 용역에서 지속 가능한 정기 구독 모델로 전환</p>
            </div>
        </div>

        {/* Action Plan & Footnotes - shrink-0 to prevent compression */}
        <div className="flex flex-col md:flex-row gap-6 shrink-0 pt-2">
            <div className="flex-1 bg-slate-800/50 p-5 rounded-xl border border-slate-700">
                <h4 className="text-white font-bold flex items-center gap-2 mb-3 text-sm md:text-base">
                    <CheckCircle2 size={18} className="text-green-500" />
                    추진 로드맵 요약
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-slate-300 text-xs md:text-sm">
                    <span className="px-2.5 py-1 bg-slate-700 rounded-full font-bold text-slate-400 whitespace-nowrap">Step 1</span> MVP 데모
                    <span className="text-slate-600">→</span>
                    <span className="px-2.5 py-1 bg-slate-700 rounded-full font-bold text-slate-400 whitespace-nowrap">Step 2</span> 시범 적용
                    <span className="text-slate-600">→</span>
                    <span className="px-2.5 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full font-bold whitespace-nowrap">Step 3</span> 확장형 SaaS
                </div>
            </div>

            <div className="flex-1 space-y-2 justify-center flex flex-col">
                 <div className="flex gap-2 text-[11px] md:text-xs text-slate-500">
                    <span className="font-bold text-slate-400 shrink-0">1) SaaS:</span>
                    <p>웹 기반 구독형 소프트웨어. 설치 없이 사용, 정기 구독 수익 확보 모델.</p>
                 </div>
                 <div className="flex gap-2 text-[11px] md:text-xs text-slate-500">
                    <span className="font-bold text-slate-400 shrink-0">2) ROI:</span>
                    <p>투자 대비 수익률. 시스템 도입 시의 시간/비용 절감 효과 측정 지표.</p>
                 </div>
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};
