'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
  const x = useMotionValue(-100); const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 });
  const sy = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 });
  const [variant, setVariant] = useState('default');
  const [label, setLabel] = useState('');
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener('mousemove', move);

    const over = (e) => {
      const t = e.target;
      if (t.closest('[data-cursor="view"]')) { setVariant('view'); setLabel(t.closest('[data-cursor="view"]').getAttribute('data-label') || 'View'); }
      else if (t.closest('a, button, [role="button"], input, textarea')) { setVariant('hover'); setLabel(''); }
      else { setVariant('default'); setLabel(''); }
    };
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, [x, y]);

  if (!enabled) return null;
  const size = variant === 'view' ? 90 : variant === 'hover' ? 44 : 12;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full mix-blend-difference"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          animate={{ width: size, height: size }}
          transition={{ duration: 0.25, ease: [0.2, 0.9, 0.2, 1] }}
          className={`rounded-full flex items-center justify-center bg-white text-black font-medium text-[11px] uppercase tracking-widest`}
          style={{ boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
        >
          {label}
        </motion.div>
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-2 h-2 rounded-full bg-accent"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
}
