import React from 'react';
import { Megaphone } from 'lucide-react';

const NoticeBoard: React.FC = () => {
  const notices = [
    "New Batch for GS Foundation starting from 15th May 2024. Register Today!",
    "UPSC CSE 2023 Results Out: 15+ Students from Gurukul IAS cleared the exam.",
    "Free Seminar on 'How to Choose Optional' this Sunday at 10 AM.",
    "Daily Current Affairs & Editorial Analysis updated for today. Check Resources."
  ];

  return (
    <div className="bg-red-600 text-white py-2.5 overflow-hidden border-b border-red-700 shadow-lg relative z-40">
      <div className="max-w-[1600px] mx-auto px-6 flex items-center">
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest mr-6 flex-shrink-0 border border-white/10 shadow-sm">
          <Megaphone size={14} className="animate-bounce" />
          <span>Latest Updates</span>
        </div>
        <div className="flex-grow overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee hover:pause whitespace-nowrap">
            {notices.map((notice, index) => (
              <span key={index} className="mx-12 text-sm font-bold tracking-tight">
                {notice}
              </span>
            ))}
            {/* Repeat for seamless loop */}
            {notices.map((notice, index) => (
              <span key={`dup-${index}`} className="mx-12 text-sm font-bold tracking-tight">
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
