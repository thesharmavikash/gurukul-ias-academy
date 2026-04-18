import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';
import SEO from '../../components/SEO';
import admissionImg from '../../assets/pic1.jpg';

const AdmissionProcess: React.FC = () => {
  const sidebarLinks = [
    { name: 'Admission Process', path: '/admission-process' },
    { name: 'Enquiry Form', path: '/enquiry-form' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Admission Process" 
        description="Learn about the admission process at Gurukul Vidyapeeth Hajipur. From registration to orientation, join our community of learners."
        keywords="School Admission, Gurukul Registration, Hajipur School Entry"
      />
      <PageHero title="Admission Process" breadcrumb=" > Admissions > Process" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3 space-y-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-red-700 border-l-4 border-red-700 pl-4 mb-8">
              Join the Gurukul Community
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="text-justify">
                Gurukul Vidyapeeth welcomes students from diverse backgrounds who are eager to learn and grow in a challenging yet supportive environment. Our admission process is designed to identify students who will thrive in our academic and co-curricular programs.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-red-700 text-white w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg">1</div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Registration</h4>
                <p className="text-gray-600 leading-relaxed">Parents can register their children by filling out the online enquiry form or visiting the school campus to obtain the registration kit.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-red-700 text-white w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg">2</div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Assessment & Interaction</h4>
                <p className="text-gray-600 leading-relaxed">Students for higher classes may need to undergo a baseline assessment. This is followed by an informal interaction with the student and parents.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-red-700 text-white w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg">3</div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Admission Confirmation</h4>
                <p className="text-gray-600 leading-relaxed">Once the admission is offered, parents must complete the formalities including submission of documents and payment of fees.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="bg-red-700 text-white w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-xl shadow-lg">4</div>
              <div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">Orientation</h4>
                <p className="text-gray-600 leading-relaxed">A specialized orientation session is held for new students and parents to welcome them to the Gurukul family.</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50 mt-12">
            <img 
              src={admissionImg} 
              alt="Admissions at Gurukul" 
              className="w-full h-auto object-cover" 
              loading="lazy"
            />
          </div>

          <div className="bg-gray-900 text-white p-10 rounded-3xl mt-12">
            <h3 className="text-2xl font-bold mb-6">Required Documents</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-gray-300">
              <li>Birth Certificate (Copy)</li>
              <li>Transfer Certificate (Original)</li>
              <li>Previous Year Report Card</li>
              <li>Passport Size Photographs (4)</li>
              <li>Aadhar Card (Student & Parents)</li>
              <li>Address Proof</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdmissionProcess;
