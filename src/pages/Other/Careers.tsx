import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Users, Heart, Send, CheckCircle2, FileText, User, Mail, Phone, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teaching' | 'non-teaching'>('teaching');

  const teachingJobs = [
    { title: "PGT Mathematics", dept: "Senior Secondary", exp: "5+ Years", type: "Full Time" },
    { title: "TGT English", dept: "Middle School", exp: "3+ Years", type: "Full Time" },
    { title: "Primary Teacher (All Subjects)", dept: "Primary", exp: "2+ Years", type: "Full Time" },
    { title: "Robotics & AI Instructor", dept: "Innovation Lab", exp: "2+ Years", type: "Part Time / Full Time" }
  ];

  const nonTeachingJobs = [
    { title: "School Counselor", dept: "Wellness", exp: "4+ Years", type: "Full Time" },
    { title: "Hostel Warden (Female)", dept: "Residential", exp: "3+ Years", type: "Residential" },
    { title: "Admin Executive", dept: "Administration", exp: "2+ Years", type: "Full Time" },
    { title: "Librarian", dept: "Library", exp: "3+ Years", type: "Full Time" }
  ];

  const benefits = [
    { title: "Professional Growth", desc: "Regular workshops and international training sessions.", icon: GraduationCap },
    { title: "Work-Life Balance", desc: "Generous leave policy and structured working hours.", icon: Heart },
    { title: "Collaborative Culture", desc: "Work with a team of globally recognized educators.", icon: Users },
    { title: "Modern Environment", desc: "Access to state-of-the-art labs and digital tools.", icon: Briefcase }
  ];

  return (
    <div className="bg-slate-50 pb-32 overflow-hidden">
      <SEO 
        title="Careers | Join Our Team of Educators" 
        description="Explore career opportunities at Gurukul Vidyapeeth Hajipur. We are looking for passionate teaching and non-teaching professionals to join our community."
        keywords="Teaching Jobs Hajipur, School Recruitment, Non-teaching staff jobs, Education Careers Bihar"
      />
      <PageHero title="Careers at Gurukul" breadcrumb=" > Join Our Team" />
      
      <div className="max-w-7xl mx-auto px-6 mt-24">
        {/* Why Join Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <h2 className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-6">Empowering Educators</h2>
              <h3 className="text-4xl md:text-6xl font-black text-primary leading-tight mb-8">
                Build the <span className="text-accent italic">Future</span> <br /> With Us.
              </h3>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 text-justify">
                At Gurukul Vidyapeeth, we don't just hire staff; we recruit visionaries. Whether you're a seasoned educator or a dedicated administrator, we provide the platform to innovate, lead, and make a lasting impact on young lives.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {benefits.map((b, i) => (
                   <div key={i} className="flex gap-4 p-4 bg-white rounded-3xl border border-slate-100 shadow-sm">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                         <b.icon size={20} />
                      </div>
                      <div>
                         <h5 className="font-bold text-primary text-sm">{b.title}</h5>
                         <p className="text-xs text-slate-400 font-medium">{b.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="absolute -inset-10 bg-blue-100/50 rounded-[5rem] rotate-3 blur-3xl"></div>
              <div className="relative z-10 bg-primary p-12 rounded-[4rem] text-white shadow-3xl">
                 <h4 className="text-2xl font-black mb-8 uppercase tracking-tighter">Current Openings</h4>
                 
                 {/* Tabs */}
                 <div className="flex bg-white/5 p-1.5 rounded-2xl mb-10 border border-white/10">
                    <button 
                      onClick={() => setActiveTab('teaching')}
                      className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'teaching' ? 'bg-accent text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                      Teaching
                    </button>
                    <button 
                      onClick={() => setActiveTab('non-teaching')}
                      className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'non-teaching' ? 'bg-accent text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                    >
                      Non-Teaching
                    </button>
                 </div>

                 <div className="space-y-4">
                    <AnimatePresence mode="wait">
                       {(activeTab === 'teaching' ? teachingJobs : nonTeachingJobs).map((job, idx) => (
                         <motion.div
                           key={job.title}
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -10 }}
                           transition={{ delay: idx * 0.1 }}
                           className="bg-white/5 border border-white/10 p-6 rounded-3xl group hover:bg-white/10 transition-all cursor-pointer"
                         >
                            <div className="flex justify-between items-start mb-2">
                               <h5 className="font-bold text-lg group-hover:text-accent transition-colors">{job.title}</h5>
                               <span className="text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">{job.type}</span>
                            </div>
                            <div className="flex gap-6 text-xs text-slate-400 font-bold uppercase tracking-widest">
                               <span className="flex items-center gap-1.5"><BookOpen size={12} /> {job.dept}</span>
                               <span className="flex items-center gap-1.5"><Briefcase size={12} /> {job.exp} Exp</span>
                            </div>
                         </motion.div>
                       ))}
                    </AnimatePresence>
                 </div>
                 
                 <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                    <p className="text-xs text-slate-400 font-medium">Can't find a fit?</p>
                    <button className="text-accent font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">Apply Spontaneously <ArrowRight size={14} /></button>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* Application Form Section */}
        <div id="apply" className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100 p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 relative z-10">
              <div className="lg:col-span-2">
                 <div className="w-16 h-1 w-accent mb-10 bg-accent"></div>
                 <h3 className="text-4xl font-black text-primary mb-8 uppercase tracking-tighter leading-none">Ready to <br /> Begin?</h3>
                 <p className="text-slate-500 font-medium leading-relaxed mb-12">
                   Fill out the recruitment form and attach your resume. Our HR team will review your application and get back to you within 7 working days if there is a match.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-center gap-4 text-primary font-black text-sm uppercase tracking-widest">
                       <CheckCircle2 className="text-accent" /> Verify all documents
                    </div>
                    <div className="flex items-center gap-4 text-primary font-black text-sm uppercase tracking-widest">
                       <CheckCircle2 className="text-accent" /> PDF Format only for CV
                    </div>
                    <div className="flex items-center gap-4 text-primary font-black text-sm uppercase tracking-widest">
                       <CheckCircle2 className="text-accent" /> Max size 5MB
                    </div>
                 </div>
              </div>

              <div className="lg:col-span-3">
                 <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2"><User size={14} className="text-accent" /> Full Name</label>
                          <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2"><Mail size={14} className="text-accent" /> Email Address</label>
                          <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm" />
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2"><Phone size={14} className="text-accent" /> Phone Number</label>
                          <input type="tel" placeholder="+91 00000 00000" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2"><Briefcase size={14} className="text-accent" /> Applying For</label>
                          <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-accent focus:bg-white transition-all font-bold text-sm appearance-none">
                             <option>Teaching Role</option>
                             <option>Non-Teaching Role</option>
                             <option>Administrative Role</option>
                             <option>Support Staff</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 flex items-center gap-2"><FileText size={14} className="text-accent" /> Upload Resume</label>
                       <div className="relative group">
                          <div className="absolute inset-0 bg-accent/5 rounded-3xl border-2 border-slate-100 border-dashed group-hover:border-accent transition-all duration-300 pointer-events-none"></div>
                          <div className="flex flex-col items-center justify-center py-10">
                             <Send className="text-slate-300 mb-2 group-hover:text-accent transition-colors" />
                             <p className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">Drop PDF here or click to browse</p>
                             <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
                          </div>
                       </div>
                    </div>

                    <div className="pt-6">
                       <button className="w-full bg-primary hover:bg-slate-800 text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-primary/20 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                          Submit My Application <Send size={16} />
                       </button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
