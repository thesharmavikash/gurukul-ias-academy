import React from 'react';
import PageHero from '../../components/PageHero';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEO from '../../components/SEO';

const Contact: React.FC = () => {
  return (
    <div className="bg-white pb-20">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Gurukul Vidyapeeth Hajipur. Reach out for admissions, enquiries, and school visits. We're here to help."
        keywords="Contact Gurukul, School Enquiry, Hajipur School Location, Gurukul Phone Number"
      />
      <PageHero title="Contact Us" breadcrumb=" > Contact Us" />
      
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-red-700 mb-6">Get In Touch</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                We're here to help! Whether you have a question about admissions, curriculum, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <MapPin className="text-red-700" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Rampur Nausahan, Nawada Chowk, Near Jadhua,<br />
                    Hajipur (Vaishali), PIN - 844102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <Phone className="text-red-700" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Phone Numbers</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>+91 99316 02179</p>
                    <p>+91 76730 76349</p>
                    <p>+91 80020 43766</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <Mail className="text-red-700" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Email Addresses</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>gurukulvidyapeethhaj@yahoo.in</p>
                    <p>gurukulvidyapeeth330280@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-red-50 p-4 rounded-2xl border border-red-100">
                  <Clock className="text-red-700" size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-xl mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send an Enquiry</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Student Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Parent Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
