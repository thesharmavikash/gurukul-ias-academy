import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Users, Globe, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import sirPic from '../../assets/sir-CGU2M9k_.jpg';

const Faculty: React.FC = () => {
  const faculty = [
    {
      name: "Dr. Subhash Singh",
      specialization: "History & Ethics",
      exp: "25+ Years",
      image: sirPic
    },
    {
      name: "Prof. Rajesh Kumar",
      specialization: "Polity & Governance",
      exp: "15+ Years",
      image: "https://i.pravatar.cc/300?u=rajesh"
    },
    {
      name: "Ms. Ananya Sharma",
      specialization: "Geography & Environment",
      exp: "12+ Years",
      image: "https://i.pravatar.cc/300?u=ananya"
    },
    {
      name: "Dr. Amitabh Prasad",
      specialization: "Economics",
      exp: "20+ Years",
      image: "https://i.pravatar.cc/300?u=amitabh"
    }
  ];

  return (
    <div className="bg-white dark:bg-black transition-colors duration-300">
      <SEO 
        title="Our Expert Faculty | Gurukul IAS Academy" 
        description="Learn from the best minds in the country. Our faculty consists of renowned UPSC educators and retired civil servants with decades of experience."
      />
      <PageHero title="Our Faculty" breadcrumb=" > About > Faculty" />
      
      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             className="inline-flex items-center gap-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-red-100 dark:border-red-900/30 shadow-xl shadow-red-200/20 dark:shadow-none"
           >
              <Users size={14} /> The Mentors
           </motion.div>
           <h2 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-8 tracking-tighter italic">Learn from the <span className="text-red-600">Masters</span>.</h2>
           <p className="text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">Our mentors are more than just teachers; they are architects of your future success, bringing decades of experience and insight.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-zinc-900 rounded-[48px] overflow-hidden border border-slate-100 dark:border-zinc-800 shadow-2xl shadow-slate-200/50 dark:shadow-none group transition-all"
            >
              <div className="relative aspect-square overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl inline-block text-white text-[10px] font-black uppercase tracking-widest">
                     {member.exp} Experience
                   </div>
                </div>
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-black text-red-900 dark:text-white mb-2 tracking-tight">{member.name}</h4>
                <p className="text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest">{member.specialization}</p>
                <div className="mt-6 flex justify-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                      <Globe size={14} />
                   </div>
                   <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all cursor-pointer">
                      <Mail size={14} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center">
           <div className="max-w-3xl mx-auto p-12 md:p-20 bg-red-950 rounded-[60px] text-white relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <h3 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter relative z-10 italic">Want to join our <span className="text-red-400">Mentorship</span> panel?</h3>
              <p className="text-red-100/70 text-lg font-medium mb-12 relative z-10">We are always looking for passionate educators and retired civil servants to guide the next generation.</p>
              <a href="mailto:careers@gurukulias.com" className="relative z-10 inline-flex items-center gap-3 bg-white text-red-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-red-50 transition-all active:scale-95 shadow-2xl">
                Work with Us <ArrowRight size={22} />
              </a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
