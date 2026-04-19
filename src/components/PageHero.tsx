import React from 'react';
import bgImg from '../assets/pic3.jpg';

interface PageHeroProps {
  title: string;
  breadcrumb: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, breadcrumb }) => {
  return (
    <section className="w-full h-[250px] md:h-[400px] relative overflow-hidden">
      <img 
        src={bgImg} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 35%" }} 
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 text-white">
        <div className="bg-red-700/60 backdrop-blur-md px-8 py-4 md:px-16 md:py-8 rounded-2xl text-center border border-white/20 shadow-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight uppercase">
            {title}
          </h1>
        </div>
        <div className="mt-6 text-red-200 text-sm md:text-base font-medium tracking-wide bg-black/40 px-4 py-1 rounded-full border border-red-900/30 uppercase tracking-widest">
          Home {breadcrumb}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
