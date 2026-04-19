import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import { Lightbulb, Target, Compass, Zap } from 'lucide-react';

const IBSSchoolHajipur: React.FC = () => {
  const sidebarLinks = [
    { name: 'IBS School Hajipur', path: '/curriculum/ibs-hajipur' },
    { name: 'School Hajipur', path: '/curriculum/school-hajipur' },
    { name: 'Curriculum Overview', path: '/curriculum' }
  ];

  return (
    <div className="bg-white pb-20 text-slate-800">
      <SEO 
        title="IBS School Hajipur | International Curriculum" 
        description="Learn about the IBS School Hajipur curriculum, focusing on enquiry-based learning, critical thinking, and international standards."
        keywords="IBS Hajipur, International School, Enquiry Based Learning, Gurukul Curriculum"
      />
      <PageHero title="IBS School Hajipur" breadcrumb=" > Academics > IBS Hajipur" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-16">
          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-black text-red-700 border-l-8 border-red-700 pl-6 mb-8 uppercase tracking-tighter">
              A Global <span className="text-black">Perspective</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-medium text-justify">
              IBS School Hajipur represents our commitment to providing a world-class education that transcends traditional boundaries. Our curriculum is inspired by international best practices, focusing on developing students into inquisitive, knowledgeable, and caring young people.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="bg-zinc-900 p-10 rounded-[50px] text-white group hover:bg-red-700 transition-colors duration-500 shadow-2xl">
                <Lightbulb className="text-red-500 group-hover:text-white mb-6" size={40} />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Enquiry-Based</h4>
                <p className="text-zinc-400 group-hover:text-red-50 mb-6 font-medium">Students are encouraged to ask big questions and explore complex ideas through research and collaboration.</p>
             </div>
             <div className="bg-zinc-900 p-10 rounded-[50px] text-white group hover:bg-red-700 transition-colors duration-500 shadow-2xl">
                <Target className="text-red-500 group-hover:text-white mb-6" size={40} />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Skill-Focused</h4>
                <p className="text-zinc-400 group-hover:text-red-50 mb-6 font-medium">Beyond content mastery, we focus on developing 21st-century skills like communication, empathy, and resilience.</p>
             </div>
             <div className="bg-zinc-900 p-10 rounded-[50px] text-white group hover:bg-red-700 transition-colors duration-500 shadow-2xl">
                <Compass className="text-red-500 group-hover:text-white mb-6" size={40} />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Global Mindset</h4>
                <p className="text-zinc-400 group-hover:text-red-50 mb-6 font-medium">Exposure to global issues and diverse perspectives prepares students for a leadership role in a globalized world.</p>
             </div>
             <div className="bg-zinc-900 p-10 rounded-[50px] text-white group hover:bg-red-700 transition-colors duration-500 shadow-2xl">
                <Zap className="text-red-500 group-hover:text-white mb-6" size={40} />
                <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter">Action-Oriented</h4>
                <p className="text-zinc-400 group-hover:text-red-50 mb-6 font-medium">Learning is linked to real-world application, encouraging students to take meaningful action in their communities.</p>
             </div>
          </div>

          <div className="bg-red-50 p-12 rounded-[60px] border border-red-100 shadow-inner">
             <h3 className="text-2xl font-black text-red-900 mb-6 uppercase tracking-tighter">The IBS Difference</h3>
             <div className="space-y-6 text-red-700 font-medium leading-relaxed">
                <p>Unlike traditional rote learning, the IBS model at Hajipur creates a dynamic classroom environment where the teacher acts as a facilitator rather than a lecturer.</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside">
                   <li>Transdisciplinary Themes</li>
                   <li>Conceptual Understanding</li>
                   <li>Formative Assessment</li>
                   <li>Reflective Portfolios</li>
                   <li>Student Agency</li>
                   <li>Interdisciplinary Projects</li>
                </ul>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IBSSchoolHajipur;
