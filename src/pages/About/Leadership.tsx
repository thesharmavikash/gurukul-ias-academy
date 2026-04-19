import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import sirPic from '../../assets/sir-CGU2M9k_.jpg';
import { Quote, Globe, Mail } from 'lucide-react';

const OurLeadership: React.FC = () => {
  const sidebarLinks = [
    { name: 'The School', path: '/mission' },
    { name: 'Mission Vision', path: '/vision' },
    { name: 'Fact Sheet', path: '/fact-sheet' },
    { name: 'Hajipur Campus', path: '/hajipur-campus' },
    { name: 'Leadership', path: '/leadership' }
  ];

  const leaders = [
    {
      name: "Dr. Subhash Singh",
      role: "Chairman",
      image: sirPic,
      msg: "At Gurukul Vidyapeeth, we don't just teach for an exam; we prepare students for a lifetime of leadership and service. Our mission is to provide an education that empowers students to lead with integrity, compassion, and excellence."
    },
    {
      name: "Mrs. Meena Kumari",
      role: "Principal",
      image: "https://i.pravatar.cc/300?u=principal",
      msg: "Our goal is to foster an environment where every child feels valued and inspired to explore their unique talents. We focus on academic rigor balanced with character building."
    }
  ];

  return (
    <div className="bg-white pb-20 text-slate-800">
      <SEO 
        title="Our Leadership Team" 
        description="Meet the visionary leadership team at Gurukul Vidyapeeth Hajipur. Learn about our Chairman's vision and our Principal's commitment."
        keywords="School Leadership, Gurukul Chairman, School Principal, Hajipur School Management"
      />
      <PageHero title="Our Leadership" breadcrumb=" > About Us > Leadership" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-24">
           {leaders.map((l, i) => (
             <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-start`}>
                <div className="w-full md:w-2/5">
                   <div className="relative">
                      <div className="absolute -inset-4 bg-red-100 rounded-[50px] -rotate-3 group-hover:rotate-0 transition-transform"></div>
                      <img src={l.image} alt={l.name} className="relative z-10 rounded-[40px] shadow-2xl w-full grayscale hover:grayscale-0 transition-all duration-700 h-[450px] object-cover border-4 border-white" loading="lazy" />
                      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                         <button className="bg-white p-3 rounded-2xl shadow-xl text-red-700 hover:bg-red-700 hover:text-white transition-colors"><Globe size={20} /></button>
                         <button className="bg-white p-3 rounded-2xl shadow-xl text-red-700 hover:bg-red-700 hover:text-white transition-colors"><Mail size={20} /></button>
                      </div>
                   </div>
                </div>
                <div className="w-full md:w-3/5 py-4">
                   <div className="bg-red-600 w-12 h-1 mb-6"></div>
                   <h3 className="text-4xl font-black text-black mb-2 uppercase tracking-tighter">{l.name}</h3>
                   <p className="text-red-700 font-black uppercase tracking-[0.3em] text-xs mb-10">{l.role}, Gurukul Vidyapeeth</p>
                   
                   <div className="relative">
                      <Quote className="absolute -top-10 -left-10 text-red-50" size={80} />
                      <p className="relative z-10 text-xl text-slate-600 leading-relaxed font-serif italic">
                        "{l.msg}"
                      </p>
                   </div>
                </div>
             </div>
           ))}

           <section className="bg-zinc-900 p-16 rounded-[60px] text-white relative overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[120px]"></div>
              <h3 className="text-3xl font-black mb-8 border-b border-white/10 pb-4 uppercase tracking-tighter">Our Shared <span className="text-red-600">Commitment</span></h3>
              <p className="text-zinc-400 text-lg leading-relaxed font-medium mb-12">
                The management team at Gurukul Vidyapeeth works in perfect harmony to ensure that the school's vision is translated into daily practice. We are united by our passion for child-centric education and our desire to build a better future for Hajipur and the nation.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                 <div className="flex flex-col gap-2">
                    <span className="text-3xl font-black text-white">100%</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Dedication</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-3xl font-black text-white">24/7</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Care</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-3xl font-black text-white">Elite</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Standards</span>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-3xl font-black text-white">Global</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Vision</span>
                 </div>
              </div>
           </section>
        </main>
      </div>
    </div>
  );
};

export default OurLeadership;
