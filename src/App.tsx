import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Courses
import GSFoundation from './pages/Courses/GSFoundation';
import OptionalSubjects from './pages/Courses/OptionalSubjects';
import CSAT from './pages/Courses/CSAT';
import Interview from './pages/Courses/Interview';

// Resources
import DailyCurrentAffairs from './pages/Resources/DailyCurrentAffairs';
import Editorial from './pages/Resources/Editorial';

// Results
import OurToppers from './pages/Results/OurToppers';

// About
import DirectorsMessage from './pages/About/DirectorsMessage';
import WhyUs from './pages/About/WhyUs';
import Faculty from './pages/About/Faculty';

// Other
import Contact from './pages/Other/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Courses */}
            <Route path="/courses/gs-foundation" element={<GSFoundation />} />
            <Route path="/courses/optional" element={<OptionalSubjects />} />
            <Route path="/courses/csat" element={<CSAT />} />
            <Route path="/courses/interview" element={<Interview />} />
            
            {/* Resources */}
            <Route path="/resources/current-affairs" element={<DailyCurrentAffairs />} />
            <Route path="/resources/editorial" element={<Editorial />} />
            
            {/* Results */}
            <Route path="/results" element={<OurToppers />} />
            
            {/* About Us */}
            <Route path="/about/directors-message" element={<DirectorsMessage />} />
            <Route path="/about/why-us" element={<WhyUs />} />
            <Route path="/about/faculty" element={<Faculty />} />
            
            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* Fallbacks */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
