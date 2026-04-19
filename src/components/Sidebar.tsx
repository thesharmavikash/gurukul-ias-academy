import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  links: { name: string; path: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  const location = useLocation();

  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm sticky top-[120px]">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.path}
            to={link.path}
            className={`block px-6 py-4 border-b border-gray-100 last:border-0 transition-all duration-300 font-medium ${
              isActive 
                ? 'bg-red-700 text-white shadow-inner' 
                : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-700'
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
