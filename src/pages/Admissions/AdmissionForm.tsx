import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, GraduationCap, MapPin, CheckCircle2, ArrowRight, ArrowLeft, Send, ChevronDown, Users } from 'lucide-react';
import SEO from '../../components/SEO';

const AdmissionForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    course: 'gs-foundation',
    mode: 'offline',
    source: 'google'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-black flex items-center justify-center transition-colors">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full bg-white dark:bg-zinc-900 rounded-[40px] p-12 text-center shadow-3xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-black text-red-900 dark:text-white mb-4">Application Received!</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg mb-10">
            Thank you, <span className="font-bold text-slate-900 dark:text-white">{formData.fullName}</span>. Our senior counselor will call you within 24 hours to guide you further.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all active:scale-95"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-black transition-colors">
      <SEO 
        title="Apply Online | Gurukul IAS Academy" 
        description="Enroll in our UPSC GS Foundation and Optional batches online. Start your civil services journey with the best mentors."
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-red-900 dark:text-white mb-6 tracking-tighter italic">Registration Form</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">Fill in your details to book your seat in the upcoming batch.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12 flex justify-between items-center relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-zinc-800 -translate-y-1/2 -z-10"></div>
          <div 
            className="absolute top-1/2 left-0 h-1 bg-red-600 -translate-y-1/2 -z-10 transition-all duration-500" 
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          ></div>
          {[1, 2, 3].map((s) => (
            <div 
              key={s}
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= s ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'bg-white dark:bg-zinc-800 text-slate-400 border-2 border-slate-200 dark:border-zinc-700'}`}
            >
              {s}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-zinc-900 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-zinc-800">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-black text-red-900 dark:text-white mb-8">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        required
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Rahul Sharma" 
                        className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-red-600 dark:text-white font-bold transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="rahul@example.com" 
                        className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-red-600 dark:text-white font-bold transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Mobile Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 00000 00000" 
                        className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-red-600 dark:text-white font-bold transition-all"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-8">
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-[0.98] shadow-xl shadow-red-600/20"
                  >
                    Select Course <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-black text-red-900 dark:text-white mb-8">Course Selection</h3>
                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-2">Choose Program</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <select 
                          name="course"
                          value={formData.course}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 dark:bg-zinc-800/50 border-none rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-red-600 dark:text-white font-bold appearance-none cursor-pointer transition-all"
                        >
                          <option value="gs-foundation">GS Foundation Batch (Full Year)</option>
                          <option value="optional">Optional Subject Specialization</option>
                          <option value="csat">CSAT Exclusive Batch</option>
                          <option value="test-series">Prelims Test Series (50+ Tests)</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                      </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                      <button 
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, mode: 'offline' }))}
                        className={`p-6 rounded-3xl border-2 transition-all text-left ${formData.mode === 'offline' ? 'border-red-600 bg-red-50 dark:bg-red-900/10' : 'border-slate-100 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800'}`}
                      >
                         <MapPin className={formData.mode === 'offline' ? 'text-red-600' : 'text-slate-400'} size={24} />
                         <p className={`font-black text-lg mt-4 ${formData.mode === 'offline' ? 'text-red-900 dark:text-red-400' : 'text-slate-600 dark:text-slate-400'}`}>Offline</p>
                         <p className="text-xs text-slate-400 mt-1 font-bold">Classroom Learning</p>
                      </button>
                      <button 
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, mode: 'online' }))}
                        className={`p-6 rounded-3xl border-2 transition-all text-left ${formData.mode === 'online' ? 'border-red-600 bg-red-50 dark:bg-red-900/10' : 'border-slate-100 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800'}`}
                      >
                         <Users className={formData.mode === 'online' ? 'text-red-600' : 'text-slate-400'} size={24} />
                         <p className={`font-black text-lg mt-4 ${formData.mode === 'online' ? 'text-red-900 dark:text-red-400' : 'text-slate-600 dark:text-slate-400'}`}>Online</p>
                         <p className="text-xs text-slate-400 mt-1 font-bold">Live Interactive</p>
                      </button>
                   </div>
                </div>

                <div className="flex gap-4 pt-8">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="flex-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all"
                  >
                    <ArrowLeft size={20} /> Back
                  </button>
                  <button 
                    type="button" 
                    onClick={nextStep}
                    className="flex-[2] bg-red-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-[0.98] shadow-xl shadow-red-600/20"
                  >
                    Final Review <ArrowRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-black text-red-900 dark:text-white mb-8">Confirm Details</h3>
                
                <div className="bg-slate-50 dark:bg-zinc-800/50 rounded-[32px] p-8 space-y-6">
                   <div className="flex justify-between border-b border-slate-100 dark:border-zinc-800 pb-4">
                      <span className="text-slate-500 font-bold">Name</span>
                      <span className="text-red-900 dark:text-white font-black">{formData.fullName}</span>
                   </div>
                   <div className="flex justify-between border-b border-slate-100 dark:border-zinc-800 pb-4">
                      <span className="text-slate-500 font-bold">Course</span>
                      <span className="text-red-900 dark:text-white font-black capitalize">{formData.course.replace('-', ' ')}</span>
                   </div>
                   <div className="flex justify-between border-b border-slate-100 dark:border-zinc-800 pb-4">
                      <span className="text-slate-500 font-bold">Learning Mode</span>
                      <span className="text-red-900 dark:text-white font-black capitalize">{formData.mode}</span>
                   </div>
                   <div className="flex justify-between">
                      <span className="text-slate-500 font-bold">Contact</span>
                      <span className="text-red-900 dark:text-white font-black">{formData.phone}</span>
                   </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="flex-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-all"
                  >
                    <ArrowLeft size={20} /> Edit
                  </button>
                  <button 
                    type="submit" 
                    className="flex-[2] bg-red-600 text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-red-700 transition-all active:scale-[0.98] shadow-2xl shadow-red-600/30"
                  >
                    Submit Application <Send size={20} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
