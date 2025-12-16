import { motion } from "framer-motion";
import NeuronsBackground from "./NeuronsBackground";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Анализ",
    description: "Нейросеть анализирует ваш бренд, конкурентов и целевую аудиторию, выявляя ключевые инсайты.",
    image: "/images/analysis-marketing.jpg"
  },
  {
    number: "02",
    title: "Стратегия",
    description: "Формируется data-driven стратегия продвижения с прогнозируемым результатом и KPI.",
    image: "/images/process-strategy.jpg"
  },
  {
    number: "03",
    title: "Креатив",
    description: "Генерация сотен вариантов визуалов и текстов, идеально попадающих в боли аудитории.",
    image: "/images/creative-marketing.jpg"
  },
  {
    number: "04",
    title: "Запуск",
    description: "Автоматическая подготовка материалов к публикации и интеграция с рекламными кабинетами.",
    image: "/images/launch-marketing.jpg"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      <NeuronsBackground />
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff45000a_1px,transparent_1px),linear-gradient(to_bottom,#ff45000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 uppercase tracking-tight">
            Как это <span className="text-primary">работает</span>
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Connector Line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[1px] bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}

              <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                {/* Image Area */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-black/80 backdrop-blur border border-primary/50 flex items-center justify-center">
                    <span className="text-primary font-mono font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-4 flex-grow">
                    {step.description}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-white/5 flex items-center text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>ПОДРОБНЕЕ</span>
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
