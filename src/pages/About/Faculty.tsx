import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import { User, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Faculty: React.FC = () => {
  const sidebarLinks = [
    { name: 'The School', path: '/mission' },
    { name: 'Mission Vision', path: '/vision' },
    { name: 'Fact Sheet', path: '/fact-sheet' },
    { name: 'Hajipur Campus', path: '/hajipur-campus' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Our Faculty', path: '/faculty' }
  ];

  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Head of Science",
      qual: "Ph.D. in Physics, M.Sc.",
      exp: "15+ Years",
      image: "https://i.pravatar.cc/300?u=rajesh"
    },
    {
      name: "Mrs. Sunita Singh",
      role: "Head of English",
      qual: "M.A. English, B.Ed.",
      exp: "12+ Years",
      image: "https://i.pravatar.cc/300?u=sunita"
    },
    {
      name: "Mr. Amit Verma",
      role: "Mathematics Lead",
      qual: "M.Sc. Mathematics, GATE Qualified",
      exp: "10+ Years",
      image: "https://i.pravatar.cc/300?u=amit"
    },
    {
      name: "Ms. Priya Sahay",
      role: "Social Science Expert",
      qual: "M.A. History, M.Phil.",
      exp: "8+ Years",
      image: "https://i.pravatar.cc/300?u=priya"
    }
  ];

  return (
    <div className="bg-slate-50 pb-32">
      <SEO 
        title="Our Expert Faculty" 
        description="Meet the dedicated and highly qualified teaching staff at Gurukul Vidyapeeth Hajipur. Our mentors bring decades of experience in international pedagogy."
        keywords="Gurukul Faculty, School Teachers Hajipur, Best Educators Bihar, Teaching Experts"
      />
      <PageHero title="Our Expert Faculty" breadcrumb=" > About Us > Faculty" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-24">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3">
          <div className="text-center lg:text-left mb-16">
             <h2 className="text-primary text-sm font-black uppercase tracking-[0.4em] mb-6">Mentors & Guides</h2>
             <h3 className="text-4xl md:text-5xl font-black text-primary leading-tight uppercase tracking-tighter">
               Excellence Through <span className="text-accent italic">Expertise</span>.
             </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {facultyMembers.map((member, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 group hover:border-accent transition-all duration-500"
               >
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                     <div className="relative shrink-0">
                        <div className="absolute -inset-2 bg-accent/10 rounded-[2.5rem] group-hover:rotate-6 transition-transform"></div>
                        <img src={member.image} alt={member.name} className="relative z-10 w-32 h-32 rounded-[2rem] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 border-4 border-white" />
                     </div>
                     <div className="text-center md:text-left">
                        <h4 className="text-2xl font-black text-primary mb-1 uppercase tracking-tight">{member.name}</h4>
                        <p className="text-accent font-black uppercase tracking-[0.2em] text-[10px] mb-6">{member.role}</p>
                        
                        <div className="space-y-3">
                           <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase">
                              <Award size={14} className="text-accent" />
                              <span>{member.qual}</span>
                           </div>
                           <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase">
                              <BookOpen size={14} className="text-accent" />
                              <span>{member.exp} Teaching Exp.</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>
             ))}
          </div>

          <div className="mt-24 bg-primary p-16 rounded-[4rem] text-white relative overflow-hidden group shadow-3xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-md">
                   <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter">Join Our Faculty</h3>
                   <p className="text-slate-400 font-medium leading-relaxed italic">
                     "We are looking for passionate individuals who believe in the power of education to transform lives. If you have the vision, we have the platform."
                   </p>
                </div>
                <Link to="/careers" className="bg-accent hover:bg-rose-700 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-rose-900/40 transition-all active:scale-95">
                   View Opportunities
                </Link>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Faculty;
