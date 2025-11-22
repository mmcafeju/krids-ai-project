
import React, { useState, useEffect, useCallback } from 'react';
import { IntroSlide } from './components/slides/IntroSlide';
import { MarketSizeSlide } from './components/slides/MarketSizeSlide';
import { MarketStatusSlide } from './components/slides/MarketStatusSlide';
import { TargetMarketSlide } from './components/slides/TargetMarketSlide'; 
import { MarketTrendsSlide } from './components/slides/MarketTrendsSlide';
import { CompetitionSlide } from './components/slides/CompetitionSlide';
import { SwotAnalysisSlide } from './components/slides/SwotAnalysisSlide';
import { StrengthsSlide } from './components/slides/StrengthsSlide';
import { StrategySlide } from './components/slides/StrategySlide';
import { StrategyDetailSlide } from './components/slides/StrategyDetailSlide';
import { AutomationAnalysisSlide } from './components/slides/AutomationAnalysisSlide'; 
import { ImplementationStrategySlide } from './components/slides/ImplementationStrategySlide'; 
import { DevelopmentRoadmapSlide } from './components/slides/DevelopmentRoadmapSlide'; 
import { MvpArchitectureSlide } from './components/slides/MvpArchitectureSlide'; 
import { MvpUiWireframeSlide } from './components/slides/MvpUiWireframeSlide';
import { MvpDataUploadSlide } from './components/slides/MvpDataUploadSlide';
import { MvpAnalysisResultSlide } from './components/slides/MvpAnalysisResultSlide';
import { MvpReportGenerationSlide } from './components/slides/MvpReportGenerationSlide';
import { ProposalSummarySlide } from './components/slides/ProposalSummarySlide'; 
import { BusinessItemsSlide } from './components/slides/BusinessItemsSlide';
import { ValuePropSlide } from './components/slides/ValuePropSlide';
import { OutcomesSlide } from './components/slides/OutcomesSlide';
import { Controls } from './components/Controls';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    IntroSlide,
    MarketSizeSlide,
    MarketStatusSlide,
    TargetMarketSlide,      
    MarketTrendsSlide,
    CompetitionSlide,
    SwotAnalysisSlide,
    StrengthsSlide,
    StrategySlide,
    StrategyDetailSlide,
    AutomationAnalysisSlide,
    ImplementationStrategySlide,
    DevelopmentRoadmapSlide,
    MvpArchitectureSlide,
    MvpUiWireframeSlide, // Overview with tabs
    MvpDataUploadSlide, // Dedicated Upload Slide
    MvpAnalysisResultSlide, // Dedicated Analysis Slide
    MvpReportGenerationSlide, // Dedicated Report Slide
    ProposalSummarySlide, 
    BusinessItemsSlide,
    ValuePropSlide,
    OutcomesSlide
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-slate-950 text-slate-100 overflow-hidden selection:bg-blue-500/30 flex flex-col">
      
      {/* Header/Brand Area */}
      <header className="fixed top-0 left-0 w-full p-6 z-40 pointer-events-none">
        <div className="flex justify-between items-center">
            <div className="font-black text-xl tracking-tight text-slate-400">ACADEMIC SOCIETY</div>
            <div className="text-xs font-bold text-slate-400 border border-slate-700 px-2 py-1 rounded">CONFIDENTIAL</div>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 relative w-full h-full max-w-[1600px] mx-auto flex flex-col justify-center">
        <div className="w-full h-full md:h-[85vh] bg-slate-900 shadow-2xl md:rounded-2xl overflow-hidden relative md:my-8 md:mx-8 md:w-[calc(100%-4rem)] border border-slate-800 ring-1 ring-white/5">
          <div key={currentSlide} className="w-full h-full animate-[fadeIn_0.5s_ease-out]">
             <CurrentSlideComponent isActive={true} />
          </div>
        </div>
      </main>

      <Controls 
        currentSlide={currentSlide} 
        totalSlides={slides.length} 
        onNext={nextSlide} 
        onPrev={prevSlide} 
      />
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
