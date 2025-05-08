
import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Cases = () => {
  const [activeTab, setActiveTab] = useState('all');
  
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

  // Mock data for charts
  const engagementData = [
    { name: 'Янв', До: 1200, После: 3500 },
    { name: 'Фев', До: 1400, После: 4500 },
    { name: 'Мар', До: 1500, После: 5200 },
    { name: 'Апр', До: 1300, После: 6000 },
    { name: 'Май', До: 1600, После: 6800 },
    { name: 'Июн', До: 1700, После: 7400 },
  ];

  const audienceData = [
    { name: 'Янв', Аудитория: 3000 },
    { name: 'Фев', Аудитория: 4500 },
    { name: 'Мар', Аудитория: 6500 },
    { name: 'Апр', Аудитория: 9000 },
    { name: 'Май', Аудитория: 12000 },
    { name: 'Июн', Аудитория: 15600 },
  ];

  const caseStudies = [
    {
      id: 'fashion',
      category: 'fashion',
      title: 'Модный бренд одежды',
      description: 'Ребрендинг аккаунта и стратегия контента привели к росту продаж через Instagram на 134% за 3 месяца.',
      stats: [
        { label: 'Рост охватов', value: '+213%' },
        { label: 'Рост аудитории', value: '+87%' },
        { label: 'Рост продаж', value: '+134%' },
      ],
      image: 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1887&auto=format&fit=crop'
    },
    {
      id: 'food',
      category: 'food',
      title: 'Сеть ресторанов',
      description: 'Новая контент-стратегия и оформление профиля увеличили количество бронирований столиков на 156%.',
      stats: [
        { label: 'Рост охватов', value: '+178%' },
        { label: 'Рост аудитории', value: '+103%' },
        { label: 'Рост бронирований', value: '+156%' },
      ],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'beauty',
      category: 'beauty',
      title: 'Косметический бренд',
      description: 'Комплексная SMM-стратегия помогла увеличить онлайн-продажи на 192% и привлечь новую аудиторию.',
      stats: [
        { label: 'Рост охватов', value: '+256%' },
        { label: 'Рост аудитории', value: '+124%' },
        { label: 'Рост продаж', value: '+192%' },
      ],
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2080&auto=format&fit=crop'
    }
  ];

  return (
    <section id="cases" className="section py-20 bg-white dark:bg-agency-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-agency-dark dark:text-white">
            Наши <span className="gradient-text">успешные кейсы</span>
          </h2>
          <p className="text-agency-dark/70 dark:text-white/70 text-lg">
            Ознакомьтесь с примерами нашей работы и результатами, которые мы помогли достичь нашим клиентам.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab('all')}>Все кейсы</TabsTrigger>
              <TabsTrigger value="fashion" onClick={() => setActiveTab('fashion')}>Мода</TabsTrigger>
              <TabsTrigger value="food" onClick={() => setActiveTab('food')}>Рестораны</TabsTrigger>
              <TabsTrigger value="beauty" onClick={() => setActiveTab('beauty')}>Красота</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={caseStudy.id}
                className="case-study-card bg-agency-light dark:bg-agency-dark/50 rounded-2xl overflow-hidden shadow-sm reveal-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="h-64 md:h-auto md:aspect-auto overflow-hidden">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-agency-accent/10 rounded-full text-agency-accent text-sm font-medium mb-4">
                      {caseStudy.category === 'fashion' && 'Модный бренд'}
                      {caseStudy.category === 'food' && 'Ресторанный бизнес'}
                      {caseStudy.category === 'beauty' && 'Индустрия красоты'}
                    </div>
                    
                    <h3 className="font-playfair text-2xl font-bold mb-3 text-agency-dark dark:text-white">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-agency-dark/70 dark:text-white/70 mb-6">
                      {caseStudy.description}
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {caseStudy.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-agency-accent">{stat.value}</div>
                          <div className="text-xs text-agency-dark/70 dark:text-white/70">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="flex items-center gap-2 text-agency-accent hover:text-agency-accent/80 transition-colors font-medium">
                      Подробнее о кейсе
                      <Icon name="ArrowRight" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
          
          {/* Individual tab content for each category */}
          {['fashion', 'food', 'beauty'].map((category) => (
            <TabsContent key={category} value={category}>
              {caseStudies
                .filter((cs) => cs.category === category)
                .map((caseStudy) => (
                  <div 
                    key={caseStudy.id}
                    className="case-study-card bg-agency-light dark:bg-agency-dark/50 rounded-2xl overflow-hidden shadow-sm reveal-on-scroll"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="h-64 md:h-auto md:aspect-auto overflow-hidden">
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="p-6 md:p-8 flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-agency-accent/10 rounded-full text-agency-accent text-sm font-medium mb-4">
                          {caseStudy.category === 'fashion' && 'Модный бренд'}
                          {caseStudy.category === 'food' && 'Ресторанный бизнес'}
                          {caseStudy.category === 'beauty' && 'Индустрия красоты'}
                        </div>
                        
                        <h3 className="font-playfair text-2xl font-bold mb-3 text-agency-dark dark:text-white">
                          {caseStudy.title}
                        </h3>
                        
                        <p className="text-agency-dark/70 dark:text-white/70 mb-6">
                          {caseStudy.description}
                        </p>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {caseStudy.stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-agency-accent">{stat.value}</div>
                              <div className="text-xs text-agency-dark/70 dark:text-white/70">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        
                        <button className="flex items-center gap-2 text-agency-accent hover:text-agency-accent/80 transition-colors font-medium">
                          Подробнее о кейсе
                          <Icon name="ArrowRight" size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-20 bg-white dark:bg-agency-dark/50 rounded-2xl p-8 max-w-5xl mx-auto shadow-sm reveal-on-scroll">
          <h3 className="font-playfair text-2xl font-bold mb-8 text-center text-agency-dark dark:text-white">
            Динамика роста показателей
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4 text-agency-dark dark:text-white">Рост охватов и вовлеченности</h4>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={engagementData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="До" stackId="a" fill="#D1D5DB" />
                      <Bar dataKey="После" stackId="a" fill="#5D5FEF" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-medium mb-4 text-agency-dark dark:text-white">Рост аудитории</h4>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={audienceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="Аудитория" stroke="#5D5FEF" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
