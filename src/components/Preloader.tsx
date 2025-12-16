import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        // Random increment for realistic feel
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="relative w-full max-w-md px-8">
            {/* System Boot Text */}
            <div className="font-mono text-xs text-primary/50 mb-8 space-y-1 h-24 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                <p>{'>'} INITIALIZING CORE SYSTEMS...</p>
                <p>{'>'} LOADING NEURAL NETWORKS...</p>
                <p>{'>'} CONNECTING TO CREATIVE JAM SERVERS...</p>
                <p>{'>'} OPTIMIZING ASSETS...</p>
                <p>{'>'} SYSTEM READY.</p>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="relative h-1 bg-white/10 w-full overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Percentage */}
            <div className="flex justify-between items-end mt-2">
              <h1 className="text-4xl font-bold font-heading text-white tracking-tighter">
                CREATIVE JAM
              </h1>
              <span className="font-mono text-4xl font-bold text-primary">
                {Math.min(progress, 100)}%
              </span>
            </div>
          </div>

          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ff45000a_1px,transparent_1px),linear-gradient(to_bottom,#ff45000a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[-1]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
