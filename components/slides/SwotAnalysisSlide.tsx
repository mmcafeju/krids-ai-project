import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Zap, Shield, TrendingUp, AlertTriangle } from 'lucide-react';

export const SwotAnalysisSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="전략적 분석 (SWOT)" subtitle="Strategic Analysis">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        
        {/* Strengths (S) */}
        <div className="bg-slate-800/60 p-6 rounded-xl border-t-4 border-blue-500 hover:bg-slate-800 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield size={24} className="text-blue-500" />
              강점 (Strengths)
            </h3>
            <span className="text-xs font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">Internal</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2 items-start">
              <span className="text-blue-500 font-bold">•</span>
              <span>학회의 독보적인 <strong>신뢰성과 전문성</strong> 보유</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-blue-500 font-bold">•</span>
              <span>기존 공공/연구 용역 시장에서의 수행 경험 축적</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-blue-500 font-bold">•</span>
              <span>검증된 데이터 및 표준 보고서 템플릿 확보 용이</span>
            </li>
          </ul>
        </div>

        {/* Weaknesses (W) */}
        <div className="bg-slate-800/60 p-6 rounded-xl border-t-4 border-orange-500 hover:bg-slate-800 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertTriangle size={24} className="text-orange-500" />
              약점 (Weaknesses)
            </h3>
            <span className="text-xs font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">Internal</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2 items-start">
              <span className="text-orange-500 font-bold">•</span>
              <span>기존 인력 중심 방식의 <strong>고비용·저효율 구조</strong></span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-orange-500 font-bold">•</span>
              <span>자동화 플랫폼 구축 기술 및 경험 부족 가능성</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-orange-500 font-bold">•</span>
              <span>시스템 전환을 위한 초기 투자 비용 발생</span>
            </li>
          </ul>
        </div>

        {/* Opportunities (O) */}
        <div className="bg-slate-800/60 p-6 rounded-xl border-t-4 border-green-500 hover:bg-slate-800 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp size={24} className="text-green-500" />
              기회 (Opportunities)
            </h3>
            <span className="text-xs font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">External</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2 items-start">
              <span className="text-green-500 font-bold">•</span>
              <span>기관·대학의 <strong>보안형/자동화 서비스 수요</strong> 증가</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-green-500 font-bold">•</span>
              <span>AI + 데이터 + 검증 결합으로 차별화 가능 (Blue Ocean)</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-green-500 font-bold">•</span>
              <span>용역 중심에서 <strong>구독경제(Subscription)</strong>로 전환 기회</span>
            </li>
          </ul>
        </div>

        {/* Threats (T) */}
        <div className="bg-slate-800/60 p-6 rounded-xl border-t-4 border-red-500 hover:bg-slate-800 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap size={24} className="text-red-500" />
              위협 (Threats)
            </h3>
            <span className="text-xs font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">External</span>
          </div>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex gap-2 items-start">
              <span className="text-red-500 font-bold">•</span>
              <span>범용 AI 작성 툴 보급으로 인한 <strong>용역 단가 하락</strong></span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-red-500 font-bold">•</span>
              <span>경쟁 업체들의 발 빠른 자동화 도입 및 저가 공세</span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-red-500 font-bold">•</span>
              <span>공공기관 예산 축소 또는 외부 용역 감소 정책 리스크</span>
            </li>
          </ul>
        </div>

      </div>
    </SlideLayout>
  );
};