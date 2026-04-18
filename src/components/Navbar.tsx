import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import logoImg from '../assets/logo-DqKjAScw.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { name: "Home", path: "/" },
    { 
      name: "Courses", 
      hasDropdown: true,
      subLinks: [
        { name: "GS Foundation (Prelims + Mains)", path: "/courses/gs-foundation" },
        { name: "Optional Subjects", path: "/courses/optional" },
        { name: "CSAT Special Batch", path: "/courses/csat" },
        { name: "Interview Guidance Program", path: "/courses/interview" }
      ]
    },
    { 
      name: "Test Series", 
      hasDropdown: true,
      subLinks: [
        { name: "Prelims Test Series", path: "/test-series/prelims" },
        { name: "Mains Test Series", path: "/test-series/mains" },
        { name: "Daily Answer Writing", path: "/test-series/daily-writing" }
      ]
    },
    { 
      name: "Free Resources", 
      hasDropdown: true,
      subLinks: [
        { name: "Daily Current Affairs", path: "/resources/current-affairs" },
        { name: "Daily Editorial Analysis", path: "/resources/editorial" },
        { name: "UPSC Syllabus", path: "/resources/syllabus" },
        { name: "Previous Year Papers", path: "/resources/pyq" }
      ]
    },
    { name: "Results", path: "/results" },
    { 
      name: "About Us", 
      hasDropdown: true,
      subLinks: [
        { name: "Director's Message", path: "/about/directors-message" },
        { name: "Why Gurukul IAS?", path: "/about/why-us" },
        { name: "Our Faculty", path: "/about/faculty" }
      ]
    },
    { name: "Contact Us", path: "/contact" }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-blue-100 shadow-sm h-[90px]">
      <div className="flex items-center justify-between h-full px-6 lg:px-12 max-w-[1600px] mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img src={logoImg} alt="Gurukul Logo" className="h-14 w-auto transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <h1 className="text-blue-900 text-xl md:text-2xl font-black tracking-tighter leading-none">GURUKUL <span className="text-blue-600 font-medium tracking-normal">IAS ACADEMY</span></h1>
            <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-1">Nurturing Leaders for Nation</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-2">
          <ul className="flex items-center space-x-1 text-slate-700 text-sm font-semibold">
            {menuItems.map((item) => (
              <li key={item.name} className="relative group px-1">
                {item.hasDropdown ? (
                  <div className="flex items-center gap-1 cursor-pointer py-3 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-blue-100 rounded-2xl shadow-2xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
                      {item.subLinks?.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block px-6 py-3 text-slate-600 hover:bg-blue-600 hover:text-white transition duration-200 text-[13px] border-l-4 border-transparent hover:border-blue-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path || "#"} 
                    className="block py-3 px-3 rounded-lg hover:bg-blue-50 hover:text-blue-700 transition-all duration-300"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div className="h-8 w-px bg-slate-200 mx-4"></div>
          
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            <Search size={20} />
          </button>
          
          <Link to="/admission-process" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-blue-200 transition-all ml-4">
            Enroll Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="xl:hidden flex items-center gap-4">
          <button className="text-slate-400 hover:text-blue-600">
            <Search size={24} />
          </button>
          <div className="text-slate-700 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden bg-white overflow-hidden transition-all duration-500 ease-in-out border-t border-slate-100 ${isOpen ? 'max-h-[100vh] py-6 shadow-2xl' : 'max-h-0'}`}>
        <ul className="flex flex-col items-center space-y-2 text-slate-800 text-lg font-bold px-6 h-[70vh] overflow-y-auto">
          {menuItems.map((item) => (
            <li key={item.name} className="w-full text-center py-1">
              {item.hasDropdown ? (
                <div className="flex flex-col">
                  <div 
                    className="flex items-center justify-center gap-2 py-3 cursor-pointer hover:text-blue-600 rounded-xl hover:bg-blue-50"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={20} className={`${activeDropdown === item.name ? 'rotate-180' : ''} transition-transform`} />
                  </div>
                  <div className={`flex flex-col bg-slate-50 rounded-2xl transition-all duration-300 overflow-hidden ${activeDropdown === item.name ? 'max-h-[500px] py-2 mt-2 border border-slate-100 shadow-inner' : 'max-h-0'}`}>
                    {item.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block py-4 text-slate-500 text-base font-medium hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link 
                  to={item.path || "#"} 
                  className="block py-3 hover:text-blue-600 transition hover:bg-blue-50 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
          <li className="w-full pt-4">
             <Link to="/admission-process" className="block bg-blue-600 text-white text-center py-4 rounded-2xl shadow-xl shadow-blue-100" onClick={() => setIsOpen(false)}>
               New Batch Registration
             </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
