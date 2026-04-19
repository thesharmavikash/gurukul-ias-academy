import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Quote, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import sirPic from '../../assets/sir-CGU2M9k_.jpg';
import { Link } from 'react-router-dom';

const DirectorsMessage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-black pb-20 transition-colors duration-300">
      <SEO 
        title="Director's Message | Gurukul IAS Academy" 
        description="Read a special message from our Director, Dr. Subhash Singh, about his vision for civil services preparation and nurturing future leaders."
      />
      <PageHero title="Director's Message" breadcrumb=" > About > Director's Message" />
      
      <div className="max-w-7xl mx-auto px-6 py-24 transition-colors">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
             <div className="relative group">
                <div className="absolute -inset-4 bg-red-600/10 dark:bg-red-500/10 rounded-[60px] rotate-3 group-hover:rotate-0 transition-all duration-700"></div>
                <img src={sirPic} alt="Director" className="relative z-10 rounded-[50px] shadow-2xl w-full grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute -bottom-10 -right-10 z-20 bg-white dark:bg-zinc-800 p-8 rounded-[40px] shadow-3xl border border-slate-100 dark:border-zinc-700">
                   <Award size={32} className="text-red-600 mb-2" />
                   <p className="font-black text-xl text-slate-900 dark:text-white">Dr. Subhash Singh</p>
                   <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Director & Chief Mentor</p>
                </div>
             </div>
          </div>
          
          <div className="lg:w-2/3 space-y-10">
            <div className="prose prose-xl max-w-none dark:prose-invert">
               <Quote size={48} className="text-red-600/20 mb-6" />
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1] mb-12 tracking-tighter italic">
                 "Our mission is to bridge the gap between <span className="text-red-600">aspiration and achievement</span> through ethical guidance."
               </h2>
               <div className="space-y-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium text-justify">
                  <p>
                    Dear Aspirants, Civil Services is not just a career choice; it is a profound commitment to serve the nation. At Gurukul IAS, we understand the weight of this responsibility and the immense dedication required to crack this exam.
                  </p>
                  <p>
                    Our approach is rooted in the traditional 'Gurukul' values of discipline, integrity, and focused mentorship, combined with modern analytical tools and data-driven learning. We don't believe in rote learning; we build the analytical backbone required for a future administrator.
                  </p>
                  <p>
                    Every student at our academy is a priority. We ensure that our small batch sizes allow for personal interaction between mentors and aspirants, fostering an environment where doubts are celebrated and curiosity is encouraged.
                  </p>
                  <p>
                    I invite you to join our mission. Let us work together to turn your potential into a successful reality for the service of India.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
               <div className="p-10 bg-slate-50 dark:bg-zinc-900/50 rounded-[48px] border border-slate-100 dark:border-zinc-800">
                  <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">The Vision</h4>
                  <p className="text-slate-900 dark:text-white font-bold leading-relaxed">To democratize elite UPSC coaching and make it accessible to every deserving student across Bihar and beyond.</p>
               </div>
               <div className="p-10 bg-red-600 rounded-[48px] text-white shadow-2xl shadow-red-600/20">
                  <h4 className="text-red-200 font-black uppercase tracking-widest text-xs mb-4">The Promise</h4>
                  <p className="font-bold leading-relaxed">Unwavering support, updated resources, and honest feedback at every single stage of your journey.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorsMessage;
