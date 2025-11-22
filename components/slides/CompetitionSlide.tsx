import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { AlertTriangle, TrendingDown, ShieldCheck, Key, XCircle, CheckCircle2 } from 'lucide-react';

export const CompetitionSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="경쟁 환경 및 기회 분석 (SWOT)" subtitle="Landscape Analysis">
      <div className="flex flex-col h-full gap-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
          {/* Risks / Threats */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-red-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">진입 리스크 (Threats)</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <XCircle size={20} className="text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">AI 대체 가능성 심화</h4>
                  <p className="text-sm text-slate-400 mt-1">단순 보고서 작성 및 데이터 분석 기능은 범용 AI 툴이 빠르게 대체 중</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <TrendingDown size={20} className="text-red-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">가격 경쟁 (Red Ocean)</h4>
                  <p className="text-sm text-slate-400 mt-1">자동화로 인한 진입 장벽 하락으로 저가 수주 경쟁 가속화 예상</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full border border-red-500/50 flex items-center justify-center text-xs text-red-500 mt-1 shrink-0">!</div>
                <div>
                  <h4 className="font-bold text-slate-200">시장 포화</h4>
                  <p className="text-sm text-slate-400 mt-1">이미 다수의 데이터 기업들이 분석/리포트 시장에 진입 완료</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Opportunities */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-green-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                <Key size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white">기회 요인 (Opportunities)</h3>
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <ShieldCheck size={20} className="text-green-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">보안 및 폐쇄형 서비스 수요</h4>
                  <p className="text-sm text-slate-400 mt-1">대학·공공기관 등 데이터 보안이 핵심인 영역에서 '신뢰받는 기관' 선호</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 size={20} className="text-green-500 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-200">학회의 '검증력' 독점</h4>
                  <p className="text-sm text-slate-400 mt-1">AI가 흉내 낼 수 없는 '학회 인증 마크'와 전문 DB 보유는 강력한 진입 장벽</p>
                </div>
              </li>
               <li className="flex items-start gap-4">
                <div className="w-5 h-5 rounded-full border border-green-500/50 flex items-center justify-center text-xs text-green-500 mt-1 shrink-0">+</div>
                <div>
                  <h4 className="font-bold text-slate-200">구독 모델 전환 가능성</h4>
                  <p className="text-sm text-slate-400 mt-1">일회성 용역을 넘어선 지속적인 데이터 업데이트 및 멤버십 수익 창출</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Insight Banner */}
        <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600 text-center">
          <p className="text-lg text-slate-300">
            <span className="font-bold text-white">전략적 시사점:</span> 단순 "작성 대행"은 소멸하고, <span className="text-blue-400 font-bold">"보안 + 인증 + 전문성"</span>이 결합된 플랫폼만이 살아남습니다.
          </p>
        </div>

      </div>
    </SlideLayout>
  );
};