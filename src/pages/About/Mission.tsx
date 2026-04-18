import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';

const Mission: React.FC = () => {
  const sidebarLinks = [
    { name: 'The School', path: '/mission' },
    { name: 'Mission Vision', path: '/vision' },
    { name: 'Fact Sheet', path: '/fact-sheet' },
    { name: 'Hajipur Campus', path: '/hajipur-campus' },
  ];

  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Mission & Vision" 
        description="Learn about the mission, vision, and core values of Gurukul Vidyapeeth Hajipur. We are committed to excellence in education."
        keywords="Gurukul Mission, School Vision, Educational Values, Hajipur Education"
      />
      <PageHero title="Mission & Vision" breadcrumb=" > About Us > Mission & Vision" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-red-700 mb-8 border-l-4 border-red-700 pl-4">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              To provide a nurturing environment where students are encouraged to reach their full potential through an integrated approach to learning that combines academic rigor with character development and life skills. We strive to create lifelong learners who are compassionate, responsible, and prepared to excel in a global society.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-red-700 mb-8 border-l-4 border-red-700 pl-4">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              To be a center of excellence in education, recognized for its commitment to holistic development, innovative teaching practices, and the success of its students. We envision a community where every individual is empowered to contribute meaningfully to the world.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-900 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform">
              <h4 className="font-bold text-xl mb-4 text-red-200 uppercase tracking-wider">Integrity</h4>
              <p className="text-sm text-red-50/80 leading-relaxed">
                Upholding the highest moral and ethical standards in all actions and decisions.
              </p>
            </div>
            <div className="bg-red-800 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform">
              <h4 className="font-bold text-xl mb-4 text-red-200 uppercase tracking-wider">Excellence</h4>
              <p className="text-sm text-red-50/80 leading-relaxed">
                Striving for the best in every endeavor, both inside and outside the classroom.
              </p>
            </div>
            <div className="bg-red-700 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition-transform">
              <h4 className="font-bold text-xl mb-4 text-red-200 uppercase tracking-wider">Compassion</h4>
              <p className="text-sm text-red-50/80 leading-relaxed">
                Fostering a culture of kindness, empathy, and mutual respect.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Mission;
