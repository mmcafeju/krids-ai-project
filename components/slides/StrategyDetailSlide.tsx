import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { RefreshCw, ShieldCheck, Lock, Database } from 'lucide-react';

export const StrategyDetailSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="학회의 지속 수익 전략 방향" subtitle="Strategic Direction Summary">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        
        {/* Strategy 1 */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-blue-500/50 transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
              <RefreshCw size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">용역 → 플랫폼·표준·검증 전환</h3>
          </div>
          <ul className="space-y-2 text-slate-300 list-disc list-inside ml-2">
            <li>작성 대행 중심의 <span className="text-slate-500 line-through">단발성 수익</span> 탈피</li>
            <li>플랫폼형 <span className="text-blue-400 font-bold">구독 수익 구조</span>로 체질 개선</li>
            <li>지속 가능한 Recurring Revenue 모델 확립</li>
          </ul>
        </div>

        {/* Strategy 2 */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-indigo-500/50 transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">AI 자동화 + 학회 신뢰 결합</h3>
          </div>
          <ul className="space-y-2 text-slate-300 list-disc list-inside ml-2">
            <li>AI 작성 기능은 누구나 개발 가능 (Commodity)</li>
            <li>학회의 <span className="text-indigo-400 font-bold">공신력·검증·표준 데이터</span>는 대체 불가</li>
            <li>기술(AI) 위에 권위(Authority)를 얹는 전략</li>
          </ul>
        </div>

        {/* Strategy 3 */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-teal-500/50 transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-teal-500/10 rounded-xl text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
              <Lock size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">보안형 폐쇄 AI 환경 제공</h3>
          </div>
          <ul className="space-y-2 text-slate-300 list-disc list-inside ml-2">
            <li>대학·공공기관의 핵심 니즈는 <span className="text-teal-400 font-bold">보안</span></li>
            <li>문서·데이터 유출 위험을 원천 차단</li>
            <li>기관이 예산을 지불할 가장 강력한 명분 제공</li>
          </ul>
        </div>

        {/* Strategy 4 */}
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-lg hover:border-purple-500/50 transition-all duration-300 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
              <Database size={32} />
            </div>
            <h3 className="text-xl font-bold text-white">데이터 기반 생산 파이프라인</h3>
          </div>
          <ul className="space-y-2 text-slate-300 list-disc list-inside ml-2">
            <li>보고서 자동 생성 → 분석 자동화 연결</li>
            <li>검증 및 인증 → 데이터 API 판매까지 확장</li>
            <li>데이터가 쌓일수록 시스템이 똑똑해지는 구조</li>
          </ul>
        </div>

      </div>
    </SlideLayout>
  );
};