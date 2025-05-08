
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    loading: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, loading: true }));

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Заявка успешно отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        loading: false
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section py-20 bg-white dark:bg-agency-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-agency-light dark:bg-agency-dark/50 rounded-2xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 lg:p-16">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-agency-dark dark:text-white">
                  Готовы <span className="gradient-text">прокачать</span> ваш бренд?
                </h2>
                
                <p className="text-agency-dark/70 dark:text-white/70 mb-8">
                  Заполните форму, и наш менеджер свяжется с вами в течение 24 часов, чтобы обсудить ваш проект и ответить на все вопросы.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-agency-dark/70 dark:text-white/70 mb-2">
                        Ваше имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Иван Иванов"
                        className="bg-white/50 dark:bg-agency-dark/30"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-agency-dark/70 dark:text-white/70 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="ivan@example.com"
                        className="bg-white/50 dark:bg-agency-dark/30"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-agency-dark/70 dark:text-white/70 mb-2">
                        Телефон
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        className="bg-white/50 dark:bg-agency-dark/30"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-agency-dark/70 dark:text-white/70 mb-2">
                        Компания
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        placeholder="Название вашей компании"
                        className="bg-white/50 dark:bg-agency-dark/30"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-agency-dark/70 dark:text-white/70 mb-2">
                      Сообщение *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      placeholder="Расскажите о вашем проекте и задачах..."
                      className="bg-white/50 dark:bg-agency-dark/30 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" disabled={formState.loading}>
                    {formState.loading ? (
                      <>
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Отправка...
                      </>
                    ) : (
                      'Отправить заявку'
                    )}
                  </Button>
                </form>
              </div>
              
              <div className="bg-agency-accent p-8 md:p-12 lg:p-16 flex flex-col justify-between text-white">
                <div>
                  <h3 className="font-playfair text-2xl font-bold mb-6">Контактная информация</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="MapPin" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Адрес</p>
                        <p className="opacity-80">г. Москва, ул. Арбат, 1/9</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Phone" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Телефон</p>
                        <p className="opacity-80">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Mail" size={20} />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <p className="opacity-80">info@smm-promo.ru</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-medium mb-4">Мы в социальных сетях</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Icon name="Instagram" size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Icon name="Facebook" size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Icon name="Twitter" size={20} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Icon name="Linkedin" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
