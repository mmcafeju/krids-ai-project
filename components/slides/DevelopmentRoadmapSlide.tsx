import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { CheckCircle, Package, Rocket, DollarSign } from 'lucide-react';

export const DevelopmentRoadmapSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="개발 로드맵: 성과지표 자동화" subtitle="Development Roadmap">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
        
        {/* Left: 5-Step Roadmap */}
        <div className="lg:col-span-2 flex flex-col justify-between h-full pr-4">
           <div className="relative border-l-2 border-slate-700 ml-4 space-y-8 pb-2">
              
              {/* Step 1 */}
              <div className="relative pl-8 group">
                 <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                    <div className="text-xs font-bold text-blue-400 uppercase mb-1">Step 1: Foundation</div>
                    <h4 className="text-lg font-bold text-white mb-1">데이터 구조 표준화</h4>
                    <p className="text-sm text-slate-400">지표 정의(논문, 특허 등) 및 입력 형식 설계, 공통 Core 모델 구축</p>
                 </div>
              </div>

              {/* Step 2 */}
              <div className="relative pl-8 group">
                 <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-indigo-500 group-hover:bg-indigo-500 transition-colors"></div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                    <div className="text-xs font-bold text-indigo-400 uppercase mb-1">Step 2: Collection</div>
                    <h4 className="text-lg font-bold text-white mb-1">데이터 자동 수집 & 검증</h4>
                    <p className="text-sm text-slate-400">Excel/Web 업로드 파싱, AI 기반 오류 점검 및 편차 분석</p>
                 </div>
              </div>

              {/* Step 3 */}
              <div className="relative pl-8 group">
                 <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-purple-500 group-hover:bg-purple-500 transition-colors"></div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                    <div className="text-xs font-bold text-purple-400 uppercase mb-1">Step 3: Analysis</div>
                    <h4 className="text-lg font-bold text-white mb-1">성과 분석 자동화 모델</h4>
                    <p className="text-sm text-slate-400">GPT 기반 NLG(자연어 생성)로 "전년 대비 12% 증가..." 등 텍스트 생성</p>
                 </div>
              </div>

               {/* Step 4 */}
              <div className="relative pl-8 group">
                 <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-teal-500 group-hover:bg-teal-500 transition-colors"></div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                    <div className="text-xs font-bold text-teal-400 uppercase mb-1">Step 4: Generation</div>
                    <h4 className="text-lg font-bold text-white mb-1">보고서 템플릿 & PDF 제작</h4>
                    <p className="text-sm text-slate-400">기관별 템플릿 매핑, 차트 자동 생성, PDF/PPT 최종 출력</p>
                 </div>
              </div>

               {/* Step 5 */}
              <div className="relative pl-8 group">
                 <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-green-500 group-hover:bg-green-500 transition-colors"></div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:bg-slate-800 transition-colors">
                    <div className="text-xs font-bold text-green-400 uppercase mb-1">Step 5: SaaS</div>
                    <h4 className="text-lg font-bold text-white mb-1">SaaS 서비스화</h4>
                    <p className="text-sm text-slate-400">회원/기관 단위 정기 과금 시스템 및 웹 플랫폼 배포</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Right: MVP & Revenue */}
        <div className="flex flex-col gap-6">
           
           {/* MVP Priorities */}
           <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
              <div className="flex items-center gap-2 mb-4 text-yellow-400">
                 <Rocket size={24} />
                 <h3 className="text-lg font-bold">MVP 우선순위</h3>
              </div>
              <div className="space-y-3">
                 <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                    <span className="text-sm font-bold text-white">1. Excel 업로드 파싱</span>
                    <span className="text-xs text-yellow-500 font-bold">ROI 확인</span>
                 </div>
                 <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                    <span className="text-sm font-bold text-white">2. 자동 문장 생성</span>
                    <span className="text-xs text-yellow-500 font-bold">시간 절감</span>
                 </div>
                 <div className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                    <span className="text-sm font-bold text-white">3. PDF 자동 생성</span>
                    <span className="text-xs text-yellow-500 font-bold">가시적 성과</span>
                 </div>
              </div>
           </div>

           {/* Revenue Model */}
           <div className="bg-gradient-to-b from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 shadow-lg flex-1">
              <div className="flex items-center gap-2 mb-4 text-green-400">
                 <DollarSign size={24} />
                 <h3 className="text-lg font-bold">수익 모델 (BM)</h3>
              </div>
              <ul className="space-y-4 text-sm text-slate-300">
                 <li className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <div>
                       <strong className="text-white block">기관 라이선스</strong>
                       연간 계약, 학회 회원 할인
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <Package size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <div>
                       <strong className="text-white block">커스텀 템플릿</strong>
                       기관별 맞춤 양식 제작 비용
                    </div>
                 </li>
                 <li className="flex items-start gap-3">
                    <div className="w-[18px] h-[18px] rounded-full border border-green-500 flex items-center justify-center text-[10px] text-green-500 mt-0.5 font-bold">C</div>
                    <div>
                       <strong className="text-white block">컨설팅 & 교육</strong>
                       AI 도입 및 시스템 활용 교육
                    </div>
                 </li>
              </ul>
           </div>

        </div>

      </div>
    </SlideLayout>
  );
};