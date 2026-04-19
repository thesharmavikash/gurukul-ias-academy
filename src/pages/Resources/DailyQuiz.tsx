import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Timer, CheckCircle2, XCircle, Trophy, RefreshCcw, ChevronRight, HelpCircle } from 'lucide-react';
import SEO from '../../components/SEO';

const questions = [
  {
    question: "Which article of the Indian Constitution empowers the President to appoint the Prime Minister?",
    options: ["Article 74", "Article 75", "Article 78", "Article 80"],
    answer: 1,
    explanation: "Article 75 of the Constitution of India provides that the Prime Minister shall be appointed by the President."
  },
  {
    question: "The 'Blue Revolution' is related to which of the following?",
    options: ["Space Research", "Agriculture", "Fisheries", "Water Conservation"],
    answer: 2,
    explanation: "Blue Revolution refers to the significant growth in the fisheries and aquaculture sector in India."
  },
  {
    question: "Who was the first woman President of the Indian National Congress?",
    options: ["Sarojini Naidu", "Annie Besant", "Nellie Sengupta", "Indira Gandhi"],
    answer: 1,
    explanation: "Annie Besant was the first woman President of INC (1917 Calcutta Session). Sarojini Naidu was the first Indian woman President (1925)."
  }
];

const DailyQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsFinished(true);
    }
  }, [timeLeft, isFinished]);

  const handleOptionSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
    setTimeLeft(60);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-black flex items-center justify-center transition-colors">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white dark:bg-zinc-900 rounded-[40px] p-12 text-center shadow-3xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="w-24 h-24 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-yellow-500/10">
            <Trophy size={48} />
          </div>
          <h2 className="text-3xl font-black text-red-900 dark:text-white mb-2">Quiz Completed!</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">Your UPSC knowledge score</p>
          
          <div className="text-7xl font-black text-red-600 mb-10">
            {score} <span className="text-2xl text-slate-300 dark:text-slate-700">/ {questions.length}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
             <div className="bg-slate-50 dark:bg-zinc-800 p-4 rounded-2xl">
                <p className="text-xs font-black uppercase text-slate-400 mb-1 tracking-widest">Time Taken</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">{60 - timeLeft}s</p>
             </div>
             <div className="bg-slate-50 dark:bg-zinc-800 p-4 rounded-2xl">
                <p className="text-xs font-black uppercase text-slate-400 mb-1 tracking-widest">Accuracy</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white">{Math.round((score / questions.length) * 100)}%</p>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={resetQuiz}
              className="flex-1 bg-red-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-all active:scale-95 shadow-xl shadow-red-600/20"
            >
              <RefreshCcw size={20} /> Try Again
            </button>
            <button 
              onClick={() => window.location.href = '/'}
              className="flex-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 py-4 rounded-2xl font-bold hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-black transition-colors">
      <SEO 
        title="Daily UPSC Quiz | Gurukul IAS Academy" 
        description="Test your knowledge with our daily UPSC Civil Services mock questions. Curated by top faculty for Prelims 2026."
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-red-900 dark:text-white tracking-tight italic">Daily UPSC Quiz</h1>
            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase text-xs tracking-widest mt-1">Question {currentQuestion + 1} of {questions.length}</p>
          </div>
          <div className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-black ${timeLeft < 10 ? 'bg-red-50 text-red-600 dark:bg-red-900/20' : 'bg-red-50 text-red-600 dark:bg-red-900/20 shadow-lg shadow-red-600/5'}`}>
            <Timer size={20} className={timeLeft < 10 ? 'animate-pulse' : ''} /> 00:{timeLeft.toString().padStart(2, '0')}
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600"></div>
          
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-10 leading-relaxed">
            {q.question}
          </h2>

          <div className="space-y-4">
            {q.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleOptionSelect(i)}
                disabled={selectedOption !== null}
                className={`w-full p-6 rounded-2xl border-2 text-left font-bold transition-all flex items-center justify-between group ${
                  selectedOption === i 
                    ? i === q.answer ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400' : 'border-red-500 bg-red-50 dark:bg-red-900/10 text-red-700 dark:text-red-400'
                    : selectedOption !== null && i === q.answer 
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400'
                      : 'border-slate-100 dark:border-zinc-800 hover:border-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 dark:text-slate-300'
                }`}
              >
                <span>{option}</span>
                {selectedOption === i && (
                  i === q.answer ? <CheckCircle2 size={24} /> : <XCircle size={24} />
                )}
                {selectedOption !== null && i === q.answer && selectedOption !== i && (
                  <CheckCircle2 size={24} className="opacity-50" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 p-8 bg-red-50 dark:bg-red-900/10 rounded-3xl border border-red-100 dark:border-red-900/50"
              >
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-black uppercase text-xs mb-4 tracking-widest">
                  <HelpCircle size={16} /> Explanation
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {q.explanation}
                </p>
                <button 
                  onClick={nextQuestion}
                  className="mt-8 w-full bg-red-600 text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-95 shadow-xl shadow-red-600/20"
                >
                  {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ChevronRight size={22} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DailyQuiz;
