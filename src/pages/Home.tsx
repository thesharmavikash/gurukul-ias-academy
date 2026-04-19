import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import campusVideo from '../assets/campus-CW9By398.MP4';
import studentsPic from '../assets/stude-BU_RUMug.png';
import sirPic from '../assets/sir-CGU2M9k_.jpg';
import { BookOpen, Users, ChevronRight, Phone, Award, Star, Download, PlayCircle, Calendar, Zap, Target, Shield, ArrowRight } from 'lucide-react';
import NoticeBoard from '../components/NoticeBoard';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';
import CourseComparison from '../components/CourseComparison';

const Home: React.FC = () => {
  const { theme } = useTheme();
  
  const schoolSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Gurukul IAS Academy",
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

  const courses = [
    {
      title: "GS Foundation Batch",
      desc: "Comprehensive coverage of Prelims & Mains syllabus with integrated test series and answer writing.",
      duration: "12 Months",
      type: "Online / Offline",
      icon: Target
    },
    {
      title: "Optional Subjects",
      desc: "Specialized coaching for History, Geography, PSIR, and Sociology with expert faculty.",
      duration: "5 Months",
      type: "Offline Only",
      icon: BookOpen
    },
    {
      title: "Prelims Test Series",
      desc: "50+ Tests covering GS and CSAT with detailed AI-powered performance analysis.",
      duration: "Till Prelims",
      type: "Online",
      icon: Zap
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white dark:bg-black text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <SEO 
        title="Best IAS Coaching in Hajipur | UPSC CSE Preparation" 
        description="Gurukul IAS Academy Hajipur offers top-tier coaching for UPSC Civil Services Examination. Join our GS Foundation and Optional batches."
        keywords="IAS Coaching Hajipur, UPSC Preparation Bihar, Gurukul IAS, Best UPSC Institute, Civil Services Coaching"
        schemaMarkup={schoolSchema}
      />
      
      <NoticeBoard />

      {/* Hero Section */}
      <section className="relative w-full h-[650px] md:h-[900px] overflow-hidden flex items-center pt-[90px]">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
            <source src={campusVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-red-950/95 via-red-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-black"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-1 w-12 bg-red-500 rounded-full"></span>
              <span className="text-red-400 font-black uppercase tracking-[0.4em] text-xs">Empowering Future Bureaucrats</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
              Your Path to <br />
              <span className="text-red-400 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-200">LBSNAA</span> Begins.
            </h1>
            
            <p className="text-xl md:text-2xl text-red-50/70 mb-12 font-medium leading-relaxed max-w-2xl">
              India's most personalized UPSC ecosystem. Where traditional values meet modern pedagogy for guaranteed success.
            </p>
            
            <div className="flex flex-wrap gap-5">
              <Link to="/admission-form" className="bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-red-600/40 flex items-center gap-3 active:scale-95 group">
                Apply for New Batch <ChevronRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-3 group">
                <PlayCircle size={24} className="text-red-400 group-hover:scale-110 transition-transform" /> Demo Class
              </button>
            </div>
            
            <div className="mt-20 flex gap-12 items-center">
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-14 h-14 rounded-2xl border-4 border-red-900/50 bg-slate-800 overflow-hidden shadow-2xl transform rotate-6 first:rotate-0">
                      <img src={`https://i.pravatar.cc/150?u=ias${i}`} alt="Student" className="w-full h-full object-cover" />
                   </div>
                 ))}
                 <div className="w-14 h-14 rounded-2xl border-4 border-red-900/50 bg-red-600 flex items-center justify-center text-white font-black text-sm shadow-2xl transform -rotate-3">
                   +500
                 </div>
               </div>
               <div>
                 <div className="flex items-center gap-1 text-yellow-400 mb-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                 </div>
                 <p className="font-black text-white text-lg leading-none mb-1">Top Rated Institute</p>
                 <p className="text-red-100/50 text-xs font-bold uppercase tracking-widest">In Bihar & UP Region</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white dark:bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
             <Shield className="text-red-600" /> ISO CERTIFIED
           </div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
             <Award className="text-red-600" /> EXCELLENCE AWARD
           </div>
           <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
             <Users className="text-red-600" /> EXPERT PANEL
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Selections", value: "250+", icon: Award, color: "text-red-600" },
            { label: "Faculty", value: "40+", icon: Users, color: "text-purple-600" },
            { label: "Resources", value: "10k+", icon: BookOpen, color: "text-emerald-600" },
            { label: "Success Rate", value: "85%", icon: Target, color: "text-orange-600" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-slate-50 dark:bg-zinc-900/50 rounded-[40px] border border-slate-100 dark:border-zinc-800 hover:border-red-200 dark:hover:border-red-900/50 transition-all text-center"
            >
              <div className={`w-14 h-14 mx-auto bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center ${stat.color} mb-6 shadow-xl shadow-slate-200/50 dark:shadow-none group-hover:scale-110 transition-transform`}>
                <stat.icon size={28} />
              </div>
              <h4 className="text-4xl font-black text-slate-900 dark:text-white mb-2">{stat.value}</h4>
              <p className="text-slate-500 dark:text-slate-400 font-black uppercase tracking-widest text-[10px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-red-600 dark:text-red-400 font-black uppercase tracking-[0.3em] text-xs mb-6">World-Class Pedagogy</h2>
              <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1]">
                Master the Syllabus with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Structured Learning</span>
              </h3>
            </div>
            <Link to="/courses/gs-foundation" className="flex items-center gap-3 bg-white dark:bg-zinc-800 px-8 py-4 rounded-2xl font-black text-sm shadow-xl shadow-slate-200/50 dark:shadow-none hover:bg-red-600 hover:text-white dark:hover:bg-red-600 transition-all group">
              View All Batches <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {courses.map((course, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="bg-white dark:bg-zinc-900 p-10 rounded-[48px] border border-slate-100 dark:border-zinc-800 shadow-2xl shadow-slate-200/40 dark:shadow-none flex flex-col h-full group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 dark:bg-red-900/10 rounded-bl-[100px] -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="bg-red-50 dark:bg-red-900/20 w-16 h-16 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-10 group-hover:bg-red-600 group-hover:text-white transition-all duration-500 relative z-10">
                  <course.icon size={32} />
                </div>
                
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6 relative z-10">{course.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-10 flex-grow leading-relaxed font-medium relative z-10">
                  {course.desc}
                </p>
                
                <div className="flex items-center justify-between pt-8 border-t border-slate-50 dark:border-zinc-800 relative z-10">
                  <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 text-xs font-black uppercase tracking-tighter">
                    <Calendar size={14} /> {course.duration}
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {course.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Daily Quiz Promo */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-red-600 dark:bg-red-700 rounded-[60px] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden shadow-3xl shadow-red-600/30">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="lg:w-1/2 text-white relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8">
                <Zap size={14} fill="currentColor" /> Daily Challenge
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">Test Your Knowledge <br /> Every Single Day.</h2>
              <p className="text-xl text-red-50/80 mb-12 max-w-lg leading-relaxed font-medium">
                Participate in our curated Daily UPSC Quiz to stay sharp. Top performers get exclusive mentorship access.
              </p>
              <Link to="/daily-quiz" className="inline-flex bg-white text-red-700 px-12 py-5 rounded-2xl font-black text-lg hover:bg-red-50 transition-all shadow-2xl active:scale-95">
                Take Today's Quiz
              </Link>
           </div>
           <div className="lg:w-1/2 relative z-10 w-full">
              <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] p-8 shadow-2xl rotate-2">
                 <div className="space-y-6">
                    <div className="w-2/3 h-4 bg-white/20 rounded-full"></div>
                    <div className="w-full h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center px-6 text-white font-bold">Option A: Fundamental Rights</div>
                    <div className="w-full h-12 bg-red-400 rounded-2xl flex items-center px-6 text-white font-black shadow-xl ring-4 ring-red-400/30">Option B: Directive Principles</div>
                    <div className="w-full h-12 bg-white/10 border border-white/20 rounded-2xl flex items-center px-6 text-white font-bold">Option C: Preamble</div>
                    <div className="flex justify-between items-center mt-10">
                       <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-white/20"></div>
                          <div className="w-3 h-3 rounded-full bg-white/20"></div>
                       </div>
                       <div className="text-white/60 font-black text-sm uppercase italic">00:45 Left</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Course Comparison */}
      <section className="py-32 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-red-600 dark:text-red-400 font-black uppercase tracking-[0.3em] text-xs mb-6">Compare Plans</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tighter">
              Choose the Right <br /> <span className="text-slate-400">Path for Your Success.</span>
            </h3>
          </div>
          <CourseComparison />
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-40 px-6 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-2/5">
            <div className="relative group">
              <div className="absolute -inset-6 bg-red-600/5 dark:bg-red-400/5 rounded-[60px] -rotate-6 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-700"></div>
              <img src={sirPic} alt="Chairman" className="relative z-10 rounded-[50px] shadow-2xl w-full grayscale contrast-125 brightness-90 dark:brightness-100 group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute -bottom-10 -left-10 z-20 bg-white dark:bg-zinc-800 p-10 rounded-[40px] shadow-3xl border border-slate-50 dark:border-zinc-700 max-w-[280px]">
                 <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-6">
                    <Award size={24} />
                 </div>
                 <p className="font-black text-2xl text-slate-900 dark:text-white mb-1">Dr. Subhash Singh</p>
                 <p className="text-xs text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">Director & Chief Mentor</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-black uppercase tracking-[0.3em] text-xs mb-8">
              <span className="w-8 h-px bg-red-600 dark:bg-red-400"></span> Director's Vision
            </div>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-12 leading-[1.1] tracking-tighter">
              "We Don't Just Prepare You for an Exam, <span className="text-slate-400">We Prepare You for a Life of Service.</span>"
            </h3>
            <div className="space-y-8 text-slate-600 dark:text-slate-400 text-xl leading-relaxed font-medium">
              <p>
                Gurukul IAS is born from a vision to democratize elite UPSC coaching. We believe every aspirant, regardless of their background, deserves access to the finest mentors and most advanced resources.
              </p>
              <p>
                Our pedagogy isn't about rote learning; it's about building the ethical backbone and analytical rigor required to lead one of the world's greatest democracies.
              </p>
            </div>
            <Link to="/about/directors-message" className="mt-16 inline-block bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-12 py-5 rounded-2xl font-black text-lg hover:bg-red-600 dark:hover:bg-red-500 hover:text-white transition-all shadow-2xl active:scale-95">
              Read My Full Message <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact Banner */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-zinc-900/50 border-t border-slate-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-10 leading-[0.95] tracking-tighter">Take the First Step <br /> Towards <span className="text-red-600">Your Goal</span>.</h2>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-16 font-medium max-w-2xl mx-auto">Our counseling centers are open. Talk to an expert and build your personalized roadmap for UPSC CSE 2026-27.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
            <a href="tel:+919931602179" className="flex items-center gap-6 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 px-10 py-8 rounded-[40px] hover:border-red-600 dark:hover:border-red-500 transition-all group shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                <Phone size={30} fill="currentColor" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em] mb-1">Talk to Counselors</p>
                <p className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">+91 9931602179</p>
              </div>
            </a>
            <Link to="/contact" className="bg-red-600 hover:bg-red-500 text-white px-16 py-8 rounded-[40px] font-black text-2xl flex items-center justify-center shadow-3xl shadow-red-600/30 hover:shadow-red-600/50 transition-all active:scale-95">
              Book Free Counseling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
