import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Globe, Quote } from 'lucide-react';

const Alumni: React.FC = () => {
  const successStories = [
    {
      name: "Sneha Kumari",
      batch: "Class of 2018",
      current: "Software Engineer at Google",
      education: "B.Tech from IIT Delhi",
      quote: "Gurukul gave me the confidence to dream big. The teachers were more like mentors who guided me through every challenge."
    },
    {
      name: "Rohan Verma",
      batch: "Class of 2016",
      current: "Civil Servant (IAS)",
      education: "M.A. from JNU",
      quote: "The values of integrity and service I learned at school are what drive my work as a bureaucrat today."
    },
    {
      name: "Dr. Ananya Raj",
      batch: "Class of 2015",
      current: "Resident Doctor at AIIMS",
      education: "MBBS from AIIMS Patna",
      quote: "The strong science foundation and the disciplined life at Gurukul were instrumental in my journey to becoming a doctor."
    }
  ];

  return (
    <div className="bg-white pb-32">
      <SEO 
        title="Alumni Success Stories | Gurukul Legacy" 
        description="Meet our former students who are making a global impact. Explore the success stories of Gurukul Vidyapeeth alumni in various fields."
        keywords="Gurukul Alumni, Success Stories, Where are they now, School Legacy Hajipur"
      />
      <PageHero title="Where Are They Now?" breadcrumb=" > Student Life > Alumni" />
      
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-1 gap-12">
           {successStories.map((story, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center bg-slate-50 p-12 rounded-[4rem] border border-slate-100 shadow-xl shadow-slate-200/50 group`}
             >
                <div className="w-full md:w-1/3">
                   <div className="relative">
                      <div className="absolute -inset-4 bg-accent/10 rounded-[4rem] rotate-3 group-hover:rotate-0 transition-transform"></div>
                      <img src={`https://i.pravatar.cc/400?u=${story.name}`} alt={story.name} className="relative z-10 rounded-[3rem] shadow-2xl w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-white" />
                   </div>
                </div>
                <div className="w-full md:w-2/3">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="bg-primary text-white px-4 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest">{story.batch}</span>
                      <div className="h-px w-12 bg-slate-200"></div>
                      <span className="text-accent font-black text-[10px] uppercase tracking-widest flex items-center gap-2"><Globe size={12} /> Global Success</span>
                   </div>
                   <h4 className="text-3xl font-black text-primary mb-2 uppercase tracking-tighter">{story.name}</h4>
                   <p className="text-accent font-bold text-sm mb-8">{story.current}</p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="flex gap-4 items-start">
                         <div className="bg-white p-3 rounded-2xl shadow-sm text-accent"><GraduationCap size={20} /></div>
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Education</p>
                            <p className="text-sm font-bold text-slate-700">{story.education}</p>
                         </div>
                      </div>
                      <div className="flex gap-4 items-start">
                         <div className="bg-white p-3 rounded-2xl shadow-sm text-accent"><Briefcase size={20} /></div>
                         <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Current Role</p>
                            <p className="text-sm font-bold text-slate-700">{story.current}</p>
                         </div>
                      </div>
                   </div>

                   <div className="relative">
                      <Quote className="absolute -top-6 -left-6 text-accent/10" size={48} />
                      <p className="relative z-10 text-slate-500 font-medium italic leading-relaxed">
                        "{story.quote}"
                      </p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-32 bg-primary p-20 rounded-[5rem] text-white text-center shadow-3xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
           <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter relative z-10 leading-none">Are You An <br /> <span className="text-accent italic text-3xl md:text-5xl">Alumnus?</span></h3>
           <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto mb-16 relative z-10 leading-relaxed">
             We would love to hear from you. Join our global alumni network and mentor the current generation of Gurukulites.
           </p>
           <button className="bg-white text-primary px-16 py-7 rounded-[2.5rem] font-black uppercase tracking-[0.2em] text-xs shadow-3xl hover:bg-accent hover:text-white transition-all active:scale-95 relative z-10">
              Register with Alumni Association
           </button>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
