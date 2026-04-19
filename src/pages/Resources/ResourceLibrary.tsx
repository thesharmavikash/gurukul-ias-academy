import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Download, FileText, Filter, Book, Newspaper, HelpCircle, ChevronRight, Calendar } from 'lucide-react';
import SEO from '../../components/SEO';

const resources = [
  { id: 1, title: "Indian Polity - NCERT Summary", category: "NCERT", type: "PDF", size: "2.4 MB", date: "Oct 2025" },
  { id: 2, title: "Monthly Current Affairs - Sep 2025", category: "Current Affairs", type: "PDF", size: "5.1 MB", date: "Sep 2025" },
  { id: 3, title: "Modern History Timeline", category: "History", type: "PDF", size: "1.8 MB", date: "Aug 2025" },
  { id: 4, title: "UPSC Prelims 2025 Solved Paper", category: "PYQ", type: "PDF", size: "3.2 MB", date: "Jul 2025" },
  { id: 5, title: "Economics Concept Map", category: "NCERT", type: "PDF", size: "1.2 MB", date: "Jun 2025" },
  { id: 6, title: "Ethics Case Studies Vol 1", category: "Ethics", type: "PDF", size: "4.5 MB", date: "May 2025" },
];

const categories = ["All", "NCERT", "Current Affairs", "History", "PYQ", "Ethics"];

const ResourceLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredResources = resources.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || res.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-black transition-colors">
      <SEO 
        title="Resource Library | Free UPSC Study Material" 
        description="Download free NCERT summaries, current affairs, and previous year papers. The ultimate resource library for UPSC CSE preparation."
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-6 tracking-tighter italic">Resource Library</h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">Your one-stop destination for high-quality UPSC preparation materials, curated by Gurukul mentors.</p>
          </div>
          
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white dark:bg-zinc-900 border-none rounded-[24px] py-5 pl-14 pr-6 shadow-xl shadow-slate-200/50 dark:shadow-none focus:ring-2 focus:ring-red-600 dark:text-white font-bold transition-all"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-black transition-all ${activeCategory === cat ? 'bg-red-600 text-white shadow-xl shadow-red-600/20' : 'bg-white dark:bg-zinc-900 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-zinc-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredResources.map((res) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={res.id}
              className="bg-white dark:bg-zinc-900 p-8 rounded-[40px] border border-slate-100 dark:border-zinc-800 hover:border-red-200 dark:hover:border-red-900/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                  <FileText size={28} />
                </div>
                <div className="text-right">
                  <span className="bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-slate-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">{res.category}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-red-600 transition-colors">{res.title}</h3>
              
              <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500 text-xs font-bold mb-10">
                <span className="flex items-center gap-1"><Book size={14} /> {res.type}</span>
                <span className="flex items-center gap-1"><HelpCircle size={14} /> {res.size}</span>
                <span className="flex items-center gap-1"><Calendar size={14} /> {res.date}</span>
              </div>
              
              <button className="w-full flex items-center justify-center gap-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 py-4 rounded-2xl font-black hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all active:scale-[0.98]">
                <Download size={20} /> Download Free
              </button>
            </motion.div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 text-slate-400">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-black text-blue-900 dark:text-white mb-2">No materials found</h3>
            <p className="text-slate-500">Try adjusting your search or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceLibrary;
