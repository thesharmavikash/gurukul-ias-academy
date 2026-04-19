import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Moon, Sun, GraduationCap, BookOpen, Newspaper, Award, Calendar, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo-DqKjAScw.png';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  const navigation = {
    courses: [
      { 
        title: "Foundation Programs", 
        icon: GraduationCap,
        links: [
          { name: "GS Foundation (Prelims + Mains)", path: "/courses/gs-foundation", desc: "Complete 12-month comprehensive program" },
          { name: "CSAT Special Batch", path: "/courses/csat", desc: "Master aptitude for Prelims" }
        ]
      },
      { 
        title: "Advanced Modules", 
        icon: BookOpen,
        links: [
          { name: "Optional Subjects", path: "/courses/optional", desc: "History, PSIR, Geography & Sociology" },
          { name: "Interview Guidance", path: "/courses/interview", desc: "Personality development & mock interviews" }
        ]
      },
      { 
        title: "Test Series", 
        icon: Award,
        links: [
          { name: "Prelims Test Series", path: "/test-series/prelims", desc: "50+ Tests with AI analysis" },
          { name: "Mains Test Series", path: "/test-series/mains", desc: "Expert feedback on answer writing" }
        ]
      }
    ],
    resources: [
      {
        title: "Daily Preparation",
        icon: Newspaper,
        links: [
          { name: "Daily Current Affairs", path: "/resources/current-affairs" },
          { name: "Editorial Analysis", path: "/resources/editorial" },
          { name: "Daily UPSC Quiz", path: "/daily-quiz" }
        ]
      },
      {
        title: "Study Material",
        icon: Calendar,
        links: [
          { name: "UPSC Syllabus", path: "/resources/syllabus" },
          { name: "Previous Year Papers", path: "/resources/pyq" },
          { name: "Resource Library", path: "/resource-library" }
        ]
      }
    ]
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl shadow-lg h-[80px]' : 'bg-white dark:bg-black h-[90px] border-b border-red-50 dark:border-zinc-900'}`}>
      <div className="flex items-center justify-between h-full px-6 lg:px-12 max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group shrink-0">
          <img src={logoImg} alt="Gurukul Logo" className="h-12 w-auto transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <h1 className="text-red-900 dark:text-white text-xl md:text-2xl font-black tracking-tighter leading-none">GURUKUL <span className="text-red-600 font-medium tracking-normal">IAS</span></h1>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold mt-0.5">Nurturing Leaders</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex items-center space-x-1">
          <Link to="/" className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-zinc-900 transition-all">Home</Link>
          
          {/* Mega Menu Toggle: Courses */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('courses')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-xl transition-all ${activeMegaMenu === 'courses' ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-zinc-900' : 'text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-zinc-900'}`}>
              Courses <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === 'courses' ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Mega Menu: Courses Content */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[800px] transition-all duration-300 ${activeMegaMenu === 'courses' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
              <div className="bg-white dark:bg-zinc-900 border border-red-50 dark:border-zinc-800 rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-3 p-8 gap-8">
                {navigation.courses.map((section) => (
                  <div key={section.title}>
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-zinc-800 flex items-center justify-center text-red-600 dark:text-red-400">
                        <section.icon size={18} />
                      </div>
                      <h4 className="font-black text-red-900 dark:text-white text-sm uppercase tracking-widest">{section.title}</h4>
                    </div>
                    <div className="space-y-4">
                      {section.links.map((link) => (
                        <Link key={link.name} to={link.path} className="group block">
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors mb-0.5">{link.name}</p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight line-clamp-1">{link.desc}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mega Menu Toggle: Resources */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveMegaMenu('resources')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-bold rounded-xl transition-all ${activeMegaMenu === 'resources' ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-zinc-900' : 'text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-zinc-900'}`}>
              Resources <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[600px] transition-all duration-300 ${activeMegaMenu === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}`}>
              <div className="bg-white dark:bg-zinc-900 border border-red-50 dark:border-zinc-800 rounded-[32px] shadow-2xl overflow-hidden grid grid-cols-2 p-8 gap-8">
                {navigation.resources.map((section) => (
                  <div key={section.title}>
                    <div className="flex items-center gap-2 mb-6 text-red-900 dark:text-white uppercase tracking-widest text-sm font-black">
                      <section.icon size={18} className="text-red-600" /> {section.title}
                    </div>
                    <div className="space-y-4">
                      {section.links.map((link) => (
                        <Link key={link.name} to={link.path} className="flex items-center justify-between group">
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 transition-all">{link.name}</span>
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link to="/results" className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-zinc-900 transition-all">Results</Link>
          <Link to="/about/why-us" className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-zinc-900 transition-all">About</Link>
          <Link to="/contact" className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 rounded-xl hover:bg-red-50 dark:hover:bg-zinc-900 transition-all">Contact</Link>
        </div>

        {/* Right Side Tools */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-zinc-700 transition-all"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className="hidden sm:flex w-10 h-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-zinc-700 transition-all">
            <Search size={20} />
          </button>

          <Link to="/admission-form" className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-red-600/20 active:scale-95 transition-all ml-2">
            Enroll Now
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 top-[80px] bg-white dark:bg-black z-40 transition-all duration-500 ease-in-out overflow-y-auto ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        <div className="p-6 space-y-8 pb-32">
          {/* Mobile Search */}
          <div className="relative">
            <input type="text" placeholder="Search courses, resources..." className="w-full bg-slate-100 dark:bg-zinc-800 border-none rounded-2xl py-4 pl-12 pr-6 text-sm font-bold focus:ring-2 focus:ring-red-600 dark:text-white" />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          </div>

          {/* Mobile Links */}
          <div className="space-y-6">
             <Link to="/" className="block text-2xl font-black text-red-900 dark:text-white">Home</Link>
             
             <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-4">UPSC Programs</h4>
               <div className="space-y-4 pl-4 border-l-2 border-slate-100 dark:border-zinc-800">
                  <Link to="/courses/gs-foundation" className="block text-lg font-bold text-slate-700 dark:text-slate-200">GS Foundation</Link>
                  <Link to="/courses/optional" className="block text-lg font-bold text-slate-700 dark:text-slate-200">Optional Subjects</Link>
                  <Link to="/test-series/prelims" className="block text-lg font-bold text-slate-700 dark:text-slate-200">Test Series</Link>
               </div>
             </div>

             <div>
               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-4">Study Tools</h4>
               <div className="space-y-4 pl-4 border-l-2 border-slate-100 dark:border-zinc-800">
                  <Link to="/resources/current-affairs" className="block text-lg font-bold text-slate-700 dark:text-slate-200">Current Affairs</Link>
                  <Link to="/daily-quiz" className="block text-lg font-bold text-slate-700 dark:text-slate-200">Daily UPSC Quiz</Link>
                  <Link to="/resource-library" className="block text-lg font-bold text-slate-700 dark:text-slate-200">Free Downloads</Link>
               </div>
             </div>

             <Link to="/results" className="block text-2xl font-black text-red-900 dark:text-white">Toppers List</Link>
             <Link to="/contact" className="block text-2xl font-black text-red-900 dark:text-white">Contact Us</Link>
          </div>

          <div className="pt-8 border-t border-slate-100 dark:border-zinc-800">
            <Link to="/admission-form" className="block w-full bg-red-600 text-white text-center py-5 rounded-2xl font-black text-lg shadow-xl shadow-red-600/20">
              Start Your Journey
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
