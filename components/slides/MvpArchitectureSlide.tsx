import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Database, FileSpreadsheet, ServerCog, FileText, MonitorCheck, Users, ArrowDown, ArrowRight } from 'lucide-react';

export const MvpArchitectureSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="MVP 시스템 구성도 (Block Diagram)" subtitle="System Architecture">
      <div className="h-full flex flex-col">
        
        {/* Intro Text */}
        <div className="mb-6 bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
           <p className="text-slate-300 text-sm">
             <span className="text-blue-400 font-bold">핵심 프로세스:</span> 데이터 업로드 → 자동 정리 → 지표 분석 → 보고서 생성 → 검토 → 제출/다운로드
           </p>
           <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">Flow Chart</span>
        </div>

        {/* Main Diagram Area */}
        <div className="flex-1 relative">
          {/* Background connectors for desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Arrow from Col 1 Bottom to Col 2 Bottom (connecting 3 to 4 visually if structured U-shape, or Z-shape) */}
            {/* Let's do 2 columns: Left (1-2-3) and Right (4-5-6). We need to connect 3 to 4. */}
            <svg className="w-full h-full opacity-20">
              <path d="M 25% 85% C 25% 95%, 75% 95%, 75% 85%" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="8 8" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
            
            {/* Column 1: Input & Processing */}
            <div className="flex flex-col gap-4">
              <h4 className="text-center text-blue-400 font-bold uppercase tracking-wider text-sm mb-2">Data Processing Pipeline</h4>
              
              {/* Block 1 */}
              <div className="flex-1 bg-slate-800 border-l-4 border-blue-500 rounded-r-xl p-5 shadow-lg relative flex flex-col justify-center group hover:bg-slate-750 transition-colors">
                 <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 bg-slate-900 border border-blue-500 rounded-full p-2 text-blue-500">
                    <FileSpreadsheet size={20} />
                 </div>
                 <h5 className="font-bold text-white text-lg mb-2 pl-4">① 데이터 업로드 모듈</h5>
                 <ul className="text-sm text-slate-400 space-y-1 pl-4 list-disc list-inside">
                    <li>Excel / CSV / Web Form 지원</li>
                    <li>대용량 파일 청크 업로드</li>
                 </ul>
                 <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-slate-600 z-10 lg:block hidden">
                    <ArrowDown size={24} />
                 </div>
              </div>

              {/* Block 2 */}
              <div className="flex-1 bg-slate-800 border-l-4 border-indigo-500 rounded-r-xl p-5 shadow-lg relative flex flex-col justify-center group hover:bg-slate-750 transition-colors mt-2">
                 <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 bg-slate-900 border border-indigo-500 rounded-full p-2 text-indigo-500">
                    <Database size={20} />
                 </div>
                 <h5 className="font-bold text-white text-lg mb-2 pl-4">② 데이터 전처리 · 검증 엔진</h5>
                 <ul className="text-sm text-slate-400 space-y-1 pl-4 list-disc list-inside">
                    <li>자동 파싱 (Parsing)</li>
                    <li>누락/중복 데이터 확인</li>
                    <li>값 검증 & 단위 자동 보정</li>
                 </ul>
                 <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-slate-600 z-10 lg:block hidden">
                    <ArrowDown size={24} />
                 </div>
              </div>

              {/* Block 3 */}
              <div className="flex-1 bg-slate-800 border-l-4 border-purple-500 rounded-r-xl p-5 shadow-lg relative flex flex-col justify-center group hover:bg-slate-750 transition-colors mt-2">
                 <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 bg-slate-900 border border-purple-500 rounded-full p-2 text-purple-500">
                    <ServerCog size={20} />
                 </div>
                 <h5 className="font-bold text-white text-lg mb-2 pl-4">③ 성과지표 분석 엔진</h5>
                 <ul className="text-sm text-slate-400 space-y-1 pl-4 list-disc list-inside">
                    <li>전년대비 증감 자동 계산</li>
                    <li>지표 간 비교 분석</li>
                    <li>핵심 요약(Key Summary) 자동 생성</li>
                 </ul>
                 {/* Connector to next column (Mobile: Down, Desktop: Curved path handled by SVG or visual cue) */}
                 <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-slate-600 z-10 lg:hidden block">
                    <ArrowDown size={24} />
                 </div>
              </div>
            </div>

            {/* Column 2: Generation & Service */}
            <div className="flex flex-col gap-4">
              <h4 className="text-center text-teal-400 font-bold uppercase tracking-wider text-sm mb-2">Service Delivery Pipeline</h4>

               {/* Block 4 (Connected from 3) */}
               <div className="flex-1 bg-slate-800 border-l-4 border-teal-500 rounded-r-xl p-5 shadow-lg relative flex flex-col justify-center group hover:bg-slate-750 transition-colors lg:order-3 lg:mt-2">
                 <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 bg-slate-900 border border-teal-500 rounded-full p-2 text-teal-500">
                    <FileText size={20} />
                 </div>
                 <h5 className="font-bold text-white text-lg mb-2 pl-4">④ 자동 보고서 생성기</h5>
                 <ul className="text-sm text-slate-400 space-y-1 pl-4 list-disc list-inside">
                    <li>분석 텍스트 자동 작성 (NLG)</li>
                    <li>그래프 및 차트 자동 생성</li>
                    <li>PDF / Word / PPT 포맷 출력</li>
                 </ul>
                  <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-slate-600 z-10 lg:block hidden">
                    <ArrowDown size={24} className="rotate-180" />
                 </div>
                  <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-slate-600 z-10 lg:hidden block">
                    <ArrowDown size={24} />
                 </div>
              </div>

              {/* Block 5 */}
              <div className="flex-1 bg-slate-800 border-l-4 border-green-500 rounded-r-xl p-5 shadow-lg relative flex flex-col justify-center group hover:bg-slate-750 transition-colors lg:order-2 lg:mt-2">
                 <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 bg-slate-900 border border-green-500 rounded-full p-2 text-green-500">
                    <MonitorCheck size={20} />
                 </div>
                 <h5 className="font-bold text-white text-lg mb-2 pl-4">⑤ 검토 & 제출 화면 (UI)</h5>
                 <ul className="text-sm text-slate-400 space-y-1 pl-4 list-disc list-inside">
                    <li>생성 결과 미리보기</li>
                    <li>수정 / 재생성 / 최종 제출 기능</li>
                    <li>사용자 피드백 루프</li>
                 </ul>
                 <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 text-slate-600 z-10 lg:block hidden">
                    <ArrowDown size={24} className="rotate-180" />
                 </div>
                 <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-slate-600 z-10 lg:hidden block">
                    <ArrowDown size={24} />
                 </div>
              </div>

               {/* Block 6 */}
              <div className="flex-1 bg-slate-800 border-l-4 border-orange-500 rounded-r-xl p-5 shadow-lg relative flex flex-col justify-center group hover:bg-slate-750 transition-colors lg:order-1">
                 <div className="absolute -left-[22px] top-1/2 -translate-y-1/2 bg-slate-900 border border-orange-500 rounded-full p-2 text-orange-500">
                    <Users size={20} />
                 </div>
                 <h5 className="font-bold text-white text-lg mb-2 pl-4">⑥ 사용자 계정 · 프로젝트 관리 (SaaS)</h5>
                 <ul className="text-sm text-slate-400 space-y-1 pl-4 list-disc list-inside">
                    <li>기관별 프로젝트/사용자 권한 관리</li>
                    <li>자동 저장 / 버전 관리 / 제출 이력</li>
                 </ul>
                 {/* Start point for right column in desktop visually */}
                 <div className="absolute left-[-40px] top-1/2 text-slate-500 hidden lg:block">
                     <span className="text-xs font-bold rotate-90 block w-20 text-center">Platform</span>
                 </div>
              </div>

            </div>
          </div>
          
          {/* Desktop Visual Flow Guide */}
          <div className="hidden lg:flex absolute inset-0 pointer-events-none items-center justify-center">
             <div className="bg-slate-900/80 p-2 rounded-full border border-slate-700 z-20">
                <ArrowRight size={24} className="text-slate-500" />
             </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};