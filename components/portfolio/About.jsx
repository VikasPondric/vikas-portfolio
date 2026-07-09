'use client';
import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const STATS = [
  { value: 1, suffix: '+', label: 'Years Experience' },
  { value: 40, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 15, suffix: '+', label: 'Technologies' },
];

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const val = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(val, to, { duration: 2, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.floor(v) + suffix; } });
    return () => controls.stop();
  }, [inView, to, val, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 sticky top-32 self-start">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">— About</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold tracking-tighter leading-none">
              A little<br /><span className="font-serif-italic font-normal">about</span> me.
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-8">
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
              className="text-2xl md:text-4xl font-display font-medium tracking-tight leading-tight">
              I'm a frontend developer with a strong eye for <span className="font-serif-italic text-accent">design</span> and detail, turning creative ideas into interactive, high-performing web experiences.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              With 1+ years of freelance experience, I specialize in building responsive websites using HTML, CSS, JavaScript, SASS, Bootstrap, Tailwind CSS, WordPress, Elementor, Shopify and CMS platforms. I also transform Figma designs into pixel-perfect responsive websites.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I focus on performance, accessibility, clean UI, modern UX, and elegant interactions.
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-border/60">
              {STATS.map((s, i) => (
                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                  <div className="font-display text-5xl md:text-6xl font-bold tracking-tighter">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-widest font-mono text-muted-foreground">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
