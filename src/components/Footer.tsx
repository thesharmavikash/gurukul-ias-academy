import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, ExternalLink, Info, MapPin, Mail, Phone } from 'lucide-react';
import footerLogo from '../assets/logo1-BAoaihXV.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-300 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        {/* Column 1: Academy Info */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3 mb-8">
            <img src={footerLogo} alt="Academy Logo" className="w-16 h-16 rounded-2xl shadow-2xl shadow-red-500/20" />
            <div>
              <h2 className="text-white text-xl font-black tracking-tighter uppercase">Gurukul <span className="text-red-500 font-medium tracking-normal">IAS</span></h2>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Hajipur Center</p>
            </div>
          </div>
          <p className="text-slate-400 leading-relaxed mb-10 text-sm font-medium">
            India's premier institute for UPSC Civil Services preparation. We provide an ecosystem that fosters analytical thinking and dedicated learning.
          </p>
          <div className="flex gap-4">
            {[
              { Icon: Globe, label: "Website" },
              { Icon: Share2, label: "Share" },
              { Icon: ExternalLink, label: "Portal" },
              { Icon: Info, label: "About" }
            ].map((item, i) => (
              <a 
                key={i} 
                href="#" 
                aria-label={item.label}
                className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
              >
                <item.Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Courses */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Popular Courses</h3>
          <ul className="space-y-4 font-medium text-sm">
            <li><Link to="/courses/gs-foundation" className="hover:text-red-400 transition-colors flex items-center gap-2 group">GS Foundation Batch</Link></li>
            <li><Link to="/courses/optional" className="hover:text-red-400 transition-colors flex items-center gap-2 group">Optional Coaching</Link></li>
            <li><Link to="/test-series/prelims" className="hover:text-red-400 transition-colors flex items-center gap-2 group">Prelims Test Series</Link></li>
            <li><Link to="/courses/interview" className="hover:text-red-400 transition-colors flex items-center gap-2 group">Interview Program</Link></li>
            <li><Link to="/resources/current-affairs" className="hover:text-red-400 transition-colors flex items-center gap-2 group">Daily Current Affairs</Link></li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Support</h3>
          <ul className="space-y-4 font-medium text-sm">
            <li><Link to="/about/why-us" className="hover:text-red-400 transition-colors">Why Choose Us</Link></li>
            <li><Link to="/results" className="hover:text-red-400 transition-colors">Success Stories</Link></li>
            <li><Link to="/contact" className="hover:text-red-400 transition-colors">Contact Support</Link></li>
            <li><button className="hover:text-red-400 transition-colors text-left">ERP Student Login</button></li>
            <li><button className="hover:text-red-400 transition-colors text-left">Privacy & Terms</button></li>
          </ul>
        </div>

        {/* Column 4: Reach Us */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-8">Reach Us</h3>
          <ul className="space-y-6 text-sm font-medium">
            <li className="flex items-start gap-4">
              <MapPin className="text-red-500 mt-1 flex-shrink-0" size={20} />
              <p className="text-slate-400 leading-relaxed italic">
                Rampur Nausahan, Nawada Chowk, Near Jadhua,<br />
                Hajipur (Vaishali), Bihar - 844102
              </p>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-red-500 flex-shrink-0" size={20} />
              <a href="tel:+919931602179" className="hover:text-white transition-colors">+91 99316 02179</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-red-500 flex-shrink-0" size={20} />
              <a href="mailto:info@gurukulias.com" className="hover:text-white transition-colors">info@gurukulias.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-zinc-900 py-10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Gurukul IAS Academy Hajipur. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
             <span className="cursor-pointer hover:text-red-500 transition-colors">Site Map</span>
             <span className="cursor-pointer hover:text-red-500 transition-colors">Disclaimer</span>
             <span className="cursor-pointer hover:text-red-500 transition-colors">Affiliation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
