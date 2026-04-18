import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import bannerImg from '../../assets/pic18.jpg';

const WholeEducation: React.FC = () => {
  const sidebarLinks = [
    { name: "Whole Education", path: "/beyond-academics/whole-education" },
    { name: "Collaborative Learning Model", path: "/beyond-academics/collaborative-learning" },
    { name: "Startup You", path: "/beyond-academics/startup-you" },
    { name: "Gurukul School of Leadership", path: "/beyond-academics/leadership" },
    { name: "Hajipur Training & Research Institute", path: "/beyond-academics/training-research" },
    { name: "Gurukul Community School", path: "/beyond-academics/community-school" }
  ];

  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Whole Education Philosophy" 
        description="Discover the Whole Education philosophy at Gurukul Vidyapeeth Hajipur, focusing on creativity, leadership, and emotional intelligence."
        keywords="Whole Education, Holistic Learning, Experiential Learning, Gurukul Pedagogy"
      />
      <PageHero title="Whole Education" breadcrumb=" > Beyond Academics > Whole Education" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-red-700 border-l-4 border-red-700 pl-4 mb-8">
              Whole Education at Gurukul Vidyapeeth
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="text-justify">
                At Gurukul Vidyapeeth, we believe in nurturing every student holistically. Beyond academics, our approach focuses on developing creativity, critical thinking, emotional intelligence, and leadership qualities. Students are encouraged to explore their passions, engage in experiential learning, and take ownership of their personal growth.
              </p>
              <p className="text-justify">
                Our Whole Education philosophy integrates rigorous academic learning with opportunities in arts, sports, service learning, and innovative projects. This ensures students graduate not only with knowledge but with the skills, character, and confidence to excel in a complex world.
              </p>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
            <img 
              src={bannerImg} 
              alt="Whole Education at Gurukul" 
              className="w-full h-auto object-cover" 
              loading="lazy"
            />
          </div>

          <div className="bg-red-50 p-10 rounded-3xl border border-red-100">
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center text-sm">!</span>
              Key Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100/50">
                <h4 className="font-bold text-red-700 mb-2 uppercase tracking-wide text-sm">Academic Excellence</h4>
                <p className="text-gray-600 text-sm">A rigorous curriculum that prepares students for global challenges.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100/50">
                <h4 className="font-bold text-red-700 mb-2 uppercase tracking-wide text-sm">Emotional Intelligence</h4>
                <p className="text-gray-600 text-sm">Developing self-awareness and empathy in every learner.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100/50">
                <h4 className="font-bold text-red-700 mb-2 uppercase tracking-wide text-sm">Creative Arts</h4>
                <p className="text-gray-600 text-sm">Encouraging expression through music, visual arts, and drama.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-100/50">
                <h4 className="font-bold text-red-700 mb-2 uppercase tracking-wide text-sm">Physical Growth</h4>
                <p className="text-gray-600 text-sm">Comprehensive sports programs for health and teamwork.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WholeEducation;
