import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Award, Star, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Interview: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black pb-20 transition-colors">
      <SEO 
        title="Interview Guidance Program | UPSC Personality Test" 
        description="Prepare for the UPSC Personality Test with our Expert Panel. Mock interviews with retired IAS/IPS officers and personality development sessions."
      />
      <PageHero title="Interview Guidance" breadcrumb=" > Courses > Interview" />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-xl shadow-red-200/20 dark:shadow-none"
           >
              <Award size={14} /> The Final Stage
           </motion.div>
           <h2 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-8 tracking-tighter italic">Personality <span className="text-red-600">Transformation</span>.</h2>
           <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">It's not just an interview; it's a test of your character, integrity, and depth of thought. We help you present your best self to the board.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
          <div className="p-12 bg-slate-50 dark:bg-zinc-900/50 rounded-[50px] border border-slate-100 dark:border-zinc-800 text-center flex flex-col items-center group">
             <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-3xl flex items-center justify-center text-red-600 mb-8 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                <Users size={32} />
             </div>
             <h4 className="text-2xl font-black text-red-950 dark:text-white mb-4">Expert Panel</h4>
             <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Interactions with retired IAS, IPS officers and renowned academicians.</p>
          </div>
          <div className="p-12 bg-slate-50 dark:bg-zinc-900/50 rounded-[50px] border border-slate-100 dark:border-zinc-800 text-center flex flex-col items-center group">
             <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-3xl flex items-center justify-center text-red-600 mb-8 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                <ShieldCheck size={32} />
             </div>
             <h4 className="text-2xl font-black text-red-950 dark:text-white mb-4">DAF Analysis</h4>
             <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">One-on-one session for detailed analysis of your Detailed Application Form (DAF).</p>
          </div>
          <div className="p-12 bg-slate-50 dark:bg-zinc-900/50 rounded-[50px] border border-slate-100 dark:border-zinc-800 text-center flex flex-col items-center group">
             <div className="w-16 h-16 bg-white dark:bg-zinc-800 rounded-3xl flex items-center justify-center text-red-600 mb-8 shadow-xl group-hover:bg-red-600 group-hover:text-white transition-all">
                <Star size={32} />
             </div>
             <h4 className="text-2xl font-black text-red-950 dark:text-white mb-4">Mock Interviews</h4>
             <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">Video recorded mock sessions with constructive feedback and analysis.</p>
          </div>
        </div>

        <div className="bg-red-950 rounded-[60px] p-10 md:p-24 text-white relative overflow-hidden group shadow-3xl">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter">Prepare with the Best.</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                    <p className="text-xl text-red-100/80 font-medium leading-relaxed italic">"The mock interviews at Gurukul were remarkably similar to the actual UPSC board. The feedback on my body language was invaluable."</p>
                    <div className="flex items-center gap-4">
                       <img src="https://i.pravatar.cc/100?u=topper1" alt="Topper" className="w-12 h-12 rounded-full border-2 border-red-400" />
                       <div>
                          <p className="font-black">Abhishek Singh</p>
                          <p className="text-xs font-black uppercase text-red-400">IAS, AIR 14 (Batch 2021)</p>
                       </div>
                    </div>
                 </div>
                 <div className="flex flex-col justify-center gap-6">
                    <Link to="/contact" className="bg-white text-red-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-red-50 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-2xl">
                      Book Mock Interview <ArrowRight size={20} />
                    </Link>
                    <p className="text-center text-red-200 text-sm font-bold uppercase tracking-widest">Free for UPSC Mains Qualified Candidates</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Interview;
