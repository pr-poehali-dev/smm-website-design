
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import Monetization from '@/components/Monetization';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top function for button
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-agency-accent text-white flex items-center justify-center shadow-lg hover:bg-agency-accent/90 transition-colors z-40"
      >
        <Icon name="ChevronUp" size={20} />
      </button>
    </div>
  );
};

export default Index;
