import React, { useState } from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import { Plus, Minus } from 'lucide-react';

const FAQs: React.FC = () => {
  const sidebarLinks = [
    { name: 'Admission Process', path: '/admission-process' },
    { name: 'Enquiry Form', path: '/enquiry-form' },
    { name: 'FAQs', path: '/faqs' },
  ];

  const faqData = [
    {
      q: "What is the age criteria for admission in Nursery?",
      a: "The child should be 3+ years old as of 31st March of the academic year for which admission is sought."
    },
    {
      q: "Is the school affiliated with any board?",
      a: "Yes, Gurukul Vidyapeeth is affiliated with the Central Board of Secondary Education (CBSE), New Delhi."
    },
    {
      q: "Do you provide transport facilities?",
      a: "Yes, we provide a safe and reliable bus transport facility covering major parts of Hajipur and nearby areas."
    },
    {
      q: "What are the school timings?",
      a: "The school typically operates from 8:00 AM to 3:00 PM for higher classes and 8:30 AM to 1:30 PM for primary sections."
    },
    {
      q: "Is boarding mandatory for all students?",
      a: "No, boarding is optional. We offer both Day School and Day-cum-Boarding facilities."
    },
    {
      q: "What sports facilities are available?",
      a: "We have facilities for Cricket, Football, Basketball, Badminton, and Table Tennis, along with a dedicated yoga and aerobics studio."
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-white pb-20 text-slate-800">
      <SEO 
        title="Frequently Asked Questions (FAQs)" 
        description="Find answers to common questions regarding admissions, academics, boarding, and campus life at Gurukul Vidyapeeth Hajipur."
        keywords="School FAQs, Admission Questions, Boarding FAQs, Gurukul Help"
      />
      <PageHero title="FAQs" breadcrumb=" > Admissions > FAQs" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3">
          <h2 className="text-3xl font-black text-red-700 border-l-8 border-red-700 pl-6 mb-12 uppercase tracking-tighter">
            Common <span className="text-black">Queries</span>
          </h2>

          <div className="space-y-4">
             {faqData.map((faq, i) => (
               <div key={i} className="border border-zinc-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <button 
                    className={`w-full flex items-center justify-between p-8 text-left transition-colors ${openIdx === i ? 'bg-red-700 text-white' : 'bg-zinc-50 text-black hover:bg-zinc-100'}`}
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                     <span className="font-bold text-lg">{faq.q}</span>
                     {openIdx === i ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                  <div className={`transition-all duration-500 overflow-hidden ${openIdx === i ? 'max-h-96' : 'max-h-0'}`}>
                     <div className="p-8 text-slate-600 leading-relaxed font-medium bg-white">
                        {faq.a}
                     </div>
                  </div>
               </div>
             ))}
          </div>

          <div className="mt-20 bg-red-50 p-12 rounded-[50px] border border-red-100 text-center">
             <h3 className="text-2xl font-black text-red-900 mb-4 uppercase tracking-tighter">Still have questions?</h3>
             <p className="text-red-700 font-medium mb-10 max-w-lg mx-auto">If you couldn't find the answer you were looking for, please feel free to reach out to our admissions team directly.</p>
             <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="tel:+919931602179" className="bg-red-700 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-800 transition-colors shadow-xl shadow-red-900/20">Call Us</a>
                <a href="mailto:info@gurukulvidyapeeth.org" className="bg-white text-red-700 border border-red-200 px-10 py-4 rounded-2xl font-bold hover:bg-red-50 transition-colors">Email Us</a>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQs;
