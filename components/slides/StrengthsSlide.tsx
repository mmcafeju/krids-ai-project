import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { ShieldCheck, Database, Award, Lock } from 'lucide-react';

export const StrengthsSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="학회의 핵심 경쟁력 (Unfair Advantage)" subtitle="Why Us?">
       <div className="flex flex-col h-full">
         <p className="text-xl text-slate-300 mb-10 text-center font-medium">
           AI가 기술적으로 모방할 수 있어도, <span className="text-blue-400 font-bold border-b-2 border-blue-500/50">권위와 신뢰</span>는 대체할 수 없습니다.
         </p>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-1">
            {/* Card 1 */}
            <div className="group relative bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:bg-slate-750 hover:shadow-blue-900/20 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={100} className="text-white" />
              </div>
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">공식적 신뢰성</h3>
              <p className="text-slate-400 leading-relaxed">
                공공기관 및 정부 과제 수행에 필수적인 법인격과 공신력 보유. 
                AI가 생성한 '그럴듯한' 정보가 아닌 '책임질 수 있는' 정보 제공.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:bg-slate-750 hover:shadow-indigo-900/20 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-2">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Database size={100} className="text-white" />
              </div>
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
                <Database size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">축적된 전문 데이터</h3>
              <p className="text-slate-400 leading-relaxed">
                수십 년간 축적된 학술 데이터, 통계, 사례 연구 자료 보유.
                LLM(거대언어모델) 학습 데이터에 포함되지 않은 독점적 도메인 지식.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-700 hover:bg-slate-750 hover:shadow-teal-900/20 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-2">
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Award size={100} className="text-white" />
              </div>
              <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-400 mb-6 border border-teal-500/20">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">공인 인증 및 평가 권위</h3>
              <p className="text-slate-400 leading-relaxed">
                보고서의 품질을 최종 승인하고 인증마크를 부여할 수 있는 유일한 주체.
                전문가 집단의 Peer Review 시스템.
              </p>
            </div>
         </div>

         <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-slate-700/50 border border-slate-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg backdrop-blur-sm">
              <Lock size={20} className="text-blue-400" />
              <span>AI가 대체 불가능한 영역 = "인증(Certification)과 책임(Liability)"</span>
            </div>
         </div>
       </div>
    </SlideLayout>
  );
};