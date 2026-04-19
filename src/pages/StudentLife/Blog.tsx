import React from 'react';
import PageHero from '../../components/PageHero';
import SEO from '../../components/SEO';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import p1 from '../../assets/pic1.jpg';
import p6 from '../../assets/pic6.jpg';
import p11 from '../../assets/pic11.jpg';

const Blog: React.FC = () => {
  const posts = [
    {
      title: "The Future of AI in Modern Classrooms",
      author: "Aditi Sharma",
      date: "April 15, 2024",
      readTime: "5 min",
      category: "Innovation",
      image: p1,
      excerpt: "How Gurukul is integrating humanoid robotics and interactive AI to redefine the learning experience for the next generation."
    },
    {
      title: "Lessons from the Annual Sports Meet",
      author: "Coach R.K. Singh",
      date: "March 28, 2024",
      readTime: "4 min",
      category: "Sports",
      image: p6,
      excerpt: "The value of teamwork, resilience, and discipline showcased by our students during this year's highly competitive sports events."
    },
    {
      title: "Creating a Sustainable Green Campus",
      author: "Green Club Members",
      date: "March 12, 2024",
      readTime: "6 min",
      category: "Environment",
      image: p11,
      excerpt: "Students take the lead in our new waste management and organic gardening initiatives to build an eco-friendly community."
    }
  ];

  return (
    <div className="bg-slate-50 pb-32">
      <SEO 
        title="Life at Gurukul | Student Blog" 
        description="Read stories, articles, and updates directly from the students and staff of Gurukul Vidyapeeth Hajipur. Experience our vibrant campus culture."
        keywords="School Blog, Student Articles, Gurukul Stories, Hajipur School Life"
      />
      <PageHero title="Life at Gurukul" breadcrumb=" > Student Life > Blog" />
      
      <div className="max-w-7xl mx-auto px-6 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-accent text-sm font-black uppercase tracking-[0.4em] mb-6">Our Stories</h2>
           <h3 className="text-4xl md:text-6xl font-black text-primary leading-tight uppercase tracking-tighter">
             The <span className="text-accent italic">Gurukul</span> Journal.
           </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {posts.map((post, i) => (
             <motion.article
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-100 hover:border-accent transition-all duration-500"
             >
                <div className="h-64 overflow-hidden relative">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                   <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-accent px-4 py-1.5 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-lg">
                      {post.category}
                   </div>
                </div>
                <div className="p-10">
                   <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                      <span className="flex items-center gap-1.5"><User size={12} className="text-accent" /> {post.author}</span>
                      <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                      <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                   </div>
                   <h4 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-accent transition-colors">{post.title}</h4>
                   <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                   </p>
                   <Link to="#" className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.2em] border-b-2 border-accent/20 hover:border-accent transition-all pb-1 group-hover:gap-3">
                      Read Full Entry <ArrowRight size={14} className="text-accent" />
                   </Link>
                </div>
             </motion.article>
           ))}
        </div>

        <div className="mt-24 bg-white p-12 rounded-[4rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center text-accent">
                 <BookOpen size={40} />
              </div>
              <div>
                 <h4 className="text-2xl font-black text-primary uppercase tracking-tighter">Submit Your Article</h4>
                 <p className="text-slate-500 font-medium">Have a story to share? We welcome contributions from all students and alumni.</p>
              </div>
           </div>
           <button className="bg-primary hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 transition-all active:scale-95">
              Contributor Guidelines
           </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
