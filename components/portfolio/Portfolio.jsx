'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Loader from './Loader';
import SmoothScroll from './SmoothScroll';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Projects from './Projects';
import Process from './Process';
import Testimonials from './Testimonials';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import MarqueeStrip from './MarqueeStrip';

const ParticlesBg = dynamic(() => import('./ParticlesBg'), { ssr: false });

export default function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) document.body.style.overflow = '';
    else document.body.style.overflow = 'hidden';
  }, [loaded]);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticlesBg />
      <div className="noise-bg" aria-hidden />
      {loaded && (
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <MarqueeStrip />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Process />
            <Testimonials />
            <Resume />
            <Contact />
            <Footer />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
