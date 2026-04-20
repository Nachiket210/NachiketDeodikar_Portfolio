import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import PhotographyGallery from './components/PhotographyGallery';
import VideographyShowcase from './components/VideographyShowcase';
import MixedMediaCarousel from './components/MixedMediaCarousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WhatsAppWidget from './components/WhatsAppWidget';
import CallWidget from './components/CallWidget';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-black text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <WhatsAppWidget />
      <CallWidget />
      <Navbar />
      <Hero />
      <Services />
      <PhotographyGallery />
      <VideographyShowcase />
      <MixedMediaCarousel />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
