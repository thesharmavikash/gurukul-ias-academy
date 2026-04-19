import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import campusVideo from '../assets/campus-CW9By398.MP4';
import admissionPic from '../assets/admission-DTCmaV1f.jpg';
import studentsPic from '../assets/stude-BU_RUMug.png';
import sirPic from '../assets/sir-CGU2M9k_.jpg';
import { GraduationCap, BookOpen, Users, ArrowRight, Star, Award, ShieldCheck, MapPin } from 'lucide-react';
import NoticeBoard from '../components/NoticeBoard';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Gurukul Vidyapeeth Hajipur",
    "url": "https://gurukulvidyapeethhajipur.org",
    "logo": "https://gurukulvidyapeethhajipur.org/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rampur Nausahan, Nawada Chowk, Near Jadhua",
      "addressLocality": "Hajipur",
      "addressRegion": "Bihar",
      "postalCode": "844102",
      "addressCountry": "IN"
    },
    "telephone": "+91-9931602179"
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col w-full bg-slate-50 text-slate-900 overflow-hidden">
      <SEO 
        title="Welcome to Gurukul Vidyapeeth | Modern Education in Hajipur" 
        description="Experience the future of education at Gurukul Vidyapeeth Hajipur. Holistic learning, modern infrastructure, and character development."
        keywords="Gurukul Vidyapeeth, Best School Hajipur, Modern Education, CBSE School Bihar"
        schemaMarkup={schoolSchema}
      />
      
      {/* Immersive Hero Section */}
      <section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-105">
          <source src={campusVideo} type="video/mp4" />
        </video>
        
        {/* Modern Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8 shadow-2xl">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              <span className="text-white text-xs font-black uppercase tracking-[0.3em]">Excellence Defined</span>
            </div>
            
            <h1 className="text-5xl md:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">
              TRADITION <br /> <span className="text-accent underline decoration-white/20 underline-offset-[1rem]">MEETS</span> FUTURE
            </h1>
            
            <p className="text-xl md:text-3xl text-white/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-xl">
              Empowering young minds in Hajipur with a curriculum built for the 21st century.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/admission-process" className="bg-accent hover:bg-rose-700 text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm shadow-[0_20px_50px_rgba(225,29,72,0.4)] transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3">
                Secure Admission <ArrowRight size={20} />
              </Link>
              <Link to="/mission" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all hover:-translate-y-1 active:scale-95">
                Explore Campus
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-accent rounded-full animate-bounce"></div>
           </div>
        </div>
      </section>

      {/* Modern Bento Grid Features */}
      <section className="py-32 px-6 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-primary text-sm font-black uppercase tracking-[0.4em] mb-6">Our Foundation</h2>
             <h3 className="text-4xl md:text-6xl font-black text-primary leading-tight">
               Built for <span className="text-accent italic">Growth</span>. <br /> Designed for <span className="text-accent italic">Leaders</span>.
             </h3>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Bento Cell 1: Large Admission */}
            <motion.div variants={itemVariants} className="md:col-span-2 bento-card group">
              <div className="flex flex-col md:flex-row h-full">
                <div className="p-12 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:rotate-6 transition-transform">
                      <GraduationCap size={32} />
                    </div>
                    <h4 className="text-3xl font-black text-primary mb-4 uppercase tracking-tighter">Academic Pathways</h4>
                    <p className="text-slate-500 font-medium leading-relaxed">From foundational years to higher secondary excellence, we offer a specialized curriculum tailored to individual potential.</p>
                  </div>
                  <Link to="/admission-process" className="mt-10 flex items-center gap-3 font-black text-accent uppercase tracking-widest text-xs hover:gap-5 transition-all">
                    Enrolment Process <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                  <img src={admissionPic} alt="Admissions" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>

            {/* Bento Cell 2: Curriculum */}
            <motion.div variants={itemVariants} className="bento-card p-12 bg-primary text-white relative group border-0">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                    <BookOpen size={32} />
                  </div>
                  <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Curriculum</h4>
                  <p className="text-slate-400 font-medium leading-relaxed">Integrated IBS model focusing on Human & Artificial Intelligence.</p>
                </div>
                <Link to="/curriculum" className="flex items-center gap-3 font-black text-white uppercase tracking-widest text-xs hover:gap-5 transition-all">
                  View Syllabus <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Bento Cell 3: Residential */}
            <motion.div variants={itemVariants} className="bento-card p-12 group hover:bg-slate-900 hover:text-white transition-colors">
              <div className="w-14 h-14 bg-slate-100 group-hover:bg-accent/20 rounded-2xl flex items-center justify-center text-primary group-hover:text-accent mb-8">
                <Users size={32} />
              </div>
              <h4 className="text-3xl font-black mb-4 uppercase tracking-tighter">Boarding Life</h4>
              <p className="text-slate-500 group-hover:text-slate-400 font-medium leading-relaxed mb-10">A safe, discipline-oriented residential ecosystem that feels like home.</p>
              <Link to="/boarding" className="flex items-center gap-3 font-black text-accent uppercase tracking-widest text-xs hover:gap-5 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Bento Cell 4: Success Stats */}
            <motion.div variants={itemVariants} className="md:col-span-2 bento-card p-12 bg-white flex flex-col md:flex-row items-center justify-around gap-12 text-center group">
               <div className="space-y-2">
                  <h5 className="text-5xl font-black text-primary group-hover:text-accent transition-colors">20+</h5>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Years Legacy</p>
               </div>
               <div className="w-px h-16 bg-slate-100 hidden md:block"></div>
               <div className="space-y-2">
                  <h5 className="text-5xl font-black text-primary group-hover:text-accent transition-colors">100%</h5>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Board Result</p>
               </div>
               <div className="w-px h-16 bg-slate-100 hidden md:block"></div>
               <div className="space-y-2">
                  <h5 className="text-5xl font-black text-primary group-hover:text-accent transition-colors">5000+</h5>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Global Alumni</p>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Director's Profile - High End Design */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-slate-50 rounded-full -translate-x-1/2 translate-y-1/2 border border-slate-100"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-32 items-center relative z-10">
          <div className="order-2 md:order-1 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="absolute -inset-10 bg-slate-100 rounded-[5rem] -rotate-6 z-0"></div>
              <img src={sirPic} alt="Director" className="relative z-10 rounded-[4rem] shadow-[0_50px_100px_rgba(15,23,42,0.2)] w-full grayscale contrast-125 border-8 border-white" />
              <div className="absolute -bottom-12 -right-12 z-20 bg-accent text-white p-12 rounded-[3rem] shadow-3xl transform rotate-6 border-8 border-white group">
                 <Award size={48} className="mb-4" />
                 <p className="font-black text-xl leading-none">Best School</p>
                 <p className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-70">Region Award 2023</p>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-8">Executive Note</h2>
            <h3 className="text-4xl md:text-[4rem] font-black text-primary leading-[1] mb-12 italic">
              "Building <span className="text-accent">Character</span> is our <span className="underline decoration-slate-200 underline-offset-[1rem]">Curriculum</span>."
            </h3>
            <div className="space-y-8 text-slate-500 text-lg leading-relaxed font-medium">
               <p className="text-justify border-l-4 border-accent pl-10 py-2">
                 At Gurukul Vidyapeeth, we are driven by the belief that every child is a unique universe of potential. Our role is not to fill a vessel, but to ignite a fire.
               </p>
               <p className="text-justify border-l-4 border-slate-100 pl-10 py-2">
                 We've engineered an environment that blends academic rigor with the emotional intelligence required to lead in a globalized world.
               </p>
            </div>
            <div className="mt-16 pt-10 border-t border-slate-100">
               <p className="font-black text-primary text-2xl tracking-tighter">DR. SUBHASH SINGH</p>
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mt-1">Chairman & Visionary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy & Values */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight uppercase tracking-tighter">Campus of <br /> the <span className="text-accent underline decoration-white/20 underline-offset-[1rem]">Future</span>.</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                     <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <ShieldCheck className="text-accent mb-6" size={32} />
                        <h5 className="font-black text-xl mb-4 tracking-tight">Security First</h5>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">24/7 advanced surveillance and professional security personnel.</p>
                     </div>
                     <div className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <Star className="text-accent mb-6" size={32} />
                        <h5 className="font-black text-xl mb-4 tracking-tight">Expert Faculty</h5>
                        <p className="text-sm text-slate-400 leading-relaxed font-medium">Mentors with decades of experience in international pedagogy.</p>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="absolute -inset-10 bg-accent/20 rounded-full blur-[100px]"></div>
                  <img src={studentsPic} alt="Infrastructure" className="relative z-10 rounded-[4rem] shadow-3xl border-8 border-white/5 grayscale hover:grayscale-0 transition-all duration-1000" />
               </div>
            </div>
         </div>
      </section>

      <Testimonials />

      {/* Final Call to Action */}
      <section className="py-32 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-accent font-black text-xs uppercase tracking-[0.4em] mb-10">
             <MapPin size={16} /> Visit Us in Hajipur
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-primary mb-10 leading-[1] tracking-tighter">Shape their <br /> destiny <span className="text-accent italic">today</span>.</h2>
          <p className="text-xl text-slate-500 mb-16 font-medium max-w-2xl mx-auto">Registration for the 2024-25 session is approaching capacity. Secure your child's future at Gurukul.</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <Link to="/contact" className="bg-primary text-white px-16 py-8 rounded-[2.5rem] font-black text-xl flex items-center justify-center shadow-3xl shadow-primary/20 hover:bg-slate-800 transition-all active:scale-95 group">
              Get an Invite <ArrowRight size={24} className="ml-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
