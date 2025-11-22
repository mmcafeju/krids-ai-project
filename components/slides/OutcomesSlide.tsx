import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Target, RefreshCw, TrendingUp } from 'lucide-react';

const data = [
  { name: '단발성 수익', revenue: 80, type: 'Old' },
  { name: '구독형 수익', revenue: 120, type: 'New' },
  { name: '인증/검수 수익', revenue: 150, type: 'New' },
];

export const OutcomesSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="기대 효과 및 비전" subtitle="Expected Outcomes">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
        
        <div className="space-y-8">
            <div className="flex items-start gap-4 group">
                <div className="bg-green-900/30 border border-green-500/30 p-3 rounded-xl text-green-400 mt-1 group-hover:bg-green-900/50 transition-colors">
                    <Target size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">지속적 수익 모델 확보</h3>
                    <p className="text-slate-400">시장 축소 위기 속에서도 시스템 사용료와 검증료를 통한 안정적 매출 구조 확립</p>
                </div>
            </div>

            <div className="flex items-start gap-4 group">
                <div className="bg-blue-900/30 border border-blue-500/30 p-3 rounded-xl text-blue-400 mt-1 group-hover:bg-blue-900/50 transition-colors">
                    <RefreshCw size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">수익 구조의 전환</h3>
                    <p className="text-slate-400">노동 집약적 단발성 용역(Project-based)에서 정기 구독(Subscription) 모델로의 체질 개선</p>
                </div>
            </div>

            <div className="flex items-start gap-4 group">
                <div className="bg-purple-900/30 border border-purple-500/30 p-3 rounded-xl text-purple-400 mt-1 group-hover:bg-purple-900/50 transition-colors">
                    <TrendingUp size={28} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">영향력 확대</h3>
                    <p className="text-slate-400">단순 용역 수행사가 아닌, 산업 표준을 제시하는 플랫폼 오너로서의 학회 위상 강화</p>
                </div>
            </div>
        </div>

        <div className="h-[350px] w-full bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h4 className="text-center font-bold text-slate-300 mb-6">수익 모델 전환 시뮬레이션</h4>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#334155" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12, fontWeight: 'bold', fill: '#cbd5e1'}} />
                    <Tooltip 
                      cursor={{fill: 'transparent'}} 
                      contentStyle={{backgroundColor: '#1e293b', border: '1px solid #334155', color: '#f8fafc'}}
                    />
                    <Bar dataKey="revenue" radius={[0, 4, 4, 0]} barSize={40}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.type === 'Old' ? '#64748b' : '#3b82f6'} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
            <div className="text-center mt-[-20px] text-sm text-slate-500">
                * 예시 데이터 기반 시뮬레이션
            </div>
        </div>

      </div>
    </SlideLayout>
  );
};