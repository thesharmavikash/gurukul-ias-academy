import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 flex items-center justify-center px-6 py-24 transition-colors">
      <SEO 
        title="404 - Page Not Found | Gurukul IAS Academy" 
        description="The page you are looking for does not exist. Return to the home page or explore our UPSC courses."
      />
      
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-3xl mb-8">
            <Search size={48} strokeWidth={1.5} />
          </div>
          
          <h1 className="text-8xl md:text-9xl font-black text-red-900/10 dark:text-red-100/5 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 select-none">
            404
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-black text-red-900 dark:text-white mb-6">Lost in the Syllabus?</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed font-medium">
            The page you're looking for has been retired or moved. Even the best IAS aspirants lose their way sometimes!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/" 
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-red-200 dark:shadow-red-900/20 flex items-center justify-center gap-3 active:scale-95"
            >
              <Home size={20} /> Back to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="w-full sm:w-auto bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              <ArrowLeft size={20} /> Go Back
            </button>
          </div>
          
          <div className="mt-20 border-t border-slate-100 dark:border-zinc-800 pt-12">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['GS Foundation', 'Optional Subjects', 'Daily Quiz', 'Resource Library'].map((link) => (
                <Link 
                  key={link} 
                  to={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="text-red-600 font-bold hover:text-red-800 dark:hover:text-red-400 transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
