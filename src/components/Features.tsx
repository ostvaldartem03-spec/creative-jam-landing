import { motion } from "framer-motion";
import NeuronsBackground from "./NeuronsBackground";
import TiltCard from "./TiltCard";
import { ArrowRight, BarChart3, Layers, Zap } from "lucide-react";

const features = [
  {
    id: "strategy",
    title: "Data-driven стратегии",
    description: "Строим фундамент на базе больших данных и глобальных бенчмарков. Наши алгоритмы обучены на кейсах-победителях «Каннских львов» и лучших мировых практиках.",
    icon: BarChart3,
    image: "/images/data-driven-orange.jpg",
    color: "text-orange-400",
    borderColor: "border-orange-500/30"
  },
  {
    id: "media",
    title: "Медиапланы",
    description: "Охватываем все каналы коммуникации. ИИ анализирует, где именно находится ваша аудитория, и строит омниканальный маршрут касаний с прогнозом эффективности.",
    icon: Layers,
    image: "/images/media-plan-orange.jpg",
    color: "text-amber-400",
    borderColor: "border-amber-500/30"
  },
  {
    id: "creative",
    title: "Креативные концепции",
    description: "От идеи до визуализации — за секунды. 9 ИИ-модулей работают в связке, чтобы выдать не просто текст, а готовые образы: слоганы, сценарии, референсы.",
    icon: Zap,
    image: "/images/creative-concept-orange.jpg",
    color: "text-red-400",
    borderColor: "border-red-500/30"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black relative overflow-hidden">
      <NeuronsBackground />
      <div className="container relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 uppercase tracking-tight">
            Полный цикл <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">рекламной кампании</span>
          </h2>
          <div className="h-1 w-24 bg-primary" />
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-none border ${feature.borderColor} bg-white/5 mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-2xl md:text-4xl font-bold font-heading mb-6 uppercase">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                  {feature.description}
                </p>
                
                <button className="group flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-white hover:text-primary transition-colors">
                  Подробнее <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <TiltCard className="relative aspect-video overflow-hidden border border-white/10 group">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white z-20" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white z-20" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white z-20" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white z-20" />
                  
                  <div className="absolute bottom-4 left-4 z-20 font-mono text-[10px] text-white/70 bg-black/50 px-2 py-1 backdrop-blur-sm">
                    SYS.MOD.0{index + 1} // ACTIVE
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
