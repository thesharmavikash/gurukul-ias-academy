import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, UserPlus } from 'lucide-react';

const StickyMobileCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-slate-100 dark:border-zinc-800 px-4 py-3 flex gap-3 shadow-[0_-8px_30px_rgb(0,0,0,0.04)]">
      <a 
        href="tel:+919931602179"
        className="flex-1 bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-200 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-all"
      >
        <Phone size={18} /> Call Us
      </a>
      <Link 
        to="/admission-form"
        className="flex-[1.5] bg-red-600 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 active:scale-95 transition-all"
      >
        <UserPlus size={18} /> Enroll Now
      </Link>
    </div>
  );
};

export default StickyMobileCTA;
