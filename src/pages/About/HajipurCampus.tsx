import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import campusImg from '../../assets/pic2.jpg';
import labsImg from '../../assets/pic5.jpg';

const HajipurCampus: React.FC = () => {
  const sidebarLinks = [
    { name: 'The School', path: '/mission' },
    { name: 'Mission Vision', path: '/vision' },
    { name: 'Fact Sheet', path: '/fact-sheet' },
    { name: 'Hajipur Campus', path: '/hajipur-campus' },
    { name: 'Leadership', path: '/leadership' }
  ];

  const facilities = [
    { title: "Smart Classrooms", desc: "Equipped with interactive whiteboards and digital learning tools to enhance the learning experience." },
    { title: "Science Laboratories", desc: "State-of-the-art Physics, Chemistry, and Biology labs designed for practical experimentation and research." },
    { title: "Computer Hub", desc: "High-speed internet enabled computer labs with the latest hardware and software for technical literacy." },
    { title: "Library & Resource Center", desc: "A vast collection of books, journals, and digital resources to foster a love for reading and independent study." },
    { title: "Sports Complex", desc: "Facilities for football, basketball, cricket, and indoor sports, promoting physical fitness and teamwork." },
    { title: "Performing Arts Studio", desc: "Dedicated spaces for music, dance, and drama to encourage creative expression and talent." }
  ];

  return (
    <div className="bg-white pb-20 text-slate-800">
      <SEO 
        title="Hajipur Campus Facilities" 
        description="Explore the modern campus and world-class facilities at Gurukul Vidyapeeth Hajipur. From smart labs to sports complexes."
        keywords="School Campus, Hajipur School Facilities, Smart Classrooms, Science Labs"
      />
      <PageHero title="Hajipur Campus" breadcrumb=" > About Us > Hajipur Campus" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-16">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-red-700 border-l-8 border-red-700 pl-6 mb-8 uppercase tracking-tighter">
              World-Class <span className="text-black">Infrastructure</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium text-justify">
              Situated in the heart of Hajipur, our campus is a sprawling green oasis designed to provide a safe, stimulating, and inspiring environment for students. We believe that physical surroundings play a crucial role in the learning process, which is why every corner of our campus is built with purpose.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <img src={campusImg} alt="Campus Aerial View" className="rounded-[40px] shadow-2xl h-80 w-full object-cover border-8 border-zinc-50" loading="lazy" />
             <img src={labsImg} alt="Science Lab" className="rounded-[40px] shadow-2xl h-80 w-full object-cover mt-8 border-8 border-zinc-50" loading="lazy" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
             {facilities.map((f, i) => (
               <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 bg-red-100 rounded-2xl flex-shrink-0 flex items-center justify-center text-red-700 font-black group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                     0{i+1}
                  </div>
                  <div>
                     <h4 className="text-xl font-bold text-black mb-2 uppercase tracking-wide">{f.title}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed font-medium">{f.desc}</p>
                  </div>
               </div>
             ))}
          </div>

          <div className="bg-zinc-950 p-12 rounded-[50px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-3xl">
             <div className="max-w-md">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter">Campus Safety</h3>
                <p className="text-zinc-400 font-medium">24/7 CCTV surveillance, professional security personnel, and a fully equipped medical infirmary ensure a secure environment for all students.</p>
             </div>
             <button className="bg-red-700 hover:bg-red-800 text-white px-10 py-5 rounded-2xl font-black uppercase text-sm tracking-widest shadow-xl shadow-red-900/40 transition-all active:scale-95">
                Schedule a Visit
             </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HajipurCampus;
