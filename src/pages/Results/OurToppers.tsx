import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Award, Star, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurToppers: React.FC = () => {
  const toppers = [
    {
      name: "Aditya Singh",
      rank: "AIR 42",
      exam: "UPSC CSE 2023",
      image: "https://i.pravatar.cc/300?u=aditya",
      quote: "The personalized mentorship at Gurukul IAS was the turning point in my preparation journey."
    },
    {
      name: "Sneha Reddy",
      rank: "AIR 105",
      exam: "UPSC CSE 2023",
      image: "https://i.pravatar.cc/300?u=sneha",
      quote: "Mains answer writing program helped me bridge the gap between knowledge and presentation."
    },
    {
      name: "Rahul Verma",
      rank: "AIR 215",
      exam: "UPSC CSE 2022",
      image: "https://i.pravatar.cc/300?u=rahul",
      quote: "I owe my success to the consistent support and quality resources provided by the faculty."
    },
    {
      name: "Meera Iyer",
      rank: "Selected",
      exam: "BPSC 68th",
      image: "https://i.pravatar.cc/300?u=meera",
      quote: "Gurukul IAS's focus on state-specific subjects made BPSC preparation very structured."
    }
  ];

  return (
    <div className="bg-slate-50 pb-32">
      <SEO 
        title="Our UPSC Toppers | Success Stories" 
        description="Meet the successful candidates from Gurukul IAS Academy Hajipur who cracked the UPSC Civil Services Examination and State PSCs."
        keywords="UPSC Toppers, IAS Success Stories, Gurukul IAS Results, Hajipur Toppers"
      />
      <PageHero title="Our Toppers" breadcrumb=" > Results > Our Toppers" />
      
      <div className="max-w-7xl mx-auto px-6 mt-20">
         <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-xl shadow-blue-200"
            >
               <Award size={16} /> Pride of Gurukul
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-blue-900 leading-tight mb-6">Celebrating <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Excellence</span>.</h2>
            <p className="text-xl text-slate-500 font-medium">Every year, our students rewrite their destinies. Here are some of the brilliant minds who made us proud.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {toppers.map((topper, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[50px] overflow-hidden shadow-2xl shadow-blue-900/5 border border-slate-100 group"
              >
                <div className="relative h-72 overflow-hidden">
                   <img src={topper.image} alt={topper.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                   <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1.5 rounded-xl font-black text-xs shadow-lg">
                      {topper.rank}
                   </div>
                </div>
                <div className="p-8">
                   <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">{topper.exam}</p>
                   <h4 className="text-2xl font-black text-blue-900 mb-4">{topper.name}</h4>
                   <div className="h-px w-10 bg-slate-200 mb-6 group-hover:w-full transition-all duration-500"></div>
                   <p className="text-slate-500 text-sm italic leading-relaxed font-medium">"{topper.quote}"</p>
                </div>
              </motion.div>
            ))}
         </div>

         <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-blue-900 p-12 rounded-[50px] text-white flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
               <TrendingUp size={48} className="text-blue-400 mb-8" />
               <h3 className="text-3xl font-black mb-6 leading-tight">Consistent <br /> Growth.</h3>
               <p className="text-blue-100/60 font-medium mb-8">Our selection ratio has improved by 40% in the last 3 batches due to our updated methodology.</p>
               <div className="flex gap-4">
                  <div className="flex flex-col">
                     <span className="text-2xl font-black">15+</span>
                     <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Selections 2023</span>
                  </div>
                  <div className="w-px h-10 bg-white/10"></div>
                  <div className="flex flex-col">
                     <span className="text-2xl font-black">200+</span>
                     <span className="text-[10px] uppercase font-bold tracking-widest text-blue-400">Mock Interviews</span>
                  </div>
               </div>
            </div>
            
            <div className="lg:col-span-2 bg-white p-12 rounded-[50px] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center">
               <Star className="text-blue-600 mb-6 fill-blue-100" size={40} />
               <h3 className="text-3xl font-black text-blue-900 mb-4">Be the Next Success Story.</h3>
               <p className="text-slate-500 text-lg max-w-lg mb-10 font-medium">Join Gurukul IAS Academy today and take the first step towards a prestigious career in the Civil Services.</p>
               <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black tracking-widest uppercase text-sm shadow-2xl shadow-blue-200 transition-all active:scale-95">
                  Book A Strategy Session
               </Link>
            </div>
         </div>
      </div>
    </div>
  );
};

export default OurToppers;
