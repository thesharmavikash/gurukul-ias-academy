import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import { Landmark, Users, GraduationCap, Trophy, Globe, MapPin } from 'lucide-react';

const FactSheet: React.FC = () => {
  const sidebarLinks = [
    { name: 'The School', path: '/mission' },
    { name: 'Mission Vision', path: '/vision' },
    { name: 'Fact Sheet', path: '/fact-sheet' },
    { name: 'Hajipur Campus', path: '/hajipur-campus' },
    { name: 'Leadership', path: '/leadership' }
  ];

  const stats = [
    { label: "Established", value: "2002", icon: Landmark },
    { label: "Campus Size", value: "10+ Acres", icon: MapPin },
    { label: "Student-Teacher Ratio", value: "15:1", icon: Users },
    { label: "Board Affiliation", value: "CBSE", icon: GraduationCap },
    { label: "Awards Won", value: "50+", icon: Trophy },
    { label: "Global Reach", value: "Alumni in 10+ Countries", icon: Globe },
  ];

  return (
    <div className="bg-white pb-20 text-slate-800">
      <SEO 
        title="School Fact Sheet" 
        description="Key statistics and facts about Gurukul Vidyapeeth Hajipur. Overview of our infrastructure, affiliation, and academic record."
        keywords="School Stats, Gurukul Facts, Hajipur School Info, CBSE Affiliation"
      />
      <PageHero title="Fact Sheet" breadcrumb=" > About Us > Fact Sheet" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3">
          <h2 className="text-3xl font-black text-red-700 border-l-8 border-red-700 pl-6 mb-12 uppercase tracking-tighter">
            Gurukul at a <span className="text-black">Glance</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
             {stats.map((stat, i) => (
               <div key={i} className="bg-zinc-50 p-8 rounded-[40px] border border-zinc-100 hover:border-red-600 transition-all duration-500 group shadow-lg shadow-zinc-100/50">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm">
                     <stat.icon size={28} />
                  </div>
                  <h4 className="text-3xl font-black text-black mb-1">{stat.value}</h4>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
               </div>
             ))}
          </div>

          <div className="space-y-12">
            <section className="bg-black text-white p-12 rounded-[50px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>
              <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 tracking-tighter uppercase">Quick Overview</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-zinc-400">
                 <div className="flex flex-col gap-2">
                    <span className="text-red-500 font-black text-xs uppercase tracking-widest">Type</span>
                    <p className="font-bold text-lg text-white">Co-educational Day & Boarding School</p>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-red-500 font-black text-xs uppercase tracking-widest">Grades</span>
                    <p className="font-bold text-lg text-white">Nursery to Class XII</p>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-red-500 font-black text-xs uppercase tracking-widest">Streams (Sr. Sec.)</span>
                    <p className="font-bold text-lg text-white">Science, Commerce, Humanities</p>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-red-500 font-black text-xs uppercase tracking-widest">Languages</span>
                    <p className="font-bold text-lg text-white">English (Instruction), Hindi, Sanskrit</p>
                 </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FactSheet;
