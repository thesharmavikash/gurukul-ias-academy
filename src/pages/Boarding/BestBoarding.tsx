import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import { Home, ShieldCheck, Soup, Coffee, HeartPulse, Sparkles } from 'lucide-react';
import boardingImg from '../../assets/pic13.jpg';

const BestBoardingSchool: React.FC = () => {
  const sidebarLinks = [
    { name: "Best Boarding School", path: "/boarding/best-boarding-hajipur" },
    { name: "Boarding Schedule", path: "/boarding/schedule" },
    { name: "Boarding Gallery", path: "/boarding/gallery" }
  ];

  const highlights = [
    { title: "Safe & Secure", desc: "24/7 round-the-clock security and CCTV monitoring.", icon: ShieldCheck },
    { title: "Nutritious Meals", desc: "Balanced and hygienic vegetarian and non-vegetarian food.", icon: Soup },
    { title: "Pastoral Care", desc: "Dedicated wardens and mentors for every student.", icon: HeartPulse },
    { title: "Study Halls", desc: "Supervised evening prep hours for academic excellence.", icon: Sparkles },
    { title: "Recreation", desc: "Access to sports and indoor games during weekends.", icon: Coffee },
    { title: "Home-like Feel", desc: "Comfortable air-conditioned rooms with modern amenities.", icon: Home }
  ];

  return (
    <div className="bg-white pb-20 text-slate-800">
      <SEO 
        title="Best Boarding School in Hajipur" 
        description="Experience the finest boarding facilities at Gurukul Vidyapeeth Hajipur. A safe, nurturing, and discipline-oriented residential life."
        keywords="Boarding School Hajipur, Best Hostel Facility, Residential School Bihar, Gurukul Boarding"
      />
      <PageHero title="Best Boarding School" breadcrumb=" > Boarding > Best Boarding" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-16">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-red-700 border-l-8 border-red-700 pl-6 mb-8 uppercase tracking-tighter">
              A Second <span className="text-black">Home</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium text-justify">
              Boarding life at Gurukul Vidyapeeth is designed to foster independence, discipline, and community spirit. Our residential facilities go beyond just providing a place to stay; we provide an ecosystem where students learn to live together, share experiences, and support each other's growth.
            </p>
          </section>

          <div className="rounded-[60px] overflow-hidden shadow-3xl border-8 border-zinc-50 relative group">
             <img src={boardingImg} alt="Boarding Facility" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
             <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
             {highlights.map((h, i) => (
               <div key={i} className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 hover:border-red-600 transition-all duration-500 group shadow-lg shadow-slate-100/50">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm">
                     <h.icon size={28} />
                  </div>
                  <h4 className="text-xl font-black text-black mb-3 uppercase tracking-tighter">{h.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{h.desc}</p>
               </div>
             ))}
          </div>

          <section className="bg-zinc-950 p-12 rounded-[50px] text-white">
             <h3 className="text-2xl font-black mb-8 border-b border-white/10 pb-4 uppercase tracking-tighter">Weekend Activities</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                   <h5 className="font-bold text-red-500 mb-2 tracking-wide uppercase text-xs">Saturday Special</h5>
                   <p className="text-sm text-zinc-400">Inter-house competitions, movie screenings, and hobby club activities like photography and coding.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                   <h5 className="font-bold text-red-500 mb-2 tracking-wide uppercase text-xs">Sunday Excursions</h5>
                   <p className="text-sm text-zinc-400">Organized local visits, market trips, and community service projects to keep students engaged and socially aware.</p>
                </div>
             </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default BestBoardingSchool;
