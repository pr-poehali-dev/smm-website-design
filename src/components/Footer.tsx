import Icon from "@/components/ui/icon";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-agency-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <button
              onClick={() => scrollToSection("top")}
              className="flex items-center gap-2 mb-4"
            >
              <span className="font-playfair font-bold text-xl">
                <span className="text-agency-accent">SMM</span>Прокачка
              </span>
            </button>

            <p className="text-white/70 mb-6">
              Прокачиваем бренды через эстетику и аналитику, превращая
              социальные сети в эффективный инструмент продаж.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="Instagram" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="Facebook" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="Twitter" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Icon name="Linkedin" size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("top")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  О нас
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Как мы работаем
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("cases")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Кейсы
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("monetization")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Монетизация
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Контакты
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Стратегия SMM
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Ведение социальных сетей
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Создание контента
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Таргетированная реклама
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Фото и видеосъемка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Консультации и аудит
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Icon
                  name="MapPin"
                  className="text-agency-accent shrink-0 mt-1"
                  size={16}
                />
                <span className="text-white/70">г. Москва, ул. Арбат, 1/9</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Phone"
                  className="text-agency-accent shrink-0 mt-1"
                  size={16}
                />
                <span className="text-white/70">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Mail"
                  className="text-agency-accent shrink-0 mt-1"
                  size={16}
                />
                <span className="text-white/70">info@smm-promo.ru</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon
                  name="Clock"
                  className="text-agency-accent shrink-0 mt-1"
                  size={16}
                />
                <span className="text-white/70">Пн-Пт: 10:00 - 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SMMПрокачка. Все права защищены.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <a
              href="#"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Условия использования
            </a>
            <a
              href="#"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Карта сайта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
