import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AlertTriangle, TrendingDown, Zap, Users } from 'lucide-react';

const data = [
  { name: '2022', price: 100, speed: 30, qualityGap: 90 },
  { name: '2023', price: 85, speed: 55, qualityGap: 70 },
  { name: '2024', price: 60, speed: 80, qualityGap: 40 },
  { name: '2025 (Est)', price: 40, speed: 95, qualityGap: 20 },
];

export const MarketTrendsSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="보고서 용역 시장의 급격한 변화" subtitle="Market Analysis">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full items-center">
        
        {/* Chart Section */}
        <div className="h-[300px] lg:h-[400px] w-full bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">
          <h4 className="text-center text-slate-400 font-medium mb-4">AI 도입에 따른 주요 지표 변화</h4>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1e293b', 
                  borderRadius: '8px', 
                  border: '1px solid #334155', 
                  color: '#f1f5f9'
                }}
                itemStyle={{ color: '#e2e8f0' }}
              />
              <Legend wrapperStyle={{paddingTop: '20px'}} />
              <Line type="monotone" dataKey="price" name="시장 단가 (Price)" stroke="#ef4444" strokeWidth={3} dot={{r: 4, fill: '#ef4444'}} />
              <Line type="monotone" dataKey="speed" name="작성 속도 (Speed)" stroke="#3b82f6" strokeWidth={3} dot={{r: 4, fill: '#3b82f6'}} />
              <Line type="monotone" dataKey="qualityGap" name="품질 격차" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-500 flex items-start gap-4">
            <div className="bg-slate-800 p-2 rounded-full shadow-sm text-red-500 border border-red-500/20">
              <TrendingDown size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">가격 하락 가속화</h3>
              <p className="text-slate-300 mt-1">AI 자동화로 인한 생산 단가 급락, 저가 수주 경쟁 심화</p>
            </div>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 flex items-start gap-4">
             <div className="bg-slate-800 p-2 rounded-full shadow-sm text-blue-500 border border-blue-500/20">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">압도적인 작성 속도</h3>
              <p className="text-slate-300 mt-1">기존 인력 중심 작업 대비 시간 소요 1/10 수준으로 단축</p>
            </div>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-slate-500 flex items-start gap-4">
             <div className="bg-slate-800 p-2 rounded-full shadow-sm text-slate-400 border border-slate-600/20">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">품질 평준화 및 격차 축소</h3>
              <p className="text-slate-300 mt-1">단순 정보 나열식 보고서는 누구나 쉽게 작성 가능</p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-slate-800 border border-yellow-500/20 text-white rounded-lg flex items-center justify-center gap-3 shadow-lg">
            <AlertTriangle className="text-yellow-400" />
            <span className="font-semibold text-slate-100">결론: 기존 인력 투입 방식으로는 생존 불가능</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};