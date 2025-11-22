
import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Settings, UploadCloud, FileSpreadsheet, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react';

export const MvpDataUploadSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="UI 화면 예시: ② 데이터 업로드" subtitle="Step 2: Data Input">
      <div className="flex h-full gap-8 items-center justify-center">
        
        {/* Mockup Window */}
        <div className="w-full max-w-5xl bg-slate-900 rounded-xl border border-slate-600 shadow-2xl overflow-hidden flex flex-col relative h-[500px] md:h-[600px]">
            {/* Mockup Title Bar */}
            <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="bg-slate-900 px-6 py-1 rounded-md text-xs text-slate-500 border border-slate-700 flex items-center gap-2">
                    <span className="text-blue-500">🔒</span> platform.society.or.kr/upload
                </div>
                <div className="flex items-center gap-3">
                    <Settings size={14} className="text-slate-500" />
                </div>
            </div>

            {/* Mockup Body Content */}
            <div className="flex-1 overflow-hidden bg-[#0f172a] p-8 flex flex-col relative">
                
                 {/* Breadcrumb */}
                 <div className="flex items-center gap-2 mb-8 text-slate-400">
                    <span className="text-slate-500">대시보드</span>
                    <ChevronRight size={16} />
                    <span className="text-white font-bold">2024년 대학혁신지원사업 보고서 작성</span>
                    <ChevronRight size={16} />
                    <span className="text-blue-400 font-bold bg-blue-500/10 px-2 py-1 rounded">데이터 업로드</span>
                </div>

                <div className="flex gap-8 h-full">
                    
                    {/* Left: Upload Area */}
                    <div className="flex-1 border-2 border-dashed border-blue-500/50 rounded-xl bg-slate-800/30 flex flex-col items-center justify-center relative hover:bg-slate-800/50 transition-all cursor-pointer group">
                        <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                            <UploadCloud size={40} className="text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-200 mb-2">데이터 파일을 이곳에 놓으세요</h3>
                        <p className="text-slate-400 text-sm mb-8 text-center">
                            지원 형식: .xlsx, .csv (최대 50MB)<br/>
                            <span className="text-slate-500 mt-2 block">Tip: 학회 표준 엑셀 템플릿을 사용하면 자동 파싱됩니다.</span>
                        </p>
                        <button className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-bold border border-slate-600 transition-colors">
                            파일 탐색기 열기
                        </button>
                    </div>

                    {/* Right: Status & List */}
                    <div className="w-1/3 flex flex-col">
                        <h4 className="text-sm font-bold text-slate-400 mb-4 flex items-center justify-between">
                            업로드 목록 <span className="text-xs font-normal bg-slate-800 px-2 py-0.5 rounded text-slate-500">1/3 완료</span>
                        </h4>
                        
                        <div className="space-y-3 flex-1">
                            {/* File 1: Success */}
                            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-between group hover:border-green-500/50 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                        <FileSpreadsheet size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-200">재정_지표_2023.xlsx</div>
                                        <div className="text-xs text-slate-500">1.2 MB • 파싱 완료</div>
                                    </div>
                                </div>
                                <CheckCircle2 size={20} className="text-green-500" />
                            </div>

                            {/* File 2: Processing */}
                            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex items-center justify-between relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 h-1 bg-blue-500 w-[60%]"></div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                        <FileSpreadsheet size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-200">교원_현황_Data.csv</div>
                                        <div className="text-xs text-blue-400">검증 중... (60%)</div>
                                    </div>
                                </div>
                                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                            
                            {/* File 3: Error Warning */}
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-red-500/30 flex items-center justify-between opacity-80">
                                 <div className="flex items-center gap-3">
                                    <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
                                        <AlertCircle size={24} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-300">오류_데이터_예시.xlsx</div>
                                        <div className="text-xs text-red-400">필수 컬럼 누락됨</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
                            다음: 데이터 분석 시작 <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </SlideLayout>
  );
};
