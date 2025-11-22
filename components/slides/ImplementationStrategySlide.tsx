import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Database, Cpu, FileText, ShieldCheck, Globe, ArrowRight, Layers } from 'lucide-react';

export const ImplementationStrategySlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="실행 전략 및 기술적 접근" subtitle="Implementation Strategy">
      <div className="flex flex-col h-full gap-8">
        
        {/* Top Section: Entry Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                 <Layers size={24} />
               </div>
               진입 전략: "쉬운 곳부터 공략"
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              데이터 구조화가 비교적 쉬운 <span className="text-blue-400 font-bold">"성과지표 기반 보고서 자동화"</span>부터 시작하여 시장 진입 장벽을 낮춥니다.
            </p>
            <div className="flex items-center gap-2 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-slate-400">데이터 확보 및 분석 구조가 이미 존재함 (High Feasibility)</span>
            </div>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
               <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                 <Globe size={24} />
               </div>
               확장 로드맵
            </h3>
             <div className="flex items-center justify-between text-sm text-slate-300 mt-6 px-4">
                <div className="text-center">
                    <span className="block font-bold text-white mb-1">1단계</span>
                    지표 자동화
                </div>
                <ArrowRight size={16} className="text-slate-600" />
                <div className="text-center">
                    <span className="block font-bold text-white mb-1">2단계</span>
                    템플릿 판매
                </div>
                <ArrowRight size={16} className="text-slate-600" />
                 <div className="text-center">
                    <span className="block font-bold text-white mb-1">3단계</span>
                    구독 플랫폼
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Section: Technical Process Flow */}
        <div className="flex-1 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col justify-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-teal-500"></div>
           <h3 className="text-lg font-bold text-slate-200 mb-8 text-center">기술적 실행 프로세스 (Technical Flow)</h3>
           
           <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-3 text-center group w-full md:w-1/5">
                <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-slate-300 group-hover:border-blue-500 group-hover:text-blue-400 transition-all shadow-lg">
                   <Database size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">데이터 자동 수집</h4>
                  <p className="text-xs text-slate-400 mt-1">공공데이터, 대학공시<br/>자동 파싱 (Parsing)</p>
                </div>
              </div>

              <ArrowRight size={24} className="text-slate-600 hidden md:block" />

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-3 text-center group w-full md:w-1/5">
                <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-slate-300 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-all shadow-lg">
                   <Cpu size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">지표 분석 알고리즘</h4>
                  <p className="text-xs text-slate-400 mt-1">AI 기반 성과 분석<br/>및 인사이트 도출</p>
                </div>
              </div>

              <ArrowRight size={24} className="text-slate-600 hidden md:block" />

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-3 text-center group w-full md:w-1/5">
                <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-slate-300 group-hover:border-purple-500 group-hover:text-purple-400 transition-all shadow-lg">
                   <FileText size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">리포트 자동 생성</h4>
                  <p className="text-xs text-slate-400 mt-1">표준 템플릿 매핑<br/>PDF/HWP 생성</p>
                </div>
              </div>

              <ArrowRight size={24} className="text-slate-600 hidden md:block" />

              {/* Step 4 */}
              <div className="flex flex-col items-center gap-3 text-center group w-full md:w-1/5">
                <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-slate-300 group-hover:border-teal-500 group-hover:text-teal-400 transition-all shadow-lg">
                   <ShieldCheck size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">인증 마크 삽입</h4>
                  <p className="text-xs text-slate-400 mt-1">학회 검증 완료<br/>공신력 부여</p>
                </div>
              </div>

              <ArrowRight size={24} className="text-slate-600 hidden md:block" />

               {/* Step 5 */}
              <div className="flex flex-col items-center gap-3 text-center group w-full md:w-1/5">
                <div className="w-16 h-16 rounded-full bg-slate-700 border-2 border-slate-600 flex items-center justify-center text-slate-300 group-hover:border-green-500 group-hover:text-green-400 transition-all shadow-lg">
                   <Globe size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">온라인 플랫폼 배포</h4>
                  <p className="text-xs text-slate-400 mt-1">SaaS 형태 제공<br/>기관 담당자 접속</p>
                </div>
              </div>
           </div>
        </div>

      </div>
    </SlideLayout>
  );
};