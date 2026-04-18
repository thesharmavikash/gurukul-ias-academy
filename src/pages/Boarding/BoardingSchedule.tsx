import React from 'react';
import PageHero from '../../components/PageHero';
import Sidebar from '../../components/Sidebar';

const BoardingSchedule: React.FC = () => {
  const sidebarLinks = [
    { name: "Best Boarding School", path: "/boarding/best-boarding-hajipur" },
    { name: "Boarding Schedule", path: "/boarding/schedule" },
    { name: "Boarding Gallery", path: "/boarding/gallery" }
  ];

  const schedule = [
    { no: 1, time: "5:30", activity: "Rising Bell" },
    { no: 2, time: "5:30 - 6:15", activity: "Wash and Change" },
    { no: 3, time: "6:15 - 6:45", activity: "Morning Activity" },
    { no: 4, time: "6:45 - 7:30", activity: "Change, Shower and Get Ready for School" },
    { no: 5, time: "7:30 - 8:00", activity: "Breakfast" },
    { no: 6, time: "8:00 - 3:15", activity: "Students are in School" },
    { no: 7, time: "3:15 - 3:30", activity: "Students Return to Boarding" },
    { no: 8, time: "3:30 - 3:45", activity: "Change for Sports" },
    { no: 9, time: "3:45 - 5:00", activity: "Sports" },
    { no: 10, time: "5:00 - 5:15", activity: "Tuck Shop / CCD" },
    { no: 11, time: "5:15 - 5:45", activity: "Snacks, Change and Shower" },
    { no: 12, time: "5:45 - 6:00", activity: "Students Leave Hostel for Prep" },
    { no: 13, time: "6:00 - 7:30", activity: "1st Study Hour" },
    { no: 14, time: "7:30 - 8:00", activity: "Dinner" },
    { no: 15, time: "8:00 - 8:30", activity: "Phone Calls as per Schedule" },
    { no: 16, time: "8:30 - 8:45", activity: "Free Time" },
    { no: 17, time: "8:45 - 10:00", activity: "Second Study Hour" },
    { no: 18, time: "10:00 - 10:30", activity: "Laptop Collection / Get Ready for Bed" },
    { no: 19, time: "10:30", activity: "Lights Off" }
  ];

  return (
    <div className="bg-white pb-20">
      <PageHero title="Boarding Schedule" breadcrumb=" > Boarding > Boarding Schedule" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mt-16">
        <aside className="lg:col-span-1">
          <Sidebar links={sidebarLinks} />
        </aside>
        
        <main className="lg:col-span-3">
          <h2 className="text-3xl font-bold text-red-700 mb-8 border-l-4 border-red-700 pl-4">
            Week Days Schedule (Monday to Friday)
          </h2>
          
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="p-5 font-bold uppercase tracking-wider text-sm">No</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-sm">Time</th>
                  <th className="p-5 font-bold uppercase tracking-wider text-sm">Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {schedule.map((item) => (
                  <tr key={item.no} className="hover:bg-red-50/50 transition-colors group">
                    <td className="p-5 text-gray-500 font-medium group-hover:text-red-700">{item.no}</td>
                    <td className="p-5 text-gray-900 font-semibold">{item.time}</td>
                    <td className="p-5 text-gray-700">{item.activity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-3xl border border-gray-100 flex items-start gap-4">
            <div className="bg-red-700 text-white p-3 rounded-2xl shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">Schedule Note</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                The above schedule is strictly followed to instill discipline and ensure students have a balanced day covering academics, sports, and rest. Weekend schedules vary and include specialized activities and leisure time.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BoardingSchedule;
