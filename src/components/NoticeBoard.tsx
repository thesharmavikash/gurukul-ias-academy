import React from 'react';
import { Megaphone } from 'lucide-react';

const NoticeBoard: React.FC = () => {
  const notices = [
    "Admissions Open for Session 2024-25. Limited seats available!",
    "Congratulations to our Class 10 & 12 students for excellent board results!",
    "Gurukul Annual Sports Meet 2024 scheduled for December.",
    "New Robotics Lab inaugurated for collaborative learning."
  ];

  return (
    <div className="bg-red-700 text-white py-2 overflow-hidden border-b border-red-800 shadow-inner relative z-40">
      <div className="max-w-[1600px] mx-auto px-6 flex items-center">
        <div className="flex items-center gap-2 bg-red-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mr-4 flex-shrink-0 animate-pulse border border-red-500/30">
          <Megaphone size={14} />
          <span>Notice</span>
        </div>
        <div className="flex-grow overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee hover:pause whitespace-nowrap">
            {notices.map((notice, index) => (
              <span key={index} className="mx-8 text-sm font-medium tracking-wide">
                {notice}
              </span>
            ))}
            {/* Repeat for seamless loop */}
            {notices.map((notice, index) => (
              <span key={`dup-${index}`} className="mx-8 text-sm font-medium tracking-wide">
                {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
