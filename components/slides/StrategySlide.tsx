import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { ArrowRight, FileText, Layers, CheckCircle, Server, Settings } from 'lucide-react';

export const StrategySlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="향후 전략 방향: 플랫폼화 및 시스템 전환" subtitle="Strategic Pivot">
      <div className="flex flex-col h-full justify-center">
        
        {/* Before vs After */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="w-full md:w-1/3 p-6 bg-slate-800 rounded-xl text-center opacity-60 border border-slate-700">
            <div className="text-sm text-slate-400 font-semibold uppercase mb-2">AS-IS</div>
            <h3 className="text-xl font-bold text-slate-300 mb-2">단순 작성 서비스</h3>
            <p className="text-sm text-slate-500">인력 기반, 시간당 과금, 일회성 용역</p>
          </div>
          
          <div className="hidden md:flex text-slate-600">
            <ArrowRight size={32} />
          </div>
          
          <div className="w-full md:w-1/2 p-8 bg-gradient-to-br from-blue-900 to-indigo-900 border border-blue-700/50 rounded-xl text-center shadow-xl shadow-blue-900/20 text-white transform scale-105">
            <div className="text-xs text-blue-300 font-semibold uppercase mb-2">TO-BE</div>
            <h3 className="text-2xl font-bold mb-2 text-white">시스템 + 구독형 플랫폼 + 검증</h3>
            <p className="text-sm text-blue-200">데이터 기반, 구독료 모델, 품질 보증</p>
          </div>
        </div>

        {/* The Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-slate-800 border-t-4 border-blue-500 p-6 shadow-lg rounded-b-xl border-x border-b border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                <Settings size={24} />
              </div>
              <h4 className="font-bold text-white">자동화 시스템 구축</h4>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500 shrink-0"/>학회 데이터 기반 표준 템플릿 제공</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500 shrink-0"/>통계 및 도표 자동 생성 모듈</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-blue-500 shrink-0"/>AI 초안 작성 파이프라인</li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-800 border-t-4 border-indigo-500 p-6 shadow-lg rounded-b-xl border-x border-b border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Layers size={24} />
              </div>
              <h4 className="font-bold text-white">구독형 플랫폼 (SaaS)</h4>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2"><CheckCircle size={16} className="text-indigo-500 shrink-0"/>기관·대학·공공 대상 연간 라이선스</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-indigo-500 shrink-0"/>최신 데이터 지속적 업데이트</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-indigo-500 shrink-0"/>회원 전용 인사이트 리포트</li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="bg-slate-800 border-t-4 border-teal-500 p-6 shadow-lg rounded-b-xl border-x border-b border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400">
                <CheckCircle size={24} />
              </div>
              <h4 className="font-bold text-white">전문가 검증 서비스</h4>
            </div>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2"><CheckCircle size={16} className="text-teal-500 shrink-0"/>AI 생성 문서 오류 검수 (Fact-check)</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-teal-500 shrink-0"/>학회 인증 마크 발급</li>
              <li className="flex gap-2"><CheckCircle size={16} className="text-teal-500 shrink-0"/>최종 책임 감수 서비스</li>
            </ul>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};