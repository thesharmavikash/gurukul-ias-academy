import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Share2, ExternalLink, ArrowRight, Info, Award, ShieldCheck } from 'lucide-react';
import footerLogo from '../assets/logo1-BAoaihXV.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-slate-300 pt-24 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-center md:items-start space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/10 group-hover:bg-accent/20 transition-colors duration-500">
                <img src={footerLogo} alt="Academy Logo" className="h-12 w-auto" />
              </div>
              <div>
                <h2 className="text-white text-xl font-black tracking-tight leading-none uppercase">GURUKUL</h2>
                <p className="text-accent text-[10px] uppercase font-black tracking-[0.2em] mt-1">Hajipur</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm font-medium">
              Empowering the next generation through holistic education, character building, and academic excellence since 2002.
            </p>
            <div className="flex gap-4">
              {[Globe, Share2, Info, Award].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/5 hover:border-accent shadow-lg">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Academy
            </h3>
            <ul className="space-y-4 font-bold text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" /> Home</Link></li>
              <li><Link to="/mission" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" /> Our School</Link></li>
              <li><Link to="/admission-process" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" /> Admissions</Link></li>
              <li><Link to="/curriculum" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" /> Academics</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors flex items-center gap-2 group"><ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" /> Careers</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Reach Us
            </h3>
            <ul className="space-y-6 text-sm font-medium">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:text-accent transition-colors">
                  <MapPin size={18} />
                </div>
                <p className="text-slate-400 leading-relaxed text-xs pt-1">
                  Rampur Nausahan, Nawada Chowk, Near Jadhua,<br />
                  Hajipur (Vaishali), Bihar - 844102
                </p>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:text-accent transition-colors">
                  <Phone size={18} />
                </div>
                <a href="tel:+919931602179" className="hover:text-white transition-colors">+91 99316 02179</a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:text-accent transition-colors">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@gurukulhajipur.com" className="hover:text-white transition-colors">info@gurukulhajipur.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Enrollment */}
          <div className="flex flex-col space-y-8">
            <h3 className="text-white font-black text-sm uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Enrollment
            </h3>
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 space-y-6 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
               <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                 Secure your child's future at Gurukul. Limited seats available for 2024-25.
               </p>
               <Link to="/admission-process" className="block w-full bg-accent hover:bg-rose-700 text-white text-center py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-rose-900/40 transition-all active:scale-95">
                 Join Gurukul
               </Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Gurukul Vidyapeeth School Hajipur.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
             <span className="cursor-pointer hover:text-accent transition-colors">Privacy Policy</span>
             <span className="cursor-pointer hover:text-accent transition-colors">Terms of Use</span>
             <span className="cursor-pointer hover:text-accent transition-colors">Site Map</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
