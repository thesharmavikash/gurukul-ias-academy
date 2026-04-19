import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Target, Zap, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CSAT: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black pb-20 transition-colors">
      <SEO 
        title="CSAT Exclusive Batch | UPSC Prelims" 
        description="Master the Civil Services Aptitude Test (CSAT) with our specialized batch. Quantitative aptitude, reasoning, and reading comprehension."
      />
      <PageHero title="CSAT Special Batch" breadcrumb=" > Courses > CSAT" />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-black uppercase tracking-[0.3em] text-xs mb-8">
              <Zap size={16} fill="currentColor" /> Don't let CSAT be your hurdle
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] mb-8 tracking-tighter italic">
              CSAT <span className="text-red-600">Mastery</span> Batch.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-12">
              UPSC Prelims Paper II is often underestimated. Our focused module ensures you clear the qualifying mark with confidence through logical shortcuts and practice.
            </p>
            
            <div className="space-y-6 mb-12">
               {[
                 "Quantitative Aptitude & Number System",
                 "Logical & Analytical Reasoning",
                 "Reading Comprehension Techniques",
                 "Decision Making & Problem Solving",
                 "15+ Full Length CSAT Mock Tests"
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center flex-shrink-0">
                       <Target size={14} />
                    </div>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{item}</span>
                 </div>
               ))}
            </div>

            <Link to="/admission-form" className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-600/20 flex items-center justify-center gap-3 w-fit hover:bg-red-700 transition-all active:scale-95">
              Enroll for CSAT <ArrowRight size={20} />
            </Link>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/50 p-12 rounded-[60px] border border-slate-100 dark:border-zinc-800 shadow-3xl shadow-slate-200/50 dark:shadow-none">
             <div className="flex items-center justify-between mb-12">
                <h4 className="text-2xl font-black text-red-900 dark:text-white uppercase tracking-tighter">Batch Details</h4>
                <div className="bg-red-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Enrollment Open</div>
             </div>
             
             <div className="space-y-8">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-red-600 shadow-xl">
                      <Clock size={28} />
                   </div>
                   <div>
                      <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Duration</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">3 Months (Weekend Special)</p>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-red-600 shadow-xl">
                      <Zap size={28} />
                   </div>
                   <div>
                      <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1">Pedagogy</p>
                      <p className="text-xl font-black text-slate-900 dark:text-white">Shortcut Methods & Practice</p>
                   </div>
                </div>
             </div>

             <div className="mt-12 p-8 bg-white dark:bg-zinc-800 rounded-[40px] border border-slate-100 dark:border-zinc-700 shadow-xl">
                <p className="text-center text-slate-500 dark:text-slate-400 font-bold mb-6 italic">"The simplest way to clear CSAT without wasting precious GS prep time."</p>
                <div className="flex items-center justify-center gap-4">
                   <img src="https://i.pravatar.cc/100?u=mentor" alt="Mentor" className="w-12 h-12 rounded-full border-2 border-red-100" />
                   <div>
                      <p className="font-black text-slate-900 dark:text-white">Prof. K. Verma</p>
                      <p className="text-[10px] text-slate-400 font-black uppercase">Aptitude Specialist</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSAT;
