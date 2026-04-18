import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import curriculumImg from '../../assets/admission-DTCmaV1f.jpg';

const Curriculum: React.FC = () => {
  const sidebarLinks = [
    { name: 'IBS School Hajipur', path: '/curriculum/ibs-hajipur' },
    { name: 'School Hajipur', path: '/curriculum/school-hajipur' },
  ];

  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Academic Curriculum" 
        description="Explore the comprehensive CBSE-affiliated curriculum at Gurukul Vidyapeeth Hajipur, from primary years to senior secondary excellence."
        keywords="School Curriculum, CBSE Hajipur, Primary Education, Secondary Education"
      />
      <PageHero title="Curriculum" breadcrumb=" > Academics > Curriculum" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-red-700 border-l-4 border-red-700 pl-4 mb-8">
              Academic Excellence & Innovation
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="text-justify">
                Gurukul Vidyapeeth offers a comprehensive curriculum designed to challenge and inspire students from Nursery to Class 12. As a CBSE-affiliated institution, we adhere to high national standards while integrating global best practices in teaching and learning.
              </p>
              <p className="text-justify">
                Our approach emphasizes inquiry-based learning, critical thinking, and the practical application of knowledge. We provide a strong foundation in core subjects while offering diverse electives to cater to individual interests and career aspirations.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-red-900 mb-4">Primary Years</h4>
              <p className="text-gray-600">Focusing on foundational literacy, numeracy, and social-emotional skills through play-based and experiential learning.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-red-900 mb-4">Middle School</h4>
              <p className="text-gray-600">Broadening horizons with a diverse range of subjects and encouraging independent research and project-based work.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-red-900 mb-4">Secondary School</h4>
              <p className="text-gray-600">Rigorous preparation for board examinations with a focus on deep conceptual understanding and analytical skills.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-red-900 mb-4">Senior Secondary</h4>
              <p className="text-gray-600">Specialized streams in Science (PCM/PCB), Commerce, and Humanities to prepare students for higher education and careers.</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
            <img 
              src={curriculumImg} 
              alt="Curriculum at Gurukul" 
              className="w-full h-auto object-cover" 
              loading="lazy"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Curriculum;
