import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import { Calendar, FileText, ArrowRight, Download } from 'lucide-react';

const DailyCurrentAffairs: React.FC = () => {
  const sidebarLinks = [
    { name: "Daily Current Affairs", path: "/resources/current-affairs" },
    { name: "Editorial Analysis", path: "/resources/editorial" },
    { name: "UPSC Syllabus", path: "/resources/syllabus" },
    { name: "Previous Year Papers", path: "/resources/pyq" }
  ];

  const articles = [
    {
      date: "April 18, 2024",
      title: "Strategic Importance of the India-Middle East-Europe Economic Corridor (IMEC)",
      category: "International Relations",
      desc: "Analysis of the connectivity project and its geopolitical implications for India and the region."
    },
    {
      date: "April 17, 2024",
      title: "Understanding the Implications of the New Digital India Act",
      category: "Governance",
      desc: "How the proposed legislation aims to regulate the digital ecosystem and ensure user safety."
    },
    {
      date: "April 16, 2024",
      title: "Climate Change and its Impact on Indian Agriculture",
      category: "Environment",
      desc: "A look at the shifting monsoon patterns and the need for climate-resilient farming techniques."
    },
    {
      date: "April 15, 2024",
      title: "The Evolution of Cooperative Federalism in India",
      category: "Polity",
      desc: "Tracing the journey of Centre-State relations through the lens of recent Supreme Court judgments."
    }
  ];

  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Daily Current Affairs for UPSC" 
        description="Stay updated with our daily comprehensive analysis of national and international current affairs tailored for UPSC CSE preparation."
        keywords="UPSC Current Affairs, Daily News Analysis, IAS Preparation Resources, Current Affairs 2024"
      />
      <PageHero title="Daily Current Affairs" breadcrumb=" > Resources > Current Affairs" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-100 pb-8">
             <div>
                <h2 className="text-3xl font-black text-blue-900 uppercase tracking-tighter">Latest <span className="text-blue-600">Updates</span></h2>
                <p className="text-slate-500 font-medium mt-1">High-yield news analysis for Civil Services Exam.</p>
             </div>
             <div className="flex gap-4">
                <button className="flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 hover:text-white transition-all">
                   <Calendar size={18} /> Archive
                </button>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                   <Download size={18} /> Monthly Digest
                </button>
             </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
             {articles.map((article, index) => (
               <div key={index} className="group cursor-pointer">
                  <div className="flex flex-col md:flex-row gap-8 items-start bg-slate-50 p-8 rounded-[40px] border border-slate-100 group-hover:border-blue-200 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-900/5 transition-all duration-500">
                     <div className="w-full md:w-48 h-48 bg-blue-100 rounded-[32px] flex flex-col items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 flex-shrink-0">
                        <FileText size={48} />
                        <span className="text-[10px] font-black uppercase tracking-widest mt-4">Analysis</span>
                     </div>
                     <div className="flex-grow py-2">
                        <div className="flex items-center gap-4 mb-4">
                           <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                             {article.category}
                           </span>
                           <span className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                              <Calendar size={12} /> {article.date}
                           </span>
                        </div>
                        <h4 className="text-2xl font-black text-blue-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                           {article.title}
                        </h4>
                        <p className="text-slate-600 font-medium leading-relaxed mb-6">
                           {article.desc}
                        </p>
                        <div className="flex items-center gap-2 text-blue-600 font-black text-sm uppercase tracking-widest">
                           Read Full Article <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>

          <div className="bg-slate-900 p-12 rounded-[50px] text-white text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 pointer-events-none"></div>
             <h3 className="text-2xl font-black mb-4 relative z-10">Subscribe to Daily Updates</h3>
             <p className="text-slate-400 mb-8 relative z-10 font-medium">Get the latest news analysis and editorial summaries directly in your inbox.</p>
             <form className="max-w-md mx-auto flex gap-2 relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-all text-sm font-bold"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-900/50">
                   Join
                </button>
             </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DailyCurrentAffairs;
