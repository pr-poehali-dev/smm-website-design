
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import Monetization from '@/components/Monetization';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Process />
        <Cases />
        <Monetization />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button */}
      <HashLink 
        smooth 
        to="#top" 
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-agency-accent text-white flex items-center justify-center shadow-lg hover:bg-agency-accent/90 transition-colors z-40"
      >
        <Icon name="ChevronUp" size={20} />
      </HashLink>
    </div>
  );
};

export default Index;
