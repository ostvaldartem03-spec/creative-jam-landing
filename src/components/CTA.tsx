import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta-bg-orange.webp" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent" />
      </div>

      {/* Huge Bottom Text - Moved to Background Layer (z-0) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 leading-none flex justify-center items-end pointer-events-none">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[15vw] md:text-[18vw] font-bold font-heading text-transparent bg-clip-text bg-gradient-to-t from-white/20 to-white/5 text-center tracking-tighter whitespace-nowrap select-none translate-y-[15%]"
        >
          Creative Jam
        </motion.h1>
      </div>

      {/* Animated Electrons/Particles - Enhanced */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Horizontal Electrons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent w-32 shadow-[0_0_15px_#ff4500,0_0_30px_#ff4500]"
            style={{
              top: `${Math.random() * 100}%`,
              left: -200
            }}
            animate={{ 
              x: ["0vw", "120vw"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 1.5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Vertical Electrons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="absolute w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent h-32 shadow-[0_0_15px_#ff4500,0_0_30px_#ff4500]"
            style={{
              left: `${Math.random() * 100}%`,
              top: -200
            }}
            animate={{ 
              y: ["0vh", "120vh"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: Math.random() * 2 + 1.5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}


      </div>

      {/* Main Content - High Z-Index (z-20) to stay above text */}
      <div className="relative z-20 container text-center px-4 mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 tracking-tight drop-shadow-2xl"
        >
          Готовы ускорить
          <br />
          свой маркетинг?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light drop-shadow-lg"
        >
          Создайте первую стратегию бесплатно
          <br />
          или выберите полную мощность
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            onClick={() => {
              // Переход на Cannes Oracle
              const backendUrl = import.meta.env.VITE_BACKEND_URL || 'https://5000-i05s17mkvoa1kc1ntyvay-3d4d8d9d.manusvm.computer';
              window.location.href = backendUrl + '/oracle';
            }}
          >
            Попробовать <Plus className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
