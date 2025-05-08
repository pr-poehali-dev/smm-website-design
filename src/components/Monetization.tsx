
import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Monetization = () => {
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

  const monetizationStrategies = [
    {
      icon: 'Package',
      title: 'Продукты',
      description: 'Создание и продажа физических или цифровых продуктов напрямую через ваш блог или по ссылкам на маркетплейсы.',
      examples: ['Мерч с вашим брендом', 'Цифровые шаблоны', 'Продукты собственного производства'],
    },
    {
      icon: 'MessageCircle',
      title: 'Платные консультации',
      description: 'Предложите свою экспертизу подписчикам через индивидуальные или групповые консультации онлайн.',
      examples: ['Индивидуальный разбор', 'Групповые мастер-классы', 'VIP-сессии'],
    },
    {
      icon: 'BookOpen',
      title: 'Инфопродукты',
      description: 'Создавайте обучающие материалы, основанные на вашей экспертизе и опыте в определенной области.',
      examples: ['Онлайн-курсы', 'Электронные книги', 'Подписки на премиум-контент'],
    },
    {
      icon: 'Handshake',
      title: 'Коллаборации с брендами',
      description: 'Сотрудничество с брендами для продвижения их продуктов или услуг через ваш блог за вознаграждение.',
      examples: ['Спонсорские посты', 'Амбассадорство', 'Долгосрочные партнерства'],
    }
  ];

  return (
    <section id="monetization" className="section py-20 bg-agency-light dark:bg-agency-dark/90">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-agency-dark dark:text-white">
            Идеи <span className="gradient-text">монетизации блога</span>
          </h2>
          <p className="text-agency-dark/70 dark:text-white/70 text-lg">
            Мы поможем вам не только увеличить аудиторию, но и эффективно монетизировать ваше присутствие в социальных сетях.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {monetizationStrategies.map((strategy, index) => (
            <Card 
              key={index} 
              className="bg-white dark:bg-agency-dark border border-agency-accent/10 hover:border-agency-accent/30 transition-all duration-300 ease-in-out reveal-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-agency-accent/10 flex items-center justify-center mb-4">
                  <Icon name={strategy.icon} className="text-agency-accent" size={24} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-agency-dark dark:text-white">
                  {strategy.title}
                </h3>
                
                <p className="text-agency-dark/70 dark:text-white/70 mb-4">
                  {strategy.description}
                </p>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-agency-dark dark:text-white">Примеры:</p>
                  <ul className="space-y-1">
                    {strategy.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" className="text-agency-accent" size={16} />
                        <span className="text-agency-dark/80 dark:text-white/80">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 text-center reveal-on-scroll">
          <Card className="bg-white dark:bg-agency-dark border border-agency-accent/10">
            <CardContent className="p-8">
              <div className="w-16 h-16 rounded-full bg-agency-accent/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="Trophy" className="text-agency-accent" size={32} />
              </div>
              
              <h3 className="font-playfair text-2xl font-bold mb-4 text-agency-dark dark:text-white">
                Как мы помогаем с монетизацией
              </h3>
              
              <p className="text-agency-dark/70 dark:text-white/70 mb-6">
                Мы не только разрабатываем стратегию присутствия в социальных сетях, но и помогаем выбрать и внедрить наиболее подходящие для вашего бренда способы монетизации. Наша цель — превратить ваш аккаунт в стабильный источник дохода.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="px-4 py-2 bg-agency-accent/10 rounded-full">
                  <span className="text-agency-accent font-medium">Анализ потенциала монетизации</span>
                </div>
                <div className="px-4 py-2 bg-agency-accent/10 rounded-full">
                  <span className="text-agency-accent font-medium">Разработка стратегии</span>
                </div>
                <div className="px-4 py-2 bg-agency-accent/10 rounded-full">
                  <span className="text-agency-accent font-medium">Внедрение и оптимизация</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Monetization;
