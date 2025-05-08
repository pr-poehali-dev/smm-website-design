
import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Process = () => {
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

  const steps = [
    {
      icon: 'FileContract',
      title: 'Подписание договора',
      description: 'Официальное начало сотрудничества. Мы обсуждаем все детали проекта, согласовываем условия и подписываем договор.'
    },
    {
      icon: 'Search',
      title: 'Карты смыслов и аналитика',
      description: 'Мы анализируем вашу целевую аудиторию, изучаем конкурентов и создаем карту смыслов, которая станет основой стратегии.'
    },
    {
      icon: 'FileOutput',
      title: 'Результаты аналитики',
      description: 'Представляем вам детальные результаты нашего анализа и предлагаем стратегию упаковки аккаунта (до и после).'
    },
    {
      icon: 'Calendar',
      title: 'Создание контент-плана',
      description: 'Разрабатываем детальный контент-план на основе проведенной аналитики, с учетом целей и особенностей вашего бренда.'
    },
    {
      icon: 'Camera',
      title: 'Организация и проведение съёмок',
      description: 'Организуем профессиональные фото и видеосъемки для создания качественного и вовлекающего контента.'
    },
    {
      icon: 'Rocket',
      title: 'Запуск и стабильный постинг',
      description: 'Запускаем вашу обновленную стратегию присутствия в социальных сетях и обеспечиваем регулярный постинг контента.'
    }
  ];

  return (
    <section id="process" className="section py-20 bg-agency-light dark:bg-agency-dark/90">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-agency-dark dark:text-white">
            <span className="gradient-text">Как мы работаем</span>
          </h2>
          <p className="text-agency-dark/70 dark:text-white/70 text-lg">
            Наш проверенный подход к созданию успешных SMM-стратегий основан на тщательном анализе,
            креативных решениях и постоянной оптимизации.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`process-step flex items-start gap-6 mb-12 reveal-on-scroll ${
                index % 2 === 0 ? 'md:ml-0' : 'md:ml-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-agency-accent flex items-center justify-center z-10">
                <Icon name={step.icon} className="text-white" size={20} />
              </div>
              
              <Card className="flex-grow bg-white dark:bg-agency-dark shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-agency-dark dark:text-white">
                    Этап {index + 1}: {step.title}
                  </h3>
                  <p className="text-agency-dark/70 dark:text-white/70">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-20 text-center reveal-on-scroll">
          <div className="p-6 md:p-10 bg-white dark:bg-agency-dark rounded-xl shadow-sm border border-agency-accent/10">
            <Icon name="Award" className="text-agency-accent mb-4 mx-auto" size={40} />
            <h3 className="font-playfair text-2xl font-bold mb-3 text-agency-dark dark:text-white">
              Гарантия результата
            </h3>
            <p className="text-agency-dark/70 dark:text-white/70 mb-6">
              Мы гарантируем рост ключевых метрик вашего аккаунта в течение первых 60 дней сотрудничества.
              Если заданные KPI не будут достигнуты, мы предоставим дополнительный месяц обслуживания бесплатно.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="px-4 py-2 bg-agency-accent/10 rounded-full">
                <span className="text-agency-accent font-medium">Рост охватов на 30-50%</span>
              </div>
              <div className="px-4 py-2 bg-agency-accent/10 rounded-full">
                <span className="text-agency-accent font-medium">Увеличение вовлеченности на 25%</span>
              </div>
              <div className="px-4 py-2 bg-agency-accent/10 rounded-full">
                <span className="text-agency-accent font-medium">Прирост целевой аудитории</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
