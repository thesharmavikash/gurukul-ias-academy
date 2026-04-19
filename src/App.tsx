import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import StickyMobileCTA from './components/StickyMobileCTA';

// Shared Components
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
    <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const GSFoundation = lazy(() => import('./pages/Courses/GSFoundation'));
const OptionalSubjects = lazy(() => import('./pages/Courses/OptionalSubjects'));
const CSAT = lazy(() => import('./pages/Courses/CSAT'));
const Interview = lazy(() => import('./pages/Courses/Interview'));
const DailyCurrentAffairs = lazy(() => import('./pages/Resources/DailyCurrentAffairs'));
const Editorial = lazy(() => import('./pages/Resources/Editorial'));
const OurToppers = lazy(() => import('./pages/Results/OurToppers'));
const DirectorsMessage = lazy(() => import('./pages/About/DirectorsMessage'));
const WhyUs = lazy(() => import('./pages/About/WhyUs'));
const Faculty = lazy(() => import('./pages/About/Faculty'));
const Contact = lazy(() => import('./pages/Other/Contact'));
const NotFound = lazy(() => import('./pages/Other/NotFound'));
const AdmissionForm = lazy(() => import('./pages/Admissions/AdmissionForm'));
const DailyQuiz = lazy(() => import('./pages/Resources/DailyQuiz'));
const ResourceLibrary = lazy(() => import('./pages/Resources/ResourceLibrary'));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-white dark:bg-black text-slate-900 dark:text-slate-50 selection:bg-red-100 dark:selection:bg-red-900 selection:text-red-900 dark:selection:text-red-100">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
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
              <Route path="/daily-quiz" element={<DailyQuiz />} />
              <Route path="/resource-library" element={<ResourceLibrary />} />
              
              {/* Results */}
              <Route path="/results" element={<OurToppers />} />
              
              {/* About Us */}
              <Route path="/about/directors-message" element={<DirectorsMessage />} />
              <Route path="/about/why-us" element={<WhyUs />} />
              <Route path="/about/faculty" element={<Faculty />} />
              
              {/* Admission */}
              <Route path="/admission-form" element={<AdmissionForm />} />
              
              {/* Contact */}
              <Route path="/contact" element={<Contact />} />

              {/* Fallbacks */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingWhatsApp />
        <StickyMobileCTA />
      </div>
    </Router>
  );
}

export default App;
