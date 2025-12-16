import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import NeuronsBackground from "./NeuronsBackground";
import TiltCard from "./TiltCard";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Freemium",
    tag: "(Бесплатно)",
    description: "Для знакомства с технологией. Попробуйте магию нейросетей без вложений",
    price: "0 ₽",
    period: "/ мес",
    features: [
      "Доступ к базовым шаблонам стратегий",
      "Ограниченный функционал генерации",
      "1 пользователь",
      "Идеально, чтобы: протестировать интерфейс и понять логику работы"
    ],
    buttonText: "Начать",
    isPopular: false
  },
  {
    name: "START",
    tag: "",
    description: "Для фрилансеров, стартапов и небольших команд. Мощный буст для регулярной работы",
    price: "4 900 ₽",
    period: "/ мес",
    features: [
      "Стратегии: До 30 в месяц (хватит на всех клиентов)",
      "Визуал: ~40 видео и 800+ изображений (Midjourney, Kling)",
      "Текст: Безлимитная генерация и работа со смыслами",
      "Доступ: 1 пользователь"
    ],
    buttonText: "Купить",
    isPopular: false
  },
  {
    name: "PRO",
    tag: "(Выбор агентств)",
    description: "Для digital-агентств и больших отделов маркетинга. Максимальная мощность без ограничений в качестве",
    price: "19 900 ₽",
    period: "/ мес",
    features: [
      "Стратегии: Безлимитно",
      "Топовые нейросети: Доступ к Sora, Veo, GPT-5, Claude Opus (по мере выхода)",
      "Безлимитный креатив: Видео и изображения в 4K (с улучшением Topaz)",
      "Команда: До 5 аккаунтов + приоритетная поддержка",
      "Приватность: Полная защита данных и IP"
    ],
    buttonText: "Купить",
    isPopular: true
  },
  {
    name: "Enterprise",
    tag: "",
    description: "Для крупных брендов с потребностью в кастомизации и интеграциях",
    price: "Индивидуально",
    period: "",
    features: [
      "Всё, что в тарифе Pro",
      "API доступ",
      "White Label отчеты",
      "Персональный менеджер",
      "Обучение команды",
      "SLA гарантии"
    ],
    buttonText: "Обсудить",
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <NeuronsBackground />
      <div className="container relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 uppercase tracking-tight">
            Выберите своего <span className="text-primary">AI-партнера</span>
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className={`relative flex flex-col p-8 border ${plan.isPopular ? 'border-primary bg-primary/5' : 'border-white/10 bg-white/5'} backdrop-blur-sm min-h-[600px] group hover:border-primary/50 transition-colors duration-300 h-full`}>
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-primary text-black text-xs font-bold font-mono uppercase px-3 py-1">
                  Best Choice
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold font-heading mb-1">
                  {plan.name} <span className="text-lg font-normal text-muted-foreground">{plan.tag}</span>
                </h3>
                <p className="text-sm text-muted-foreground font-light min-h-[60px]">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold font-heading text-white">{plan.price}</span>
                  <span className="text-sm text-muted-foreground font-mono">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                    <div className="w-4 h-4 rounded-sm bg-white flex items-center justify-center mt-0.5 shrink-0">
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full font-mono uppercase tracking-widest rounded-full h-12 ${
                  plan.isPopular 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-transparent border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {plan.buttonText}
              </Button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
