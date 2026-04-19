import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import campusVideo from '../../assets/campus-CW9By398.MP4';
import { Play, Map, Camera, Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const VirtualTour: React.FC = () => {
  const highlights = [
    { title: "Main Academic Block", desc: "Our architectural masterpiece housing smart classrooms and administrative offices.", icon: Box },
    { title: "Indus Innovation Lab", desc: "State-of-the-art robotics and AI hub for collaborative learning.", icon: Map },
    { title: "Central Library", desc: "A quiet sanctuary for research with over 15,000 titles and digital access.", icon: Camera }
  ];

  return (
    <div className="bg-white pb-32">
      <SEO 
        title="Virtual Campus Tour" 
        description="Experience Gurukul Vidyapeeth Hajipur from anywhere. Watch our cinematic campus walkthrough and explore our world-class facilities."
        keywords="Campus Tour, School Video, Virtual Walkthrough, Hajipur School Infrastructure"
      />
      <PageHero title="Virtual Campus Tour" breadcrumb=" > Campus > Virtual Tour" />
      
      <div className="max-w-7xl mx-auto px-6 mt-24">
        {/* Video Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[4rem] overflow-hidden shadow-3xl border-8 border-slate-50 group"
        >
           <video autoPlay loop muted playsInline className="w-full h-[600px] object-cover brightness-75 group-hover:scale-105 transition-transform duration-[2000ms]">
              <source src={campusVideo} type="video/mp4" />
           </video>
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-24 h-24 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl animate-pulse">
                 <Play className="text-white fill-white" size={40} />
              </div>
           </div>
           <div className="absolute bottom-12 left-12 right-12 z-10 flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-xl">
                 <h3 className="text-white text-4xl font-black uppercase tracking-tighter mb-4">A Cinematic Journey</h3>
                 <p className="text-white/70 font-medium text-lg">Watch the full-length tour of our 10+ acre green campus in the heart of Hajipur.</p>
              </div>
              <button className="bg-white text-primary px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl transition-all hover:bg-accent hover:text-white active:scale-95 pointer-events-auto">
                 Download Brochure
              </button>
           </div>
           <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
           {highlights.map((h, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-accent transition-all duration-500 group"
             >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                   <h.icon size={32} />
                </div>
                <h4 className="text-2xl font-black text-primary mb-4 uppercase tracking-tighter">{h.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{h.desc}</p>
             </motion.div>
           ))}
        </div>

        {/* Call to Action */}
        <div className="mt-32 bg-primary p-16 rounded-[4rem] text-white text-center relative overflow-hidden shadow-3xl">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <h3 className="text-3xl md:text-5xl font-black mb-8 uppercase tracking-tighter relative z-10">Prefer a <span className="text-accent italic">Personal</span> Tour?</h3>
           <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
             Nothing beats experiencing the Gurukul energy in person. Schedule a guided walkthrough with our campus coordinators.
           </p>
           <Link to="/contact" className="inline-block bg-accent hover:bg-rose-700 text-white px-16 py-7 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xs shadow-3xl shadow-rose-900/40 transition-all active:scale-95 relative z-10">
              Schedule Visit
           </Link>
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;
