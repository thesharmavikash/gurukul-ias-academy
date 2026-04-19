import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { Calendar as CalendarIcon, Clock, MapPin, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const EventsCalendar: React.FC = () => {
  const events = [
    {
      date: "25",
      month: "APR",
      title: "Annual Science Exhibition",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      category: "Academic",
      desc: "A showcase of innovative projects and experiments by students across all grades."
    },
    {
      date: "12",
      month: "MAY",
      title: "Investiture Ceremony 2024",
      time: "09:30 AM",
      location: "Assembly Grounds",
      category: "Leadership",
      desc: "Official swearing-in of the new student council and house captains."
    },
    {
      date: "05",
      month: "JUN",
      title: "World Environment Day Drive",
      time: "08:00 AM",
      location: "Hajipur City",
      category: "Community",
      desc: "Tree plantation and plastic awareness drive in collaboration with local NGOs."
    }
  ];

  return (
    <div className="bg-slate-50 pb-32">
      <SEO 
        title="Events Calendar | Important Dates" 
        description="Stay updated with the academic and cultural calendar of Gurukul Vidyapeeth Hajipur. Never miss an important school event or deadline."
        keywords="School Calendar, Important Dates, Hajipur School Events, Gurukul Schedule"
      />
      <PageHero title="Events Calendar" breadcrumb=" > Campus > Events" />
      
      <div className="max-w-5xl mx-auto px-6 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div className="max-w-xl">
              <h2 className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-6">Stay Updated</h2>
              <h3 className="text-4xl md:text-6xl font-black text-primary leading-tight uppercase tracking-tighter">
                Mark Your <span className="text-accent italic">Calendar</span>.
              </h3>
           </div>
           <button className="bg-white border-2 border-slate-200 text-slate-400 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:border-accent hover:text-accent transition-all">
              Download PDF Version
           </button>
        </div>

        <div className="space-y-8">
           {events.map((event, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row overflow-hidden group hover:border-accent transition-all duration-500"
             >
                <div className="md:w-40 bg-primary text-white flex flex-col items-center justify-center py-10 md:py-0 group-hover:bg-accent transition-colors duration-500">
                   <span className="text-5xl font-black leading-none">{event.date}</span>
                   <span className="text-xs font-black uppercase tracking-[0.3em] mt-2 opacity-60">{event.month}</span>
                </div>
                <div className="flex-grow p-10 md:p-12">
                   <div className="flex flex-wrap gap-4 mb-6">
                      <span className="inline-flex items-center gap-2 bg-slate-50 text-slate-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100">
                         <Tag size={12} className="text-accent" /> {event.category}
                      </span>
                      <span className="inline-flex items-center gap-2 text-slate-400 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
                         <Clock size={12} /> {event.time}
                      </span>
                      <span className="inline-flex items-center gap-2 text-slate-400 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest">
                         <MapPin size={12} /> {event.location}
                      </span>
                   </div>
                   <h4 className="text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors">{event.title}</h4>
                   <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">{event.desc}</p>
                </div>
                <div className="p-8 md:p-0 md:pr-12 flex items-center justify-center">
                   <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-accent group-hover:text-white transition-all duration-500 cursor-pointer">
                      <ArrowRight size={24} />
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-24 p-12 bg-zinc-950 rounded-[4rem] text-center border-b-8 border-accent shadow-3xl">
           <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">School Assembly Live</h3>
           <p className="text-zinc-500 font-medium mb-10 max-w-lg mx-auto">Can't attend in person? Join our major events and assemblies via our secure YouTube live stream.</p>
           <button className="bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-accent hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5">
              Watch Live Stream
           </button>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
