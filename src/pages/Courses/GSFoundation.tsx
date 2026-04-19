import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import { CheckCircle2, Clock, Calendar, Users, BookOpen } from 'lucide-react';

const GSFoundation: React.FC = () => {
  const sidebarLinks = [
    { name: "GS Foundation", path: "/courses/gs-foundation" },
    { name: "Optional Subjects", path: "/courses/optional" },
    { name: "CSAT Special", path: "/courses/csat" },
    { name: "Interview Guidance", path: "/courses/interview" }
  ];

  const features = [
    "Comprehensive coverage of Prelims & Mains Syllabus",
    "Personalized Mentorship by Expert Faculty",
    "Daily Answer Writing Practice with Feedback",
    "Weekly Mock Tests and Performance Analytics",
    "Special Focus on Current Affairs & Editorial Analysis",
    "High-Quality Printed & Digital Study Material"
  ];

  return (
    <div className="bg-white dark:bg-black pb-20 transition-colors">
      <SEO 
        title="GS Foundation Course | UPSC CSE 2025" 
        description="Join our comprehensive GS Foundation batch for UPSC CSE. Complete coverage of Prelims and Mains with integrated test series and mentorship."
        keywords="GS Foundation UPSC, IAS Coaching, Prelims Mains Coaching, UPSC 2025 Preparation"
      />
      <PageHero title="GS Foundation Course" breadcrumb=" > Courses > GS Foundation" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-12">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-red-900 dark:text-red-500 border-l-8 border-red-600 dark:border-red-700 pl-6 mb-8 uppercase tracking-tighter transition-all">
              A Comprehensive <span className="text-red-600">Roadmap</span> to Success
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium text-justify">
              Our GS Foundation Course is meticulously designed to provide aspirants with a solid conceptual foundation across all subjects mentioned in the UPSC CSE syllabus. We bridge the gap between basic NCERT understanding and advanced analytical requirements of the exam.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
             <div className="bg-red-950 p-8 rounded-[40px] text-white shadow-2xl shadow-red-900/20 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-xl font-black mb-6 uppercase tracking-widest text-red-300">Course Highlights</h4>
                <ul className="space-y-4">
                   {features.map((f, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <CheckCircle2 className="text-red-400 mt-1 flex-shrink-0" size={18} />
                       <span className="text-sm font-bold text-red-50/90">{f}</span>
                     </li>
                   ))}
                </ul>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-[32px] border border-slate-100 dark:border-zinc-800 flex flex-col items-center text-center justify-center">
                   <Clock className="text-red-600 mb-2" size={24} />
                   <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest">Duration</p>
                   <p className="font-black text-red-900 dark:text-red-400 tracking-tighter">12 Months</p>
                </div>
                <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-[32px] border border-slate-100 dark:border-zinc-800 flex flex-col items-center text-center justify-center">
                   <Calendar className="text-red-600 mb-2" size={24} />
                   <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest">Batches</p>
                   <p className="font-black text-red-900 dark:text-red-400 tracking-tighter">May / Oct / Jan</p>
                </div>
                <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-[32px] border border-slate-100 dark:border-zinc-800 flex flex-col items-center text-center justify-center">
                   <Users className="text-red-600 mb-2" size={24} />
                   <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest">Mode</p>
                   <p className="font-black text-red-900 dark:text-red-400 tracking-tighter">Hybrid</p>
                </div>
                <div className="bg-slate-50 dark:bg-zinc-900/50 p-6 rounded-[32px] border border-slate-100 dark:border-zinc-800 flex flex-col items-center text-center justify-center">
                   <BookOpen className="text-red-600 mb-2" size={24} />
                   <p className="text-[10px] uppercase font-black text-slate-400 dark:text-slate-500 tracking-widest">Material</p>
                   <p className="font-black text-red-900 dark:text-red-400 tracking-tighter">Books Included</p>
                </div>
             </div>
          </div>

          <section className="bg-zinc-900 p-12 rounded-[50px] text-white shadow-2xl">
            <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 uppercase tracking-tighter italic">Detailed Curriculum</h3>
            <div className="space-y-8">
              {[
                { title: "Phase 1: Basic NCERT Foundation", desc: "Building the core concepts in History, Geography, Polity, and Economy using NCERTs." },
                { title: "Phase 2: Core GS (Prelims + Mains)", desc: "In-depth analysis of GS Paper I, II, III, and IV with contemporary relevance." },
                { title: "Phase 1: Ethics & Essay Mastery", desc: "Special modules on case studies, value-based analysis, and high-scoring essay techniques." },
                { title: "Phase 4: Revision & Test Series", desc: "Comprehensive simulation of exam conditions with real-time evaluation." }
              ].map((phase, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <span className="text-4xl font-black text-red-600 opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <div>
                    <h5 className="font-bold text-lg mb-2">{phase.title}</h5>
                    <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col md:flex-row justify-between items-center bg-red-50 dark:bg-red-900/10 p-10 rounded-[40px] border border-red-100 dark:border-red-900/20 shadow-xl shadow-red-200/50 dark:shadow-none transition-all">
             <div className="max-w-md text-center md:text-left mb-8 md:mb-0">
                <h4 className="text-2xl font-black text-red-900 dark:text-white mb-2 tracking-tighter">Ready to Start?</h4>
                <p className="text-slate-600 dark:text-slate-400 font-medium">Download the complete brochure for detailed syllabus and fee structure.</p>
             </div>
             <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black tracking-widest uppercase text-sm shadow-xl shadow-red-600/30 transition-all active:scale-95">
               Download Brochure
             </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GSFoundation;
