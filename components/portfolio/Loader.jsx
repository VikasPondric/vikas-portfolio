'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf; const start = performance.now();
    const tick = (t) => {
      const elapsed = t - start;
      const p = Math.min(100, (elapsed / 1800) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => { setDone(true); setTimeout(() => onComplete?.(), 900); }, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center gap-10"
          >
            <div className="relative">
              <span className="font-display text-[120px] md:text-[200px] leading-none font-bold tracking-tighter gradient-text">VP</span>
              <span className="absolute -bottom-2 -right-4 w-4 h-4 rounded-full bg-accent animate-pulse" />
            </div>
            <div className="w-[300px] md:w-[420px] flex flex-col gap-3">
              <div className="h-[2px] w-full bg-muted overflow-hidden rounded-full">
                <motion.div className="h-full bg-foreground" style={{ width: `${progress}%` }} />
              </div>
              <div className="flex justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest">
                <span>Loading Experience</span>
                <span>{Math.floor(progress)}%</span>
              </div>
            </div>
            <p className="font-serif-italic text-lg md:text-xl text-muted-foreground">Crafted with obsession.</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
