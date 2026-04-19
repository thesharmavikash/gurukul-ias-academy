import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo-DqKjAScw.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", 
      hasDropdown: true,
      subLinks: [
        { name: "Our Mission", path: "/mission" },
        { name: "Fact Sheet", path: "/fact-sheet" },
        { name: "Hajipur Campus", path: "/hajipur-campus" },
        { name: "Our Leadership", path: "/leadership" },
        { name: "Our Faculty", path: "/faculty" }
      ]
    },
    { 
      name: "Admissions", 
      hasDropdown: true,
      subLinks: [
        { name: "Process", path: "/admission-process" },
        { name: "Enquiry Form", path: "/enquiry-form" },
        { name: "FAQs", path: "/faqs" },
        { name: "Book List", path: "/booklist" }
      ]
    },
    { 
      name: "Academics", 
      hasDropdown: true,
      subLinks: [
        { name: "Overview", path: "/curriculum" },
        { name: "IBS Hajipur", path: "/curriculum/ibs-hajipur" },
        { name: "School Hajipur", path: "/curriculum/school-hajipur" },
        { name: "Whole Education", path: "/beyond-academics/whole-education" }
      ]
    },
    { 
      name: "Campus", 
      hasDropdown: true,
      subLinks: [
        { name: "Virtual Tour", path: "/virtual-tour" },
        { name: "Events Calendar", path: "/events" },
        { name: "Boarding Life", path: "/boarding" },
        { name: "Daily Schedule", path: "/boarding/schedule" }
      ]
    },
    { 
      name: "Student Life", 
      hasDropdown: true,
      subLinks: [
        { name: "Gurukul Blog", path: "/blog" },
        { name: "Achievement Wall", path: "/achievements" },
        { name: "Alumni Network", path: "/alumni" },
        { name: "Gallery", path: "/gallery" }
      ]
    },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="sticky top-0 z-[100] transition-all duration-500 bg-white">
      <nav 
        className={`transition-all duration-500 ${
          scrolled 
            ? 'shadow-2xl shadow-slate-200/50 py-1' 
            : 'py-3'
        }`}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between h-full px-6 md:px-10">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group shrink-0">
            <img src={logoImg} alt="Logo" className="h-14 md:h-16 w-auto transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <h1 className="text-primary text-xl md:text-2xl font-black tracking-tighter leading-none uppercase">GURUKUL</h1>
              <p className="text-accent text-[10px] uppercase font-black tracking-[0.3em] mt-1">Vidyapeeth</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center space-x-1">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group px-1">
                {item.hasDropdown ? (
                  <div className="flex items-center gap-1.5 cursor-pointer py-2.5 px-4 rounded-full hover:bg-slate-100 transition-all duration-300 text-[13px] font-bold text-slate-700">
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full w-64 bg-white border border-slate-100 rounded-3xl shadow-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>
                      {item.subLinks?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-8 py-3 text-slate-600 hover:bg-slate-50 hover:text-accent transition-all duration-200 text-[13px] font-bold border-l-4 border-transparent hover:border-accent"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path || "#"} 
                    className={`block py-2.5 px-5 rounded-full transition-all duration-300 text-[13px] font-bold ${
                      location.pathname === item.path 
                        ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
            <li className="pl-4">
              <Link to="/admission-process" className="bg-accent hover:bg-rose-700 text-white px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl shadow-rose-200 transition-all flex items-center gap-2 group active:scale-95">
                Apply Now <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <div className="xl:hidden flex items-center">
            <div 
              className="text-primary cursor-pointer p-3 bg-slate-100 rounded-2xl hover:bg-slate-200 transition" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden bg-white border-t border-slate-50 overflow-hidden"
            >
              <ul className="flex flex-col items-center space-y-1 p-6 text-slate-800 text-lg font-black uppercase tracking-tighter h-[75vh] overflow-y-auto">
                {menuItems.map((item) => (
                  <li key={item.name} className="w-full text-center">
                    {item.hasDropdown ? (
                      <div className="flex flex-col">
                        <div 
                          className="flex items-center justify-center gap-2 py-4 cursor-pointer hover:text-accent"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown size={20} className={`${activeDropdown === item.name ? 'rotate-180' : ''} transition-transform`} />
                        </div>
                        {activeDropdown === item.name && (
                          <div className="flex flex-col bg-slate-50 rounded-3xl py-2 my-2 border border-slate-100 shadow-inner">
                            {item.subLinks?.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="block py-4 text-slate-500 text-base font-bold normal-case tracking-normal hover:text-accent"
                                onClick={() => setIsOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link 
                        to={item.path || "#"} 
                        className={`block py-4 hover:text-accent transition rounded-2xl ${location.pathname === item.path ? 'text-accent bg-rose-50' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
