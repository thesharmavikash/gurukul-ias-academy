import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppWidget: React.FC = () => {
  const phoneNumber = "919931602179";
  const message = "Hello, I am interested in admissions at Gurukul Vidyapeeth for the session 2024-25.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[200] bg-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/40 border-4 border-white flex items-center justify-center group"
    >
      <div className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with Admissions
      </div>
      <MessageCircle size={32} />
      <span className="absolute top-0 right-0 w-4 h-4 bg-accent rounded-full border-2 border-white animate-ping"></span>
    </motion.a>
  );
};

export default WhatsAppWidget;
