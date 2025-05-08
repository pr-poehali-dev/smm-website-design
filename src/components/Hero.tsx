
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation effect on page load
    const hero = heroRef.current;
    if (hero) {
      hero.classList.add("opacity-100", "translate-y-0");
    }

    // Cursor animation effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const xDecimal = mouseX / window.innerWidth;
      const yDecimal = mouseY / window.innerHeight;

      const maxX = 20;
      const maxY = 20;

      const panX = maxX * xDecimal - maxX / 2;
      const panY = maxY * yDecimal - maxY / 2;

      if (hero) {
        hero.animate(
          {
            transform: `translate(${-panX}px, ${-panY}px)`,
          },
          {
            duration: 4000,
            fill: "forwards",
            easing: "ease",
          }
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center animated-bg pt-16 overflow-hidden"
    >
      <div
        ref={heroRef}
        className="container mx-auto px-4 text-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-agency-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-agency-pastel/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto z-10 relative">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-agency-dark dark:text-white">
            Прокачиваем бренды через{" "}
            <span className="gradient-text">эстетику</span> и{" "}
            <span className="gradient-text">аналитику</span>
          </h1>

          <p className="text-lg md:text-xl text-agency-dark/80 dark:text-white/80 mb-8 max-w-2xl mx-auto">
            Мы создаем сильные визуальные бренды, увеличиваем охваты и
            конвертируем подписчиков в клиентов с помощью продуманных
            SMM-стратегий
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="gap-2"
              onClick={() => scrollToSection("cases")}
            >
              Наши кейсы
              <Icon name="ArrowRight" size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => scrollToSection("contact")}
            >
              Обсудить проект
              <Icon name="MessageSquare" size={18} />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 dark:bg-agency-dark/80 backdrop-blur-md p-4 rounded-lg shadow-sm animate-fade-in">
              <div className="text-3xl font-bold text-agency-accent mb-1">
                97%
              </div>
              <div className="text-sm text-agency-dark/70 dark:text-white/70">
                Довольных клиентов
              </div>
            </div>
            <div className="bg-white/80 dark:bg-agency-dark/80 backdrop-blur-md p-4 rounded-lg shadow-sm animate-fade-in [animation-delay:200ms]">
              <div className="text-3xl font-bold text-agency-accent mb-1">
                350+
              </div>
              <div className="text-sm text-agency-dark/70 dark:text-white/70">
                Успешных проектов
              </div>
            </div>
            <div className="bg-white/80 dark:bg-agency-dark/80 backdrop-blur-md p-4 rounded-lg shadow-sm animate-fade-in [animation-delay:400ms]">
              <div className="text-3xl font-bold text-agency-accent mb-1">
                5.4M
              </div>
              <div className="text-sm text-agency-dark/70 dark:text-white/70">
                Общий охват
              </div>
            </div>
            <div className="bg-white/80 dark:bg-agency-dark/80 backdrop-blur-md p-4 rounded-lg shadow-sm animate-fade-in [animation-delay:600ms]">
              <div className="text-3xl font-bold text-agency-accent mb-1">
                83%
              </div>
              <div className="text-sm text-agency-dark/70 dark:text-white/70">
                Рост продаж
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection("about")}>
          <Icon
            name="ChevronDown"
            className="text-agency-dark/50 dark:text-white/50"
            size={32}
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
