import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Newspaper, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const DailyCurrentAffairs: React.FC = () => {
  const news = [
    { title: "Analysis of the latest RBI Monetary Policy Review", date: "Oct 24, 2025", cat: "Economy" },
    { title: "Impact of new Environmental Regulations on MSMEs", date: "Oct 23, 2025", cat: "Environment" },
    { title: "Understanding the G20 Summit outcomes for India", date: "Oct 22, 2025", cat: "International Relations" },
    { title: "Constitutional validity of the recent Judicial Reform Bill", date: "Oct 21, 2025", cat: "Polity" }
  ];

  return (
    <div className="bg-white dark:bg-black pb-20 transition-colors">
      <SEO 
        title="Daily Current Affairs | UPSC Preparation" 
        description="Stay updated with the latest news and detailed analysis for UPSC Civil Services Examination. Daily updates curated for IAS aspirants."
      />
      <PageHero title="Daily Current Affairs" breadcrumb=" > Resources > Current Affairs" />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-8 tracking-tighter italic">Today's <span className="text-red-600">Headlines</span>.</h2>
              <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">Critical news analysis filtered through the UPSC lens. We save your time by highlighting what actually matters for the exam.</p>
           </div>
           <div className="bg-red-50 dark:bg-red-900/20 px-8 py-4 rounded-2xl border border-red-100 dark:border-red-900/30">
              <p className="text-red-600 dark:text-red-400 font-black text-sm uppercase tracking-widest flex items-center gap-2">
                 <Calendar size={18} /> October 2025 Edition
              </p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {news.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 10 }}
              className="p-10 bg-slate-50 dark:bg-zinc-900/50 rounded-[40px] border border-slate-100 dark:border-zinc-800 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-8">
                 <span className="bg-white dark:bg-zinc-800 text-red-600 dark:text-red-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {item.cat}
                 </span>
                 <p className="text-xs text-slate-400 font-bold uppercase">{item.date}</p>
              </div>
              <h4 className="text-2xl font-black text-red-950 dark:text-white mb-6 group-hover:text-red-600 transition-colors">{item.title}</h4>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-black uppercase tracking-widest">
                 Read Full Analysis <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-24 bg-zinc-900 rounded-[60px] text-white relative overflow-hidden group shadow-3xl">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <div className="w-16 h-16 bg-red-600 rounded-3xl flex items-center justify-center text-white mb-8 shadow-2xl">
                    <BookOpen size={32} />
                 </div>
                 <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Download Monthly Compilation</h3>
                 <p className="text-slate-400 text-lg font-medium leading-relaxed">Get our comprehensive monthly current affairs magazine with static linkages and practice questions.</p>
              </div>
              <button className="whitespace-nowrap bg-white text-red-900 px-12 py-6 rounded-[32px] font-black text-xl hover:bg-red-50 transition-all active:scale-95 shadow-2xl">
                 Download Oct PDF
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DailyCurrentAffairs;
