import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Building2, FileText } from 'lucide-react';

const growthData = [
  { name: '2024', value: 1.9, label: '1.9조원' },
  { name: '2027', value: 8.5, label: '8.5조원' },
  { name: '2030', value: 15.2, label: '15.2조원' },
  { name: '2033', value: 20.1, label: '20.1조원' },
];

export const MarketSizeSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="폭발적인 시장 잠재력" subtitle="Market Size & Potential">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
        
        {/* Left Column: Key Stats Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg relative overflow-hidden group hover:border-blue-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Building2 size={80} />
            </div>
            <div className="flex items-center gap-3 mb-2 text-blue-400">
              <Building2 size={24} />
              <span className="font-bold text-sm tracking-wider">공공조달 용역 시장 (2023)</span>
            </div>
            <div className="text-4xl font-black text-white mb-1">50.3조 원</div>
            <p className="text-slate-400 text-sm">공공기관의 막대한 용역 예산 규모</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-lg relative overflow-hidden group hover:border-indigo-500/50 transition-colors">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <FileText size={80} />
            </div>
             <div className="flex items-center gap-3 mb-2 text-indigo-400">
              <FileText size={24} />
              <span className="font-bold text-sm tracking-wider">국내 전자문서 산업 (2022)</span>
            </div>
            <div className="text-4xl font-black text-white mb-1">10.5조 원</div>
            <p className="text-slate-400 text-sm">디지털 전환 가속화에 따른 기반 시장</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 p-6 rounded-2xl border border-blue-500/30 shadow-xl relative overflow-hidden">
             <div className="flex items-center gap-3 mb-2 text-blue-200">
              <TrendingUp size={24} />
              <span className="font-bold text-sm tracking-wider">데이터 분석 시장 성장률 (CAGR)</span>
            </div>
            <div className="text-5xl font-black text-white mb-1">30%</div>
            <p className="text-blue-200 text-sm mt-2">2033년까지 연평균 고속 성장 예상</p>
          </div>
        </div>

        {/* Right Column: Growth Chart */}
        <div className="lg:col-span-7 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2">데이터 분석 시장 성장 전망 (Global/Korea)</h3>
          <p className="text-sm text-slate-400 mb-8">AI 도입과 함께 2024년 약 1.9조원에서 2033년 약 20조원 규모로 급성장 예상 (IMARC Group)</p>
          
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 14}} />
                <YAxis hide />
                <Tooltip 
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                  contentStyle={{backgroundColor: '#0f172a', borderColor: '#334155', color: '#f1f5f9'}}
                  formatter={(value: number) => [`약 ${value}조 원`, '시장 규모']}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
                  {growthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === growthData.length - 1 ? '#3b82f6' : '#475569'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
             <span className="w-3 h-3 bg-slate-600 rounded-sm"></span> 초기 시장
             <span className="w-3 h-3 bg-blue-500 rounded-sm ml-4"></span> 성숙기 예상
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};