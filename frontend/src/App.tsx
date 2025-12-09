import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import ScrollToTop from './components/Common/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const Events = lazy(() => import('./pages/Events'));
const Publications = lazy(() => import('./pages/Publications'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Alumni = lazy(() => import('./pages/Alumni'));
const Canvas = lazy(() => import('./pages/Canvas'));
const AdminUpload = lazy(() => import('./pages/AdminUpload'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-accent-orange border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600 font-medium animate-pulse">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/team" element={<Team />} />
              <Route path="/events" element={<Events />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/canvas" element={<Canvas />} />
              <Route path="/admin/upload" element={<AdminUpload />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
