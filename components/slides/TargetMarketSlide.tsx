import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Landmark, Network, BarChart3, GraduationCap, Scale } from 'lucide-react';

export const TargetMarketSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="사업 수주 가능성 높은 5대 핵심 분야" subtitle="Target Market & Opportunities">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        
        {/* Left: Introduction & Context */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-2xl border border-blue-500/30">
            <h3 className="text-xl font-bold text-white mb-4">대학 및 고등교육기관 재정지원 사업 분석</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              국가전략정보포털 및 대학재정알리미 분석 결과, 학회가 진입하여 <span className="text-blue-400 font-bold">즉시 수주 및 자동화</span>가 가능한 5가지 핵심 영역이 도출되었습니다.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
               <span className="w-2 h-2 rounded-full bg-blue-500"></span>
               <span>기존 인력 중심 용역 → 데이터 기반 자동화 전환 최적 분야</span>
            </div>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 flex-1">
             <h4 className="text-lg font-bold text-slate-200 mb-4">시장 진입 전략 포인트</h4>
             <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold">1</div>
                    <span>반복적 수요: 매년/주기적으로 제출해야 하는 보고서</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold">2</div>
                    <span>데이터 구조화 용이: 정량 지표와 표준 양식 존재</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-white font-bold">3</div>
                    <span>예산 규모: 대학혁신지원, RIS 등 대규모 국책 사업 연계</span>
                </li>
             </ul>
          </div>
        </div>

        {/* Right: 5 Key Areas List */}
        <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
            
            {/* Item 1 */}
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg text-blue-400 shrink-0">
                    <Landmark size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">대학혁신지원사업</h4>
                    <p className="text-sm text-slate-400 mt-1">대학 자체 역량 강화 및 교육 여건 개선을 위한 핵심 지원 사업</p>
                </div>
            </div>

            {/* Item 2 */}
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-colors flex items-start gap-4">
                <div className="bg-indigo-500/10 p-3 rounded-lg text-indigo-400 shrink-0">
                    <Network size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">지자체-대학 협력 기반 지역혁신사업 (RIS)</h4>
                    <p className="text-sm text-slate-400 mt-1">지역 균형 발전 및 지자체-대학 간 협력 데이터 분석 및 전략 수립</p>
                </div>
            </div>

            {/* Item 3 */}
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors flex items-start gap-4">
                <div className="bg-teal-500/10 p-3 rounded-lg text-teal-400 shrink-0">
                    <BarChart3 size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">성과기반 재정지원 사업</h4>
                    <p className="text-sm text-slate-400 mt-1">교육비환원율, 취업률 등 대학 핵심 성과지표(KPI) 기반 분석 보고서</p>
                </div>
            </div>

            {/* Item 4 */}
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg text-purple-400 shrink-0">
                    <GraduationCap size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">학생 재정지원 및 장학 사업</h4>
                    <p className="text-sm text-slate-400 mt-1">맞춤형 국가장학금 등 학생 지원 효과성 분석 및 통계 리포트</p>
                </div>
            </div>

             {/* Item 5 */}
            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors flex items-start gap-4">
                <div className="bg-orange-500/10 p-3 rounded-lg text-orange-400 shrink-0">
                    <Scale size={24} />
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">재정운용 구조 및 지표 관리</h4>
                    <p className="text-sm text-slate-400 mt-1">대학 재정 건전성, 운영비 구조 점검 및 개선 방안 도출</p>
                </div>
            </div>

        </div>

      </div>
       <style>{`
            .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #1e293b; 
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #475569; 
                border-radius: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #64748b; 
            }
        `}</style>
    </SlideLayout>
  );
};