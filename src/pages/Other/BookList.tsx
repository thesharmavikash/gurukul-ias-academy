import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Download, BookMarked } from 'lucide-react';

const BookList: React.FC = () => {
  const books = [
    { grade: "Nursery", list: ["Alphabet Magic", "Fun with Numbers", "Art & Craft Level 1"] },
    { grade: "Grade 1", list: ["Marigold (English)", "Rimjhim (Hindi)", "Math-Magic", "Environmental Studies 1"] },
    { grade: "Grade 5", list: ["Honeysuckle", "The Earth Our Habitat", "Mathematics 5", "Science Around Us"] },
    { grade: "Grade 10", list: ["First Flight", "Footprints Without Feet", "Mathematics (NCERT)", "Science (NCERT)", "Social Science (4 Parts)"] },
    { grade: "Grade 12 (Sci)", list: ["Physics Part I & II", "Chemistry Part I & II", "Mathematics / Biology", "English Core"] }
  ];

  return (
    <div className="bg-white pb-32 text-slate-800">
      <SEO 
        title="Prescribed Book List 2024-25" 
        description="View and download the complete list of prescribed textbooks for the academic session 2024-25 at Gurukul Vidyapeeth Hajipur."
        keywords="School Book List, Gurukul Textbooks, CBSE Books Hajipur, NCERT Books"
      />
      <PageHero title="Book List" breadcrumb=" > Resources > Book List" />
      
      <div className="max-w-7xl mx-auto px-6 mt-20">
         <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-black text-black mb-6 uppercase tracking-tighter">Academic <span className="text-red-600">Resources</span></h2>
            <p className="text-slate-500 font-medium leading-relaxed">Please ensure all textbooks are purchased as per the latest session guidelines to ensure consistency in the classroom.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((b, i) => (
              <div key={i} className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100 shadow-xl shadow-zinc-100/50 hover:bg-white hover:border-red-600 transition-all duration-500 group">
                 <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-700 group-hover:text-white transition-colors">
                       <BookMarked size={24} />
                    </div>
                    <span className="bg-black text-white px-4 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest">{b.grade}</span>
                 </div>
                 <h4 className="text-xl font-bold mb-6 text-black uppercase tracking-tight">Prescribed Books</h4>
                 <ul className="space-y-4 mb-10">
                    {b.list.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                         <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                         {item}
                      </li>
                    ))}
                 </ul>
                 <button className="w-full py-4 border-2 border-zinc-200 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase tracking-widest text-slate-400 group-hover:bg-red-700 group-hover:border-red-700 group-hover:text-white transition-all">
                    <Download size={16} /> PDF Download
                 </button>
              </div>
            ))}
         </div>

         <div className="mt-20 bg-black p-12 rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-3xl border-b-8 border-red-700">
             <div className="max-w-xl">
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Uniform & Stationery</h3>
                <p className="text-zinc-400 font-medium">Details about the school uniform, stationery requirements, and approved vendors can be found in our comprehensive Parent Handbook.</p>
             </div>
             <button className="bg-white text-black px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all active:scale-95 shadow-xl">
                Parent Handbook
             </button>
         </div>
      </div>
    </div>
  );
};

export default BookList;
