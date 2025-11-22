
import React from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { Settings, FileText, Download, Printer, Share2, ChevronRight, FileCheck } from 'lucide-react';

export const MvpReportGenerationSlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <SlideLayout title="UI 화면 예시: ④ 자동 보고서 생성" subtitle="Step 4: Report Generation">
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
                    <span className="text-blue-500">🔒</span> platform.society.or.kr/report
                </div>
                <Settings size={14} className="text-slate-500" />
            </div>

            {/* Body */}
            <div className="flex-1 overflow-hidden bg-[#0f172a] p-8 flex gap-8">
                
                {/* Left Panel: Controls */}
                <div className="w-1/3 flex flex-col gap-6">
                    <div>
                        <h2 className="text-xl font-bold text-white mb-1">최종 보고서 생성</h2>
                        <p className="text-sm text-slate-400">템플릿과 출력 형식을 선택하세요.</p>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 space-y-4">
                        <div>
                            <label className="text-xs text-slate-400 font-bold mb-2 block uppercase">보고서 템플릿 (Template)</label>
                            <div className="relative">
                                <select className="w-full bg-slate-900 border border-slate-600 text-white text-sm rounded-lg p-3 outline-none focus:border-blue-500 appearance-none">
                                    <option>2024 대학혁신지원사업 표준 양식</option>
                                    <option>자체평가보고서 요약본 (Executive Summary)</option>
                                    <option>이사회 보고용 PPT (16:9)</option>
                                </select>
                                <ChevronRight className="absolute right-3 top-3.5 text-slate-500 rotate-90" size={14} />
                            </div>
                        </div>
                        
                         <div>
                            <label className="text-xs text-slate-400 font-bold mb-2 block uppercase">출력 파일 포맷 (Format)</label>
                            <div className="grid grid-cols-3 gap-2">
                                <button className="py-2 bg-blue-600 text-white text-sm font-bold rounded border border-blue-500 flex flex-col items-center gap-1">
                                    PDF
                                </button>
                                <button className="py-2 bg-slate-700 text-slate-300 text-sm font-bold rounded border border-slate-600 hover:bg-slate-600 flex flex-col items-center gap-1">
                                    HWP
                                </button>
                                <button className="py-2 bg-slate-700 text-slate-300 text-sm font-bold rounded border border-slate-600 hover:bg-slate-600 flex flex-col items-center gap-1">
                                    PPTX
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto space-y-3">
                         <button className="w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors">
                            <Download size={20} /> 보고서 다운로드
                        </button>
                        <div className="flex gap-2">
                             <button className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl border border-slate-700 flex items-center justify-center gap-2 text-sm transition-colors">
                                <Printer size={16} /> 인쇄
                            </button>
                             <button className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold rounded-xl border border-slate-700 flex items-center justify-center gap-2 text-sm transition-colors">
                                <Share2 size={16} /> 이메일 발송
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Preview */}
                <div className="w-2/3 bg-slate-800 rounded-xl border border-slate-700 flex flex-col relative overflow-hidden group">
                     <div className="h-10 bg-slate-700 border-b border-slate-600 flex items-center justify-between px-4">
                        <span className="text-xs text-slate-300 font-mono">Preview: 2024_University_Innovation_Report_Final.pdf</span>
                        <span className="text-xs bg-slate-900 text-slate-400 px-2 py-0.5 rounded">1 / 45 Pages</span>
                     </div>
                     
                     <div className="flex-1 bg-slate-300 p-8 overflow-y-auto relative custom-scrollbar">
                         {/* Paper Effect */}
                        <div className="bg-white w-full max-w-[500px] mx-auto min-h-[700px] shadow-xl p-10 flex flex-col relative">
                            {/* Watermark */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden">
                                <div className="text-6xl font-black -rotate-45 whitespace-nowrap">PREVIEW PREVIEW PREVIEW</div>
                            </div>

                            {/* Content Skeleton */}
                            <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-8"></div>
                            <div className="w-3/4 h-8 bg-slate-800 mx-auto mb-4 rounded-sm"></div>
                            <div className="w-1/2 h-6 bg-slate-500 mx-auto mb-16 rounded-sm"></div>

                            <div className="space-y-4 mb-12">
                                <div className="w-full h-3 bg-slate-200 rounded-sm"></div>
                                <div className="w-full h-3 bg-slate-200 rounded-sm"></div>
                                <div className="w-full h-3 bg-slate-200 rounded-sm"></div>
                                <div className="w-2/3 h-3 bg-slate-200 rounded-sm"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="h-32 bg-blue-50 rounded border border-blue-100"></div>
                                <div className="h-32 bg-blue-50 rounded border border-blue-100"></div>
                            </div>

                            <div className="space-y-4">
                                <div className="w-full h-3 bg-slate-200 rounded-sm"></div>
                                <div className="w-full h-3 bg-slate-200 rounded-sm"></div>
                            </div>
                            
                            {/* Approved Stamp */}
                            <div className="absolute bottom-10 right-10 border-4 border-red-500/30 text-red-500/30 font-black text-2xl px-4 py-2 -rotate-12 rounded opacity-50">
                                DRAFT
                            </div>
                        </div>
                     </div>

                     {/* Zoom Overlay */}
                     <div className="absolute bottom-6 right-6 flex gap-2">
                        <button className="p-2 bg-slate-900/80 text-white rounded-full hover:bg-slate-900 backdrop-blur-sm shadow-lg">
                            <span className="text-lg">+</span>
                        </button>
                        <button className="p-2 bg-slate-900/80 text-white rounded-full hover:bg-slate-900 backdrop-blur-sm shadow-lg">
                            <span className="text-lg">-</span>
                        </button>
                     </div>
                </div>

            </div>
        </div>
       </div>
    </SlideLayout>
  );
};
