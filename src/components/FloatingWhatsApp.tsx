import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp: React.FC = () => {
  const whatsappNumber = "+919931602179";
  const message = "Hi, I'm interested in the UPSC batches at Gurukul IAS Academy. Can I get more details?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="pointer-events-auto mb-4"
        >
          <div className="bg-white dark:bg-zinc-800 px-4 py-2 rounded-2xl shadow-xl border border-slate-100 dark:border-zinc-700 text-sm font-bold text-slate-600 dark:text-slate-300 relative">
            Ask any question!
            <div className="absolute top-full right-6 w-3 h-3 bg-white dark:bg-zinc-800 border-r border-b border-slate-100 dark:border-zinc-700 rotate-45 -translate-y-1.5"></div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-auto w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="currentColor" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
