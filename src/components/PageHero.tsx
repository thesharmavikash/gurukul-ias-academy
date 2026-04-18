import React from 'react';
import bgImg from '../assets/pic3.jpg';

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, breadcrumb }) => {
  return (
    <section className="w-full h-[300px] md:h-[450px] relative overflow-hidden pt-[90px]">
      <img 
        src={bgImg} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        style={{ objectPosition: "center 35%" }} 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 drop-shadow-2xl">
            {title}
          </h1>
          <div className="inline-flex items-center gap-2 text-blue-100 text-sm md:text-base font-bold tracking-widest bg-blue-600/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
            <span className="opacity-60">Home</span> {breadcrumb}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
