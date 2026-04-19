import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Maximize2, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all available images
import p1 from '../../assets/pic1.jpg';
import p2 from '../../assets/pic2.jpg';
import p3 from '../../assets/pic3.jpg';
import p4 from '../../assets/pic4.jpg';
import p5 from '../../assets/pic5.jpg';
import p6 from '../../assets/pic6.jpg';
import p7 from '../../assets/pic7.jpg';
import p8 from '../../assets/pic8.jpg';
import p9 from '../../assets/pic9.jpg';
import p10 from '../../assets/pic10.jpg';
import p11 from '../../assets/pic11.jpg';
import p12 from '../../assets/pic12.jpg';

const Gallery: React.FC = () => {
  const images = [
    { src: p1, title: "Classroom Interaction" },
    { src: p2, title: "Campus Architecture" },
    { src: p3, title: "Library Reading Room" },
    { src: p4, title: "Sports Activity" },
    { src: p5, title: "Science Lab" },
    { src: p6, title: "Annual Function" },
    { src: p7, title: "Art & Craft" },
    { src: p8, title: "Student Seminar" },
    { src: p9, title: "Computer Lab" },
    { src: p10, title: "Boarding Life" },
    { src: p11, title: "Morning Assembly" },
    { src: p12, title: "Graduation Day" }
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <div className="bg-white pb-32">
      <SEO 
        title="School Photo Gallery" 
        description="A visual journey through Gurukul Vidyapeeth Hajipur. Glimpses of our campus, activities, events, and student life."
        keywords="Gurukul Gallery, School Photos, Hajipur School Events, Student Life Photos"
      />
      <PageHero title="Gallery" breadcrumb=" > Gallery" />
      
      <div className="max-w-[1600px] mx-auto px-6 mt-20">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer border-2 border-zinc-50 shadow-lg"
                onClick={() => setSelectedImg(img.src)}
              >
                 <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" loading="lazy" />
                 <div className="absolute inset-0 bg-red-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
                    <Maximize2 size={32} className="mb-2" />
                    <span className="font-black uppercase tracking-widest text-xs">{img.title}</span>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
             <button className="absolute top-10 right-10 text-white hover:text-red-500 transition-colors">
                <X size={48} />
             </button>
             <motion.img 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                src={selectedImg} 
                className="max-w-full max-h-full rounded-3xl shadow-2xl border-4 border-white/10" 
             />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 mt-32 text-center">
         <h2 className="text-3xl font-black text-black mb-6 uppercase tracking-tighter italic">"Capturing Moments, <span className="text-red-600 underline decoration-zinc-100">Preserving Legacies</span>."</h2>
         <p className="text-slate-400 font-medium max-w-2xl mx-auto uppercase tracking-widest text-xs">Follow us on Instagram for daily updates from the campus.</p>
      </div>
    </div>
  );
};

export default Gallery;
