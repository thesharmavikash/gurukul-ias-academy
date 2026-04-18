import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  links: { name: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const location = useLocation();

  return (
    <div className="border border-slate-100 rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200/50 sticky top-[120px]">
      <div className="bg-slate-900 p-6">
        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Navigation</h4>
      </div>
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-8 py-5 border-b border-slate-50 last:border-0 transition-all duration-300 font-bold text-sm uppercase tracking-wider ${
              isActive 
                ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' 
                : 'bg-white text-slate-500 hover:bg-slate-50 hover:text-blue-600'
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
