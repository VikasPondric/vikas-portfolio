'use client';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Download, Sparkles } from 'lucide-react';
import Image from 'next/image';

const ROLES = ['Frontend Developer', 'Creative Web Developer', 'WordPress Expert', 'Interactive Designer'];

export default function Hero() {
  const [i, setI] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('type');

  useEffect(() => {
    const current = ROLES[i];
    let t;
    if (phase === 'type') {
      if (text.length < current.length) t = setTimeout(() => setText(current.slice(0, text.length + 1)), 60);
      else t = setTimeout(() => setPhase('hold'), 1400);
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('erase'), 400);
    } else if (phase === 'erase') {
      if (text.length > 0) t = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      else { setPhase('type'); setI((i + 1) % ROLES.length); }
    }
    return () => clearTimeout(t);
  }, [text, phase, i]);

  // Tilt image
  const ref = useRef(null);
  const mx = useMotionValue(0); const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 15 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 15 });

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <section id="home" className="relative min-h-[100svh] pt-32 md:pt-40 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[600px] bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl" style={{ background: 'radial-gradient(ellipse at center, hsl(var(--accent) / 0.15) 0%, transparent 60%)' }} />

      <div className="container mx-auto max-w-7xl px-6 relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest font-mono">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for freelance — June 2025
            </motion.div>

            <div className="space-y-2">
              <SplitText text="Vikas" delay={0.1} />
              <SplitText text="Pondric." delay={0.35} accent />
            </div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-3 pt-2">
              <span className="font-serif-italic text-2xl md:text-4xl text-muted-foreground">I'm a </span>
              <span className="font-display text-2xl md:text-4xl font-semibold tracking-tight">
                {text}<span className="inline-block w-[3px] h-6 md:h-9 bg-accent align-middle ml-1 animate-pulse" />
              </span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I craft <span className="text-foreground">interactive, high-performing web experiences</span> — turning bold ideas into pixel-perfect, motion-rich interfaces.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-2">
              <MagneticButton href="#projects" primary>
                <span>View My Work</span> <ArrowUpRight size={18} />
              </MagneticButton>
              <MagneticButton href="#contact">
                <Sparkles size={16} /> <span>Hire Me</span>
              </MagneticButton>
              <MagneticButton href="#resume">
                <Download size={16} /> <span>Download CV</span>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
              initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
              className="relative aspect-[3/4] rounded-3xl overflow-hidden"
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-accent/40 via-transparent to-purple-500/30 blur-3xl opacity-60" />
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/60 glass">
                <Image
                  src="https://images.unsplash.com/photo-1598869743357-2692002eb905?q=80&w=1200&auto=format&fit=crop"
                  alt="Vikas Pondric"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Based in</p>
                    <p className="font-display text-xl font-semibold">India — Remote</p>
                  </div>
                  <div className="w-10 h-10 rounded-full glass flex items-center justify-center"><ArrowUpRight size={16} /></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="absolute -top-4 -left-4 glass rounded-2xl p-3 floating" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Latest</p>
              <p className="font-display text-sm font-semibold">Awwwards Nominee</p>
            </motion.div>
            <motion.div className="absolute -bottom-4 -right-4 glass rounded-2xl p-3 floating" style={{ animationDelay: '2s' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.55 }}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Clients</p>
              <p className="font-display text-sm font-semibold">40+ Delivered</p>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <span>Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-foreground to-transparent" />
      </motion.div>
    </section>
  );
}

function SplitText({ text, delay = 0, accent = false }) {
  return (
    <h1 className="font-display text-[15vw] md:text-[10vw] lg:text-[9rem] leading-[0.9] font-bold tracking-tighter">
      {text.split('').map((ch, i) => (
        <motion.span key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: delay + i * 0.04, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block ${accent ? 'gradient-text' : ''}`}
        >
          {ch === ' ' ? '\u00a0' : ch}
        </motion.span>
      ))}
    </h1>
  );
}

function MagneticButton({ children, href, primary }) {
  const ref = useRef(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.35);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave} style={{ x: sx, y: sy }}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors border ${primary ? 'bg-foreground text-background border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent' : 'glass hover:bg-foreground hover:text-background'}`}
    >{children}</motion.a>
  );
}
