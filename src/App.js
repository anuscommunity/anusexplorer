import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import './App.css';
import Hero from './components/Hero';
import Evolution from './components/Evolution';
import Influence from './components/Influence';
import Innovators from './components/Innovators';
import Believe from './components/Believe';
import Footer from './components/Footer';
import BrownPaper from './components/BrownPaper'; 
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  const believeRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    const scrollToSectionFromHash = () => {
      const hash = window.location.hash;
      if (hash && believeRef.current && hash === "#how-to-buy") {
        setTimeout(() => {
          believeRef.current.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    };

    scrollToSectionFromHash();
    window.addEventListener('hashchange', scrollToSectionFromHash);

    return () => window.removeEventListener('hashchange', scrollToSectionFromHash);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero scrollToBelieve={() => believeRef.current?.scrollIntoView({ behavior: 'smooth' })} />
              <Evolution />
              <Influence />
              <Innovators />
              <Believe ref={believeRef} />
              <Footer />
            </>
          } />
          <Route path="/brownpaper" element={<BrownPaper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
