import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { SlideLayout } from '../SlideLayout';
import { 
  LayoutDashboard, 
  UploadCloud, 
  BarChart2, 
  FileText, 
  Settings, 
  ChevronRight, 
  FileSpreadsheet, 
  CheckCircle2, 
  Loader2,
  Download,
  Search,
  User
} from 'lucide-react';

export const MvpUiWireframeSlide: React.FC<SlideProps> = ({ isActive }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'upload' | 'analysis' | 'report'>('dashboard');

  return (
    <SlideLayout title="MVP 서비스 UI 예시 (Wireframe)" subtitle="User Interface Preview">
      <div className="flex h-full gap-8">
        
        {/* Left: Flow Controller / Navigation */}
        <div className="w-1/4 flex flex-col gap-4 justify-center">
            <div className="space-y-2">
                <p className="text-sm font-bold text-slate-400 uppercase mb-2 ml-1">Workflow Step</p>
                
                <button 
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                        activeTab === 'dashboard' 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50' 
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                    }`}
                >
                    <LayoutDashboard size={20} />
                    <span className="font-semibold">1. 대시보드</span>
                </button>

                <div className="h-6 ml-6 border-l-2 border-slate-700 border-dashed"></div>

                <button 
                    onClick={() => setActiveTab('upload')}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                        activeTab === 'upload' 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50' 
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                    }`}
                >
                    <UploadCloud size={20} />
                    <span className="font-semibold">2. 데이터 업로드</span>
                </button>

                <div className="h-6 ml-6 border-l-2 border-slate-700 border-dashed"></div>

                <button 
                    onClick={() => setActiveTab('analysis')}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                        activeTab === 'analysis' 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50' 
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                    }`}
                >
                    <BarChart2 size={20} />
                    <span className="font-semibold">3. 성과 분석 결과</span>
                </button>

                <div className="h-6 ml-6 border-l-2 border-slate-700 border-dashed"></div>

                <button 
                    onClick={() => setActiveTab('report')}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 ${
                        activeTab === 'report' 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/50' 
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                    }`}
                >
                    <FileText size={20} />
                    <span className="font-semibold">4. 보고서 생성</span>
                </button>
            </div>
            
            <div className="mt-4 bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-xs text-slate-400">
                <span className="text-blue-400 font-bold">Goal:</span> 복잡한 기능을 배제하고, <br/>
                업로드 → 분석 → 보고서 출력의<br/> 
                <span className="text-white">Linear Flow</span>를 강조합니다.
            </div>
        </div>

        {/* Right: Mockup Window */}
        <div className="w-3/4 bg-slate-900 rounded-xl border border-slate-600 shadow-2xl overflow-hidden flex flex-col relative">
            {/* Mockup Title Bar */}
            <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 justify-between shrink-0">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="bg-slate-900 px-6 py-1 rounded-md text-xs text-slate-500 border border-slate-700 flex items-center gap-2">
                    <span className="text-blue-500">🔒</span> platform.society.or.kr
                </div>
                <div className="flex items-center gap-3">
                    <Settings size={14} className="text-slate-500" />
                    <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-xs">A</div>
                </div>
            </div>

            {/* Mockup Body Content */}
            <div className="flex-1 overflow-hidden bg-[#0f172a] p-6 relative">
                
                {/* 1. Dashboard View */}
                {activeTab === 'dashboard' && (
                    <div className="h-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
                        <h2 className="text-2xl font-bold text-white mb-6">안녕하세요, 한국대학교 산학협력단님 👋</h2>
                        
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                                <div className="text-slate-400 text-sm mb-1">진행 중인 보고서</div>
                                <div className="text-3xl font-bold text-blue-400">2건</div>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                                <div className="text-slate-400 text-sm mb-1">완료된 보고서</div>
                                <div className="text-3xl font-bold text-white">14건</div>
                            </div>
                            <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
                                <div className="text-slate-400 text-sm mb-1">구독 잔여일</div>
                                <div className="text-3xl font-bold text-green-400">D-128</div>
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 p-6">
                            <h3 className="text-lg font-bold text-white mb-4">최근 프로젝트</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg"><FileText size={18}/></div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-200">2024년도 대학혁신지원사업 연차보고서</div>
                                            <div className="text-xs text-slate-500">마지막 수정: 2시간 전</div>
                                        </div>
                                    </div>
                                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">작성 중</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-lg border border-slate-700">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-green-500/20 text-green-400 rounded-lg"><CheckCircle2 size={18}/></div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-200">2023년도 성과분석 결과보고서</div>
                                            <div className="text-xs text-slate-500">제출 완료: 2023.12.20</div>
                                        </div>
                                    </div>
                                    <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded">완료</span>
                                </div>
                            </div>
                            <button className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
                                + 새 프로젝트 시작하기
                            </button>
                        </div>
                    </div>
                )}

                {/* 2. Upload View */}
                {activeTab === 'upload' && (
                    <div className="h-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
                        <div className="flex items-center gap-2 mb-6 text-slate-400">
                             <span className="hover:text-white cursor-pointer">프로젝트</span>
                             <ChevronRight size={16} />
                             <span className="text-white font-bold">데이터 업로드</span>
                        </div>

                        <div className="flex-1 border-2 border-dashed border-slate-600 rounded-xl bg-slate-800/30 flex flex-col items-center justify-center relative hover:bg-slate-800/50 hover:border-blue-500 transition-all cursor-pointer group">
                             <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <UploadCloud size={32} className="text-blue-400" />
                             </div>
                             <h3 className="text-xl font-bold text-slate-200 mb-2">데이터 파일을 이곳에 드래그하세요</h3>
                             <p className="text-slate-400 text-sm mb-6">지원 형식: .xlsx, .csv, .json (최대 50MB)</p>
                             <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-medium border border-slate-600 transition-colors">
                                파일 탐색기 열기
                             </button>
                        </div>

                        <div className="mt-6">
                            <h4 className="text-sm font-bold text-slate-400 mb-3">업로드 목록</h4>
                            <div className="bg-slate-800 p-3 rounded-lg border border-slate-700 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FileSpreadsheet size={20} className="text-green-500" />
                                    <div className="text-sm text-slate-200">2024_finance_data.xlsx</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-xs text-slate-500">1.2 MB</span>
                                    <CheckCircle2 size={16} className="text-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-lg shadow-blue-900/50 flex items-center gap-2">
                                다음 단계: 데이터 검증 <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                )}

                {/* 3. Analysis View */}
                {activeTab === 'analysis' && (
                    <div className="h-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
                        <div className="flex justify-between items-center mb-6">
                             <h2 className="text-xl font-bold text-white">성과지표 AI 분석 결과</h2>
                             <button className="text-xs text-blue-400 border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 rounded hover:bg-blue-500/20 transition-colors flex items-center gap-1">
                                <Settings size={12} /> 분석 설정 재조정
                             </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                <div className="text-xs text-slate-400 mb-1">전임교원 확보율</div>
                                <div className="flex items-end gap-2">
                                    <span className="text-2xl font-bold text-white">88.4%</span>
                                    <span className="text-xs text-green-400 mb-1">▲ 1.2% (YoY)</span>
                                </div>
                                <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                                    <div className="bg-green-500 w-[88%] h-full"></div>
                                </div>
                            </div>
                             <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                <div className="text-xs text-slate-400 mb-1">교육비 환원율</div>
                                <div className="flex items-end gap-2">
                                    <span className="text-2xl font-bold text-white">215.3%</span>
                                    <span className="text-xs text-red-400 mb-1">▼ 0.5% (YoY)</span>
                                </div>
                                <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                                    <div className="bg-blue-500 w-[65%] h-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 bg-slate-800 rounded-xl border border-slate-700 p-5 overflow-y-auto custom-scrollbar">
                             <div className="flex items-center gap-2 mb-3">
                                <div className="p-1 bg-purple-500/20 rounded text-purple-400"><Search size={14}/></div>
                                <h3 className="text-sm font-bold text-white">AI Insight 요약</h3>
                             </div>
                             <div className="bg-slate-900 p-4 rounded-lg border border-slate-600 text-sm text-slate-300 leading-relaxed">
                                <p className="mb-2">
                                    <span className="text-purple-400 font-bold">요약:</span> 귀 대학의 2024년도 주요 성과지표 분석 결과, 전임교원 확보율은 전년 대비 소폭 상승하여 교육 여건이 개선되었습니다. 다만, 교육비 환원율은 0.5% 하락하였으나 여전히 대학 평균(180%)을 크게 상회하고 있습니다.
                                </p>
                                <p>
                                    <span className="text-purple-400 font-bold">제언:</span> 연구비 수주 실적이 전년 동기 대비 15% 증가함에 따라, 차년도 간접비 수입 증대가 예상됩니다. 이를 학생 복지 및 장학금 재원으로 재투자하는 전략이 필요합니다.
                                </p>
                             </div>
                             
                             <div className="mt-4 h-32 bg-slate-900 rounded-lg border border-slate-700 flex items-center justify-center text-slate-600">
                                [Chart Visualization Area]
                             </div>
                        </div>
                    </div>
                )}

                {/* 4. Report Generation View */}
                {activeTab === 'report' && (
                    <div className="h-full flex flex-col animate-[fadeIn_0.3s_ease-out]">
                        <div className="flex items-center gap-2 mb-4 text-slate-400">
                             <span className="hover:text-white cursor-pointer">프로젝트</span>
                             <ChevronRight size={16} />
                             <span className="text-white font-bold">보고서 생성</span>
                        </div>

                        <div className="flex h-full gap-4">
                            {/* Options Panel */}
                            <div className="w-1/3 flex flex-col gap-4">
                                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                    <label className="text-xs text-slate-400 font-bold mb-2 block">보고서 템플릿 선택</label>
                                    <select className="w-full bg-slate-900 border border-slate-600 text-white text-sm rounded-lg p-2.5 outline-none focus:border-blue-500">
                                        <option>대학혁신지원사업 표준 양식</option>
                                        <option>자체평가보고서 요약본</option>
                                        <option>이사회 보고용 PPT</option>
                                    </select>
                                </div>
                                <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                                    <label className="text-xs text-slate-400 font-bold mb-2 block">출력 포맷</label>
                                    <div className="flex gap-2">
                                        <button className="flex-1 py-2 bg-blue-600 text-white text-xs font-bold rounded border border-blue-500">PDF</button>
                                        <button className="flex-1 py-2 bg-slate-700 text-slate-300 text-xs font-bold rounded border border-slate-600 hover:bg-slate-600">HWP</button>
                                        <button className="flex-1 py-2 bg-slate-700 text-slate-300 text-xs font-bold rounded border border-slate-600 hover:bg-slate-600">PPTX</button>
                                    </div>
                                </div>
                                <div className="mt-auto">
                                    <button className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg flex items-center justify-center gap-2 transition-colors">
                                        <Download size={18} /> 보고서 다운로드
                                    </button>
                                </div>
                            </div>

                            {/* Preview Panel */}
                            <div className="w-2/3 bg-slate-200 rounded-xl overflow-hidden relative group">
                                <div className="absolute top-0 left-0 w-full h-8 bg-slate-300 flex items-center justify-between px-3 border-b border-slate-400">
                                    <span className="text-[10px] text-slate-600">Preview: 2024_Report_v1.pdf</span>
                                </div>
                                <div className="p-8 h-full overflow-y-auto bg-white text-slate-800">
                                    <div className="w-2/3 h-4 bg-slate-800 mb-8 mx-auto"></div> {/* Title Mockup */}
                                    <div className="space-y-4">
                                        <div className="w-full h-2 bg-slate-200"></div>
                                        <div className="w-full h-2 bg-slate-200"></div>
                                        <div className="w-3/4 h-2 bg-slate-200"></div>
                                    </div>
                                    <div className="mt-8 grid grid-cols-2 gap-4">
                                        <div className="h-24 bg-blue-50 rounded"></div>
                                        <div className="h-24 bg-blue-50 rounded"></div>
                                    </div>
                                    <div className="mt-8 space-y-4">
                                        <div className="w-full h-2 bg-slate-200"></div>
                                        <div className="w-full h-2 bg-slate-200"></div>
                                    </div>
                                </div>
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div className="bg-white px-4 py-2 rounded-full text-slate-900 font-bold text-sm shadow-xl flex items-center gap-2">
                                        <Search size={14} /> 미리보기 확대
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

      </div>
       <style>{`
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(5px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .custom-scrollbar::-webkit-scrollbar {
                width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: #0f172a; 
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #334155; 
                border-radius: 2px;
            }
        `}</style>
    </SlideLayout>
  );
};