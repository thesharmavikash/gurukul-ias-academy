import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "The mentorship at Gurukul IAS is unparalleled. The faculty helped me structure my answers and improve my ethics score significantly.",
    author: "Aditya Singh",
    role: "AIR 42, UPSC CSE 2023"
  },
  {
    text: "Daily Current Affairs and Editorial analysis provided by the institute were my primary source for Prelims and Mains preparation.",
    author: "Priya Sharma",
    role: "Selected, BPSC 68th"
  },
  {
    text: "Comprehensive GS Foundation course covered every topic in depth. The test series feedback was key to my success.",
    author: "Vikram Kumar",
    role: "Aspirant"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Success Stories</h2>
          <h3 className="text-3xl md:text-5xl font-black text-blue-900 mb-6 uppercase tracking-tighter">
            Words from our <span className="text-blue-600">Toppers</span>
          </h3>
          <div className="flex justify-center gap-1">
             {[1,2,3,4,5].map(i => <Star key={i} className="text-blue-600 fill-blue-600" size={16} />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[50px] shadow-2xl shadow-blue-900/5 border border-slate-100 hover:border-blue-200 transition-all duration-500 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-500">
                <Quote className="text-blue-600 group-hover:text-white transition-colors duration-500" size={32} />
              </div>
              <p className="text-slate-600 text-lg leading-relaxed italic mb-10 font-medium">"{t.text}"</p>
              <div>
                <h4 className="text-blue-900 font-black text-xl mb-1">{t.author}</h4>
                <p className="text-blue-500 text-xs font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
