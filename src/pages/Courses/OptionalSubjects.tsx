import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OptionalSubjects: React.FC = () => {
  const subjects = [
    { name: "History", desc: "Comprehensive coverage of Ancient, Medieval, and Modern history." },
    { name: "PSIR", desc: "Political Science and International Relations with contemporary analysis." },
    { name: "Geography", desc: "Physical and Human geography with map-based learning." },
    { name: "Sociology", desc: "In-depth study of Indian society and social structures." }
  ];

  return (
    <div className="bg-white dark:bg-black pb-20 transition-colors">
      <SEO 
        title="Optional Subjects | UPSC CSE Preparation" 
        description="Choose the right optional subject for your UPSC journey. We offer expert guidance for History, PSIR, Geography, and Sociology."
      />
      <PageHero title="Optional Subjects" breadcrumb=" > Courses > Optional" />
      
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-8 tracking-tighter italic">Choose Your <span className="text-red-600">Specialization</span>.</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">Mastering your optional subject can be the difference between selection and a top rank. Our faculty ensures you reach that peak.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-10 bg-slate-50 dark:bg-zinc-900/50 rounded-[40px] border border-slate-100 dark:border-zinc-800 transition-all group"
            >
              <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all shadow-lg">
                <BookOpen size={28} />
              </div>
              <h4 className="text-2xl font-black text-red-950 dark:text-white mb-4 tracking-tight">{s.name}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-8">{s.desc}</p>
              <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 bg-red-600 rounded-[60px] p-12 md:p-20 text-white text-center shadow-3xl shadow-red-600/30">
          <h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter italic">Join the Next Batch</h3>
          <p className="text-xl text-red-100 mb-12 max-w-xl mx-auto font-medium">Limited seats available for the 2026 Optional batches. Enroll today to secure your mentorship.</p>
          <Link to="/admission-form" className="bg-white text-red-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-red-50 transition-all active:scale-95 shadow-2xl">
            Start Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OptionalSubjects;
