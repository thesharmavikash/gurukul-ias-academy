import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Users, Award, BookOpen, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs: React.FC = () => {
  const reasons = [
    {
      title: "Personalized Mentorship",
      desc: "Every student is assigned a dedicated mentor who tracks progress and provides constant guidance.",
      icon: Users
    },
    {
      title: "Expert Faculty",
      desc: "Learn from India's most renowned UPSC educators and retired civil servants.",
      icon: Award
    },
    {
      title: "Updated Curriculum",
      desc: "Our study material is revised monthly to include the latest current affairs and UPSC trends.",
      icon: BookOpen
    },
    {
      title: "Flexible Learning",
      desc: "Choose between classroom programs or live interactive online batches as per your convenience.",
      icon: Clock
    }
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <SEO 
        title="Why Gurukul IAS? | Our Unique Pedagogy" 
        description="Discover what makes Gurukul IAS the best coaching for UPSC in Hajipur. From personalized mentorship to updated study materials."
      />
      <PageHero title="Why Gurukul IAS?" breadcrumb=" > About > Why Us" />
      
      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto transition-colors">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-8 tracking-tighter italic">We Build <span className="text-red-600">Bureaucrats</span>.</h2>
           <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">At Gurukul IAS, we go beyond traditional teaching. We nurture the mindset, ethics, and analytical skills required for a successful civil servant.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-12 bg-slate-50 dark:bg-zinc-900/50 rounded-[48px] border border-slate-100 dark:border-zinc-800 flex flex-col items-center text-center transition-all group"
            >
              <div className="w-20 h-20 bg-red-50 dark:bg-red-900/20 rounded-3xl flex items-center justify-center text-red-600 dark:text-red-400 mb-8 group-hover:bg-red-600 group-hover:text-white transition-all shadow-xl shadow-red-200/50 dark:shadow-none">
                <reason.icon size={36} />
              </div>
              <h4 className="text-2xl font-black text-red-950 dark:text-white mb-4 tracking-tight">{reason.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 bg-red-950 rounded-[60px] p-10 md:p-24 text-white relative overflow-hidden group shadow-3xl">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
              <div className="lg:w-1/2">
                 <h3 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">Our Core <br /> Philosophy.</h3>
                 <div className="space-y-6 text-red-100/70 text-lg font-medium leading-relaxed">
                    <p>We believe that every aspirant has unique strengths and weaknesses. Our pedagogy focuses on identifying these traits and providing custom-tailored preparation strategies.</p>
                    <p>Integrity, Discipline, and Excellence are not just words for us; they are the pillars upon which every Gurukul student's success is built.</p>
                 </div>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                 <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center">
                    <p className="text-4xl font-black mb-2 tracking-tighter text-red-400">1:20</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-red-200/50">Student Ratio</p>
                 </div>
                 <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center">
                    <p className="text-4xl font-black mb-2 tracking-tighter text-red-400">24/7</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-red-200/50">Library Access</p>
                 </div>
                 <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center">
                    <p className="text-4xl font-black mb-2 tracking-tighter text-red-400">Daily</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-red-200/50">Writing Tasks</p>
                 </div>
                 <div className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] text-center">
                    <p className="text-4xl font-black mb-2 tracking-tighter text-red-400">Expert</p>
                    <p className="text-[10px] uppercase font-black tracking-widest text-red-200/50">Panel Support</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
