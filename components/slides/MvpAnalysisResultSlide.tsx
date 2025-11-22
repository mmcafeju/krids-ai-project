
import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Settings, Search, BarChart2, PieChart, TrendingUp, ChevronRight, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: '2020', value: 65 },
  { name: '2021', value: 72 },
  { name: '2022', value: 78 },
  { name: '2023', value: 85 },
  { name: '2024', value: 88.4 },
];

export const MvpAnalysisResultSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="UI 화면 예시: ③ 성과 분석 결과" subtitle="Step 3: AI Analysis">
      <div className="flex h-full gap-8 items-center justify-center">
        
        {/* Mockup Window */}
        <div className="w-full max-w-5xl bg-slate-900 rounded-xl border border-slate-600 shadow-2xl overflow-hidden flex flex-col relative h-[500px] md:h-[600px]">
            {/* Title Bar */}
            <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="bg-slate-900 px-6 py-1 rounded-md text-xs text-slate-500 border border-slate-700 flex items-center gap-2">
                    <span className="text-blue-500">🔒</span> platform.society.or.kr/analysis
                </div>
                <Settings size={14} className="text-slate-500" />
            </div>

            {/* Body */}
            <div className="flex-1 overflow-hidden bg-[#0f172a] p-8 flex flex-col">
                
                {/* Header Area */}
                <div className="flex justify-between items-center mb-6">
                     <div>
                        <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                            <span>프로젝트: 2024 대학혁신지원</span>
                            <span className="text-slate-600">|</span>
                            <span className="text-green-400 font-bold flex items-center gap-1"><CheckCircleIcon size={12}/> 분석 완료</span>
                        </div>
                        <h2 className="text-2xl font-bold text-white">AI 성과지표 분석 리포트</h2>
                     </div>
                     <button className="px-4 py-2 bg-slate-800 border border-slate-600 text-slate-300 rounded-lg text-sm hover:bg-slate-700 flex items-center gap-2">
                        <AlertTriangle size={14} className="text-yellow-500" /> 이상치(Outlier) 점검
                     </button>
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-3 gap-6 h-full pb-4">
                    
                    {/* Left: Key Metrics */}
                    <div className="col-span-1 flex flex-col gap-4">
                        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 relative overflow-hidden group hover:border-blue-500 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div className="text-sm text-slate-400">전임교원 확보율</div>
                                <BarChart2 size={16} className="text-blue-500" />
                            </div>
                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-white">88.4%</span>
                                <span className="text-sm text-green-400 font-bold bg-green-500/10 px-1.5 py-0.5 rounded">▲ 3.4%</span>
                            </div>
                            <div className="text-xs text-slate-500 mt-2">전년 대비 상승, 목표치(85%) 초과 달성</div>
                        </div>

                         <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 relative overflow-hidden group hover:border-purple-500 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div className="text-sm text-slate-400">교육비 환원율</div>
                                <TrendingUp size={16} className="text-purple-500" />
                            </div>
                             <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-white">215.3%</span>
                                <span className="text-sm text-red-400 font-bold bg-red-500/10 px-1.5 py-0.5 rounded">▼ 0.5%</span>
                            </div>
                             <div className="text-xs text-slate-500 mt-2">소폭 하락했으나 상위 10% 수준 유지</div>
                        </div>

                        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 relative overflow-hidden group hover:border-orange-500 transition-colors flex-1">
                             <div className="flex justify-between items-start mb-2">
                                <div className="text-sm text-slate-400">장학금 지급률</div>
                                <PieChart size={16} className="text-orange-500" />
                            </div>
                            <span className="text-3xl font-bold text-white">42.1%</span>
                             <div className="mt-4 space-y-2">
                                <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                    <div className="bg-orange-500 w-[42%] h-full"></div>
                                </div>
                                <div className="flex justify-between text-xs text-slate-500">
                                    <span>현재</span>
                                    <span>목표 45%</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    {/* Right: AI Analysis & Chart */}
                    <div className="col-span-2 flex flex-col gap-4">
                        {/* AI Insight Box */}
                        <div className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border border-indigo-500/30 p-5 rounded-xl flex gap-4">
                            <div className="bg-indigo-500/20 p-2 h-fit rounded-lg text-indigo-400">
                                <Search size={20} />
                            </div>
                            <div>
                                <h3 className="text-indigo-300 font-bold mb-1 flex items-center gap-2">
                                    AI 핵심 요약 (Key Findings)
                                    <span className="text-[10px] bg-indigo-500 text-white px-1.5 py-0.5 rounded">AUTO</span>
                                </h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    "귀 대학의 전임교원 확보율은 <span className="text-white font-bold">최근 5년간 지속적인 상승세</span>를 보이고 있습니다. 
                                    특히 2023년 대비 2024년의 증가폭(3.4%p)이 가장 크며, 이는 신규 교원 채용 확대 정책의 직접적인 결과로 분석됩니다. 
                                    다만 교육비 환원율의 소폭 감소에 대한 원인 분석 텍스트가 보고서 3장에 자동 생성되었습니다."
                                </p>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 p-4 relative">
                            <h4 className="text-xs text-slate-400 font-bold absolute top-4 left-4">연도별 전임교원 확보율 추이</h4>
                            <div className="w-full h-full pt-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={chartData}>
                                        <defs>
                                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                                        <YAxis hide domain={[60, 100]} />
                                        <Tooltip 
                                            contentStyle={{backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff'}}
                                            cursor={{stroke: '#3b82f6', strokeWidth: 1}}
                                        />
                                        <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                         <div className="flex justify-end">
                            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg flex items-center gap-2">
                                결과 확정 및 보고서 생성 <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </SlideLayout>
  );
};

const CheckCircleIcon = ({size}: {size: number}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);
