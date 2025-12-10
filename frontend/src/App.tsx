import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Layout } from './components/Layout';
import ScrollToTop from './components/Common/ScrollToTop';
import { PageLoader } from './components/shared';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App
