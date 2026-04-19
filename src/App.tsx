import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoticeBoard from './components/NoticeBoard';
import WhatsAppWidget from './components/WhatsAppWidget';
import Home from './pages/Home';

// About Pages
import Mission from './pages/About/Mission';
import FactSheet from './pages/About/FactSheet';
import HajipurCampus from './pages/About/HajipurCampus';
import OurLeadership from './pages/About/Leadership';
import Faculty from './pages/About/Faculty';

// Academics Pages
import Curriculum from './pages/Academics/Curriculum';
import IBSSchoolHajipur from './pages/Academics/IBSHajipur';

// Admission Pages
import AdmissionProcess from './pages/Admissions/AdmissionProcess';
import FAQs from './pages/Admissions/FAQs';

// Boarding Pages
import BoardingSchedule from './pages/Boarding/BoardingSchedule';
import BestBoardingSchool from './pages/Boarding/BestBoarding';
import BoardingGallery from './pages/Boarding/BoardingGallery';

// Campus Pages
import VirtualTour from './pages/Campus/VirtualTour';
import EventsCalendar from './pages/Campus/EventsCalendar';

// Student Life Pages
import Blog from './pages/StudentLife/Blog';
import AchievementWall from './pages/StudentLife/AchievementWall';
import Alumni from './pages/StudentLife/Alumni';

// Beyond Academics Pages
import WholeEducation from './pages/BeyondAcademics/WholeEducation';

// Other Pages
import Contact from './pages/Other/Contact';
import Careers from './pages/Other/Careers';
import BookList from './pages/Other/BookList';
import Gallery from './pages/Other/Gallery';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-rose-100 selection:text-rose-900">
        <NoticeBoard />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About Us */}
            <Route path="/mission" element={<Mission />} />
            <Route path="/vision" element={<Mission />} />
            <Route path="/fact-sheet" element={<FactSheet />} />
            <Route path="/hajipur-campus" element={<HajipurCampus />} />
            <Route path="/leadership" element={<OurLeadership />} />
            <Route path="/faculty" element={<Faculty />} />
            
            {/* Admissions */}
            <Route path="/admission-process" element={<AdmissionProcess />} />
            <Route path="/enquiry-form" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            
            {/* Academics / Curriculum */}
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/curriculum/ibs-hajipur" element={<IBSSchoolHajipur />} />
            <Route path="/curriculum/school-hajipur" element={<Curriculum />} />
            
            {/* Boarding */}
            <Route path="/boarding/schedule" element={<BoardingSchedule />} />
            <Route path="/boarding" element={<BestBoardingSchool />} />
            <Route path="/boarding/best-boarding-hajipur" element={<BestBoardingSchool />} />
            <Route path="/boarding/gallery" element={<BoardingGallery />} />

            {/* Campus */}
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/events" element={<EventsCalendar />} />
            
            {/* Student Life */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/achievements" element={<AchievementWall />} />
            <Route path="/alumni" element={<Alumni />} />
            
            {/* Beyond Academics */}
            <Route path="/beyond-academics/whole-education" element={<WholeEducation />} />
            <Route path="/beyond-academics/collaborative-learning" element={<WholeEducation />} />
            <Route path="/beyond-academics/startup-you" element={<WholeEducation />} />
            <Route path="/beyond-academics/leadership" element={<WholeEducation />} />
            <Route path="/beyond-academics/training-research" element={<WholeEducation />} />
            <Route path="/beyond-academics/community-school" element={<WholeEducation />} />

            {/* Other */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booklist" element={<BookList />} />
          </Routes>
        </main>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
