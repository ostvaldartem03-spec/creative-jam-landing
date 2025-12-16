import { motion } from "framer-motion";

export default function NeuronsBackground() {
  // Количество нейронов - небольшое, чтобы не засорять фон
  const neurons = [...Array(12)];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {neurons.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/20 blur-[1px]"
          style={{
            width: Math.random() * 4 + 2 + "px", // Размер от 2 до 6px
            height: Math.random() * 4 + 2 + "px",
            boxShadow: "0 0 8px rgba(255, 69, 0, 0.4)", // Оранжевое свечение
          }}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1, // Прозрачность от 0.1 до 0.4
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [
              Math.random() * 0.3 + 0.1,
              Math.random() * 0.5 + 0.2,
              Math.random() * 0.3 + 0.1,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 15, // Медленное движение (15-35 сек)
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Соединительные линии (опционально, очень тонкие и прозрачные) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
          </pattern>
        </defs>
        {/* <rect width="100%" height="100%" fill="url(#grid)" /> */}
      </svg>
    </div>
  );
}
