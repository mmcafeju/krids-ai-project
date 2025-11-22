import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Users, Globe, Search, BookOpen, ArrowRight } from 'lucide-react';

export const MarketStatusSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="국내 보고서 용역 시장 현황" subtitle="Current Market Status">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        
        {/* Left: The Problem (Red Ocean) vs Opportunity (Blue Ocean) */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Users size={20} className="text-slate-400" />
                기존 시장 (Red Ocean)
              </h3>
              <span className="text-xs font-bold bg-red-500/20 text-red-400 px-2 py-1 rounded">포화 상태</span>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5 shrink-0"></span>
                <span>주문연구산업(용역형 조사)이 제도적으로 활성화됨 (KISTEP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5 shrink-0"></span>
                <span>수많은 영세 업체들이 인력 기반으로 경쟁 중</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5 shrink-0"></span>
                <span><strong className="text-red-400">플랫폼·자동화 서비스 부재</strong>: 디지털 전환이 더딘 상태</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center -my-3 relative z-10">
             <div className="bg-slate-900 border border-slate-700 p-2 rounded-full text-slate-500">
               <ArrowRight size={20} className="rotate-90 lg:rotate-90" />
             </div>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5">
                <Globe size={100} className="text-blue-400" />
             </div>
             <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Globe size={20} className="text-blue-400" />
                새로운 기회 (Blue Ocean)
              </h3>
              <span className="text-xs font-bold bg-blue-500/20 text-blue-400 px-2 py-1 rounded">선점 가능</span>
            </div>
            <p className="text-sm text-blue-100 mb-3">
              "보고서 작성·분석 시장에서 <br/><strong>플랫폼화·자동화된 서비스</strong>로 전환된 업체는 거의 없음"
            </p>
            <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
               <span className="text-xs text-blue-300 font-bold block mb-1">First Mover Advantage</span>
               <span className="text-xs text-slate-300">학회의 전문성과 자동화를 결합하여 시장 선점 가능</span>
            </div>
          </div>
        </div>

        {/* Right: Data Evidence */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 h-full flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-3">시장 잠재력 데이터 증거</h3>
            
            <div className="space-y-8 flex-1">
              {/* Data Point 1 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 border border-indigo-500/20">
                  <Search size={24} />
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">39,368<span className="text-sm text-slate-500 font-normal ml-1">건</span></div>
                  <h4 className="text-sm font-bold text-indigo-300 mb-1">NKIS 등록 연구보고서 수</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    경제인문사회연구회 국가정책연구포털(NKIS) 기준.<br/>
                    공공 영역에서 생산되는 보고서의 방대한 양을 증명.
                  </p>
                </div>
              </div>

              {/* Data Point 2 */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0 border border-teal-500/20">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black text-white mb-1">대학·공공기관 예산</div>
                  <h4 className="text-sm font-bold text-teal-300 mb-1">지속적 증가 추세</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    한국사학진흥재단(KASFO) 대학재정알리미 통계 참조.<br/>
                    고등교육기관의 연구·조사 용역 예산은 꾸준히 존재하며, <br/>
                    <span className="text-white underline decoration-teal-500/50">효율화를 위한 플랫폼 도입 수요</span>로 전환 가능.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                <p className="text-sm text-slate-400">
                    <span className="text-yellow-400 font-bold">Insight:</span> 예산은 존재하나, 이를 흡수할 <br/>
                    "구독형 자동화 서비스"는 아직 없습니다.
                </p>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};