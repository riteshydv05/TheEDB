import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Common/ScrollToTop';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Alumni from './pages/Alumni';
import Canvas from './pages/Canvas';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/canvas" element={<Canvas />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App
