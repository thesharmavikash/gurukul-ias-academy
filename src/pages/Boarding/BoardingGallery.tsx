import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import p10 from '../../assets/pic10.jpg';
import p13 from '../../assets/pic13.jpg';
import p14 from '../../assets/pic14.jpg';
import p15 from '../../assets/pic15.jpg';

const BoardingGallery: React.FC = () => {
  const sidebarLinks = [
    { name: "Best Boarding School", path: "/boarding/best-boarding-hajipur" },
    { name: "Boarding Schedule", path: "/boarding/schedule" },
    { name: "Boarding Gallery", path: "/boarding/gallery" }
  ];

  const images = [p10, p13, p14, p15];

  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Boarding Gallery" 
        description="Glimpses of residential life at Gurukul Vidyapeeth Hajipur. Our hostel facilities, common rooms, and student interactions."
        keywords="Boarding Photos, School Hostel, Gurukul Residential, Hajipur Boarding Life"
      />
      <PageHero title="Boarding Gallery" breadcrumb=" > Boarding > Gallery" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        <main className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-red-700 border-l-4 border-red-700 pl-4 mb-8 text-black uppercase tracking-tighter">Residential Life <span className="text-red-600">Glimpses</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {images.map((img, i) => (
               <div key={i} className="h-64 rounded-3xl overflow-hidden shadow-xl border-4 border-zinc-50 group">
                  <img src={img} alt={`Boarding ${i+1}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" loading="lazy" />
               </div>
             ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BoardingGallery;
