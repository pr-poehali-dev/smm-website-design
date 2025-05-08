
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-agency-dark/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <HashLink smooth to="#top" className="flex items-center gap-2">
          <span className="font-playfair font-bold text-lg md:text-xl text-agency-dark dark:text-white">
            <span className="text-agency-accent">SMM</span>Прокачка
          </span>
        </HashLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <HashLink 
            smooth to="#about" 
            className="text-sm font-medium text-agency-dark dark:text-white hover:text-agency-accent transition-colors"
          >
            О нас
          </HashLink>
          <HashLink 
            smooth to="#process" 
            className="text-sm font-medium text-agency-dark dark:text-white hover:text-agency-accent transition-colors"
          >
            Как мы работаем
          </HashLink>
          <HashLink 
            smooth to="#cases" 
            className="text-sm font-medium text-agency-dark dark:text-white hover:text-agency-accent transition-colors"
          >
            Кейсы
          </HashLink>
          <HashLink 
            smooth to="#monetization" 
            className="text-sm font-medium text-agency-dark dark:text-white hover:text-agency-accent transition-colors"
          >
            Монетизация
          </HashLink>
          <HashLink smooth to="#contact">
            <Button>Связаться</Button>
          </HashLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-agency-dark dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white dark:bg-agency-dark z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } pt-24 px-6`}
      >
        <nav className="flex flex-col space-y-6">
          <HashLink
            smooth to="#about"
            className="text-lg font-medium text-agency-dark dark:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            О нас
          </HashLink>
          <HashLink
            smooth to="#process"
            className="text-lg font-medium text-agency-dark dark:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Как мы работаем
          </HashLink>
          <HashLink
            smooth to="#cases"
            className="text-lg font-medium text-agency-dark dark:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Кейсы
          </HashLink>
          <HashLink
            smooth to="#monetization"
            className="text-lg font-medium text-agency-dark dark:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            Монетизация
          </HashLink>
          <HashLink 
            smooth to="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button className="w-full">Связаться</Button>
          </HashLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
