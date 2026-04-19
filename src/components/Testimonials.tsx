import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Gurukul Vidyapeeth has been a second home for my child. The focus on holistic development is truly commendable.",
    author: "Mrs. Anjali Sharma",
    role: "Parent"
  },
  {
    text: "The integrated curriculum and modern labs provided me with a strong foundation for my higher studies.",
    author: "Rahul Kumar",
    role: "Alumni"
  },
  {
    text: "I am impressed by the personal attention each student receives from the dedicated faculty members.",
    author: "Mr. Subhash Prasad",
    role: "Parent"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-700/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-700/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">Voices of <span className="text-red-600">Gurukul</span></h2>
          <p className="text-gray-500 font-medium uppercase tracking-widest text-sm">What our community says about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 p-10 rounded-[40px] border border-zinc-800 hover:border-red-700 transition-all duration-500 group relative"
            >
              <Quote className="text-red-600 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <p className="text-zinc-300 text-lg leading-relaxed italic mb-8">"{t.text}"</p>
              <div>
                <h4 className="text-white font-bold text-lg">{t.author}</h4>
                <p className="text-red-500 text-sm font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
