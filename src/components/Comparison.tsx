import { motion } from "framer-motion";
import NeuronsBackground from "./NeuronsBackground";
import { Check, DollarSign, Clock, Calendar, Users, TrendingUp } from "lucide-react";

const comparisonData = [
  {
    parameter: "Стоимость в месяц",
    icon: DollarSign,
    traditional: "$50,000-$200,000",
    creativeJam: "$900-$4,900",
    creativeJamSub: "До 98% экономии"
  },
  {
    parameter: "Время запуска",
    icon: Clock,
    traditional: "2-4 недели",
    creativeJam: "24 часа",
    creativeJamSub: "В 14-28 раз быстрее"
  },
  {
    parameter: "Доступность",
    icon: Calendar,
    traditional: "Пн-Пт, 9:00-18:00",
    creativeJam: "27/7/365",
    creativeJamSub: "Постоянная поддержка"
  },
  {
    parameter: "Специалисты",
    icon: Users,
    traditional: "5-15 человек",
    creativeJam: "AI-агентов",
    creativeJamSub: "Безграничный штат"
  },
  {
    parameter: "ROI",
    icon: TrendingUp,
    traditional: "50-150%",
    creativeJam: "300-800%",
    creativeJamSub: "В 2-5 раз выше"
  }
];

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-black relative overflow-hidden">
      <NeuronsBackground />
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 uppercase tracking-tight">
            Почему компании выбирают <span className="text-primary">Creative Jam</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl">
            Детальное сравнение с традиционными маркетинговыми агентствами
          </p>
          <div className="h-1 w-24 bg-primary mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Headers for Mobile/Tablet */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mb-4 font-mono text-sm uppercase tracking-wider text-muted-foreground">
            <div className="text-center">Традиционные агентства</div>
            <div className="text-center text-primary">Creative Jam</div>
          </div>

          {/* Table Structure */}
          <div className="lg:col-span-12 space-y-4">
            {/* Table Header (Desktop) */}
            <div className="hidden lg:grid grid-cols-12 gap-4 px-8 py-4 text-sm font-mono uppercase tracking-wider text-muted-foreground border-b border-white/10">
              <div className="col-span-4">Параметр</div>
              <div className="col-span-4">Традиционные агентства</div>
              <div className="col-span-4 text-primary">Платформа Creative Jam</div>
            </div>

            {/* Rows */}
            {comparisonData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 lg:px-8 lg:py-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-300 items-center group"
              >
                {/* Parameter */}
                <div className="col-span-1 lg:col-span-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-white">{item.parameter}</span>
                </div>

                {/* Traditional */}
                <div className="col-span-1 lg:col-span-4 flex items-center gap-3 pl-14 lg:pl-0 opacity-60 group-hover:opacity-80 transition-opacity">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-0.5 bg-white/50" />
                  </div>
                  <span className="text-base font-light">{item.traditional}</span>
                </div>

                {/* Creative Jam */}
                <div className="col-span-1 lg:col-span-4 flex items-center gap-3 pl-14 lg:pl-0 relative">
                  {/* Highlight Background for Creative Jam column */}
                  <div className="absolute inset-y-[-24px] -left-4 -right-4 bg-primary/5 rounded-xl opacity-0 lg:group-hover:opacity-100 transition-opacity -z-10" />
                  
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(255,69,0,0.4)]">
                    <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white group-hover:text-primary transition-colors">{item.creativeJam}</span>
                    <span className="text-xs text-muted-foreground font-mono">{item.creativeJamSub}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
