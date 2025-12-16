import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay and Animation */}
      <motion.div 
        style={{ y: yBg, opacity: opacityBg }}
        className="absolute inset-0 z-0"
      >
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src="/images/cta-bg-orange.webp" 
          alt="AI Background" 
          className="w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e51a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </motion.div>

      {/* Floating Particles/Elements in Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%", 
            }}
            animate={{ 
              x: [null, Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%"],
            }}
            transition={{ 
              duration: Math.random() * 20 + 10, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary uppercase tracking-widest">AI-Powered Marketing Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6 glitch-text" data-text="CREATIVE JAM">
            CREATIVE JAM
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light leading-relaxed">
            Платформа на базе <span className="text-white font-medium">9 коллаборативных ИИ-ассистентов</span>, создающая data-driven стратегии, медиапланы и креативные концепции за секунды.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-none border border-primary/50 shadow-[0_0_20px_rgba(255,69,0,0.5)] font-mono uppercase tracking-widest h-14 px-8 text-sm">
              Создать стратегию
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/5 rounded-none font-mono uppercase tracking-widest h-14 px-8 text-sm backdrop-blur-sm">
              Как это работает
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-muted-foreground font-mono text-xs">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary" />
              <span>DATA-DRIVEN</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary" />
              <span>OMNICHANNEL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-primary" />
              <span>INSTANT RESULTS</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <motion.div 
            className="relative w-full aspect-square max-w-md mx-auto"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Abstract AI Visualization */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
            <img 
              src="/images/creative-jam-hero.webp" 
              alt="Creative Jam Energy" 
              className="relative z-10 w-full h-full object-cover rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)" }}
              loading="eager"
            />
            
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-md border border-primary/30 p-4 rounded-none z-20 shadow-lg max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-xs font-mono text-white">ANALYSIS COMPLETE</span>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[92%]" />
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -bottom-8 -left-8 bg-black/80 backdrop-blur-md border border-orange-500/30 p-4 rounded-none z-20 shadow-lg"
            >
              <div className="text-xs font-mono text-muted-foreground mb-1">ROI PREDICTION</div>
              <div className="text-2xl font-bold font-heading text-white">+342%</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
