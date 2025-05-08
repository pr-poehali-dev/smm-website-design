
import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-on-scroll');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('is-revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="section py-20 bg-white dark:bg-agency-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-agency-dark dark:text-white">
            Почему мы — <span className="gradient-text">ваш идеальный партнер</span>
          </h2>
          <p className="text-agency-dark/70 dark:text-white/70 text-lg">
            Мы объединяем креативность с аналитическими данными, чтобы создавать не просто красивые аккаунты,
            а инструменты продаж, которые действительно работают на бизнес.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-white to-agency-light dark:from-agency-dark dark:to-agency-dark border border-agency-accent/10 reveal-on-scroll">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-agency-accent/10 flex items-center justify-center mb-4">
                <Icon name="PieChart" className="text-agency-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-agency-dark dark:text-white">Аналитический подход</h3>
              <p className="text-agency-dark/70 dark:text-white/70">
                Мы начинаем с детального исследования вашей аудитории, конкурентов и рынка,
                чтобы создать точную стратегию, которая приведет к росту.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-agency-light dark:from-agency-dark dark:to-agency-dark border border-agency-accent/10 reveal-on-scroll [animation-delay:200ms]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-agency-accent/10 flex items-center justify-center mb-4">
                <Icon name="Palette" className="text-agency-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-agency-dark dark:text-white">Эстетика бренда</h3>
              <p className="text-agency-dark/70 dark:text-white/70">
                Мы создаем уникальные визуальные решения, которые выделяют ваш бренд
                и вызывают у аудитории желание взаимодействовать.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-white to-agency-light dark:from-agency-dark dark:to-agency-dark border border-agency-accent/10 reveal-on-scroll [animation-delay:400ms]">
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-agency-accent/10 flex items-center justify-center mb-4">
                <Icon name="BarChart" className="text-agency-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-agency-dark dark:text-white">Измеримые результаты</h3>
              <p className="text-agency-dark/70 dark:text-white/70">
                Мы фокусируемся не просто на лайках и подписчиках, а на метриках, 
                которые напрямую влияют на ваш бизнес и продажи.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-20 bg-agency-light dark:bg-agency-dark/50 rounded-2xl p-8 md:p-12 reveal-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-agency-dark dark:text-white">
                Мы специализируемся на создании
                <span className="gradient-text block mt-1">стратегий, которые конвертируют</span>
              </h3>
              <p className="text-agency-dark/70 dark:text-white/70 mb-6">
                Наша команда экспертов по SMM объединяет креативность с данными, чтобы создавать
                мощные стратегии присутствия в социальных сетях, которые привлекают внимание,
                повышают узнаваемость бренда и, самое главное, приводят к конверсиям.
              </p>
              
              <ul className="space-y-2">
                {[
                  'Стратегия SMM, ориентированная на результат',
                  'Создание и курирование контента',
                  'Профессиональные фото и видеосъемки',
                  'Управление сообществом и комьюнити',
                  'Аналитика и оптимизация кампаний'
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="CheckCircle" className="text-agency-accent mt-1 shrink-0" size={18} />
                    <span className="text-agency-dark dark:text-white">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-lg md:translate-y-4 md:-translate-x-4">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                  alt="Команда за работой" 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-0 right-0 -mt-6 -mr-6 bg-agency-pastel rounded-lg p-5 shadow-lg hidden md:block">
                <Icon name="TrendingUp" className="text-agency-accent" size={32} />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-agency-dark rounded-lg p-4 shadow-lg hidden md:block">
                <div className="text-xl font-bold text-agency-accent">+127%</div>
                <div className="text-xs text-agency-dark/70 dark:text-white/70">Средний рост охватов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
