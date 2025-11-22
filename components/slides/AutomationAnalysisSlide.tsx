import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Cpu, DollarSign, Repeat, ArrowRight } from 'lucide-react';

export const AutomationAnalysisSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="AI 자동화 가능성 및 사업성 분석" subtitle="Automation Feasibility">
      <div className="flex flex-col h-full gap-6">
        
        {/* Main Table Area */}
        <div className="flex-1 overflow-hidden bg-slate-800 rounded-2xl border border-slate-700 shadow-xl">
          <div className="overflow-x-auto h-full custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/50 border-b border-slate-700 text-slate-300">
                  <th className="p-4 font-bold text-sm uppercase tracking-wider w-1/4">대상 항목</th>
                  <th className="p-4 font-bold text-sm uppercase tracking-wider w-1/3">
                    <div className="flex items-center gap-2">
                        <Cpu size={16} className="text-blue-400" />
                        자동화 가능 요소
                    </div>
                  </th>
                  <th className="p-4 font-bold text-sm uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <DollarSign size={16} className="text-green-400" />
                        사업성 (Why?)
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50 text-sm text-slate-300">
                <tr className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-medium text-white">성과지표 기반<br/>보고서 자동화</td>
                  <td className="p-4 text-slate-400">
                    대학별 지표(교육비환원율, 전임교원확보율 등) 데이터화 <br/>
                    → <span className="text-blue-400">자동 분석 알고리즘</span> → 리포트 생성
                  </td>
                  <td className="p-4">기관마다 매년 평가를 위해 필수적으로 요구됨 <br/><span className="text-green-400 font-bold">→ 반복 수요 확실</span></td>
                </tr>
                <tr className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-medium text-white">재정운용 구조<br/>점검 보고서</td>
                  <td className="p-4 text-slate-400">
                    수입·지출 데이터, 운영비 구조 데이터 자동 취합 <br/>
                    → 재정 건전성 진단 모듈
                  </td>
                  <td className="p-4">방대한 재정 데이터의 매년 갱신 필요 <br/><span className="text-green-400 font-bold">→ 데이터 인프라 의존도 높음</span></td>
                </tr>
                <tr className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-medium text-white">지역혁신협력(RIS)<br/>진단 보고서</td>
                  <td className="p-4 text-slate-400">
                    지자체 협력 데이터 및 지역혁신지표 입력 <br/>
                    → 협력 현황 시각화 및 개선안 자동 생성
                  </td>
                  <td className="p-4">지역균형발전 정책의 지속성 <br/><span className="text-green-400 font-bold">→ 안정된 시장 기반</span></td>
                </tr>
                <tr className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-medium text-white">교육여건 개선<br/>보고서 (템플릿)</td>
                  <td className="p-4 text-slate-400">
                    시설·교수·학생 데이터 → <span className="text-blue-400">표준 템플릿 매핑</span> <br/>
                    → 문장 및 도표 자동 완성
                  </td>
                  <td className="p-4">제출해야 할 보고서의 양식(Form)이 정형화됨 <br/><span className="text-green-400 font-bold">→ 템플릿 구독 모델 적합</span></td>
                </tr>
                <tr className="hover:bg-slate-700/30 transition-colors">
                  <td className="p-4 font-medium text-white">학생지원사업<br/>효과분석 리포트</td>
                  <td className="p-4 text-slate-400">
                    장학금·등록금 데이터 입력 <br/>
                    → 수혜 효과 통계 분석 및 그래프 생성
                  </td>
                  <td className="p-4">학생 지원 예산 규모가 크고 데이터가 명확함 <br/><span className="text-green-400 font-bold">→ 고부가가치 분석 서비스</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Core Proposition Summary */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
               <Repeat size={20} className="text-blue-500" />
               핵심 전략: "자동화로 수익 구조 만들기"
            </h3>
            <p className="text-sm text-slate-400">
              데이터 입력 → 분석 → 보고서 출력 프로세스의 완전 자동화 <br/>
              <span className="text-slate-500">기관은 매년 반복되는 보고서 작성 부담을 해소하기 위해 기꺼이 지갑을 엽니다.</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-slate-800">
             <div className="text-center">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Value 1</div>
                <div className="text-blue-400 font-bold text-sm">신뢰성 인증</div>
             </div>
             <ArrowRight size={16} className="text-slate-600" />
             <div className="text-center">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Value 2</div>
                <div className="text-indigo-400 font-bold text-sm">표준 템플릿</div>
             </div>
             <ArrowRight size={16} className="text-slate-600" />
             <div className="text-center">
                <div className="text-xs text-slate-500 uppercase font-bold mb-1">Model</div>
                <div className="text-green-400 font-bold text-sm">구독형 플랫폼</div>
             </div>
          </div>
        </div>

      </div>
       <style>{`
            .custom-scrollbar::-webkit-scrollbar {
                height: 8px;
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
        `}</style>
    </SlideLayout>
  );
};