import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import campusVideo from '../assets/campus-CW9By398.MP4';
import admissionPic from '../assets/admission-DTCmaV1f.jpg';
import studentsPic from '../assets/stude-BU_RUMug.png';
import sirPic from '../assets/sir-CGU2M9k_.jpg';
import { BookOpen, Users, ChevronRight, Phone, Award, Star, Download, PlayCircle, Calendar } from 'lucide-react';
import NoticeBoard from '../components/NoticeBoard';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';

const Home: React.FC = () => {
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
      desc: "Comprehensive coverage of Prelims & Mains syllabus with integrated test series.",
      duration: "12 Months",
      type: "Online / Offline"
    },
    {
      title: "Optional Subjects",
      desc: "Specialized coaching for History, Geography, PSIR, and Sociology.",
      duration: "5 Months",
      type: "Offline Only"
    },
    {
      title: "Prelims Test Series",
      desc: "50+ Tests covering GS and CSAT with detailed performance analysis.",
      duration: "Till Prelims",
      type: "Online"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      <SEO 
        title="Best IAS Coaching in Hajipur | UPSC CSE Preparation" 
        description="Gurukul IAS Academy Hajipur offers top-tier coaching for UPSC Civil Services Examination. Join our GS Foundation and Optional batches."
        keywords="IAS Coaching Hajipur, UPSC Preparation Bihar, Gurukul IAS, Best UPSC Institute, Civil Services Coaching"
        schemaMarkup={schoolSchema}
      />
      
      <NoticeBoard />

      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[800px] overflow-hidden pt-[90px] flex items-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-50">
            <source src={campusVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="h-px w-12 bg-blue-400"></span>
              <span className="text-blue-400 font-bold uppercase tracking-[0.3em] text-sm">Empowering Civil Servants</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.1]">
              Your Journey to <br />
              <span className="text-blue-400">LBSNAA</span> Starts Here.
            </h1>
            <p className="text-xl md:text-2xl text-blue-50/80 mb-10 font-medium leading-relaxed">
              Experience the most structured and result-oriented UPSC preparation with India's top faculty.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/admission-process" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-900/40 flex items-center gap-3 active:scale-95">
                Apply for New Batch <ChevronRight size={20} />
              </Link>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-3">
                <PlayCircle size={24} /> Demo Class
              </button>
            </div>
            
            <div className="mt-16 flex gap-12 items-center">
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-12 h-12 rounded-full border-2 border-blue-900 bg-slate-200 overflow-hidden shadow-lg">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Student" />
                   </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-blue-900 bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                   +500
                 </div>
               </div>
               <div className="text-blue-100/60">
                 <p className="font-bold text-white text-lg">Successful Candidates</p>
                 <p className="text-sm">In Last 5 Years</p>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Selections", value: "250+", icon: Award },
            { label: "Expert Faculty", value: "40+", icon: Users },
            { label: "Course Content", value: "1000h+", icon: BookOpen },
            { label: "Student Rating", value: "4.9/5", icon: Star },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <stat.icon size={24} />
              </div>
              <h4 className="text-3xl font-black text-blue-900 mb-1">{stat.value}</h4>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Our Programs</h2>
              <h3 className="text-4xl md:text-5xl font-black text-blue-900 leading-tight">
                Built for <span className="underline decoration-blue-200 underline-offset-8">Aspirants</span>, <br /> Driven by Results.
              </h3>
            </div>
            <Link to="/courses" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-blue-100">
              View All Courses <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col h-full group"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <BookOpen size={32} />
                </div>
                <h4 className="text-2xl font-black text-blue-900 mb-4">{course.title}</h4>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {course.desc}
                </p>
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase">
                    <Calendar size={14} /> {course.duration}
                  </div>
                  <div className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                    {course.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-blue-900 py-24 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
           <div className="lg:w-1/2 text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Get Your Study <br /> Material for <span className="text-blue-400">Free</span>.</h2>
              <p className="text-xl text-blue-100/70 mb-12 max-w-lg leading-relaxed">
                Unlock exclusive access to NCERT summaries, monthly current affairs, and previous year paper analyses.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <button className="bg-white text-blue-900 p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-blue-50 transition-colors">
                    <Download className="text-blue-600" />
                    <span className="font-bold text-lg">Syllabus PDF</span>
                 </button>
                 <button className="bg-blue-800 text-white p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-blue-700 transition-colors border border-blue-700">
                    <Download className="text-blue-400" />
                    <span className="font-bold text-lg">Strategy Guide</span>
                 </button>
              </div>
           </div>
           <div className="lg:w-1/2">
              <img src={studentsPic} alt="Resources" className="rounded-[60px] shadow-3xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 w-full" />
           </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-[50px] -rotate-3"></div>
              <img src={sirPic} alt="Chairman" className="relative z-10 rounded-[40px] shadow-2xl w-full grayscale contrast-125" />
              <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                 <Award className="text-blue-600 mb-2" size={32} />
                 <p className="font-black text-blue-900">Dr. Subhash Singh</p>
                 <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Director & Mentor</p>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5">
            <h2 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-6">Director's Insight</h2>
            <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-10 leading-tight italic">
              "We don't just teach for an exam; we prepare you for a lifetime of leadership and service."
            </h3>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed text-justify font-medium">
              <p>
                Civil Services is not just a career choice; it is a calling. At Gurukul IAS, we understand the immense dedication required to crack this exam. Our pedagogy is designed to simplify complex concepts and build the analytical mindset required for a bureaucrat.
              </p>
              <p>
                From foundational knowledge to advanced answer writing skills, our mentors guide you through every hurdle of the UPSC CSE journey.
              </p>
            </div>
            <Link to="/about/directors-message" className="mt-12 inline-block bg-blue-50 text-blue-700 px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all">
              Read Full Message
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact Banner */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-blue-900 mb-8">Start Your UPSC Journey Today.</h2>
          <p className="text-xl text-slate-500 mb-12 font-medium">Have questions? Our counselors are available 10 AM to 6 PM to guide you on the right path.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href="tel:+919931602179" className="flex items-center justify-center gap-4 bg-white border border-slate-200 px-10 py-6 rounded-3xl hover:border-blue-600 transition group shadow-sm">
              <Phone className="text-blue-600 group-hover:scale-110 transition-transform" size={28} />
              <div className="text-left">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Call Counselor</p>
                <p className="text-lg font-black text-blue-900">+91 9931602179</p>
              </div>
            </a>
            <Link to="/contact" className="bg-blue-600 text-white px-12 py-6 rounded-3xl font-black text-xl flex items-center justify-center shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
              Book a Free Counseling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
