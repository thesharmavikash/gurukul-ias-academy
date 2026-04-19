import React from 'react';
import { Check, X, Info } from 'lucide-react';

const CourseComparison: React.FC = () => {
  const features = [
    { name: "Syllabus Coverage", gs: "Full Prelims + Mains", optional: "Subject Specific", test: "Self-Study Focused" },
    { name: "Live Classes", gs: true, optional: true, test: false },
    { name: "Personal Mentorship", gs: true, optional: true, test: "Group Only" },
    { name: "Study Material", gs: "Complete Set (24 Books)", optional: "Specialized Notes", test: "Solution Keys" },
    { name: "Answer Writing", gs: "Daily + Weekly", optional: "Weekly", test: "Bi-weekly" },
    { name: "Interview Prep", gs: true, optional: false, test: false },
    { name: "Validity", gs: "18 Months", optional: "6 Months", test: "Till Prelims" },
  ];

  return (
    <div className="overflow-x-auto pb-8">
      <table className="w-full text-left border-separate border-spacing-x-4 border-spacing-y-0">
        <thead>
          <tr>
            <th className="py-6 px-4 min-w-[200px]"></th>
            <th className="py-6 px-8 bg-red-600 rounded-t-[32px] text-white text-center min-w-[250px]">
               <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">Most Popular</p>
               <h4 className="text-xl font-black">GS Foundation</h4>
            </th>
            <th className="py-6 px-8 bg-slate-100 dark:bg-zinc-800 rounded-t-[32px] text-slate-900 dark:text-white text-center min-w-[250px]">
               <h4 className="text-xl font-black">Optional Special</h4>
            </th>
            <th className="py-6 px-8 bg-slate-100 dark:bg-zinc-800 rounded-t-[32px] text-slate-900 dark:text-white text-center min-w-[250px]">
               <h4 className="text-xl font-black">Test Series</h4>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm font-bold">
          {features.map((feature, i) => (
            <tr key={i} className="group">
              <td className="py-5 px-4 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-zinc-800 group-last:border-none">
                {feature.name}
              </td>
              <td className="py-5 px-8 text-center bg-red-50/50 dark:bg-red-900/10 border-b border-red-100 dark:border-red-900/20 group-last:rounded-b-[32px] group-last:border-none">
                {typeof feature.gs === 'boolean' ? (
                  feature.gs ? <Check className="mx-auto text-red-600" /> : <X className="mx-auto text-slate-300" />
                ) : (
                  <span className="text-red-900 dark:text-red-200">{feature.gs}</span>
                )}
              </td>
              <td className="py-5 px-8 text-center bg-slate-50/50 dark:bg-zinc-800/30 border-b border-slate-100 dark:border-zinc-800 group-last:rounded-b-[32px] group-last:border-none">
                {typeof feature.optional === 'boolean' ? (
                  feature.optional ? <Check className="mx-auto text-red-600" /> : <X className="mx-auto text-slate-300" />
                ) : (
                  <span className="text-slate-700 dark:text-slate-300">{feature.optional}</span>
                )}
              </td>
              <td className="py-5 px-8 text-center bg-slate-50/50 dark:bg-zinc-800/30 border-b border-slate-100 dark:border-zinc-800 group-last:rounded-b-[32px] group-last:border-none">
                {typeof feature.test === 'boolean' ? (
                  feature.test ? <Check className="mx-auto text-red-600" /> : <X className="mx-auto text-slate-300" />
                ) : (
                  <span className="text-slate-700 dark:text-slate-300">{feature.test}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="mt-8 flex items-center gap-2 text-slate-400 text-xs font-medium px-4">
        <Info size={14} /> Fees are subject to seasonal scholarship discounts. Contact counselor for final quote.
      </div>
    </div>
  );
};

export default CourseComparison;
