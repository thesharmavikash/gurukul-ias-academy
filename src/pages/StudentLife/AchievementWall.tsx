import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Zap } from 'lucide-react';
import p4 from '../../assets/pic4.jpg';
import p7 from '../../assets/pic7.jpg';
import p8 from '../../assets/pic8.jpg';
import p12 from '../../assets/pic12.jpg';

const AchievementWall: React.FC = () => {
  const achievements = [
    {
      title: "State Level Athletics Gold",
      student: "Aryan Raj",
      event: "Bihar Inter-School Meet 2023",
      image: p4,
      category: "Sports"
    },
    {
      title: "Regional Science Fair Winner",
      student: "Isha Gupta",
      event: "CBSE Innovation Summit",
      image: p8,
      category: "Academic"
    },
    {
      title: "National Debate Runner-Up",
      student: "Karan Verma",
      event: "Youth Parliament Contest",
      image: p12,
      category: "Cultural"
    },
    {
      title: "Excellence in Visual Arts",
      student: "Sneha Das",
      event: "Fine Arts Exhibition",
      image: p7,
      category: "Arts"
    }
  ];

  return (
    <div className="bg-slate-50 pb-32">
      <SEO 
        title="Achievement Wall | Our Pride" 
        description="Celebrating the excellence of our students in academics, sports, and cultural events. See the latest victories at Gurukul Vidyapeeth Hajipur."
        keywords="School Achievements, Student Awards, Gurukul Pride, Hajipur School Success"
      />
      <PageHero title="Achievement Wall" breadcrumb=" > Student Life > Achievements" />
      
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {achievements.map((a, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-100 hover:border-accent transition-all duration-500"
             >
                <div className="h-64 overflow-hidden relative">
                   <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                   <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl">
                      {a.category}
                   </div>
                </div>
                <div className="p-8">
                   <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                      <Trophy size={20} />
                   </div>
                   <h4 className="text-xl font-black text-primary mb-2 leading-tight uppercase tracking-tight">{a.title}</h4>
                   <p className="text-accent font-black text-[10px] uppercase tracking-[0.2em] mb-6">{a.student}</p>
                   <div className="pt-6 border-t border-slate-50">
                      <p className="text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                         <Star size={12} className="text-gold" /> {a.event}
                      </p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="bg-primary p-12 rounded-[4rem] text-white relative overflow-hidden group shadow-3xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <Award className="text-accent mb-8" size={48} />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Academic Records</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">Consistently maintaining a 100% pass rate in CBSE Class X & XII board examinations since inception.</p>
           </div>
           <div className="bg-white p-12 rounded-[4rem] border border-slate-100 shadow-2xl shadow-slate-200/50 group relative overflow-hidden">
              <Zap className="text-accent mb-8" size={48} />
              <h3 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">Sports Legacy</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed">Our athletes have represented the district and state in over 15 disciplines, securing 200+ medals.</p>
           </div>
           <div className="bg-zinc-950 p-12 rounded-[4rem] text-white shadow-3xl relative overflow-hidden border-b-8 border-accent">
              <Star className="text-gold mb-8" size={48} />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-white">Cultural Impact</h3>
              <p className="text-zinc-500 font-medium text-sm leading-relaxed">Gurukul students are renowned for their excellence in performing arts, winning top honors in regional festivals.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementWall;
