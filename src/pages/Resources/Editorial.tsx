import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Newspaper, ArrowRight, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Editorial: React.FC = () => {
  const editorials = [
    { title: "The Evolving Dynamics of Indian Federalism", source: "The Hindu", date: "Oct 24, 2025" },
    { title: "Data Privacy in the Age of Artificial Intelligence", source: "Indian Express", date: "Oct 23, 2025" },
    { title: "Revitalizing the Manufacturing Sector for Viksit Bharat", source: "LiveMint", date: "Oct 22, 2025" }
  ];

  return (
    <div className="bg-white dark:bg-black pb-20 transition-colors">
      <SEO 
        title="Editorial Analysis | Daily UPSC Insights" 
        description="Deep dive into daily editorials from The Hindu, Indian Express, and more. Critical insights and static linkages for UPSC Mains."
      />
      <PageHero title="Daily Editorial Analysis" breadcrumb=" > Resources > Editorial" />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-8 tracking-tighter italic">The <span className="text-red-600">Thought</span> Process.</h2>
           <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">We deconstruct complex opinions and provide you with multi-dimensional perspectives essential for UPSC Mains answer writing.</p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {editorials.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 md:p-12 bg-slate-50 dark:bg-zinc-900/50 rounded-[48px] border border-slate-100 dark:border-zinc-800 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer"
            >
              <div className="flex-grow">
                 <div className="flex items-center gap-3 mb-6">
                    <span className="text-red-600 font-black uppercase text-[10px] tracking-widest">{item.source}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="text-slate-400 font-bold text-xs uppercase">{item.date}</span>
                 </div>
                 <h4 className="text-2xl font-black text-red-950 dark:text-white leading-tight group-hover:text-red-600 transition-colors">{item.title}</h4>
              </div>
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center text-slate-400 group-hover:text-red-600 shadow-xl transition-all">
                    <Bookmark size={24} />
                 </div>
                 <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-xl shadow-red-600/20 active:scale-90 transition-all">
                    <ArrowRight size={24} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
           <div className="bg-red-50 dark:bg-red-900/10 p-12 md:p-20 rounded-[60px] border border-red-100 dark:border-red-900/20 max-w-3xl mx-auto">
              <h3 className="text-3xl font-black text-red-900 dark:text-white mb-6 italic tracking-tight uppercase">Master Answer Writing</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg font-medium mb-10 leading-relaxed">Each editorial analysis comes with a GS static linkage and a Mains-style practice question.</p>
              <button className="bg-red-600 text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-red-700 transition-all active:scale-95 shadow-xl shadow-red-600/20">
                 Explore Archives
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Editorial;
