import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Star, CheckCircle2 } from 'lucide-react';

const items = [
  { id: 1, title: "보안형 AI 보고서 플랫폼", desc: "대학·공공기관 전용 폐쇄망 AI 문서 플랫폼", type: "기관 월 사용료", priority: "high" },
  { id: 2, title: "AI 보고서 초안 자동 생성기", desc: "표준 구조 자동 생성, 데이터 입력 시 자동 작성", type: "사용자/계정당 구독", priority: "high" },
  { id: 3, title: "검증·감수(Audit) 자동화", desc: "표절·오류·논리검증·근거추적 자동 수행", type: "건당 과금 + 정액제", priority: "high" },
  { id: 4, title: "전문가 인증 마크 서비스", desc: "학회 인증 로고 부여(신뢰력 상승)", type: "인증 건당 비용", priority: "high" },
  { id: 5, title: "연구·통계 데이터 API", desc: "통계·문헌·사례 데이터베이스 API 제공", type: "연간 라이선스", priority: "high" },
  { id: 6, title: "표준 보고서 템플릿", desc: "조사·정책·타당성 보고서 템플릿 판매", type: "연간 사용료", priority: "mid" },
  { id: 7, title: "표·그래프 자동 생성 엔진", desc: "CSV 업로드 → 그래프·설명 자동 생성", type: "API 이용량 과금", priority: "mid" },
  { id: 8, title: "조사 설문 자동 분석 엔진", desc: "온라인 설문 결과 자동 분석·요약·시각화", type: "기관별 정액", priority: "mid" },
  { id: 9, title: "문서 보안 저장소 & 로그", desc: "문서 이력·감사로그 저장", type: "기관 월 보관료", priority: "mid" },
  { id: 10, title: "자동 PDF 출판 시스템", desc: "최종 디자인 자동 적용", type: "생성 건당 과금", priority: "mid" },
  { id: 11, title: "학회 전문 인사이트 리포트", desc: "정기 산업·정책 분석 리포트", type: "연간 구독", priority: "mid" },
  { id: 12, title: "분야 맞춤형 AI 훈련 모델", desc: "분야 특화 내부 모델 제공", type: "모델 유지 라이선스", priority: "mid" },
  { id: 13, title: "정책/연구 RAG 검색 시스템", desc: "문헌·자료 자동 검색 AI", type: "검색량 기반 과금", priority: "mid" },
  { id: 14, title: "표준 용어·정의 사전 API", desc: "용어 표준화, 기관 간 혼란 해결", type: "기관 구독", priority: "mid" },
  { id: 15, title: "문헌 인용 자동 생성기", desc: "APA, Chicago 등 자동 적용", type: "기능 사용료", priority: "mid" },
  { id: 16, title: "대학 연구 행정 자동화", desc: "R&D 과제 관리 + 보고 자동화", type: "기관형 구독", priority: "low" },
  { id: 17, title: "성과지표(KPI) 자동 분석", desc: "평가·성과 분석 자동 계산", type: "프로젝트 라이선스", priority: "low" },
  { id: 18, title: "산학 협력 연구 매칭 플랫폼", desc: "기업-대학 연구 매칭 자동 추천", type: "매칭 수수료", priority: "low" },
  { id: 19, title: "공공사업 입찰 지원 자동화", desc: "제안요청서 분석 + 전략 추천", type: "수수료+구독", priority: "low" },
  { id: 20, title: "AI 기반 교육 과정 & 인증", desc: "연구방법론, 문서작성 교육", type: "콘텐츠 구독", priority: "low" },
];

export const BusinessItemsSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="구독 경제 모델 핵심 아이템 20선" subtitle="20 Core Items for Subscription Economy">
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-end mb-4">
            <p className="text-slate-400 text-sm">
                <span className="text-yellow-400 font-bold">★ 상위 5개</span>는 즉시 수익화 가능한 핵심(High Priority) 아이템
            </p>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((item) => (
                <div 
                    key={item.id} 
                    className={`
                        relative p-4 rounded-xl border transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col
                        ${item.priority === 'high' 
                            ? 'bg-slate-800 border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
                            : 'bg-slate-800/50 border-slate-700 hover:border-slate-500'}
                    `}
                >
                    <div className="flex justify-between items-start mb-2">
                        <div className={`
                            w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                            ${item.priority === 'high' ? 'bg-yellow-500 text-slate-900' : 'bg-slate-700 text-slate-400'}
                        `}>
                            {item.id}
                        </div>
                        {item.priority === 'high' && <Star size={16} className="text-yellow-500 fill-yellow-500" />}
                    </div>
                    
                    <h4 className={`font-bold text-sm mb-2 ${item.priority === 'high' ? 'text-white' : 'text-slate-200'}`}>
                        {item.title}
                    </h4>
                    
                    <p className="text-xs text-slate-400 mb-3 leading-relaxed flex-1">
                        {item.desc}
                    </p>
                    
                    <div className="mt-auto pt-3 border-t border-slate-700/50">
                         <span className={`text-[10px] px-2 py-1 rounded-full border ${
                             item.priority === 'high' 
                             ? 'bg-yellow-500/10 border-yellow-500/30 text-yellow-200' 
                             : 'bg-blue-500/10 border-blue-500/20 text-blue-300'
                         }`}>
                             {item.type}
                         </span>
                    </div>
                </div>
            ))}
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
      </div>
    </SlideLayout>
  );
};